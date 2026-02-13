const navigationLinks = document.querySelectorAll(".technology-nav a");
const techInfo = document.querySelector(".tech-info");
const technologyImageContainer = document.querySelector(".technology-image-container");

const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const renderTechnology = (technology) => {
  techInfo.innerHTML = `
          <h2>${technology.name}</h2>
          <p>
          ${technology.description}
          </p>`;
    technologyImageContainer.innerHTML = `
        <picture>
          <source media="(min-width: 1024px)" srcset="${technology.images.portrait}">
          <img src="${technology.images.landscape}" alt="space capsule with earth in the background">
        </picture>`;
};

const setActiveLink = (activeLink) => {
  navigationLinks.forEach((link) => {
    const isActive = link === activeLink;
    link.classList.toggle("active", isActive);

    if (isActive) {
      link.setAttribute("aria-current", "page");
      return;
    }

    link.removeAttribute("aria-current");
  });
};

const loadTechnologyData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data.technology;
};

const initializeTechnologyNavigation = async () => {
  const technologies = await loadTechnologyData();

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("id");
      const selectedTechnology = technologies.find(
        (technology) => toSlug(technology.name) === targetId
      );

      if (!selectedTechnology) return;

      setActiveLink(link);
      renderTechnology(selectedTechnology);
    });
  });
};

initializeTechnologyNavigation().catch((error) => {
  console.error("Unable to load technology data:", error);
});
