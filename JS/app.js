const todoList = [
    {
        text: "Prenotare appuntamento dal dottore",
        done: false
    }, 
    {
        text: "Chiamare mamma",
        done: false
    }, 
    {
        text: "Fare la spesa",
        done: false
    }, 
    {
        text: "Fare la lavatrice",
        done: false
    }, 
    {
        text: "Pagare le bollette",
        done: false
    }
]

const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: todoList
      }
    }
  }).mount('#app')