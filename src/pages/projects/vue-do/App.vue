<template>
  <div class="container">
     <div class="columns is-multiline ">

      <TodoList />
     </div>
  </div>
</template>

<script>
import TodoList from '@/pages/projects/vue-do/TodoList.vue'

export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style>
.container {
  margin-top: 30px;
}
</style>
