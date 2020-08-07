const phone = document.getElementById("phone");
const btnHome = document.getElementById("btn-home");
const appCalc = document.getElementById("app-calc");

const hourHome = document.getElementById("hour-home");
const hourCalc = document.getElementById("hour-calc");
function currentTime() {
  hourHome.innerHTML = new Date().toLocaleTimeString();
  hourCalc.innerHTML = new Date().toLocaleTimeString();
}
setInterval(currentTime, 1000); 

appCalc.addEventListener('click', switchVisible);
btnHome.addEventListener('click', switchVisible);

function switchVisible() {
  phone.classList.toggle('switched');
}

const calcDisplay     = document.getElementById("calc-display");
const calcButtonsDisp = document.querySelectorAll(".calc-btn-disp");
const calcButtonAC    = document.getElementById("calc-btn-AC");
const calcButtonEqual = document.getElementById("calc-btn-equal");

const calcButtonMinus = document.getElementById("calc-btn-minus").innerHTML;
const calcButtonPlus  = document.getElementById("calc-btn-plus").innerHTML;
const calcButtonMult  = document.getElementById("calc-btn-times").innerHTML;
const calcButtonDivide  = document.getElementById("calc-btn-divide").innerHTML;


calcButtonsDisp.forEach(function(btn){
  btn.addEventListener('click', function(e){
    if (calcDisplay.innerHTML.length < 8){
      if (calcDisplay.innerHTML === "0") {
        calcDisplay.innerHTML = "";
        calcDisplay.innerHTML += e.target.innerHTML;
      } else {
        calcDisplay.innerHTML += e.target.innerHTML;
      }
    }
  })
});

calcButtonAC.addEventListener('click', function(){
  calcDisplay.innerHTML = 0;
});

function splitAndEval(display,calcBtn) {
    const numsArrayStr   = display.split(calcBtn);
    const numsArrayFloat = numsArrayStr.map(function(x){return parseFloat(x)});
    return numsArrayFloat;
}


calcButtonEqual.addEventListener('click', function(){
  const currentDisplay = calcDisplay.innerHTML;
  if (currentDisplay.split(calcButtonPlus).length > 1) {
    calcDisplay.innerHTML = splitAndEval(currentDisplay,calcButtonPlus).reduce((a, b) => (a+b));
  } else if (currentDisplay.split(calcButtonMinus).length > 1) {
    calcDisplay.innerHTML = splitAndEval(currentDisplay,calcButtonMinus).reduce((a, b) => (a-b));
    calcDisplay.innerHTML = Math.floor(Math.round(parseFloat(calcDisplay.innerHTML)*1e6))/1e6;
  } else if (currentDisplay.split(calcButtonMult).length > 1) {
    calcDisplay.innerHTML = splitAndEval(currentDisplay,calcButtonMult).reduce((a, b) => (a*b));
  } else if (currentDisplay.split(calcButtonDivide).length > 1) {
    calcDisplay.innerHTML = splitAndEval(currentDisplay,calcButtonDivide).reduce((a, b) => (a/b));
    calcDisplay.innerHTML = Math.floor(Math.round(parseFloat(calcDisplay.innerHTML)*1e6))/1e6;
  }
})