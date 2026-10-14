// ==========================================================================
// LUMIÈRE CRÈME - LUXURY CART SYSTEM & STATE MANAGEMENT
// ==========================================================================

const CART_STORAGE_KEY = 'lumiere_luxury_cart';
const FREE_SHIPPING_THRESHOLD = 80.00;
const APPLIED_PROMO_KEY = 'lumiere_promo_code';

// Get Cart from localStorage
function getCart() {
  try {
    const raw = localStorage.getItem(CART_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Cart retrieval error", e);
    return [];
  }
}

// Save Cart to localStorage
function saveCart(cart) {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    updateCartUI();
  } catch (e) {
    console.error("Cart save error", e);
  }
}

// Add Item to Cart
function addToCart(productId, quantity = 1) {
  const product = PRODUCTS_DATA.find(p => p.id === productId);
  if (!product) {
    console.error("Product not found:", productId);
    return;
  }

  let cart = getCart();
  const existingIndex = cart.findIndex(item => item.id === productId);

  if (existingIndex > -1) {
    cart[existingIndex].quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      subtitle: product.subtitle,
      price: product.price,
      originalPrice: product.originalPrice,
      size: product.size,
      image: product.images[0],
      quantity: quantity
    });
  }

  saveCart(cart);
  showToastNotification(product, quantity);
  openCartDrawer();
}

// Add Bundle (multiple products)
function addBundleToCart(productIds, customPrice = null) {
  let cart = getCart();
  productIds.forEach(id => {
    const product = PRODUCTS_DATA.find(p => p.id === id);
    if (product) {
      const existing = cart.find(item => item.id === id);
      if (existing) {
        existing.quantity += 1;
      } else {
        cart.push({
          id: product.id,
          name: product.name,
          subtitle: product.subtitle,
          price: product.price,
          originalPrice: product.originalPrice,
          size: product.size,
          image: product.images[0],
          quantity: 1
        });
      }
    }
  });
  saveCart(cart);
  showGenericToast("Complete Ritual Bundle added to your bag!");
  openCartDrawer();
}

// Remove item from cart
function removeFromCart(productId) {
  let cart = getCart();
  cart = cart.filter(item => item.id !== productId);
  saveCart(cart);
}

// Update item quantity
function updateQuantity(productId, quantity) {
  let cart = getCart();
  const item = cart.find(item => item.id === productId);
  if (item) {
    item.quantity = parseInt(quantity, 10);
    if (item.quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    saveCart(cart);
  }
}

// Clear cart
function clearCart() {
  localStorage.removeItem(CART_STORAGE_KEY);
  updateCartUI();
}

// Cart Subtotal
function getCartSubtotal() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

// Cart Total Item Count
function getCartCount() {
  const cart = getCart();
  return cart.reduce((sum, item) => sum + item.quantity, 0);
}

// Discount Promo calculation
function getAppliedPromo() {
  try {
    return JSON.parse(localStorage.getItem(APPLIED_PROMO_KEY));
  } catch (e) {
    return null;
  }
}

function applyPromoCode(code) {
  const cleanCode = (code || '').trim().toUpperCase();
  if (cleanCode === 'GLOW20') {
    const promo = { code: 'GLOW20', discountPercent: 20, description: '20% Off Radiant Skincare' };
    localStorage.setItem(APPLIED_PROMO_KEY, JSON.stringify(promo));
    return { success: true, message: "Coupon GLOW20 applied! 20% discount granted." };
  } else if (cleanCode === 'WELCOME10') {
    const promo = { code: 'WELCOME10', discountPercent: 10, description: '10% Welcome Gift' };
    localStorage.setItem(APPLIED_PROMO_KEY, JSON.stringify(promo));
    return { success: true, message: "Welcome gift code applied! 10% discount granted." };
  } else {
    return { success: false, message: "Invalid code. Try GLOW20 for 20% off!" };
  }
}

function removePromoCode() {
  localStorage.removeItem(APPLIED_PROMO_KEY);
}

// Show Toast Notification
function showToastNotification(product, quantity) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'luxury-toast';
  toast.innerHTML = `
    <div class="toast-img-wrap">
      <img src="${product.images ? product.images[0] : product.image}" alt="${product.name}" />
    </div>
    <div class="toast-content">
      <span class="toast-tag">Added to Bag</span>
      <h4 class="toast-title">${product.name}</h4>
      <p class="toast-meta">Qty: ${quantity} • $${(product.price * quantity).toFixed(2)}</p>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()" aria-label="Close notification">&times;</button>
  `;

  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('show');
  }, 10);

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 4000);
}

function showGenericToast(message) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  toast.className = 'luxury-toast generic';
  toast.innerHTML = `
    <div class="toast-content">
      <span class="toast-tag">✨ Notification</span>
      <h4 class="toast-title">${message}</h4>
    </div>
    <button class="toast-close" onclick="this.parentElement.remove()">&times;</button>
  `;

  container.appendChild(toast);
  setTimeout(() => toast.classList.add('show'), 10);
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 400);
  }, 3500);
}

