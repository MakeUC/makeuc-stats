import Chart from 'chart.js';
import 'chartjs-plugin-labels';

Chart.defaults.global.defaultFontFamily = `'Lato', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'`;

const backgroundColor = [
  `#ff8304`, `#3b1f86`, `#2121de`, `#f8cd00`, `#ff36ab`, `#92cc41`, `#209cee`
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
      responsive: true,
      maintainAspectRatio: true,
      legend: {
        display: false
      },
      //changes the text within the tooltip
      tooltips: {
        callbacks:{
          label: (item,data) => {
            let percentage =  ((data.datasets[0].data[item.index] / data.datasets[0]._meta[0].total)*100).toFixed(2) ;
            return  `${data.labels[item.index]}: ${percentage}%`; 
          }
        }
      },
      plugins: {
        labels: {
          //render: a => `${a.label}: ${a.percentage}%`,
          render: a => ``,
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
      tooltips: {
        callbacks:{
          label: (item,data) => {
            let percentage =  ((data.datasets[0].data[item.index] / data.datasets[0]._meta[1].total)*100).toFixed(2) ;
            return  `${data.labels[item.index]}: ${percentage}%`;
          }
        }
      },
      plugins: {
        labels: {
          //render: a => `${a.label}: ${a.percentage}%`,
          render: a => "",
          fontColor: `black`,
          overlap: false
        },
        tooltips: {
          render: a=> `${a.label}: ${a.percentage}%`,
        }
      },
      legend: {display: false},
    }
  });
}