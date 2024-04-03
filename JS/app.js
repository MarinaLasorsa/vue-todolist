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
        todoList: todoList,
        inputValue: ""
      }
    },
    methods: {
        deleteTodo(index) {
            this.todoList.splice(index, 1)
        },
        addTodo() {
            this.todoList.push({text: this.inputValue, done: false});
            this.inputValue = "";
        },
        toggleDone(el) {
            if (el.done === false) {
                el.done = true
            } else {
                el.done = false
            }
        }
    }
}).mount('#app')