<template>
  <div class="card">
    <div style="font-size: 1.5em; margin-bottom: 10px;">
      <label style="margin-right: 10px;" for="title">Post Title</label>
      <input
        v-model="title"
        style="font-size: 1.3em;"
        type="text"
        label="title"
        name="title"
      />
    </div>
    <VueEditor v-model="content" />
    <button style="margin-top: 10px; font-size: 1.3em" @click="onPostCreated" v-if="title && content">Save</button>
  </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import gql from "graphql-tag";

export default {
  name: "EditorPage",
  components: {
    VueEditor
  },
  data() {
    return {
      title: "",
      content: ""
    };
  },
  methods: {
    async onPostCreated() {
      await this.$apollo.mutate({
        // Query
        mutation: gql`
          mutation CreatePost {
            createPost(title: $title, body: $body) {
              id
              title
              body
              createdAt
              updatedAt
            }
          }
        `,
        // Parameters
        variables: {
          title: this.title,
          body: this.content
        }
      });
      this.$router.push("/");
    }
  }
};
</script>

<style></style>
