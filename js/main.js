// ==========================================================================
// LUMIÈRE CRÈME - LUXURY INTERFACE SCRIPTS & INTERACTIONS
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  initNavbarScroll();
  initMobileMenu();
  initSearchModal();
  initQuickViewModal();
  initAnnouncementBar();
  initNewsletterForm();
  initSmoothScroll();
});

// Sticky Navbar with glassmorphism on scroll
function initNavbarScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  const onScroll = () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

// Mobile Menu Drawer
function initMobileMenu() {
  const menuBtn = document.querySelector('.mobile-menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav-drawer');
  const overlay = document.querySelector('.mobile-nav-overlay');
  const closeBtn = document.querySelector('.mobile-nav-close');

  if (!menuBtn || !mobileNav) return;

  const openNav = () => {
    mobileNav.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  };

  const closeNav = () => {
    mobileNav.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  menuBtn.addEventListener('click', openNav);
  if (closeBtn) closeBtn.addEventListener('click', closeNav);
  if (overlay) overlay.addEventListener('click', closeNav);

  // Close when clicking internal links
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeNav);
  });
}

// Quick View Modal
function initQuickViewModal() {
  let modal = document.getElementById('quickview-modal');
  let overlay = document.getElementById('quickview-overlay');

  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'quickview-modal';
    modal.className = 'quickview-modal';
    document.body.appendChild(modal);

    overlay = document.createElement('div');
    overlay.id = 'quickview-overlay';
    overlay.className = 'modal-backdrop-blur';
    document.body.appendChild(overlay);

    overlay.addEventListener('click', closeQuickView);
  }

  // Global listener for quick view buttons
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('[data-quickview-id]');
    if (btn) {
      e.preventDefault();
      const prodId = btn.getAttribute('data-quickview-id');
      openQuickView(prodId);
    }
  });
}

