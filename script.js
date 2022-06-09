//5
const problemElement = document.querySelector('.problem')
//7
const ourForm = document.querySelector('.our-form')
//10
const ourField = document.querySelector('.our-field')
//11
const pointsNeeded = document.querySelector('.points-needed')
//12
const mistakesAllowed = document.querySelector('.mistakes-allowed')
//17
const progressBar = document.querySelector('.progress-inner')

//3
let state = {
  score : 0,
  wrongAnswer : 0
}

//4
function updateProblem() {
  state.currentProblem = generateProblem(2)
  problemElement.innerHTML = `${state.currentProblem.numberOne} ${state.currentProblem.operator} ${state.currentProblem.numberTwo} `
  //To clear out field and focus again to field
  //13.1
  ourField.value = ""
  // ourField.focus()
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

// console.log(generateProblem())

//8 {weather clicks our inputing somehting applied to both}
ourForm.addEventListener("submit", handleSubmit)

//9
function handleSubmit(e) {
   e.preventDefault();
   let correctAnswer; //9.1
   let p = state.currentProblem //9.2
   
   //9.3
   if(p.operator == "+") correctAnswer = p.numberOne + p.numberTwo
   if(p.operator == "-") correctAnswer = p.numberOne - p.numberTwo
   if(p.operator == "x") correctAnswer = p.numberOne * p.numberTwo
   
  // console.log(correctAnswer);
  
  //9.4
  if(parseInt(ourField.value, 10) === correctAnswer){
     // alert('goodJob');
    // 9.4.1
    state.score++
    pointsNeeded.textContent = 10 - state.score
    
    //9.4.3 --- 13
    updateProblem();
    
    //18
    // progressBar.style.transform = `scaleX(${state.score / 10})`
    renderProgressBar()
  } else{
     // alert('tryAgain');
    //9.4.2
    state.wrongAnswer++
    mistakesAllowed.textContent = 2 - state.wrongAnswer;
  }
  
  //14
  checkLogic()
}

//15
function checkLogic() {
  //If you won
   if( state.score === 10) {
     alert("Win")
     resetGame()
   }
  
 //If you Lost
  if (state.wrongAnswer === 3){
    alert("Lost")
    resetGame()
  }
  
}

// 16
function resetGame() {
  updateProblem()
  state.score = 0;
  state.wrongAnswer = 0;
  pointsNeeded.textContent = 10
  mistakesAllowed.textContent = 2
  //19
  renderProgressBar()
}
// 20
function renderProgressBar() {
  progressBar.style.transform = `scaleX(${state.score / 10})`
}