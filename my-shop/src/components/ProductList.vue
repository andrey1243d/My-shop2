<template>
    <div class="product-list">
        <ProductCard
        v-for="product in products"
        :key="product.id"
        :name="product.name"
        :description="product.description"
        :price="product.price"
        :image="product.image"
        />
    </div>
</template>

<script>
import ProductCard from './ProductCard.vue';
import '@/js/script.js';
import {products} from '@/js/script.js';
export default {
    components: {
        ProductCard,
},
data() {
    return {
        products
    }
  }
}
</script>

<style>
.product-list{
display: flex;
flex-wrap: wrap;
gap: 20px;
justify-content: center;
}
</style>