<template>
  <div class="columns">
    <section class="column is-full hero is-large has-background-white-bis">
      <div class="hero-body has-background-white-bis">
        <div class="columns is-vcentered">
          <div class="column is-half">
            <p class="title hPTitle">
              Vanessa Greene
            </p>
            <p class="is-size-5">
              &#128394; Studying Creative Computing
            </p>
            <p class="is-size-5">
              &#128421; Web development & UX design
            </p>
          </div>
          <div class="column is-offset-1 is-one-third">
            <span class="dot is-flex-shrink-1"></span>
            <b-image
            :src="require('@/assets/images/vanessaImageHome.png')"
            alt="headshot of Vanessa Greene"
            ratio="2by2"
            class="vgImg"
            ></b-image>
            <span class="dot2 is-flex-shrink-1"></span>
            <span class="dot1 is-flex-shrink-1"></span>
            <!--<img src="@/assets/images/vanessaImageHome.png" class="image"/>-->
          </div>
        </div>
      </div>
    </section>
    <!--END HERO-->
    
  </div>
</template>

<script>


export default {
  name: 'Home',
  components: {
  }
}
</script>

<style scoped>
.hPTitle {
  font-size: 80px;
}

.hero-body.subtitle {
  font-family: 'Poppins', sans-serif;
}

.bColHero {
  background-color: #FFFFFF;
}

.vgImg {
  margin-top: -25%;
}

.dot {
  height: 150px;
  width: 150px;
  background-color: #FFEE93;
  border-radius: 50%;
  margin-top: -5%;
  display: block;
}

.dot1 {
  height: 250px;
  width: 250px;
  background-color: #6CD4FF;
  border-radius: 50%;
  margin-top: -40%;
  margin-right: -15%;
  float: right;
  display: block;
}

.dot2 {
  height: 200px;
  width: 200px;
  background-color: #FF7B9C;
  border-radius: 50%;
  margin-top: -35%;
  float: left;
  display: block;
}

</style>
