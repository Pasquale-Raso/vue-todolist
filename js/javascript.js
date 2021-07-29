Vue.config.devtools = true;
console.log("Ciao", Vue);

const app = new Vue({
  el: "#app",
  data: {
    tasks: [
      "Compra il latte",
      "Compra la carne",
      "Compra il vino",
      "Compra i biscotti",
    ],
  },
  methods: {},
});
