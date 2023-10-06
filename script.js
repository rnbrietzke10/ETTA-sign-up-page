// Basic info
const name = document.getElementById('name');
const school = document.getElementById('school');
const age = document.getElementById('age');
const gradeLevel = document.getElementById('grade-level');
const joinDate = document.getElementById('join-date');

// Classified info
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirm-password');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error');

/***************** handle multistep form ******************/

const multiStepForm = document.querySelector('[data-multi-step]');
console.log(multiStepForm);
const formSteps = [...multiStepForm.querySelectorAll('[data-step]')];

let currentStep = formSteps.findIndex(step => {
  return step.classList.contains('active');
});

if (currentStep < 0) {
  currentStep = 0;
  formSteps[currentStep].classList.add('active');
}

multiStepForm.addEventListener('click', e => {
  if (e.target.matches('[data-next]')) {
    currentStep += 1;
  } else if (e.target.matches('[data-prev]')) {
    currentStep -= 1;
  }
  showCurrentStep();
});

function showCurrentStep() {
  formSteps.forEach((step, index) => {
    step.classList.toggle('active', index === currentStep);
  });
}

/************ handle form submission ***********/

const BASE_URL = 'http://127.0.0.1:8080/';
function submitForm(e) {
  e.preventDefault();
  let messages = [];
  if (password !== confirmPassword) {
    messages.push('Password and Confirm Password does not match');
  }
  if (age > 18 || age < 13) {
    messages.push('You must be between 13 and a8 years old.');
  }

  if (messages.length > 0) {
    errorMessage.innerText = messages.join(', ');
  }

  const formData = new FormData(form);

  fetch(BASE_URL, {
    method: 'POST',
    body: formData,
  })
    .then(response => {
      if (!response.ok) {
        throw new Error('network return error');
      }
      return response.json();
    })
    .then(resp => {
      // response or redirect to page
      /******* TODO ********/
    })
    .catch(error => {
      // Handle error
      console.log('error ', error);
    });
}

form.addEventListener('submit', submitForm);
