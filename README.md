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

