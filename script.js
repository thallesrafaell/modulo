function verificar() {
    //variaveis
    let vl1 = document.getElementById(`num1`)
    let vl2 = document.getElementById(`num2`)
    let campa = Number(vl1.value)
    let campb = Number(vl2.value)
    let res = document.getElementById(`res`)
    //condiçao
    if(campa == "" || campb == ""){
        res.innerHTML = `Por favor digite um numero para que eu possa verificar.`
    } else{
        if(campa < campb){
            res.innerHTML = `O  valor do Campo B(${campb}) e maior que o valor do Campo A (${campa})`
        } else {
            res.innerHTML = `Infelizmente o valor do Campo B e menor tente novamente.`
        }
    }
}   