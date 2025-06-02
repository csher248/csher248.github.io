function loadHTML(selector, file) {
    fetch(file)
      .then(response => response.text())
      .then(html => {
        document.querySelector(selector).innerHTML = html;
      });
}
  
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header", "components/header.html");
    loadHTML("nav", "components/nav.html");
    loadHTML("footer", "components/footer.html");
});  