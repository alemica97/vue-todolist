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
        //funzione  che aggiunge ciò che è stato scritto nell'input nella lista, se non si scrive nulla darà errore
        addTodo : function(){
            if( this.toAdd !== ''){
                this.todoList.push( {
                                        text : this.toAdd,
                                        done : false
                                    }
                );
                this.toAdd = '';
            }else{
                alert('Devi scrivere qualcosa per poterlo aggiungere alla lista')
            } 
        }
    }
});