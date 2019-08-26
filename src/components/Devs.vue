<template>
    
        <b-col sm="12" md="3" lg="3"> 
            <div class="card" style="width: 100%">
                <div align-h="center" align-v="center">
                    <img class="card-img-top" v-bind:src="post.img" alt="Card image cap">
                </div>
                <div class="card-body">
                    <h5 class="card-title">{{post.username}}</h5>
                    <p class="card-text">{{post.description}}</p>
                </div>
            </div>
            <br>
        </b-col>
    
</template>

<script>
export default {
    name: "Devs",
    props: {
        post: Object
    }    
}
</script>

<style scoped>

    .card {
        
        border: none;
        
    }
    .card-img-top {
        width: 70%;
        border-radius: 100%;
    }
    .card-body {
        margin-top: 10px;
        padding: 5px;
        min-height: 100px;
    }
    .card-body h5 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: bold;
    }
    .card-body p {
        font-size: 14px;
    }

</style>