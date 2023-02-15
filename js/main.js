// MAIN HEADER
// SEARCH
const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");
const searchIconeEl = searchEl.querySelector(".search > span");

searchIconeEl.addEventListener("click", function () {
  searchInputEl.classList.toggle("active");
});

searchEl.addEventListener("click", function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});
