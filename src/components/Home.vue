<template>
  <div>
    <b-container class="bv-example-row">
      <b-row class="columns">
        <b-col>

          <h2>MICHAEL & SOPHIE</h2> <h2>July 10th 2020 @ 5:00 pm </h2> <h2> Emeryville </h2> 
          <h2 id="subtitle"><u>Info</u></h2>
           We are going to have our wedding ceremony by the ocean next to a nice venue 
           called HK East Ocean Seafood Restaurant in Emeryville California which is 8 miles 
           from San Francisco. The address is 3199 Powell St, Emeryville, CA 94608, US. 
           Delicious food and alcohol such as lobster, wine and pink gin will be served, and beer is on tap.

           <h2 id="subtitle"><u>Preparation</u></h2>Dresscode: cocktail attire but light, Venue: Please procceed to the park area next to the venue first for the ceremony and be back at 7:00 pm for the reception Accomodation: Airbnb or Hampton Inn Oakland Hotel
        </b-col>
        <b-col class="portrait"> 
          <img src="https://wallpapercave.com/wp/wp2553950.jpg">
        </b-col>

      </b-row>
    </b-container>
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  },
}
</script>

<style>
 .columns {
  margin-top: 40px;
  font-family: "Lucida Sans Unicode", Monaco;

 }

 h2 {
  text-align: center;
 }

 .portrait img {
    height: 820px;
    width: 600px;
    margin-bottom: 200px;
}

#subtitle{
  margin-top: 40px;
}

</style>