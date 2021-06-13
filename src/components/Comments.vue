<template>
    <div>
    <v-card-text>
        <h3>Search by</h3>
        <v-row
            align="center"
            class="mx-0"
        >
            <v-chip-group
                v-model="filterType"
                active-class="deep-purple accent-4 white--text"
                column
                click="onChip"
            >

                <v-chip value="all">Show All</v-chip>

                <v-chip value="name">Name</v-chip>

                <v-chip value="email">Email</v-chip>

                <v-chip value="body">Body</v-chip>
            </v-chip-group>

            <v-text-field label="search Keyword" v-model="search"></v-text-field>
        </v-row>
    </v-card-text>

<v-list three-line>
     <div v-if="filteredComments.length">
      <template v-for="(item, index) in filteredComments">
 
        <v-divider
          v-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>



        <v-list-item
          v-else
          :key="item.title"
        >
          <v-list-item-avatar>
            <v-img src="https://i.pravatar.cc/300"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.name"></v-list-item-title>
            <p class="font-italic" v-html="item.email"></p>
            <v-list-item-subtitle v-html="item.body"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
     </div>
        <v-card-title v-else>No Comment found!</v-card-title>
    </v-list>
    </div>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
    name: "Comments",
    props: ['id'],
    methods: {
        ...mapActions(['fetchComments', 'searchComments']),
        // onChip(){

        // }
    },
    computed: {
        ...mapGetters(['showComments']),
        filteredComments: function(){

            return this.showComments.filter((comment)=>{
                if(this.filterType === "name"){
                    return comment.name.match(this.search)
                }else if(this.filterType === "body"){
                    return comment.body.match(this.search)
                }else if(this.filterType === "email"){
                    return comment.email.match(this.search)
                }else if(this.filterType === "all"){
                    return comment;
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
            filterType: "all"
        }
    }
}
</script>