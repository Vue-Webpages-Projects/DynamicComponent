<template>
    <div>
        <!-- <div class="displaysbs">

         <Devs v-for="post in posts"
            v-bind:key="post.id"
            v-bind:post="post"
            ></Devs>
        </div> -->

        <b-container>
            <b-row align-h="center">
                <Devs v-for="post in posts"
                v-bind:key="post.id"
                v-bind:post="post"
                ></Devs>
            </b-row>
        </b-container>

        <!-- <b-container>
            <b-row>
                <b-col sm="12" md="4" lg="4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit corporis temporibus ratione. Eligendi, aspernatur, deserunt culpa nobis asperiores voluptatum quaerat mollitia reiciendis ipsam commodi laborum? Fugiat deleniti tenetur animi commodi. Et, ipsum rerum! Repellendus, sequi animi quis aut optio officiis officia distinctio unde eius modi perspiciatis hic dolores perferendis!
                </b-col>
                <b-col sm="12" md="4" lg="4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit corporis temporibus ratione. Eligendi, aspernatur, deserunt culpa nobis asperiores voluptatum quaerat mollitia reiciendis ipsam commodi laborum? Fugiat deleniti tenetur animi commodi. Et, ipsum rerum! Repellendus, sequi animi quis aut optio officiis officia distinctio unde eius modi perspiciatis hic dolores perferendis!
                </b-col>
                <b-col sm="12" md="4" lg="4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus impedit corporis temporibus ratione. Eligendi, aspernatur, deserunt culpa nobis asperiores voluptatum quaerat mollitia reiciendis ipsam commodi laborum? Fugiat deleniti tenetur animi commodi. Et, ipsum rerum! Repellendus, sequi animi quis aut optio officiis officia distinctio unde eius modi perspiciatis hic dolores perferendis!
                </b-col>
            </b-row>
        </b-container> -->

    </div>
</template>

<script>

import Devs from './Devs.vue' 

export default {
    name: "DevsTab",   
    components: { Devs },
    data() {
        return {
            posts: [
                { 
                    id: 1, 
                    img: require('../assets/user1.png'),
                    username: 'Lpgoulart',
                    description: 'Frontend Developer'
                },
                { 
                    id: 2, 
                    img: require('../assets/user2.png'),
                    username: 'Litchleon',
                    description: 'other account' 
                },
                { 
                    id: 3, 
                    img: require('../assets/user3.png'),
                    username: 'Louise',
                    description: 'estudante' 
                },
                { 
                    id: 4,
                    img: require('../assets/user4.png'), 
                    username: 'Devs',
                    description: 'all' 
                },
                { 
                    id: 5,
                    img: require('../assets/user2.png'), 
                    username: 'Devs',
                    description: 'all' 
                }
                
            ]
        }
    }
}
</script>

<style scoped>
    .displaysbs{
        display: inline-flex; 
    }
</style>