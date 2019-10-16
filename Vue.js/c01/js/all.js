Vue.filter('dollar', (num = 0) => {
    return `NT$${num}`;
})

var app = new Vue({
    el: "#app",
    data: {
        newTodoContent: "",
        todos: [{
            id: 007,
            content: "--- 此為使用者測試項目，可進行刪除動作 ---",
            completed: false,
        }],
        visibility: "all",
        cacheTodo: {},
        cacheContent: "",
    },
    methods: {
        // 新增代辦事項
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
        // 移除指定代辦事項
        removeTodo: function (thisItem) {
            // 使用findIndex方法
            let newIndex = this.todos.findIndex(function (item, index) {
                return item.id == thisItem.id;
            });
            // 使用forEach巡視方法
            // this.todos.forEach(function (item, index) {
            //     if (item.id == thisItem.id) {
            //         newIndex = index;
            //     }
            // });
            this.todos.splice(newIndex, 1);

        },
        // 編輯指定代辦事項
        editTodo: function (item) {
            this.cacheTodo = item;
            this.cacheContent = item.content;
        },
        // 取消編輯
        cancelEdit: function () {
            this.cacheTodo = {};
        },
        // 儲存已更改代辦事項
        saveTodo: function (item) {
            item.content = this.cacheContent;
            this.cacheTodo = {};
            this.cacheContent = "";
        },
        // 清除所有代辦事項
        clearTodo: function () {
            this.todos = [];
        }
    },
    computed: {
        // 切換代辦事項類別
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
        // 計算所有未完成代辦事項
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