// //css选择器--document.querySelector()
// var img4=document.querySelector('#images a:nth - chlid(4)');

// //id--document.getElementById()
// var img4=document.getElementById('images').children[4];

// //类名--document.getElementsByClassName()
// var img4=document.getElementsByClassName('hiddenImg')[3];

// //标签名--document.getElementsByTagName()
// var img4=document.getElementsByTagName('a')[4];

// console.log(img4);

// img4.style.display="block";
// img0.style.display="none";


//获取一组带有超链接的图像
var imagesA = document.getElementById("images").children;
// // console.log(imagesA);
//获取一组li文本
var txtList = document.querySelectorAll(".txtItem");
// console.log(txtList);

//通过行内样式实现换显示样式
//26行元素隐藏
// imagesA[0].style.display="none";
// //30行元素显示
// imagesA[4].style.display="inline-block";

//通过更换CSS类名来更换样式
//26行元素隐藏
// imagesA[0].className="hiddenImg";
// //30行元素显示
// imagesA[4].className="dispalyImg";

//初始化当前显示的图片、文本编号
var currentNO = 0;
const nodeLength = 8;

//利用计时器间隔1秒，显示一张图片，其他图片隐藏
function changeImg() {
    //排他原理，先去掉同类，同类图片透明度0(.dispalyImg)
    var nodeLength=txtList.length
    for (var i = 0; i < nodeLength; i++) {
        //同类图片透明度0(.dispalyImg))
        imagesA[i].className = "hiddenImg";
        //同类文本设置正常非高亮
        txtList[i].className = "txtItem normalColor";
        // console.log(imagesA[i]);
    }

    // //or
    // for(const itme of imagesA){
    //     itme.className="hiddenImg";
    //     console.log(itme);
    // }

    //再突出自己，当透明度1(.dispalyImg)
    imagesA[currentNO].className = "dispalyImg";
    txtList[currentNO].className = "txtItem heighlightColor";

    //元素更换，为下一次计时器调用做准备
    // if (currentNO < 7) {
    //     currentNO++;
    // } else {
    //     currentNO = 0;
    // }
    // console.log(currentNO);
}


function leftImg(){
    if(currentNO>0){
        currentNO--;
    }
    else{
        currentNO=7;
    }
}


function rightImg(){
    if(currentNO<7){
        currentNO++;
    }
    else{
        currentNO=0;
    }
}



//网页加载后启动定时器
var timer = window.setInterval(rightImgGo, 1000);
//鼠标移入后重设定时器
function stopChange() {
    window.clearInterval(timer);
}
//鼠标移出后移除定时器
function startChange() {
    timer = window.setInterval(leftImgGo, 1000);
}
//获取DIV可以注册移入移出事件
var sliderDiv = document.querySelector('.slider');

// console.log(imagesDiv);
sliderDiv.addEventListener('mouseover', stopChange);
sliderDiv.addEventListener('mouseout', startChange);



//为所有文本li注册鼠标移入事件，移入之后，当前高亮li跳到对应图片
for(var i=0;i<txtList.length;i++){
    txtList[i].addEventListener('mouseover',gotoImg);
    txtList[i].no=i;
    // console.log(txtList[i].no);
}
function gotoImg(){
    //获得当前显示图像的编号/文本编号  this 是当前事件发生的本体
    // console.log(this.no);
    currentNO=this.no;
    changeImg();
}

var leftButton=document.querySelector('.leftButton');
var rightButton=document.querySelector('.rightButton');

leftButton.addEventListener('click',leftImgGo);
rightButton.addEventListener('click',rightImgGo);

function leftImgGo(){
    leftImg();
    changeImg();
}

function rightImgGo(){
    rightImg();
    changeImg();
}


