// تعریف متغیرها با استفاده از const
const signInBtn = document.querySelector("#sign-in-btn");
const signUpBtn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");
const searchIcon = document.querySelector("#search-icon");
const nav = document.querySelector(".nav");
const searchInput = document.querySelector(".search-input");
const menuToggle = document.querySelector('.menu-toggle');

// تابع برای اضافه کردن حالت ثبت‌نام
function activateSignUpMode() {
  container.classList.add("sign-up-mode");
}

// تابع برای حذف حالت ثبت‌نام
function deactivateSignUpMode() {
  container.classList.remove("sign-up-mode");
}

// تابع برای تغییر حالت جستجو
function toggleSearchMode() {
  nav.classList.toggle("search");
  nav.classList.toggle("no-search");
  searchInput.classList.toggle("search-active");
}

// تابع برای تغییر حالت نمایش منوی موبایل
function toggleMobileNav() {
  nav.classList.toggle("mobile-nav");
  menuToggle.classList.toggle("is-active");
}

// اضافه کردن رویدادهای کلیک
signUpBtn.addEventListener("click", activateSignUpMode);
signInBtn.addEventListener("click", deactivateSignUpMode);
searchIcon.addEventListener("click", toggleSearchMode);
menuToggle.addEventListener("click", toggleMobileNav);
