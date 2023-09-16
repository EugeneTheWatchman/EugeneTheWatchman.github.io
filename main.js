var tabLinks = document.getElementsByClassName("tab-links");
var tabContents = document.getElementsByClassName("tab-contents");

function openTab(tabName){
    for(tabLink of tabLinks){
        tabLink.classList.remove("active-link");
    }
    for(tabContent of tabContents){
        tabContent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

// const slideImage = document.querySelectorAll('.slide-image');
// const slidesContainer = document.querySelectorAll('.slides-container');
// const nextBtn = document.querySelector(".next-btn");
// const prevBtn = document.querySelector(".prev-btn");

// function slideBlockContent(){

// }

// let slideWith = slideImage[0].clientWidth;

// function init(){
//     slideImage.forEach((img, i) => {
//         img.style.left = i * 100 + "%";
//     });
    
//     slideImage[0].classList.add("active");

// }

// init();

// nextBtn.addEventListener("click", () =>
// slidesContainer.style.transform = "translateX(-" +
// slideWith)

// let slideIndex = 0;
// showSlides(); // call showslide method
 
// function showSlides() {
//     let i;

//     let slides = document.getElementsByClassName("slides");

//     const nextBtn = document.querySelector(".next-btn");
//     const prevBtn = document.querySelector(".prev-btn");
 
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
 
//     slideIndex++;
 
//     // if (slideIndex > slides.length) {
//     //     slideIndex =s 1;
//     // }
 
//     // for (i = 0; i < dots.length; i++) {
//     //     dots[i].className = dots[i].className.replace(" active", "");
//     // }
 
//     // slides[slideIndex - 1].style.display = "block";
//     // dots[slideIndex - 1].className += " active";
 
//     setTimeout(showSlides, 2000);
// }

// let slides = document.getElementsByClassName("slides active-slide");
// let slideIndex = 0;

// function nextBtn() {
//     slides[slideIndex].className.remove("active-slide");
//     slides[slideIndex+1].className.add(" active-slide");
// }

var slides = document.querySelectorAll('.slides');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,2000);

function nextBtn() {
  slides[currentSlide].className = 'slides';
  currentSlide = (currentSlide+1)%slides.length;
  slides[currentSlide].className = 'slide active-slide';
}

function prevBtn() {
    slides[currentSlide].className = 'slides';
    currentSlide = (currentSlide-1)%slides.length;
    if (currentSlide < 0) {
        currentSlide = slides.length-1;
    }
    slides[currentSlide].className = 'slide active-slide';
}

function showHide(){
    var moreBlock = document.getElementById("more-about-me");
    var showBtn = document.getElementById("show-button");
    var hideBtn = document.getElementById("hide-button");

    if (moreBlock.style.display === "none") {
        moreBlock.style.display = "block";
        showBtn.style.display = "none";
        hideBtn.style.display = "block";
      } else {
        moreBlock.style.display = "none";
        showBtn.style.display = "block";
        hideBtn.style.display = "none";
      }
}