<template>
  <div id="app">
    <div class="title"> Tying The Knot </div>
    <nav class="navi">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Love-Story</router-link>
      <router-link to="/rsvp">RSVP</router-link>
      <router-link to="/registry">Registry</router-link>
    </nav>
    <p>________________________________________________</p>
    <nav class="navi">
      <router-link to="/">Chính</router-link>
      <router-link to="/about">Chuyện</router-link>
      <router-link to="/rsvp">Trả-Lời</router-link>
      <router-link to="/registry">Tình-Nguyện</router-link>
    </nav>
    <router-view />
    <!-- Footer -->

    <footer id="footer" class="page-footer font-small red">
      <div class="footer-copyright py-3">© 2020 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/"> Michael and Sophie</a>
      </div>
    </footer>
  </div>
</template>

<script>
  
  import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue';
  export default {
    name: 'FooterPage',
    components: {
      mdbFooter,
      mdbContainer,
      mdbRow,
      mdbCol
    }
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
.navi {
  color: black;
  font-family: "Lucida Sans Unicode", Monaco;
  font-size: 22px;
  letter-spacing: 18px;
  margin-top: 5px;
  text-align: center;
}
.navi a {
  text-decoration: none;
  color: black;
}
.navi a:hover {
  background-color: rgba(255, 204, 204, 0.25);
  color: palevioletred;
}

footer {
  position:fixed;
  bottom:0;
  width:100%;
  height:50px;
  text-align: center;
}

</style>