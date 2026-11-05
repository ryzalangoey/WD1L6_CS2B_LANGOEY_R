/* ----------------------------------------------------------
   1. DATA (EDIT THIS PART TO MAKE THE SITE YOURS)
   ---------------------------------------------------------- */

// --- Profile object: name, motto, bio, quick facts, contacts ---
const profile = {
  name: "Ryzal Langoey",                         
  role: "Aspiring Front-End Web Developer",
  tagline: "I turn plain pages into clean, friendly websites, one lab at a time.",
  motto: "Make it simple. Make it work. Make it yours.", 
  about:
    "I'm a student learning web development. I started with plain HTML and CSS, " +
    "then added JavaScript to make my pages respond to people. Every lab teaches me " +
    "something new, and I like seeing a blank file turn into a working page.", 

  // Array of objects -> shown as the "quick facts" list
  facts: [
    { label: "Focus",      value: "Front-end web development" },
    { label: "Section",    value: "CS2B" },
    { label: "Learning",   value: "HTML, CSS, JavaScript, Bootstrap" },
    { label: "Tools",      value: "VS Code, Git and GitHub" }
  ],

  // Array of objects -> shown in the Contact section
  contacts: [
    { label: "GitHub", text: "github.com/ryzalangoey", url: "https://github.com/ryzalangoey" },
    { label: "Email",  text: "ryzalangoey@gmail.com",  url: "mailto:your.ryzalangoey@gmail.com" } 
  ]
};

// --- Design philosophy: intro text + an array of "pillars" ---
const philosophy = {
  intro:
    "My style is soft, clear and a little bit playful. I want a page to feel welcoming " +
    "the moment it opens, and to be easy to use right after that.", // EDIT: describe YOUR design identity

  pillars: [
    {
      title: "Soft, warm colours",
      text: "Dusty pinks and deep plum are my signature. They feel friendly without being loud, " +
            "and the dark plum keeps text easy to read."
    },
    {
      title: "Rounded and gentle",
      text: "Rounded corners, light shadows and plenty of space make a page feel calm. " +
            "Nothing should feel cramped or sharp."
    },
    {
      title: "Clarity first",
      text: "Clear headings, short sentences and one obvious action per section. " +
            "If someone has to think about where to click, I redesign it."
    },
    {
      title: "Simple code, easy to maintain",
      text: "Bootstrap for layout, one stylesheet for my look, and JavaScript that reuses data " +
            "instead of repeating HTML. Less repetition means fewer mistakes."
    }
  ],

  // Palette shown as colour dots (name + hex)
  palette: [
    { name: "Plum",  hex: "#6e3f51" },
    { name: "Rose",  hex: "#c47a92" },
    { name: "Blush", hex: "#f9d9e1" },
    { name: "Cream", hex: "#fff8f4" },
    { name: "Leaf",  hex: "#2e7d32" }
  ]
};

