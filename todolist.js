const todolist = ['Buy groceries', 'Walk the dog', 'Read a book']; 
 
renderTodoList();


function renderTodoList() {
  
  let todoItems = '';
  for (let i = 0; i < todolist.length; i++) {
    const todo = todolist[i];
    const html = `<div>${todo}</div>`;
    todoItems += html;
  }

  document.querySelector('.js-todo-items').innerHTML = todoItems;
}

function addTodo() {

  const inputElement = document.querySelector('.js-name-input');

  const name = inputElement.value;

  todolist.push(name);

  console.log(todolist);

  inputElement.value = '';

  renderTodoList();

}
