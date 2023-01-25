import './style.css';
import './assets/images/iconRefresh.png';
import './assets/images/iconMore.png';
import './assets/images/iconAdd.png';

const arrayOfTasks = [
  {
    description: 'Check List of Emails',
    completed: false,
    index: 1,
  },
  {
    description: 'Study New Programming Lesson',
    completed: false,
    index: 2,
  },
  {
    description: 'Do the excersise',
    completed: false,
    index: 3,
  },
];

const fillTaskList = () => {
  const ul = document.querySelector('#taskList');
  let aux = '';
  arrayOfTasks.forEach((newTask) => {
    if (!newTask.completed) {
      aux += `<li>
                  <label><input type="checkbox" id="cbox${newTask.index}" name="checkbox${newTask.index}"
                  value="checkbox${newTask.index}"> ${newTask.description}</label> 
                  <a href="#"><img src="./assets/images/iconMore.png" alt="icon more" /></a>
                </li>`;
    }
  });
  ul.innerHTML = aux;
};

fillTaskList();