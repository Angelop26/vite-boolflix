<script>
import {store} from '../store'
export default{
    name:'AppHeader',
    emits:['title'],
    data(){
        return{
            store
        }
    }
}
</script>

<template>
    <header>
        <div class="ms_header d-flex justify-content-between align-items-center">
            <h1>boolflix</h1>
            <input type="text" placeholder="Cerca..." @keyup.enter="$emit('title')" v-model="store.userInput">
        </div>
    </header>

</template>

<style lang="scss" scoped>
    header{
        background-color: black;
        .ms_header{
            height: 80px;
            width: 90%;
            margin: 0 auto;
        }
        h1{
            color: red;
        }
        input{
            height: 30px;
        }
    }
</style>