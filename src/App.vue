<script>
import AppHeaderVue from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import axios from "axios";
import {store} from './store'
export default{
  components:{
    AppHeaderVue,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  methods:{
    getCards(url,section){
      const params = {
        api_key: '56890690a605d689811fad2a8774a811',
        query: this.store.userInput
      }
      if(this.store.userInput !== ''){
        axios.get(url,{params}
        ).then((resp) => {
          if(section === 'movies'){
            this.store.movies = resp.data.results
          }else{
            this.store.series = resp.data.results
          }
        })
        .catch((error)=>{
          console.log(error);
        })
        .finally(()=>{
          this.store.userInput =''
        })
      } else{
        console.log('error');
      }
    },
    getAxios(){
      this.getCards(this.store.apiMoviesURL,'movies')
      this.getCards(this.store.apiSeriesURL,'series')
    }
  }
}
</script>

<template>
<AppHeaderVue @title="getAxios"/>
<AppMain />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
