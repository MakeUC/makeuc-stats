import React, { useEffect, useState } from 'react';
import CountUp from 'react-countup';
import { useDownloadCanvas } from '../Providers/DownloadProvider';
import { useStats } from '../Providers/StatsProvider';
import { buildRaceChart, buildEducationLevelChart } from './charts';
import { Legend } from '../Layout/ChartLegend';

import { DownloadButton, GraphContainer, GraphTitle, StatText, TotalRegistrantText } from './StyledComponents';

export function TotalNum() {
  const { stats: { count } } = useStats();
  return (<TotalRegistrantText>
    Total registrants: <CountUp end={count} />
  </TotalRegistrantText>);
}

export function RaceChart() {
  const { stats: { ethnicities } } = useStats();
  const { download } = useDownloadCanvas();
  const id = `race-chart`;

  const [chart, setChart] = useState<Chart>();

  useEffect(() => {
    const ctx = document.getElementById(id);
    setChart(buildRaceChart(ctx as HTMLCanvasElement, ethnicities));
  }, [id, ethnicities]);

  return <GraphContainer>
    <div>
      <GraphTitle>Ethnicities</GraphTitle>
      <Legend chart={chart} />
    </div>
    <div>
      <canvas id={id} width="100%" height="100%" />
      <DownloadButton
        onClick={() => download(id, `MakeUC 2021 Ethnicity Chart`)}
      >Download</DownloadButton>
    </div>
  </GraphContainer>;
}

export function EducationLevelChart() {
  const { stats: { educationLevels } } = useStats();
  const { download } = useDownloadCanvas();
  const id = `edu-level-chart`;

  const [chart, setChart] = useState<Chart>();

  useEffect(() => {
    const ctx = document.getElementById(id);
    setChart(buildEducationLevelChart(ctx as HTMLCanvasElement, educationLevels));
  }, [id, educationLevels]);

  return <GraphContainer>
    <div>
      <GraphTitle>Education Levels</GraphTitle>
      <Legend chart={chart} />
    </div>
    <div>
      <canvas id={id} width="100%" height="100%" />
      <DownloadButton
        onClick={() => download(id, `MakeUC 2021 Education Level Chart`)}
      >Download</DownloadButton>
    </div>
  </GraphContainer>;
}
export function FemalesStat() {
  const { stats: { femalesPercent } } = useStats();

  return (
    <StatText>
      <CountUp delay={2} decimals={2} end={femalesPercent} />% <small>female attendance</small>
    </StatText>
  );
}
export function UniversityStat() {
  const { stats: { universityCount } } = useStats();

  // this isn't hackish at all
  return (
    <StatText>
      <CountUp delay={2} end={universityCount} /> <small>schools represented</small>
    </StatText>);
}
export function CountryStats() {
  const { stats: { countryCount } } = useStats();

  return (
    <StatText>
      <CountUp delay={2} end={countryCount} /> <small>countries represented</small>
    </StatText>);
}