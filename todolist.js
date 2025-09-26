const todolist = [{
  name: 'Learn React',
  dueDate: '2025-11-30'
}]; 
renderTodoList();


function renderTodoList() {
  
  let todoItems = '';
  for (let i = 0; i < todolist.length; i++) {
    const todoObject = todolist[i];
    // const name = todoObject.name; 
    //const { name } = todoObject; 
    //const dueDate = todoObject.dueDate;
    const { name, dueDate } = todoObject;

    const html = `
      <div>${name}</div> <div>${dueDate}</div>
        <button onclick="
          todolist.splice(${i}, 1);
          renderTodoList();
        " class = "delete-todo-button">Delete</button>
      `;
    todoItems += html;
  }
  document.querySelector('.js-todo-items').innerHTML = todoItems;
}



function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dueDateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dueDateInputElement.value;

  todolist.push({ 
    //name: name,
    //dueDate: dueDate
    name, dueDate }); //Object property shorthand

  inputElement.value = '';
  dueDateInputElement.value = '';

  renderTodoList();
}
