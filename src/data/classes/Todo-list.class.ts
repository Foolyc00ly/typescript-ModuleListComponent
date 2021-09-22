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
        this.todos=this.todos.filter(t=>t.id!==id);
    }
    marcarCompletado(id:number){
        this.todos.every(t=>{
            if(t.id===id){
                t.completado=!t.completado;
                return false;
            }
        })
    }
    eliminarCompletados(){
        this.todos=this.todos.filter(t=>!t.completado);
    }
}