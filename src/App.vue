<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Event Details</router-link>
      <router-link to="/rsvp">RSVP</router-link>
      <router-link to="/registry">Registry</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
export default {
}
</script>

<style>

</style>