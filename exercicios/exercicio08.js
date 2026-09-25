// Crie uma classe `InvalidAgeError extends Error` e uma função `checkAge(age)` que:

// - Se `age < 0` ou `age > 120`, faz `throw new InvalidAgeError("Idade fora do intervalo")`.
// - Caso contrário, retorna `"Idade válida"`.
    
//     Teste com idades como `-5`, `30` e `200`.

class InvalidAgeError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidAgeError";
    }
}

function checkAge(age) {
    if (age < 0 || age > 120) {
        throw new InvalidAgeError("Idade fora do intervalo");
    }

    return "Idade válida";
}

try {
    console.log(checkAge(-5));
} catch (erro) {
    console.log(erro.message);
}

try {
    console.log(checkAge(30));
} catch (erro) {
    console.log(erro.message);
}

try {
    console.log(checkAge(200));
} catch (erro) {
    console.log(erro.message);
}