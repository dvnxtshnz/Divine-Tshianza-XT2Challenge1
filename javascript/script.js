Chart.defaults.font.size = 14;

// datavisualisatie 1 (cirkeldiagram)
function brandstof() {
  var ctx = document.getElementById('cirkeldiagram');
  var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Verbruikt', 'Resterend'],
      datasets: [{
        data: [10.3, 89.7],
        backgroundColor: ['rgba(88, 59, 253, 0.75)', 'rgba(229, 230, 239, 0.75)'],
        borderWidth: 3,
        borderColor: ['#583BFD', '#E5E6EF'],
        hoverBackgroundColor: ['#583BFD', '#E5E6EF']
      }]
    },
    options: {
      maintainAspectRatio: false, // responsive
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// datavisualisatie 2 (staafdiagram)
function voorraden() {
  var ctx = document.getElementById('staafdiagram');
  var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Water', 'Groente & fruit', 'Vlees & vis', 'Snacks'],
      datasets: [{
        data: [90, 60, 60, 70],
        backgroundColor: [
        'rgba(0, 196, 250, 0.75)',
        'rgba(88, 59, 253, 0.75)',
        'rgba(255, 173, 51, 0.75)',
        'rgba(210, 85, 237, 0.75)'
        ],
        borderWidth: 2,
        borderColor: ['#00C4FA', '#583BFD', '#FFAD33', '#D255ED'],
        hoverBackgroundColor: ['#00C4FA', '#583BFD', '#FFAD33', '#D255ED'],
        borderRadius: 3,
       barThickness: 40
      }]
    },
    options: {
      maintainAspectRatio: false, // responsive
      scales: {
        x: { // X-as
          ticks: {
            color: ['#00C4FA', '#583BFD', '#FFAD33', '#D255ED']
          },
          grid: {
            display: false
          }
        },
        y: { // Y-as
          beginAtZero: true,
          max: 100,
          ticks: {
            stepSize: 20,
            color: '#9D9EA4',
          },
          grid: {
            color: '#E5E6EF'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// datavisualisatie 3 (lijndiagram)
function afstand() {
  var ctx = document.getElementById('lijndiagram');
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['0sec', '30sec', '60sec', '90sec', '120sec'],
      datasets: [{
        data: [0, 35, 70, 105, 140],
        backgroundColor: ['rgba(88, 59, 253, 0.75)'],
        borderWidth: 3,
        borderColor: ['#583BFD'],
        fill: true
      }]
    },
    options: {
      maintainAspectRatio: false, // responsive
      scales: {
        x: { // X-as
          ticks: {
            color: ['#9D9EA4']
          },
          grid: {
            display: false
          }
        },
        y: { // Y-as
          beginAtZero: true,
          max: 150,
          ticks: {
            stepSize: 30,
            color: '#9D9EA4',
          },
          grid: {
            color: '#E5E6EF'
          }
        }
      },
      plugins: {
        legend: {
          display: false
        }
      }
    }
  });
}

// laadt de data visualisaties
window.onload = function() {
  brandstof();
  voorraden();
  afstand();
}