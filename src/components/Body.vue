<template>
  <div class="tile is-4 is-parent is-vertical">
    <article class="tile is-child box is-vertical">
      <div class="tile is-child" id="text">
        <a id="title" class="subtitle" v-bind:href="html_url">{{description}}</a>
        <p class="content" id="language">Language: {{language}}</p>
      </div>
    </article>
  </div>
</template>

<script>
export default {
  name: "Body",
  props: {
    full_name: String,
    description: String,
    html_url: String,
    language: String
  }
};
</script>

<style scoped>
.is-child {
  width: 100%;
}

.tile {
  text-align: center;
  display: flex;
  flex-direction: column;
}

#title{
   font-size: 1.1em;
}

#language{
  font-size: .9em;
}
</style>
