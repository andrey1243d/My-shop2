<template>
    <div class="admin-panel">
    <h2>Admin Panel</h2>
    <p class="welcome">Welcome, <span>{{ username }}</span></p>

    <div class="stats">
      <div class="stat-item">
        <h3>Users</h3>
        <p>{{ stats.users }}</p>
      </div>
      <div class="stat-item">
        <h3>Orders</h3>
        <p>{{ stats.orders }}</p>
      </div>
      <div class="stat-item">
        <h3>Revenue</h3>
        <p>${{ stats.revenue.toLocaleString() }}</p>
      </div>
    </div>

    <div class="actions">
      <button @click="addUser">Add User</button>
      <button @click="viewReports">View Reports</button>
      <button @click="logout" class="logout-btn">Logout</button>
    </div>

    <div class="notifications" v-if="notifications.length">
      <h3>Notifications</h3>
      <ul>
        <li v-for="(note, i) in notifications" :key="i">{{ note }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            username: localStorage.getItem("authUser") || "",
            stats: {
        users: 1200,
        orders: 345,
        revenue: 123456.78
      },
        notifications: [
        'New user registered',
        'Server maintenance scheduled',
        'Monthly report is ready'
      ]    
    };
},
    methods: {
        logout(){
            localStorage.removeItem("authUser")
            this.$router.push("/");
        },
        addUser() {
      alert('Redirect to add user page');
      // Логіка додавання користувача
    },
    viewReports() {
      alert('Redirect to reports page');
      // Логіка перегляду звітів
    }
},
    beforeMount(){
        if(!this.username){
            this.$router.push("/login");
        }
    }
}
</script>

<style scoped>
.admin-panel {
  max-width: 900px;
  margin: 20px auto;
  padding: 25px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0,0,0,0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
}

h2 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 15px;
}

.welcome {
  text-align: center;
  font-size: 1.1rem;
  margin-bottom: 25px;
}
.welcome span {
  font-weight: 600;
  color: #2980b9;
}

.stats {
  display: flex;
  justify-content: space-around;
  margin-bottom: 30px;
  gap: 15px;
  flex-wrap: wrap;
}

.stat-item {
  flex: 1 1 150px;
  background: #f5f8fa;
  border-radius: 10px;
  padding: 20px;
  text-align: center;
  box-shadow: inset 0 0 5px #d1d9e6;
  transition: background 0.3s ease;
  cursor: default;
}

.stat-item:hover {
  background: #e1e8f7;
}

.stat-item h3 {
  margin-bottom: 10px;
  color: #34495e;
}

.stat-item p {
  font-size: 1.5rem;
  font-weight: 700;
  color: #27ae60;
}

.actions {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  margin-bottom: 30px;
}

.actions button {
  background: #2980b9;
  color: white;
  border: none;
  padding: 12px 22px;
  font-size: 1rem;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.25s ease;
  min-width: 120px;
}

.actions button:hover {
  background: #1c5980;
}

.logout-btn {
  background: #c0392b !important;
}

.logout-btn:hover {
  background: #7a1e17 !important;
}

.notifications {
  max-width: 600px;
  margin: 0 auto;
  background: #fdf6e3;
  border-radius: 8px;
  padding: 15px 20px;
  color: #856404;
  box-shadow: 0 2px 8px rgba(255,193,7,0.25);
}

.notifications h3 {
  margin-bottom: 10px;
  text-align: center;
}

.notifications ul {
  list-style: disc;
  padding-left: 20px;
}

@media (max-width: 700px) {
  .stats {
    flex-direction: column;
    align-items: center;
  }

  .stat-item {
    width: 80%;
    margin-bottom: 15px;
  }

  .actions {
    flex-direction: column;
  }

  .actions button {
    width: 80%;
    margin-bottom: 10px;
  }
}
</style>