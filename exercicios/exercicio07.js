// Altere `safeParse` para escrever no console (com `console.log`) a mensagem `"Parse attempt finished"` **sempre**, independentemente de ter ocorrido erro ou não.

// Utilize `finally` para isso e teste ambos os cenários.

function safeParse(jsonString) {
    try {
        return JSON.parse(jsonString);
    } catch (erro) {
        if (erro instanceof SyntaxError) {
            return null;
        }

        throw erro;
    } finally {
        console.log("Parse attempt finished");
    }
}

console.log(safeParse('{"nome": "Leandromeda"}'));

console.log(safeParse("texto inválido"));