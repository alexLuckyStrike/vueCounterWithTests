<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <div class="app">
      <h3>Счетчик: {{ spyOnCounter }}</h3>
      <button @click="plus()">+</button>
      <button @click="minus()">-</button>
      <h3 :class="addClass ? 'textRedColor' : 'textBlackColor'">
        Следим с помощью watch
      </h3>
      <hr />
      <h3>Следим с помощью computed свойства</h3>
    </div>
  </div>
</template>

<script>
// import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    // HelloWorld,
  },
  data() {
    return {
      counter: 0,
      addClass: false,
    };
  },
  methods: {
    plus() {
      this.$store.commit("increment");
    },
    minus() {
      this.counter -= 1;
      this.$store.commit("decrement");
    },
  },

  watch: {
    spyOnCounter(value) {
      console.log("value:", value);
      if (value === 1) {
        this.addClass = true;

        return;
      }
      this.addClass = false;
    },
  },

  computed: {
    spyOnCounter() {
      return this.$store.getters.spyOnCounter;
    },
  },
};
</script>

<style>
.textRedColor {
  color: red;
}

.textBlackColor {
  color: "black";
}

.app {
  width: 500px;
  min-height: 300px;
  border: 1px dashed black;
  margin: auto;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
