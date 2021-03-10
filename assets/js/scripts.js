(function (window, undefined) {
  "use strict";

  var options = {
    chart: {
      height: 250,
      type: "radialBar",
    },

    series: [25],

    fill: {
      colors: ['#033F61']
    },

    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "65%",
        },

        dataLabels: {
          showOn: "always",
          name: false,
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  var chart = new ApexCharts(document.querySelector("#chart1"), options);

  chart.render();

  var options2= {
    chart: {
      height: 250,
      type: "radialBar",
    },

    series: [62.5],

    fill: {
      colors: ['#033F61']
    },

    plotOptions: {
      radialBar: {
        hollow: {
          margin: 15,
          size: "65%",
        },

        dataLabels: {
          showOn: "always",
          name: false,
          value: {
            color: "#111",
            fontSize: "30px",
            show: true,
          },
        },
      },
    },

    stroke: {
      lineCap: "round",
    },
    labels: ["Progress"],
  };

  var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);

  chart2.render();

  
  // Avg Session Chart Starts
  // ----------------------------------
  var $primary = '#033F61';
  var $danger = '#EA5455';
  var $warning = '#FF9F43';
  var $info = '#0DCCE1';
  var $primary_light = '#8F80F9';
  var $warning_light = '#FFC085';
  var $danger_light = '#f29292';
  var $info_light = '#1edec5';
  var $strok_color = '#b9c3cd';
  var $label_color = '#e7eef7';
  var $white = '#fff';


  var sessionChartoptions = {
    chart: {
      type: 'bar',
      height: 200,
      sparkline: { enabled: true },
      toolbar: { show: false },
    },
    states: {
      hover: {
        filter: 'none'
      }
    },
    colors: [$label_color, $label_color, $primary, $label_color, $label_color, $label_color],
    series: [{
      name: 'Sessions',
      data: [75, 125, 225, 175, 125, 75, 25]
    }],
    grid: {
      show: false,
      padding: {
        left: 0,
        right: 0
      }
    },

    plotOptions: {
      bar: {
        columnWidth: '45%',
        distributed: true,
        endingShape: 'rounded'
      }
    },
    tooltip: {
      x: { show: false }
    },
    xaxis: {
      type: 'numeric',
    }
  }

  var sessionChart = new ApexCharts(
    document.querySelector("#avg-session-chart"),
    sessionChartoptions
  );

  sessionChart.render();

  // Avg Session Chart ends //

  /*
  NOTE:
  ------
  PLACE HERE YOUR OWN JAVASCRIPT CODE IF NEEDED
  WE WILL RELEASE FUTURE UPDATES SO IN ORDER TO NOT OVERWRITE YOUR JAVASCRIPT CODE PLEASE CONSIDER WRITING YOUR SCRIPT HERE.  */
})(window);
