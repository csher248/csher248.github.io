document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("feedback-form");
  const commentsContainer = document.getElementById("comments-container");

  function loadComments() {
    const saved = JSON.parse(localStorage.getItem("feedbackList") || "[]");
    commentsContainer.innerHTML = "";
    saved.forEach(entry => {
      const li = document.createElement("li");
      li.innerHTML = `<strong>${entry.name}</strong>: <p>${entry.comment}</p>`;
      commentsContainer.appendChild(li);
    });
  }

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = form.elements["name"].value;
      const comment = form.elements["comment"].value;
      const entry = { name, comment };
      const current = JSON.parse(localStorage.getItem("feedbackList") || "[]");
      current.unshift(entry);
      localStorage.setItem("feedbackList", JSON.stringify(current));
      form.reset();
      loadComments();
    });
  }

  if (commentsContainer) {
    loadComments();
  }
});