# odin-calculator
So how are we going t do this.
--Before we focus on the logic lets plan the interface and layout on html and css
Sounds good what will we need, what do we want our layout to include i.e functionality
--Lets do the basics including the decimal point lets see if we can spin up a mockup visual representation, lest ass a responsiveness to the buttons and check for a nice font
Can we make it look very different
--Probably lest's think inherit shape and size

Old code for calculate function tried to do it via array pushed to the plus function.

function calculate () {
let array = "";
    array = prevNumber + curNumber + operator;
    let numArray = array.split('');
    const added = plus(numArray)
    console.log(added)

}

All operations done via the reduce function.

function plus(array) {
    return array.reduce((total, current) => total + current);
  };

  function minus(array) {
    return array.reduce((total, current) => total - current);
  }

  function times(array) {
    return array.reduce((total, current) => total * current);
  }

  function divide(array) {
    return array.reduce((total, current) => total / current).toFixed(5);
  }
//////////////////////////////////////////////////////
  const numbers = document.querySelectorAll('.btn');

const operators = document.querySelectorAll('.funk');

const equalsBtn = document.querySelector('.equals');


// const dot = document.querySelector('.dot')
// const plusBtn = document.querySelector('.plus');
// const minusBtn = document.querySelector('.minus');
// const timesBtn = document.querySelector('.times');
// const divideBtn = document.querySelector('.divide');
// const clear = document.querySelector('.clear');
const clearall = document.querySelector('.clearall');

const screenLimit = 8;
let curNumber = "";
let prevNumber = "";
let operator = "";

let currentDisplayNum = document.querySelector('.curnum');
let previousDisplayNum = document.querySelector('.prevnum') 

equalsBtn.addEventListener('click', calculate)
//plusBtn.addEventListener('click', calculate)
  
  numbers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      handleNumber(e.target.textContent);
    });
  });

  function handleNumber(number) {
    curNumber += number;
    if(curNumber.length > screenLimit || curNumber === '00') {
      currentDisplayNum.textContent = 'ERROR'
    }else
    currentDisplayNum.textContent = curNumber;
  }

  operators.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      handlerOperator(e.target.textContent);
    })
  })

  function handlerOperator(op) {
    operator = op;
    prevNumber = curNumber;
    previousDisplayNum.textContent = prevNumber + " " + operator;
    curNumber = ""
    currentDisplayNum.textContent = "";
  }

  function calculate() {
    prevNumber = Number(prevNumber);
    curNumber = Number(curNumber);

    if (operator === "+") {
      prevNumber += curNumber;
    }else if (operator === "-") {
      prevNumber = prevNumber - curNumber;
    }else if ( operator === "x") {
      prevNumber = prevNumber * curNumber;
    }else if (operator === "/") {
      prevNumber = prevNumber / curNumber;
    };
    prevNumber = prevNumber.toString()
    previousDisplayNum.textContent = prevNumber;
    currentDisplayNum.textContent = prevNumber.slice(prevNumber.length -1);

    prevNumber = "";
    curNumber = "";
    operator = "";
    console.log(prevNumber)
    console.log(previousDisplayNum)
    console.log(curNumber)
    console.log(currentDisplayNum)
  };

//////////////////////////////////////////////////
const form = document.querySelector('.theform');
const output = document.getElementById("output");
const operand_btns = document.querySelectorAll("button[data-type=operand]");
const operator_btns = document.querySelectorAll("button[data-type=operator], button[data-type=clear]");

form.addEventListener('click', function (e) {
  e.preventDefault();
});


let is_operator = false;

operand_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    if (output.value == "0") {
      output.value = e.target.value;
    } else if (is_operator) {
      is_operator = false;
      output.value = e.target.value;
    }else if (output.value.includes(".")) {
      output.value = output.value + "" + e.target.value.replace(".", "");
    }else {
      output.value = output.value + "" + e.target.value;
    }
  });
});

let equation = [];

operator_btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {

    switch (e.target.value) {
      case "%":
        output.value = parseFloat(output.value) / 100;
        break;
      case "clear":
        output.value = "0";
        equation = [];
        is_operator = false;
        break;
      case "=":
        equation.push(output.value);
        output.value = calculate(equation);
        equation = [];
        break;
      default:
        let last_item = equation[equation.length - 1];
        if (["/", "*", "+", "-"].includes(last_item) && is_operator) {
          equation.pop();
          equation.push(e.target.value);
        } else {
          equation.push(output.value);
          equation.push(e.target.value);
        }
        is_operator = true;
        break;
      } 
  })
})

function calculate(equation) {
  // Use reduce to perform the calculation
  return equation.reduce((result, item, index, array) => {
    if (index % 2 === 0) {
      // If the index is even, it's a number
      return parseFloat(item);
    } else {
      // If the index is odd, it's an operator
      switch (item) {
        case '/':
          return result / parseFloat(array[index + 1]);
        case '*':
          return result * parseFloat(array[index + 1]);
        case '+':
          return result + parseFloat(array[index + 1]);
        case '-':
          return result - parseFloat(array[index + 1]);
        default:
          throw new Error(`Invalid operator: ${item}`);
      }
    }
  }, 0);
}