// Cart Drawer open/close
function openCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    renderCartDrawer();
    drawer.classList.add('active');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-drawer-overlay');
  if (drawer && overlay) {
    drawer.classList.remove('active');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}

// Render Cart Drawer Contents
function renderCartDrawer() {
  const itemsContainer = document.getElementById('cart-drawer-items');
  const subtotalEl = document.getElementById('cart-drawer-subtotal');
  const countEl = document.getElementById('cart-drawer-count');
  const progressFill = document.getElementById('free-shipping-progress');
  const shippingText = document.getElementById('free-shipping-text');
  const emptyState = document.getElementById('cart-drawer-empty');
  const footerEl = document.getElementById('cart-drawer-footer');

  if (!itemsContainer) return;

  const cart = getCart();
  const subtotal = getCartSubtotal();
  const count = getCartCount();

  if (countEl) countEl.textContent = count;
  if (subtotalEl) subtotalEl.textContent = `$${subtotal.toFixed(2)}`;

  // Free shipping bar
  if (progressFill && shippingText) {
    const diff = FREE_SHIPPING_THRESHOLD - subtotal;
    if (diff <= 0) {
      progressFill.style.width = '100%';
      shippingText.innerHTML = `🎉 <strong>Complimentary Express Shipping</strong> Unlocked!`;
    } else {
      const pct = Math.min(100, Math.max(0, (subtotal / FREE_SHIPPING_THRESHOLD) * 100));
      progressFill.style.width = `${pct}%`;
      shippingText.innerHTML = `Add <strong>$${diff.toFixed(2)}</strong> more to enjoy Free Luxury Shipping!`;
    }
  }

  if (cart.length === 0) {
    if (emptyState) emptyState.style.display = 'block';
    if (footerEl) footerEl.style.display = 'none';
    itemsContainer.innerHTML = '';
    return;
  }

  if (emptyState) emptyState.style.display = 'none';
  if (footerEl) footerEl.style.display = 'block';

  itemsContainer.innerHTML = cart.map(item => `
    <div class="drawer-item" data-id="${item.id}">
      <div class="drawer-item-img">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="drawer-item-details">
        <div class="drawer-item-header">
          <h4 class="drawer-item-title">${item.name}</h4>
          <button class="drawer-remove-btn" onclick="removeFromCart('${item.id}')" title="Remove">&times;</button>
        </div>
        <div class="drawer-item-size">${item.size}</div>
        <div class="drawer-item-bottom">
          <div class="qty-selector small">
            <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity - 1})">-</button>
            <span class="qty-value">${item.quantity}</span>
            <button class="qty-btn" onclick="updateQuantity('${item.id}', ${item.quantity + 1})">+</button>
          </div>
          <div class="drawer-item-price">$${(item.price * item.quantity).toFixed(2)}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// Update Cart UI everywhere
function updateCartUI() {
  const count = getCartCount();
  const badges = document.querySelectorAll('.cart-badge-count');
  badges.forEach(badge => {
    badge.textContent = count;
    badge.style.display = count > 0 ? 'flex' : 'none';
  });

  renderCartDrawer();

  // If on full cart page, render it too
  if (typeof renderFullCartPage === 'function') {
    renderFullCartPage();
  }
}

// Global Wishlist handler
const WISHLIST_KEY = 'lumiere_wishlist';
function getWishlist() {
  try {
    const raw = localStorage.getItem(WISHLIST_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    return [];
  }
}

function toggleWishlist(productId, btnElement) {
  let list = getWishlist();
  const index = list.indexOf(productId);
  let added = false;
  if (index > -1) {
    list.splice(index, 1);
    if (btnElement) btnElement.classList.remove('active');
    showGenericToast("Removed from your saved ritual");
  } else {
    list.push(productId);
    if (btnElement) btnElement.classList.add('active');
    showGenericToast("Saved to your wishlist ❤️");
    added = true;
  }
  localStorage.setItem(WISHLIST_KEY, JSON.stringify(list));
  updateWishlistBadges();
  return added;
}

function updateWishlistBadges() {
  const list = getWishlist();
  const badges = document.querySelectorAll('.wishlist-badge-count');
  badges.forEach(b => {
    b.textContent = list.length;
    b.style.display = list.length > 0 ? 'flex' : 'none';
  });

  document.querySelectorAll('[data-wishlist-id]').forEach(btn => {
    const id = btn.getAttribute('data-wishlist-id');
    if (list.includes(id)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}

// On document load
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  updateWishlistBadges();

  // Cart Drawer listeners
  const closeBtn = document.getElementById('cart-drawer-close');
  const overlay = document.getElementById('cart-drawer-overlay');
  const openButtons = document.querySelectorAll('.open-cart-btn');

  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (overlay) overlay.addEventListener('click', closeCartDrawer);
  openButtons.forEach(btn => btn.addEventListener('click', (e) => {
    e.preventDefault();
    openCartDrawer();
  }));
});
