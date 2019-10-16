<template>
    <div class="container my-3">
        <div class="input-group mb-3">
            <div class="input-group-prepend">
                <span class="input-group-text" id="basic-addon1">待辦事項</span>
            </div>
            <input type="text" class="form-control" placeholder="準備要做的任務" v-model="newTodoContent"
                @keyup.enter="addTodo()">
            <div class="input-group-append">
                <button class="btn btn-primary" type="button" @click="addTodo()">新增</button>
            </div>
        </div>
        <div class="card text-center">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li class="nav-item">
                        <a class="nav-link" :class="{'active':visibility == 'all'}" @click="visibility = 'all' "
                            href="#">全部</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{'active':visibility == 'doing'}" @click="visibility = 'doing' "
                            href="#">進行中</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" :class="{'active':visibility == 'completed'}"
                            @click="visibility = 'completed' " href="#">已完成</a>
                    </li>
                </ul>
            </div>
            <ul class="list-group list-group-flush text-left">
                <li class="list-group-item" v-for="(item,index) in filiterTodo" @dblclick="editTodo(item)" :key="index">
                    <div class="d-flex" v-if="cacheTodo.id !== item.id">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" :id="item.id" v-model="item.completed">
                            <label class="form-check-label" :for="item.id" :class="{'completed':item.completed}">
                                {{item.content}}
                            </label>
                        </div>
                        <button type="button" class="close ml-auto" aria-label="Close" @click="removeTodo(item)">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <input type="text" class="form-control" v-if="cacheTodo.id == item.id" v-model="cacheContent"
                        @keyup.enter="saveTodo(item)" @keyup.esc="cancelEdit()">
                </li>
            </ul>
            <div class="card-footer d-flex justify-content-between">
                <span>還有 {{doingTodoTotal}} 筆任務未完成</span>
                <a href="#" @click="clearTodo()">清除所有任務</a>
            </div>
        </div>
    </div>
</template>

<script>
    Vue.filter('dollar', (num = 0) => {
        return `NT$${num}`;
    })

    export default {
        data() {
            return {
                newTodoContent: "",
                todos: [{
                    id: '007',
                    content: "--- 此為使用者測試項目，可進行刪除動作 ---",
                    completed: false,
                }],
                visibility: "all",
                cacheTodo: {},
                cacheContent: "",
            }
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
    }
</script>