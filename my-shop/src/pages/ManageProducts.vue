

<template>
  <div class="search-container">
    <h2>Пошук товару</h2>

    <!-- Пошук -->
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Введіть назву товару"
    />

    <!-- Кнопка корзини -->
    <button @click="toggleCart" class="cart-toggle-btn">
      🛒 ({{ cartItems.length }})
    </button>

    <!-- Список товарів -->
    <ProductList :products="filteredProducts" />

    <!-- Виїзна корзина -->
    <div class="cart-sidebar" :class="{ open: isCartOpen }">
      <div class="cart-header">
        <h3>🛒 Ваш кошик</h3>
        <button class="close-btn" @click="toggleCart">✖</button>
      </div>
      <div class="cart-items">
        <div
          v-for="(item, index) in cartItems"
          :key="index"
          class="cart-item"
        >
          <img :src="item.image" alt="" />
          <div>
            <p>{{ item.name }}</p>
            <p class="price">{{ item.price }} грн</p>
            <button class="remove-btn" @click="removeItem(index)">Видалити</button>
          </div>
        </div>
      </div>
      <div class="cart-footer">
        <p><b>Разом:</b> {{ totalPrice }} грн</p>
      </div>
    </div>
    
    <div v-if="isCartOpen" class="overlay" @click="toggleCart"></div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import { ref, computed, provide } from "vue";

export default {
  components: { ProductList },
  setup() {
    const searchQuery = ref("");
    const cartItems = ref([]);
    const isCartOpen = ref(false);

    const products = ref([
      { name: "Смартфон Samsung Galaxy S23", price: 35000, image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg" },
      { name: "Ноутбук Apple MacBook Air M2", price: 58000, image: "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg" },
      { name: "Бездротові навушники Sony", price: 7800, image: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg" },
      { name: "Механічна клавіатура HyperX", price: 4500, image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg" },
      { name: "Смарт-годинник Apple Watch Series 9", price: 17000, image: "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg" },
      { name: "Портативна колонка JBL Series 1", price: 5200, image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg" },
      { name: "Телевізор Samsung 4K QLED", price: 28000, image: "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg" },
      { name: "Фітнес-браслет Xiaomi Mi Band 7", price: 1800, image: "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg" }
    ]);

    const filteredProducts = computed(() =>
      products.value.filter(product =>
        product.name.toLowerCase().includes(searchQuery.value.toLowerCase())
      )
    );

    const totalPrice = computed(() =>
      cartItems.value.reduce((sum, item) => sum + item.price, 0)
    );

    function addToCart(product) {
      cartItems.value.push(product);
    }

    function removeItem(index) {
      cartItems.value.splice(index, 1);
    }

    function toggleCart() {
      isCartOpen.value = !isCartOpen.value;
    }

    provide("cartItems", cartItems);
    provide("totalPrice", totalPrice);
    provide("addToCart", addToCart);
    provide("removeItem", removeItem);

    return {
      searchQuery,
      filteredProducts,
      cartItems,
      totalPrice,
      isCartOpen,
      toggleCart,
      removeItem
    };
  }
};
</script>

<style scoped>
.search-container {
  padding: 1rem;
  position: relative;
}

h2 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

input[type="text"] {
  padding: 0.6rem;
  border-radius: 8px;
  border: 2px solid #ccc;
  margin-bottom: 1rem;
  max-width: 400px;
}

.cart-toggle-btn {
  background: #1abc9c;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;
  font-size: 1rem;
  margin-left: 0.5rem;
}

.cart-toggle-btn:hover {
  background: #16a085;
}

/* Панель корзини */
.cart-sidebar {
  position: fixed;
  top: 0;
  right: -350px;
  width: 350px;
  height: 100%;
  background: white;
  box-shadow: -4px 0 10px rgba(0,0,0,0.1);
  transition: right 0.3s ease;
  z-index: 1001;
  display: flex;
  flex-direction: column;
}

.cart-sidebar.open {
  right: 0;
}

.cart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: #f1f1f1;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
}

.cart-items {
  flex: 1;
  overflow-y: auto;
  padding: 1rem;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.cart-item img {
  width: 50px;
  height: 50px;
  border-radius: 5px;
  margin-right: 0.5rem;
}

.price {
  color: #28a745;
  font-weight: bold;
}

.remove-btn {
  background: red;
  color: white;
  border: none;
  padding: 0.2rem 0.5rem;
  font-size: 0.8rem;
  border-radius: 5px;
  cursor: pointer;
}

.cart-footer {
  padding: 1rem;
  border-top: 1px solid #ccc;
}

/* Тінь фону */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.3);
  z-index: 1000;
}
/* Плаваюча кнопка корзини справа зверху */
.floating-cart-btn {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #1abc9c;
  color: white;
  border: none;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  font-size: 1.4rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 0.2s ease, background 0.3s ease;
  z-index: 1100;
}

.floating-cart-btn:hover {
  transform: scale(1.1);
  background: #16a085;
}

/* Лічильник товарів */
.cart-badge {
  position: absolute;
  top: 5px;
  right: 5px;
  background: red;
  color: white;
  font-size: 0.75rem;
  padding: 2px 6px;
  border-radius: 50%;
  font-weight: bold;
}

</style>
