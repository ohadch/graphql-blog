<template>
  <div>
    <div class="card">
      <form @submit.prevent="onSubmit">
        <label for="email" style="margin-right: 10px;">Email</label>
        <input v-model="email" type="text" label="Email..." name="email" />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "LoginPage",
  created() {
    localStorage.removeItem("token")
  },
  data() {
    return {
      email: "",
      skipQuery: true
    };
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    token: {
      query: gql`
        query GetToken($email: String!) {
          authenticate(email: $email) {
            token
          }
        }
      `,
      variables() {
        return { email: this.email };
      },
      update: data => data.authenticate.token,
      // Disable the query
      skip() {
        return this.skipQuery;
      }
    }
  },
  methods: {
    onSubmit() {
      this.skipQuery = false;
    }
  },
  watch: {
    token(token) {
      if (!token) {
        this.skipQuery = true;
        return;
      }

      localStorage.setItem("token", token)
      this.$router.push("/")
    }
  }
};
</script>

<style></style>
