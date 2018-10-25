function color(i) {
    // body...
    return colorbrewer.Set3[12][i];
}

function getDate(date) {
    var y = date.getFullYear();
    var m = date.getMonth() + 1;
    m = m < 10 ? ('0' + m) : m;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    return y + '-' + m + '-' + d;
};

function getNameById(id, res) {
    // body...
    for (var i = 0; i < res.length; i++) {
        if (res[i].code == id) {
            return res[i].name;
        }
    }
}

function getInfoById(id, res) {
    // body...
    for (var i = 0; i < res.length; i++) {
        if (res[i].code == id) {
            return res[i];
        }
    }
}

function getBasinById(id, res) {
    // body...
    for (var i = 0; i < res.length; i++) {
        if (res[i].code == id) {
            return res[i].basin;
        }
    }
}

function getInfosByRegion(resBase, resStation) {
    // body...
    var regions = getRegion(resBase);
    var infos = [];
    for (var i = 0; i < regions.length; i++) {
        var region = [];
        for (var j = 0; j < resBase.length; j++) {
            if (resBase[j].basin == regions[i]) {
                var station = [];
                for (var k = 0; k < resStation.length; k++) {
                    if (resStation[k].sta_id == resBase[j].code) {
                        station.push(resStation[k]);
                    }
                }
                region.push(station);
            }
        }
        infos.push(region);
    }
    return infos;
}

function getStandardname(type) {
    // body...
    switch (type) {
        case "sta_ph_v":
            return "PH 值";
            break;
        case "sta_do_v":
            return "溶解氧量";
            break;
        case "sta_an_v":
            return "氨氮浓度";
            break;
        case "sta_toc_v":
            return "高锰酸盐";
            break;
        case "sta_pp_v":
            return "总有机碳";
            break;
    }
}

function maxValue(data, type) {
    return d3.max(data, function(d) {
        // body...
        switch (type) {
            case "sta_ph_v":
                return parseInt(d.sta_ph_v);
                break;
            case "sta_do_v":
                return parseInt(d.sta_do_v);
                break;
            case "sta_an_v":
                return parseInt(d.sta_an_v);
                break;
            case "sta_toc_v":
                return parseInt(d.sta_toc_v);
                break;
            case "sta_pp_v":
                return parseInt(d.sta_pp_v);
                break;
        }
    });
}

function minValue(data, type) {
    return d3.min(data, function(d) {
        // body...
    	switch (type) {
	        case "sta_ph_v":
	            return parseInt(d.sta_ph_v);
	            break;
	        case "sta_do_v":
	            return parseInt(d.sta_do_v);
	            break;
	        case "sta_an_v":
	            return parseInt(d.sta_an_v);
	            break;
	        case "sta_toc_v":
	            return parseInt(d.sta_toc_v);
	            break;
	        case "sta_pp_v":
	            return parseInt(d.sta_pp_v);
	            break;
	    }
    });
}

function unique(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var current = array[i];
        if (res.indexOf(current) === -1) {
            res.push(current)
        }
    }
    return res;
}

$(document).ready(function() {
    // body...
    $('[data-toggle="fullscreentips"]').tooltip();
});

function enterfullscreen() {
    var docElm = document.documentElement;
    if (docElm.requestFullscreen) {
        docElm.requestFullscreen();
    } else if (docElm.mozRequestFullScreen) {
        docElm.mozRequestFullScreen();
    } else if (docElm.webkitRequestFullScreen) {
        docElm.webkitRequestFullScreen();
    } else if (elem.msRequestFullscreen) {
        elem.msRequestFullscreen();
    }
    document.getElementById("fullscreen").src = "../img/fullscreen-exit.png";
}

function exitfullscreen() { //退出全屏
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    }
    document.getElementById("fullscreen").src = "../img/fullscreen.png";
}

function fullscreen() {
    // body...
    var imgSource = document.getElementById("fullscreen").src;
    if (imgSource.split("/")[imgSource.split("/").length-1] == 'fullscreen.png') {
        enterfullscreen();
    } else {
        exitfullscreen();
    }
}

function getRegion(res) {
    // body...
    var temp = [];
    for (var i = 0; i < res.length; i++) {
        temp.push(res[i].basin);
    }
    return unique(temp).sort();
}