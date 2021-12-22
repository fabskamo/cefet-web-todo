let listaTarefas = [{
        nome: 'Comprar leite',
        categoria: 'compras',
        realizada: false
    },
    {
        nome: 'escutar chimbinha',
        categoria: 'lazer',
        realizada: true
    }
]

for (let i = 0; i < listaTarefas.length; i++) {
    insereTarefaNaPagina(listaTarefas[i]);
}

function insereTarefaNaPagina(tarefa) {
    let ele = document.querySelector('#lista-tarefas');
    if (tarefa.realizada) {
        ele.innerHTML += '<li class="item-tarefa marcado categoria-' + tarefa.categoria + '">' + tarefa.nome + '</li>';
    } else
        ele.innerHTML += '<li class="item-tarefa categoria-' + tarefa.categoria + '">' + tarefa.nome + '</li>';
}


let botaoNovaTarefa = document.querySelector('#incluir-nova-tarefa');
botaoNovaTarefa.addEventListener('click', botaoAdd)

function botaoAdd() {
    let novaTarefaNome = document.querySelector('#nova-tarefa-nome');
    let novaTarefaCat = document.querySelector('#nova-tarefa-categoria');
    let ele = document.querySelector('#lista-tarefas');
    ele.innerHTML += '<li class="item-tarefa categoria-' + novaTarefaCat.value + '">' + novaTarefaNome.value + '</li>';
}


/* let botaoCategoria = document.querySelector('#filtro-de-categoria');
botaoCategoria.addEventListener('change', function() {

    let botaoCategoria = document.querySelector('#filtro-de-categoria');

    let listaT = document.querySelector('#lista-tarefas li');

    listaT.filter(function(item) {
        return item.startsWith('class');
    });

});
*/