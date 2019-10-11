var series = [
    {
        name: 'Men',
        data: [1607,2031,1838,1893,1695,1858,1583,2328,2616,2538,2711,2669,2725,3220]
           
    }, 
    {
       name: 'Women',
       data: [2113,2558,2303,2399,2054,2089,1861,2245,2612,2383,2581,3077,2974,3484]
    }

 ];

 // Configuration about the plot
 var title = {
    text: 'Male vs Female Enrollment at UCSD over a 14 year period'   
 };
 
 var xAxis = {
   title: {
      text: 'Year'
   },
    categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,2013, 2014, 2015, 2016, 2017, 2018]
 };
 var yAxis = {
    title: {
       text: 'Count'
    },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
 };  

 var legend = {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'middle',
    borderWidth: 0
 };

 // Data structure to hold all the configurations together
 var json = {};

 // Tying all the configurations
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolder");
Highcharts.chart(someVar, json);















var series = [
   {
       name: 'Men',
       data: [0.417699895,0.46426051,0.409364971,0.394488189,0.35976985,0.374574601,0.346933896,0.379616107,0.370905226,0.339649893,0.344456754,0.354533799,0.336219128,0.30197651]
          
   }, 
   {
      name: 'Women',
      data: [0.460909213,0.510990399,0.439017424,0.434529583,0.389518581,0.387834323,0.362209446,0.375861961,0.366188432,0.330663026,0.335249836,0.363943282,0.346483083,0.302707357]
   }

];

var chart = {
   type: 'bar'   
};

// Configuration about the plot
var title = {
   text: 'Percentage of Men and Women accepted at UCSD over a 14 year period'   
};

var xAxis = {
   title: {
      text: 'Year'
   },
   categories: [2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012,2013, 2014, 2015, 2016, 2017, 2018]
};
var yAxis = {
   title: {
      text: 'Percentage'
   },
   plotBar: [{
      value: 0,
      width: 1,
      color: '#808080'
   }]
};  


var legend = {
   layout: 'vertical',
   align: 'right',
   verticalAlign: 'middle',
   borderWidth: 0
};

// Data structure to hold all the configurations together
var json = {};

// Tying all the configurations
json.chart = chart;
json.title = title;
json.xAxis = xAxis;
json.yAxis = yAxis;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolderBC");
Highcharts.chart(someVar, json);














var series = [{
   name: 'Percentage',
   colorByPoint: true,
   data: [
   {
       name: 'Men',
       y: 0.480310263
          
   }, 
   {
      name: 'Women',
      y: 0.519689737
   }
   ]}];

var chart = {
   plotBackgroundColor: null,
   plotBorderWidth: null,
   plotShadow: false,
   type: 'pie' 
};

// Configuration about the plot
var title = {
   text: 'Percentage of Men and Women accepted at UCSD in 2018'   
};



var legend = {
   layout: 'vertical',
   align: 'right',
   verticalAlign: 'middle',
   borderWidth: 0
};

// Data structure to hold all the configurations together
var json = {};

// Tying all the configurations
json.chart = chart;
json.title = title;
json.legend = legend;

// Tying the data as the series data
json.series = series;

// We need to couple the chart data structure with the chartPlaceHolder div
var someVar = document.getElementById("chartPlaceHolderPC");
Highcharts.chart(someVar, json);