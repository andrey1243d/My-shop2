<template>
  <div class="search-container">
    <h2>Пошук товару</h2>
    <input
      type="text"
      v-model="searchQuery"
      placeholder="Введіть назву товару"
    />
    <ManageCart />
    <ProductList :products="filteredProducts" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue';
import {ref, computed, provide} from "vue";
import ManageCart from '@/components/ManageCart.vue';

export default {
  components: {
    ProductList,
    ManageCart
  },
  setup() {
      const searchQuery = ref("");
      const cartItems = ref([]);
      const products = ref([
        {
          name: "Смартфон Samsung Galaxy S23",
          price: 35000,
          image: "https://img.freepik.com/free-photo/white-cell-phone-box-background_58702-4721.jpg"
        },
        {
          name: "Ноутбук Apple MacBook Air M2",
          price: 58000,
          image: "https://img.freepik.com/free-photo/workplace-with-laptop-stand-near-eyeglasses_23-2148040478.jpg"
        },
        {
          name: "Бездротові навушники Sony",
          price: 7800,
          image: "https://img.freepik.com/free-photo/closeup-shot-white-wireless-headphones-with-their-case-white-background_181624-31412.jpg"
        },
        {
          name: "Механічна клавіатура HyperX",
          price: 4500,
          image: "https://img.freepik.com/free-photo/top-view-keyboard-mouse-arrangement_23-2149386333.jpg"
        },
        {
          name: "Смарт-годинник Apple Watch Series 9",
          price: 17000,
          image: "https://img.freepik.com/free-photo/modern-sport-adult-hand-lifestyle_1127-2745.jpg"
        },
        {
          name: "Портативна колонка JBL Series 1",
          price: 5200,
          image: "https://img.freepik.com/free-photo/still-life-tech-device_23-2150722602.jpg"
        },
        {
          name: "Телевізор Samsung 4K QLED",
          price: 28000,
          image: "https://img.freepik.com/free-photo/landscape-nature-scene-tv-appliance-generative-ai_188544-12122.jpg"
        },
        {
          name: "Фітнес-браслет Xiaomi Mi Band 7",
          price: 1800,
          image: "https://img.freepik.com/free-photo/futuristic-virtual-reality-headset-illuminates-dark-studio-shot-generated-by-ai_188544-13298.jpg"
        }
      ]);
      
      const filteredProducts = computed(function () {
  return products.value.filter(function (product) {
    return product.name.toLowerCase().includes(searchQuery.value.toLowerCase());
  });
});

const totalPrice = computed(function () {
  return cartItems.value.reduce(function (sum, item) {
    return sum + item.price;
  }, 0);
});

function addToCart(product) {
  cartItems.value.push(product);
}

function removeItem(index) {
  cartItems.value.splice(index, 1);
}

provide("cartItems", cartItems);
provide("totalPrice", totalPrice);
provide("addToCart", addToCart);
provide("removeItem", removeItem);
    return{
      searchQuery,
      products,
      filteredProducts
    }
  }
}
</script>

<style scoped>
.search-container {
  padding: 1rem;
}

h2 {
  font-size: 1.5rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
}

input[type="text"] {
  width: 100%;
  max-width: 400px;
  padding: 0.6rem 1rem;
  font-size: 1rem;
  border: 2px solid #bdc3c7;
  border-radius: 8px;
  outline: none;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  margin-bottom: 1rem;
}

input[type="text"]:focus {
  border-color: #1abc9c;
  box-shadow: 0 0 5px rgba(26, 188, 156, 0.4);
}
</style>
