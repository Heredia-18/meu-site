// Exemplo simples de navegação entre os capítulos
document.addEventListener("DOMContentLoaded", function() {
    const nextChapterButton = document.querySelector("#next-chapter");

    if (nextChapterButton) {
        nextChapterButton.addEventListener("click", function() {
            alert("Carregando próximo capítulo...");
            // Aqui você pode implementar a lógica para carregar o próximo capítulo
        });
    }
});
