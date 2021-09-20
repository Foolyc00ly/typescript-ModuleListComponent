import{ITodo} from '../interfaces/ITodo.class';
export class Todo implements ITodo{
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