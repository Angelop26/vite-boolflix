<script>
import { store } from '../store';
    export default{
        name:'AppCard',
        props:{
            title: String,
            original_title: String,
            language: String,
            img: String
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="ms_container">
        <img :src="`${store.ImgPath}${img}`" alt="">
        <div class="ms_text text-center">
            <h5>title: {{ title }}</h5>
            <h5>Original Title:{{ original_title }}</h5>
            <p>language:{{ language }}</p>
            <p>vote</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .ms_container{
        width: 100%;
        position: relative;
        img{
            height: 100%;
        }
        &:hover .ms_text{
            display: block;
        }

        .ms_text{
            display: none;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: black;
            color: white;
        }
    }
</style>