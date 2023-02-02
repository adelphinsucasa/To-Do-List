/**
 * @jest-environment jsdom
 */
import TaskCollection from './todoList.js';

const task = new TaskCollection();

describe('Testing functions', () => {
  // addtask
  test('Check addTodo able add todo to todoList', () => {
    document.body.innerHTML = `
            <input id="txtNewTask" />
            <button id="btnAddTask">Add Task</button>
            <ul id="ulTaskList"></ul>
        `;

    const todolist = document.querySelectorAll('#ulTaskList');

    task.addTask('task 1');
    let aux = '';
    task.getTasks().forEach((newTask) => {
      if (!newTask.completed) {
        aux += `<li>${newTask.description}</li>`;
      }
    });

    todolist.innerHTML = aux;
    expect(todolist.innerHTML).toBe('<li>task 1</li>');
  });
// removeTask
test('Check removeTask ', () => {
  const todolist = document.querySelectorAll('#ulTaskList');
  task.removeTask(0);

  let aux = '';
  task.getTasks().forEach((newTask) => {
    if (!newTask.completed) {
      aux += `<li>${newTask.description}</li>`;
    }
  });
  todolist.innerHTML = aux;
  expect(todolist.innerHTML).toBe('');
});
  
});
