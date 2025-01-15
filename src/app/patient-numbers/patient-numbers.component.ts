import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-patient-numbers',
  standalone: true,
  imports: [HighchartsChartModule],
  template: `<highcharts-chart 
    [Highcharts]="Highcharts" 
    [options]="chartOptions"
    style="width: 100%; height: 400px; display: block;">
  </highcharts-chart>`,
  styleUrls: ['./patient-numbers.component.scss']
})
export class PatientNumbersComponent {
  Highcharts: typeof Highcharts = Highcharts;
  
  chartOptions: Highcharts.Options = {
    chart: {
      type: 'line',
      height: 325
    },
    title: {
      text: 'จำนวนแผลแต่ละระดับ'
    },
    xAxis: {
      categories: [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ]
    },
    yAxis: {
      title: {
        text: ''
      }
    },
    series: [
      {
        name: "แผลกดทับระดับที่ 1",
        type: "line",
        color: '#FF0000',
        data: [70, 69, 95, 145, 182, 215, 252, 265, 233, 183, 139, 196]
      },
      {
        name: 'แผลกดทับระดับที่ 2',
        type: 'line',
        color: '#DC143C',
        data: [47, 52, 44, 35, 58, 69, 32, 53, 71, 82, 99, 159]
      },
      {
        name: 'แผลกดทับระดับที่ 3',
        type: 'line',
        color: '#800000',
        data: [17, 22, 14, 25, 18, 19, 22, 43, 11, 32, 29, 59]
      },
      {
        name: 'แผลกดทับระดับที่ 4',
        type: 'line',
        color: '#FF2400',
        data: [98, 67, 5, 27, 14, 89, 53, 41, 74, 67, 79, 47]
      },
      {
        name: 'แผลหายแล้ว',
        type: 'line',
        color: '#008000',
        data: [10, 18, 63, 5, 25, 84, 97, 81, 50, 70, 23, 42]
      }
    ],
    credits: {
      enabled: false
    }
  };
}