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


