import{Todo,TodoList} from '../data/classes';
import{createTodoHTML} from '../components';
const todoList:TodoList=new TodoList();
if(localStorage.getItem('todo')){

}else{
    const tarea:Todo=new Todo('Te amo Muchisimo Mía♥♥♥');
    const tarea2:Todo=new Todo('Felices 8 meses mi vida');
    const tarea3:Todo=new Todo('Gracias por apoyarme y motivarme siempre');
    const tarea4:Todo=new Todo('Te ama y desea pasar muchisimo tiempo contigo');
    const tarea5:Todo=new Todo('Tu Brad');
    todoList.nuevoTodo(tarea,tarea2,tarea3,tarea4);
}
todoList.todos.forEach(t=>createTodoHTML(t));




export  {todoList}