const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
    console.log(numbers)
  })

numbers.forEach((number) => {
  number.addEventListener("click", () => {
    console.log ("number is pressed")
  })

numbers.forEach((number) => {
    number.addEventListener("click", (event) => {
      updateScreen(event.target.value)
    })
  })

const calculatorScreen = document.querySelector('.calculator-screen')
const updateScreen = (number) => {
  calculatorScreen.value = number
}

let prevNumber = ''
let calculationOperator = ''
let currentNumber = '0'

const inputNumber = (number) => {
  currentNumber = number
}

numbers.forEach((number)) => {
number.addEventListener("click", (event) => {
  inputNumber(event.target.value)
  updateScreen(currentNumber)
})
})


const clearAll = () => {
    prevNumber = ''
    calculationOperator = ''
    currentNumber = '0'
}

}
inputDecimal = (dot) => {
  currentNumber += dot
}

const decimal = document.querySelector ('.decimal')

decimal.addEventListener('click', (event) => {
  console.log(event.target.value)
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

case '+' :
  result =parseFloat(prevNumber)+parseFloat(currentNumber)
  break

inputDecimal = (dot) => {
  if(currentNumber.includes('.')) {
    return
  }
  currentNumber += dot
}

const inputOperator = (operator) => {
  if (calculationOperator === '') {
    prevNumber = currentNumber
  }
  calcultaionOperator = operator
  currentNumber = '0'
}