// --- Projects: array of objects, ordered from first lab to latest ---
// Each project's "images" array becomes a screenshot carousel.
const projects = [
  {
    badge: "WD1-L3",
    title: "Sakatos Shop",
    description:
      "A footwear showcase page that practices all three ways of writing CSS: inline, internal and " +
      "external. It has a hero banner, product highlights, a size guide table, an image gallery and a " +
      "fruit card section.",
    tech: ["HTML", "CSS"],
    github: "https://github.com/ryzalangoey/WD1L3_CS2B_LANGOEY_R",
    images: [
      { src: "images/l3-sakatos-1.png", alt: "Sakatos Shop hero banner with a pink sneaker" },
      { src: "images/l3-sakatos-2.png", alt: "Product highlights, size guide table and image gallery" },
      { src: "images/l3-sakatos-3.png", alt: "Why choose this shoe, purchase links and inline CSS demo" },
      { src: "images/l3-sakatos-4.png", alt: "Fresh fruit selection cards" }
    ]
  },
  {
    badge: "WD1-L4",
    title: "Student Grades",
    description:
      "A table of enrolled students. The Show Grade Equivalent button uses JavaScript to turn each grade " +
      "into its equivalent, a Passed or Failed remark and an academic leader title, then shows the results table.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/ryzalangoey/WD1L4_CS2B_LANGOEY_R",
    images: [
      { src: "images/l4-grades-1.png", alt: "List of enrolled students with grades" },
      { src: "images/l4-grades-2.png", alt: "Grade equivalents table with remarks and academic leaders" }
    ]
  },
  {
    badge: "WD1-L5",
    title: "GroceryKo",
    description:
      "A grocery list app with Sign Up, Log In and My List pages. Accounts and items are saved in " +
      "localStorage, and the JavaScript is organized with arrays and objects across separate files.",
    tech: ["HTML", "CSS", "JavaScript", "localStorage"],
    github: "https://github.com/ryzalangoey/WD1L5_CS2B_LANGOEY_R",
    images: [
      { src: "images/l5-groceryko-1.png", alt: "GroceryKo sign up form" },
      { src: "images/l5-groceryko-2.png", alt: "GroceryKo log in form" },
      { src: "images/l5-groceryko-3.png", alt: "GroceryKo list page with an item added" }
    ]
  }
];

/* ----------------------------------------------------------
   2. HELPER FUNCTIONS (small, reusable)
   ---------------------------------------------------------- */

// Shortcut so we don't type document.getElementById every time
const byId = (id) => document.getElementById(id);

// Make text safe before putting it inside HTML strings
function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

/* ----------------------------------------------------------
   3. RENDER FUNCTIONS (each one builds one part of the page)
   ---------------------------------------------------------- */

// Hero + developer text from the profile object
function renderProfile() {
  byId("heroName").textContent = profile.name;
  byId("heroRole").textContent = profile.role;
  byId("heroTagline").textContent = profile.tagline;
  byId("motto").textContent = profile.motto;
  byId("aboutText").textContent = profile.about;
  byId("footerName").textContent = profile.name;
  byId("year").textContent = new Date().getFullYear();

  // Loop through the facts array and build the list
  byId("factList").innerHTML = profile.facts
    .map((fact) => `<li><strong>${escapeHtml(fact.label)}</strong> ${escapeHtml(fact.value)}</li>`)
    .join("");

  // Loop through the contacts array and build the contact list
  byId("contactList").innerHTML = profile.contacts
    .map((c) => `
      <li>
        <span class="label">${escapeHtml(c.label)}</span>
        <a href="${c.url}" target="_blank" rel="noopener">${escapeHtml(c.text)}</a>
      </li>`)
    .join("");
}

// Design philosophy: intro, pillars and palette
function renderPhilosophy() {
  byId("philosophyIntro").textContent = philosophy.intro;

  byId("philosophyGrid").innerHTML = philosophy.pillars
    .map((p) => `
      <div class="col-md-6">
        <div class="pillar">
          <h3>${escapeHtml(p.title)}</h3>
          <p>${escapeHtml(p.text)}</p>
        </div>
      </div>`)
    .join("");

  byId("paletteRow").innerHTML = philosophy.palette
    .map((c) => `
      <div class="swatch">
        <span class="swatch-dot" style="background-color:${c.hex}"></span>
        ${escapeHtml(c.name)}<br><small>${c.hex}</small>
      </div>`)
    .join("");
}

