function init() {
    new Vue({
        el:'#app',

        data:{
            'todos':[1,2,3,4,5],
            'newTodo':''
        },

        methods:{
            addTodo: function () {
                if (this.newTodo.length > 0) {
                    this.todos.push(this.newTodo);
                    this.newTodo=''
                }
            },
            removeTodo: function (ind) {
                this.todos.splice(ind,1)
            }
        }
    });
}

$(init);
