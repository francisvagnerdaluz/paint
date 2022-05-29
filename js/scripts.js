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
export const abrirBorracha=()=>{
    let menu = document.querySelector('.borracha')
    menu.addEventListener('click',(evento)=>{
        evento.preventDefault()
        let lista=document.querySelector('#escolhas-borracha')
        if(lista.classList.contains('invisivel')){
            lista.classList.remove('invisivel')
        }else {
            lista.classList.add('invisivel')
        }
    })
}