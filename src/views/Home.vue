<template>
  <div class="home">
    <h1>CSC428 Slack Data Highlights</h1>

    <div class="login" v-show="!loggedIn">
      <h3>How to get your username</h3>

      <ol>
        <li>Go to Slack</li>
        <li>Click on your profile picture in the top right</li>
        <li>Click "View profile"</li>
        <li>Click "More" (the icon with three dots)</li>
        <li>Click "Copy member ID"</li>
      </ol>

      <form v-on:submit.prevent="login">
        <label for="uname"><b>Username: </b></label>
        <input
          type="text"
          placeholder="Enter Username"
          name="uname"
          v-model="username"
          required
        />

        <button type="submit">Login</button>
      </form>

      <p v-show="loginFailed" style="color: red">
        Login failed, your username should be a 11 letter/number code starting
        with U
      </p>
    </div>

    <div class="content" v-if="loggedIn">
      <h2>Hi {{ this.response["first_name"] }},</h2>

      <p>
        Here are some of your highlights! This data was only collected from
        public channels in the CSC428 Slack chat. If you have any questions,
        please let Bill Ang Li know.
      </p>

      <ul>
        <li>You've written {{ this.response["num_msgs"] }} messages.</li>
        <li>
          You've written
          {{ this.response["num_words"] }} words.
        </li>
        <li>
          You've received
          {{ this.response["num_reactions"] }} reactions to your messages.
        </li>
        <li>
          You've received {{ this.response["num_replies"] }} replies to your
          messages.
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getUser } from "@/main";

export default {
  name: "Home",
  data() {
    return {
      username: "",
      response: null,
      loginFailed: false,
      loggedIn: false,
    };
  },
  methods: {
    async login() {
      this.response = await getUser(this.username);
      if (this.response === null) {
        this.loginFailed = true;
      } else {
        this.loggedIn = true;
      }
    },
  },
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
a {
  color: #42b983;
}
</style>
