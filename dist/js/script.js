//navbar fixed//
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// hamburger//
const hamburger = document.querySelector("#hamburger");
const navmenu = document.querySelector("#nav-menu");
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navmenu.classList.toggle("hidden");
});


document.addEventListener('click', function(e){
  if(!navmenu.contains(e.target) && !hamburger.contains(e.target)){
    navmenu.classList.remove('hamburger-active')
  }
})

const body = document.querySelector("#body")
const navbar = document.querySelector("#navbar")
const name = document.querySelector("#name")
const tag = document.querySelector("#tag")
const tag2 = document.querySelector("#tag2")
const tag3 = document.querySelector("#tag3")
const tag4 = document.querySelector("#tag4")
const tag5 = document.querySelector("#tag5")
const tag6 = document.querySelector("#tag6")
const tag7 = document.querySelector("#tag7")
const tag8 = document.querySelector("#tag8")
const sun = document.querySelector("#sun")
const moon = document.querySelector("#moon")
const buttonNight = () => {
  body.classList.add("bg-slate-700")
  navbar.classList.add("text-white")
  name.classList.add("text-white")
  tag.classList.add("text-white")
  tag2.classList.add("text-white")
  tag3.classList.add("text-white")
  tag4.classList.add("text-white")
  tag5.classList.add("text-white")
  tag6.classList.add("text-white")
  tag7.classList.add("text-white")
  tag8.classList.add("text-white")
  moon.classList.add("hidden")
  sun.classList.add("visible text-white")
}

const buttonSun = () => {
  body.classList.remove("bg-slate-700")
  navbar.classList.remove("text-white")
  name.classList.remove("text-white")
  tag.classList.remove("text-white")
  tag2.classList.remove("text-white")
  tag3.classList.remove("text-white")
  tag4.classList.remove("text-white")
  tag5.classList.remove("text-white")
  tag6.classList.remove("text-white")
  tag7.classList.remove("text-white")
  tag8.classList.remove("text-white")
  moon.classList.remove("hidden")
  sun.classList.remove("visible text-white")
}