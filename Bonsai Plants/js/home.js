window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function function1() {
  var email = document.getElementById("mc-email").value;
  if (email.length > 0) {
    document.getElementById("nep").style.opacity = "10";
    document.getElementById("nep").style.pointerEvents = "all";
    document.getElementById("mc-email").value = "";
  } else {
    {
      document.getElementById("nepa").style.opacity = "10";
      document.getElementById("nepa").style.pointerEvents = "all";
    }
  }
}
function nepal12() {
  document.getElementById("nepa").style.opacity = "0";
  document.getElementById("nepa").style.pointerEvents = "none";
}
function nepal11() {
  document.getElementById("nep").style.opacity = "0";
  document.getElementById("nep").style.pointerEvents = "none";
}
function name123(){
    alert('Sorry,This Page is under construction.')
}
