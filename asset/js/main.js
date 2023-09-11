$(document).ready(function(){
    $("form").validate({rules:{
        nome: { required:true },
        email:{ required: true, email: true},
        tel: {required: true},
        }, messages: {
            nome:"Por favor, digite seu nome e tente novamente",
            email: "Por favor, digite seu e-mail e tente novamente",
            tel: "Por favor, digite seu telefone e tente novamente",
        }
    })

    $("#tel").mask("(00) 0.0000-0000", {placeholder: 'Ex: (00)0.0000-0000'})
})