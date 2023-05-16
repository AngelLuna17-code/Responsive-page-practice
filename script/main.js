//menu block-4
function openMenu(evt, menuFood) {
    var i, tabcontent, tabButton;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tabButton = document.getElementsByClassName("tabButton");
    for (i = 0; i < tabButton.length; i++) {
        tabButton[i].className = tabButton[i].className.replace(" active", "");
    }
    document.getElementById(menuFood).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementsByClassName("tabButton")[0].click();

// **********************************************************************************
// block 6 accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var tab = this.nextElementSibling;
        if (tab.style.display === "block") {
            tab.style.display = "none";
        } else {
            tab.style.display = "block";
        }
    });
    if (i === 0) {
        acc[i].classList.add("active");
        acc[i].nextElementSibling.style.display = "block";
    } else {
        acc[i].nextElementSibling.style.display = "none";
    }
}
// **********************************************************************************
// block-7-carousel
var slideIndex = 0;
var sliderContainer = document.querySelector('.slider-container');
var slides = document.querySelectorAll('.slider-container div');
var totalSlides = slides.length;
var slideWidth = slides[0].clientWidth;
var currentPosition = 0;

function slide() {
    currentPosition -= slideWidth;
    if (currentPosition < -(slideWidth * (totalSlides))) {
        currentPosition = 0;
    }
    sliderContainer.style.transform = 'translateX(' + currentPosition + 'px)';
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
}
document.querySelector('.next').addEventListener('click', function() {
    slide();
});
document.querySelector('.back').addEventListener('click', function() {
    currentPosition += slideWidth;
    if (currentPosition > 0) {
        currentPosition = -(slideWidth * (totalSlides));
    }
    sliderContainer.style.transform = 'translateX(' + currentPosition + 'px)';
    slideIndex--;
    if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
});

// **********************************************************************************
// pop-up window
var open = document.getElementById('open');
var open2 = document.getElementById('open2');
var open3 = document.getElementById('open3');
var open4 = document.getElementById('open4');
var open5 = document.getElementById('open5');
var open6 = document.getElementById('open6');
var open7 = document.getElementById('open7');
var open8 = document.getElementById('open8');
var open9 = document.getElementById('open9');
var open10 = document.getElementById('open10');

open.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open2.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open3.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open4.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open5.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open6.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open7.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open8.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open9.addEventListener('click', () => {
    modal_container.classList.add('show');
});

open10.addEventListener('click', () => {
    modal_container.classList.add('show');
});

var modal_container = document.getElementById('modal_container');
var close = document.getElementById('close');

close.addEventListener('click', () => {
    modal_container.classList.remove('show');
});

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let i;
    let x = document.getElementsByClassName("mySlides2");
    if (n > x.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = x.length;
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}

// **********************************************************************************
// dropdown menus
function toggleMenu() {
    var menuDropdown = document.getElementById("menu-dropdown");
    if (menuDropdown.style.display === "block") {
        menuDropdown.style.display = "none";
    } else {
        menuDropdown.style.display = "block";
    }

    event.stopPropagation();
}

function toggleSubMenu() {
    var subMenu = document.getElementById("menu-0");
    if (subMenu.style.display === "block") {
        subMenu.style.display = "none";
    } else {
        subMenu.style.display = "block";
    }

    event.stopPropagation();
}

document.addEventListener("click", function(event) {
    var menuDropdown = document.getElementById("menu-dropdown");
    var subMenu = document.getElementById("menu-0");

    if (event.target !== menuDropdown && event.target !== subMenu) {
        menuDropdown.style.display = "none";
        subMenu.style.display = "none";
    }
});
