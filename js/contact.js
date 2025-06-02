document.addEventListener("DOMContentLoaded", () => {
  const map = L.map("map").setView([42.6708, -83.8756], 11); 

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; OpenStreetMap contributors',
  }).addTo(map);

  L.marker([42.6708, -82.8756])
    .addTo(map)
    .bindPopup("Based in Macomb, MI.")
    .openPopup();
});