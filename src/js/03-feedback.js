import throttle from 'lodash.throttle';

const STARAGE_KEY = 'feedback-form-state';

const formAllValue = {};

const feedbackForm = {
  form: document.querySelector('.feedback-form'),
};
feedbackForm.form.addEventListener('input', throttle(onTextInput, 500));
feedbackForm.form.addEventListener('submit', onFormSubmit);

function onTextInput(event) {
  formAllValue[event.target.name] = event.target.value;
  const formAllValueJSON = JSON.stringify(formAllValue);
  localStorage.setItem(STARAGE_KEY, formAllValueJSON);
}

function onFormSubmit(event) {
  event.preventDefault();
  const formElem = event.currentTarget.elements,
    email = formElem.email.value,
    message = formElem.message.value;
  if (email === '' || message === '') {
    alert('ВНИМАНИЕ! Все поля должны быть заполнены!');
  } else {
    console.log(formAllValue);
    event.currentTarget.reset();
    localStorage.removeItem(STARAGE_KEY);
  }
}

function receivinglocalStorage() {
  const savedValue = localStorage.getItem(STARAGE_KEY);
  if (savedValue) {
    const parsedValue = JSON.parse(savedValue);
    if (parsedValue.email) {
      feedbackForm.form.elements.email.value = parsedValue.email;
    }
    if (parsedValue.message) {
      feedbackForm.form.elements.message.value = parsedValue.message;
    }
  }
}
receivinglocalStorage();
