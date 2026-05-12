/* =============================================
   BERGSHED — Main JavaScript
   ============================================= */

// ─── PRODUCTS DATA ──────────────────────────────────────────────
const products = [
  {
    id: 1,
    brand: 'Ralph Lauren',
    name: 'Polo Classic Fit',
    price: 'R$ 590',
    priceNum: 590,
    sizes: ['P', 'M', 'G', 'GG'],
    condition: 'Seminovo — Excelente estado',
    description: 'Polo clássica Ralph Lauren, cor azul navy. Tecido piqué de algodão original. Peça autenticada pela Bergshed.',
    badge: 'Disponível',
    image: null,
    category: 'polo'
  },
  {
    id: 2,
    brand: 'Moncler',
    name: 'Down Jacket Maya',
    price: 'R$ 4.200',
    priceNum: 4200,
    sizes: ['P', 'M'],
    condition: 'Como nova — Usada 1x',
    description: 'Jaqueta Moncler Maya em nylon ripstop. Acompanha sacola original. Autenticidade verificada.',
    badge: 'Exclusivo',
    image: null,
    category: 'jackets'
  },
  {
    id: 3,
    brand: 'Comme des Garçons',
    name: 'Play Heart Tee',
    price: 'R$ 890',
    priceNum: 890,
    sizes: ['P', 'M', 'G', 'GG', 'XG'],
    condition: 'Novo com tags',
    description: 'T-shirt CDG Play com coração bordado. 100% algodão. Tags originais preservadas.',
    badge: 'Novo',
    image: null,
    category: 'tshirts'
  },
  {
    id: 4,
    brand: 'Vilebrequin',
    name: 'Moorea Swim Shorts',
    price: 'R$ 1.100',
    priceNum: 1100,
    sizes: ['M', 'G'],
    condition: 'Seminovo — Sem marcas de uso',
    description: 'Short Vilebrequin Moorea, estampa tartaruga. Tecido microfiber. Peça icônica da marca francesa.',
    badge: null,
    image: null,
    category: 'shorts'
  },
  {
    id: 5,
    brand: 'Zegna',
    name: 'Polo Piqué Premium',
    price: 'R$ 1.350',
    priceNum: 1350,
    sizes: ['M', 'G', 'GG'],
    condition: 'Seminovo — Excelente estado',
    description: 'Polo Zegna em algodão piqué de alta gramatura. Cor off-white. Autenticada com certificado.',
    badge: 'Premium',
    image: null,
    category: 'polo'
  },
  {
    id: 6,
    brand: 'Birkenstock',
    name: 'Arizona Leather',
    price: 'R$ 780',
    priceNum: 780,
    sizes: ['38', '40', '42', '44'],
    condition: 'Novo com caixa',
    description: 'Birkenstock Arizona em couro natural com solado de cortiça. Caixa e sachê originais.',
    badge: 'Novo',
    image: null,
    category: 'shoes'
  },
  {
    id: 7,
    brand: 'AllSaints',
    name: 'Ramskull Crew Tee',
    price: 'R$ 460',
    priceNum: 460,
    sizes: ['P', 'M', 'G'],
    condition: 'Seminovo — Ótimo estado',
    description: 'T-shirt AllSaints com estampa Ramskull, clássico da marca britânica. Lavagem perfeita.',
    badge: null,
    image: null,
    category: 'tshirts'
  },
  {
    id: 8,
    brand: 'Sundek',
    name: 'Classic Swimshort',
    price: 'R$ 520',
    priceNum: 520,
    sizes: ['M', 'G', 'GG'],
    condition: 'Novo com tags',
    description: 'Short Sundek clássico em nylon, logo bordado. Modelo icônico da marca italiana de beachwear.',
    badge: 'Novo',
    image: null,
    category: 'shorts'
  }
];

// ─── CART STATE ──────────────────────────────────────────────────
let cart = JSON.parse(localStorage.getItem('bergshed-cart') || '[]');

