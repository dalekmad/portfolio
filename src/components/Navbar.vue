<template>
  <b-navbar class="navStyle has-background-white-bis">
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
                
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="router-link" :to="{name: 'home'}">
        Home
      </b-navbar-item>
      <!--<b-navbar-item tag="router-link" :to="{name: 'about'}">
        About
      </b-navbar-item>-->
      <b-navbar-item tag="router-link" :to="{name: 'projects'}">
        Projects
      </b-navbar-item>
      <!--<b-navbar-item tag="router-link" :to="{name: 'contact'}">
        Contact
      </b-navbar-item>-->
    </template>
  </b-navbar>

</template>

<script>


export default {
  name: 'Navbar',
  components: {
  }
}
</script>

<style>

.navStyle{
  background-color: transparent;
}

</style>
