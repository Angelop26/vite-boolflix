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
    getCards(){
      const params = {
        api_key: '56890690a605d689811fad2a8774a811',
        query: this.store.userInput
      }
      if(this.store.userInput !== ''){
        axios.get(this.store.apiMoviesURL,{params}
        ).then((resp) => {
          console.log(resp);
          this.store.cards = resp.data.results
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
    }
  }
}
</script>

<template>
<AppHeaderVue @title="getCards"/>
<AppMain />
</template>

<style lang="scss">
@use './style/general.scss' as *;
</style>
