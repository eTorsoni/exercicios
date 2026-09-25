// Considere este código:

// ```jsx
// function soma(a, b) {
//   return a + b;
// }
// console.log(soma(2, undefined));
// ```

// Use `console.log` em outros pontos (antes e depois da soma) para entender por que o resultado é `NaN`. Escreva um comentário apontando a causa.

function soma(a, b) {
    console.log("Antes da soma:");
    console.log("a =", a);
    console.log("b =", b);

    const resultado = a + b;

    console.log("Depois da soma:");
    console.log("resultado =", resultado);

    return resultado;
}

console.log(soma(2, undefined));

// O resultado é NaN porque b recebeu undefined.
// Ao tentar fazer 2 + undefined, o JavaScript não consegue
// obter um resultado numérico válido.