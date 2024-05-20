<template>
    <div v-if="todo">
        <h2>編輯待辦事項</h2>
        <form @submit.prevent="submitForm">
            <div>
                <label for="title">標題:</label>
                <input v-model="title" id="title" />
            </div>
            <div>
                <label for="description">描述:</label>
                <input v-model="description" id="description" />
            </div>
            <button type="submit">提交</button>
        </form>
    </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useTodosStore } from '../stores/todo';

// 獲取當前路由信息
const route = useRoute();
// 獲取 Vue Router 實例
const router = useRouter();
// 獲取 Pinia Store 實例
const todoStore = useTodosStore();

// 獲取當前路由參數中的 ID
const todoId = Number(route.params.id);
// 從 Store 中找到對應的待辦事項
const todo = computed(() => todoStore.todos.find(t => t.id === todoId));

// 創建響應式變量來綁定表單輸入
const title = ref(todo.value?.title || '');
const description = ref(todo.value?.description || '');

// 定義提交表單的方法
const submitForm = () => {
    if (todo.value) {
        // 更新待辦事項
        todoStore.updateTodo({
            id: todo.value.id,
            title: title.value,
            description: description.value,
            completed: todo.value.completed,
        });
        // 提交後導航回待辦事項列表頁面
        router.push('/todos');
    }
};
</script>