<template>
    <section class="column section">
      <div class="column">
        <h1 class="title"> To-do list </h1> 
      </div>         
      <ul>
        <span v-if="todo.done" class="done">{{ todo.text }}</span>
        <span v-else>{{ todo.text }}</span>
        <span v-if="todo.done" class="float-end">&#128077;</span>
        <b-button v-else class="float-end" pill variant="outline-success" @click="completeTodo()">&#10003;</b-button>
        <b-button class="float-end" pill variant="outline-danger" @click="deleteTodo()">&#10060;</b-button>
      </ul>
    </section>


</template>
<script>
export default {
  name: "TodoItem",
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    completeTodo() {
      this.$emit("todo-completed", this.todo);
    },

    deleteTodo(){
      this.$emit("todo-deleted", this.todo);
    }
  }
}
</script>
<style>
.done {
  text-decoration: line-through;
}
</style>