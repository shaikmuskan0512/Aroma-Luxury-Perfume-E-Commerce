import './style.css';

const perfumeData = {
  men: [
    {
      id: 2,
      name: 'Royal Oud',
      price: 189.99,
      image: 'https://besuitedaroma.com/wp-content/uploads/2022/10/Stronger-with-you-1024x835.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 4,
      name: 'Ocean Breeze',
      price: 119.99,
      image: 'https://imgmedia.lbb.in/media/2023/06/649c309d4a32d7701e70c95e_1687957661283.jpg',
      category: 'men',
      aroma: 'aquatic',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 6,
      name: 'Citrus Essence',
      price: 99.99,
      image: 'https://www.frenchessence.com/cdn/shop/files/5_211de8f8-dfd2-46b9-be2d-49ac1d25b724.jpg?v=1758783310&width=1024',
      category: 'men',
      aroma: 'citrusy',
      size: 75,
      isNew: true,
      discount: 0
    },
    {
      id: 8,
      name: 'Wild Musk',
      price: 139.99,
      image: 'https://fittingroom.store/versace-cover.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: true,
      discount: 0
    },
    {
      id: 9,
      name: 'Leather & Spice',
      price: 179.99,
      image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/OCTOBER/1/7loH9DlL_08371146df7a4309abff92949ec9abd7.jpg',
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
      image: 'https://www.marinabaysands.com/guides/luxurious-indulgence/best-perfume-brands/_jcr_content/root/container/table_copy/1-1/image.coreimg.jpeg/1730792766864/amaffi.jpeg',
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
      image: 'https://www.frenchessence.com/cdn/shop/articles/2_29b58f60-8ea1-4f08-bd62-93ee6881806e.webp?v=1723101274',
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
      image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639409602-screen-shot-2021-12-13-at-10-32-47-am-1639409587.png?crop=1.00xw:0.929xh;0,0.0163xh&resize=980:*',
      category: 'men',
      aroma: 'fruity',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 21,
      name: 'Black Orchid',
      price: 199.99,
      image: 'https://m.media-amazon.com/images/I/71iZAjuPcqL._UF894,1000_QL80_.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 22,
      name: 'Midnight Storm',
      price: 159.99,
      image: 'https://images.meesho.com/images/products/567387383/mprgj_512.jpg',
      category: 'men',
      aroma: 'aquatic',
      size: 75,
      isNew: false,
      discount: 0
    }
  ],
  women: [
    {
      id: 1,
      name: 'Noir Elegance',
      price: 149.99,
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 3,
      name: 'Celestial Rose',
      price: 129.99,
      image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 75,
      isNew: false,
      discount: 0
    },
    {
      id: 5,
      name: 'Midnight Bloom',
      price: 159.99,
      image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 50,
      isNew: true,
      discount: 0
    },
    {
      id: 7,
      name: 'Velvet Amber',
      price: 169.99,
      image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'woody',
      size: 100,
      isNew: true,
      discount: 0
    },
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
    },
    {
      id: 23,
      name: 'Crystal Rose',
      price: 154.99,
      image: 'https://images.pexels.com/photos/4041385/pexels-photo-4041385.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 100,
      isNew: false,
      discount: 0
    },
    {
      id: 24,
      name: 'Silk Blossom',
      price: 164.99,
      image: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 50,
      isNew: false,
      discount: 0
    }
  ],
  newArrivals: [
    {
      id: 5,
      name: 'Midnight Bloom',
      price: 159.99,
      image: 'https://c8.alamy.com/comp/2XA1TBJ/the-chanel-no-5-perfume-on-a-studio-background-2XA1TBJ.jpg',
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
      image: 'https://i.pinimg.com/736x/08/c2/87/08c287cdfcdadc812458831d8ee89c39.jpg',
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
      image: 'https://t4.ftcdn.net/jpg/05/44/20/49/360_F_544204949_JgxwoyI5Il2r5NdZOQ1EIxD60d1lFn5K.jpg',
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
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20241118/pngtree-pink-perfume-bottle-on-satin-image_16599785.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: true,
      discount: 0
    },
    {
      id: 25,
      name: 'Sapphire Dreams',
      price: 174.99,
      image: 'https://thumbs.dreamstime.com/b/perfume-mockup-design-minimalist-theme-394017464.jpg',
      category: 'women',
      aroma: 'floral',
      size: 75,
      isNew: true,
      discount: 0
    },
    {
      id: 26,
      name: 'Mystic Woods',
      price: 184.99,
      image: 'https://www.shutterstock.com/image-photo/create-photo-perfume-on-dark-260nw-2443935787.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: true,
      discount: 0
    },
    {
      id: 27,
      name: 'Golden Hour',
      price: 149.99,
      image: 'https://www.shutterstock.com/image-photo/bottle-cologne-sits-on-table-260nw-2497127937.jpg',
      category: 'women',
      aroma: 'floral',
      size: 100,
      isNew: true,
      discount: 0
    },
    {
      id: 28,
      name: 'Silver Lining',
      price: 129.99,
      image: 'https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-3d-rendered-perfume-bottle-a-premium-luxurious-branding-solution-image_3775511.jpg',
      category: 'men',
      aroma: 'aquatic',
      size: 50,
      isNew: true,
      discount: 0
    },
    {
      id: 29,
      name: 'Pearl Essence',
      price: 154.99,
      image: 'https://static.vecteezy.com/system/resources/thumbnails/052/128/621/small/a-bottle-of-perfume-is-sitting-on-a-counter-photo.jpg',
      category: 'women',
      aroma: 'floral',
      size: 75,
      isNew: true,
      discount: 0
    },
    {
      id: 30,
      name: 'Crimson Sunset',
      price: 144.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7-d_Yed6AakIkoiL6GSFolHZPhF2yIBaVAmgzv1jfumo3sqN3pLKk5DQYgRdXPHO8zQ&usqp=CAU',
      category: 'men',
      aroma: 'citrusy',
      size: 100,
      isNew: true,
      discount: 0
    }
  ],
  offers: [
    {
      id: 17,
      name: 'Summer Collection',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://smytten-image.gumlet.io/shop_item/FHE0031AB42.jpg',
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
      image: 'https://wallpapers.com/images/hd/fragrance-1920-x-1080-wallpaper-3772ir99ucy68q49.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 25
    },
    {
      id: 19,
      name: 'Spring Blossom',
      price: 94.99,
      originalPrice: 134.99,
      image: 'https://images-eu.ssl-images-amazon.com/images/I/61nqEGqN51L._AC_UL600_SR600,600_.jpg',
      category: 'women',
      aroma: 'floral',
      size: 50,
      isNew: false,
      discount: 30
    },
    {
      id: 20,
      name: 'Ocean Splash',
      price: 79.99,
      originalPrice: 119.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztag7wHtam0xKr--fgfQ_km4cUPqeMzkC75bM26cUzuWII6l9_ImrgHfMkhHclOoV-5E&usqp=CAU',
      category: 'men',
      aroma: 'aquatic',
      size: 75,
      isNew: false,
      discount: 33
    },
    {
      id: 31,
      name: 'Velvet Night',
      price: 99.99,
      originalPrice: 149.99,
      image: 'https://m.media-amazon.com/images/I/41R2RVh13sL._SL500_.jpg',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 33
    },
    {
      id: 32,
      name: 'Rose Garden',
      price: 84.99,
      originalPrice: 124.99,
      image: 'https://images-cdn.ubuy.co.in/6592351d491275678c4bb4b4-zermat-alicia-fragrance-for-her.jpg',
      category: 'women',
      aroma: 'floral',
      size: 50,
      isNew: false,
      discount: 32
    },
    {
      id: 33,
      name: 'Amber Gold',
      price: 104.99,
      originalPrice: 154.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTpjZ9aL48kNVshD_SEcOfKkAxWU5-uDxYA&s',
      category: 'women',
      aroma: 'woody',
      size: 75,
      isNew: false,
      discount: 32
    },
    {
      id: 34,
      name: 'Citrus Splash',
      price: 69.99,
      originalPrice: 99.99,
      image: 'https://edenrobe.com/cdn/shop/files/24_B_Fragrance_EBMF-FLEET_R1.jpg?v=1748587044',
      category: 'men',
      aroma: 'citrusy',
      size: 50,
      isNew: false,
      discount: 30
    },
    {
      id: 35,
      name: 'Lavender Fields',
      price: 89.99,
      originalPrice: 129.99,
      image: 'https://edenrobe.com/cdn/shop/files/Nawal.jpg?v=1755339476',
      category: 'women',
      aroma: 'floral',
      size: 75,
      isNew: false,
      discount: 31
    },
    {
      id: 36,
      name: 'Spice Market',
      price: 94.99,
      originalPrice: 139.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhnOQfOTZkapdhGn8m-DHc7FzIvMVrLo4kA&s',
      category: 'men',
      aroma: 'woody',
      size: 100,
      isNew: false,
      discount: 32
    },
    {
      id: 37,
      name: 'Tropical Breeze',
      price: 74.99,
      originalPrice: 114.99,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1Hh99KsF_wRnYlDDgRarpSR6CpX4sStUm_AwkNlo-M560yPSJfL1mOJX-0iPm6C47QE&usqp=CAU',
      category: 'men',
      aroma: 'fruity',
      size: 75,
      isNew: false,
      discount: 35
    }
  ],
  aromatic: [
    {
      id: 6,
      name: 'Citrus Essence',
      price: 99.99,
      image: 'https://images.pexels.com/photos/3785815/pexels-photo-3785815.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'citrusy',
      size: 75,
      isNew: true,
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
      id: 16,
      name: 'Sunset Citrus',
      price: 109.99,
      image: 'https://images.pexels.com/photos/3685524/pexels-photo-3685524.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'citrusy',
      size: 75,
      isNew: false,
      discount: 0
    },
    {
      id: 1,
      name: 'Noir Elegance',
      price: 149.99,
      image: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'women',
      aroma: 'floral',
      size: 100,
      isNew: false,
      discount: 0
    },
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
      id: 4,
      name: 'Ocean Breeze',
      price: 119.99,
      image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'men',
      aroma: 'aquatic',
      size: 100,
      isNew: false,
      discount: 0
    }
  ]
};

