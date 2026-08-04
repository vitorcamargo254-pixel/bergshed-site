/* =============================================
   BERGSHED — Main JavaScript
   ============================================= */

// ─── PRODUCTS DATA ──────────────────────────────────────────────
const products = [
  {
    id: 1,
    brand: 'Ralph Lauren',
    name: 'Polo Bear Crewneck Off-White',
    price: 'R$ 800',
    priceNum: 800,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'Moletom crewneck Ralph Lauren Polo Bear, cor off-white. Estampa icônica do urso com jaqueta verde. 100% algodão. Peça autenticada pela Bergshed.',
    badge: null,
    image: 'images/produtos/p01.webp',
    category: 'moletom'
  },
  {
    id: 2,
    brand: 'Ralph Lauren',
    name: 'Hoodie Classic Navy',
    price: 'R$ 700',
    priceNum: 700,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'Moletom com capuz Ralph Lauren clássico, cor navy. Logo Polo pony bordado em vermelho. Cordão branco. Bolso canguru. Peça essencial do guarda-roupa.',
    badge: null,
    image: 'images/produtos/p16.webp',
    category: 'moletom'
  },
  {
    id: 3,
    brand: 'Ralph Lauren',
    name: 'Polo Bear Hoodie Azul',
    price: 'R$ 700',
    priceNum: 700,
    sizes: ['P'],
    condition: 'Seminovo — Ótimo estado',
    description: 'Hoodie Ralph Lauren Polo Bear em azul. Estampa grande do urso clássico com cachecol. Cor delavê com charme vintage. Autenticada pela Bergshed.',
    badge: null,
    image: 'images/produtos/p15.webp',
    category: 'moletom'
  },
  {
    id: 4,
    brand: 'AllSaints',
    name: 'Tokyo Underground Tee',
    price: 'R$ 500',
    priceNum: 500,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'T-shirt AllSaints Tokyo Underground, preta. Logo frontal discreto e estampa "ALLSAINTS トウキョウ LONDON" nas costas. 100% algodão premium. Clássico da marca britânica.',
    badge: null,
    image: 'images/produtos/p14.webp',
    category: 'camiseta'
  },
  {
    id: 5,
    brand: 'Ralph Lauren',
    name: 'Hoodie Classic Dark Navy',
    price: 'R$ 700',
    priceNum: 700,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'Hoodie Ralph Lauren em navy escuro. Logo Polo pony bordado em branco. Caimento relaxado e tecido pesado de qualidade premium. Peça autenticada.',
    badge: null,
    image: 'images/produtos/p13.webp',
    category: 'moletom'
  },
  {
    id: 6,
    brand: 'Sundek',
    name: 'Classic Swim Short Bege',
    price: 'R$ 350',
    priceNum: 350,
    sizes: ['M'],
    condition: 'Novo com tags',
    description: 'Short de banho Sundek clássico em areia/bege. Listras coloridas neon verde e azul nas laterais. Logo bordado. Tags originais. Marca italiana de beachwear de luxo.',
    badge: 'Novo',
    image: 'images/produtos/p12.webp',
    images: ['images/produtos/p12.webp', 'images/produtos/p11.webp'],
    category: 'shorts'
  },
  {
    id: 7,
    brand: 'Ralph Lauren',
    name: 'Half-Zip Cotton Sweater',
    price: 'R$ 700',
    priceNum: 700,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'Suéter half-zip Ralph Lauren em cinza chumbo. Gola alta com fecho e detalhe bicolor. Logo Polo bordado no peito. Algodão de alta gramatura. Perfeito para o inverno.',
    badge: null,
    image: 'images/produtos/p10.webp',
    category: 'moletom'
  },
  {
    id: 8,
    brand: 'Vilebrequin',
    name: 'Moorea Tartaruga Navy',
    price: 'R$ 500',
    priceNum: 500,
    sizes: ['M'],
    condition: 'Seminovo — Sem marcas de uso',
    description: 'Short de banho Vilebrequin Moorea em navy com estampa tartaruga coral. Tecido microfiber. Marca francesa de beachwear de luxo. Peça icônica e colecionável.',
    badge: null,
    image: 'images/produtos/p09.webp',
    category: 'shorts'
  },
  {
    id: 10,
    brand: 'Ralph Lauren',
    name: 'Oxford Shirt Listrada',
    price: 'R$ 450',
    priceNum: 450,
    sizes: ['P'],
    condition: 'Seminovo — Excelente estado',
    description: 'Camisa Oxford Ralph Lauren, azul listrado clássico. Colarinho button-down, botões dourados. Logo Polo pony multicolor bordado. Tecido 100% algodão Oxford.',
    badge: null,
    image: 'images/produtos/p07.webp',
    category: 'camisa'
  },
  {
    id: 11,
    brand: 'Sundek',
    name: 'Classic Swim Short Preto',
    price: 'R$ 350',
    priceNum: 350,
    sizes: ['M'],
    condition: 'Seminovo — Ótimo estado',
    description: 'Short de banho Sundek clássico preto. Costuras em branco. Cordão interno. Logo Sundek aplicado. Modelo clean e versátil da marca italiana de beachwear.',
    badge: null,
    image: 'images/produtos/p06.webp',
    category: 'shorts'
  },
  {
    id: 12,
    brand: 'Ralph Lauren',
    name: 'Polo Flag Sweater Navy',
    price: 'R$ 1.350',
    priceNum: 1350,
    sizes: ['G'],
    condition: 'Seminovo — Excelente estado',
    description: 'Suéter Ralph Lauren com patch da bandeira americana em alto relevo. Letras "RL" bordadas. Tecido canelado de malha grossa. Peça icônica do estilo preppy americano.',
    badge: null,
    image: 'images/produtos/p02.webp',
    category: 'moletom'
  },
  {
    id: 13,
    brand: 'Ralph Lauren',
    name: 'Polo Bear Crewneck Navy Denim',
    price: 'R$ 1.000',
    priceNum: 1000,
    sizes: ['G'],
    condition: 'Como novo — Perfeito estado',
    description: 'Moletom crewneck Ralph Lauren Polo Bear navy. Estampa do urso com jaqueta jeans. Tecido pesado premium. Peça colecionável da linha Polo Bear by Ralph Lauren.',
    badge: null,
    image: 'images/produtos/p05.webp',
    category: 'moletom'
  },
  {
    id: 14,
    brand: 'Ralph Lauren',
    name: 'Polo Bear Crewneck Navy Horse',
    price: 'R$ 800',
    priceNum: 800,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'Moletom crewneck Ralph Lauren Polo Bear navy. Estampa do urso jogador de polo a cavalo. Gráfico colorido exclusivo de coleção. Autenticado pela Bergshed.',
    badge: null,
    image: 'images/produtos/p04.webp',
    category: 'moletom'
  },
  {
    id: 15,
    brand: 'Ralph Lauren',
    name: 'Polo Bear Hoodie Chumbo',
    price: 'R$ 600',
    priceNum: 600,
    sizes: ['M'],
    condition: 'Como novo — Perfeito estado',
    description: 'Hoodie Ralph Lauren Polo Bear em chumbo/grafite. Logo do urso bordado no peito esquerdo com assinatura Ralph Lauren. Tecido pesado fleece. Corte relaxado premium.',
    badge: 'Premium',
    image: 'images/produtos/p03.webp',
    category: 'moletom'
  },
  {
    id: 17,
    brand: 'Ralph Lauren',
    name: 'Cable Knit Crewneck Off-White',
    price: 'R$ 1.100',
    priceNum: 1100,
    sizes: ['M'],
    condition: 'Novo com tags',
    description: 'Suéter Ralph Lauren em tricô trançado (cable knit), cor off-white/creme. Logo Polo pony bordado no peito. Tags originais. Gola careca clássica. Peça atemporal do estilo preppy.',
    badge: 'Novo',
    image: 'images/produtos/p17.webp',
    category: 'moletom'
  },
  {
    id: 19,
    brand: 'Ralph Lauren',
    name: 'Cable Knit Crewneck Navy',
    price: 'R$ 900',
    priceNum: 900,
    sizes: ['P'],
    condition: 'Seminovo — Excelente estado',
    description: 'Suéter Ralph Lauren em tricô trançado (cable knit), cor navy. Logo Polo pony bordado em vermelho no peito. Gola careca clássica. Peça atemporal do estilo preppy.',
    badge: null,
    image: 'images/produtos/p19.webp',
    category: 'moletom'
  },
  {
    id: 20,
    brand: 'Ralph Lauren',
    name: 'Polo Bear T-Shirt Off-White',
    price: 'R$ 350',
    priceNum: 350,
    sizes: ['L'],
    condition: 'Seminovo — Excelente estado',
    description: 'T-shirt Ralph Lauren Polo Bear off-white. Estampa do urso com blazer de cricket. Algodão premium macio. Logo Polo Ralph Lauren original autenticado.',
    badge: null,
    image: 'images/produtos/p17.png',
    category: 'camiseta'
  },
  {
    id: 21,
    brand: 'Vilebrequin',
    name: 'Moorea Lagosta & Abacaxi',
    price: 'R$ 700',
    priceNum: 700,
    sizes: ['M'],
    condition: 'Seminovo — Excelente estado',
    description: 'Short de banho Vilebrequin em azul com estampa exclusiva de lagosta e abacaxi. Tecido microfiber leve. Marca francesa de beachwear de luxo. Peça colecionável.',
    badge: null,
    image: 'images/produtos/p18.png',
    category: 'shorts'
  },
  {
    id: 22,
    brand: 'Vilebrequin',
    name: 'Moorea Classic Navy Liso',
    price: 'R$ 700',
    priceNum: 700,
    sizes: ['XL'],
    condition: 'Seminovo — Excelente estado',
    description: 'Short de banho Vilebrequin navy liso. Corte clássico Moorea, tecido microfiber premium. Label Vilebrequin original. Elegância minimalista da marca francesa.',
    badge: null,
    images: ['images/produtos/p19.png', 'images/produtos/p19b.png'],
    category: 'shorts'
  },
  {
    id: 23,
    brand: 'Off-White™',
    name: 'Crewneck Caravaggio Arrows',
    price: 'R$ 800',
    priceNum: 800,
    sizes: ['P'],
    condition: 'Seminovo — Excelente estado',
    description: 'Moletom crewneck Off-White™ preto. Patch de artwork no peito e estampa Caravaggio com setas icônicas nas costas. Algodão pesado. Peça de alto valor de revenda.',
    badge: 'Premium',
    images: ['images/produtos/p20.png', 'images/produtos/p20b.png'],
    category: 'moletom'
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

// ─── IMAGE HELPER ────────────────────────────────────────────────
function getImages(product) {
  if (product.images && product.images.length) return product.images;
  if (product.image) return [product.image];
  return [];
}

// ─── RENDER PRODUCTS ─────────────────────────────────────────────
function renderProducts(filter = 'all') {
  const grid = document.getElementById('products-grid');
  if (!grid) return;

  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  grid.innerHTML = filtered.map(p => {
    const imgs = getImages(p);
    const thumb = imgs[0] || null;
    const hasMultiple = imgs.length > 1;
    return `
    <div class="product-card fade-in" onclick="openModal(${p.id})">
      <div class="product-image-wrap">
        ${thumb
          ? `<img src="${thumb}" alt="${p.name}">`
          : `<div class="product-image-placeholder">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5">
                 <rect x="3" y="3" width="18" height="18" rx="2"/>
                 <circle cx="8.5" cy="8.5" r="1.5"/>
                 <polyline points="21 15 16 10 5 21"/>
               </svg>
             </div>`
        }
        ${p.badge ? `<span class="product-badge">${p.badge}</span>` : ''}
        ${hasMultiple ? `<span class="product-multi-badge">+foto</span>` : ''}
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
    </div>`;
  }).join('');

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
  const gallery = getImages(product);

  if (gallery.length > 1) {
    imageEl.innerHTML = `
      <div class="modal-carousel" id="modal-carousel">
        <div class="modal-carousel-track" id="modal-carousel-track">
          ${gallery.map(src => `<img src="${src}" alt="${product.name}">`).join('')}
        </div>
        <button class="modal-carousel-arrow prev" onclick="event.stopPropagation();carouselMove(-1)">‹</button>
        <button class="modal-carousel-arrow next" onclick="event.stopPropagation();carouselMove(1)">›</button>
        <div class="modal-carousel-dots">
          ${gallery.map((_, i) => `<button class="modal-carousel-dot${i === 0 ? ' active' : ''}" onclick="event.stopPropagation();carouselGoTo(${i})"></button>`).join('')}
        </div>
      </div>`;
    initCarousel(gallery.length);
  } else if (gallery.length === 1) {
    imageEl.innerHTML = `<img src="${gallery[0]}" alt="${product.name}">`;
  } else {
    imageEl.innerHTML = `<div class="modal-image-placeholder">
         <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.5">
           <rect x="3" y="3" width="18" height="18" rx="2"/>
           <circle cx="8.5" cy="8.5" r="1.5"/>
           <polyline points="21 15 16 10 5 21"/>
         </svg>
       </div>`;
  }

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
    window.open(`https://wa.me/5527920024287?text=${msg}`, '_blank');
  };

  document.querySelector('.modal-overlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

// ─── MODAL IMAGE CAROUSEL ────────────────────────────────────────
let carouselIndex = 0;
let carouselCount = 1;

function initCarousel(count) {
  carouselIndex = 0;
  carouselCount = count;

  const track = document.getElementById('modal-carousel-track');
  if (!track) return;

  let startX = 0;
  let currentX = 0;
  let dragging = false;

  const getPos = (e) => (e.touches ? e.touches[0].clientX : e.clientX);

  const onStart = (e) => {
    dragging = true;
    startX = getPos(e);
    currentX = startX;
    track.classList.add('dragging');
  };

  const onMove = (e) => {
    if (!dragging) return;
    currentX = getPos(e);
    const delta = currentX - startX;
    const percent = (-carouselIndex * 100) + (delta / track.clientWidth * 100);
    track.style.transform = `translateX(${percent}%)`;
  };

  const onEnd = () => {
    if (!dragging) return;
    dragging = false;
    track.classList.remove('dragging');
    const delta = currentX - startX;
    if (Math.abs(delta) > 50) {
      carouselMove(delta < 0 ? 1 : -1);
    } else {
      carouselGoTo(carouselIndex);
    }
  };

  track.addEventListener('mousedown', onStart);
  window.addEventListener('mousemove', onMove);
  window.addEventListener('mouseup', onEnd);
  track.addEventListener('touchstart', onStart, { passive: true });
  track.addEventListener('touchmove', onMove, { passive: true });
  track.addEventListener('touchend', onEnd);
}

function carouselGoTo(index) {
  const track = document.getElementById('modal-carousel-track');
  if (!track) return;
  carouselIndex = Math.max(0, Math.min(index, carouselCount - 1));
  track.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.querySelectorAll('.modal-carousel-dot').forEach((dot, i) => {
    dot.classList.toggle('active', i === carouselIndex);
  });
}

function carouselMove(direction) {
  carouselGoTo(carouselIndex + direction);
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
  window.open(`https://wa.me/5527920024287?text=${msg}`, '_blank');
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
