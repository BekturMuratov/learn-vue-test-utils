<template>
  <todo-app/>
</template>

<script>
import TodoApp from './components/TodoApp.vue'
import Parent from './components/Parent.vue'

export default {
  name: 'App',
  components: {
    TodoApp,
    Parent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
