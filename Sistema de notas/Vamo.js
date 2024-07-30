function Confirmar(){
    var texto = document.getElementById("name")
    var numeru = document.getElementById("nota")

    var Nome = texto.value 
    var conta = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    var Nota = Number(numeru.value)

    var Frase = document.getElementById("Resultado")

    if(Nota == 0){
        Frase.innerHTML = `${Nome} acabou por tirar ${Nota}! Que falh- digo, que pena.`
    } else if(Nota == 1){
        Frase.innerHTML = `${Nome} tirou ${Nota}...! É melhor que 0, eu acho.`
    } else if(Nota == 2){
        Frase.innerHTML = `Se a cada ponto ${Nome} ganhasse uma moeda, ele apenas teria ${Nota} moedas! O que não é muito, mas eu gosto desse meme.`
    } else if(Nota == 3){
        Frase.innerHTML = `${Nome} acabou tirando ${Nota}! Já pode pedir musica pro fantástico.`
    } else if(Nota == 4){
        Frase.innerHTML = `${Nome} tirou ${Nota} em sua prova, um numero entediante.`
    } else if(Nota == 5){
        Frase.innerHTML = `${Nome} acabou tirando ${Nota}! Tão longe, mas tão perto da média...!!!`
    } else if (Nota == 6){
        Frase.innerHTML = `${Nome} passou raspando com ${Nota} pontos!`
    } else if (Nota == 7){
        Frase.innerHTML = `${Nota} é um bom numero, mas nem tanto, se esforce mais na próxima vez, ${Nome}`
    } else if (Nota == 8){
        Frase.innerHTML = `${Nome} conseguiu o infinito... só que de pé, logo, ${Nota}`
    } else if (Nota == 9){
        Frase.innerHTML = `${Nome} tirou ${Nota} na prova. Isto tanto é uma nota satisfatória, quanto frustrante, um ponto de distância da perfeição...`
    } else if (Nota == 10){
        Frase.innerHTML = `${Nome} você finalmente chegou a nota ${Nota}!... nada mais que sua responsabilidade.`
    } else {
        window.alert("Nota inviável.")
    }
}