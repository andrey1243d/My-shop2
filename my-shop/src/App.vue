<template>
  <div id="app">
    <div class="container">
      <div class="row">
          <!-- <ProductList /> -->
      </div>
      <!-- <ReviewsComponent /> -->
    </div>
    <router-view></router-view>
    <FooterComponent />
  </div>
</template>
<script>
// import ProductList from './components/ProductList.vue';
// import ReviewsComponent from './components/ReviewsComponent.vue';
export default {
  name: 'App',
  components: {
    // ProductList,
    // ReviewsComponent
  }
}
</script>