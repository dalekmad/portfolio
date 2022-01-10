<template>
  <div>
    <Navbar />
    <div>
      <router-view />
    </div>
  </div>
</template>

<script>

import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&family=Poppins:wght@200;300;400;500&display=swap');
</style>
