export default class TaskCollection {
  constructor() {
    this.tasks = [];
  }

    addTask = (desc) => {
      const newTask = {
        description: desc,
        completed: false,
        index: this.tasks.length + 1,
      };
      this.tasks.push(newTask);
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
    }

    removeTask = (index) => {
      const result = this.tasks.filter((task, i) => i !== index);
      for (let i = index; i < result.length; i += 1) {
        result[i].index -= 1;
      }
      this.tasks = result;
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
      window.location.reload();
    }

    removeAll = () => {
      this.tasks = [];
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
      window.location.reload();
    }

    editTask = (desc, index) => {
      this.tasks[index].description = desc;
      localStorage.setItem('localStorageTasks', JSON.stringify(this.tasks));
    }

    getTasks = () => this.tasks

    setTasks = (tasks) => {
      this.tasks = tasks;
    }
}