const perfumeData = {
  bestSellers: [
    {
      id: 1,
      name: 'Noir Elegance',
      price: 149.99,
      image: 'https://bellavitaorganic.com/cdn/shop/files/Date_woman_100_ml_1.jpg?v=1728029584&width=500',
      category: 'women',
      aroma: 'floral',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 2,
      name: 'Royal Oud',
      price: 189.99,
      image: 'https://cdn.pixabay.com/photo/2018/03/12/17/23/perfume-3220296_640.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 3,
      name: 'Celestial Rose',
      price: 129.99,
      image: 'https://cdn.shopify.com/s/files/1/1163/9680/products/personalisedluxuryperfumebottle.jpg?v=1675661106',
      category: 'women',
      aroma: 'floral',
      size: 75,
      isNew: false,
      discount: 0
    },
    {
      id: 4,
      name: 'Ocean Breeze',
      price: 119.99,
      image: 'https://w0.peakpx.com/wallpaper/162/257/HD-wallpaper-graphy-perfume.jpg',
      category: 'men',
      aroma: 'aquatic',
      size: 100,
      isNew: false,
      discount: 0
    }
  ],
  newArrivals: [
    {
      id: 5,
      name: 'Midnight Bloom',
      price: 159.99,
      image: 'https://www.moraleparfum.com/cdn/shop/files/799D5D65-ADB9-431F-B7BF-7C9112238D6C.jpg?v=1730467220&width=533',
      category: 'women',
      aroma: 'floral',
      size: 50,
      isNew: true,
      discount: 0
    },
    {
      id: 6,
      name: 'Citrus Essence',
      price: 99.99,
      image: 'https://img.pikbest.com/backgrounds/20250324/luxury-perfume-bottle-product-photography--e2-80-93-elegant-and-aesthetic-fragrance-advertisement_11623490.jpg!sw800',
      category: 'men',
      aroma: 'citrusy',
      size: 75,
      isNew: true,
      discount: 0
    },
    {
      id: 7,
      name: 'Velvet Amber',
      price: 169.99,
      image: 'https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/JUNE/2/IMvVpnbp_998918c84a964773a2341d1287fff76c.jpg',
      category: 'women',
      aroma: 'woody',
      size: 100,
      isNew: true,
      discount: 0
    },
    {
      id: 8,
      name: 'Wild Musk',
      price: 139.99,
      image: 'https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNDY4LXBmLXM1MC1wYWktMDAwNy1lMDEtcm00NjgtbW9ja3VwLmpwZw.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: true,
      discount: 0
    }
  ],
  men: [
    {
      id: 9,
      name: 'Leather & Spice',
      price: 179.99,
      image: 'https://images.pexels.com/photos/4041390/pexels-photo-4041390.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 10,
      name: 'Fresh Bergamot',
      price: 109.99,
      image: 'https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'citrusy',
      size: 50,
      isNew: false,
      discount: 0
    },
    {
      id: 11,
      name: 'Azure Wave',
      price: 124.99,
      image: 'https://images.pexels.com/photos/3797390/pexels-photo-3797390.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'aquatic',
      size: 75,
      isNew: false,
      discount: 0
    },
    {
      id: 12,
      name: 'Tropical Paradise',
      price: 114.99,
      image: 'https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'fruity',
      size: 100,
      isNew: false,
      discount: 0
    }
  ],
  women: [
    {
      id: 13,
      name: 'Jasmine Dreams',
      price: 144.99,
      image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 75,
      isNew: false,
      discount: 0
    },
    {
      id: 14,
      name: 'Golden Vanilla',
      price: 134.99,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'fruity',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 15,
      name: 'Pink Peony',
      price: 139.99,
      image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 50,
      isNew: false,
      discount: 0
    },
    {
      id: 16,
      name: 'Sunset Citrus',
      price: 109.99,
      image: 'https://images.pexels.com/photos/3685524/pexels-photo-3685524.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'citrusy',
      size: 75,
      isNew: false,
      discount: 0
    }
  ],
  offers: [
    {
      id: 17,
      name: 'Summer Collection',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://images.pexels.com/photos/3797387/pexels-photo-3797387.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'citrusy',
      size: 75,
      isNew: false,
      discount: 30
    },
    {
      id: 18,
      name: 'Classic Edition',
      price: 109.99,
      originalPrice: 159.99,
      image: 'https://images.pexels.com/photos/3797388/pexels-photo-3797388.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 25
    }
  ]
};

let cart = JSON.parse(localStorage.getItem('luxeParfumCart')) || [];

