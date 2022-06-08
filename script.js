//5
const problemElement = document.querySelector('.problem')


//3
let state = {
  score : 0,
  wrongAnswer : 0
}

//4
function updateProblem() {
  state.currentProblem = generateProblem(2)
  problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo} `
}

//6
updateProblem();


//1
function generateNumber(max) {
  return Math.floor(Math.random() * (max) + 1)
}
//2
function generateProblem() {  //Returning Object
  return {
      numberOne : generateNumber(10),
      numberTwo : generateNumber(10),
      operator : ['+', '-', 'x'][generateNumber(2)]
  }
}

console.log(generateProblem())