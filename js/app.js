const app = new Vue({
    el : '#app',
    data : {
        todoList : [
            {
                text : 'comprere il latte',
                done : false
            },
            {
                text : 'fare i compiti',
                done : true
            },
            {
                text : 'pulire casa',
                done : false
            }
        ],
        inputClass : 'enterInput',
    }
});