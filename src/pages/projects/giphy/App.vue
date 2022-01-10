<template>
  <div class="container">
    <div class="columns">
      <div class="column">
        <GiphyViewer />
      </div>
    </div>
  </div>
</template>

<script>
  import GiphyViewer from '@/pages/projects/giphy/GiphyViewer.vue'

  export default {
    name: 'App',
    components: {
      //registering the imported component (behind the scenes, this is GiphyViewer = GiphyViewer)
      GiphyViewer
   }
  }
</script>

<style>

</style>
