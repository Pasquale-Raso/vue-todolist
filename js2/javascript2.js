Vue.config.devtools = true;
console.log("Ciao", Vue);

const app = new Vue({
  el: "#app",
  data: {
    newTask: "",
    isInputVisible: false,
    searchTerm: "",
    tasks: [
      "Compra il latte",
      "Compra la carne",
      "Compra il vino",
      "Compra i biscotti",
    ],
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1);
    },
    addTask() {
      if (this.newTask.trim()) {
        this.tasks.push(this.newTask);
        this.toggleInput();
      } else {
        this.newTask = "";
      }
    },
    toggleInput() {
      this.isInputVisible = !this.isInputVisible;
      this.newTask = "";
    },
    showItem(task) {
      if (!this.searchTerm.trim()) return true;
      const filter = this.searchTerm.trim().toLowerCase();
      task = task.toLowerCase();
      return task.includes(filter);
    },
  },
});
