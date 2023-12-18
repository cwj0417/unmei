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
  width: 200px;
  color: #e0e4e8;
  text-align: center;
}

input:focus {
  outline: none;
}

td {
  width: 200px;
}

.text-sm {
  font-size: 20px;
}

.text-lg {
  font-size: 40px;
}
</style>
