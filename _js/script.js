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

// laadt de data visualisaties
window.onload = function() {
  brandstof();
}