let cart = JSON.parse(localStorage.getItem('luxeParfumCart')) || [];

function getCurrentPage() {
  const path = window.location.pathname;
  if (path.includes('men.html')) return 'men';
  if (path.includes('women.html')) return 'women';
  if (path.includes('new-arrivals.html')) return 'newArrivals';
  if (path.includes('offers.html')) return 'offers';
  if (path.includes('aromatic.html')) return 'aromatic';
  return 'men';
}

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

function getFilters() {
  const priceFilter = document.querySelector('input[name="price"]:checked')?.value || 'all';

  const sizeFilters = Array.from(document.querySelectorAll('input[id^="size-"]:checked'))
    .map(input => parseInt(input.value));

  const aromaFilters = Array.from(document.querySelectorAll('input[id^="aroma-"]:checked'))
    .map(input => input.value);

  return { priceFilter, sizeFilters, aromaFilters };
}

function filterProducts(products) {
  const { priceFilter, sizeFilters, aromaFilters } = getFilters();

  return products.filter(product => {
    let passesPrice = true;
    if (priceFilter === 'low') passesPrice = product.price < 100;
    else if (priceFilter === 'mid') passesPrice = product.price >= 100 && product.price <= 150;
    else if (priceFilter === 'high') passesPrice = product.price > 150;

    const passesSize = sizeFilters.length === 0 || sizeFilters.includes(product.size);
    const passesAroma = aromaFilters.length === 0 || aromaFilters.includes(product.aroma);

    return passesPrice && passesSize && passesAroma;
  });
}

