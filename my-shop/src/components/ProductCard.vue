<template>
<div class="product-card">
<img :src="image" :alt="name" class="product-image" />
<h2> {{ name }}</h2>
<p>{{ description }}</p>
<p class="price">{{ price }}</p>
<button class="buy-button">buy</button>
</div>
</template>

<script>
import '@/css/style.css';
import '@/js/script.js';

export default {
  name: 'MyComponent',
  props: {
    name: String,
    description: String,
    price: Number,
    image: String,
  }
};
</script>