import { FC, useMemo } from 'react';

import '../App.css';

export type LegendProps = {
    chart?: Chart;
};

export const Legend: FC<LegendProps> = ({ chart }) => {
    const colors = useMemo(() => (chart?.config?.data?.datasets ?? [])[0]?.backgroundColor as Chart.ChartColor[] ?? [], [chart]);
    const labels = useMemo(() => chart?.config?.data?.labels as string[] ?? [], [chart]);

    const renderedLabels = useMemo(() => labels.map((label, idx) => 
        <div key={idx} style={{color: (colors[idx]?.toString() ?? '#f1f1f1')}}>{label}</div>
    ), [colors, labels]);

    return (<div className="Legend">
        {renderedLabels}
    </div>);
}