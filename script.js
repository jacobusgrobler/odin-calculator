'use strict'

let somNum = [2,2]

function plus (array) {
    return array.reduce((total, current) => total + current);
  };

  console.log(plus(somNum))

  function minus (array) {
    return array.reduce((total, current) => total - current);
  }

  console.log(minus(somNum))

  function times (array) {
    return array.reduce((total, current) => total * current);
  }

  console.log(times(somNum))

  function divide (array) {
    return array.reduce((total, current) => total / current);
  }

  console.log(divide(somNum))

