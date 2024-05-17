import { defineStore } from 'pinia'
import { ref } from 'vue'

interface Todo {
  id: number
  title: string
  description: string
  completed: boolean
}

export const useTodosStore = defineStore('todos', () => {
  const todos = ref<Todo[]>([])

  const createTodo = (todo: Todo) => {
    todos.value.push({ ...todo, id: Date.now(), completed: false })
    // *創建todo默認值
  }

  const updateTodo = (updatedTodo: Todo) => {
    const index = todos.value.findIndex((todo) => todo.id === updatedTodo.id)
    if (index !== -1) {
      todos.value[index] = updatedTodo
    }

    // *檢查 -1 是為了防止無效更新。如果 findIndex 返回 -1，表示沒有找到具有指定 id 的待辦事項
  }

  const deleteTodo = (todoid: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== todoid)
    //   *filter過後會返回一個todo.id不等於todoid的新陣列，也就是說他會過濾掉id一樣的，實現刪除行為
  }

  const toogleTodoCompletion = (todoid: number) => {
    const todo = todos.value.find((todo) => todo.id === todoid)
    if (todo) {
      todo.completed = !todo.completed
      //  *todoid這個對象是用戶正在toggle的代辦事項id然後是number型態 且find會返回一個todo.id等於todoid的物件，實現完成狀態的切換
    }
  }

  return {
    todos,
    createTodo,
    updateTodo,
    deleteTodo,
    toogleTodoCompletion
  }
})
