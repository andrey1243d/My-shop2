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
export default {
    props: {
        name: String,
        description: String,
        price: Number,
        image: String,
    }
};
</script>

<style scoped>
.product-card{
    max-width: 300px;
    border: 1px #e0e0e0;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    align-content: center;
}

.product-image{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }

.price{
    font-size: 18px;
    color: #28a745;
    font-weight: bold;
}

.buy-button{
     background-color: #007bff;
            color: #fff;
            font-weight: bold; 
            border: none;
            border-radius: 6px;
            padding: 10px 20px; 
            cursor: pointer;
            margin-bottom: 20px; 
            transition: background-color 0.3s; 
        }
.buy-button:hover {
            background-color: #0056b3;
}
</style>