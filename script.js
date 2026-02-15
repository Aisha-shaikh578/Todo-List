const input = document.querySelector('.input');
const addBtn = document.querySelector('.addBtn');
const date = document.querySelector('.date');
const todoDiv = document.querySelector('.todoDiv');

let taskArr = JSON.parse(localStorage.getItem('todos')) || [];

addBtn.addEventListener('click', () => {
  addTodo();
  renderTodo();
})

function saveTodo() {
  localStorage.setItem('todos', JSON.stringify(taskArr));
}

function addTodo() {
  const task = input.value;
  if(!task) return '';
  taskArr.push({text: task, date: date.value || ''});
  renderTodo();
  saveTodo();
  input.value = '';
  date.value = '';
}

function deleteTodo(index) {
  taskArr.splice(index, 1);
  renderTodo();
  saveTodo();
}

function renderTodo() {
  let html = '';
  taskArr.forEach((task, index) => {
    html += `
     <p>${task.text}</p>
     <p>${task.date}</p>
     <button class="deleteBtn" onclick="deleteTodo(${index})">Delete</button>
    `;
  });
  todoDiv.innerHTML = html;
}

renderTodo();