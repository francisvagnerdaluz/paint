export const Pincel=(tamanho,cor)=>{
    const canvas=document.querySelector('.canvas')
    const contexto=canvas.getContext('2d')
    contexto.fillStyle=cor
    canvas.onpointerdown=()=>{
        canvas.onpointermove=(evento)=>{
            contexto.fillRect(
                evento.layerX,
                evento.layerY,
                tamanho,
                tamanho
            )
        }
    }
    canvas.onpointerup=()=>{
        canvas.onpointermove=null
    }
}
