import Chart from 'chart.js';
import 'chartjs-plugin-labels';

Chart.defaults.global.defaultFontFamily = `'Montserrat', 'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`;

const backgroundColor = [
  `#6247AA`, `#7251B5`, `#815AC0`, `#9163CB`, `#A06CD5`, `#B185DB`, `#C19EE0`, `#D2B7E5`, `#DAC3E8`
];

const chartOptions = {
  legend: {
    display: false,
  },
  tooltips: {
    callbacks:{
      label: (item: Chart.ChartTooltipItem, data: Chart.ChartData) => {
        const datasets = data?.datasets ?? [];
        const firstData = datasets[0].data as number[] ?? [];
        const numerator = firstData[item.index ?? 0];
        const denominator = (Object.entries((datasets[0] as any)?._meta ?? {2: {total: 1}}) as [string, any][])[0][1].total ?? 1;

        const labels = data.labels ?? [];

        const percentage =  ((numerator / denominator)*100).toFixed(2) ;
        return  `${labels[item.index ?? 0]}: ${percentage}%`;
      }
    }
  },
  plugins: {
    labels: {
      render: (_a: any) => ``,
      fontColor: `black`,
      overlap: false
    },
    tooltips: {
      render: (a: any) => `${a.label}: ${a.percentage}%`,
    }
  },
};

export function buildRaceChart(ctx: HTMLCanvasElement, ethnicities: Record<string, number>) {
  const ethnicityEntries = Object.entries(ethnicities).sort((a, b) => b[1] - a[1]);

  const chart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ethnicityEntries.map(a => a[0]),
      datasets: [{
        label: 'Ethnicity',
        data: ethnicityEntries.map(a => a[1]),
        backgroundColor
      }]
    },
    options: chartOptions,
  });

  return chart
}

export function buildEducationLevelChart(ctx: HTMLCanvasElement, educationLevels: Record<string, number>) {
  const educationEntries = Object.entries(educationLevels).sort((a, b) => b[1] - a[1]);

  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: educationEntries.map(a => a[0]),
      datasets: [{
        label: 'Education Level',
        data: educationEntries.map(a => a[1]),
        backgroundColor
      }]
    },
    options: chartOptions,
  });
}