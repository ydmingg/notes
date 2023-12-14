// 函数
import template from "template";

const pages = ()=>{
    /* 一、函数的常用方法：语句的封装，可以让这些代码方便地被复用。
        1.优点：
            一次定义，多次调用
            一次定义，多次调用简化代码，让代码更具有可读性
        2.动态参数(伪数组)：arguments:[实参1,实参2,...]
        3.返回值：return
            如果return后不跟值，或者是不写return则函数默认返回undefined。
            类型：任意类型，对象函数都行
        4.其他：
            break: 退出循环
            continue：跳出当次循环
            return：退出函数
        5.递归：条件不满足时，重复调用
            阶乘n!：n*(n-1)
        6.作用域：限制变量访问的范围
            1.全局作用域：window （尽量不要在全局中创建变量）
                一个未定义的变量会报错，而访问一个对象没有的属性时返回undefined
                1.直接在script标签中编写的代码
                2.打开页面时创建，在页面关闭时销毁。
                3.在全局作用域中创建的变量都会作为window对象的属性保存
            2.局部作用域和函数作用域：
                1.函数作用域：函数执行时创建作用域，每次调用函数都会创建一个新的函数作用域。
                2.局部作用域a（形参）：类似函数内部创建的作用域 functioin(){let a = 132}
        7.作用域链：当前找不到变量时，逐级查找父级作用域
        8.this上下文：
            1.以函数的形式调用时，this是window let x = fun; x();
            2.以方法的形式调用时，this就是调用方法的对象 fun.x();
            3.以构造函数的形式调用时，this就是新创建的对象 Fun.x();
            4.普通函数没有明确调用者时 this 值为 window，严格模式下没有调用者时 this 的值为 undefined。
            5.规则：
                obj.方法();                         // this -> obj
                函数();                             // this -> window
                数组[下标]()                        // this -> 类数组对象
                (function(){})()                   // this -> window
                setInterval(函数，时间)             // this -> window
                setTimeout(函数，时间)              // this -> window
                DOM元素.onclick = function(){}     // this -> DOM元素
            6.设置this的指向：
                函数.call(obj)                  // this -> obj
                函数.apply(obj)                 // this -> obj
            7.call和apply区别：
                函数.call(obj,参数1，...)
                函数.apply(obj,[参数1，...])：当arguments是数组时使用
            8.bind（绑定）设置this方法
                函数.bind(this,参数,...)


        9.类数组对象（argument）：所有健名为自然数序列（从0开始），且有length属性的对象
        10.函数的上下文只有函数在被执行的时候才会知道。且执行时谁调用的函数，函数的上下文就是谁，否则就是 window 对象。
   
    二、(面向对象)构造函数（类）方法：专门用来创建对象的函数
        1.使用new调用函数的方法；
            1.函数体内会自动创建一个 新的空白对象
            2.函数的上下文（this）会指向这个 新的对象   this -> new Obj
            3.函数体内的语句会执行
            4.函数会自动返回上下文（this）对象，即使函数没有return语句
        2.创建对象的三种方式：
            1.利用对象的直面量创建
                const obj = {}
            2.利用new Object 创建
                const obj = new Object();
            3.利用 构造函数 创建
        3.如果不用new调用构造函数，则函数中的this指向window
        4.不能直接把方法写在构造函数中
    
    三、类与实例
        1.类：只描述对象拥有哪些属性和方法，但不具体指明属性的值，、
            静态成员：构造函数中的属性和方法
            静态成员方法中的this指向构造函数自身
        2.实例对象（构造函数内部的this）：通过构造函数创建的对象
            实例成员：实例对象中的 属性和方法
            实例的this指向实例对象

    四、原型（prototype）：多个对象属性 指向同一个对象
        1.原理：
            Obj.prototype :用来放一些固定通用的方法
            obj.__proto__ === Obj.prototype           // true
            1.原型链查找：Obj.prototype.gg = 123;
                obj.gg             // 123
            2.遮蔽效应：Obj.prototype.gg = 123;
                obj.gg = 235       // 235
            3.检测对象的属性和方法
                obj.hasOwnProperty("属性")
                '属性' in obj  : in只能检测是否可以用该属性和方法，而不能检测自己是否有该属性和方法

            4.添加属性和方法：将方法写到 原型（prototype） 上。
                Obj.prototype.属性 = 方法
            5.原型里面放的是方法，该方法中的this指向方法的调用者（实例对象）
        2.原型链：
            最顶部原型：Object.prototype.__proto__  === null    //true
            顶部原型：Object.prototype 
            构造原型：Obj.prototype
            实例原型：obj.__proto__ 
            1.查找规则
                当访问一个对象的属性（包括方法）时，首先查找这个对象自身有没有该属性
                如果没有就查找它的原型（也就是 __proto__指向的 prototype 原型对象）
                如果还没有就查找原型对象的原型（Object的原型对象）
                依此类推一直找到 Object 为止（null）
                __proto__对象原型的意义就在于为实例对象查找机制提供一个方向，或者说一条路线

    五、包装类：在JS中为我们提供了三个包装类：String() Boolean() Number()
        1.目的：为了让基本类型值可以从它们的构造函数的 prototype 上获得方法
        2.实例方法：
            valueOf()方法：返回包装对象实例对应的原始类型的值。   new Number(123).valueOf()  // 123
            toString()方法：返回对应的字符串形式。              new Number(123).toString()  // "123"
        3.自定义方法
            obj.double()     //使得字符串和数字翻倍。
        4.总结：
            Number()、String() 和 Boolean() 的实例都是 object 类型，它们的 PrimitiveValue 属性存储它们的本身值
            new 出来的基本类型值可以正常参与运算
            包装类的目的就是为了让基本类型值可以从它们的构造函数的 prototype 上获得方法（打点调用）

    六、垃圾回收（GC）：
        内存泄漏：不再用到的内存，没有及时释放
        内存的生命周期：
            内存分配：当我们声明变量、函数、对象的时候，系统会自动为他们分配内存
            内存使用：即读写内存，也就是使用变量、函数等
            内存回收：使用完毕，由垃圾回收自动回收不再使用的内存
            说明： 全局变量一般不会回收(关闭页面回收)； 一般情况下局部变量的值, 不用了, 会被自动回收掉

    七、回调函数：A函数作为参数传递给B函数，A函数就是回调函数
    八、高阶函数（闭包）：内层函数+外层函数的变量
        缺点：可能会引起内存泄露
        写法：
            function fun(){
                let num = 1;
                function fn(num){
                    console.log(num)
                }
                fn();
            }
            fun();

            function fun(){
                let num =1 
                return function(num){
                    console.log(num)
                }
            }
            let chages = fun();
            chages();   // 调用函数
        
        

        
            
    



    */

    // 函数的动态参数
    function fun(a,b,c){
        console.log(arguments[1]);
        
    }
    fun(1,2,1);

    // bind设置上下文案例
    let btn = document.createElement('button');
   btn.textContent = "123";
    (document.querySelector("#app") as HTMLDivElement).appendChild(btn).addEventListener('click',function(){
        this.style.color = 'red'
        
        window.setTimeout(function(this:any){
            this.style.color = 'green'
            
        }.bind(this),2000)
        
        
    })

    // new 方法四步骤：”
    function Fun1(this:any){
        this.a= 1;
        this.b = 2
    }

    let objnew = new Fun1();
    console.log(objnew.__proto__);
        
    console.log(objnew.__proto__  === Fun1.prototype)



}

export default pages;