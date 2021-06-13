<template>
    <div class="Post-detail">
        <v-card
            class="mx-auto my-12"
            max-width="800"
        >
            <v-img
                height="250"
                src="https://picsum.photos/1000"
                ></v-img>
            <v-card-title>{{ postDetail.title }}</v-card-title>
            <v-card-text>
                <div>{{postDetail.body}}</div>
            </v-card-text>


            <v-divider class="mx-4"></v-divider>


            <v-card-title>Comments</v-card-title>


            <Comments v-bind:id="id" />

        </v-card>

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