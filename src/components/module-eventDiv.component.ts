import { todoList } from '../config/moduleFunction';
import {divTodoList} from './spec/module-variable.component'
import{error} from './spec/module-variable.component';
export const divTodoListYa:void|undefined=divTodoList?.addEventListener('click',(e)=>{
    console.log('click');
    let todoIdNumber=0;

    const nameElement:string=(e.target as HTMLInputElement).localName;//input,label,button
    const todoElement:Element|null=((e.target as HTMLInputElement).parentElement as HTMLInputElement).parentElement;
    const todoId:string|null=(todoElement as HTMLInputElement).getAttribute('data-id');
    
    const isNumber:number=!isNaN(todoId as any)?
        (todoIdNumber=(todoId as any)*1):error('No hay Id');

    if(nameElement.includes('input')){//click en el check
        todoList.marcarCompletado(isNumber);
        (todoElement as HTMLInputElement).classList.toggle('completed')
        console.log(todoList);
    }else if(nameElement.includes('button')){//borrar el T.O.D.O
        todoList.eliminarTodo(isNumber);
        divTodoList?.removeChild((todoElement as HTMLInputElement));
    }
    /* console.log('target',e.target);
    console.log('nameElement',nameElement);
    console.log('todoElement',todoElement);
    console.log(isNumber ); */

});