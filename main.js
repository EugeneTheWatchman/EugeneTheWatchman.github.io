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