function openQuickView(productId) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) return;

  const modal = document.getElementById('quickview-modal');
  const overlay = document.getElementById('quickview-overlay');

  modal.innerHTML = `
    <button class="quickview-close" onclick="closeQuickView()">&times;</button>
    <div class="quickview-grid">
      <div class="quickview-gallery">
        <div class="quickview-main-img">
          <img id="qv-main-image" src="${product.images[0]}" alt="${product.name}">
        </div>
        <div class="quickview-thumbs">
          ${product.images.map((img, idx) => `
            <button class="qv-thumb-btn ${idx === 0 ? 'active' : ''}" onclick="swapQvImage('${img}', this)">
              <img src="${img}" alt="Thumbnail">
            </button>
          `).join('')}
        </div>
      </div>
      <div class="quickview-details">
        <div class="qv-badge-row">
          <span class="luxury-pill">${product.categoryName}</span>
          ${product.badge ? `<span class="luxury-pill gold">${product.badge}</span>` : ''}
        </div>
        <h2 class="qv-title">${product.name}</h2>
        <p class="qv-subtitle">${product.subtitle}</p>
        
        <div class="qv-rating-row">
          <div class="stars">★★★★★</div>
          <span class="rating-val">${product.rating}</span>
          <span class="reviews-count">(${product.reviewsCount} reviews)</span>
        </div>

        <div class="qv-price-row">
          <span class="current-price">$${product.price.toFixed(2)}</span>
          ${product.originalPrice ? `<span class="original-price">$${product.originalPrice.toFixed(2)}</span>` : ''}
          <span class="size-pill">${product.size}</span>
        </div>

        <p class="qv-desc">${product.shortDesc}</p>

        <div class="qv-attributes">
          <div class="attr-item">
            <span class="attr-label">Texture:</span>
            <span class="attr-val">${product.texture}</span>
          </div>
          <div class="attr-item">
            <span class="attr-label">Skin Type:</span>
            <span class="attr-val">${product.skinTypeName}</span>
          </div>
        </div>

        <div class="qv-actions">
          <div class="qty-selector">
            <button class="qty-btn" onclick="decreaseQvQty()">-</button>
            <input type="number" id="qv-qty-input" value="1" min="1" readonly>
            <button class="qty-btn" onclick="increaseQvQty()">+</button>
          </div>
          <button class="btn btn-luxury-primary flex-1" onclick="submitQvAdd('${product.id}')">
            <span>Add To Ritual</span> • $${product.price.toFixed(2)}
          </button>
        </div>

        <div class="qv-footer-links">
          <a href="product-detail.html?id=${product.id}" class="view-full-details-link">
            Explore Full Formulation, Ritual & Clinical Results &rarr;
          </a>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function swapQvImage(src, btn) {
  const main = document.getElementById('qv-main-image');
  if (main) main.src = src;
  document.querySelectorAll('.qv-thumb-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
}

function increaseQvQty() {
  const input = document.getElementById('qv-qty-input');
  if (input) input.value = parseInt(input.value || 1, 10) + 1;
}

function decreaseQvQty() {
  const input = document.getElementById('qv-qty-input');
  if (input && parseInt(input.value, 10) > 1) {
    input.value = parseInt(input.value, 10) - 1;
  }
}

function submitQvAdd(productId) {
  const input = document.getElementById('qv-qty-input');
  const qty = input ? parseInt(input.value, 10) : 1;
  addToCart(productId, qty);
  closeQuickView();
}

function closeQuickView() {
  const modal = document.getElementById('quickview-modal');
  const overlay = document.getElementById('quickview-overlay');
  if (modal) modal.classList.remove('active');
  if (overlay) overlay.classList.remove('active');
  document.body.style.overflow = '';
}

// Search Drawer / Overlay
function initSearchModal() {
  const openBtns = document.querySelectorAll('.open-search-btn');
  const modal = document.getElementById('search-modal');
  const overlay = document.getElementById('search-overlay');
  const closeBtn = document.getElementById('search-modal-close');
  const searchInput = document.getElementById('global-search-input');
  const resultsContainer = document.getElementById('search-results-list');

  if (!modal) return;

  const openSearch = () => {
    modal.classList.add('active');
    if (overlay) overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      if (searchInput) searchInput.focus();
    }, 150);
  };

  const closeSearch = () => {
    modal.classList.remove('active');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  openBtns.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openSearch();
  }));

  if (closeBtn) closeBtn.addEventListener('click', closeSearch);
  if (overlay) overlay.addEventListener('click', closeSearch);

  // Esc key listener
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeSearch();
      closeQuickView();
      closeCartDrawer();
    }
  });

  if (searchInput && resultsContainer) {
    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.trim().toLowerCase();
      if (!query) {
        resultsContainer.innerHTML = `
          <div class="search-suggestions">
            <span class="suggestion-title">Popular Searches:</span>
            <div class="suggestion-tags">
              <button class="tag-btn" onclick="populateSearch('Veloutée')">Crème Veloutée</button>
              <button class="tag-btn" onclick="populateSearch('Ceramide')">Ceramides</button>
              <button class="tag-btn" onclick="populateSearch('Night Balm')">Night Balm</button>
              <button class="tag-btn" onclick="populateSearch('Vitamin C')">Vitamin C</button>
              <button class="tag-btn" onclick="populateSearch('Eye')">Eye Cream</button>
            </div>
          </div>
        `;
        return;
      }

      const matches = PRODUCTS_DATA.filter(p => 
        p.name.toLowerCase().includes(query) ||
        p.subtitle.toLowerCase().includes(query) ||
        p.shortDesc.toLowerCase().includes(query) ||
        p.categoryName.toLowerCase().includes(query) ||
        p.skinTypeName.toLowerCase().includes(query)
      );

      if (matches.length === 0) {
        resultsContainer.innerHTML = `
          <div class="search-empty">
            <p>No botanical formulas found matching "<strong>${e.target.value}</strong>".</p>
            <p class="sub">Try searching for "Cream", "Peptide", "Serum", or "Hydratant".</p>
          </div>
        `;
        return;
      }

      resultsContainer.innerHTML = matches.map(prod => `
        <a href="product-detail.html?id=${prod.id}" class="search-result-card" onclick="closeSearch()">
          <div class="res-img">
            <img src="${prod.images[0]}" alt="${prod.name}">
          </div>
          <div class="res-details">
            <span class="res-cat">${prod.categoryName}</span>
            <h4 class="res-title">${prod.name}</h4>
            <p class="res-sub">${prod.subtitle}</p>
            <span class="res-price">$${prod.price.toFixed(2)}</span>
          </div>
        </a>
      `).join('');
    });
  }
}

function populateSearch(term) {
  const input = document.getElementById('global-search-input');
  if (input) {
    input.value = term;
    input.dispatchEvent(new Event('input'));
  }
}

// Announcement Bar rotator
function initAnnouncementBar() {
  const bar = document.querySelector('.announcement-messages');
  if (!bar) return;

  const messages = bar.querySelectorAll('.announcement-msg');
  if (messages.length <= 1) return;

  let current = 0;
  setInterval(() => {
    messages[current].classList.remove('active');
    current = (current + 1) % messages.length;
    messages[current].classList.add('active');
  }, 4500);
}

// Newsletter form
function initNewsletterForm() {
  const forms = document.querySelectorAll('.newsletter-form');
  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const input = form.querySelector('input[type="email"]');
      if (input && input.value) {
        showGenericToast("Merci! Welcome to the Lumière Inner Circle. Enjoy code GLOW20!");
        input.value = '';
      }
    });
  });
}

// Smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]:not([href="#"])').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
}

// Helper to render product card HTML
function generateProductCardHTML(product) {
  const isWishlisted = getWishlist().includes(product.id);
  return `
    <article class="product-card" data-product-id="${product.id}" data-category="${product.category}">
      <div class="card-media">
        <a href="product-detail.html?id=${product.id}" class="card-image-link">
          <img src="${product.images[0]}" alt="${product.name}" class="primary-img" loading="lazy">
          ${product.images[1] ? `<img src="${product.images[1]}" alt="${product.name} texture" class="secondary-img" loading="lazy">` : ''}
        </a>
        
        <div class="card-badges">
          ${product.badge ? `<span class="badge badge-gold">${product.badge}</span>` : ''}
          ${product.isNew ? `<span class="badge badge-new">New</span>` : ''}
        </div>

        <button class="wishlist-btn ${isWishlisted ? 'active' : ''}" 
                onclick="toggleWishlist('${product.id}', this)" 
                data-wishlist-id="${product.id}" 
                aria-label="Save to wishlist">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>

        <div class="card-actions-overlay">
          <button class="quickview-action-btn" data-quickview-id="${product.id}">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
            Quick View
          </button>
        </div>
      </div>

      <div class="card-content">
        <div class="card-meta">
          <span class="card-category">${product.categoryName}</span>
          <div class="card-rating">
            <span class="star-icon">★</span>
            <span class="score">${product.rating}</span>
          </div>
        </div>

        <h3 class="card-title">
          <a href="product-detail.html?id=${product.id}">${product.name}</a>
        </h3>
        <p class="card-subtitle">${product.subtitle}</p>

        <div class="card-footer-row">
          <div class="card-pricing">
            <span class="price">$${product.price.toFixed(2)}</span>
            ${product.originalPrice ? `<span class="original">$${product.originalPrice.toFixed(2)}</span>` : ''}
          </div>
          <button class="add-to-bag-btn" onclick="addToCart('${product.id}', 1)" title="Add to Bag">
            <span>Add</span>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
        </div>
      </div>
    </article>
  `;
}
