// Defining the variables
const counterDisplay    = document.getElementById("counter-display");

const btnIncrease1      = document.getElementById("btn-increase-1");
const btnDecrease1      = document.getElementById("btn-decrease-1");

const btnIncrease5      = document.getElementById("btn-increase-5");
const btnDecrease5      = document.getElementById("btn-decrease-5");

const btnIncrease10     = document.getElementById("btn-increase-10");
const btnDecrease10     = document.getElementById("btn-decrease-10");

const btnIncreaseRandom = document.getElementById("btn-increase-random");
const btnDecreaseRandom = document.getElementById("btn-decrease-random");

const inputChooseNum       = document.getElementById("choose-num");
const btnIncreaseChooseNum = document.getElementById("btn-increase-choose-num"); 
const btnDecreaseChooseNum = document.getElementById("btn-decrease-choose-num"); 
const btnClearChooseNum    = document.getElementById("btn-clear-choose-num");

const numbersChosen = document.getElementById("numbers-chosen");
const numbersChosenArray = [];
let numbersChosenCounter = 0;

const totalNumUsed = document.getElementById("total-num-used");
let totalNumCounter = 0;

const btnSave  = document.getElementById("btn-save");
const btnReset = document.getElementById("btn-reset");

const countersSaved = document.getElementById("counters-saved");
const countersSum   = document.getElementById("counters-sum");
const numOfCountersSavedDisplay = document.getElementById("num-of-counters-saved-display");
let countersArray = [];
let numOfCountersSaved = 0;

const btnResetAll = document.getElementById("btn-reset-all");

// Defining the event listeners
btnIncrease1.addEventListener('click', function(){increaseCounter(1)});
btnDecrease1.addEventListener('click', function(){decreaseCounter(1)});

btnIncrease5.addEventListener('click', function(){increaseCounter(5)});
btnDecrease5.addEventListener('click', function(){decreaseCounter(5)});

btnIncrease10.addEventListener('click', function(){increaseCounter(10)});
btnDecrease10.addEventListener('click', function(){decreaseCounter(10)});

btnIncreaseRandom.addEventListener('click', function(){increaseCounter(Math.floor(Math.random()*100))});
btnDecreaseRandom.addEventListener('click', function(){decreaseCounter(Math.floor(Math.random()*100))});

btnIncreaseChooseNum.addEventListener('click', function(){increaseCounter(parseInt(inputChooseNum.value))});
btnDecreaseChooseNum.addEventListener('click', function(){decreaseCounter(parseInt(inputChooseNum.value))});
btnClearChooseNum.addEventListener('click', clearInputNumber);

btnSave.addEventListener('click', saveCounter);
btnReset.addEventListener('click', resetCounter);

btnResetAll.addEventListener('click', resetAll);


function increaseCounter(val) {
    const currentValue = parseInt(counterDisplay.innerHTML);
    counterDisplay.innerHTML = currentValue + val;
    numbersChosenArray[numbersChosenCounter] = `+${val}`;
    numbersChosen.innerHTML = numbersChosenArray;
    // inputChooseNum.value = "";
    totalNumUsed.innerHTML = ++numbersChosenCounter;
}

function decreaseCounter(val) {
    const currentValue = parseInt(counterDisplay.innerHTML);
    counterDisplay.innerHTML = currentValue - val;
    numbersChosenArray[numbersChosenCounter] = `-${val}`;
    numbersChosen.innerHTML = numbersChosenArray;
    // inputChooseNum.value = "";
    totalNumUsed.innerHTML = ++numbersChosenCounter;
}

function clearInputNumber() {
    inputChooseNum.value = "";
}

function saveCounter() {
    countersArray[numOfCountersSaved] = parseInt(counterDisplay.innerHTML);
    countersSaved.innerHTML = countersArray;
    numOfCountersSavedDisplay.innerHTML = ++numOfCountersSaved;
    countersSum.innerHTML = countersArray.reduce((a, b) => a + b, 0)
}

function resetCounter() {
    counterDisplay.innerHTML = 0;
    numbersChosen.innerHTML = 0;
    totalNumUsed.innerHTML = 0;
    numbersChosenArray = [];
}

function resetAll() {
    const elementsArray = [
        counterDisplay, numbersChosen, totalNumUsed,
        countersSaved, countersSum, numOfCountersSavedDisplay
    ]

    for (let element of elementsArray) {
        element.innerHTML = 0;
    }
}