// static/js/script.js
document.addEventListener("DOMContentLoaded", () => {
  const sidebar      = document.getElementById("sidebar");      // <aside>
  const openButtons  = document.querySelectorAll("#openSidebar"); 
  const closeButton  = document.getElementById("closeSidebar"); // X icon

  /* ----- helpers ----- */
  const openSidebar  = () => sidebar.classList.add("open");
  const closeSidebar = () => sidebar.classList.remove("open");

  /* open icons (both desktop+mobile) */
  openButtons.forEach(btn => btn.addEventListener("click", openSidebar));

  /* close icon */
  if (closeButton) closeButton.addEventListener("click", closeSidebar);

  sidebar.querySelectorAll("a").forEach(link =>
    link.addEventListener("click", closeSidebar)
  );

  /* footer year auto‑update */
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
