<script setup lang="ts">
import { useTodosStore } from '@/stores/todo'
const todoStore = useTodosStore()
const { todos, toggleTodoCompletion, deleteTodo } = todoStore

const deleteTodoItem = (id: number) => {
    deleteTodo(id)
}

</script>


<template>
    <h2>代辦事項列表</h2>
    <router-link to="/todos/create"></router-link>
    <ul>
        <li v-for="todo in todos" :key="todo.id">
            <span :style="{ textDecoration: todo.completed ? 'line-through' : 'none' }">
                {{ todo.title }}
            </span>
            <button @click="toggleTodoCompletion(todo.id)">
                {{ todo.completed ? '標記未完成' : '標記已完成' }}
            </button>
            <router-link :to="'/todos/' + todo.id + '/edit'">編輯</router-link>
            <button @click="deleteTodoItem(todo.id)">刪除</button>

        </li>
    </ul>
</template>