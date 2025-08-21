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
            if (this.username === "" || this.password === "") {
                this.message = "Введіть логін і пароль";
                return;
            }

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
      const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
        this.$router.push("/profile");
        return; 
    }
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
        
    },
};
</script>

<style scoped>
.login-form {
  max-width: 380px;
  margin: 60px auto;
  padding: 30px 35px;
  background: #fefefe;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 123, 255, 0.15);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  transition: box-shadow 0.3s ease;
}

.login-form:hover {
  box-shadow: 0 15px 40px rgba(0, 123, 255, 0.25);
}

h2 {
  margin-bottom: 28px;
  color: #222;
  font-weight: 700;
  font-size: 1.8rem;
  letter-spacing: 0.03em;
}

input {
  width: 100%;
  padding: 14px 18px;
  margin: 12px 0;
  border: 2px solid #ddd;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  background-color: #fafafa;
  transition: border-color 0.3s, background-color 0.3s;
  box-sizing: border-box;
}

input::placeholder {
  color: #bbb;
  font-weight: 400;
}

input:focus {
  border-color: #007bff;
  background-color: #fff;
  outline: none;
  box-shadow: 0 0 6px rgba(0, 123, 255, 0.4);
}

.error {
  color: #e74c3c;
  font-size: 14px;
  margin: 10px 0 16px;
  font-weight: 600;
  text-align: left;
}

button {
  width: 100%;
  padding: 14px 0;
  background: linear-gradient(135deg, #0069d9 0%, #004a9f 100%);
  border: none;
  border-radius: 12px;
  color: white;
  font-size: 1.1rem;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.15s ease;
  user-select: none;
  box-shadow: 0 5px 15px rgba(0, 105, 217, 0.4);
}

button:hover {
  background: linear-gradient(135deg, #004a9f 0%, #002f6c 100%);
  transform: translateY(-2px);
}

button:active {
  transform: translateY(0);
  box-shadow: 0 3px 10px rgba(0, 105, 217, 0.6);
}

/* Адаптивність */
@media (max-width: 480px) {
  .login-form {
    margin: 40px 15px;
    padding: 25px 20px;
    max-width: 100%;
  }

  h2 {
    font-size: 1.5rem;
  }

  input {
    padding: 12px 15px;
    font-size: 0.95rem;
  }

  button {
    padding: 12px 0;
    font-size: 1rem;
  }
}
</style>
