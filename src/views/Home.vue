<template>
  <div class="home">
    <div class="login" v-show="!loggedIn">
      <h1>CSC428 Slack Data Highlights</h1>
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
        with U.
      </p>
    </div>

    <div class="content" v-if="loggedIn">
      <h2>Hi {{ this.response["first_name"] }},</h2>

      <p>
        Congrats on getting through this year! Let's take some time to thank
        yourself for your contributions to class.
      </p>

      <p>
        You've written {{ this.response["num_msgs"] }} messages in public
        channels with a total of {{ this.response["num_words"] }} words. You've
        received {{ this.response["num_reactions"] }} reactions and
        {{ this.response["num_replies"] }} replies to your messages.
      </p>

      <p>
        As a class, we've written 4062 messages in public channels with a total
        of 62590 words (mostly from Joseph). We've sent 2691 reactions and the
        most used reactions were:
      </p>
      <ol>
        <li v-for="item in topEmojis" v-bind:key="item.id">
          {{ item }}
        </li>
      </ol>

      <p>
        This data was only collected from public channels in the CSC428 Slack
        chat. If you have any questions, please let Bill Ang Li know.
      </p>
    </div>
  </div>
</template>

<script>
import { getUser } from "@/main";

const emoji = require("emoji-name-map");

export default {
  name: "Home",
  data() {
    return {
      username: "",
      response: null,
      loginFailed: false,
      loggedIn: false,
      topEmojis: [
        emoji.get("white_check_mark") + " 577",
        emoji.get("+1") + " 482",
        emoji.get("raised_hands") + " 456",
        emoji.get("eyes") + " 390",
        emoji.get("joy") + "103",
      ],
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
.home {
  width: 500px;
  margin: 100px auto 0px auto;
  padding: 100px;
  background-color: white;
}
</style>
