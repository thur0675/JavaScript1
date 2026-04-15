let casas = ["", "", "", "", "", "", "", "", ""];
casas[0] = "X";
casas[4] = "O";
function colocarsimbolo(posicao, simbolo) {
    casas[posicao] = simbolo;
}