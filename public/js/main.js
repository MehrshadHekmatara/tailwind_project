let dokme1 = document.querySelector(".dokme1");
let dokme2 = document.querySelector(".dokme2");
let dokme3 = document.querySelector(".a-one");
let dokme4 = document.querySelector(".a-two");
let language_close = document.querySelector(".language_close");
let open_language = document.querySelector(".open_language");
let dropdown = document.querySelector(".dropdown-content");
let searchClick = document.querySelector(".search-click");
let none_1 = document.querySelector(".none-1");
let none_2 = document.querySelector(".none-2");
let show = document.querySelector(".show-1");
let close_search = document.querySelector(".close-search");
let menu_click = document.querySelector(".menu-click");
let menu_under_xl = document.querySelector(".menu_undel_xl");
let menu_drop = document.querySelectorAll(".menu-drop");
let menu_close_btn = document.querySelector(".menu-close-btn");

dokme1.addEventListener("click", function () {
  dokme2.classList.add("bg-zinc-500");
  dokme2.classList.remove("bg-blue-600");
  dokme1.classList.remove("bg-zinc-500");
  dokme1.classList.add("bg-blue-600");
});
dokme2.addEventListener("click", function () {
  dokme1.classList.add("bg-zinc-500");
  dokme1.classList.remove("bg-blue-600");
  dokme2.classList.remove("bg-zinc-500");
  dokme2.classList.add("bg-blue-600");
});
dokme3.addEventListener("click", function () {
  dokme1.classList.add("bg-zinc-500");
  dokme1.classList.remove("bg-blue-600");
  dokme2.classList.remove("bg-zinc-500");
  dokme2.classList.add("bg-blue-600");
});
dokme4.addEventListener("click", function () {
  dokme2.classList.add("bg-zinc-500");
  dokme2.classList.remove("bg-blue-600");
  dokme1.classList.remove("bg-zinc-500");
  dokme1.classList.add("bg-blue-600");
});
open_language.addEventListener("click", function () {
  dropdown.classList.remove("hidden");
});
language_close.addEventListener("click", function () {
  dropdown.classList.add("hidden");
});
searchClick.addEventListener("click", function () {
  none_1.classList.add("footer_xl:hidden");
  none_2.classList.add("footer_xl:hidden");
  show.classList.remove("footer_xl:hidden");
  show.classList.add("footer_xl:flex");
});
close_search.addEventListener("click", function () {
  none_1.classList.remove("footer_xl:hidden");
  none_2.classList.remove("footer_xl:hidden");
  show.classList.add("footer_xl:hidden");
  show.classList.remove("footer_xl:flex");
});
menu_click.addEventListener("click", function () {
  menu_under_xl.classList.remove("hidden");
  menu_under_xl.classList.add("flex");
  menu_click.classList.add("hidden");
  menu_click.classList.remove("flex");
  menu_drop.forEach((elem) => {
    elem.classList.remove("dropdown-hover");
  });
});
menu_close_btn.addEventListener("click", function () {
  menu_under_xl.classList.add("hidden");
  menu_under_xl.classList.remove("flex");
  menu_click.classList.remove("hidden");
  menu_click.classList.add("flex");
  menu_drop.forEach((elem) => {
    elem.classList.add("dropdown-hover");
  });
});

