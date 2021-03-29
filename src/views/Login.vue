<template>
  <div class="login">
    <form v-on:submit.prevent="login">
      <label for="uname"><b>Username</b></label>
      <input
        type="text"
        placeholder="Enter Username"
        name="uname"
        v-model="username"
        required
      />

      <label for="pwd"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="pwd"
        v-model="password"
        required
      />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then(() => {
          alert("Successfully logged in");
          this.$router.push("/secret");
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
</script>

<style></style>
