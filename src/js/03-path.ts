// 流程控制语句
import template from "template";

const pages = ()=>{
    // 1.seitch语句：
        /* 
            switch (变量/表达式){
                case: 常量值/变量/表达式:
                    语句;
                    break;
                default:
                    语句;
            }
        
        */

    // 2.while语句：先判断后执行
        /* 
            while (条件表达式){
                语句;
            }
        */

    // 3.do...while语句：先执行后判断
        /* 
            do{
                语句;
            }while (条件表达式)
        */
    
    // 4.for循环
        /* -------for循环
            for(1初始化表达式 ; 2条件表达式 ; 4更新表达式){  
                3语句...  
            } 
        */
        /* -------for in循环
            var obj = {
                name: "Jerry",
                age: 20,
                city: "Beijing"
            };

            for (var key in obj) {
                console.log(key + ": " + obj[key]);
                // 要过滤掉对象继承的属性，用 hasOwnProperty() 来实现：
                if (o.hasOwnProperty(key)) {
                    console.log(key + ": " + o[key]);
                }
            } 
        */
        /* -------死循环
            while(true){ }  
            for(;;){  }
        
        */   

    // 5.label表达式（多层循环跳出）
    label:for (var i = 0; i < 10; i++) {
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
    /*
    j=6
    j=5
    j=4
    j=3
    j=2
    j=1
    j=0
    i=7
    i=8
    i=9
    */

    // 6.初识算法
        // 输入
        // 输出
        // 有穷性
        // 确定性
        // 可行性

         



        
    
}

export default pages;