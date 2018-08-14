<script type="text/javascript">/* eslint-disable */</script>
<!-- always there..this vue instance is the core of your app...your entry -->
<template >
  <div id="app" >

<!-- using slot and components -->
  <link href="assets/img/favicon.png" rel="shortcut icon"/>
    <router-view/>
  </div>
</template>

<script>
/* eslint-disable */


export default {
  name: 'App',
  methods: {
    alerts: function(){
      alert('hello');
    }
  },
  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin: 0 !important;
}



@import url('https://fonts.googleapis.com/css?family=Lato:700,400');

@font-face {
  font-family: "Lato-Semibold";
  /*src: url('../fonts/Lato-Semibold.ttf') format("truetype");*/
}

html,body{
overflow-x: hidden !important;
font-family: Lato-Semibold;
font-size: 11px;
}
</style>
