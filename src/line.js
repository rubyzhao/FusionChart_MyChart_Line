let chartData = [];
const loop = 2e2;
// 2e6: long wait
for (let i = 0; i < loop; i++) {
    let x = (800 * Math.PI * i) / loop;
    let y = 100 * Math.sin(i);
    chartData.push({ label: x, value: y, showvalue: false });
}

FusionCharts.ready(function() {
    var chartObj = new FusionCharts({
        type: 'line',
        renderAt: 'chart-container',
        width: '1000',
        height: '250',

        dataFormat: 'json',
        dataSource: {
            chart: {
                theme: 'fusion',
                caption: 'Sine Wave',
                subCaption: 'Test line chart',
                xAxisName: 'X',
                yAxisName: 'Sin(x)',
                lineThickness: '1',
                drawAnchors: false, // remove the joint
                showHoverEffect: false,
                showToolTip: false,
            },
            data: chartData,
            // trendlines: [
            //     {
            //         line: [
            //             {
            //                 startvalue: '18500',
            //                 color: '#29C3BE',
            //                 displayvalue: 'Average{br}weekly{br}footfall',
            //                 valueOnRight: '1',
            //                 thickness: '2',
            //             },
            //         ],
            //     },
            // ],
        },
    });
    chartObj.render();
});
