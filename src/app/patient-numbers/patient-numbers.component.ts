import { Component, OnInit } from '@angular/core';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { DashboardService } from '../service/dashboard.service';
import { ChangeDetectorRef } from '@angular/core';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-patient-numbers',
  standalone: true,
  imports: [HighchartsChartModule,NgIf],
  template: `<div *ngIf="chartOptions">
    <highcharts-chart 
      [Highcharts]="Highcharts" 
      [options]="chartOptions"
      style="width: 100%; height: 400px; display: block;">
    </highcharts-chart>
  </div>`,
  styleUrls: ['./patient-numbers.component.scss']
})
export class PatientNumbersComponent implements OnInit {
  Highcharts: typeof Highcharts = Highcharts;
  chartOptions!: Highcharts.Options;

  constructor(private dashboardService: DashboardService, private cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this.dashboardService.getMiddleWidgets().subscribe((response: any) => {

      setTimeout(() => { // Add a small delay to ensure change detection
        this.chartOptions = {
          chart: { type: 'line', height: 325 },
          title: { text: 'จำนวนแผลแต่ละระดับ' },
          xAxis: { 
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'] 
          },
          yAxis: { title: { text: '' } },
          series: response, // Use backend response
          credits: { enabled: false }
        };

        this.cdr.detectChanges(); // Trigger Angular change detection

      }, 100);
    });
  }
}
