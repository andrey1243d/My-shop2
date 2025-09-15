import { createRouter, createWebHistory } from 'vue-router';
import AdminDashboard from '@/pages/AdminDashboard.vue';
import ManageProducts from '@/pages/ManageProducts.vue';
import ManageReviews from '@/pages/ManageReviews.vue';
import ProfilePage from '@/pages/ProfilePage.vue';
import LoginPage from '@/pages/LoginPage.vue';
import RoomPage from '@/pages/RoomPage.vue';

const routes = [
{
path: '/',
component: AdminDashboard,
children: [
{ path: '', component: ManageProducts }, 
{ path: 'reviews', component: ManageReviews }, 
{ path: 'login', component: LoginPage},
{ path: 'profile', component: ProfilePage}
],
},
{path: '/room/:id', component: RoomPage},
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
history: createWebHistory('/my-shop/'), 
routes,
});

export default router;
