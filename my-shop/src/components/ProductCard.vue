<template>
<div class="product-card">
<img :src="image" :alt="name" class="product-image" />
<h2> {{ name }}</h2>
<p>{{ description }}</p>
<p class="price">{{ price }}</p>
<button class="buy-button" @click="addToCart">buy</button>

</div>
</template>

<script>
import '@/css/style.css';
import '@/js/script.js';
import { inject } from 'vue';

export default {
  name: 'MyComponent',
  props: {
    name: String,
    description: String,
    price: Number,
    image: String,
  },
  setup(props){
    const addToCart = inject("addToCart");

    function handleAddToCart(){
      addToCart({
        name: props.name,
        price: props.price,
        image: props.image
      });
    }
    return {addToCart: handleAddToCart }
  }
};
</script>