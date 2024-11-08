const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function toggleSidebar() {
    var sidebar = document.getElementById("mySidebar");
    var main = document.getElementById("main");
    if (sidebar.style.left === "0px") {
        sidebar.style.left = "-250px";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.left = "0px"; 
        main.style.marginLeft = "250px";
    }
}

function closeSidebar() {
    document.getElementById("mySidebar").style.left = "-250px";
    document.getElementById("main").style.marginLeft = "0";
}

let currentItem = 0;
const itemWidth = document. querySelector('.card-group').offsetWidth;

prevBtn.addEventListener('click', () => {
    currentItem--;
    carousel.style.transform = `translateX(-${currentItem * itemWidth}px)`;
});

nextBtn.addEventListener('click', () => {
    currentItem++;
    carousel.style.transform = `translateX(-${currentItem * itemWidth}px)`;
});

document.querySelectorAll('.category-buttons button').forEach(button => {
    button.addEventListener('click', () => {
        alert(`Você escolheu ${button.textContent}`);
    });
});