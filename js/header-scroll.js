let lastScrollTop = 0;
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; 
});
