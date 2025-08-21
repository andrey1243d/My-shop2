

<template>
  <div>
    <nav>
      <div class="menu">
        <router-link to="/admin/products">Home</router-link>
        <router-link to="/admin/reviews">Comments</router-link>
        <router-link to="/login">My profile</router-link>
      </div>
      <div>
        <img class="logoFoto" src="@/assets/logo.png" alt="logo" />
      </div>
    </nav>

    <main>
      <router-view />
    </main>
  </div>
</template>


<script>
export default {
  name: "AdminDashboard",
};
</script>

<style scoped>
nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(90deg, #1abc9c, #16a085);
  padding: 0.8rem 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  font-family: 'Segoe UI', Tahoma, sans-serif;
}

nav a {
  color: white;
  text-decoration: none;
  font-weight: 500;
  margin-right: 1rem;
  font-size: 1rem;
  transition: color 0.3s ease, transform 0.2s ease;
}

nav a:last-child {
  margin-right: 0;
}

nav a:hover {
  color: #f1c40f;
  transform: translateY(-2px);
}

nav a.router-link-active {
  border-bottom: 2px solid #f1c40f;
}

.logoFoto {
  height: 45px;
  width: auto;
  object-fit: contain;
  border-radius: 6px;
  transition: transform 0.3s ease;
}

.logoFoto:hover {
  transform: rotate(-5deg) scale(1.05);
}

.menu {
  display: flex;
  align-items: center;
}

/* Адаптивність */
@media (max-width: 768px) {
  nav {
    flex-direction: column;
    align-items: center;
  }

  .menu {
    flex-direction: column;
    margin-bottom: 0.5rem;
  }

  nav a {
    margin: 0.4rem 0;
    font-size: 0.95rem;
  }

  .logoFoto {
    margin-top: 0.5rem;
  }
}
</style>
