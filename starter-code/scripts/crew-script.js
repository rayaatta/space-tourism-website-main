const navigationLinks = document.querySelectorAll(".crew-nav a");
const crewInfoContainer = document.querySelector(".crew-member-info");
const crewImageContainer = document.querySelector(".crew-image-container");

const toSlug = (value) =>
  value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const renderCrewMember = (member) => {
  crewInfoContainer.innerHTML = `
    <h2>${member.role}</h2>
    <h3>${member.name}</h3>
    <p>${member.bio}</p>
  `;

  crewImageContainer.innerHTML = `
    <img src="${member.images.png}" alt="${member.role.toLowerCase()} image">
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

const loadCrewData = async () => {
  const response = await fetch("./data.json");
  const data = await response.json();
  return data.crew;
};

const initializeCrewNavigation = async () => {
  const crewMembers = await loadCrewData();

  navigationLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();

      const targetId = link.getAttribute("id");
      const selectedMember = crewMembers.find(
        (member) => toSlug(member.name) === targetId
      );

      if (!selectedMember) return;

      setActiveLink(link);
      renderCrewMember(selectedMember);
    });
  });
};

initializeCrewNavigation().catch((error) => {
  console.error("Unable to load crew data:", error);
});
