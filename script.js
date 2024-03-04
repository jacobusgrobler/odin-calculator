'use strict'

const numbers = document.querySelectorAll('.btn');

const operators = document.querySelectorAll('.funk');

const equals = document.querySelector('.equals');
equals.addEventListener('click', calculate)

// const dot = document.querySelector('.dot')
// const equals = document.querySelector('.equals');
// const plusBtn = document.querySelector('.plus');
// const minusBtn = document.querySelector('.minus');
// const timesBtn = document.querySelector('.times');
// const divideBtn = document.querySelector('.divide');
// const clear = document.querySelector('.clear');
// const clearall = document.querySelector('.clearall');

const screenLimit = 8;
let curNumber = "";
let prevNumber = "";
let operator = "";

const currentDisplayNum = document.querySelector('.curnum');
const previousDisplayNum = document.querySelector('.prevnum') 

  function plus(array) {
    console.log(array)
    console.log('Iran')
    return array.reduce((total, current) => total + current);
  };

  function minus(array) {
    console.log('agmed')
    return array.reduce((total, current) => total - current);
  }

  function times(array) {
    return array.reduce((total, current) => total * current);
  }

  function divide(array) {
    return array.reduce((total, current) => total / current).toFixed(5);
  }

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
      console.log(btn)
      console.log(e)
    })
  })

  function handlerOperator(op) {
    console.log(op)
    operator = op;
    prevNumber = curNumber;
    previousDisplayNum.textContent = prevNumber + operator;
    curNumber = ""
    currentDisplayNum.textContent = "";
  }

  function calculate() {
    let array = "";
    array = prevNumber + curNumber + operator;
    let numArray = array.split('');
    const added = plus(numArray)
    console.log(added)
  }