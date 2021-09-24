//Referencias HTML
const txtInput:Element|null=document.querySelector('.new-todo');
const divTodoList:Element|null=document.querySelector('.todo-list');
const btnBorrar:Element|null=document.querySelector('.clear-completed');
const ulFiltros:Element|null=document.querySelector('.filters');
const anchorFiltros:NodeListOf<HTMLElement>=document.querySelectorAll('.filtro');
const contentCount:Element|null=document.querySelector('.content-count');
//Funcion Never
const error=(message:string):never=>{throw new Error(message)};
//Exportacion
export{divTodoList,error,btnBorrar,txtInput,ulFiltros,anchorFiltros,contentCount}