import {ITodo} from '../data/interfaces/ITodo.class';

const error=(message:string):never=>{throw new Error(message)};
//Referencias en el HTML
const divTodoList:Element|null=document.querySelector('.todo-list');

export const createTodoHTML=(todo:ITodo):Element|null=>{
    const HTMLTodo:string=`
    <li class="${(todo.completado)?'completed':''}" data-id="${todo.id}">
	    <div class="view">
		    <input class="toggle" 
                type="checkbox" ${(todo.completado)?'checked':''}>
			<label>${todo.tarea}</label>
			<button class="destroy"></button>
	    </div>
	    <input class="edit" value="Create a TodoMVC template">
    </li>`;

    const div:Element|null=document.createElement('div');
    div.innerHTML=HTMLTodo;
    (divTodoList as HTMLDivElement).append(
      div.firstElementChild || error('Elemento no Enviado'));
    return div.firstElementChild;
}