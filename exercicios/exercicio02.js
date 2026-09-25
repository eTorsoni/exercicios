// Dê um exemplo de situação em que algo “deu errado” no seu código mas não gerou uma exceção (isto é, não disparou throw).

function errosSemExcecoes() {
    console.log("Um exemplo é quando o programa deveria somar dois números, mas recebe uma string.");

    console.log(2 + "3");

    console.log("O resultado é '23'. O código não gera uma exceção, mas o resultado pode estar errado para o objetivo do programa.");
}

errosSemExcecoes();