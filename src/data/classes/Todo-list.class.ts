import{ITodo} from '../interfaces/ITodo.class';
export class TodoList{
    public todos:ITodo[];
    constructor(){
        this.todos=[];
    }
    nuevoTodo(...restArgs:ITodo[]){
        restArgs.forEach(ra=>this.todos.push(ra));
    }
    eliminarTodo(id:number){

    }
    marcarCompletado(id:number){

    }
    eliminarCompletados(){

    }
}