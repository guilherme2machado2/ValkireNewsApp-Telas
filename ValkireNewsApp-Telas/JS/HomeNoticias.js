function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px"; // Oculta o menu
        main.style.marginLeft = "0"; // Restaura a margem do conteúdo
    } else {
        sidebar.style.left = "0px"; // Mostra o menu
        main.style.marginLeft = "250px"; // Move o conteúdo para a direita
    }
}

function closeSidebar() {
    document.getElementById("mySidebar").style.left = "-250px"; // Oculta o menu
    document.getElementById("main").style.marginLeft = "0"; // Restaura a margem do conteúdo
}