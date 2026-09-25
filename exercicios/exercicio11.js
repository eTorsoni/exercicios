// Insira a instrução `debugger` dentro de uma função qualquer — por exemplo:

// ```jsx
// function testeDebug(x) {
//   const y = x * 2;
//   debugger;
//   return y;
// }
// testeDebug(5);
// ```

// No navegador, recarregue a página e verifique o que acontece quando a execução atingir `debugger`. Escreva um pequeno relatório (2–3 linhas) sobre sua experiência.

function testeDebug(x) {
    const y = x * 2;

    debugger;

    return y;
}

console.log(testeDebug(5));

console.log("Relatório: quando a execução chega ao comando debugger, o navegador pausa o programa.");
console.log("Nesse momento podemos observar as variáveis e acompanhar a execução linha por linha.");