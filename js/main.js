document.addEventListener("DOMContentLoaded", () => {
  const facts = [
    "I started university when I was a wee lad of 15 years.",
    "I have a pet sparrow.",
    "I write poetry."
  ];
  const factEl = document.getElementById("fun-fact");
  if (factEl) {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factEl.textContent = randomFact;
  }
});