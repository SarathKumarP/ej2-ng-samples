import { Component, ViewEncapsulation } from '@angular/core';
import { ChartDataService } from './chartdata.service';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-ng-charts';
import { Browser } from '@syncfusion/ej2-base';
/**
 * Sample for Zooming in chart
 */
@Component({
    selector: 'control-content',
    templateUrl: 'zooming.html',
    styleUrls: ['chart.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class ZoomingChartComponent {

    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        title: 'Years',
        valueType: 'DateTime',
        skeleton: 'yMMM',
        edgeLabelPlacement: 'Shift',
        majorGridLines: { width: 0 }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Profit ($)',
        rangePadding: 'None',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
    };
    public legend: Object = {
        visible: false
    };
    public animation: Object = { enable: false };
    public zoomSettings: Object = {
        mode: 'X',
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };

    public width: string = Browser.isDevice ? '100%' : '80%';
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    public border: Object = { width: 0.5, color: '#00bdae' };
    public title: string = 'Sales History of Product X';
    public series1: Object = ChartDataService.prototype.GetZoomingData().series1;
    constructor() {
        //code
    };

}