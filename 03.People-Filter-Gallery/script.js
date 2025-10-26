// JS for People Filter Gallery

const people = [
  {
    name: "Anna Rodriguez",
    role: "Product Designer",
    bio: "Crafts delightful UI and interactions.",
    tags: ["design", "ui", "motion"],
  },
  {
    name: "Liam Carter",
    role: "Frontend Engineer",
    bio: "Builds fast, accessible interfaces.",
    tags: ["react", "js", "frontend"],
  },
  {
    name: "Zara Khan",
    role: "Photographer",
    bio: "Portrait & lifestyle photographer.",
    tags: ["photo", "portrait"],
  },
  {
    name: "Mateo Silva",
    role: "Data Scientist",
    bio: "Loves building ML prototypes.",
    tags: ["ml", "python", "data"],
  },
  {
    name: "Sofia Martins",
    role: "Illustrator",
    bio: "Creates vibrant editorial illustrations.",
    tags: ["illustration", "art"],
  },
  {
    name: "Ethan Brown",
    role: "DevOps Engineer",
    bio: "Automates infrastructure and CI/CD.",
    tags: ["devops", "cloud"],
  },
  {
    name: "Maya Patel",
    role: "Content Strategist",
    bio: "Finds the right words for products.",
    tags: ["content", "strategy"],
  },
  {
    name: "Noah Johnson",
    role: "Full-Stack Developer",
    bio: "End-to-end web applications.",
    tags: ["node", "react", "fullstack"],
  },
  {
    name: "Olivia Garcia",
    role: "UX Researcher",
    bio: "Turns insights into product decisions.",
    tags: ["research", "ux"],
  },
  {
    name: "Lucas Nguyen",
    role: "Mobile Developer",
    bio: "iOS & Android apps with polish.",
    tags: ["mobile", "ios", "android"],
  },
  {
    name: "Ava Rossi",
    role: "Marketing Lead",
    bio: "Growth experiments and brand.",
    tags: ["marketing", "growth"],
  },
  {
    name: "Samuel Park",
    role: "Backend Engineer",
    bio: "Scalable APIs & systems.",
    tags: ["go", "backend"],
  },
  {
    name: "Chloe Dupont",
    role: "Animator",
    bio: "Micro-interactions & 2D animation.",
    tags: ["animation", "motion"],
  },
  {
    name: "Daniel Kim",
    role: "QA Engineer",
    bio: "Quality, testing, and automation.",
    tags: ["qa", "testing"],
  },
  {
    name: "Isabella Lopez",
    role: "Product Manager",
    bio: "Leads teams to ship products.",
    tags: ["pm", "strategy"],
  },
  {
    name: "Oliver Schmidt",
    role: "Security Engineer",
    bio: "Security reviews and threat modeling.",
    tags: ["security"],
  },
  {
    name: "Grace Lee",
    role: "Data Analyst",
    bio: "Dashboards and data storytelling.",
    tags: ["sql", "analytics"],
  },
  {
    name: "Henry Wilson",
    role: "Research Scientist",
    bio: "Experimental systems & prototypes.",
    tags: ["research", "ml"],
  },
  {
    name: "Emily Carter",
    role: "Customer Success",
    bio: "Ensures customers achieve value.",
    tags: ["support", "cs"],
  },
  {
    name: "Aria Singh",
    role: "Creative Director",
    bio: "Guides brand and creative vision.",
    tags: ["creative", "branding"],
  },
];

const grid = document.getElementById("cardGrid");
const searchInput = document.getElementById("searchInput");
const noResults = document.getElementById("noResults");

// Create all cards
function createCard(person, index) {
  const card = document.createElement("div");
  card.classList.add("card");
  card.dataset.name = person.name.toLowerCase();
  card.dataset.role = person.role.toLowerCase();
  card.dataset.tags = person.tags.join(" ").toLowerCase();

  const imgUrl = `images/${index + 1}.avif`;

  card.innerHTML = `
    <div class="bg" style="background-image:url('${imgUrl}')"></div>
    <div class="overlay">
      <div class="name">${person.name}</div>
      <div class="role">${person.role}</div>
      <div class="desc">${person.bio}</div>
      <div class="tags">
        ${person.tags.map((t) => `<span>${t}</span>`).join("")}
      </div>
    </div>
  `;

  return card;
}

// Render initial cards
function renderCards() {
  grid.innerHTML = "";
  people.forEach((p, i) => grid.appendChild(createCard(p, i)));
}
renderCards();

// Filter logic
function filterCards(value) {
  const term = value.trim().toLowerCase();
  const cards = Array.from(grid.children);
  let visibleCount = 0;

  cards.forEach((card) => {
    const { name, role, tags } = card.dataset;
    const matches =
      !term ||
      name.includes(term) ||
      role.includes(term) ||
      tags.includes(term);
    card.style.display = matches ? "" : "none";
    if (matches) visibleCount++;
  });

  noResults.style.display = visibleCount === 0 ? "block" : "none";
}

searchInput.addEventListener("input", (e) => filterCards(e.target.value));
