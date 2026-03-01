
function renderCards(recipeArray, containerId, baseLink = 'recipe/index.html?id=') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  recipeArray.forEach((r, index) => {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    card.innerHTML = `
      <img src="${r.image}" alt="${r.name}" loading="lazy">
      <div class="card-content">
        <h3>${r.name}</h3>
        <span class="card-tag"><i class="fas fa-tag"></i> ${r.tag}</span>
        <p>${r.description}</p>
        <a href="${baseLink}${index}" class="btn btn-small">view recipe</a>
      </div>
    `;
    container.appendChild(card);
  });
}


function renderTagGroups(containerId, baseLink = 'recipe/index.html?id=') {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  const tags = [...new Set(recipes.map(r => r.tag))].sort();
  tags.forEach(tag => {
    const tagRecipes = recipes.filter(r => r.tag === tag);
    const section = document.createElement('section');
    section.className = 'tag-section';
    section.innerHTML = `<h2 class="tag-title"><i class="fas fa-hashtag"></i> ${tag}</h2>`;
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    tagRecipes.forEach((r, idx) => {
      const globalIndex = recipes.findIndex(rec => rec.name === r.name && rec.tag === r.tag);
      const card = document.createElement('div');
      card.className = 'recipe-card';
      card.innerHTML = `
        <img src="${r.image}" alt="${r.name}">
        <div class="card-content">
          <h3>${r.name}</h3>
          <p>${r.description}</p>
          <a href="${baseLink}${globalIndex}" class="btn btn-small">view recipe</a>
        </div>
      `;
      grid.appendChild(card);
    });
    section.appendChild(grid);
    container.appendChild(section);
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const toggleBtn = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');
  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('.nav-menu a');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    if (href === '/' && currentPath === '/') {
      link.classList.add('active');
    } else if (href !== '/' && currentPath.includes(href.replace(/^\.\.\//, ''))) {
      link.classList.add('active');
    }
  });
});