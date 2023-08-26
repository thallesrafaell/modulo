function verificar() {
    //variaveis
    let vl1 = document.getElementById(`num1`)
    let vl2 = document.getElementById(`num2`)
    let campa = Number(vl1.value)
    let campb = Number(vl2.value)
    let res = document.getElementById(`res`)
    let input = document.getElementById('num1')
    let input2 = document.getElementById('num2')
    //condiçao
    if(campa == "" || campb == ""){
        res.innerHTML = `Por favor digite um numero para que eu possa verificar.`
        res.style.background = `#ff00006b`
        input.style.border = '1.5px solid red'
        input2.style.border = '1.5px solid red'
        res.style.color = '#e42020'
    } else{
        if(campa < campb){
            res.innerHTML = `O  valor do Campo B(${campb}) e maior que o valor do Campo A (${campa})`
            res.style.background = `#10b91059`
            input.style.border = '1px solid #3b5366'
            input2.style.border = '1px solid #3b5366'
            res.style.color = '#3b5366'
        } else {
            res.innerHTML = `Infelizmente o valor do Campo B e menor tente novamente.`
            res.style.background = `#ff00006b`
            res.style.color = '#e42020'
        }
    }
}   