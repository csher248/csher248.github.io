document.addEventListener("DOMContentLoaded", () => {
  const facts = [
    "I graduated Michigan State Univeristy in 2025.",
    "I have a pet cat named Sam.",
    "I explore game development in Unity."
  ];
  const factEl = document.getElementById("fun-fact");
  if (factEl) {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    factEl.textContent = randomFact;
  }
});