function loadHTML(selector, file) {
    fetch(file)
      .then(response => response.text())
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      });
}
  
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "components/header.html");
    loadHTML("nav", "components/nav.html");
    loadHTML("footer", "components/footer.html");
});  