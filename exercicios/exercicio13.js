// Com base no exercício anterior, faça um diagrama simples (em texto) mostrando a call stack no momento em que interno está sendo executado.

function interno(m) {
    return m * 3;
}

function externo(n) {
    return interno(n) + 1;
}

externo(4);

console.log("Call Stack quando interno está sendo executada:");

console.log("▶ interno");
console.log("  ▶ externo");
console.log("    ▶ código principal");