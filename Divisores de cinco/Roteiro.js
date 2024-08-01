function Confirm(){
    var N = document.getElementById("Divide")
    var Resu = document.getElementById("Resultado")

    var num = Number(N.value)

    if(num <= 0){
        window.alert("Numero impossivel!")
    }
}