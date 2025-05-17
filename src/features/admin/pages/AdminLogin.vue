<script setup lang="ts">
// バリデーションも考慮すべきだが一旦UIのみ実装
import { ref } from 'vue'

const username = ref('')
const password = ref('')
</script>

<template>
  <div class="login-form">
    <h1 class="title">管理者ログイン</h1>
    <form @submit.prevent="onLogin">
      <div>
        <label>ユーザー名</label>
        <input v-model="username" type="text" required />
      </div>
      <div>
        <label>パスワード</label>
        <input v-model="password" type="password" required />
      </div>
      <button type="submit">ログイン</button>
    </form>
  </div>
</template>
<style scoped>
.login-form {
  margin: 3rem auto;
  padding: 5rem;
  background-color: #d3edd9; 
  border: 1px solid #aad4b5;
  border-radius: 10px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
}
.login-form .title {
  text-align: center;
  margin-bottom: 1.5rem;
  font-size: 1.4rem;
}
.login-form form > div {
  margin-bottom: 1.2rem;
}
.login-form label {
  display: block;
  margin-bottom: 0.4rem;
  font-weight: bold;
}
.login-form input {
  padding: 0.5rem;
  width: 100%;
  box-sizing: border-box;
  font-size: 1rem;
}
.login-form button {
  width: 100%;
  padding: 0.75rem;
  background-color: #3a9b5f; 
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  cursor: pointer;
}
.login-form button:hover {
  background-color: #2f814e; 
}
</style>