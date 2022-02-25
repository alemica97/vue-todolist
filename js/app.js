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
    },
    methods : {
        removeTodo : function(index){
            //con splice rimuovo l'elemento in posizione (index) dall'array
            this.todoList.splice(index,1);
        },
        addTodo : function(){
            this.todoList.push( this.toAdd );
            this.toAdd = '';
        }
    }
});