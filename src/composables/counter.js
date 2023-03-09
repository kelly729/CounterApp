
// import { ref } from 'vue'
// import { useStore } from 'vuex'
import {  ref } from 'vue'
export default function useCounter(){
  const count=ref(0)
  const inputValue=ref()

  const increaseCount=()=>{
    count.value++
  }
  const reduceCount=()=>{
    if(count.value>1){
      count.value--
    }
    else {
      return
    }
  }
    

  
  const setCount=()=>{
   if(inputValue.value){
    count.value=inputValue.value
    inputValue.value=""
   
   }


  }
  const addTocount=(number)=>{
    count.value=count.value + number
  }
  const reset=()=>{
    count.value=0
  }
  

  return { count,inputValue,setCount,addTocount,reset,increaseCount,reduceCount }

   
    
}