function saveCart() {
  localStorage.setItem('bergshed-cart', JSON.stringify(cart));
}

function addToCart(productId, size) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(i => i.id === productId && i.size === size);
  if (existing) {
    showToast('Produto já está no carrinho');
    return;
  }

  cart.push({ ...product, size, cartId: Date.now() });
  saveCart();
  updateCartUI();
  showToast(`${product.brand} adicionado ao carrinho`);
  closeModal();
  openCart();
}

function removeFromCart(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = cart.length;
  const countEl = document.querySelector('.cart-count');
  if (!countEl) return;
  countEl.textContent = count;
  countEl.classList.toggle('visible', count > 0);
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.priceNum, 0);
}

function formatPrice(num) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(num);
}

// ─── RENDER CART ─────────────────────────────────────────────────
function renderCartItems() {
  const body = document.querySelector('.cart-body');
  if (!body) return;

  if (cart.length === 0) {
    body.innerHTML = `
      <div class="cart-empty">
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
          <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
          <line x1="3" y1="6" x2="21" y2="6"/>
          <path d="M16 10a4 4 0 01-8 0"/>
        </svg>
        <p>Seu carrinho está vazio</p>
        <a href="#produtos" class="btn btn-outline" onclick="closeCart()" style="font-size:10px;padding:10px 24px">
          Ver produtos
        </a>
      </div>`;
    document.querySelector('.cart-subtotal-value').textContent = 'R$ 0,00';
    return;
  }

  body.innerHTML = `<div class="cart-items">${cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-image">
        ${item.image
          ? `<img src="${item.image}" alt="${item.name}">`
          : `<div style="width:100%;height:100%;background:#111;display:flex;align-items:center;justify-content:center;color:#333;font-size:10px;letter-spacing:2px">${item.brand.substring(0,2).toUpperCase()}</div>`
        }
      </div>
      <div>
        <div class="cart-item-brand">${item.brand}</div>
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-size">Tamanho: ${item.size}</div>
        <div class="cart-item-price">${item.price}</div>
      </div>
      <button class="cart-item-remove" onclick="removeFromCart(${item.cartId})">×</button>
    </div>
  `).join('')}</div>`;

  document.querySelector('.cart-subtotal-value').textContent = formatPrice(getCartTotal());
}

// ─── RENDER PRODUCTS ─────────────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => `
    <div class="product-card fade-in" onclick="openModal(${p.id})">
      <div class="product-image-wrap">
        ${p.image
          ? `<img src="${p.image}" alt="${p.name}">`
          : `<div class="product-image-placeholder">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5">
                 <rect x="3" y="3" width="18" height="18" rx="2"/>
                 <circle cx="8.5" cy="8.5" r="1.5"/>
                 <polyline points="21 15 16 10 5 21"/>
               </svg>
             </div>`
        }
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        <div class="product-overlay">
          <button class="btn btn-gold" style="font-size:10px;padding:10px 20px;width:100%" onclick="event.stopPropagation();openModal(${p.id})">
            Ver detalhes
          </button>
        </div>
      </div>
      <div class="product-info">
        <div class="product-brand">${p.brand}</div>
        <div class="product-name">${p.name}</div>
        <div class="product-size">${p.condition}</div>
        <div class="product-price-row">
          <div class="product-price">${p.price}</div>
          <button class="product-wishlist" onclick="event.stopPropagation();toggleWishlist(this)">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  // Trigger animations
  setTimeout(() => {
    document.querySelectorAll('.product-card.fade-in').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 80);
    });
  }, 50);
}

// ─── PRODUCT MODAL ───────────────────────────────────────────────
let selectedSize = null;

