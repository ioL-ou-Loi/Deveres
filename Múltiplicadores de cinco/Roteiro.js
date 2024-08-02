var Resu = document.getElementById("Resultado")

function Confirm(){
    var N = document.getElementById("Multiple")

    var começo = 5 
    var fim = 1 

    var num = Number(N.value)
    var n1 = Number(começo)

    if(num <= 0){
        window.alert("Numero impossivel!")
    } else{
        while(fim <= num){
            Resu.innerHTML += ` ${n1}`
            n1 += 5
            fim ++ 
        }
        if (fim = num){
            Resu.innerHTML += "."
        }
    }
}

function Limpar(){
    Resu.innerHTML = ""
}