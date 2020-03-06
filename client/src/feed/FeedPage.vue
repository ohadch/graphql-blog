<template>
  <div>
      <router-link to="editor">
          <button>Create Post</button>
      </router-link>
      <router-link to="login">
          <button>Logout</button>
      </router-link>
    <ul>
        <Post v-for="post in posts" :post="post" :key="post.id" />
    </ul>
  </div>
</template>

<script>
import gql from "graphql-tag";

import Post from "./Post";

export default {
  name: "FeedPage",
  components: {
      Post
  },
  apollo: {
    // Simple query that will update the 'hello' vue property
    posts: gql`
      query GetAllPosts {
        posts {
          id
          title
          body
          createdAt
          updatedAt
        }
      }
    `
  }
};
</script>

<style>
ul {
    list-style: none;
    padding: 10px;
}
</style>
