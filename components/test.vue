<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="test">
   <p v-on:click = "hello">Alert hello</p>




   
  </div>
</template>

<script>
/* eslint-disable */


export default {
  data () {
    return {
      
    }
  },
  methods: {
  	hello: function(){alert('hello');}
  },
  created(){
    
  }
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
