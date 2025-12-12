let cart = JSON.parse(localStorage.getItem('luxeParfumCart')) || [];

function loadCartItems() {
  const cartItemsContainer = document.getElementById('cartItems');
  const cartSummary = document.getElementById('cartSummary');
  const emptyCartMessage = document.getElementById('emptyCartMessage');

  if (cart.length === 0) {
    emptyCartMessage.style.display = 'block';
    cartSummary.style.display = 'none';
    cartItemsContainer.innerHTML = '';
    updateCartCount();
    return;
  }

  emptyCartMessage.style.display = 'none';
  cartSummary.style.display = 'flex';

  const cartMap = new Map();
  cart.forEach(item => {
    if (cartMap.has(item.id)) {
      const existing = cartMap.get(item.id);
      existing.quantity += 1;
    } else {
      cartMap.set(item.id, { ...item, quantity: 1 });
    }
  });

  cartItemsContainer.innerHTML = Array.from(cartMap.values())
    .map(item => createCartItemHTML(item))
    .join('');

  updateCartSummary();
  updateCartCount();
}

function createCartItemHTML(item) {
  return `
    <div class="cart-item" data-id="${item.id}">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-details">
        <h3 class="cart-item-name">${item.name}</h3>
        <p class="cart-item-category">${item.category.charAt(0).toUpperCase() + item.category.slice(1)} • ${item.size}ml</p>
        <p class="cart-item-aroma">${item.aroma.charAt(0).toUpperCase() + item.aroma.slice(1)} scent</p>
      </div>
      <div class="cart-item-quantity">
        <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
        <span class="quantity-value">${item.quantity}</span>
        <button class="quantity-btn" onclick="increaseQuantity(${item.id})">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
        </button>
      </div>
      <div class="cart-item-price">
        <p class="item-price">$${item.price.toFixed(2)}</p>
        <p class="item-total">$${(item.price * item.quantity).toFixed(2)}</p>
      </div>
      <button class="remove-item-btn" onclick="removeItem(${item.id})" aria-label="Remove item">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </div>
  `;
}

function increaseQuantity(productId) {
  const allProducts = getAllProducts();
  const product = allProducts.find(p => p.id === productId);

  if (product) {
    cart.push(product);
    localStorage.setItem('luxeParfumCart', JSON.stringify(cart));
    loadCartItems();
    showNotification('Quantity increased');
  }
}

function decreaseQuantity(productId) {
  const index = cart.findIndex(item => item.id === productId);

  if (index !== -1) {
    cart.splice(index, 1);
    localStorage.setItem('luxeParfumCart', JSON.stringify(cart));
    loadCartItems();
    showNotification('Quantity decreased');
  }
}

function removeItem(productId) {
  cart = cart.filter(item => item.id !== productId);
  localStorage.setItem('luxeParfumCart', JSON.stringify(cart));
  loadCartItems();
  showNotification('Item removed from cart');
}

function clearCart() {
  if (confirm('Are you sure you want to clear your cart?')) {
    cart = [];
    localStorage.setItem('luxeParfumCart', JSON.stringify(cart));
    loadCartItems();
    showNotification('Cart cleared');
  }
}

