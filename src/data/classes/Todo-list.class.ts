import{ITodo} from '../interfaces/ITodo.class';
import{error} from '../../components/spec/module-variable.component'
import{Todo} from './';
export class TodoList{
    public todos:ITodo[];
    constructor(){
        this.todos=[];
        this.cargarLocalStorage();
    }
    nuevoTodo(...restArgs:ITodo[]){
        
        restArgs.forEach(ra=>this.todos.push(ra));
        this.guardarLocalStorage();
    }
    eliminarTodo(id:number){
        this.todos=this.todos.filter(t=>t.id!==id);
        this.guardarLocalStorage();
    }
    marcarCompletado(id:number){
        this.todos.every(t=>{
            if(t.id===id){
                t.completado=!t.completado;
                this.guardarLocalStorage();
                return false;
            }
            return true;
        })
    }
    eliminarCompletados(){
        this.todos=this.todos.filter(t=>!t.completado);
        this.guardarLocalStorage();
    }
    guardarLocalStorage(){
        //convertir a json
        localStorage.setItem('todo',JSON.stringify(this.todos))
    }
    cargarLocalStorage(){

        this.todos=(localStorage.getItem('todo'))
            ?JSON.parse(localStorage.getItem('todo') || error('No hay Todo'))
            :[];
        this.todos=this.todos.map(t=>Todo.fromJson(t));
    }
}