// js表达式和操作符
import template from "template";

const pages = ()=>{
    // 表达式：由操作数 和 运算符组成的式子
    // 表达式的分类：算术、关系、逻辑、赋值、综合
    // 一、算术表达式：+ - * / %
        //1. 隐式类型转换：把非number类型的转为number
            // true + true      //2
            // 3 + null         //NaN
            // 3 * ''           // 0
            // 3 + ''           //'3'
        //2. 解决浮点数丢失精度的方法
            Number(0.1 + 0.245).toFixed(2);  //0.35
            0.1 + 0.2;  // 0.30000000000000004
            (0.1 * 10 + 0.2 * 10) / 10; // 0.3
        //3. 解决浮点数比较值是否相等
            1 / 3 === (1 - 2 / 3); // false
            Math.abs((1/3) - (1-2/3)) < 0.0000001
        //4. 幂和开根号
            Math.pow(2,3)  // 8
            Math.sqrt(81) // 9
            Math.sqrt(-81) // NaN
        //5. 取整
            Math.ceil(2.4)      // 3
            Math.floor(2.5)     // 2
            Math.ceil(-2.4);		// -2
            Math.floor(-2.4);		// -3
            Math.round(2.5)     // 3 
            Math.round(-2.5)     // -2   
        //6.关系表达式 > < >= <= == != === !==
            // 双等：比较值是否相等，
            // 三等：比较值和类型是否相等
            // NaN不自等
            // 检测是否为NaN，（只要传入的值为Number()执行的结果，isNaN检测都为true，对于undefined和null需要单独判断，再进行判断isNaN）
                // isNaN(undefined);	// true
                // isNaN(null);		// false
                // isNaN('3asd');		// true
                isNaN(NaN)      // true
                isNaN(5)        // false
        //7.逻辑运算符 ! && || 
            // &&：全真为真（尾值），有假既假（假值）
            // ||：全假为假（尾值），有真既真（真值）
            // ！：取反
        //8. 自增自减运算：都会立即使原变量自增1
            // ++a（新值）：先加后用
            // a++（旧值）：先用后加
        //9.三元运算
        const a = 1 > Math.random() ? '大于' : '小余';
    // 综合运算符
        // 非运算 > 数学运算 > 关系运算 > 逻辑运算
            
            
            
    
    
}

export default pages;