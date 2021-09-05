const loginForm = document.querySelector("#login-form")
const inputUsername = document.querySelector("#input-username")
const inputSubmit = document.querySelector("#input-submit")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const greeting = document.querySelector("#greeting")
  const username = inputUsername.value
  localStorage.setItem(USERNAME, username)
  paintGreeting(username);
}

const savedUsername = localStorage.getItem(USERNAME);
function paintGreeting(username){
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello! ${username}`
}

if(savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
}else{
  paintGreeting(savedUsername);
}

