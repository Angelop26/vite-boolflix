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
            <div class="row row-cols-4" >
                <div class="col p-2" v-for="(card,index) in store.cards" :key="index">
                    <AppCard :title="card.title" :original_title="card.original_title" :language="card.original_language" :img="card.backdrop_path"/>
                </div>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>

</style>