$(document).ready(function(e){

    //ADD TAREFA
    $('form').on('submit', (e) => {
        e.preventDefault()
        const nomeTarefa = $('#tarefa').val()
        const ulTarefas = $('#listatarefas')
        const novaTarefa = $(`<li id="tarefas">${nomeTarefa}</li>`)
        $(novaTarefa).appendTo(ulTarefas)

        //MARCA TAREFA COMO COMPLETA
        $(novaTarefa).click(function(){
            $(novaTarefa).addClass('completas')
        })

        //DESMARCA TAREFA COMPLETA
        $(novaTarefa).on('dblclick', () => {
        $(novaTarefa).removeClass('completas')
        })

        $('#tarefa').val('')
    })
})