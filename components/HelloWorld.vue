<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="hell">
   


 <!-- for loading -->
<div class = "for-load" style = "position: absolute;z-index: 20;width: 100%;">
<center><img src = "../assets/img/logo.png" id = "loader" style = "position:relative;"></center>


</div>


<!-- absolute position elements -->

<div class = "overlay-back">

</div>




<div class = "nav-btn" style = "z-index: 300;color: #5681e4;font-size: 25px;position: absolute; right: 30px;top: 30px;">
  <i class="fas fa-align-justify" style = "cursor: pointer"></i></div>

<div class = "nav-remove display-none" style = "z-index: 300;color: #5681e4;font-size: 25px;position: absolute; right: 30px;top: 30px;">
  <span class="glyphicon glyphicon-remove" style = "cursor:pointer"></span></div>


<ul id = "j-list" class = "display-none"style = "z-index: 400">
<li><a class = "j-link" href = "/about">About</a></li>
<li><a class = "j-link" href = "/signin">Sign In</a></li>
  <li>
<a class = "j-links " href = "/signupprocess">

  <button class = "ss" style = "background-color: #5681e4;box-shadow: 2px 2px 3px #3c69d1; padding: 15px;padding-left: 37px; padding-right: 37px;margin-left: -20px;border: none;color: white;">Sign Up
</button>  </a></li>
</ul>







<div class = "menu-div display-none" style = "width: 200px;height: auto;z-index: 30; position: absolute;right: 30px; top: 70px">

  <ul class = "j-list-2" style="background : #fff;opacity: 1;">
  <li><a class = "j-link" href = "/about">About</a></li>
<li><a class = "j-link" href = "/signin">Sign In</a></li><br>
  <li><a href = "/signupprocess">
  <button class = "ss" style = "border: none;background-color: #5681e4;opacity: 1;box-shadow: 2px 2px 3px #3c69d1; padding: 9px;padding-left: 17px; padding-right: 17px;color: white;">Sign Up</button></a></li>
  <br><br>
  </ul>

</div>


<div class = "the-html overlay"><!--beginning of the html div-->



<!-- end of absolute positions here -->





<!-- responsive elements here -->

<div class = "wrap">

<div class = "j-navbar" style = "position: absolute;">
<a href = "/" class = "">
  <img class="path2" src="../assets/img/logo.png">
  <font class="revity" style = "margin-left:0px">
    Revity
  </font>
</a>
</div><!--end of the j-navbar-->
<br><br><br><br>

<div class = "first-section" style = "background-img: url(/img/landing copy 2first.png)">
<div class  = "row">
<div class = "col-sm-6 col-lg-6 col-xs-12 j-intro">
<div style = "width: 90%">
<h2 class = "intro-revity-head">Revity transforms driven teams into productivity geniuses</h2>
<p class = "intro-revity-para" style = "padding-right: 20px">Tired of behind due projects,
   badly managed team assignments and overworked managers? Revity brings simplicity to workplace projects, taking your team to new levels of efficiency
 </p>

<br>
<center>
<img  style = " width: 200px;margin-top: 60px;margin-bottom: 20px;"class="first-img-sub display-none" src="../assets/img/meeting.png">
<br>

  <button class = "ss" style = "margin-top: 60px;border:none;border-radius: 5px;background-color: #5681e4;box-shadow: 2px 2px 3px #3c69d1; padding: 15px;padding-left: 44px;
  padding-right: 44px;color: white;">
   GET STARTED
 </button>
</center>
</div><!--end of width adjuster-->
</div>
<center>
<div class = "col-sm-6 col-lg-6 col-xs-12">
<img  style = "margin-top: 20px; max-width: 100%"class="first-img display-none"  src="../assets/img/meeting.png">
</div><!--end of the first image-->
</center>
</div><!--end of the row div tag-->
</div><!--end of the first section-->





<div class = "second-section "><center>
<img  class="second-img"  style = "margin-top: 100px;max-width: 100%;" src="../assets/img/cover3.png">
<p class="intro-2" style = "width: 60%">
                    Revity reimagines Project Management issues like you’ve never seen before
