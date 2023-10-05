// Basic info
const name = document.getElementById('name');
const school = document.getElementById('school');
const age = document.getElementById('age');
const gradeLevel = document.getElementById('grade-level');
const joinDate = document.getElementById('join-date');

// Classified info
const email = document.getElementById('email');
const username = document.getElementById('username');
const password = document.getElementById(password);
const confirmPassword = document.getElementById('confirm-password');

/***************** handle multistep form ******************/

const multiStepForm = document.querySelector('[data-multi-step]');

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
