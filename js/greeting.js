const loginForm = document.querySelector("#login_form")
const loginInput = document.querySelector("#login_form input")
const greeting = document.querySelector("#greeting")

const HIDDEN_CLASSNAME = "hidden";
// string으로만 이루어진 변수의 경우 대문자로만 쓰기도 함. 비교적 중요도가 떨어지기에. , 오타로 에러가 발생할 경우 알기 쉽게 변수에 담아주는 것이 좋음.
const USERNAME_KEY = "username";

function onLoginSubmit(event){
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username);
  //setItem("key name", value)
  paintGreetings(username);
}

function reset(){
  localStorage.removeItem(USERNAME_KEY);
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
  greeting.classList.add(HIDDEN_CLASSNAME);
  loginInput.value = "";
}

function logout(){
const logOutBtn = document.createElement("button");
logOutBtn.innerText = "change name";

logOutBtn.addEventListener("click",reset);
greeting.appendChild(logOutBtn);
}

function paintGreetings(username){
  greeting.innerText = `Hello, ${username}`;
  // string이랑 변수를 한 string안에서 작성하는 법! 작은 따옴표('') 아니고 백틱(``)임! 변수는 ${}안에 담아줄 것.
  greeting.classList.remove(HIDDEN_CLASSNAME);  
  logout();
}



const savedUsername = localStorage.getItem(USERNAME_KEY);

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit",onLoginSubmit);
} else {
  paintGreetings(savedUsername);

};

