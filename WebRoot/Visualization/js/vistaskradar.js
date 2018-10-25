function drawRadar(ContentId, res, stationId, date, time) {
    // body...
    var date_time = date + " " + time;
    var myChart = echarts.init(document.getElementById(ContentId));
    var dailyData = [];
    var dailyLevel = [];
    var monthData = [];
    for (var i = 0; i < res.length; i++) {
        if (res[i].sta_id == stationId) {
            monthData.push(res[i]);
            if (res[i].sta_time == date_time) {
                dailyData.push(res[i].sta_ph_v);
                dailyData.push(res[i].sta_do_v);
                dailyData.push(res[i].sta_an_v);
                dailyData.push(res[i].sta_toc_v);
                dailyData.push(res[i].sta_pp_v);

                dailyLevel.push(res[i].sta_ph_l);
                dailyLevel.push(res[i].sta_do_l);
                dailyLevel.push(res[i].sta_an_l);
                dailyLevel.push(res[i].sta_toc_l);
                dailyLevel.push(res[i].sta_pp_l);
            }
        }
    }
    var a = minValue(monthData, "sta_an_v");
    var b = maxValue(monthData, "sta_an_v");
    var option = {
        tooltip: {},
        legend: {
            data: date_time
        },
        radar: {
            // shape: 'circle',
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
                }
            },
            indicator: [
                { name: 'PH', min: minValue(monthData, "sta_ph_v"), max: maxValue(monthData, "sta_ph_v") },
                { name: '溶解氧', min: minValue(monthData, "sta_do_v"), max: maxValue(monthData, "sta_do_v") },
                { name: '氨氮', min: minValue(monthData, "sta_an_v"), max: maxValue(monthData, "sta_an_v") },
                { name: '高锰酸盐', min: minValue(monthData, "sta_toc_v"), max: maxValue(monthData, "sta_toc_v") },
                { name: '总有机碳', min: minValue(monthData, "sta_pp_v"), max: maxValue(monthData, "sta_pp_v") }
            ]
        },
        series: [{
            name: stationId + "号站点 " + date_time,
            type: 'radar',
            // areaStyle: {normal: {}},
            data: [{
                value: dailyData
            }]
        }]
    };
    myChart.setOption(option);
}