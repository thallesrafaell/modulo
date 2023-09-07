$(document).ready(function(){
    //add mask ao campos numericos
    $('#telefone').mask('(00) 0.0000-0000')
    $('#cpf').mask('000.000.000-00')
    $('#cep').mask('00000-000')



    //vvalidaçao do formulario
    $('form').validate({
        rules: {
            nome: { required: true },
            email:{required: true },
            telefone: {required: true },
            cpf: {required: true},
            cep: {required: true},
            endereco : {required: true}
        }, messages: {
            nome: 'Por favor, digite seu nome.',
            email: "Por favor, digite seu e-mail.",
            telefone: "Por favor, digite seu telefone.", 
            cpf: "Por favor, digite seu CPF.",
            cep: "Por favor, digite seu CEP.",
            endereco: "Por favor, digite seu endereço.", 
        }, submitHandler: function(form){},
    })
    //
})