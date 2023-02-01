/**
 * @jest-environment jsdom
 */
import TaskCollection from './taskCollection.js';
const task = new TaskCollection()

test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
        <input id="txtNewTask" />
        <button id="btnAddTask">Add Task</button>
        <ul id="ulTaskList">
        </ul>
    `;

    const newTodoInput = document.getElementById('txtNewTask');
    const todolist = document.querySelectorAll('#ulTaskList');

    newTodoInput.value = 'New Task!';
        task.addTask('task 1');
        todolist.innerHTML = `<li>${task.getTasks()[0].description}</li>`;
    expect(todolist).toHaveLength(1);
});