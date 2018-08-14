<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="load">
    <div @click = "closeLoading" class = "loadingbg" style = "position: absolute;z-index: 103;background-color: #7499ef;opacity: 0.6;width: 100%;"></div>
<div  class = "for-load" style = "position: absolute;z-index: 200;width: 100%;opacity: 1; ">

<center><img src = "../assets/img/logo.png" id = "loader" style = ""></center>
</div>





   
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
    closeLoading: function(){
      this.$emit('loadingv', true);
    }
  },
  created(){
     this.$nextTick(() => {
 

      var middleHeight = $(document).height();
      var loadingbg = document.getElementsByClassName('.loadingbg');
      $('.loadingbg').css({'height': middleHeight});
      middleHeight = middleHeight * 0.36;
      $('#loader').css({'position' : 'absolute' ,'top': middleHeight})


    });
    
  }
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


#loader{
  animation-name: loading;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
  animation-timing-function: ease-in-out;
}

@keyframes loading{
from{
    -ms-transform: rotate(20deg); /* IE 9 */
    -webkit-transform: rotate(20deg); /* Safari */
    transform: rotate(20deg);
}
to{
    -ms-transform: rotate(290deg); /* IE 9 */
    -webkit-transform: rotate(290deg); /* Safari */
    transform: rotate(290deg);
}
}

.for-load{
  animation-name: fadeouttwo;
  animation-duration: 5s;
  animation-timing-function: ease-out;
}


@keyframes fadeouttwo{
  from{
    
     background-color: #fff;
      }
  to{
    background-color: transparent;
  }
}



</style>
