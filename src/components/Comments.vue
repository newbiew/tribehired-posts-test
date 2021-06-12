<template>
    <div>
        <h3>Comments</h3>
        <form>
            <input type="text" v-model="search" placeholder="search">
            <select v-model="filterType">
                <option value="name">Name</option>
                <option value="email">Email</option>
                <option value="body">Body</option>
            </select>
        </form>
        <div class="comments">
            <div v-for="comment in filteredComments" :key="comment.id" class="comment">
                <b>{{comment.name }}, <i>{{comment.email }}</i> </b> >> {{comment.body}}
                <hr />
            </div>
        </div>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Comments",
    props: ['id'],
    methods: {
        ...mapActions(['fetchComments', 'searchComments'])
    },
    computed: {
        ...mapGetters(['showComments']),
        filteredComments: function(){

            return this.showComments.filter((comment)=>{
                if(this.filterType == "name"){
                    return comment.name.match(this.search)
                }else if(this.filterType === "body"){
                    return comment.body.match(this.search)
                }else if(this.filterType === "email"){
                    return comment.email.match(this.search)
                }
            })
        }
    },
    created(){
        this.fetchComments(this.id)
    },
    data(){
        return {
            search: "",
            filterType: "name"
        }
    }
}
</script>