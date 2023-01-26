import TaskCollection from './taskCollection.js';

const addElementsToDom = () => {
  const btnStart = document.querySelector('.btnStart');
  const ul = document.querySelector('#ulTaskList');
  const txtNewTask = document.getElementById('txtNewTask');
  const addTaskForm = document.getElementById('addTaskForm');
  const btnClearAll = document.querySelector('.btnClear');
  const newTasksCollection = new TaskCollection();

  if (JSON.parse(localStorage.getItem('localStorageTasks')) === null) {
    localStorage.setItem('localStorageTasks', JSON.stringify(newTasksCollection.getTasks()));
  } else {
    newTasksCollection.setTasks(JSON.parse(localStorage.getItem('localStorageTasks')));
  }

  // LIST TASKS
  let aux = '';

  newTasksCollection.getTasks().forEach((newTask) => {
    if (!newTask.completed) {
      aux += `<li id="li${newTask.index}" class="liTask unselected">
                  <input class="taskChkBox" type="checkbox" id="cbox${newTask.index}" name="checkbox""> 
                  <input class="taskDescription" type="text" name="taskDescription${newTask.index}" 
                    id="taskDescription${newTask.index}" value="${newTask.description}" />
                  <button  class="btnMore"><img id="img${newTask.index}" src="./assets/images/iconMore.png" alt="icon more" /></button>
                  </li>`;
    }
  });
  ul.innerHTML = aux;

  /* -------------------------------------------------------------------------- */
  /*                               Event Listeners                              */
  /* -------------------------------------------------------------------------- */

  btnStart.addEventListener('click', () => {
    newTasksCollection.removeAll();
  });

  addTaskForm.addEventListener('submit', () => {
    if (txtNewTask.value !== '') { newTasksCollection.addTask(txtNewTask.value); }
  });

  document.querySelectorAll('.taskChkBox').forEach((chkTask, index) => {
    chkTask.addEventListener('change', () => {
      const inputDesc = document.querySelector(`#taskDescription${index + 1}`);
      newTasksCollection.setCompleted(index, chkTask.checked);

      if (chkTask.checked) {
        inputDesc.classList.add('fontDached');
        inputDesc.classList.remove('fontUndached');
      } else {
        inputDesc.classList.remove('fontDached');
        inputDesc.classList.add('fontUndached');
      }
    });
  });

  document.querySelectorAll('.taskDescription').forEach((inputDesc, index) => {
    inputDesc.addEventListener('focus', () => {
      const liSelected = document.querySelector(`#li${index + 1}`);

      if (!liSelected.classList.contains('selected')) {
        liSelected.classList.remove('unselected');
        liSelected.classList.add('selected');
        liSelected.children.item(2).children.item(0).attributes.item(1).value = './assets/images/iconDelete.png';
      }
    });

    inputDesc.addEventListener('change', () => {
      newTasksCollection.editTask(inputDesc.value, index);
    });

    inputDesc.addEventListener('blur', () => {
      const liSelected = document.querySelector(`#li${index + 1}`);

      if (liSelected.classList.contains('selected')) {
        liSelected.classList.add('unselected');
        liSelected.classList.remove('selected');
        liSelected.children.item(2).children.item(0).attributes.item(1).value = './assets/images/iconMore.png';
      }
    });
  });

  document.querySelectorAll('.btnMore').forEach((btn, index) => {
    btn.addEventListener('click', () => {
      newTasksCollection.removeTask(index);
    });
  });

  btnClearAll.addEventListener('click', () => {
    newTasksCollection.clearAllCompleted();
  });
};
export default addElementsToDom;