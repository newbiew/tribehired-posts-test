<template>
    <div>
        <h3>Posts</h3>

        <div class="posts">
            <div v-for="post in allPosts" :key="post.id" class="post">
                <router-link :to="`post/${post.id}`">{{post.title}}</router-link>
                <hr />
            </div>
        </div>
    </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Posts",
    methods: {
        ...mapActions(['fetchPosts'])
    },
    computed: mapGetters(['allPosts']),
    created() {
        this.fetchPosts();
    }
}
</script>

<style lang="sass" scoped>

</style>