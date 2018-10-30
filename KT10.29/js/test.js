var timer;//设计定时器变量

//启动定时器函数定义，若在启动定时器时，有很多附加操作可以一并写入该函数
//若启动定时器动作单一，可以直接调用window定时器
function startTimer(speed) {
    timer = window.setInterval(changeNum, speed);
}

//调用定时器，时程序从一开始就执行变化
// startTimer(100);
timer = window.setInterval(changeNum, 200);

//获取h2元素
var h2Odj = document.querySelector('h2');
var imgOdj = document.querySelector('h2>img');
console.log(imgOdj);

//设置当前变化的号码变量及初值
var currentNO = 1;
//var flag = true;

//定义变化数字函数，0~9,达到9后回归0重新开始
function changeNum() {
    // if (flag) {
    //     if (currentNO < 3) currentNO++;
    //     else flag = false;
    // }
    // else {
    //     if (currentNO > 0) currentNO--;
    //     else flag = true;
    // }
    if (currentNO < 8) currentNO++;
    else currentNO = 1;
    h2Odj.innerHTML = '<img src="images/0' + currentNO + '.jpg" alt=""></img> ';
    //console.log(currentNO);

}
//console.log(timer);

var timer;//设计定时器变量

timer=window.setInterval(changeNum,1000);
//获取div#images元素
var images1 = document.querySelector('#images');
var images2 = document.getElementById('images');

console.log(images1);
console.log(images2);
console.log(images2.children[3]);
// images2.children[4].style.

//设置当前变化的号码变量以及初始值
var currentNO=1;

//定义变化数字函数，0-->9，达到9后返回0
function changeNum(){
    if(currentNO<8) currentNO++;
    else currentNO=1;
}

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
var btnObj = document.getElementById('btnObj');
//console.log(btnObj);
// btnObj.addEventListener('click', ChangeNum);
// function ChangeNum() {
//     if (flag) {
//         window.clearInterval(timer);
//         btnObj.textContent = "启动"
//         flag = false;
//     }
//     else {
//         // timer = window.setInterval(changeNum, 1000);
//         startTimer(500);
//         btnObj.textContent = "停止";
//         flag = true;
//     }
// }

//定义停止定时器函数，函数功能为停止定时器的同时改变按钮的显示文本
function startChange() {
    startTimer(500);
    btnObj.textContent = "停止";
}

//定义启动定时器函数，函数功能为启动定时器的同时改变按钮的显示文本
function stopChange() {
    window.clearInterval(timer);
    btnObj.textContent = "启动"
}

//为按钮添加鼠标移入移出事件
btnObj.addEventListener('mouseover', stopChange);
btnObj.addEventListener('mouseout', startChange);





