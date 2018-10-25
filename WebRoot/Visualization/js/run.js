$('.form_date').datetimepicker({
    language: 'fr',
    weekStart: 1,
    todayBtn: 1,
    autoclose: true,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    keyboardNavigation: true
});

$('.form_date').datetimepicker().on('changeDate', function(ev) {
    date = getDate(ev.date);
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
    drawRadar("radar", resStation, StationId, date, time);
});

$('#time').change(function() {
    time = $(this).children('option:selected').val();
    drawRadar("radar", resStation, StationId, date, time);
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
});

$('#ph').click(function() {
    type = "sta_ph_v";
    $('#ph').css({ "background-color": "#007bff", "border-color": "#007bff" });
    $('#do, #an, #toc, #pp').css({ "background-color": "#6c757d", "border-color": "#6c757d" });
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
    getRegionChart("region", 350, 240, resBase, resStation, type);
});

$('#do').click(function() {
    type = "sta_do_v";
    $('#do').css({ "background-color": "#28a745", "border-color": "#28a745" });
    $('#ph, #an, #toc, #pp').css({ "background-color": "#6c757d", "border-color": "#6c757d" });
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
    getRegionChart("region", 350, 240, resBase, resStation, type);
});

$('#an').click(function() {
    type = "sta_an_v";
    $('#an').css({ "background-color": "#ffc107", "border-color": "#ffc107" });
    $('#ph, #do, #toc, #pp').css({ "background-color": "#6c757d", "border-color": "#6c757d" });
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
    getRegionChart("region", 350, 240, resBase, resStation, type);
});

$('#toc').click(function() {
    type = "sta_toc_v";
    $('#toc').css({ "background-color": "#dc3545", "border-color": "#dc3545" });
    $('#ph, #do, #an, #pp').css({ "background-color": "#6c757d", "border-color": "#6c757d" });
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
    getRegionChart("region", 350, 240, resBase, resStation, type);
});

$('#pp').click(function() {
    type = "sta_pp_v";
    $('#pp').css({ "background-color": "#17a2b8", "border-color": "#17a2b8" });
    $('#ph, #do, #an, #toc').css({ "background-color": "#6c757d", "border-color": "#6c757d" });
    getMonthChart("small-view1", 330, 240, StationId, time, resBase, type);
    getRegionChart("region", 350, 240, resBase, resStation, type);
});