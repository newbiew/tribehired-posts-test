<template>
    <div>
        <h1>Post Detail</h1> 
        <h3>{{ postDetail.title }}</h3>
        {{postDetail.body}}
        
        <Comments v-bind:id="id" />
    </div>
</template>
<script>

import { mapGetters , mapActions } from 'vuex';
import Comments from './Comments.vue';


export default {

    name: "Post",
    components: {
        Comments
    },
    props: [
        'id'
    ],
    methods: {
        ...mapActions(['getPost'])
    },
    computed: mapGetters(['postDetail']),
    created(){

        this.getPost(this.id);
    }


}
</script>

<style lang="sass" scoped>

</style>