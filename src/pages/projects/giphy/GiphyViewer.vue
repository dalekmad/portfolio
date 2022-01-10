<template>
    <div class="container">
        <br>
        <b-field> 
            <b-input type="search" v-model="term" v-on:keyup.enter="searchGiphy()"/>
            <b-button class="float-left" variant="primary" @click="searchGiphy()"> Search </b-button>
        </b-field>

        <div class="OptBtns">
            <b-button class="float-start viewOpts is-primary" @click="showTrending()"> Trending Gifs </b-button>
            <b-button class="viewOpts is-info" @click="showRanGif()"> I'm feeling random </b-button>
        </div>

            <section class="section">
                <div class="columns is-multiline">
                    <div class="column block is-4"
                        v-for="gif in gifs"
                        :key="gif.id"
                    >
                        <div class="card block">
                            <!--for loop starts here-->
                            <div class="card-image" 
                                border-variant="light"
                                align="left"
                                >
                                    <figure class="image is-4by4">
                                        <img :src="gif.images.fixed_width.url" :alt="gif.title"/>                                 
                                    </figure>
                            </div>
                            <div class="card-content">
                                <div class="content">
                                    <p>
                                    <a :href="gif.url" target="_blank" class="title">{{gif.title}}</a>
                                    </p>
                                    <div class="subtitle">Trending since: {{gif.trending_datetime}}</div>
                                    <!--<p>Uploaded by: {{gif.user.username}}</p>-->
                                </div>
                            </div>
                            
                            <!--for loop ends here-->
                        </div>
                    </div>
                </div>
            </section>
        <!--
        <img :src="gifs[0].images.fixed_width.url" :alt="gifs[0].title"/>
        <p>{{gifs[0].title}}</p>-->
    </div>
</template>

<script>
    import axios from 'axios';

    const GIPHY_URL = "https://api.giphy.com/v1/gifs";
    const API_KEY = "9HpnMRFPrCaDfAluCVjEbMLZZuuqjJZp";

    export default {
        name: 'GiphyViewer',
        data() {
            return {
                gifs: [],
                term: ""
            };
        }, 
        mounted(){
            this.showTrending();
        },
        methods: {
            showTrending (){
                axios.get(`${GIPHY_URL}/trending?api_key=${API_KEY}`)
                .then((response) => {
                    //console.log(response.data.data)
                    this.gifs = response.data.data
                })
                .catch(error => console.log(error))
            },

            searchGiphy() {
                //i.e if term is blank 
                if(!this.term){
                    alert("please enter a serach term");
                    return  
                }

                axios.get(`${GIPHY_URL}/search?api_key=${API_KEY}&q=${this.term}&limit=6`)
                .then((response) => {
                    //console.log(response.data.data)
                    this.gifs = response.data.data
                })
                .catch(error => console.log(error))
            },
            showRanGif() {
                axios.get(`${GIPHY_URL}/random?api_key=${API_KEY}`)
                .then((response) => {
                    //console.log(response.data.data)
                    this.gifs = [response.data.data]
                })
                .catch(error => console.log(error))
            }
        }
    }

</script>

<style>

.search-box {
    margin-top: 25px;
    margin-bottom: 25px;
}

.card{
    margin-left: 10px;
    margin-bottom: 20px;
    padding: 8px;
    border-radius: 5px;
    background-color: #F9F4F5;
}

.card a {
    color: #502F4C;
}

.viewOpts {
    margin: 6px;;
    padding: 10px;
}

.OptBtns .active{
     background-color: #31d2f2 !important; 
}


.OptBtns .focus{
     background-color: #31d2f2 !important;  
}

@media (min-width: 34em) {
    .card-columns {
        -webkit-column-count: 2;
        -moz-column-count: 2;
        column-count: 2;
    }
}
@media (min-width: 48em) {
    .card-columns {
        -webkit-column-count: 3;
        -moz-column-count: 3;
        column-count: 3;
    }
}
@media (min-width: 62em) {
    .card-columns {
        -webkit-column-count: 4;
        -moz-column-count: 4;
        column-count: 4;
    }
}
@media (min-width: 75em) {
    .card-columns {
        -webkit-column-count: 5;
        -moz-column-count: 5;
        column-count: 5;
    }
}

</style>