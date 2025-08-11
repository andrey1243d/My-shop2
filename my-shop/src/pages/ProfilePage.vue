<template>
    <div class="admin-panel">
        <h2>Admin Panel</h2>
        <p class="welcome">Welcome, <span>{{ username }}</span></p>
        <button @click="logout" class="logout-btn">Logout</button>
    </div>
</template>

<script>
export default {
    data(){
        return{
            username: localStorage.getItem("authUser") || ""
        };
    },
    methods: {
        logout(){
            localStorage.removeItem("authUser")
            this.$router.push("/");
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
    max-width: 400px;
    margin: 50px auto;
    padding: 20px 30px;
    background-color: #f8f9fa;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
}

h2 {
    color: #333;
    margin-bottom: 15px;
}

.welcome {
    font-size: 18px;
    margin-bottom: 20px;
    color: #555;
}

.welcome span {
    font-weight: bold;
    color: #007bff;
}

.logout-btn {
    background-color: #ff4d4d;
    border: none;
    padding: 10px 18px;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: 0.2s;
}

.logout-btn:hover {
    background-color: #e63939;
}
</style>