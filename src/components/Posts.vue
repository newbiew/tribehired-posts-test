<template>
    <div class="Posts">
        <h1 class="subheading grey--text">All Posts</h1>
        <v-card
            tile
        >
            <v-list dense>
            <v-list-item-group
                v-model="selectedItem"
                color="primary"
            >
                <v-list-item two-line
                v-for="post in allPosts" :key="post.id" :to="`post/${post.id}`"
                >
                <v-list-item-avatar>
                    <v-img src="https://i.pravatar.cc/300"></v-img>
                </v-list-item-avatar>

                <v-list-item-content>
                    <v-list-item-title v-text="post.title"></v-list-item-title>
                    <v-list-item-subtitle>{{ post.body }}</v-list-item-subtitle>
                </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
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