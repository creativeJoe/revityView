<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="changePass">




   
  </div>
</template>

<script>
/* eslint-disable */
import VueSession from 'vue-session'
Vue.use(VueSession)

export default {
  data () {
    return {
      
    }
  },
  methods: {
  


  },
  mounted(){

    axios.post(window.location.href,
        {
       
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
    .then((res) => {
      console.log(res);
      var token = String(window.location.href);
      this.$router.push('/account/reset');
    });
    
  }
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




</style>