</p>
<p class="intro-2-para" style = "width: 55%; margin-top: 20px">
  Tired of behind due projects, badly managed team assignments and overworked managers? Revity brings simplicity to workplace projects,
   taking your team to new levels of efficiency.
    <br>
</p>



</center>
</div><!--end of the second section div-->





<div class = "third-section">
  <p class="thirdh">
  Start working with your teams
  </p>
  <center>
  <p class="thirdp">
Tired of behind due projects, badly managed team assignments and overworked managers?
Revity brings simplicity to workplace projects, taking your team to new levels of efficiency.
                    <br>
  </p>

  <button class = "ss" style = "background-color: white; color: purple; box-shadow: 2px 2px 3px #3c69d1; padding: 20px;
  padding-left: 40px; padding-right: 40px; border: none;border-radius: 4px;margin-top: 40px; ">
  GET STARTED
  </button>
</center>
<br><br><br>
</div><!--end of the third section-->




</div><!--end of the wrap div-->

</div><!--end of html div-->


















   
  </div>
</template>

<script>
/* eslint-disable */


export default {
  data () {
    return {
      // show: true,
    }
  }
}




</script>


























<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



@import url('https://fonts.googleapis.com/css?family=Lato:700,400');

@font-face {
  font-family: "Lato-Semibold";
  /*src: url('../fonts/Lato-Semibold.ttf') format("truetype");*/
}

html,body{
overflow-x: hidden !important;
font-size: Lato-Semibold;
}

#j-list li{
  display: inline;
  padding-left: 70px;

}


.j-navbar{
  position: relative;
  top: 30px;
}

.j-logo{

}
.revity{
  background-color: rgba(255, 255, 255, 0.0);
top: 6px;
height: auto;
width: auto;
position: relative;
margin: 0;
font-family: "Lato", Helvetica, Arial, serif;
font-weight: 700;
font-style: normal;
font-size: 18.0px;
color: rgba(0, 0, 0, 1.0);
text-align: center;
line-height: 22.0px;
}

 #j-list{
  position: absolute;
  right: 30px;
  top: 30px;

}
#j-list li{
  padding-right: 40px;

}
.j-list-2 li{
  padding-top: 40px;
  list-style-type: none;
  text-align: center;

}
{
background-color: #7499ef !important;
}
.j-intro{
  text-align: left;
  position: relative;
  top: 90px;

  /*left: 59px;*/
}
.intro-revity-para{
    background-color: rgba(255, 255, 255, 0.0);
    height: auto;
    font-family: "Lato", Helvetica, Arial, serif;
    font-weight: 400;
    font-style: normal;
    color: rgba(9, 9, 9, 1.0);
    line-height: 34.0px;
}


.intro-revity-head{
  background-color: rgba(255, 255, 255, 0.0);
  padding-bottom: 22px;
    height: auto;
    margin: 0;
    font-family: "Lato-Semibold", Helvetica, Arial, serif;
    font-size: 42.0px;
    color: rgba(0, 0, 0, 1.0);

    line-height: 50.0px;
}

.first-img{
  max-width: 100%;
  position: relative;top: 90px;
}

