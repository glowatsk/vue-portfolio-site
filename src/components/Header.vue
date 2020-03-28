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
    <div class="container">
    <h3 class="subtitle is-5" id="meetup">{{p4}}</h3>
    <div class="video-container">
     <iframe src="https://www.youtube.com/embed/wFB53qigp1k" />
    </div>
    <div class="container">
    <h3 class="subtitle is-5" id="subtitle">{{p5}}</h3>
    </div>
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
    p5: String,
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
#subtitle {
  padding-bottom: 20px;
  text-align: center;
}

.container {
  padding-top: 30px;
}
.video-container {
  position: relative;
  padding-bottom: 56.25%; /*16:9*/
  padding-top: 30px; 
  height: 0; 
  overflow: hidden;
}
 
.video-container iframe,
.video-container object,
.video-container embed {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

</style>
