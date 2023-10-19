
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

      if (currentContainer.querySelector('.group-1')) {
        const error = answerRequired(currentContainer, 'group-1');
        if (error) {
          return;
        }
      } else if (currentContainer.querySelector('.textarea-1')) {
        const error = answerRequired(currentContainer, 'textarea-1');
        if (error) {
          return;
        }
      } else if (currentContainer.querySelector('.textarea-2')) {
        const error = answerRequired(currentContainer, 'textarea-2');
        if (error){
          return;
        }
      }else if (currentContainer.querySelector('.group-2')) {
        const error = answerRequired(currentContainer, 'group-2');
        if (error){
          return;
        }
      } else if (currentContainer.querySelector('.select-1')){
        const error = answerRequired(currentContainer, 'select-1');
        if (error){
          return;
        }
      } else if (currentContainer.querySelector('.group-4')){
        const error = answerRequired(currentContainer, 'group-4');
        if (error){
          return;
        }
      } else if (currentContainer.querySelector('.select-2')){
        const error = answerRequired(currentContainer, 'select-2');
        if (error){
          return;
        }
      } else if (currentContainer.querySelector('.group-6')){
        const error = answerRequired(currentContainer, 'group-6');
        if (error){
          return;
        }
      } else if (currentContainer.querySelector('.select-3')){
        const error = answerRequired(currentContainer, 'select-3');
        if (error){
          return;
        }
      }


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

function answerRequired(container, elementType){
  // all questions must have at least one response selected or typed in to continue

  // Q1 FOUND US
  if(elementType === 'group-1'){
    const q1Checkboxes = container.querySelectorAll('.group-1');
    let oneSelected = false;

    q1Checkboxes.forEach((checkbox) => {
      if(checkbox.classList.contains('group-1') && checkbox.checked){
        oneSelected = true;
      }
    });

    if(!oneSelected){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      // console.log('ERROR'); // detected for just Q1
      return true;
    }

    // Q2 STRENGTHS

  } else if (elementType === 'textarea-1'){
    const q2Strengths = container.querySelector('.textarea-1').value;

    if(q2Strengths.length < 1){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'Please type in your answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true
    }

    // Q3 WEAKNESS
  } else if (elementType === 'textarea-2'){
    const q3Improvements = container.querySelector('.textarea-2').value;

    if(q3Improvements.length < 1){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'Please type in your answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true
    }

    // Q4 RATING
  } else if (elementType === 'group-2'){
    const q4Rating = container.querySelectorAll('.group-2');
    let oneSelected = false;

    q4Rating.forEach((radio) => {
      if(radio.checked){
        oneSelected = true;
      }
    });

    if(!oneSelected){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true;
    }

    // Demo-1 AGE
  } else if (elementType === 'select-1'){
    const demoAge = container.querySelector('.select-1');
    const selectedIndexAge = demoAge.selectedIndex;

    if(selectedIndexAge === 0){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true;
    }


    // Demo-2 GENDER
  }else if (elementType === 'group-4'){
    const demoGender = container.querySelectorAll('.group-4');
    let oneSelected = false;

    demoGender.forEach((radio) => {
      if(radio.checked){
        oneSelected = true;
      }
    });

    if(!oneSelected){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true;
    }

    // Demo-3 REGION
  }else if (elementType === 'select-2'){
    const demoRegion = container.querySelector('.select-2');
    const selectedIndexAge = demoRegion.selectedIndex;

    if(selectedIndexAge === 0){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true;
    }

    // Demo-4 CONDITION
  }else if (elementType === 'group-6'){
    const demoCondition = container.querySelectorAll('.group-6');
    let oneSelected = false;

    demoCondition.forEach((radio) => {
      if(radio.checked){
        oneSelected = true;
      }
    });

    if(!oneSelected){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true;
    }

    // Demo-5 RELIGION
  }else if (elementType === 'select-3'){
    const demoReligion = container.querySelector('.select-3');
    const selectedIndexAge = demoReligion.selectedIndex;

    if(selectedIndexAge === 0){
      const errorMsg = document.createElement('p');
      errorMsg.classList.add('error-msg')
      errorMsg.innerText = 'You must select at least one answer';
      errorMsg.style.color = 'red';
      container.appendChild(errorMsg);
      return true;
    }
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


surveyQuestions();
selectOneCheckbox();
