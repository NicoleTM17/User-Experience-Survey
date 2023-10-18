
// So the survey questions will all be wrapped in the 'container' class
// they all have the 'question-hidden' class applied, so that they are hidden with d-none
// When the 'continue-btn' is clicked, I would like it to move on to the next question.
// I think what would be call I when 'continue' is clicked, the transform property is applied
// Some questions consist of tick boxes. Some should be single-coded, so will need to include
// functionality that makes sure to disable others if one is clicked


function surveyQuestions(){

  const continueButtons = document.querySelectorAll('.continue-btn');
  const allQuestions = document.querySelectorAll('.container');

  continueButtons.forEach((button, index) => {
    button.addEventListener('click', event => {
      const currentContainer = allQuestions[index];


      if(currentContainer.querySelector('.group-1')){
        const error = answerRequired(currentContainer);
        if (error){
          return;
        }
      };

      if (index < allQuestions.length - 1) { // if the current index is less than the number of questions
        const nextContainer = allQuestions[index + 1];

        nextContainer.classList.remove('question-hidden'); // for next question
        nextContainer.style.margin = '8rem auto';
      }

      currentContainer.style.transform = 'translateY(-100%)'; // for current question clicked
      currentContainer.style.margin = '0'; // for current question clicked

      // Move the current question up and hide it
      currentContainer.classList.add('question-hidden');
    });
  });
}

function answerRequired(questionContainer){
  // all questions must have at least one response selected or typed in to continue

  const q1Checkboxes = questionContainer.querySelectorAll('.group-1');
  let oneSelected = false;

  q1Checkboxes.forEach((checkbox) => {
    if( checkbox.classList.contains('group-1') && checkbox.checked){
      oneSelected = true;
    }
  });

  if(!oneSelected){
    const errorMsg = document.createElement('p');
    errorMsg.classList.add('error-msg')
    errorMsg.innerText = 'You must select at least one answer!';
    errorMsg.style.color = 'red';
    questionContainer.appendChild(errorMsg);
    // console.log('ERROR'); // detected for just Q1
    return true;
  }
  return false;
}



function selectOneCheckbox(){
// If a question is multicoded but contains pnts, pnts must be single coded
  const checkboxesq1 = document.querySelectorAll('.group-1');

  checkboxesq1.forEach((box) => {
    box.addEventListener('change', () => {
      if (box.value === 'prefernottosay1' && box.checked) {
        checkboxesq1.forEach((otherCheckbox) => {
          if (otherCheckbox !== box) {
            otherCheckbox.checked = false;
            otherCheckbox.disabled = true;
          }
        });
      } else if (!box.checked) {
        checkboxesq1.forEach((otherCheckbox) => {
          if(otherCheckbox.value !== 'prefernottosay1'){
            otherCheckbox.disabled = false;
          }
        });
      }
    });
  });
}


// function skipQuestion(){
//   // If the user selects the 'Yes' radio box, they are shown the next question
//   // If the user selects 'No' or 'PNTS' they skip the next question

//   const yesRadio = document.querySelector('.radio-yes');
//   const noRadio = document.querySelector('.radio-no');
//   const pntsRadio = document.querySelector('.radio-pnts');

//   yesRadio.addEventListener('click', event => {
//     if(!yesRadio.checked){
//       // the next container should be skipped
//     }
//   })

// }


surveyQuestions();
selectOneCheckbox();
// skipQuestion();
// users must select something/ type something in otherwise they cannot move on
