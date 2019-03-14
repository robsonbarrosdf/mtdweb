<template>
    <div id="content">
        <!-- <router-view :key="$route.fullPath"></router-view> -->
        <router-view :key="$route.fullPath"></router-view>
    </div>
</template>

<script>
export default {
    name: 'Content'

}
</script>

<style>

    #content {
        grid-area: content;
        background-color: #efefef; 
        /* background-color: rgb(249,249,249);  */
    }

</style>
