const registerEl = document.querySelector('.register');
const usernameEl = document.querySelector('.username');
const collegenameEl = document.querySelector('.college');
const emailEl = document.querySelector('.email');
const numberEl = document.querySelector('.number');


registerEl.addEventListener('click', validate);

function validate(e) {
  e.preventDefault();

  const username = usernameEl.value;
  const collegename = collegenameEl.value;
  const email = emailEl.value;
  const mobilenumber = numberEl.value;

  if(username === '') {
    setError(usernameEl, "Username Cannot be blank !");
  } else if(!isNaN(username)) {
    setError(usernameEl, "Username Cannot be numbers !")
  } else if(username.length <= 3 || username.length >= 30) {
    setError(usernameEl, "username Cannot be less than 3 charecter !");
  } else {
    setSuccess(usernameEl);
  }

  if(collegename === '') {
    setError(collegenameEl, 'College name cannot be empty !');
  } else {
    setSuccess(collegenameEl);
  }

  if(email === '') {
    setError(emailEl, 'Email Cannot be empty !');
  } else if(email.charAt(email.length - 4) != '.') {
    setError(emailEl, 'You should include .com at the end !');
  } else {
    setSuccess(emailEl);
  }

  if(mobilenumber === '') {
    setError(numberEl, 'Mobilenumber cannot be blank !');
  } else if(mobilenumber.length < 10) {
    setError(numberEl, 'Mobilenumber cannot be less than 10 digits');
  } else if(mobilenumber.length > 10) {
    setError(numberEl, 'Mobilenumber cannot be greater than 10 digits');
  }
  else {
    setSuccess(numberEl);
  }
}

function setError(input, message) {
  const formcontrol = input.parentElement;
  const small = formcontrol.querySelector('small')
  small.innerHTML = message;
  formcontrol.className = 'form-control error';
}

function setSuccess(input) {
  const formcontrol = input.parentElement;
  formcontrol.className = 'form-control success';
}
