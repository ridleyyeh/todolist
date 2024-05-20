<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useTodosStore } from '@/stores/todo'

const router = useRouter()
const todoStore = useTodosStore()
const { createTodo } = todoStore

const title = ref('')
const description = ref('')
const submitForm = () => {
    createTodo({
        id: 0,
        title: title.value,
        description: description.value,
        completed: false,

    })
    router.push('/todo')
}

</script>

<template>

    <div>
        <h2>新增代辦事項</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="title">標題:</label>
                <input v-model="title" id="title">
            </div>
            <div>
                <label for="description">描述:</label>
                <input v-model="description" id="description" />

            </div>
            <button type="submit">提交</button>
        </form>
    </div>

</template>