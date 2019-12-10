window.chartColors = {
  red: 'rgb(255, 99, 132)',
  orange: 'rgb(255, 159, 64)',
  yellow: 'rgb(255, 205, 86)',
  green: 'rgb(75, 192, 192)',
  blue: 'rgb(54, 162, 235)',
  purple: 'rgb(153, 102, 255)',
  grey: 'rgb(201, 203, 207)',
};

var randomScalingFactor = function() {
  return Math.round(Math.random() * 100);
};

var config = {
  type: 'pie',
  data: {
    datasets: [
      {
        data: [
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
          randomScalingFactor(),
        ],
        backgroundColor: [
          window.chartColors.red,
          window.chartColors.orange,
          window.chartColors.yellow,
          window.chartColors.green,
          window.chartColors.blue,
        ],
        label: 'Dataset 1',
      },
    ],
    labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
  },
  options: {
    responsive: true,
  },
};

// bar
var MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
var colors = Chart.helpers.color;
var barChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'Dataset 1',
      backgroundColor: colors(window.chartColors.red)
        .alpha(0.5)
        .rgbString(),
      borderColor: window.chartColors.red,
      borderWidth: 1,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
    {
      label: 'Dataset 2',
      backgroundColor: colors(window.chartColors.blue)
        .alpha(0.5)
        .rgbString(),
      borderColor: window.chartColors.blue,
      borderWidth: 1,
      data: [
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
        randomScalingFactor(),
      ],
    },
  ],
};

window.onload = function() {
  // pie
  document.querySelectorAll('.chart-item').forEach(function(item) {
    config.data.datasets.forEach(function(dataset) {
      dataset.data = dataset.data.map(function() {
        return randomScalingFactor();
      });
    });
    var ctx = item.getContext('2d');
    window.myPie = new Chart(ctx, config);
  });

  // bar
  var barCtx = document.getElementById('barCanvas').getContext('2d');
  window.myBar = new Chart(barCtx, {
    type: 'bar',
    data: barChartData,
    options: {
      responsive: true,
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  });
};
