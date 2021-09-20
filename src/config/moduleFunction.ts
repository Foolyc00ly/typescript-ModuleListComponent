import{Todo,TodoList} from '../data/classes';
/* import{createTodoHTML} from '../components/module-list.component'; */
import{createTodoHTML,txtInputYa} from '../components';

const todoList:TodoList=new TodoList();
const tarea:Todo=new Todo('Aprender TS');
const tarea2:Todo=new Todo('Comprar comida para Plue');
const tarea3:Todo=new Todo('Amar a Mía♥');
const tarea4:Todo=new Todo('Amar mucho a Mía♥')
todoList.nuevoTodo(tarea,tarea2,tarea3,tarea4);
/* const btnCreateTodoHTML:HTMLDivElement=createTodoHTML(tarea); */
todoList.todos.forEach(t=>createTodoHTML(t));
export  {todoList}