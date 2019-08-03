var app = new Vue({
    el: "#app",
    data: {
        newTodoContent: "",
        todos: [{
            id: 85,
            content: 48,
            completed: false,
        }],
        visibility: "all",
        cacheTodo: "",
        cacheContent: "",
    },
    methods: {
        addTodo: function () {
            let value = this.newTodoContent.trim();
            let thisId = Date.now();
            if (value == "") {
                return
            }
            this.todos.push({
                id: thisId,
                content: value,
                completed: false,
            })
            this.newTodoContent = "";
        },
        removeTodo: function (thisItem) {
            let newIndex = "";
            this.todos.forEach(function (item, index) {
                if (item.id == thisItem.id) {
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
            this.cacheTodo = {};
            this.cacheContent = "";
        },
        clearTodo: function () {
            this.todos = [];
        }
    },
    computed: {
        filiterTodo: function () {
            if (this.visibility == "all") {
                return this.todos;
            } else if (this.visibility == "doing") {
                let doingTodo = [];
                this.todos.forEach(function (item) {
                    if (item.completed == false) {
                        doingTodo.push(item);
                    }
                })
                return doingTodo;
            } else if (this.visibility == "completed") {
                let completedTodo = [];
                this.todos.forEach(function (item) {
                    if (item.completed == true) {
                        completedTodo.push(item);
                    }
                })
                return completedTodo;
            }
        },
        doingTodoTotal: function () {
            let allDoingTodo = [];
            this.todos.forEach(function (item) {
                if (item.completed == false) {
                    allDoingTodo.push(item);
                }
            })
            return allDoingTodo.length;
        }
    },
})