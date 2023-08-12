const toDoForm = document.querySelector("#todo_form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector("#todo_list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const parentBox = event.target.parentElement;
  const deleteLi = parentBox.parentElement;
  deleteLi.remove();

  toDos = toDos.filter((toDo) => toDo.id !== parseInt(deleteLi.id));
  saveToDos();
}

function checkToDo(event) {
  const checkedSpan = event.target.parentNode.parentNode.firstChild;
  checkedSpan.classList.toggle("check");
  if (checkedSpan.classList.contains("check")) {
    event.target.innerText = "✅";
  } else {
    event.target.innerText = "☑️";
  }
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const buttonBox = document.createElement("div");
  buttonBox.classList.add("buttonBox");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteBtn");
  deleteButton.innerText = "❌";
  const checkButton = document.createElement("button");
  checkButton.classList.add("checkBtn");
  checkButton.innerText = "☑️";

  deleteButton.addEventListener("click", deleteToDo);
  checkButton.addEventListener("click", checkToDo);
  li.appendChild(span);
  li.appendChild(buttonBox);
  buttonBox.appendChild(checkButton);
  buttonBox.appendChild(deleteButton);

  toDoList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
