/*全局脚本*/
var Until = {};
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
Until.Format = function (date, fmt) { // author: meizz
    var date = new Date(date);
    var o = {
        "M+": date.getMonth() + 1, // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

// mangoDate.MgFormat("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
Until.MgFormat = function (date, fmt) { // author: meizz
    var date = Until.MgToDate(date);
    var o = {
        "M+": date.getMonth(), // 月份
        "d+": date.getDate(), // 日
        "h+": date.getHours(), // 小时
        "m+": date.getMinutes(), // 分
        "s+": date.getSeconds(), // 秒
        "q+": Math.floor((date.getMonth() + 3) / 3), // 季度
        "S": date.getMilliseconds() // 毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}


// javascript日期扩展方法，转换成mangoDB存储的日期类型
Until.DateToMg = function (date) {
    var time = {
        yyyy: date.getFullYear(),
        MM: date.getMonth(), // 月份
        dd: date.getDate(), // 日
        hh: date.getHours(), // 小时
        mm: date.getMinutes(), // 分
        ss: date.getSeconds(), // 秒
        milliSS: date.getMilliseconds() // 毫秒
    };
    return time.yyyy + "-" + time.MM + "-" + time.dd + "T" + time.hh + ":" + time.mm + ":" + time.ss + "." + time.milliSS + "+8:00";
}
// javascript字符串扩展方法，转换成mangoDB存储的日期类型
Until.MgToDate = function (string) {
    var DATE_REGEXP = new RegExp("(\\d{4})-(\\d{2})-(\\d{2})([T\\s](\\d{2}):(\\d{2}):(\\d{2})(\\.(\\d{3}))?)?.*");
    if (DATE_REGEXP.test(string)) {
        var timestamp = string.replace(DATE_REGEXP, function ($all, $year, $month, $day, $part1, $hour, $minute, $second, $part2, $milliscond) {
            var date = new Date($year, $month, $day, $hour || "00", $minute || "00", $second || "00", $milliscond || "00");
            return date.getTime();
        });
        var date = new Date();
        date.setTime(timestamp);
        return date;
    }
    return null;
}

// 数组去重
Until.Unique = function (array) {
    var hash = [];
    for (var i = 0; i < array.length; i++) {
        if (hash.indexOf(array[i]) == -1) {
            hash.push(array[i]);
        }
    }
    return hash;
}
// 去除集合中相同的项。(暂时以集合对象中Key去重，需要优化)
Until.ArrayUnique = function (array) {
    var result = [];
    var obj = {};
    for (var i = 0; i < array.length; i++) {
        if (!obj[array[i].Key]) {
            result.push(array[i]);
            obj[array[i].Key] = true;
        }
    }
    return result;
}

Until.Sleeping = async function (millisecond) {
    setTimeout(() => {
        return;
    }, millisecond)
}

Until.SetDate = function (hh, mm) {
    var date = new Date()
    date.setHours(hh);
    date.setMinutes(mm);
    return date;
}


