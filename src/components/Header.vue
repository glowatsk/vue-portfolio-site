<template>
  <div>
    <div class="columns">
      <div class="column" id="intro">
        <h1 class="title">{{name}}</h1>
        <section>
          <p class="subtitle is-5">{{p1}}</p>
        </section>
        <section>
          <p class="subtitle is-5">{{p2}}</p>
          <p class="subtitle is-5">{{p3}}</p>
        </section>
      </div>
      <div class="column" id="headshot">
        <img src="../assets/headshot.jpg" height="85%" alt="Brandons-Headshot" />
      </div>
      </div>
      <div>
        <h3 class="subtitle is-5" id="subtitle">{{p4}}</h3>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    name: String,
    p1: String,
    p2: String,
    p3: String,
    p4: String,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.columns {
  text-align: center;
}
.subtitle {
  padding: 5px;
}
#subtitle{
  padding-bottom:20px;
  text-align: center;
}
</style>
