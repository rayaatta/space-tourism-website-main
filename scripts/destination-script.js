const navigationLinks = document.querySelectorAll(".destination-nav a");
const destinationDescription = document.querySelector(".destination-description");
const destinationMeta = document.querySelector(".destination-meta");
const destinationImageContainer = document.querySelector(".destination-image-container");

const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const renderDestination = (destination) => {
  destinationDescription.innerHTML = `
          <h2>${destination.name}</h2>
          <p>
          ${destination.description}
          </p>`;
        destinationMeta.innerHTML = `<div class="distance">
            <h3>Avg. Distance</h3>
            <p>${destination.distance}</p>
          </div>
          <div class="travel-time">
            <h3>Est. Travel Time</h3>
            <p>${destination.travel}</p>
          </div>`;  

  destinationImageContainer.innerHTML = `
    <img src="${destination.images.png}" alt="${destination.name.toLowerCase()} image">
  `;
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

const loadDestinationData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data.destinations;
};

const initializeDestinationNavigation = async () => {
  const destinations = await loadDestinationData();

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("id");
      const selectedDestination = destinations.find(
        (destination) => toSlug(destination.name) === targetId
      );

      if (!selectedDestination) return;

      setActiveLink(link);
      renderDestination(selectedDestination);
    });
  });
};

initializeDestinationNavigation().catch((error) => {
  console.error("Unable to load destination data:", error);
});