function displayProducts() {
  const currentPage = getCurrentPage();
  const allProducts = perfumeData[currentPage] || [];
  const filteredProducts = filterProducts(allProducts);

  const container = document.getElementById('catalogProducts');
  if (!container) return;

  if (filteredProducts.length === 0) {
    container.innerHTML = '<div class="no-products">No products match your filters. Try adjusting your selection.</div>';
  } else {
    container.innerHTML = filteredProducts.map(product => createProductCard(product)).join('');
  }
}

function addToCart(productId) {
  const allProducts = [
    ...perfumeData.men,
    ...perfumeData.women,
    ...perfumeData.newArrivals,
    ...perfumeData.offers,
    ...perfumeData.aromatic
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

function initFilters() {
  const filterInputs = document.querySelectorAll('.filter-option input');
  filterInputs.forEach(input => {
    input.addEventListener('change', displayProducts);
  });

  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      document.querySelectorAll('.filter-option input[type="checkbox"]').forEach(cb => cb.checked = false);
      document.querySelector('input[name="price"][value="all"]').checked = true;
      displayProducts();
    });
  }
}

function initStickyNavbar() {
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
}

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

function init() {
  displayProducts();
  initFilters();
  initStickyNavbar();
  initProfileDropdown();
  initSearchBar();
  updateCartCount();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.addToCart = addToCart;
window.buyNow = buyNow;
