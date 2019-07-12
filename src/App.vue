<template>
  <div id="app">
    <div class="container">
      <Header
        name="Brandon Glowatski"
        p1="I am a programmer generalist, currently wearing many hats doing data analysis, engineering and automation at Finning International."
        p2="My interests include weightlifting, keyboards, Dota2, and Raspberry Pi"
        p3="I am always looking for new and interesting opportunities to grow or learn new skills. I am looking forward to hearing from you."
        p4="This is what I am currently working on:"
      />
    </div>
    <div class="tile is-ancestor">
    <Body
      v-for="data in githubJSON"
      v-bind:key="data.name"
      v-bind:full_name="data.full_name"
      v-bind:description="data.description"
      v-bind:html_url="data.html_url"
      v-bind:avatar_url="data.owner.avatar_url"
      v-bind:language="data.language"
    />
  </div>
  <Footer
    github_url="https://www.github.com/glowatsk"
    linkedIn_url="https://ca.linkedin.com/in/glowatsk"
    cv_url="https://www.dropbox.com/s/1g7dqfwezsudes1/Brandon%20Glowatski.pdf?dl=0"
    email_url="glowatsk(at)gmail(dot)com"/>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Body from "./components/Body.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "app",
  data() {
    return {
      githubJSON: {}
    };
  },
  created: function() {
    fetch("https://api.github.com/users/glowatsk/repos?sort=desc")
      .then(res => res.json())
      .then(json => {
        this.githubJSON = json.slice(0,3);
      });
  },
  components: {
    Header,
    Body,
    Footer
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Lato|Roboto&display=swap");

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 40px;
}
h {
  font-family: "Lato", Helvetica, Arial, sans-serif;
}

p {
  font-family: "Roboto", Helvetica, Arial, sans-serif;
}
</style>
