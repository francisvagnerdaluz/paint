export const abrirLista=()=>{
    let menu = document.querySelector('#visualizar')
    menu.addEventListener('click',(evento)=>{
        evento.preventDefault()
        let lista=document.querySelector('#escolhas')
        if(lista.classList.contains('invisivel')){
            lista.classList.remove('invisivel')
        }else {
            lista.classList.add('invisivel')
        }
    })
}