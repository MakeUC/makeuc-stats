import Chart from 'chart.js';
import 'chartjs-plugin-labels';

Chart.defaults.global.defaultFontFamily = `'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`;

const backgroundColor = [
  `rgb(212, 197, 247)`, `rgb(97, 207, 255)`, `rgb(0, 220, 201)`, `rgb(166, 128, 140)`, `rgb(250, 223, 200)`, `rgb(192, 173, 164)`
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
          fontSize: 16,
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
          fontSize: 16,
          fontColor: `black`,
          overlap: false
        }
      }
    }
  });
}