function updateCartSummary() {
  const cartMap = new Map();
  cart.forEach(item => {
    if (cartMap.has(item.id)) {
      const existing = cartMap.get(item.id);
      existing.quantity += 1;
    } else {
      cartMap.set(item.id, { ...item, quantity: 1 });
    }
  });

  const subtotal = Array.from(cartMap.values()).reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const tax = subtotal * 0.1;
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + tax + shipping;

  document.getElementById('subtotal').textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById('tax').textContent = `$${tax.toFixed(2)}`;
  document.getElementById('shipping').textContent = shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`;
  document.getElementById('total').textContent = `$${total.toFixed(2)}`;

  const shippingNote = document.getElementById('shippingNote');
  if (shippingNote) {
    shippingNote.textContent = subtotal > 100
      ? 'You qualify for free shipping!'
      : `Spend $${(100 - subtotal).toFixed(2)} more for free shipping`;
  }
}

function updateCartCount() {
  const cartCount = document.getElementById('cartCount');
  if (cartCount) {
    cartCount.textContent = cart.length;
  }
}

function checkout() {
  if (cart.length === 0) {
    showNotification('Your cart is empty');
    return;
  }
  showNotification('Checkout feature coming soon!');
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

function getAllProducts() {
  return [
    { id: 1, name: 'Noir Elegance', price: 149.99, image: 'https://bellavitaorganic.com/cdn/shop/files/Date_woman_100_ml_1.jpg?v=1728029584&width=500', category: 'women', aroma: 'floral', size: 100 },
    { id: 2, name: 'Royal Oud', price: 189.99, image: 'https://besuitedaroma.com/wp-content/uploads/2022/10/Stronger-with-you-1024x835.jpg', category: 'men', aroma: 'woody', size: 100 },
    { id: 3, name: 'Celestial Rose', price: 129.99, image: 'https://images.pexels.com/photos/3865675/pexels-photo-3865675.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'floral', size: 75 },
    { id: 4, name: 'Ocean Breeze', price: 119.99, image: 'https://imgmedia.lbb.in/media/2023/06/649c309d4a32d7701e70c95e_1687957661283.jpg', category: 'men', aroma: 'aquatic', size: 100 },
    { id: 5, name: 'Midnight Bloom', price: 159.99, image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'floral', size: 50 },
    { id: 6, name: 'Citrus Essence', price: 99.99, image: 'https://www.frenchessence.com/cdn/shop/files/5_211de8f8-dfd2-46b9-be2d-49ac1d25b724.jpg?v=1758783310&width=1024', category: 'men', aroma: 'citrusy', size: 75 },
    { id: 7, name: 'Velvet Amber', price: 169.99, image: 'https://images.pexels.com/photos/4041391/pexels-photo-4041391.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'woody', size: 100 },
    { id: 8, name: 'Wild Musk', price: 139.99, image: 'https://fittingroom.store/versace-cover.jpg', category: 'men', aroma: 'woody', size: 100 },
    { id: 9, name: 'Leather & Spice', price: 179.99, image: 'https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2025/OCTOBER/1/7loH9DlL_08371146df7a4309abff92949ec9abd7.jpg', category: 'men', aroma: 'woody', size: 100 },
    { id: 10, name: 'Fresh Bergamot', price: 109.99, image: 'https://www.marinabaysands.com/guides/luxurious-indulgence/best-perfume-brands/_jcr_content/root/container/table_copy/1-1/image.coreimg.jpeg/1730792766864/amaffi.jpeg', category: 'men', aroma: 'citrusy', size: 50 },
    { id: 11, name: 'Azure Wave', price: 124.99, image: 'https://www.frenchessence.com/cdn/shop/articles/2_29b58f60-8ea1-4f08-bd62-93ee6881806e.webp?v=1723101274', category: 'men', aroma: 'aquatic', size: 75 },
    { id: 12, name: 'Tropical Paradise', price: 114.99, image: 'https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1639409602-screen-shot-2021-12-13-at-10-32-47-am-1639409587.png?crop=1.00xw:0.929xh;0,0.0163xh&resize=980:*', category: 'men', aroma: 'fruity', size: 100 },
    { id: 13, name: 'Jasmine Dreams', price: 144.99, image: 'https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'floral', size: 75 },
    { id: 14, name: 'Golden Vanilla', price: 134.99, image: 'https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'fruity', size: 100 },
    { id: 15, name: 'Pink Peony', price: 139.99, image: 'https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'floral', size: 50 },
    { id: 16, name: 'Sunset Citrus', price: 109.99, image: 'https://images.pexels.com/photos/3685524/pexels-photo-3685524.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'citrusy', size: 75 },
    { id: 17, name: 'Summer Collection', price: 89.99, originalPrice: 129.99, image: 'https://smytten-image.gumlet.io/shop_item/FHE0031AB42.jpg', category: 'women', aroma: 'citrusy', size: 75, discount: 30 },
    { id: 18, name: 'Classic Edition', price: 109.99, originalPrice: 159.99, image: 'https://wallpapers.com/images/hd/fragrance-1920-x-1080-wallpaper-3772ir99ucy68q49.jpg', category: 'men', aroma: 'woody', size: 100, discount: 25 },
    { id: 19, name: 'Spring Blossom', price: 94.99, originalPrice: 134.99, image: 'https://images-eu.ssl-images-amazon.com/images/I/61nqEGqN51L._AC_UL600_SR600,600_.jpg', category: 'women', aroma: 'floral', size: 50, discount: 30 },
    { id: 20, name: 'Ocean Splash', price: 79.99, originalPrice: 119.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRztag7wHtam0xKr--fgfQ_km4cUPqeMzkC75bM26cUzuWII6l9_ImrgHfMkhHclOoV-5E&usqp=CAU', category: 'men', aroma: 'aquatic', size: 75, discount: 33 },
    { id: 21, name: 'Black Orchid', price: 199.99, image: 'https://m.media-amazon.com/images/I/71iZAjuPcqL._UF894,1000_QL80_.jpg', category: 'men', aroma: 'woody', size: 100 },
    { id: 22, name: 'Midnight Storm', price: 159.99, image: 'https://images.meesho.com/images/products/567387383/mprgj_512.jpg', category: 'men', aroma: 'aquatic', size: 75 },
    { id: 23, name: 'Crystal Rose', price: 154.99, image: 'https://images.pexels.com/photos/4041385/pexels-photo-4041385.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'floral', size: 100 },
    { id: 24, name: 'Silk Blossom', price: 164.99, image: 'https://images.pexels.com/photos/3738386/pexels-photo-3738386.jpeg?auto=compress&cs=tinysrgb&w=600', category: 'women', aroma: 'floral', size: 50 },
    { id: 25, name: 'Sapphire Dreams', price: 174.99, image: 'https://thumbs.dreamstime.com/b/perfume-mockup-design-minimalist-theme-394017464.jpg', category: 'women', aroma: 'floral', size: 75, isNew: true },
    { id: 26, name: 'Mystic Woods', price: 184.99, image: 'https://www.shutterstock.com/image-photo/create-photo-perfume-on-dark-260nw-2443935787.jpg', category: 'men', aroma: 'woody', size: 100, isNew: true },
    { id: 27, name: 'Golden Hour', price: 149.99, image: 'https://www.shutterstock.com/image-photo/bottle-cologne-sits-on-table-260nw-2497127937.jpg', category: 'women', aroma: 'floral', size: 100, isNew: true },
    { id: 28, name: 'Silver Lining', price: 129.99, image: 'https://png.pngtree.com/thumb_back/fh260/background/20230703/pngtree-3d-rendered-perfume-bottle-a-premium-luxurious-branding-solution-image_3775511.jpg', category: 'men', aroma: 'aquatic', size: 50, isNew: true },
    { id: 29, name: 'Pearl Essence', price: 154.99, image: 'https://static.vecteezy.com/system/resources/thumbnails/052/128/621/small/a-bottle-of-perfume-is-sitting-on-a-counter-photo.jpg', category: 'women', aroma: 'floral', size: 75, isNew: true },
    { id: 30, name: 'Crimson Sunset', price: 144.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm7-d_Yed6AakIkoiL6GSFolHZPhF2yIBaVAmgzv1jfumo3sqN3pLKk5DQYgRdXPHO8zQ&usqp=CAU', category: 'men', aroma: 'citrusy', size: 100, isNew: true },
    { id: 31, name: 'Velvet Night', price: 99.99, originalPrice: 149.99, image: 'https://m.media-amazon.com/images/I/41R2RVh13sL._SL500_.jpg', category: 'men', aroma: 'woody', size: 100, discount: 33 },
    { id: 32, name: 'Rose Garden', price: 84.99, originalPrice: 124.99, image: 'https://images-cdn.ubuy.co.in/6592351d491275678c4bb4b4-zermat-alicia-fragrance-for-her.jpg', category: 'women', aroma: 'floral', size: 50, discount: 32 },
    { id: 33, name: 'Amber Gold', price: 104.99, originalPrice: 154.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTpjZ9aL48kNVshD_SEcOfKkAxWU5-uDxYA&s', category: 'women', aroma: 'woody', size: 75, discount: 32 },
    { id: 34, name: 'Citrus Splash', price: 69.99, originalPrice: 99.99, image: 'https://edenrobe.com/cdn/shop/files/24_B_Fragrance_EBMF-FLEET_R1.jpg?v=1748587044', category: 'men', aroma: 'citrusy', size: 50, discount: 30 },
    { id: 35, name: 'Lavender Fields', price: 89.99, originalPrice: 129.99, image: 'https://edenrobe.com/cdn/shop/files/Nawal.jpg?v=1755339476', category: 'women', aroma: 'floral', size: 75, discount: 31 },
    { id: 36, name: 'Spice Market', price: 94.99, originalPrice: 139.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnhnOQfOTZkapdhGn8m-DHc7FzIvMVrLo4kA&s', category: 'men', aroma: 'woody', size: 100, discount: 32 },
    { id: 37, name: 'Tropical Breeze', price: 74.99, originalPrice: 114.99, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf1Hh99KsF_wRnYlDDgRarpSR6CpX4sStUm_AwkNlo-M560yPSJfL1mOJX-0iPm6C47QE&usqp=CAU', category: 'men', aroma: 'fruity', size: 75, discount: 35 }
  ];
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

function init() {
  loadCartItems();
  initProfileDropdown();
  initSearchBar();
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

window.increaseQuantity = increaseQuantity;
window.decreaseQuantity = decreaseQuantity;
window.removeItem = removeItem;
window.clearCart = clearCart;
window.checkout = checkout;
