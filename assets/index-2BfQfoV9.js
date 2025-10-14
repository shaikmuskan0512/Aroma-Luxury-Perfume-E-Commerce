(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=o(i);fetch(i.href,s)}})();const r={bestSellers:[{id:1,name:"Noir Elegance",price:149.99,image:"https://bellavitaorganic.com/cdn/shop/files/Date_woman_100_ml_1.jpg?v=1728029584&width=500",category:"women",aroma:"floral",size:100,isNew:!1,discount:0},{id:2,name:"Royal Oud",price:189.99,image:"https://cdn.pixabay.com/photo/2018/03/12/17/23/perfume-3220296_640.jpg",category:"men",aroma:"woody",size:100,isNew:!1,discount:0},{id:3,name:"Celestial Rose",price:129.99,image:"https://cdn.shopify.com/s/files/1/1163/9680/products/personalisedluxuryperfumebottle.jpg?v=1675661106",category:"women",aroma:"floral",size:75,isNew:!1,discount:0},{id:4,name:"Ocean Breeze",price:119.99,image:"https://w0.peakpx.com/wallpaper/162/257/HD-wallpaper-graphy-perfume.jpg",category:"men",aroma:"aquatic",size:100,isNew:!1,discount:0}],newArrivals:[{id:5,name:"Midnight Bloom",price:159.99,image:"https://www.moraleparfum.com/cdn/shop/files/799D5D65-ADB9-431F-B7BF-7C9112238D6C.jpg?v=1730467220&width=533",category:"women",aroma:"floral",size:50,isNew:!0,discount:0},{id:6,name:"Citrus Essence",price:99.99,image:"https://img.pikbest.com/backgrounds/20250324/luxury-perfume-bottle-product-photography--e2-80-93-elegant-and-aesthetic-fragrance-advertisement_11623490.jpg!sw800",category:"men",aroma:"citrusy",size:75,isNew:!0,discount:0},{id:7,name:"Velvet Amber",price:169.99,image:"https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/2025/JUNE/2/IMvVpnbp_998918c84a964773a2341d1287fff76c.jpg",category:"women",aroma:"woody",size:100,isNew:!0,discount:0},{id:8,name:"Wild Musk",price:139.99,image:"https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTExL3JtNDY4LXBmLXM1MC1wYWktMDAwNy1lMDEtcm00NjgtbW9ja3VwLmpwZw.jpg",category:"men",aroma:"woody",size:100,isNew:!0,discount:0}],men:[{id:9,name:"Leather & Spice",price:179.99,image:"https://images.pexels.com/photos/4041390/pexels-photo-4041390.jpeg?auto=compress&cs=tinysrgb&w=600",category:"men",aroma:"woody",size:100,isNew:!1,discount:0},{id:10,name:"Fresh Bergamot",price:109.99,image:"https://images.pexels.com/photos/3875821/pexels-photo-3875821.jpeg?auto=compress&cs=tinysrgb&w=600",category:"men",aroma:"citrusy",size:50,isNew:!1,discount:0},{id:11,name:"Azure Wave",price:124.99,image:"https://images.pexels.com/photos/3797390/pexels-photo-3797390.jpeg?auto=compress&cs=tinysrgb&w=600",category:"men",aroma:"aquatic",size:75,isNew:!1,discount:0},{id:12,name:"Tropical Paradise",price:114.99,image:"https://images.pexels.com/photos/6764040/pexels-photo-6764040.jpeg?auto=compress&cs=tinysrgb&w=600",category:"men",aroma:"fruity",size:100,isNew:!1,discount:0}],women:[{id:13,name:"Jasmine Dreams",price:144.99,image:"https://images.pexels.com/photos/3685530/pexels-photo-3685530.jpeg?auto=compress&cs=tinysrgb&w=600",category:"women",aroma:"floral",size:75,isNew:!1,discount:0},{id:14,name:"Golden Vanilla",price:134.99,image:"https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=600",category:"women",aroma:"fruity",size:100,isNew:!1,discount:0},{id:15,name:"Pink Peony",price:139.99,image:"https://images.pexels.com/photos/3685523/pexels-photo-3685523.jpeg?auto=compress&cs=tinysrgb&w=600",category:"women",aroma:"floral",size:50,isNew:!1,discount:0},{id:16,name:"Sunset Citrus",price:109.99,image:"https://images.pexels.com/photos/3685524/pexels-photo-3685524.jpeg?auto=compress&cs=tinysrgb&w=600",category:"women",aroma:"citrusy",size:75,isNew:!1,discount:0}],offers:[{id:17,name:"Summer Collection",price:89.99,originalPrice:129.99,image:"https://images.pexels.com/photos/3797387/pexels-photo-3797387.jpeg?auto=compress&cs=tinysrgb&w=600",category:"women",aroma:"citrusy",size:75,isNew:!1,discount:30},{id:18,name:"Classic Edition",price:109.99,originalPrice:159.99,image:"https://images.pexels.com/photos/3797388/pexels-photo-3797388.jpeg?auto=compress&cs=tinysrgb&w=600",category:"men",aroma:"woody",size:100,isNew:!1,discount:25}]};let l=JSON.parse(localStorage.getItem("luxeParfumCart"))||[];function y(e){return`
    <div class="product-card">
      <div class="product-image-container">
        <img src="${e.image}" alt="${e.name}" class="product-image" />
        ${e.discount>0?`<div style="position: absolute; top: 16px; right: 16px; background: #d4af37; color: white; padding: 8px 12px; border-radius: 4px; font-weight: 700; font-size: 0.9rem;">${e.discount}% OFF</div>`:""}
        ${e.isNew?'<div style="position: absolute; top: 16px; left: 16px; background: #1a1a1a; color: white; padding: 8px 12px; border-radius: 4px; font-weight: 700; font-size: 0.9rem;">NEW</div>':""}
      </div>
      <div class="product-info">
        <h3 class="product-name">${e.name}</h3>
        <div class="product-price">
          ${e.originalPrice?`<span style="text-decoration: line-through; color: #999; font-size: 1rem; margin-right: 8px;">$${e.originalPrice}</span>`:""}
          $${e.price}
        </div>
        <div class="product-buttons">
          <button class="btn-primary" onclick="buyNow(${e.id})">Buy Now</button>
          <button class="btn-secondary" onclick="addToCart(${e.id})">Add to Cart</button>
        </div>
      </div>
    </div>
  `}function d(e,t){const o=document.getElementById(e);o&&(o.innerHTML=t.map(a=>y(a)).join(""))}function h(){const e=document.querySelectorAll(".hero-slide"),t=document.getElementById("heroIndicators");let o=0;e.forEach((s,n)=>{const c=document.createElement("div");c.className=`hero-indicator ${n===0?"active":""}`,c.addEventListener("click",()=>a(n)),t.appendChild(c)});function a(s){e[o].classList.remove("active"),document.querySelectorAll(".hero-indicator")[o].classList.remove("active"),o=s,e[o].classList.add("active"),document.querySelectorAll(".hero-indicator")[o].classList.add("active")}function i(){a((o+1)%e.length)}setInterval(i,5e3)}function w(){const e={threshold:.2,rootMargin:"0px 0px -50px 0px"},t=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},e);document.querySelectorAll(".testimonial-card").forEach(o=>{t.observe(o)})}function v(){const e=document.getElementById("navbar");window.addEventListener("scroll",()=>{window.pageYOffset>50?e.classList.add("scrolled"):e.classList.remove("scrolled")})}function b(){const e=document.getElementById("contactForm");e&&e.addEventListener("submit",t=>{t.preventDefault(),alert("Thank you for your message! We will get back to you soon."),e.reset()})}function p(e){const o=[...r.bestSellers,...r.newArrivals,...r.men,...r.women,...r.offers].find(a=>a.id===e);o&&(l.push(o),localStorage.setItem("luxeParfumCart",JSON.stringify(l)),u(),g(`${o.name} added to cart!`))}function x(e){p(e),g("Redirecting to checkout..."),setTimeout(()=>{alert("Checkout feature coming soon!")},1e3)}function u(){const e=document.getElementById("cartCount");e&&(e.textContent=l.length)}function g(e){const t=document.createElement("div");t.textContent=e,t.style.cssText=`
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
  `,document.body.appendChild(t),setTimeout(()=>{t.style.animation="slideOut 0.3s ease-out",setTimeout(()=>t.remove(),300)},3e3)}const f=document.createElement("style");f.textContent=`
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
`;document.head.appendChild(f);function N(){const e=document.getElementById("profileBtn"),t=document.getElementById("profileDropdown");e&&t&&(e.addEventListener("click",o=>{o.stopPropagation(),t.classList.toggle("active")}),document.addEventListener("click",()=>{t.classList.remove("active")}))}function L(){const e=document.getElementById("searchBtn"),t=document.getElementById("searchInput");e&&t&&(e.addEventListener("click",()=>{t.classList.toggle("active"),t.classList.contains("active")&&t.focus()}),document.addEventListener("click",o=>{!e.contains(o.target)&&!t.contains(o.target)&&t.classList.remove("active")}))}function m(){d("bestSellers",r.bestSellers),d("newArrivals",r.newArrivals),h(),w(),v(),b(),N(),L(),u()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",m):m();window.addToCart=p;window.buyNow=x;
