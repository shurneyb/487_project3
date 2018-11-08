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
      ],
      title: {
        text: 'Country'
      }
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