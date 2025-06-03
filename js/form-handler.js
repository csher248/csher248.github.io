document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
  
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        const data = new FormData(form);
  
        fetch(form.action, {
          method: "POST",
          body: data,
          headers: {
            Accept: "application/json",
          },
        })
          .then((response) => {
            if (response.ok) {
              window.location.href = "thankyou.html"; 
            } else {
              alert("Submission failed. Please try again.");
            }
          })
          .catch(() => {
            alert("An error occurred. Please try again later.");
          });
      });
    }
});