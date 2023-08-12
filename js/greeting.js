const loginBox = document.querySelector("#formBox");
const loginForm = document.querySelector(".login_form");
const loginInput = document.querySelector(".login_form .name");
const greetingBox = document.querySelector("#greetingBox");
const greeting = document.querySelector(".greeting");

const HIDDEN_CLASSNAME = "hidden";
// string으로만 이루어진 변수의 경우 대문자로만 쓰기도 함. 비교적 중요도가 떨어지기에. , 오타로 에러가 발생할 경우 알기 쉽게 변수에 담아주는 것이 좋음.
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginBox.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  //setItem("key name", value)
  paintGreetings(username);
}

function reset(e) {
  e.preventDefault();
  localStorage.removeItem(USERNAME_KEY);
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
  greetingBox.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

function logout() {
  const logOutBtn = document.createElement("button");
  logOutBtn.classList.add("button__change");
  logOutBtn.innerText = "change name";

  logOutBtn.addEventListener("click", reset);
  greeting.appendChild(logOutBtn);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}`;
  greetingBox.classList.remove(HIDDEN_CLASSNAME);
  logout();
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

window.addEventListener("click", (e) => {
  console.log(e.target);
});

window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.name !== null) {
    greetingBox.classList.add(HIDDEN_CLASSNAME);
  }
});
