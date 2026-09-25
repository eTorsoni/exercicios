// Melhore `safeParse` para que, no `catch`, você verifique se o erro é um `SyntaxError`.

// - Se for `SyntaxError`, retorne null.
// - Caso contrário, relance a exceção (usando `throw`) para não “engolir” erros inesperados.

function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    }
}

console.log(safeParse('{"nome": "Leandromeda"}'));
console.log(safeParse("texto inválido"));