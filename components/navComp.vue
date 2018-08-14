<script type="text/javascript">/*eslint-disable*/</script>

<template>
 <div class="nav-component">
   <div id = "r-logo" style = "position: absolute; "><img src = "../assets/img/logo.png" style = "width: 36px;"><font style = "margin-left: 3px;position:relative;top:5px;font-size: 19px;font-weight: 600">Revity</font>
</div>
<div v-if = "showTheNav" class = "blur" style = "background-color: #5681e4;position: absolute; height: 1000px; width: 100%; z-index: 1"></div>
<div v-if = "showTheNav" class = "menu-div" style = "width: 200px;height: auto;z-index: 30; position: absolute;right: 30px; top: 70px">

  <ul class = "j-list-2" style="background : #fff;opacity: 1;z-index:3">
  <li><a class = "" href = "/about">About</a></li>
<li><a class = "" href = "/signin">Sign In</a></li><br>
  <li><a href = "/signup">
  <button class = "ss" style = "position: relative; top: -8px;border: none;background-color: #5681e4;opacity: 1;box-shadow: 2px 2px 3px #3c69d1; padding: 9px;padding-left: 17px; padding-right: 17px;color: white;">Sign Up</button></a></li>
  <br><br>
  </ul>

</div>

<div class = "nav-btn" v-on:click = "showNav()" style = "z-index: 300;color: #5681e4;font-size: 25px;position: absolute; right: 30px;top: 30px;">
  <i v-bind:class="{'fas': true, 'fa-align-justify' : !showTheNav, 'fa-times': showTheNav, 'white': showTheNav}" style = "cursor: pointer"></i></div>

<ul id = "j-list" style = "position: absolute;top: 30px; right: 20px;z-index: 4;font-size: 12px">
<li><a href = "/about" >About</a></li>
<li><a href = "/signin">Sign In</a></li>
<li>
<a class = "j-link " href = "/signup">
  <button class = "ss" style = "background-color: #5681e4;box-shadow: 2px 2px 3px #3c69d1; padding: 15px;padding-left: 37px; padding-right: 37px;margin-left: -20px;border: none;color: white;">Sign Up
</button>  </a></li>
</ul>
   
  </div>
</template>

<script>
/* eslint-disable */
import { bus } from '../main'

export default {
	name : 'navcomp',

  data () {
    return {
        showTheNav : false,
 		
    }
  },
  methods: {

      showNav:function(){
        this.showTheNav = !this.showTheNav;
     }

  }
}


</script>










<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>




#j-list li{
  padding-right: 40px;
  list-style-type: none;
  display: inline;
  padding-left: 30px;
}
.j-list-2 li{
 
  list-style-type: none;
  text-align: center;
  padding-top: 30px;
  margin-left: -35px;


}



@media screen and (max-width: 768px){
  #j-list{
    display:  none;
  }
  #r-logo{
    left: 40px;top: 30px
  }
}
@media screen and (min-width: 768px){
  .nav-btn{
    display:  none;

  }
   #r-logo{
    left: 70px;top: 30px
  }
 .j-list-2{
    display: none;
  }
}

 .blur {
  -webkit-filter : blur(7px) !important;
  -moz-filter : blur(7px) !important;
  -ms-filter : blur(7px) !important;
  -o-filter: blur(7px) !important;
  filter: blur(7px) !important;
  opacity: 0.5;

}
.white{
	color: white;
}

</style>
