<template>
  <div class="columns is-multiline has-background-white-bis">
    <section class="section">
      <div class="column">
        <!-- Start of tiles -->
        <div class="tile is-ancestor">
          <div class="tile is-4 is-vertical is-parent">
            <div class="tile is-child notification is-primary is-light">
              <p class="title">Interests</p>
              <p>
                My personal intrestes include: <i> Coffee, whiskey, cycling, trying to keep plants alive, trying to live more sustainably, and indie music. </i>
              </p>
              <br>
              <p>
                Other interests include: <i> User experience (UX) design, designing great customer experiences (CX),
                creating with microcontrollers, volunteering with young people - teaching programming. </i>
              </p>
            </div>
            <div class="tile is-child notification is-info is-light">
              <p class="title">Projects</p>
              <p>
                I've built a number of projects recently, click below to find out more.
              </p>
              <br>
              <b-button tag="router-link" :to="{name: 'projects'}" type="is-info">View all projects</b-button>
            </div>
            <div class="tile is-child notification is-warning is-light">
              <p class="title">Connect with me</p>
              <p>
                <a href="https://www.linkedin.com/in/dalekmad/"> Connect with me</a> on LinkedIn.
              </p>
              <p>
                <a href="https://twitter.com/dalekmad"> Follow me</a> on Twitter.
              </p>
              
            </div>
          </div>
          <div class="tile is-vertical is-parent">
            <div class="tile is-child notification is-light">
              <p class="title">Experience</p>
              <ul>
                <li
                v-for="experience in experience"
                :key="experience.id"
                >  
                  <p class="title is-5 "> {{ experience.role }} | {{ experience.company }} </p>
                  <p class="subtitle is-6 "> {{ experience.description }} </p>
                  <br>
                </li>
              </ul>
            </div>
            <div class="tile is-child notification is-success is-light">
              <p class="title">Education &amp; Qualifications </p>
              <ul>
                <li>
                  <p class="title is-6 "> Certificate in User Research &amp; UX Design | IADT - 2021 </p>
                </li>
                <br>
                <li>
                  <p class="title is-6 "> Networking Essentials - Cisco Networking Academy | IADT - 2021 </p>
                </li>
                <br>
                <li>
                  <p class="title is-6 "> Raspberry Pi Certified Educator | Raspberry Pi Foundation - 2019 </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- end of tile ancestor -->
      </div>
      <!-- end of tiles column -->
    </section>   
  </div>
</template>

<script>

export default {
  name: 'About',
  components: {
  },
  data(){
    return {
      experience: []
    }
  },
  mounted(){
      this.getAllExperience()
  },
  methods: {
      getAllExperience(){
          //built in vs importing Axios
          fetch('./data/experience.json')
          //take the json and return as JS object 
          .then(res => res.json())
          //catching the data from the JS object
          .then(data => {
              //console.log(data)
              this.experience = data
          })
      },
  }
}

</script>

<style scoped>

</style>
