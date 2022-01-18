<template>
    <div class="columns is-multiline has-background-white-bis">
        <section class="column section">
            <!-- heading and info--> 
            <div class="column">
                <h1 class="title"> Projects </h1> 
            </div>         
             
            
            <!-- Start - Search area -->
             <div class="column is-one-third">

                <b-field message="Search for a project by typing">
                    <b-input v-model="searchTerm" 
                        placeholder="Search projects"
                        type="search"
                        icon="magnify">
                    </b-input>
                    <p class="control">
                            <b-button type="is-primary" label="Search" @click="searchProjects()" />
                    </p>
                </b-field>

                <!--<b-field label="Search Projects" >
                    <b-input v-model="searchTerm"
                        placeholder="Search projects"
                        type="search"
                        icon="magnify"
                    ></b-input>
                </b-field>
                <b-field>
                    <b-button type="is-primary"> Search </b-button>
                </b-field>-->
            <!-- End - Search area --> 
            </div>         
           

           <!-- Start - Card section--> 
            <section class="section">
                <div class="columns is-multiline">
                    <!-- card for loop -->
                    <div class="column block is-4"
                        v-for="project in filteredProjects"
                        :key="project.id"
                    >
                        <div class="card block has-background-white">
                            <!--card image-->
                            <div class="card-image">
                                <figure class="image is-4by4">
                                    <img v-if="project.image" :src="project.image"/> 
                                    <img v-else src="https://firebasestorage.googleapis.com/v0/b/vg-ie-b1bb2.appspot.com/o/assets%2Fno_image.png?alt=media&token=5140ab58-cd5f-4418-803b-d4aa5ec7adb2"/> 
                                
                                </figure>
                                <!--<p v-if="project.image"> {{ project.image }} </p>-->
                            </div>
                            <!--card content-->
                            <div class="card-content">
                                <div class="media">
                                    <!--<div class="media-left">
                                        <figure class="image is-48x48">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                                        </figure>
                                    </div>-->
                                    <div class="media-content">
                                        <p class="title is-4"> {{project.title}} </p>
                                       
                                            <b-taglist> 
                                                <b-tag
                                                    v-for="tag in project.tags"
                                                    :key="tag"
                                                    type="is-success is-light"
                                                    
                                                >
                                                    {{ tag }}
                                                </b-tag>
                                            </b-taglist>
                                      
                                    </div>
                                </div>

                                <div class="content">
                                    <b-taglist>
                                        <b-tag type="is-light"> <time datetime="2016-1-1">Project created in: {{ project.date }}</time> </b-tag>                                        
                                    </b-taglist>
                                    <p>
                                    {{project.description}}
                                    </p>
                                    
                                </div>
                            </div>
                            <!--card footer-->
                            <footer class="card-footer">
                                <!-- FOR LOOP THE PROJECT LINKS -->
                                <a v-if="project.github" :href="project.github"
                                   class="card-footer-item"
                                   > 
                                   View project on Github
                                </a> 
                                <a v-if="project.website" :href="project.website"
                                   class="card-footer-item"
                                   > 
                                   View project page
                                </a> 
                                <router-link v-if="project.demo" :to="{name: project.demo}"  class="card-footer-item"> View project demo </router-link>
                            </footer>  
                        </div>
                    </div>
                </div>
            </section>
            <!-- End - Card section-->
        </section>
    </div>
    <!--OLD CODE-->
    <!--<div>
        <input type="text" v-model="searchTerm"/>
        
    </div>-->
    <!--<div
        v-for="project in filteredProjects"
        :key="project.id"
    >
        <p> Title: {{project.title}}  
            Description: {{project.description}}
        
            <router-link v-if="project.demo" :to="{name: project.demo}">Demo</router-link>
        </p>
    </div>-->
</template>

<script>

export default {
  name: 'AllProjects',
  components: {
  },
  data(){
      return {
        projects: [],  
        searchTerm: "" 
      }
  },
  computed:{
      //filter
        //includes
      filteredProjects: function (){
          return this.projects.filter(project => {
              //includes can only be applied to strings!
              return project.title.toLowerCase().includes(this.searchTerm.toLowerCase())
          })
    }
  },
  mounted(){
      this.getAllProjects()
  },
  methods: {
      getAllProjects(){
          //built in vs importing Axios
          fetch('./data/projects.json')
          //take the json and return as JS object 
          .then(res => res.json())
          //catching the data from the JS object, assigning projects
          .then(data => {
              //console.log(data)
              this.projects = data
          })
      },
        searchProjects(){
            const searchExists = !!this.searchTerm

            if(searchExists){
                return this.searchTerm
            }
            console.log(this.searchTerm)
            
        },
  }
}
</script>

<style>

</style>
