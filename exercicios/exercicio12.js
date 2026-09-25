// Dê um exemplo de duas funções aninhadas:

// ```jsx
// function externo(n) {
//   return interno(n) + 1;
// }
// function interno(m) {
//   return m * 3;
// }
// externo(4);
// ```

// Ao depurar, descreva a diferença prática entre usar **Step Over**, **Step Into** e **Step Out** nesse cenário.

function externo(n) {
    return interno(n) + 1;
}

function interno(m) {
    return m * 3;
}

console.log(externo(4));

console.log("Step Over: executa a função interno sem entrar nela.");
console.log("Step Into: entra na função interno para acompanhar sua execução.");
console.log("Step Out: sai da função interno e retorna para a função externo.");