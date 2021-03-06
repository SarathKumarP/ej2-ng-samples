import { Component, ViewEncapsulation } from '@angular/core';
import { ILoadedEventArgs, ChartTheme } from '@syncfusion/ej2-ng-charts';
import { chartData } from './financial-data';
import { Browser } from '@syncfusion/ej2-base';

/**
 * Sample for Hilo Series
 */
@Component({
    selector: 'control-content',
    templateUrl: 'hilo.html',
    styleUrls: ['chart.style.css'],
    encapsulation: ViewEncapsulation.None
})
export class HiloChartComponent {

    public data1: Object[] = chartData;

    //Initializing Primary X Axis
    public primaryXAxis: Object = {
        valueType: 'DateTime',
        skeleton: 'yMd', zoomFactor: 0.2, zoomPosition: 0.6,
        crosshairTooltip: { enable: true },
        majorGridLines: { width: 0 }
    };
    //Initializing Primary Y Axis
    public primaryYAxis: Object = {
        title: 'Price',
        minimum: 50,
        maximum: 170,
        interval: 30,
        labelFormat: '${value}',
        lineStyle: { width: 0 },
        majorTickLines: { width: 0 }
    };
    public marker: Object = {
        visible: false
    };
    //Initializing Zooming
    public zoomSettings: Object = {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableSelectionZooming: true,
        mode: 'X'
    };
    public chartArea: Object = {
        border: {
            width: 0
        }
    };
    public width: string = Browser.isDevice ? '100%' : '80%';

    public title: string = 'AAPL Historical';
    public tooltip: Object = {
        enable: true,
        shared: true
    };
    public legendSettings: Object = {
      visible: false
    };
    public crosshair: Object = {
        enable: true,
        lineType: 'Vertical', line: {
            width: 0,
        }
    };
    public load(args: ILoadedEventArgs): void {
        let selectedTheme: string = location.hash.split('/')[1];
        selectedTheme = selectedTheme ? selectedTheme : 'Material';
        args.chart.theme = <ChartTheme>(selectedTheme.charAt(0).toUpperCase() + selectedTheme.slice(1));
    };
    constructor() {
        //code
    };

}