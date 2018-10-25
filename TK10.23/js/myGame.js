var randomNumber = Math.floor((Math.random() * 101));
//console.log(randomNumber);

var guessField = document.querySelector('.guessField');
console.log(guessField);
var guesses = document.querySelector('.guesses');
console.log(guesses);
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');
//console.log(lowOrHi);
var guessSubmit = document.querySelector('.guessSubmit');

var guessCount = 1;
var resetButton;
guessField.focus();

function checkGuess() {
    var userGuess = Number(guessField.value);
    console.log(typeof userGuess);
    console.log(userGuess);
    //document.write("及第三的坏")

    if (guessCount === 1) {
        guesses.textContent = '上次猜测的数字:'
    }
    guesses.textContent += userGuess + " ";
    guesses.style.backgroundColor = "red";

    lowOrHi.textContent = '';
    if (userGuess === randomNumber) {
        lastResult.textContent = '正确';
        lastResult.style.backgroundColor = 'yellow';
        lowOrHi.textContent = '';
        setGameOver();
    }
    else if (guessCount === 10) {
        lastResult.textContent = '游戏结束';
        lowOrHi.textContent = '';
        setGameOver();
    }

    else {
        lastResult.textContent = '错误';
        lastResult.style.backgroundColor = 'red';

        if (userGuess < randomNumber) {
            lowOrHi.textContent = '低了';
        }
        else if (userGuess > randomNumber) {
            lowOrHi.textContent = '高了';
        }
    }
    guessCount++;
    guessField.value = '';
    guessField.focus();

}

guessSubmit.addEventListener('click', checkGuess);

function setGameOver(){
    //禁用文本框
    guessField.disabled=true;
    //禁用确定键
    guessSubmit.disabled=true;
    //创建button元素 button是HTML上的按钮的标签名
    resetButton=document.createElement('button');
    //将新生成的元素resetButton设置文本内容
    resetButton.textContent='开始新的游戏';
    //将resetButton作为body的小孩加入页面
    document.body.appendChild(resetButton);
    //为resetButton设置单机事件侦听器
    resetButton.addEventListener('click',resetGame);

    //var resetButtonP=document.querySelector("div .resultParas p:last-child");
    //console.log(resetButtonP);
    //resetButtonP.style.display="block";
}
function resetGame(){
    guessCount = 1;
  var resetParas = document.querySelectorAll('.resultParas p');
  for(var i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }
  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();
  lastResult.style.backgroundColor = 'white';
  randomNumber = Math.floor(Math.random() * 100) + 1;
}