function createProductCard(product) {
  return `
    <div class="product-card">
      <div class="product-image-container">
        <img src="${product.image}" alt="${product.name}" class="product-image" />
        ${product.discount > 0 ? `<div style="position: absolute; top: 16px; right: 16px; background: #d4af37; color: white; padding: 8px 12px; border-radius: 4px; font-weight: 700; font-size: 0.9rem;">${product.discount}% OFF</div>` : ''}
        ${product.isNew ? `<div style="position: absolute; top: 16px; left: 16px; background: #1a1a1a; color: white; padding: 8px 12px; border-radius: 4px; font-weight: 700; font-size: 0.9rem;">NEW</div>` : ''}
      </div>
      <div class="product-info">
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">
          ${product.originalPrice ? `<span style="text-decoration: line-through; color: #999; font-size: 1rem; margin-right: 8px;">$${product.originalPrice}</span>` : ''}
          $${product.price}
        </div>
        <div class="product-buttons">
          <button class="btn-primary" onclick="buyNow(${product.id})">Buy Now</button>
          <button class="btn-secondary" onclick="addToCart(${product.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `;
}

function loadProducts(containerId, products) {
  const container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = products.map(product => createProductCard(product)).join('');
  }
}

function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const indicatorsContainer = document.getElementById('heroIndicators');
  let currentSlide = 0;

  slides.forEach((_, index) => {
    const indicator = document.createElement('div');
    indicator.className = `hero-indicator ${index === 0 ? 'active' : ''}`;
    indicator.addEventListener('click', () => goToSlide(index));
    indicatorsContainer.appendChild(indicator);
  });

  function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    document.querySelectorAll('.hero-indicator')[currentSlide].classList.remove('active');
    currentSlide = n;
    slides[currentSlide].classList.add('active');
    document.querySelectorAll('.hero-indicator')[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide((currentSlide + 1) % slides.length);
  }

  setInterval(nextSlide, 5000);
}

function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.testimonial-card').forEach(card => {
    observer.observe(card);
  });
}

function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
  });
}

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      form.reset();
    });
  }
}

function addToCart(productId) {
  const allProducts = [
    ...perfumeData.bestSellers,
    ...perfumeData.newArrivals,
    ...perfumeData.men,
    ...perfumeData.women,
    ...perfumeData.offers
  ];

  const product = allProducts.find(p => p.id === productId);

  if (product) {
    cart.push(product);
    localStorage.setItem('luxeParfumCart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
  }
}

function buyNow(productId) {
  addToCart(productId);
  showNotification('Redirecting to checkout...');
  setTimeout(() => {
    alert('Checkout feature coming soon!');
  }, 1000);
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function showNotification(message) {
  const notification = document.createElement('div');
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    bottom: 32px;
    right: 32px;
    background: linear-gradient(135deg, #d4af37, #f4d47c);
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 8px 30px rgba(212, 175, 55, 0.4);
    z-index: 10000;
    font-weight: 600;
    animation: slideIn 0.3s ease-out;
  `;

  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-out';
    setTimeout(() => notification.remove(), 300);
  }, 3000);
}

const style = document.createElement('style');
style.textContent = `
  @keyframes slideIn {
    from {
      transform: translateX(400px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(400px);
      opacity: 0;
    }
  }
`;
document.head.appendChild(style);

function initProfileDropdown() {
  const profileBtn = document.getElementById('profileBtn');
  const profileDropdown = document.getElementById('profileDropdown');

  if (profileBtn && profileDropdown) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profileDropdown.classList.toggle('active');
    });

    document.addEventListener('click', () => {
      profileDropdown.classList.remove('active');
    });
  }
}

function initSearchBar() {
  const searchBtn = document.getElementById('searchBtn');
  const searchInput = document.getElementById('searchInput');

  if (searchBtn && searchInput) {
    searchBtn.addEventListener('click', () => {
      searchInput.classList.toggle('active');
      if (searchInput.classList.contains('active')) {
        searchInput.focus();
      }
    });

    document.addEventListener('click', (e) => {
      if (!searchBtn.contains(e.target) && !searchInput.contains(e.target)) {
        searchInput.classList.remove('active');
      }
    });
  }
}

function initAromaNavigation() {
  const aromaCards = document.querySelectorAll('.aroma-card');
  aromaCards.forEach(card => {
    card.addEventListener('click', () => {
      window.location.href = '/aromatic.html';
    });
  });
}

function init() {
  loadProducts('bestSellers', perfumeData.bestSellers);
  loadProducts('newArrivals', perfumeData.newArrivals);
  initHeroSlider();
  initScrollAnimations();
  initStickyNavbar();
  initContactForm();
  initProfileDropdown();
  initSearchBar();
  initAromaNavigation();
  updateCartCount();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addToCart = addToCart;
window.buyNow = buyNow;
