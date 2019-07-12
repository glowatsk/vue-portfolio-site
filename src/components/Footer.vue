<template>
  <footer class="footer">
    <div class="columns">
        <a class="column has-text-dark" v-bind:href="github_url"><b-icon icon="github" pack="fab" size="is-small"/>Github</a>
        <a class="column has-text-dark" v-bind:href="linkedIn_url"><b-icon icon="linkedin" pack="fab" size="is-small"/>LinkedIn</a>
        <a class="column has-text-dark" v-bind:href="cv_url"><b-icon icon="file" pack="fas" size="is-small"/>CV</a>
        <p class="column has-text-dark" id="email"><b-icon icon="envelope-open" pack="fas" size="is-small"/>{{email_url}}</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  props: {
    github_url: String,
    linkedIn_url: String,
    cv_url: String,
    email_url: String,
  }
};
</script>

<style scoped>
.column {
  justify-content: center;
  display: flex;
  align-items: center;
}
#email{
  font-size: .8em;
}

</style>
