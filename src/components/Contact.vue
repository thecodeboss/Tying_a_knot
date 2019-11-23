<template>
  <div>
    <b-container class="bv">
      <h1>Contact Me and RSVP</h1>
        <p>
          <ul>
            <li>Email: {{email}}</li>
            <li>Website: {{web}}</li>
          </ul>
        </p>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: 'pandalovesteddy@gmail.com',
      web: 'funcodingpanda.github.com'
    }
  }
}
</script>
© 2019 GitHub, Inc.