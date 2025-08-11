<template>
    <div>
        <h2>кошик покупок</h2>
        <p v-if="cartItems.length === 0">кошик пустий</p>
        <ul>
            <li v-for="(item, index) in cartItems" :key="index">
                <img :src="item.image" :alt="item.name" width="50px">
                {{ item.name }} -  {{ item.price }} грн.
                <button @click="removeItem(index)">Delete</button>
            </li>
        </ul>
        <p v-if="cartItems.length > 0">загальна сума {{ totalPrice }}грн</p>
    </div>
</template>

<script>
import { inject } from 'vue';

export default {
    setup() {
        const cartItems = inject('cartItems');
        const totalPrice = inject('totalPrice');
        const removeItem = inject('removeItem');
        return { cartItems, totalPrice, removeItem };
    }
};
</script>