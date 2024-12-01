const button = document.querySelector('.button-add-task');

const input = document.querySelector('.input-task')

const listaCompleta= document.querySelector('.list-task')

const buttonLimpar= document.querySelector('.button-Limpar')


let minhaListaDeItens=[]

function adicionarNovaTarefa(){
 
    minhaListaDeItens.push({
        tarefa: input.value,
        concluida:false
    })

    input.value=''

    MostrarTarefas()

}

function MostrarTarefas(){

    let NovaLi= ''

    minhaListaDeItens.forEach( (item,index)=>{

        NovaLi=NovaLi+`

        <li class="task ${item.concluida && "teste"}" >
                <img class="imgB" src="imagens/verificar.png" alt="" 
               onclick="concluirTarefa(${index})">
                <p>${item.tarefa}</p>
                <img class="imgB" src="imagens/caixa.png" alt="" onclick="DeletarItem(${index})" >
            </li>
        `

    })

    listaCompleta.innerHTML=NovaLi


    
}
function DeletarItem(index){

    minhaListaDeItens.splice(index,1)

    MostrarTarefas()
}

function concluirTarefa(index){

    minhaListaDeItens[index].concluida= !minhaListaDeItens[index].concluida

    MostrarTarefas()
}




button.addEventListener('click', adicionarNovaTarefa )