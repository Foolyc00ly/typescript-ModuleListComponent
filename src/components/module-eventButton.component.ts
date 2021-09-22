import { btnBorrar } from "./spec/module-variable.component";
import{todoList} from '../config/moduleFunction';
import{divTodoList} from './spec/module-variable.component';
export const btnBorrarYa:void|undefined=btnBorrar?.addEventListener('click',(e)=>{
    todoList.eliminarCompletados();
    
    
    for(let i=((divTodoList as Element).children).length-1; i>=0 ;i--){
        const element=(divTodoList as Element).children[i];
        if(element.classList.contains('completed')){
            (divTodoList as Element).removeChild(element);
        }
        /* console.log(element); */
    }
    console.log(todoList);
    /* todoList.every */
});