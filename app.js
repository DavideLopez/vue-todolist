console.log('vuetodo')

const todos = [
    {
        text: 'Creare il file HTML',
        done: true,
    }, 
    {
        text: 'Creare il file CSS',
        done: true,
    },
    {
        text: 'Creare il file JS',
        done: true,
    },
    {
        text: 'Scrivere i collegamenti al CSS e gli script',
        done: false,
    },
    {
        text: 'Primo Push',
        done: false,
    },
    {
        text: 'Iniziare a scrivere la bozza del codice',
        done: false,
    },
    {
        text: 'Fare il primo commit',
        done: false,
    },
    {
        text: 'Fare una pausa',
        done: false,
    },
    {
        text: 'Pushare i compiti ai tutors',
        done: false,
    },
    
]

const app = new Vue({
    el: '#root',
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