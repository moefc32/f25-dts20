const calculatorScreen = document.querySelector('#display');
const calculatorLog = document.querySelector('#log');

let prevNumber;
let calculationOperator;
let currentNumber = '0';

const updateScreen = (val)=> {
  calculatorScreen.value = val;
}

const updateLog = (val)=> {
  calculatorLog.value += val + '\n';
}

const number = (val)=> {
  if (currentNumber.length < 10) {
    if (currentNumber === '0') {
      if (val === '.') {
        currentNumber = '0.';
        updateScreen(currentNumber);
        updateLog(currentNumber);
      } else {
        currentNumber = val;
        updateScreen(currentNumber);
        updateLog(currentNumber);
      }
    } else {
      currentNumber += val;
      updateScreen(currentNumber);
      updateLog(currentNumber);
    }
  }
}

const operator = (val)=> {
  if (val === 'clear') {
    currentNumber = '0';
    updateScreen(currentNumber);
    updateLog('all clear');
  } else {
    prevNumber = currentNumber;
    calculationOperator = val;
    currentNumber = "0";
    updateScreen(currentNumber);
    updateLog(currentNumber);
  }
}
