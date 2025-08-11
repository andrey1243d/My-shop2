<template>
    <div class="login-form">
        <h2>Log in</h2>
        <input type="text" v-model="username" placeholder="Type your login">
        <input type="password" v-model="password" placeholder="Password">
        <p v-if="message" class="error">{{ message }}</p>
        <button @click="login">Login</button>
    </div>
</template>

<script>

export default {
    methods: {
        login: function () {
            // виправлена перевірка — якщо хоч одне поле пусте, зупиняємось
            if (this.username === "" || this.password === "") {
                this.message = "Введіть логін і пароль";
                return;
            }

            // пошук користувача з this, залишаючи .bind(this)
            const user = this.users.find(function (u) {
                return u.username === this.username && u.password === this.password;
            }.bind(this));

            if (user) {
                localStorage.setItem("authUser", this.username);
                this.$router.push("/profile");
            } else {
                this.message = "Невірний логін або пароль";
            }
        }
    },
    data() {
        return {
            username: "",
            password: "",
            message: "",
            users: []
        };
    },
    async mounted() {
        try {
            const response = await fetch("/admin.json");
            if (!response.ok) {
                throw new Error("HTTP помилка: " + response.status);
            }
            this.users = await response.json();
        } catch (error) {
            console.error("Помилка завантаження JSON: " + error);
            this.message = "Помилка сервера! Спробуйте пізніше.";
        }
    }
};
</script>

<style scoped>
.login-form {
    max-width: 350px;
    margin: 80px auto;
    padding: 25px;
    background: #ffffff;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-family: Arial, sans-serif;
}

h2 {
    margin-bottom: 20px;
    color: #333;
}

input {
    width: 100%;
    padding: 10px 12px;
    margin: 8px 0;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 15px;
    transition: border 0.2s;
}

input:focus {
    border-color: #007bff;
    outline: none;
}

.error {
    color: #ff4d4d;
    font-size: 14px;
    margin: 10px 0;
}

button {
    width: 100%;
    padding: 10px;
    background: #007bff;
    border: none;
    border-radius: 6px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    transition: background 0.2s;
}

button:hover {
    background: #0056b3;
}
</style>

