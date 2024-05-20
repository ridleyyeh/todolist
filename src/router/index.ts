import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import TodoList from '@/components/TodoList.vue'
import CreateTodo from '@/components/CreateTodo.vue'
import EditTodo from '@/components/EditTodo.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/todos',
    name: 'todos',
    component: TodoList
  },
  {
    path: '/todos/create',
    name: 'createTodo',
    component: CreateTodo
  },
  {
    path: '/todos/:id/edit',
    name: 'editTodo',
    component: EditTodo
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
