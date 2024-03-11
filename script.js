 'use strict'

class Calculator {
  constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  clear() {
    this.currentOperand = "";
    this.previousOperand = "";
    this.operation = undefined;
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1)
  }

  appendNumber(number) {
    if (
      (number === "." && this.currentOperand.includes(".")) ||
      this.currentOperand.length > 8
    )
      return;
    this.currentOperand = this.currentOperand.toString() + number.toString();
  }

  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    if (this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    switch(this.operation) {
      case "+": 
        computation = prev + current
        break
      case "-": 
        computation = prev - current
        break
      case 'x':
        computation = prev * current
        break
      case "/": 
        computation = prev / current
        break
      default: return
    }
    this.currentOperand = computation;
    this.previousOperand = '';
    this.operation = undefined
  }

  updateDisplay() {
    this.currentOperandTextElement.innerText = this.currentOperand;
    this.previousOperandTextElement.innerText = this.previousOperand;
  }
}

const previousOperandTextElement = document.querySelector('[data-previous-operand]');
const currentOperandTextElement = document.querySelector('[data-current-operand]');
const clearBtn = document.querySelector('[data-clear]');
const clearAllBtn = document.querySelector('[data-clear-all]');
const equalsBtn = document.querySelector('[data-equals]')
const numberBtn = document.querySelectorAll('[data-number]');
const operatorBtn = document.querySelectorAll('[data-operation]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  });
});

operatorBtn.forEach(button => {
  button.addEventListener('click', () => {
    calculator.chooseOperation(button.innerText)
    calculator.updateDisplay()
  });
});

equalsBtn.addEventListener('click', (button) => {
  calculator.compute();
  calculator.updateDisplay();
})

clearAllBtn.addEventListener('click', (button) => {
  calculator.clear();
  calculator.updateDisplay();
})

clearBtn.addEventListener('click', (button) => {
  calculator.delete()
  calculator.updateDisplay();
})

