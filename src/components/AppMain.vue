<script>
import AppCard from './AppCard.vue';
import { store } from '../store';
    export default{
        name:'AppMain',
        components:{
            AppCard
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <main>
        <div class="container">
            <h2>FILM</h2>
            <div class="row row-cols-4" >
                <div class="col p-2" v-for="(card,index) in store.movies" :key="index">
                    <AppCard :title="card.title" :original_title="card.original_title" :language="card.original_language" :img="card.backdrop_path"/>
                </div>
            </div>
            <h2>SERIE</h2>
            <div class="row row-cols-4" >
                <div class="col p-2" v-for="(card,index) in store.series" :key="index">
                    <AppCard :title="card.name" :original_title="card.original_name" :language="card.original_language" :img="card.backdrop_path"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>