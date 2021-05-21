import Chart from 'chart.js';
import 'chartjs-plugin-labels';

Chart.defaults.global.defaultFontFamily = `'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`;

const backgroundColor = [
  `#ff1c26`, `#3b1f86`, `#ff3f00`, `#f8cd00`, `#ff36ab`, `#92cc41`, `#209cee`
];

export function buildRaceChart(ctx, ethnicities) {
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(ethnicities),
      datasets: [{
        label: 'Ethnicity',
        data: Object.values(ethnicities),
        backgroundColor
      }]
    },
    options: {
      legend: {
        // display: false
      },
      plugins: {
        labels: {
          render: a => `${a.label}: ${a.percentage}%`,
          fontColor: `black`,
          showActualPercentages: true,
          position: `border`,
          overlap: false
        }
      }
    }
  });
}

export function buildEducationLevelChart(ctx, educationLevels) {
  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: Object.keys(educationLevels),
      datasets: [{
        label: 'Education Level',
        data: Object.values(educationLevels),
        backgroundColor
      }]
    },
    options: {
      plugins: {
        labels: {
          render: a => `${a.label}: ${a.percentage}%`,
          fontColor: `black`,
          overlap: false
        }
      }
    }
  });
}