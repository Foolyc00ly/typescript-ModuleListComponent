import { Todo } from "../data/classes";
import{todoList} from '../config/moduleFunction';
import { createTodoHTML } from "./module-list.component";
import{txtInput} from './spec/module-variable.component';

export const txtInputYa:void|undefined=txtInput?.addEventListener('keyup',(e)=>{
    if((e as KeyboardEvent).key==='Enter' && (<HTMLInputElement>e.target).value.length>0){
        const nuevoTodo:Todo=new Todo((<HTMLInputElement>e.target).value);
        todoList.nuevoTodo(nuevoTodo);
        /* console.log(todoList); */
        console.log((<HTMLInputElement>e.target).value);
        createTodoHTML(nuevoTodo);
        (<HTMLInputElement>e.target).value='';
    }

})

