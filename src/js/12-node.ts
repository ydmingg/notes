// 节点node
import template from "template";

const pages = ()=>{
    /* 一、 node 节点：
        childNodes 子节点
        parentNode 父节点
        firstChild 第一个子节点
        lastChild  最后一个子节点
        previousSibling  前一个兄弟节点
        nextSibling  后一个兄弟节点
        ---------------------------------
        关系	    考虑所有结点	        只考虑元素节点
        子节点	    childNodes	            children
        父节点	    parentNode	            同
        第一个子节点	firstChild	    firstElementChild
        最后一个子节点	lastChild	    lastElementChild
        前一个兄弟节点	previousSibling	    previousElementSibling
        后一个兄弟节点	nextSibling	    nextElementSibling

    二、通过 classList 操作类控制CSS
        1.classList.add()
        2.classList.contains() 查看元素是否存在类:
	    3.classList.item(index); 获取元素的第 index 个类名（索引为 index ）:
        4.classList.remove()
        5.classList.toggle()
        6.classList.toString()：将 class 的列表转为字符串。
	     
    三、 通过 getComputedStyle 操作伪元素
        var result = window.getComputedStyle(test, ':before').content;
        var color = window.getComputedStyle(test, ':before').color;
    四、节点的增删改查
        createElement 动态创建任意 DOM 节点
        cloneNode 复制现有的 DOM 节点，传入参数 true 会复制所有子节点
        appendChild 在末尾（结束标签前）插入节点
        cloneNode 复制现有的 DOM 节点，传入参数 true 会复制所有子节点
        insertBefore 在父节点中任意子节点之前插入新节点
        removeChild 删除父节点的子节点
        replaceChild  用一个孤儿节点替换父元素的子结点
        replaceWith 用一个孤儿节点替换当前节点
    五、



    */

    // var box = document.getElementById('box');
    // var para = document.getElementById('para');

    // // 所有子节点
    // console.log(box.childNodes);
    // // 所有的元素子节点（IE9开始兼容）
    // console.log(box.children);
    // console.log(box.children.para);

    // // 第一个子节点
    // console.log(box.firstChild);
    // console.log(box.firstChild.nodeType);
    // // 第一个元素子节点（IE9开始兼容）
    // console.log(box.firstElementChild);

    // // 最后一个子节点
    // console.log(box.lastChild);
    // console.log(box.lastChild.nodeType);
    // // 最后一个元素子节点（IE9开始兼容）
    // console.log(box.lastElementChild);

    // // 父节点
    // console.log(para.parentNode);

    // // 前一个兄弟节点
    // console.log(para.previousSibling);
    // // 前一个元素兄弟节点（IE9开始兼容）
    // console.log(para.previousElementSibling);

    // // 后一个兄弟节点
    // console.log(para.nextSibling);
    // // 后一个元素兄弟节点（IE9开始兼容）
    // console.log(para.nextElementSibling);
}

export default pages;