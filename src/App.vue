<template>
  <div id="app">
    <div class="container">
      <Header
        name="Brandon Glowatski"
        p1="I am a programmer generalist, most recently building and deploying distributed web technologies for IoT at Levven Electronics."
        p2="My interests include coffee, weightlifting, Dota2, Arch Linux and keyboards (the mechanical kind)."
        p3="I am always open to opportunities to grow or learn new skills. I look forward to hearing from you."
        p4="One of my goals for 2020 is to speak at a variety of meetups (originally in person, thanks Covid), if you are looking for speakers, please reach out."
        p5="Here are some items I am currently working on:"
      />
    </div>
    <div class="container is-fullhd">
    </div>
    <div class="tile is-ancestor">
      <Body
        v-for="data in githubJSON"
        v-bind:key="data.name"
        v-bind:full_name="data.full_name"
        v-bind:description="data.description"
        v-bind:html_url="data.html_url"
        v-bind:language="data.language"
      />
    </div>
    <Footer
      github_url="https://www.github.com/glowatsk"
      gitlab_url="https://www.gitlab.com/glowatsk"
      linkedIn_url="https://ca.linkedin.com/in/glowatsk"
      cv_url="https://www.dropbox.com/s/1g7dqfwezsudes1/Brandon%20Glowatski.pdf?dl=0"
      email_url="glowatsk(at)gmail(dot)com"
    />
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
      githubJSON: {},
    };
  },
  created: function() {
    fetch("https://api.github.com/users/glowatsk/repos?sort=desc")
      .then(res => res.json())
      .then(json => {
        this.githubJSON = json.slice(0, 3);
      });
  },
  components: {
    Header,
    Body,
    Footer
  },
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

iframe {
  width: 100%;
  height: 700px;
}
</style>
