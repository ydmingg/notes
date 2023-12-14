// 数组及方法
import template from "template";

const pages = ()=>{
    /*一、数组
        1.数组长度：length+1
        2.数组的遍历：
            for、
            for...in...
            forEach(方法，this)：无法中断
                1.需要一个回调函数作为参数
                2.回调次数和数组长度一样
        3.检测是否为数组：
            Array.isArray(对象)
        4.二维数据（矩阵）：
            let arr = [[],[],[],[]];
        5.基本类型值和引用类型值
            基本：Number、boolean、string、undefined、null
            引用：array、object、function、regexp
                let arr = [0,1,2]
                let arr2 = arr
                arr === arr2        // true
    
    二、数组的常用方法
        1.push()：尾部插入元素，改变原数组，返回新数组的长度
            数组.push(元素1，...)
        2.pop()：删除最后一项，改变原数组，返回删除值
            数组.pop()
        3.unshift()：头部插入元素，改变原数组,返回新数组长度
            数组.unshift(元素1，...)
        4.shift()：删除头部插入的元素。改变原数组，返回删除值
            数组.shift()
        5.splice()：删除并替换指定元素，返回删除的数组
            数组.splice(开始位置，删除个数，替换1，...)
        6.slice()：不改变原数组，返回被选中的元素
            数组.slice(开始位置，结束位置（不包含）)
                结束位置可以为负数（倒序），不包括最后一项
        7.join()和split()：
            数组.join(): 数组变为字符串（类似于toString()）
            数组.split(): 的参数表示以什么字符拆分字符串，一般不能留空。
            'abcdefg'.split();				// ["abcdefg"]
            'abcdefg'.split('');			// ["a", "b", "c", "d", "e", "f", "g"]
        8. 字符串和数组更多相关性
            字符串也可以使用 [下标] 的形式访问某个字符，等价于 charAt() 方法。
                'str'[0] === 'str'.charAt(0)
        9.concat()：拼接多个数组，返回新数组，不改变原数组
            数组.concat(数组1，数组2，...)
        10.reverse()：反转数组，改变原数组，返回值是反转后的数组
            数组.reverse();
        11.indexOf()：搜索数组中的元素，返回所在位置，不在返回-1
            数组.indexOf("元素1")
        12.includes()：判断数组是否包含这个值
            数组.includes('元素1')
        13.sort()：数组排序，改变原数组
            数组.sort( function(a,b){
                return a-b //小到大（升序）
                return b-a //大到小（降序）
            } )
        14.toString()：返回数组字符串形式
            数组.toString();
    
    三、数组的去重和随机样本
        1.去重：
            思路：准备一个空结果数组，遍历原数组，如果遍历到的项不在结果数组中，则推入结果数组。
            var arr = [1, 1, 1, 2, 2, 3, 3, 3, 2, 1];
            var resultArr = [];
            for (var i = 0; i < arr.length; i++) {
                if (!resultArr.includes(arr[i])) {
                    resultArr.push(arr[i]);
                }
            }
            console.log(resultArr);
        2.随机样本：请随机从原数组中取 3 项。
            思路：准备一个空结果数组，遍历原数组，随机选择一项，推入结果数组，并且将这项在原数组中删除。
            var arr = [3, 6, 10, 5, 8, 9];
            var resultArr = [];
            for (var i = 0; i < 3; i++) {
                var n = parseInt(Math.random() * arr.length);
                resultArr.push(arr[n]);
                arr.splice(n, 1);
            }
            console.log(resultArr);
            
    四、冒泡排序：
        一趟一趟地进行多次项的两两比较，每次都会将最大的元素排好位置，如同水中的气泡上浮一样。
        var arr = [9, 5, 6, 8, 2, 7, 3, 4, 1];
        var temp;
        for (var i = 0; i < arr.length - 1; i++) {
            for (var j = i + 1; j < arr.length; j++) {
                if (arr[i] > arr[j]) {
                    temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                }
            }
        }
        console.log(arr);

    五、快速排序
        在数据集之中，选择一个元素作为 "基准"（pivot）
        所有小于 "基准" 的元素，都移到 "基准" 的左边；所有大于 "基准" 的元素，都移到 "基准" 的右边
        对 基准 左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止
        
        // 定义一个 quickSort 函数，它的参数是一个数组。
        var quickSort = function(arr) {
            //查数组的元素个数，如果小于等于 1，就返回。
            if (arr.length <= 1) { 
                return arr; 
            }
             // Math.floor 向下取整
        　　var pivotIndex = Math.floor(arr.length / 2);
        // splice() 方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。
        　　var pivot = arr.splice(pivotIndex, 1)[0];
        　　var left = [];
        　　var right = [];
            //开始遍历数组，小于 "基准" 的元素放入左边的子集，大于基准的元素放入右边的子集。
        　　for (var i = 0; i < arr.length; i++) {
            if (arr[i] < pivot) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }
            // concat 拼接数组
            return quickSort(left).concat([pivot], quickSort(right));
        };



        
    
    */

    let arr = [0,1,2,3,4];
    let x1 = arr.unshift(11)


    
    




    
    


}

export default pages;