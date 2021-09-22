//Referencias HTML
const txtInput:Element|null=document.querySelector('.new-todo');
const divTodoList:Element|null=document.querySelector('.todo-list');
const btnBorrar:Element|null=document.querySelector('.clear-completed');
//Funcion Never
const error=(message:string):never=>{throw new Error(message)};
//Exportacion
export{divTodoList,error,btnBorrar,txtInput}