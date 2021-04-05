(function (window, undefined) {
  "use strict";

  var options = {
    chart: {
      height: 250,
      type: "radialBar",
    },

    series: [25],

    fill: {
      colors: ['#7FE3EE']
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

  var options2 = {
    chart: {
      height: 250,
      type: "radialBar",
    },

    series: [62.5],

    fill: {
      colors: ['#AE8DFE']
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
  var $primary = 'rgba(174, 141, 254, 1)';
  var $danger = '#EA5455';
  var $warning = '#FF9F43';
  var $info = '#0DCCE1';
  var $primary_light = '#8F80F9';
  var $warning_light = '#FFC085';
  var $danger_light = '#f29292';
  var $info_light = '#1edec5';
  var $strok_color = '#b9c3cd';
  var $label_color = 'rgba(174, 141, 254, 0.80)';
  var $label_color2 = 'rgba(174, 141, 254, 0.60)';
  var $label_color3 = 'rgba(174, 141, 254, 0.40)';
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
    colors: [ $primary, $label_color, $label_color2, $label_color3],
    opacity: [1, 0.8, 0.6, 0.4],
    series: [{
      name: 'Sessions',
      data: [225, 175, 125, 75,]
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

