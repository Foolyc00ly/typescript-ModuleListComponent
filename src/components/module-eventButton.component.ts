import { btnBorrar } from "./spec/module-variable.component";
import{todoList} from '../config/moduleFunction';
export const btnBorrarYa:void|undefined=btnBorrar?.addEventListener('click',(e)=>{
    todoList.eliminarCompletados();
    console.log(todoList);
});