.second-section{
    background-color: rgba(252, 252, 252, 1.0);
    height: auto;
    max-width: 100%;
    position: relative;
    margin-top: 150px;
    padding-bottom: 40px;
}
.ss:hover{background-color: #7499ef !important; text-decoration: none !important;color: white !important;}

.intro-2{
    background-color: rgba(255, 255, 255, 0.0);
    margin-top: 30px;
    height: auto;

    font-family: "Lato-Semibold", Helvetica, Arial, serif;
    font-size: 32.0px;
    color: rgba(0, 0, 0, 1.0);
    text-align: center;
    line-height: 39.0px;
}
.intro-2-para{
  background-color: rgba(255, 255, 255, 0.0);

height: auto;
font-family: "Lato", Helvetica, Arial, serif;
font-weight: 400;
font-style: normal;
font-size: 20.0px;
color: rgba(9, 9, 9, 1.0);
text-align: center;
line-height: 34.0px;
margin-bottom: 50px;
}
.third-section{
background-color: rgba(51, 79, 142, 1.0);
height: auto;
max-width: 100%;

left: 0px;
}
.thirdh{
      background-color: rgba(255, 255, 255, 0.0);
      height: auto;
      padding-top: 70px;
      font-family: "Lato-Semibold", Helvetica, Arial, serif;
      font-size: 32.0px;
      color: rgba(255, 255, 255, 1.0);
      text-align: center;
      line-height: 39.0px;
}
.thirdp{
background-color: rgba(255, 255, 255, 0.0);
height: auto;
margin-top: 25px;
left: 356px;
width : 55%;
font-family: "Lato", Helvetica, Arial, serif;
font-weight: 400;
font-style: normal;
font-size: 20.0px;
color: rgba(255, 255, 255, 1.0);
text-align: center;
line-height: 34.0px;
}

.overlay-back{
  position: absolute;
  top: 0; width : 100%;
  height: 100%;
  background: #000;
  opacity: 0.63;
  filter : alpha(opacity = 60);
  z-index: 5;
  display: none;
}

  .blur {
  -webkit-filter : blur(7px);
  -moz-filter : blur(7px);
  -ms-filter : blur(7px);
  -o-filter: blur(7px);
  filter: blur(7px);
  z-index: -3 !important;
  /*opacity: 0.2;*/

}
.overlay{
  position: absolute;
  top: 0px;
  left: 0;
  width : 100%;
  height: 100%;
  z-index: ;

}
.j-label{
  font-family: "Lato-Semibold", Helvetica, Arial, serif;
    font-size: 18.0px;
    color: rgba(0, 0, 0, 1.0);
    text-align: center;
    line-height: 22.0px;
}
.company-list li{
  padding-top: 20px;
  list-style-type: none;

}
.stages-list li {
  list-style-type : none;
  padding-top: 30px
}
.leftside-sub{
  max-width: 100%;
  margin-left: -20px;

}
.company-list2{
  padding-top: 20px;

}
.stages-list2{
  padding-bottom: 20px;

}
.company-list2 li{
  padding-left: 20px;
  list-style-type: none;
  display: inline;
}
.stages-list2 li {
  list-style-type : none;
  padding-left: 20px;
  display: inline;
}
.j-disappear{
  display: none;
}
.j-disappearm{
  display: none;
}
.j-links{
  color: white;
}
.d-btn-active{
        padding-left: 14px ;margin-left: -14px; border-left: 4px solid #414373;
}
.d-btn:hover{
  background-color: #eee;
}
.dashdef li{
  display: inline;
}
.stats{
  margin-top: 40px;
  position: relative;
  left: 120px;
  /*to be dynamic*/
  /*margin-left: 30px*/
}
.display-none{
  display: none;
}
.overlay-dark{
  background-color: black;
  opacity: 0.45;

}
.thread-pimg{
  margin-left: 30px;

}
.new-date{
  width: 100%;
  text-align: center;
  border-bottom: 1px solid #e2e6e6;
  line-height: 0.1em;
  margin: 10px 0 20px;
}
.new-date span{
  background-color: #fff;
  padding: 0 10px;
}

.ctime{
  color: #c9cece;
  font-weight: 200 !important;
}
.chatted-btn{
  margin-left: -40px;
}
.chatted-btn li{
  display: inline;
  list-style-type: none;
  padding-right: 20px;
}
.user-chat{
  border-radius: 4px !important;
}
.res-chat{
  border-radius: 4px !important;
}
.cimg{
  padding-bottom: 20px;

}
.rimg{
  max-width: 100}

.chat-list{
  
  position: relative; left: -40px;
  width: 100%;
}
  .chat-list li{
    list-style-type: none;
    padding-top: 25px;
    padding-right: ;

  }


  /* width */
::-webkit-scrollbar {
    cursor: pointer;
    width:5px;
    border-radius: 50px;
    /*height: 18px;*/
}

/* Track */
::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    cursor: pointer;
    border-radius: 40px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    background: #8e92e3; 
    border-radius: 50px;
    height: 19px;
    cursor: pointer;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
    background: #4348a1; 
}
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



.ss:hover{background-color: #7499ef !important; text-decoration: none;color: white !important;}

</style>
