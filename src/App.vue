<template>
  <div id="app">
    <div class="title"> Tying The Knot </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Love-Story</router-link>
      <router-link to="/rsvp">RSVP</router-link>
      <router-link to="/registry">Registry</router-link>
    </nav>
    <nav class="nav">
      <router-link to="/">Chính</router-link>
      <router-link to="/about">Chuyện</router-link>
      <router-link to="/rsvp">Trả-Lời</router-link>
      <router-link to="/registry">Tình-Nguyện</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style type="text/css">

.title {
  font-family:"Morice Straight W03 Bold" !important;
  font-size:150px;font-style:normal;
  -webkit-font-smoothing: antialiased;
  -webkit-text-stroke-width: 1.5px;
  -moz-osx-font-smoothing: grayscale;
  color: red;
  text-align: center;
  margin-bottom: 40px;
}

.nav {
  color: black;
  font-family: "Lucida Sans Unicode", Monaco;
  font-size: 22px;
  letter-spacing: 18px;
  margin-top: 5px;
  text-align: center;
}

.nav a {
  text-decoration: none;
  color: black;
}

.nav a:hover {
  background-color: rgba(255, 204, 204, 0.25);
  color: palevioletred;
}

</style>