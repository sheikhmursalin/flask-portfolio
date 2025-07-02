// -------- Sidebar Toggle --------
const sidebar     = document.getElementById("sidebar");
const openBtn     = document.getElementById("openSidebar");
const closeBtn    = document.getElementById("closeSidebar");

openBtn.addEventListener("click", () => sidebar.classList.add("open"));
closeBtn.addEventListener("click", () => sidebar.classList.remove("open"));

// Close sidebar on link click (mobile UX)
document.querySelectorAll("#sidebar a").forEach(link =>
  link.addEventListener("click", () => sidebar.classList.remove("open"))
);

// -------- Smooth Scroll --------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
  });
});

// -------- Enquiry Form (client‑side) --------
const form   = document.getElementById("enquiryForm");
const status = document.getElementById("formStatus");

form.addEventListener("submit", async e => {
  e.preventDefault();
  // Collect data
  const data = {
    name   : document.getElementById("name").value.trim(),
    email  : document.getElementById("email").value.trim(),
    message: document.getElementById("message").value.trim()
  };
  // Basic validation
  if (!data.name || !data.email || !data.message) {
    status.textContent = "Please fill all fields.";
    status.style.color = "crimson";
    return;
  }
  // OPTIONAL: send via Fetch to Flask backend
  try {
    const res = await fetch("/enquiry", {
      method : "POST",
      headers: { "Content-Type": "application/json" },
      body   : JSON.stringify(data)
    });
    if (res.ok) {
      status.textContent = "Thank you! I’ll get back to you soon.";
      status.style.color = "green";
      form.reset();
    } else throw new Error();
  } catch (err) {
    status.textContent = "Could not send. Please try later.";
    status.style.color = "crimson";
  }
});

// -------- Dynamic Year in Footer --------
document.getElementById("year").textContent = new Date().getFullYear();
