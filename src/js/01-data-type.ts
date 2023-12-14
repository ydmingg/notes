// 基础语法和基本数据类型
import template from "template";

const pages = ()=>{
    // 严格模式 use 'strict'
    // 基本数据类型
    let type = {
        number: Number,
        string: String,
        bool: Boolean,
        undefined:undefined,
        null: null
    }
    // 复杂数据类型
    let typePlas = {
        object: Object,
        arr: Array,
        function: Function,
        date: Date,
        map: Map,
        set: Set,
        symbol: Symbol,
    }
    // 转义字符 \'  \"  \n  \t  \
    // 科学计数法：3e8  3e-8
    // 进制数开头：二：0b、八：0、十六：0x

    // 转化为String类型 String()和toString()除了对于null和undefined的处理方式不一样，其它一样
    // Number --> String
    String(123);		// '123'
    String(123.4);		// '123.4'
    String(2e3);		// '2000'
    String(NaN);		// 'NaN'
    String(Infinity);	// 'Infinity'
    String(0xf);		// '15'
    // boolean --> String
    String(true);		// 'true'
    String(false);		// 'false'
    String(undefined);	// 'undefined'
    String(null);		// 'null'
    // toString不改变原数据类型
    // 数字不能直接打点，得用()包裹起来，使其成为一个对象，再转换
    (0).toString();
    true.toString();
    NaN.toString();

    // 转换为 Number 类型
    Number('123')               // 123
    Number('123年');	    	// NaN
    Number('2e3');			// 2000
    Number('');				// 0
    // 字符串不支持是数学表达式
    Number('1+1');			// NaN
    // 除了字符串外，还可以直接放一个表达式
    Number(1+1);			// 2
    // boolean --> String
    Number(true);			// 1
    Number(false);			// 0
    Number(undefined);		// NaN
    Number(null);			// 0
    // parseInt() 函数，将 字符串 或 浮点数 转为 整数。
    parseInt('3.94')        // 3
    parseInt("3df")         // 3
    parseInt("d3df")         // NaN true、false、undefined、null 转为 NaN
    // parseFloat() 函数的功能是将字符串转为浮点数。
    parseFloat('3.14');		// 3.14
    // parseFloat(3.14);		// 3.14
    parseFloat('3.14是圆周率');		// 3.14
    parseFloat('3.14.15');		   // 3.14
    parseFloat('3.99');			// 3.99
    parseFloat('-3.99');		// -3.99
    
    // 转换为 Boolean 类型(0、NAN、''、undefined、null)
    Boolean(123);			// true
    Boolean(0);				// false
    Boolean(NaN);			// false
    Boolean(Infinity);		// true
    Boolean(-Infinity);		// true
    Boolean('');				// false
    Boolean('abc');				// true
    Boolean('false');			// true
    Boolean(undefined);				// false
    Boolean(null);					// false

    

    
    
}

export default pages;