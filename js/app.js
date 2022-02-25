const app = new Vue({
    el : '#app',
    data : {
        toAdd : '',
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
        listContainer : 'list-container',
        listClass : 'list-element'
    }
});