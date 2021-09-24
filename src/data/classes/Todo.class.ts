import{ITodo} from '../interfaces/ITodo.class';
export class Todo implements ITodo{
    static fromJson({id,tarea,completado,creado}:ITodo):ITodo{
        const tempTodo=new Todo(tarea)
        tempTodo.id=id;
        tempTodo.completado=completado;
        tempTodo.creado=creado;
        return tempTodo;
    }
    public tarea:string;
    public id:number;
    public completado:boolean;
    public creado:Date;
    constructor(tarea:string){
        this.tarea=tarea;
        this.id=new Date().getTime();
        this.completado=false;
        this.creado=new Date();
    }
}