function renderChart () {
    Highcharts.chart('container', {
        chart: {
            type: 'line'
        },
        title: {
            text: chartParams.titleText
        },
        subtitle: {
            text: 'Подготовленно информационно-аналитической группой #ВільніЛюдиМаютьАвто на основе данныx Mobile.De'
        },
        xAxis: {
            categories: chartParams.categories
        },
        yAxis: {
            title: {
                text: 'Количество автомобилей (шт)'
            }
        },
        plotOptions: {
            line: {
                dataLabels: {
                    enabled: true
                },
                enableMouseTracking: false
            }
        },
        series: [chartParams.series]
    });
}