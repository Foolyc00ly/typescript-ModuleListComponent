const divTodoList:Element|null=document.querySelector('.todo-list');
const error=(message:string):never=>{throw new Error(message)};
export{divTodoList,error}