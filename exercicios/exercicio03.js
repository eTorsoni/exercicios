// Em que cenários seu programa deve assumir que não pode confiar plenamente em dados de entrada do usuário? Escreva um pequeno comentário indicando como você trataria validações simples (tipo “número esperado, string recebida”).

function confiabilidadeLimitada() {
    console.log("Não devemos confiar plenamente em dados digitados pelo usuário, formulários, arquivos ou informações recebidas de outros sistemas.");

    console.log("Se o programa espera um número, devemos verificar se o valor recebido realmente é um número antes de utilizá-lo.");
}

confiabilidadeLimitada();