// 语法之错误处理机制
import template from "template";

const pages = ()=>{
    /* 一、 Error 实例对象
    二、错误类型：
        1.SyntaxError错误：变量名错误
        2.ReferenceError错误：变量不存在
        3.RangeError错误：值超出有效范围
        4.TypeError错误：变量或参数不是预期类型
        5.URIError错误：函数的参数不正确
        6.EvalError错误：函数没有被正确执行
    三、自定义错误类型：
        function UserError(message) {
            this.message = message || '默认信息';
            this.name = 'UserError';
        }
        UserError.prototype = new Error();
        UserError.prototype.constructor = UserError;
        
        new UserError('这是自定义的错误！');
        
    */

    var err = new Error('出错了');
    err.message // "出错了"

    var err1 = new Error('出错了！');
    var err2 = new RangeError('出错了，变量超出有效范围！');
    var err3 = new TypeError('出错了，变量类型无效！');

    err1.message // "出错了！"
    err2.message // "出错了，变量超出有效范围！"
    err3.message // "出错了，变量类型无效！"

}

export default pages;