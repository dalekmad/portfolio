<template>
  <div id="clockArea">
		<div class="boxe">
			<div id="face"></div>
		</div>
  </div>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'ClockAppAct',
  components: {
  },
  mounted(){
    this.showTime(),
    this.checkTime()
  },
  methods:{

    checkTime(i) {
      if (i < 10) {i = "0" + i}
      return i;
    },

    showTime(){
    const today = new Date()
    let h = today.getHours() 
    let m = today.getMinutes()
    let s = today.getSeconds()
    m = this.checkTime(m)
    s = this.checkTime(s)
    document.getElementById('face').innerHTML =  h + ":" + m + ":" + s + ""
    setTimeout(this.showTime, 1000)
    }

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible&display=swap');

#clockArea{
	background-color: #242423;
	padding: 20px;
	font-size: 80%;
    min-height: 450px;
}

@media screen and (min-width: 1480px) {
  #face {font-size: 300px;}
  a { font-size: 20px;}
 }

@media screen and (max-width: 1480px) {
  #face {font-size: 250px;}
  a { font-size: 20px;}
}

@media screen and (max-width: 990px) {
  #face {font-size: 200px;}
  a { font-size: 15px;}
}

.boxe {
	min-width: 30%;
	width: 70%;
	margin: 0 auto; 
	padding: 20px;
	display: flex;
	justify-content: center;
	align-items: center;
}


#face {
	font-family: 'Atkinson Hyperlegible', sans-serif;
    color: #fff;
}

/*.btns{ 
	height: 20px;
	width: 60%;
	margin: 0 auto; 
	padding: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
}

a{
	display: inline-block;
	margin: 20px;
	padding:  8px 20px;
	border: 1px solid #FFFFFF;
	box-sizing: border-box;
	text-decoration: none;
	font-family: 'Roboto Mono', monospace;
	color: #FFF;
	text-align: center;
}

a:hover, a:active{
	color: #242423;
	background-color: white;
}*/

</style>
