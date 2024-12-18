$(function () {
// Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'pie',
	backgroundColor:"#4D4D4D"  
  },
	  exporting:{
	 enabled: false 
  },	
 	
  title: {
    text: '全國老舊房屋比例',
	style:{color: '#FFF',fontSize: '30px',fontWeight:"bold"}
  },

  accessibility: {
    announceNewData: {
      enabled: true
    },
    point: {
      valueSuffix: '%'
    }
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.1f}%',
		style:{color: '#FFF',fontSize: '18px'}  
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:16px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {
      name: "全國老舊房屋比例",
      colorByPoint: true,
	  color:"#FFF",	
      data: [
        {
          name: "30年以上",
          y: 50.4,
          drilldown: "30年以上",
		  color:"#F9ED9B"
        },
        {
          name: "40年以上",
          y: 31.9,
          drilldown: "40年以上",
		  color:"#C5B874"
        },
        {
          name: "50年以上",
          y: 10.3,
          drilldown: "50年以上",
		  color:"#A59547"	
        },
        {
          name: "其他",
          y: 7.3,
          drilldown: "其他",
		  color:"#A9A9A1"
        }
      ]
    }
  ]
});
});	


