
// const routes = [
// {
// path: '/',
// component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
// children: [
// { path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
// { path: 'reviews', component: ManageReviews }, // Відгуки
// ],
// },
// {
// path: '/admin',
// component: AdminDashboard,
// children: [
// { path: 'products', component: ManageProducts },
// { path: 'reviews', component: ManageReviews },
// ],
// },
// ];

// import { createRouter, createWebHistory } from 'vue-router';
// import AdminDashboard from '@/pages/AdminDashboard.vue';
// import ManageProducts from '@/pages/ManageProducts.vue';
// import ManageReviews from '@/pages/ManageReviews.vue';

// const routes = [
//   {
//     path: '/admin',
//     component: AdminDashboard,
//     children: [
//       { path: 'products', component: ManageProducts },
//       { path: 'reviews', component: ManageReviews },
//       { path: '', redirect: '/admin/products' } // Дефолтний маршрут
//     ],
//   },
//   // Якщо хочеш, щоб головна сторінка теж вела в адмін
//   { path: '/', redirect: '/admin/products' },
// ];

// const router = createRouter({
//   history: createWebHistory('/my-shop/'), // Базовий шлях для GitHub Pages
//   routes,
// });

// export default router;

import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '@/pages/AdminDashboard.vue';
import ManageProducts from '@/pages/ManageProducts.vue';
import ManageReviews from '@/pages/ManageReviews.vue';

const routes = [
{
path: '/',
component: AdminDashboard, // Використовуємо AdminDashboard як головний компонент
children: [
{ path: '', component: ManageProducts }, // Домашня сторінка рендерить ManageProducts
{ path: 'reviews', component: ManageReviews }, // Відгуки
],
},
{
path: '/admin',
component: AdminDashboard,
children: [
{ path: 'products', component: ManageProducts },
{ path: 'reviews', component: ManageReviews },
],
},
];

const router = createRouter({
history: createWebHistory('/my-shop/'), // Вказуємо базовий шлях для GitHub Pages
routes,
});

export default router;
