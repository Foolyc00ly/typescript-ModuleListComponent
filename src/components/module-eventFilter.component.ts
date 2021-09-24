import{ulFiltros,divTodoList,anchorFiltros,contentCount} from './spec/module-variable.component';

export const ulFiltrosYa:void|undefined=ulFiltros?.addEventListener('click',(e)=>{
    const nameElement:string=(e.target as HTMLInputElement).localName;
    const textElement:string=(e.target as HTMLInputElement).innerText;
    let contador:number=0;
    const exprRegular=/[tpc]/ig;
    if((nameElement==='a' && exprRegular.test(textElement))===false){
        return;
    }
    anchorFiltros.forEach(e=>e.classList.remove('selected'));
    (e.target as HTMLInputElement).classList.add('selected');
    for(let i=0; i<=((divTodoList as Element).children).length-1 ;i++){
        const element=(divTodoList as Element).children[i];
        const completado=element.classList.contains('completed');
        element.classList.remove('hidden');
        switch(textElement){
            case `Todos`:
                contador++;
                break;
            case `Pendientes`:
                if(!completado){contador++;}
                if(completado){
                    element.classList.add('hidden');
                }
                break;
            case `Completados`:
                if(completado){contador++;}
                if(!completado){
                    element.classList.add('hidden');
                }
                break;
        }
    }
    (contentCount as HTMLElement).innerText=`${contador}`;
    /* console.log('nombreContent',(e.target as HTMLInputElement).textContent);
    console.log('nombreInnerText',(e.target as HTMLInputElement).innerText);
    console.log('tipo de etiqueta',nameElement);
    console.log('verdadero',nameElement==='a');
    console.log('nombre', ((e.target as HTMLInputElement).firstChild as HTMLInputElement).innerText);
    console.log('tipoHijo',(e.target as HTMLInputElement).firstChild); */
});