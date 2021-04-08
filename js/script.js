function init() {
    new Vue({
        el:'#app',

        data:{
            'todos':[1,2,3,4,5],
            'newTodo':''
        },

        methods:{
            addTodo: function () {
                console.log(this.newTodo);
                this.todos.push(this.newTodo)
            }
        }
    });
}

$(init);
