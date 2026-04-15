let casas = ["", "", "", "", "", "", "", "", ""];
function colocarsimbolo(posicao, simbolo) {
    casas[posicao] = simbolo;
}
colocarsimbolo(0, "X");
colocarsimbolo(1, "X");
colocarsimbolo(2, "X");
if (casas[0] === "X" && casas[1] === "X" && casas[2] === "X") {
    console.log("X venceu");
} 
console.log(casas);