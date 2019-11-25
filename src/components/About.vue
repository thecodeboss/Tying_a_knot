<template>
  <div>
   <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="3000"
      controls
      indicators
      background="#ababab"
      style="text-shadow: 1px 1px 2px #333;"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <!-- Text slides with image -->
      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=52"></b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54"></b-carousel-slide>

      <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

    </b-carousel>

    <b-container class="bv">
      <h1>Our Love Story</h1>
      This story took place awhile back in the middle of a very cold winter.  
      The streets were completely covered in white snow flakes, you could 
      not see lot of colours at all. 
    </b-container>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style>
 .bv {
  margin-top: 40px;
  font-family: "Lucida Sans Unicode", Monaco;
  width: 980px;
  height: 450px;
 }

 #carousel-1 {
  position: relative;
  margin: auto;
  top: 20px;
  right: 0;
  bottom: 0;
  left: 0;
  width: 980px;
  height: 450px;

 }
</style>