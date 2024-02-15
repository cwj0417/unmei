<template>
  <Main />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Main from './components/main.vue'

export default defineComponent({
  name: 'App',
  components: {
    Main
  }
})
</script>

<style>

input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #aab0b5;
  margin-top: 20px;
  font-size: 30px;
  font-weight: 500;
}

html {
  background: #222;
}

input {
  padding: 5px;
  margin: 5px;
  border: none;
  font-size: 20px;
  background: transparent;
  width: 100px;
  color: #e0e4e8;
  text-align: right;
}

input:focus {
  outline: none;
}

.w-item {
  width: 200px;
}

.text-sm {
  font-size: 17px;
}

.text-lg {
  font-size: 40px;
}
</style>
