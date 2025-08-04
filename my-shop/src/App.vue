<template>
  <div id="app">
    <productCard
    name="Apple"
    description="This is Apple"
    price="1500"
    image="https://www.harrisfarm.com.au/cdn/shop/products/40715-done.jpg?v=1623908361&width=1920"
    />
  </div>
</template>

<script>
import ProductCard from './components/ProductCard.vue';

export default {
  name: 'App',
  components: {
    ProductCard
  }
}
</script>
 