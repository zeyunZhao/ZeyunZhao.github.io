async function loadFragment(selector, path) {
  const target = document.querySelector(selector);
  if (!target) return;
  const response = await fetch(path);
  if (!response.ok) {
    target.innerHTML = `<section><p>Failed to load ${path}</p></section>`;
    return;
  }
  target.innerHTML = await response.text();
}

function initFooterYear() {
  const yearNode = document.getElementById("year");
  if (yearNode) yearNode.textContent = new Date().getFullYear();
}

function initNavObserver() {
  const navLinks = Array.from(document.querySelectorAll("nav a"));
  const sections = navLinks
    .map(a => document.querySelector(a.getAttribute("href")))
    .filter(Boolean);

  const setActive = (id) => {
    navLinks.forEach(a => {
      const match = a.getAttribute("href") === "#" + id;
      a.classList.toggle("active", match);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: "-30% 0px -60% 0px", threshold: 0.01 });

  sections.forEach(sec => observer.observe(sec));
}

async function initPage() {
  await Promise.all([
    loadFragment("#sidebar-slot", "components/sidebar.html"),
    loadFragment("#home-slot", "components/home.html"),
    loadFragment("#news-slot", "components/news.html"),
    loadFragment("#research-slot", "components/research.html"),
    loadFragment("#footer-slot", "components/footer.html")
  ]);

  initFooterYear();
  initNavObserver();
}

initPage();
