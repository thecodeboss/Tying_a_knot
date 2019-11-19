<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Goals</h2>
    <p> We are planning to replace our carpet with some quality wood <br> 
        and re-do our entire backyard with artifical grass and variety of <br> 
        stones. Michael and I are planning to use the outdoor space to enjoy <br>
        eachother's company while reading a book and drinking wine in addition <br> 
        to hosting BBQs and game nights for our friends and family. 
    </p>
    <ul>
      <li><a href="https://www.homedepot.com/" target="_blank">Home Depot</a></li>
      <li><a href="https://www.amazon.com/" target="_blank">Amazon</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Bear Cave Makeover'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>