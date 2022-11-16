function drawLine(chartDiv, xdata, ydata, title,) {
    var myChart = echarts.init(chartDiv);

    option = {
        title: {
            text: title
        },
        // tooltip: {
        //     trigger: 'axis'
        // },
        // legend: {},
        // toolbox: {
        //     show: true,
        //     feature: {
        //         dataZoom: {
        //             yAxisIndex: 'none'
        //         },
        //         dataView: { readOnly: false },
        //         magicType: { type: ['line', 'bar'] },
        //         restore: {},
        //         saveAsImage: {}
        //     }
        // },
        xAxis: {
            type: 'category',
            // boundaryGap: false,
            data: xdata
        },
        yAxis: {
            // type: 'value',
            // axisLabel: {
            //     formatter: '{value} °C'
            // }
        },
        series: [
            {
                // name: 'Highest',
                type: 'line',
                data: ydata,
                // markPoint: {
                //     data: [
                //         { type: 'max', name: 'Max' },
                //         { type: 'min', name: 'Min' }
                //     ]
                // },
                // markLine: {
                //     data: [{ type: 'average', name: 'Avg' }]
                // }
            },
        ]
    };

    myChart.setOption(option);
}

function drawBar(chartDiv, xdata, ydata, title) {
    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            }
        },
        legend: {},
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: xdata
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Direct',
                type: 'bar',
                emphasis: {
                    focus: 'series'
                },
                data: ydata
            },
        ]
    };
    var myChart = echarts.init(chartDiv);
    myChart.setOption(option);
}

function send() {
    $.ajax({
        type: 'GET',
        url: 'http://127.0.0.1:3000/api/get',
        success: (res) => {
            let xlabels = []
            let ylabels = []
            for (let i = 0; i < res.length; i++) {
                xlabels.push(res[i][0])
                ylabels.push(res[i][1])
            }
            drawLine($('.show')[0], xlabels, ylabels, 'title')
        }
    }).then((res) => {
        return res
    })
}

$(function () {
    $('#btnShow').on('click', function () {
        $('.show').show()
        let res = send()
        console.log(res)
    })

    $('#btnShow2').on('click', function () {
        $('.show').show()
        $.ajax({
            type: 'GET',
            url: 'http://127.0.0.1:3000/api/get',
            success: (res) => {
                console.log(res)
                let xlabels = []
                let ylabels = []
                for (let i = 0; i < res.length; i++) {
                    xlabels.push(res[i][0])
                    ylabels.push(res[i][1])
                }
                drawBar($('.show')[0], xlabels, ylabels, 'title')
            }
        })
    })

    $('#btnHide').on('click', function () {
        $('.show').hide()
        $('.show')[0].removeAttribute("_echarts_instance_");
    })
})

