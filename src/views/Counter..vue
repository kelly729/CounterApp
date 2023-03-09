<template >
<div class="counter">
    <div >
    <h2>Counter</h2>

</div>
<div class="counter-div">
    <div class="input-div">
        <input v-model="inputValue" type="number">
        <button @click="setCount" >change</button>
    </div>
    <div class="circle">
        <h1>{{countValue }}</h1>

    </div>
    <div>
       
    </div>

</div>
<div class="buttons">
    <button @click="addTocount(20)"  class="plus20">+20</button>
    <button @click="addTocount(100)" class="plus-100">+100</button>
    <button @click="addTocount(1000)" class="plus-1000">+1000</button>
    <button  @click="reset" class="plus-1000">x</button>
    
</div>
<div class="action-btn">
    <button @click="increaseCount" >Increase</button>
    <button @click="reduceCount" >Decrease</button>

</div>
</div>
</template>

<script>

import useCounter from '@/composables/counter';
// import store from '@/store';
// import { useStore } from 'vuex';
export default {
    name:"CounterVue",
   
    setup(){
    const {count,inputValue,setCount,addTocount,reset,increaseCount,reduceCount}=useCounter()

    return{count,inputValue,setCount,addTocount,reset,increaseCount,reduceCount}
    },
   
    computed:{
        countValue(){
           return this.count
        }

    }

   
}




</script>

<style>

.counter{
    margin-top: 1rem;
    text-align: center;
}
.counter-div{
    position: relative;
    margin-bottom: 1rem;
}
.counter h2{
    color: white;
    margin-bottom: 2rem;
    font-size: 1.7rem;
}
.input-div input{
    width: 150px;
    background: none;
    border: none;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    padding: 15px;
    border-radius: 30px 0 0 30px;

}
.input-div button{
    padding: 15px;
    border-radius: 0 30px 30px 0;
    background: #130547;
    border: none;
    color:#f09;
}
.circle{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
    /* background:white; */
    text-align: center;
    align-items: center;
    display: flex;
    justify-content: center;
    margin: 3rem 4rem;
}
.circle h1{
    font-size: 5rem;
    font-weight: 100;
    color:#D337B9;
   text-shadow:
  
   0 0 #f09 0
   ;

    
    /* animation: glow 0.11s ease-in-out infinite alternate; */

}

.buttons{
    /* background: white; */
    padding: 5px 0;
    /* text-align: center; */
    border-radius:14px;
}
.buttons button{
    width: 50px;
    height: 50px;
    border-radius: 50px;
    border: none;
    margin-left: 1rem;
    color: white;
    /* font-size: 1rem; */
}
.buttons :nth-child(1){
    background:royalblue;
   
    
}
.buttons :nth-child(2){
    background:#f09;

}
.buttons :nth-child(3){
    background: greenyellow;

}
.buttons :nth-child(4){
    background:red;


}
.action-btn{
    margin-top: 1rem;
}
.action-btn button{
    width: 150px;
    padding: 16px;
    border-radius: 30px;
    color:#D337B9;
    border: none;
    /* background: white; */
    background: rgba(255, 255, 255, 0.05);
    margin-left: 5px;
    /* font-size: 1.5rem; */
    /* color: royalblue; */
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

}

 
</style>