import axios from 'axios';

const form = document.getElementById('contact_form');
const email = document.getElementById('email');
const emailErrorMessage = document.getElementById('email_error_message');
const textMessage = document.getElementById('message');
const textErrorMessage = document.getElementById('text_error_message');
const finalSuccessMsg = document.getElementById('contact_form__final_success_message');
const finalErrorMsg = document.getElementById('contact_form__final_error_message');
const submitButton = document.getElementById('contact_form__submit_button');
const topicField = document.getElementById('topic');
const nameField = document.getElementById('name');
const nameErrorMessage = document.getElementById('name_error_message');
const checkboxInput = document.getElementById('regulations');
const checkboxErrorMessage = document.getElementById('checkbox_error_message');

const validateEmail = (input, errorTextArea) => {
  const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (input.value === '') {
    showError('Pole puste!', input, errorTextArea);
    return false;
  } else if (!emailRegex.test(String(input.value).toLowerCase())) {
    showError('Niepoprawny adres e-mail!', input, errorTextArea);
    return false;
  } else if (input.value.length > 150) {
    showError('Twój adres e-mail jest za długi', input, errorTextArea);
    return false;
  } else {
    return true;
  }
};

const validateTextField = (input, errorTextArea) => {
  if (input.value === '') {
    showError('Pole puste!', input, errorTextArea);
    return false;
  } else if (input.value.length > 5000) {
    showError('Twoja wiadomośc jest za długa!', input, errorTextArea);
    return false;
  } else {
    return true;
  }
};

const validateTextInput = (input, errorTextArea) => {
  if (input.value === '') {
    showError('Pole puste!', input, errorTextArea);
    return false;
  } else if (input.value.length > 500) {
    showError('Twoja wiadomośc jest za długa!', input, errorTextArea);
    return false;
  } else {
    return true;
  }
};

const validateCheckobx = (input, errorTextArea) => {
  if (input.checked === false) {
    showError('Należy zaakceptować regulamin!', input, errorTextArea);
    return false;
  } else {
    hideError(checkboxInput, checkboxErrorMessage);
    return true;
  }
};

const showError = (message, errorTarget, errorTextArea) => {
  errorTextArea.textContent = message;
  errorTarget.classList.add('error');
};

const hideError = (errorTarget, errorTextArea) => {
  errorTextArea.textContent = '';
  errorTarget.classList.remove('error');
};

email.addEventListener('focus', () => {
  hideError(email, emailErrorMessage);
});

email.addEventListener('blur', () => {
  validateEmail(email, emailErrorMessage);
});

textMessage.addEventListener('focus', () => {
  hideError(textMessage, textErrorMessage);
});

textMessage.addEventListener('blur', () => {
  validateTextField(textMessage, textErrorMessage);
});

nameField.addEventListener('focus', () => {
  hideError(nameField, nameErrorMessage);
});

nameField.addEventListener('blur', () => {
  validateTextInput(nameField, nameErrorMessage);
});

form.addEventListener('submit', event => {
  event.preventDefault();
  const isEmailValid = validateEmail(email, emailErrorMessage);
  const isTextFieldValid = validateTextField(textMessage, textErrorMessage);
  const isNameFieldValid = validateTextInput(nameField, nameErrorMessage);
  const isCheckboxValid = validateCheckobx(checkboxInput, checkboxErrorMessage);

  if (isEmailValid && isTextFieldValid && isNameFieldValid && isCheckboxValid) {
    const dataToSend = new FormData();
    submitButton.disabled = true;

    dataToSend.append('email', email.value);
    dataToSend.append('message', textMessage.value);
    dataToSend.append('topic', topicField.value);
    dataToSend.append('name', nameField.value);

    axios({
      method: 'post',
      url: '../php/SendMessage.php',
      data: dataToSend
    })
      .then(response => {
        const messageHeight = form.offsetHeight;
        form.style.display = 'none';
        finalSuccessMsg.style.cssText = `display: flex; height: ${messageHeight}px`;
      })
      .catch(error => {
        const messageHeight = form.offsetHeight;
        form.style.display = 'none';
        finalErrorMsg.style.cssText = `display: flex; height: ${messageHeight}px`;
      });
  }
});
