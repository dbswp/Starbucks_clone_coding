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

// input에 focus가 빠지면 ""
searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(".notice .inner .inner_left .swiper", {
  direction: "vertical", // 어느방향으로 이동
  loop: true,
  autoplay: true,
});

//SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal", // 기본값이 수평. 안 써줘도 됨.
  slidesPerView: 3, // 슬라이드에서 몇장 보여줄 것인지
  spaceBetween: 10, // 아이템 간 거리
  centeredSlides: true, // 핵심 슬라이드를 어디에 보여줄 것인지
  loop: true,
  autoplay: {
    // 객체를 줘서 세부사항 설정 가능
    delay: 2000,
    disableOnInteraction: false, // 사용자가 건드려도 계속 autoplay 되게
  },
  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

// CONTROLAUTOPLAY
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start(); // 실행중이 아니면 시작
  } else {
    swiperPromotion.autoplay.stop();
  }
}
// TOGGLE PROMOTION
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

//toggle 만들기 위해 클래스 추가,삭제
promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

// viual 애니메이션 파트
window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

// 엘살바도르 애니메니션 파트 - 스크롤
// window.addEventListener("scroll", function () {
//   if (window.scrollY > 192) {
//     const elsalvardorSection = document.querySelector(".elsalvardor");
//     elsalvardorSection.classList.add("animate");
//   }
//   if (window.scrollY > 731) {
//     const etiopiaSection = document.querySelector(".etiopia");
//     etiopiaSection.classList.add("animate");
//   }
//   if (window.scrollY > 1220) {
//     const etiopiaSection = document.querySelector(".etiopia");
//     etiopiaSection.classList.add("animate");
//   }
//   if (window.scrollY > 1948) {
//     const magazineSection = document.querySelector(".magazine");
//     magazineSection.classList.add("animate");
//   }
//   if (window.scrollY > 210) {
//     const elsalvardorSection = document.querySelector(".elsalvardor");
//     elsalvardorSection.classList.add("animate");
//   }
// });

window.addEventListener("scroll", function () {
  console.log(window.scrollY);
  if (window.scrollY > 2357) {
    const findstoreSection = document.querySelector(".findstore");
    findstoreSection.classList.add("animate");
  } else if (window.scrollY > 1970) {
    const magazineSection = document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  } else if (window.scrollY > 1220) {
    const favoriteSection = document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  } else if (window.scrollY > 760) {
    const etiopiaSection = document.querySelector(".etiopia");
    etiopiaSection.classList.add("animate");
  } else if (window.scrollY > 210) {
    const elsalvardorSection = document.querySelector(".elsalvardor");
    elsalvardorSection.classList.add("animate");
  }
});
