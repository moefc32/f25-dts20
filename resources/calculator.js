const calculatorScreen = document.querySelector('#display');
const calculatorLog = document.querySelector('#log');

let prevNumber;
let calculationOperator;
let currentNumber = '0';
let math;

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
  switch (val) {
    case 'clear':
      currentNumber = '0';
      updateScreen(currentNumber);
      updateLog('all clear');
      break;

    case 'delete':
      if (currentNumber.length > 1) {
        currentNumber = currentNumber.slice(0, -1);
        updateScreen(currentNumber);
        updateLog(currentNumber);
      } else {
        currentNumber = '0';
        updateScreen(currentNumber);
        updateLog(currentNumber);
      }
      break;

    case '+':
      math = '+';
      prevNumber = currentNumber;
      currentNumber = '0';
      break;

    case '-':
      math = '-';
      prevNumber = currentNumber;
      currentNumber = '0';
      break;

    case '*':
      math = '*';
      prevNumber = currentNumber;
      currentNumber = '0';
      break;

    case '/':
      math = '/';
      prevNumber = currentNumber;
      currentNumber = '0';
      break;

    default:
      return;
  }
}

const equal = ()=> {
  let result;
  switch (math) {
    case '+':
      result = parseInt(prevNumber) + parseInt(currentNumber);
      break;

    case '-':
      result = parseInt(prevNumber) - parseInt(currentNumber);
      break;

    case '*':
      result = parseInt(prevNumber) * parseInt(currentNumber);
      break;

    case '/':
      result = parseInt(prevNumber) / parseInt(currentNumber);
      break;

    default:
      return;
  }

  currentNumber = result;
  updateScreen(currentNumber);
  updateLog(currentNumber);
}
