console.log('vuetodo')

const todos = [
    {
        text: 'Fare il letto',
        done: false,
    }, 
    {
        text: 'Fare colazione',
        done: true,
    },
    {
        text: 'fare la doccia',
        done: false,
    },
    {
        text: 'Fare la spesa',
        done: false,
    },
    {
        text: 'Andare dal meccanico',
        done: false,
    },
    {
        text: 'Comprare i condensatori',
        done: false,
    },
    {
        text: 'Chiamare Mamma',
        done: false,
    },
    
]

const app = new Vue({
    el: '#app',
    data: {
        todos,
        classiTodos: 'todo',
        newTodo: '',
    },
    methods: {
        toggleDoneOf(todo) {
            console.log(todo)
            todo.done = !todo.done
        },
        addTodo() {

            this.newTodo = this.newTodo.trim();

            if(!this.newTodo) return
            
            this.todos.push({
                text: this.newTodo,
                done: false,
            })
            this.newTodo = ''        
                   
            
        },
    },
})