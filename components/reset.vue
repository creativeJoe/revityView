<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="changePass">


<br><br>
<div class = "row">
<div class = "col-sm-2 col-12"></div>
<div class = "col-sm-8 col-12" style = "text-align: left">
  <font style = "text-align: left; font-family: montserrat;font-size: 15px; padding: 5px ">Enter Your New Password here</font><br>
<input type = "password" class = "j-in"  v-model = "cpass" style = "height: 34px; width: 100%;" v-on:keyup.13="changePass()">
  
<br><br>
  <font style = "text-align: left; font-family: montserrat;font-size: 15px; padding: 5px ">Confirm Your New Password here</font><br>

<input type = "password" class = "j-in"  v-model = "ccpass" style = "height: 34px; width: 100%;" v-on:keyup.13="changePass()">

<p class = "red">{{ cpassre }}</p>

<br><br>
<a class = "ff" v-on:click = "changePass()" href = "#">
<button class = "ss activate-btn"  style = "width: 100%; background-color: #5681e4;border-radius: 7px; padding: 10px;border:none"><font style = "font-weight: 550">Change Password</font></button>
</a>
<br><br><br><br><br>
</div>

</div>



   
  </div>
</template>

<script>
/* eslint-disable */
import Vue from 'vue'
import axios from 'axios'
import VueSession from 'vue-session'
import Router from 'vue-router'

Vue.use(VueSession)
Vue.use(Router)

export default {
  data () {
    return {
      cpass : '',
      cpassre : '',
      ccpass: '',
      token: '',
    }
  },
  methods: {
  changePass: function(){
    this.cpassre = '';
     var regex = /^([a-zA-Z+]+[0-9+]+[&@!#+]+)$/g;
    var regexBol = regex.test(regex);

    if (this.cpass !== this.ccpass){
    this.cpassre = "Your passwords don't match.Try again";
    }
    if (this.cpass.length < 8){
    this.cpassre = "Your password is too weak";    
    }
   
   

    else{
      var reUrl = 'http://api.revityapp.com/account/reset/'+ this.$route.params.token;
      axios.post(reUrl,
        {
       password : this.cpass
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
      .then((res) => {
        if (res.data.message === 'confirmed'){
          this.cpassre = res.data.reason;
          this.$router.push('/');
        }
        else{
          this.cpassre = res.data.reason;

        }
      });
    }
  },


  },
  mounted(){
    // var theUrl = String(window.location.href);
    // var theUrlArray = theUrl.split("/");

    this.token = this.$route.params.token;
    console.log(this.token);
    if (this.token.length < 10){
      this.$router.push('/');
    }


    //verify 
    var verifyUrl = 'http://api.revityapp.com/account/verifyToken/'+this.token;
    console.log(verifyUrl);
    axios.post(verifyUrl,
        {
       
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
    .then((res) => {
      if (res.data.message === 'true'){
      
            }
      else{
        // this.$router.push('/');
        console.log(res);

      }

     
    });

    
  }
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.ff{
  color: #fff;
  font-size: 15px;
  font-family: montserrat
}
button{
  box-shadow:  3px 3px 20px grey;
}
.red {
  color: red;
  padding-top: 4px;
}


</style>
