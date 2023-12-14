
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
var pages$5 = function () {
    NaN.toString();
};

var pages$4 = function () {
    Number(0.1 + 0.245).toFixed(2);
};

var pages$3 = function () {
    label: for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i + j === 6) {
                console.log("j=" + j);
                break label;
            }
        }
        console.log("i=" + i);
    }
    label2: for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (i + j === 6) {
                console.log("j=" + j);
                continue label2;
            }
        }
        console.log("i2=" + i);
    }
};

var pages$2 = function () {
    function fun(a, b, c) {
        console.log(arguments[1]);
    }
    fun(1, 2, 1);
    var btn = document.createElement('button');
    btn.textContent = "123";
    document.querySelector("#app").appendChild(btn).addEventListener('click', function () {
        this.style.color = 'red';
        window.setTimeout(function () {
            this.style.color = 'green';
        }.bind(this), 2000);
    });
    function Fun1() {
        this.a = 1;
        this.b = 2;
    }
    var objnew = new Fun1();
    console.log(objnew.__proto__);
    console.log(objnew.__proto__ === Fun1.prototype);
};

var pages$1 = function () {
    function leftDays() {
        var today = new Date();
        var endYear = new Date(today.getFullYear(), 11, 31, 23, 59, 59, 999);
        var msPerDay = 24 * 60 * 60 * 1000;
        return Math.round((endYear.getTime() - today.getTime()) / msPerDay);
    }
    console.log(leftDays());
};

var pages = function () {
    var err = new Error('出错了');
    err.message;
    var err1 = new Error('出错了！');
    var err2 = new RangeError('出错了，变量超出有效范围！');
    var err3 = new TypeError('出错了，变量类型无效！');
    err1.message;
    err2.message;
    err3.message;
};

pages$5();
pages$4();
pages$3();
pages$2();
pages$1();
pages();
