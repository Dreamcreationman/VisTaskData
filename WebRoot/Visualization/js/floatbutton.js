function title() {
    return "<p class='.font-italic .text-center font-weight-bold display-5'>您当前的选择是：</p>";
}

function content() {
    var data = $(
        "<div class='.font-weight-bold' style='text-align:center;color:" + color((getRegion(resBase).indexOf(getBasinById(StationId, resBase))) % 12) + "'><small>" + StationId + "号站点：" + getNameById(StationId, resBase) + "</small></div>" +
        "观测指标： " + getStandardname(type) + "</br>" +
        "观测日期： " + date + " " + time + "</br>" +
        "所属流域： " + "<span style='color:" + color((getRegion(resBase).indexOf(getBasinById(StationId, resBase))) % 12) + "'>" + getBasinById(StationId, resBase) + "</span></br>" +
        "断面属性： " + getInfoById(StationId, resBase).section + "</br>" +
        "托管信息： " + getInfoById(StationId, resBase).custodian + "</br>" +
        "设立时间： " + getInfoById(StationId, resBase).setupdate + "</br>" +
        "工作情况： " + getInfoById(StationId, resBase).status + "</br>"
    );

    return data;
}

$("#floatbtn").popover({
    html: true,
    title: title(),
    delay: { show: 100, hide: 200 },
    content: function() {
        return content();
    }
});

$("#floatbtn").click(function() {
    $('#myModal').modal();
});