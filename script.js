
function enviar(event) {

    // IMPEDE O FORMULÁRIO DE ATUALIZAR A PÁGINA
    event.preventDefault();

    // Pega o nome digitado pelo visitante
    let nome = document.getElementById("nome").value;

    // Mostra uma mensagem personalizada
    alert("Olá, " + nome + "! Sua mensagem foi enviada com sucesso. 🌎🙏🏻");

}
