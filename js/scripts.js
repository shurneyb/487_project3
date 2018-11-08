$(function(){
  console.log("scripts loaded");
  
  /* adapted from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript */
  
  var objToday = new Date(),
	weekday = new Array('SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'),
	dayOfWeek = weekday[objToday.getDay()],
	domEnder = function() { var a = objToday; if (/1/.test(parseInt((a + "").charAt(0)))) return ""; a = parseInt((a + "").charAt(1)); return 1 == a ? "" : 2 == a ? "" : 3 == a ? "" : "" }(),
	dayOfMonth = today + ( objToday.getDate() < 10) ? '0' + objToday.getDate() + domEnder : objToday.getDate() + domEnder,
	months = new Array('JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'),
	curMonth = months[objToday.getMonth()],
	curYear = objToday.getFullYear()
  var today = dayOfWeek + " " + curMonth + ". " + dayOfMonth + ", " + curYear;
  
  /* End adapted from https://stackoverflow.com/questions/1531093/how-do-i-get-the-current-date-in-javascript */
  
  document.getElementById('date').innerHTML = today;
  
  //table one variables
  var url = 'data/us-measles-cases.json'; 
  var data = [];
  var xCat = [];
  var numMeasles = [];
  
  // Measles Cases Chart
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: data,
    url: url,
    async: true,
    success:function(data){
      console.log(data);
      for(i=0; i < data.length; i++){
        xCat.push(data[i].Year);
        numMeasles.push(data[i].measlesCases);
      }
      
      buildCasesChart();
    }
  });
  
  function buildCasesChart(){
    
    var myChart = Highcharts.chart('measles-cases-chart', {
      title: {
        text: 'Measles Cases in the U.S.'
      },
      subtitle: {
        text: 'Source: Our World in Data (Compiled by Sophie Ochmann)'
      },
      xAxis: {
        categories: xCat
      },
      yAxis: {
        title: {
          text: 'Number of measles cases'
        }
      },
      series: [{
        name: 'United States',
        data: numMeasles
      }]
    });
  }
});
// End Measles Cases Chart

// Measles Immunization Chart
$(function(){
  /*
  //table two variables
  var url = 'data/measles-immunization.json'; 
  var data = [];
  var xCat = [];
  var percImmuneBRA = [];
  var percImmuneCAN = [];
  var percImmuneCHN = [];
  var percImmuneDEU = [];
  var percImmuneFRA = [];
  var percImmuneMEX = [];
  var percImmuneUSA = [];
  var percImmuneGBR = [];
  
  $.ajax({
    type: 'GET',
    dataType: 'json',
    data: data,
    url: url,
    async: true,
    success:function(data){
      console.log(data);
      for(i=0; i < data.length; i++){
        xCat.push(data[i].Year);
        if (data[i].Code == "BRA"){
          percImmuneBRA.push(data[i].measlesImmunization);
        } else if (data[i].Code == "CAN"){
          percImmuneCAN.push(data[i].measlesImmunization);
        } else if (data[i].Code == "CHN"){
          percImmuneCHN.push(data[i].measlesImmunization);
        } else if (data[i].Code == "DEU"){
          percImmuneDEU.push(data[i].measlesImmunization);
        } else if (data[i].Code == "FRA"){
          percImmuneFRA.push(data[i].measlesImmunization);
        } else if (data[i].Code == "MEX"){
          percImmuneMEX.push(data[i].measlesImmunization);
        } else if (data[i].Code == "USA"){
          percImmuneUSA.push(data[i].measlesImmunization);
        } else if (data[i].Code == "GBR"){
          percImmuneGBR.push(data[i].measlesImmunization);
        }
      }
      
      buildImmunizationChart();
    }
  });
  
  function buildImmunizationChart(){
    
    var myChart = Highcharts.chart('measles-immunization-chart', {
      title: {
        text: 'Measles Immunization Rates'
      },
      subtitle: {
        text: 'Source: WHO and UNICEF'
      },
      xAxis: {
        categories: xCat
      },
      yAxis: {
        title: {
          text: 'Percent immunized'
        }
      },
      series: [{
        name: 'Brazil',
        data: percImmuneUSA
      }, {
        name: 'Canada',
        data: percImmuneCAN
      }, {
        name: 'China',
        data: percImmuneCHN
      }, {
        name: 'Germany',
        data: percImmuneDEU
      }, {
        name: 'France',
        data: percImmuneFRA
      }, {
        name: 'Mexico',
        data: percImmuneMEX
      }, {
        name: 'United States',
        data: percImmuneUSA
      }, {
        name: 'United Kingdom',
        data: percImmuneGBR
      }]
    });
  }
  */
  
  
  Highcharts.chart('measles-immunization-chart', {
    chart: {
      type: 'column'
    },
    title: {
      text: 'Measles Immunization Percentage vs Herd Immunity Threshold 2015'
    },
    subtitle: {
      text: 'Source: WHO and UNICEF'
    },
    xAxis: {
      categories: [
        'Brazil',
        'Canada',
        'China',
        'Germany',
        'France',
        'Mexico',
        'United States',
        'United Kingdom'
      ]
    },
    yAxis: {
      min: -10,
      max: 5,
      title: {
        text: 'Percentage above threshold'
      }
    },
    tooltip: {
      headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
      pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} %</b></td></tr>',
      footerFormat: '</table>',
      shared: true,
      useHTML: true
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0
      }
    },
    series: [{
      name: 'Brazil',
      data: [4]
      
    }, {
      name: 'Canada',
      data: [-5]
      
    }, {
      name: 'China',
      data: [4]
      
    }, {
      name: 'France',
      data: [-4]
      
    }, {
      name: 'Germany',
      data: [2]
      
    }, {
      name: 'Mexico',
      data: [2]
      
    }, {
      name: 'United Kingdom',
      data: [0]
      
    }, {
      name: 'United States',
      data: [-3]
      
    }]
  });
});
// End Measles Immunization Chart













/*Highcharts.chart('container', {
  
  title: {
    text: 'Solar Employment Growth by Sector, 2010-2016'
  },
  
  subtitle: {
    text: 'Source: thesolarfoundation.com'
  },
  
  yAxis: {
    title: {
      text: 'Number of Employees'
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle'
  },
  
  plotOptions: {
    series: {
      label: {
        connectorAllowed: false
      },
      pointStart: 2010
    }
  },
  
  series: [{
    name: 'Installation',
    data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
  }, {
    name: 'Manufacturing',
    data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
  }, {
    name: 'Sales & Distribution',
    data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
  }, {
    name: 'Project Development',
    data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
  }, {
    name: 'Other',
    data: [12908, 5948, 8105, 11248, 8989, 11816, 18274, 18111]
  }],
  */