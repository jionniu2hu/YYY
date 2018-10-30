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
var imagesA=document.getElementById("images").children;
console.log(imagesA);

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

//利用计时器间隔1秒，显示一张图片，其他图片隐藏
var currentNO=0;
function changeImg(){
    //排他原理，先去掉同类，在突出自己
    for(var i=0;i<imagesA.length;i++){
        imagesA[i].className="hiddenImg";
        console.log(imagesA[i]);
    }

    // //or
    // for(const itme of imagesA){
    //     itme.className="hiddenImg";
    //     console.log(itme);
    // }

    imagesA[currentNO].className="dispalyImg";
    if(currentNO<7){
        currentNO++;        
    }else{
        currentNO=0;
    }
    console.log(currentNO);
}
var timer=window.setInterval(changeImg,1000)



function startChange(){    
    timer=window.setInterval(changeImg,1000);
}
function stopChange(){
    window.clearInterval(timer);
}

var imagesDiv = document.getElementById('images');
console.log(imagesDiv);
imagesDiv.addEventListener('mouseover', stopChange);
imagesDiv.addEventListener('mouseout', startChange);



