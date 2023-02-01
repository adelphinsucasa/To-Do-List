const addTask = () => {
    const newTodoInput = document.getElementById('txtNewTask');
    let currentTodoList = document.getElementById('ulTaskList').innerHTML;
    currentTodoList += `<li>${newTodoInput.value}</li>`;
    document.getElementById('ulTaskList').innerHTML = currentTodoList;
    newTodoInput.value = '';
  }

module.exports = addTask;
