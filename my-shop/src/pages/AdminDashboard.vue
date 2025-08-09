<!-- <template>
    <div>
        <nav>
            <router-link to="admin/products">Home</router-link>
            <router-link to="admin/reviews">Comments</router-link>
        </nav>

        <main>
    <router-view/>
</main>
</div>
</template>


<script>
export default {
name: "AdminDashboard",
};
</script>


<style scoped>
/* Загальне оформлення */
div {
  font-family: Arial, sans-serif;
  background-color: #f7f9fc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Навігаційна панель */
nav {
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

/* Посилання */
nav a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

/* Ховер ефект */
nav a:hover {
  background-color: #34495e;
}

/* Активне посилання */
.router-link-exact-active {
  background-color: #1abc9c;
  color: white;
}

/* Контент */
main {
  flex: 1;
  padding: 2rem;
}
</style>
 -->

 <template>
  <div>
    <nav>
      <router-link to="/admin/products">Home</router-link>
      <router-link to="/admin/reviews">Comments</router-link>
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
div {
  font-family: Arial, sans-serif;
  background-color: #f7f9fc;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  background-color: #2c3e50;
  padding: 1rem;
  display: flex;
  gap: 1rem;
}

nav a {
  color: #ecf0f1;
  text-decoration: none;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background-color 0.3s ease;
}

nav a:hover {
  background-color: #34495e;
}

.router-link-exact-active {
  background-color: #1abc9c;
  color: white;
}

main {
  flex: 1;
  padding: 2rem;
}
</style>
