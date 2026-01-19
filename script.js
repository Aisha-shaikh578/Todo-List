const form = document.querySelector('.form');
const input = document.querySelector('.input');
const ulElement = document.querySelector('.list');
let list = JSON.parse(localStorage.getItem('list'));

list.forEach(task => {
  toDoList(task)
})

form.addEventListener('submit', (event) => {
  event.preventDefault();
  toDoList();
})

function toDoList(task) {
  let newTask = input.value;
  if(task) {
    newTask = task.name;
  }

  const liElement = document.createElement('li');
  if(task && task.checked) {
    liElement.classList.add('checked');
  }

  liElement.innerText = newTask;
  ulElement.appendChild(liElement);
  input.value = '';

  const checkBtnElement = document.createElement('div');
  checkBtnElement.innerHTML = `
   <i class="fa-solid fa-square-check"></i>
  `;
  liElement.appendChild(checkBtnElement);

  const deleteBtnElement = document.createElement('div');
  deleteBtnElement.innerHTML = `
  <i class="fa-solid fa-trash-arrow-up">
  `;
  liElement.appendChild(deleteBtnElement);

  checkBtnElement.addEventListener('click', () => {
    liElement.classList.toggle('checked');
    updateLocalStorage();
  });

  deleteBtnElement.addEventListener('click', () => {
    liElement.remove();
    updateLocalStorage();
  });

  updateLocalStorage()
}

function updateLocalStorage() {
  const listElements = document.querySelectorAll('li');
  list = [];
  listElements.forEach(liElement => {
    list.push({
      name: liElement.innerText,
      checked: liElement.classList.contains('checked')
    });
  });
  localStorage.setItem('list',JSON.stringify(list));
};