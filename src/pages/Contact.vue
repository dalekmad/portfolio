<template>
  <div class="columns is-multiline block ">
    <section class="column section">
      <div class="column">
        <!--<h1 class="title"> Get in touch </h1>-->
      </div>
      <!--<div class="column is-four-fifths is-offset-1">
        <section class="column section ">
        <div class="box">
          <b-field label="Your name *">
              <b-input value="" required></b-input>
          </b-field>
          <b-field label="Your email *">
              <b-input type="email"
                  value=""
                  required
                  >
              </b-input>
          </b-field>
        <b-field label="Subject *">
            <b-select placeholder="Select a subject" expanded required>
                <option value="1"> I want to say hello </option>
                <option value="2"> Lets schedule coffee </option>
                <option value="3"> I'd love to work with you on a project </option>
               
            </b-select>
        </b-field>
        <b-field label="Message *">
            <b-input minlength="20" maxlength="500" type="textarea" required></b-input>
        </b-field>
        <b-field>
           <b-button type="is-primary" expanded @click="submitForm">Send this message</b-button>
        </b-field>
        </div>
      </section>
      </div>-->
      <div class="notification is-primary is-light">
        <p class="title">Connect with me</p>
        <p class="is-size-5">
          <a href="https://www.linkedin.com/in/dalekmad/"> Connect with me</a> on LinkedIn.
        </p>
        <p class="is-size-5">
          <a href="https://twitter.com/dalekmad"> Follow me</a> on Twitter.
        </p>
        <p class="is-size-5">
          <a href="mailto:hello@vanessagreene.ie"> Connect with me</a> via email. 
        </p>
              
      </div>


    </section>
    
  </div>
</template>

<script>


export default {
  name: 'Contact',
  components: {
  }, 
  data(){
    return {
      form: {
        name: "",
        email: "",
        subject: "", 
        message: ""
      }
    }
  },
  methods: {
    /*submitForm() {
      //convert to bool to check that a name exists 
        const nameValid = !!this.form.name
        const emailValid =
        const messageValid =  

        const formValid = nameValid && emailValid && messageValid

        //if valid do post - email 
        if(formValid){
          console.log('FORM VAILD, will be submitted', this.form)
        }
        //else -- form val
        else{
          console.log('form invaild, please correct')
        }
    }*/
  }
}
</script>

<style>

</style>
