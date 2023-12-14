// Date日期对象
import template from "template";

const pages = ()=>{
    /*一、Date()对象：
        1.直接调用：返回当前时间的字符串
            Date()          //'Sun Dec 03 2023 18:02:24 GMT+0800 (中国标准时间)'
        2.构造函数方法：
            let today = new Date();
            today === today.toString()         
            1.参数为时间零点开始计算的毫秒数 new Date(1378218728000)
                一个参数时会被解析为毫秒数
            2.参数为日期字符串 new Date('January 6, 2026');
            3.参数为多个整数，（年、月、日、小时、分钟、秒、毫秒）
                new Date(2026, 0, 1, 0, 0, 0, 0)
                // 算时区，中国为东八区
                var d3 = new Date('2026-12-03');
                console.log(d3);	
                Thu Dec 03 2026 08:00:00 GMT+0800 (中国标准时间)
            4.第一点，参数可以是负整数，代表1970年元旦之前的时间。
                new Date(-1378218728000)
            5.第二点，只要是能被Date.parse()方法解析的字符串，都可以当作参数。
                new Date('2013-2-15')
                new Date('2013/2/15')
                new Date('02/15/2013')
                new Date('2013-FEB-15')
                new Date('FEB, 15, 2013')
                new Date('FEB 15, 2013')
                new Date('February, 15, 2013')
                new Date('February 15, 2013')
                new Date('15 Feb 2013')
                new Date('15, February, 2013')
                // Fri Feb 15 2013 00:00:00 GMT+0800 (CST)
            6.第三，参数为年、月、日等多个整数时，年和月是不能省略的，其他参数都可以省略的。
                new Date(2013)
                new Date(2013, 0)
                new Date(2013, 0, 1)
                new Date(2013, 0, 1, 0)
                new Date(2013, 0, 1, 0, 0, 0, 0)
                // Tue Jan 01 2013 00:00:00 GMT+0800 (CST)
            7.关于参数的取值：当值大于属性值时自动向后运算
                年（1922）：负数（公元前）、两位数（1900+两位数）
                月（0-11）
                日（1-31）
                时（0-23）
                分（0-59）
                秒（0-59）
                毫秒（0-999）

        3.时间戳：1970年1月1日零点整距离某个时刻的毫秒数
        4.通过 getTime() 方法或者 Date.parse() 函数可以将日期对象变为时间戳
            (new Date()).getTime();     //精确到毫秒
            (new Date()).getTime();     //精确到秒，显示为毫秒数，后三位000
        5.通过 new Date(时间戳) 的写法，可以将时间戳变为日期对象
            new Date(1644661417000);
        6.获取时间戳的方法：
            new Date().getTime() 和 Date.now() 和 + new Date()

    二、日期对象的常见方法：全部在Date.prototype.方法()
        1.Date.prototype.valueOf()：valueOf和toString，可以分为以下三类。
            to类：从Date对象返回一个字符串，表示指定的时间。
                toString()：日期转字符串
                toUTCString()：日期转字符串（世界时间（UTC）格式的）
                toLocaleString()：将日期时间时间戳转换为本地时间格式的字符串

            get类：获取Date对象的日期和时间。
                (new Date()).valueOf === (new Date()).getTime()
                //所有这些get方法返回的都是整数，不同方法返回值的范围不一样。
                getTime()：返回实例距离1970年1月1日00:00:00的毫秒数，等同于valueOf方法。
                getDate()：返回实例对象对应每个月的几号（从1开始）。
                getDay()：返回星期几，星期日为0，星期一为1，以此类推。
                getFullYear()：返回四位的年份。
                getMonth()：返回月份（0表示1月，11表示12月）。
                getHours()：返回小时（0-23）。
                getMilliseconds()：返回毫秒（0-999）。
                getMinutes()：返回分钟（0-59）。
                getSeconds()：返回秒（0-59）。
                getTimezoneOffset()：返回当前时间与 UTC 的时区差异，以分钟表示，返回结果考虑到了夏令时因素。
            set类：设置Date对象的日期和时间。
                setDate(date)：设置实例对象对应的每个月的几号（1-31），返回改变后毫秒时间戳。
                setFullYear(year [, month, date])：设置四位年份。
                setHours(hour [, min, sec, ms])：设置小时（0-23）。
                setMilliseconds(ms)：设置毫秒（0-999）。
                setMinutes(min [, sec, ms])：设置分钟（0-59）。
                setMonth(month [, date])：设置月份（0-11）。
                setSeconds(sec [, ms])：设置秒（0-59）。
                setTime(milliseconds)：设置毫秒时间戳。
    
    */

    // 计算本年度剩余天数
    function leftDays() {
        var today = new Date();
        var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
        var msPerDay = 24 * 60 * 60 * 1000;
        return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
    }

    console.log(leftDays());
    





}

export default pages;