// Build one Bootstrap carousel (screenshot slider) for a project
function buildCarousel(project, index) {
  const carouselId = `carousel${index}`;
  const showArrows = project.images.length > 1; // no arrows for a single image

  // One slide per image; the first slide must have the "active" class
  const slides = project.images
    .map((img, i) => `
      <div class="carousel-item ${i === 0 ? "active" : ""}">
        <img src="${img.src}" class="d-block w-100" alt="${escapeHtml(img.alt)}" loading="lazy">
      </div>`)
    .join("");

  const arrows = showArrows ? `
    <button class="carousel-control-prev" type="button" data-bs-target="#${carouselId}" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous screenshot</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#${carouselId}" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next screenshot</span>
    </button>` : "";

  return `
    <div id="${carouselId}" class="carousel slide" data-bs-ride="false">
      <div class="carousel-inner">${slides}</div>
      ${arrows}
    </div>`;
}

// Projects: loop through the array and make one card per project
function renderProjects() {
  byId("projectGrid").innerHTML = projects
    .map((project, index) => {
      // Tech tags: loop through the project's tech array
      const tags = project.tech
        .map((t) => `<span class="badge tech-tag me-1">${escapeHtml(t)}</span>`)
        .join("");

      return `
        <div class="col-md-6 col-xl-4">
          <article class="card project-card h-100">
            ${buildCarousel(project, index)}
            <div class="card-body d-flex flex-column">
              <span class="badge project-badge align-self-start mb-2">${escapeHtml(project.badge)}</span>
              <h3 class="card-title h4">${escapeHtml(project.title)}</h3>
              <p class="card-text">${escapeHtml(project.description)}</p>
              <div class="mb-3">${tags}</div>
              <a href="${project.github}" target="_blank" rel="noopener"
                 class="btn btn-outline-plum mt-auto">View on GitHub</a>
            </div>
          </article>
        </div>`;
    })
    .join("");
}

/* ----------------------------------------------------------
   4. CONTACT FORM (validation with Bootstrap's is-invalid)
   ---------------------------------------------------------- */

// Each rule is an object: which field, and how to check it
const formRules = [
  { id: "cName",    isValid: (v) => v.trim().length >= 2 },
  { id: "cEmail",   isValid: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()) },
  { id: "cMessage", isValid: (v) => v.trim().length >= 10 }
];

function handleContactSubmit(event) {
  event.preventDefault(); // stop the page from reloading

  let allValid = true;

  // Check every field against its rule and mark it red or clear
  formRules.forEach((rule) => {
    const field = byId(rule.id);
    const ok = rule.isValid(field.value);
    field.classList.toggle("is-invalid", !ok);
    if (!ok) allValid = false;
  });

  const alertBox = byId("formAlert");

  if (!allValid) {
    alertBox.classList.add("d-none"); // hide any old success message
    return;
  }

  // Save the message in localStorage as an array of objects
  // (there is no server, so this is just a demo of storing data)
  try {
    const saved = JSON.parse(localStorage.getItem("profileMessages")) || [];
    saved.push({
      name: byId("cName").value.trim(),
      email: byId("cEmail").value.trim(),
      message: byId("cMessage").value.trim(),
      sentAt: new Date().toISOString()
    });
    localStorage.setItem("profileMessages", JSON.stringify(saved));
  } catch (error) {
    console.warn("Could not save the message:", error);
  }

  alertBox.textContent = `Thanks, ${byId("cName").value.trim()}! Your message was received.`;
  alertBox.classList.remove("d-none");
  event.target.reset();
}

/* ----------------------------------------------------------
   5. BACK-TO-TOP BUTTON
   ---------------------------------------------------------- */
function setupBackToTop() {
  const button = byId("toTop");

  // Show the button only after scrolling down a bit
  window.addEventListener("scroll", () => {
    button.classList.toggle("d-none", window.scrollY < 400);
  });

  button.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* ----------------------------------------------------------
   6. START EVERYTHING when the page has finished loading
   ---------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", () => {
  renderProfile();
  renderPhilosophy();
  renderProjects();
  setupBackToTop();
  byId("contactForm").addEventListener("submit", handleContactSubmit);

  // Close the mobile menu after tapping a link
  document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
    link.addEventListener("click", () => {
      const menu = byId("navMenu");
      if (menu.classList.contains("show")) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });
});