var app = new Vue({
    el: '#app',
    data: {
        newTodoContent: "",
        todos: [{
            id: '',
            content: '你好',
            completed: false
        }],
        cacheTodo: {},
        cacheContent: '',
        visibility: "all",
    },
    methods: {
        addTodo: function () {
            let value = this.newTodoContent.trim();
            let thisId = Math.floor(Date.now())
            if (value == "") {
                return;
            }
            this.todos.push({
                id: thisId,
                content: value,
                completed: false,
            })
            this.newTodoContent = "";
        },
        removeTodo: function (filiterTodo) {
            let newIndex = '';
            let vm = this;
            vm.todos.forEach(function (item, index) {
                if (filiterTodo.id == item.id) {
                    newIndex = index;
                }
            })
            this.todos.splice(newIndex, 1);

        },
        editTodo: function (item) {
            this.cacheTodo = item;
            this.cacheContent = item.content;

        },
        cancelEdit: function () {
            this.cacheTodo = {};
        },
        saveTodo: function (item) {
            item.content = this.cacheContent;
            this.cacheContent = "";
            this.cacheTodo = {};
        },
        clearTodo: function () {
            this.todos = [];
        },
    },
    computed: {
        filiterTodos: function () {
            if (this.visibility == "all") {
                return this.todos;
            } else if (this.visibility == "doing") {
                let doingTodos = [];
                this.todos.forEach(function (item) {
                    if (item.completed == false) {
                        doingTodos.push(item);
                    }
                })
                return doingTodos;
            } else if (this.visibility == "completed") {
                let compietedTodo = [];
                this.todos.forEach(function (item) {
                    if (item.completed == true) {
                        compietedTodo.push(item);
                    }
                })
                return compietedTodo;
            }
        },
        doingTodoCount: function () {
            let object = [];
            this.todos.forEach(function (item) {
                if (item.completed == false) {
                    object.push(item);
                }
            })
            return object.length;
        }

    }
});