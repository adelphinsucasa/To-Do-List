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
    }

    removeTask = (index) => {
      const result = this.tasks.filter((task, i) => i !== index);
      for (let i = index; i < result.length; i += 1) {
        result[i].index -= 1;
      }
      this.tasks = result;
    }

    removeAll = () => {
      this.tasks = [];
    }

    editTask = (desc, index) => {
      this.tasks[index].description = desc;
    }

    clearAllCompleted = () => {
      const result = this.tasks.filter((task) => !task.completed);
      for (let i = 0; i < result.length; i += 1) {
        result[i].index = i + 1;
      }
      this.tasks = result;
    }

    setCompleted = (index, value) => {
      this.tasks[index].completed = value;
    }

    getTasks = () => this.tasks;

    setTasks = (tasks) => {
      this.tasks = tasks;
    }
}