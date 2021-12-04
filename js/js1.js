let myButton = document.querySelector('button'); 
let myHeading = document.getElementById('name');

function setUserName() {
    var myName = prompt('Пожалуйста введите свое имя:');
    localStorage.setItem('имя', myName);
    myHeading.textContent = 'Приветствую, ' + myName + '!';
  }

  if(!localStorage.getItem('имя')) {
    setUserName();
  } else {
    var storedName = localStorage.getItem('имя');
    myHeading.textContent = 'Приветствую, ' + storedName + '!';
  }