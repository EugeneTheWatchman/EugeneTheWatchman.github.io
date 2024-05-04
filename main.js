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

const URL_APP = "https://script.google.com/macros/s/AKfycbz1hJT3x8R5LnJ1oKI0sC9g-XLMSxVNLt4bqNSf3z9aHdYJtpP1ppdlV0ebdqg5Edkn/exec";

// find form in document
const form = document.querySelector("#form");

// send form address
form.action = URL_APP;

// extra check fields
function isFilled(details) {
    const { name, email, message } = details;
    if (!name) return false;
    if (!email) return false;
    if (!message) return false;
    return true;
}


form.addEventListener("submit", async (ev) => {
ev.preventDefault();

const name = document.querySelector("[name=name]");
const email = document.querySelector("[name=email]");
const message = document.querySelector("[name=message]");

let details = {
    name: name.value.trim(),
    email: email.value.trim(),
    message: message.value.trim(),
};

if (!isFilled(details)) return;

let formBody = [];
for (let property in details) {
    let encodedKey = encodeURIComponent(property);
    let encodedValue = encodeURIComponent(details[property]);
    formBody.push(encodedKey + "=" + encodedValue);
}
formBody = formBody.join("&");

const result = await fetch(URL_APP, {
    method: "POST",
    headers: {
    "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    },
    mode: "cors", 
    body: formBody,
})
    .then((res) => res.json())
    .catch((err) => alert("Error!"))
    
    if( result.type === 'success' ) {
    name.value = '';
    email.value = '';
    message.value = '';
    alert('Thank you for your offer! I will contact you shortly.')
    }
    if( result.type === 'error' ) {            
    alert(`Error( ${result.errors}`)
    }
});

