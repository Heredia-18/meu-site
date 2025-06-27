// Exemplo simples de JavaScript
document.addEventListener("DOMContentLoaded", function() {
    // Adicionando um evento de clique a todos os links
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        link.addEventListener("click", function() {
            alert("Você clicou em um link!");
        });
    });
});
