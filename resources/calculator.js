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
      currentNumber = val;
      updateScreen(currentNumber);
      updateLog(currentNumber);
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
      updateLog('hapus semua');
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

    case '.':
      if (currentNumber.includes('.')) { return; }
      if (currentNumber === '0') {
        currentNumber = '0.';
        updateScreen(currentNumber);
        updateLog(currentNumber);
      } else {
        currentNumber += val;
        updateScreen(currentNumber);
        updateLog(currentNumber);
      }
      break;

    case '+':
      math = val;
      prevNumber = currentNumber;
      currentNumber = '0';
      updateLog('ditambah');
      break;

    case '-':
      math = val;
      prevNumber = currentNumber;
      currentNumber = '0';
      updateLog('dikurang');
      break;

    case '*':
      math = val;
      prevNumber = currentNumber;
      currentNumber = '0';
      updateLog('dikali');
      break;

    case '/':
      math = val;
      prevNumber = currentNumber;
      currentNumber = '0';
      updateLog('dibagi');
      break;

    default:
      return;
  }
}

const equal = ()=> {
  let result;
  switch (math) {
    case '+':
      result = parseFloat(prevNumber) + parseFloat(currentNumber);
      break;

    case '-':
      result = prevNumber - currentNumber;
      break;

    case '*':
      result = prevNumber * currentNumber;
      break;

    case '/':
      result = prevNumber / currentNumber;
      break;

    default:
      return;
  }

  currentNumber = result.toString();
  updateScreen(currentNumber);
  updateLog('sama dengan ' + currentNumber);
}
