<template>
   <div class="error">
   <h1>Ooops..... Page not Found</h1>
   </div>

   <div class="btn">
    <button>Back Home</button>
   </div>

</template>

<script>
export default {
    name:"NotFound",
    data(){
        return{

        }
    },
    methods:{
        
    }

}


</script>

<style>
.error{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-top: 5rem;
}
.error h1{
    color: white;
}

.btn button{
    border: none;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    background: none;
    width: 150px;
    padding: 10px;
    text-align: center;
    color: white;
    border-radius: 30px ;
    margin: 3rem 5rem;
    

}
</style>