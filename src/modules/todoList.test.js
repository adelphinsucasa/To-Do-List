/**
 * @jest-environment jsdom
 */

const addTask = require('./todoList');

test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
        <input id="txtNewTask" />
        <button id="btnAddTask">Add Task</button>
        <ul id="ulTaskList"></ul>
    `;

    const newTodoInput = document.getElementById('txtNewTask');
    const addTodoBtn = document.getElementById('btnAddTask');
    const todolist = document.getElementById('ulTaskList');

    newTodoInput.value = 'New Task!';
    addTodoBtn.addEventListener('click',() =>{
        addTask();
    });
    addTodoBtn.click();

    expect(todolist.innerHTML).toBe('<li>New Task!</li>');
});