function openModal(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;

  selectedSize = null;

  document.getElementById('modal-brand').textContent    = product.brand;
  document.getElementById('modal-title').textContent    = product.name;
  document.getElementById('modal-condition').textContent = product.condition;
  document.getElementById('modal-price').textContent    = product.price;
  document.getElementById('modal-desc').textContent     = product.description;

  const imageEl = document.getElementById('modal-image-content');
  imageEl.innerHTML = product.image
    ? `<img src="${product.image}" alt="${product.name}">`
    : `<div class="modal-image-placeholder">
         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
       </div>`;

  const sizesEl = document.getElementById('modal-sizes');
  sizesEl.innerHTML = product.sizes.map(s => `
    <button class="size-btn" onclick="selectSize(this, '${s}')">${s}</button>
  `).join('');

  document.getElementById('modal-add-btn').onclick = () => {
    if (!selectedSize) { showToast('Selecione um tamanho'); return; }
    addToCart(product.id, selectedSize);
  };

  document.getElementById('modal-whatsapp-btn').onclick = () => {
    const msg = encodeURIComponent(`Olá! Tenho interesse na peça:\n*${product.brand} — ${product.name}*\nTamanho: ${selectedSize || 'a definir'}\nPreço: ${product.price}`);
    window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
  };

  document.querySelector('.modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  document.querySelector('.modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = size;
}

// ─── CART DRAWER ─────────────────────────────────────────────────
function openCart() {
  renderCartItems();
  document.querySelector('.cart-overlay').classList.add('open');
  document.querySelector('.cart-drawer').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.querySelector('.cart-overlay').classList.remove('open');
  document.querySelector('.cart-drawer').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── MOBILE MENU ─────────────────────────────────────────────────
function openMobileMenu() {
  document.querySelector('.mobile-menu').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  document.querySelector('.mobile-menu').classList.remove('open');
  document.body.style.overflow = '';
}

// ─── TOAST ───────────────────────────────────────────────────────
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ─── WISHLIST ────────────────────────────────────────────────────
function toggleWishlist(btn) {
  const svg = btn.querySelector('svg');
  const active = btn.dataset.active === 'true';
  if (!active) {
    svg.setAttribute('fill', '#C9A96E');
    svg.setAttribute('stroke', '#C9A96E');
    btn.dataset.active = 'true';
    showToast('Adicionado aos favoritos ♡');
  } else {
    svg.setAttribute('fill', 'none');
    svg.setAttribute('stroke', 'currentColor');
    btn.dataset.active = 'false';
  }
}

// ─── FILTERS ─────────────────────────────────────────────────────
function setFilter(btn, category) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderProducts(category);
}

// ─── NAVBAR SCROLL ───────────────────────────────────────────────
function handleNavScroll() {
  const navbar = document.querySelector('.navbar');
  const bar = document.querySelector('.announcement-bar');
  const barH = bar ? bar.offsetHeight : 0;
  if (window.scrollY > barH) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

// ─── INTERSECTION OBSERVER ───────────────────────────────────────
function initObserver() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// ─── CHECKOUT VIA MERCADO PAGO ───────────────────────────────────
function goToCheckout() {
  if (cart.length === 0) { showToast('Seu carrinho está vazio'); return; }
  // Integração com Mercado Pago — configurar com public key real
  showToast('Redirecionando para o pagamento...');
  // window.open(MERCADO_PAGO_URL, '_blank');
  const msg = encodeURIComponent(`Olá! Gostaria de finalizar meu pedido:\n\n${cart.map(i => `• ${i.brand} — ${i.name} (${i.size}) — ${i.price}`).join('\n')}\n\n*Total: ${formatPrice(getCartTotal())}*`);
  window.open(`https://wa.me/5511999999999?text=${msg}`, '_blank');
}

// ─── SMOOTH SCROLL ───────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    }
  });
});

// ─── INIT ────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  initObserver();
  window.addEventListener('scroll', handleNavScroll, { passive: true });

  // Close modal on overlay click
  document.querySelector('.modal-overlay').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeModal();
  });

  // Close cart on overlay click
  document.querySelector('.cart-overlay').addEventListener('click', closeCart);

  // Keyboard escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      closeCart();
      closeMobileMenu();
    }
  });

  // Animate sections on scroll
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.fade-in').forEach(el => sectionObserver.observe(el));
});
