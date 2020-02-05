import { Component, OnInit } from '@angular/core';
import * as ChartZoom from 'chartjs-plugin-zoom'
import * as Chart from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  chartOptions = {
    responsive: true,
    scales:{
      xAxes:[{gridLines:{display: false}}]
    },
    plugins:{
      zoom: {
        // Container for pan options
        pan: {
            // Boolean to enable panning
            enabled: true,

            // Panning directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow panning in the y direction
            mode: 'xy'
        },

        // Container for zoom options
        zoom: {
            // Boolean to enable zooming
            enabled: true,

            // Zooming directions. Remove the appropriate direction to disable 
            // Eg. 'y' would only allow zooming in the y direction
            mode: 'xy',
        }
    }}
  };

  chartData = [
    { data: [{x:1,y:330}, {x:2,y:640}, {x:3,y:330}, {x:'a',y:700}], label: 'Account A', fill: false },
    { data: [{x:1,y:330}, {x:2,y:640}, {x:5,y:330}, {x:6,y:700}], label: 'Account B', fill: false },
    { data: [{x:1,y:730}, {x:2,y:40}, {x:3,y:350}, {x:'a',y:30}], label: 'Account C', fill: false }
  ];

  chartLabels = [1, 2, 3, 'a', 5, 6, 7, 8, 9];


  constructor() { }

  ngOnInit() {
    Chart.pluginService.register(ChartZoom);
  }

  onChartClick(event) {
    console.log(event);
  }

}
