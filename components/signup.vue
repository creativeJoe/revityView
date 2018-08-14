<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div v-bind:class="{'signup': true, }">

<!-- loading component -->
<loader v-if = "loading" v-on:loadingv = "shouldLoaderClose($event)"></loader>
<!-- loading component -->

   <div class = "choice" v-if = "showChoice">

<navcomp v-on:blurbg = "blurBg($event)"></navcomp>
<div  v-bind:class = "{'blur': blurEverything}"style = "width: 100%;position:absolute; top: 70px">
<br><br><br><br>
<div class = "row">
  <div class = "col-sm-6">
    <br>
  <img src = "../assets/img/boss.png"  style = "max-width: 100%; width: 400px" class = "img-circle"><br>
  <button v-on:click = 'showAdminn()' style = "font-family: montserrat;box-shadow: 2px 2px 3px #3c69d1">Register Your Company</button>
  <br><br>
  <br><br>
  <br><br>

  </div>
<br>
<div class = "col-sm-6" style = "margin-bottom: 130px">
  <br>
  <img src = "../assets/img/workers.png" style = "max-width: 100%; width: 400px" class = "img-circle"><br>
    <button v-on:click = 'showUsern()' style = "font-family: montserrat;box-shadow: 2px 2px 3px #3c69d1">Register With Your Company</button>
  </div>

</div>
<!-- <jfooter></jfooter> -->
</div>

   </div>

<div v-if = "!signupdone">
<div v-if = "showAdmin" >
<navcomp v-on:blurbg = "blurBg($event)"></navcomp>

<div  v-bind:class = "{'blur': blurEverything}"style = "width: 100%;position:absolute; top: 70px">
 <div class = "reg-list-sub">
   

    <ul style = "margin-top: 20px">
      <li style = "font-size: 18px;font-weight: 600">Company Details</li><br>
<li><font v-on:click = 'progress("companyn")' v-bind:class = "{'under-score': companyn}">Company Name</font></li>
    </ul>
    

    <ul>
    <li style = "font-size: 18px;font-weight: 600">Identity</li><br>
    <li><font v-on:click = 'progress("firstn")' v-bind:class = "{'under-score': firstn}">First Name</font></li>
    <li><font v-on:click = 'progress("lastn")' v-bind:class = "{'under-score': lastn}">Last Name</font></li>
    <li><font v-on:click = 'progress("email")' v-bind:class = "{'under-score': email}">Email</font></li>
    <li><font v-on:click = 'progress("password")' v-bind:class = "{'under-score': password}">Password</font></li>
    </ul>



  </div>
<!-- end of reg-list sub -->

<div class = "row">
<div class = "col-sm-0 col-0 col-md-4 col-lg-4 col-xl-4">
  <div class = "reg-list">
<ul style = "margin-top: 100px">
<li style = "font-size: 18px;font-weight: 600">Company Details</li>
<li><font v-on:click = 'progress("companyn")' v-bind:class = "{'under-score': companyn}">Company Name</font></li>
</ul>
<br><br>

<ul>
<li style = "font-size: 18px;font-weight: 600">Identity</li>
<li><font v-on:click = 'progress("firstn")' v-bind:class = "{'under-score': firstn}">First Name</font></li>
<li><font v-on:click = 'progress("lastn")' v-bind:class = "{'under-score': lastn}">Last Name</font></li>
<li><font v-on:click = 'progress("email")' v-bind:class = "{'under-score': email}">Email</font></li>
<li><font v-on:click = 'progress("password")' v-bind:class = "{'under-score': password}">Password</font></li>
</ul>

  </div>
</div>
<div class = "col-sm-12 col-12 col-md-8 col-lg-8 col-xl-8">
<div class = "register-admin"  >

<div class = "progress-bar" style = "margin-top: 70px;height: 5px;width : 90%; background-color: grey; border-radius: 80px">

<div v-if = "companyn" v-bind:class = "{'companynb': true,}" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "firstn" class = "firstnb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "lastn" class = "lastnb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "email" class = "emailb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "password" class = "passwordb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>

</div>
<!-- progress bar ends here -->
<div class = "the-form" style = "position: relative;top: 90px">

<keep-alive>
  <companyform v-bind:redo = "plsredo" v-if = "companyn" v-on:emitTheNextOne = 'progress($event)' v-on:getCompanyName = 'getCompanyValue($event)'></companyform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
 <firstnameform v-bind:redotwo = "plsredotwo" v-if = "firstn" v-on:emitTheNextTwo = 'progress($event)' v-on:getFirstName = 'getFirstName($event)'></firstnameform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
  <lastnameform v-bind:redothree = "plsredothree" v-if = "lastn" v-on:emitTheNextThree = 'progress($event)' v-on:getLastName = 'getLastName($event)'></lastnameform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
  <emailform v-bind:redofour = "plsredofour" v-if = "email" v-on:emitTheNextFour = 'progress($event)' v-on:getEmail = 'getEmail($event)'></emailform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
<passwordform v-bind:redofive = "plsredofive" v-if = "password" v-on:getPassword = 'getPassword($event)' v-on:emitValidateForm = 'validateForm()'>
</passwordform>
</keep-alive>

<p style = "margin-top: 30px;text-align: left; color: red"> {{ msg }}</p>
<p style = "text-align: left; color: green"> {{ msg1 }}</p>
<p style = "text-align: left; color: green"> {{ msg2 }}</p>



</div>
<!-- end of the form -->
</div>
<!-- end of register admin -->
</div>
</div>

</div>




</div>
<!-- end of show admin -->
<div v-if = "showUser">




<navcomp v-on:blurbg = "blurBg($event)"></navcomp>

<div  v-bind:class = "{'blur': blurEverything}"style = "width: 100%;position:absolute; top: 70px">
  <div class = "reg-list-sub">
   

    <ul style = "margin-top: 20px">
      <li style = "font-size: 18px;font-weight: 600">Company Details</li><br>
<li><font v-on:click = 'progress("companyn")' v-bind:class = "{'under-score': companyn}">Company Name</font></li>
    </ul>
    

    <ul>
    <li style = "font-size: 18px;font-weight: 600">Identity</li><br>
    <li><font v-on:click = 'progress("firstn")' v-bind:class = "{'under-score': firstn}">First Name</font></li>
    <li><font v-on:click = 'progress("lastn")' v-bind:class = "{'under-score': lastn}">Last Name</font></li>
    <li><font v-on:click = 'progress("email")' v-bind:class = "{'under-score': email}">Email</font></li>
    <li><font v-on:click = 'progress("password")' v-bind:class = "{'under-score': password}">Password</font></li>
    </ul>



  </div>
<!-- end of reg-list sub -->

<div class = "row">
<div class = "col-sm-0 col-0 col-md-4 col-lg-4 col-xl-4">
  <div class = "reg-list">
<ul style = "margin-top: 100px">
<li style = "font-size: 18px;font-weight: 600">Company Details</li>
<li><font v-on:click = 'progress("companyn")' v-bind:class = "{'under-score': companyn}">Company Name</font></li>
</ul>
<br><br>

<ul>
<li style = "font-size: 18px;font-weight: 600">Identity</li>
<li><font v-on:click = 'progress("firstn")' v-bind:class = "{'under-score': firstn}">First Name</font></li>
<li><font v-on:click = 'progress("lastn")' v-bind:class = "{'under-score': lastn}">Last Name</font></li>
<li><font v-on:click = 'progress("email")' v-bind:class = "{'under-score': email}">Email</font></li>
<li><font v-on:click = 'progress("password")' v-bind:class = "{'under-score': password}">Password</font></li>
</ul>

  </div>
</div>
<div class = "col-sm-12 col-12 col-md-8 col-lg-8 col-xl-8">
<div class = "register-admin" >

<div class = "progress-bar" style = "margin-top: 70px;height: 5px;width : 90%; background-color: grey; border-radius: 80px">

<div v-if = "companyn" v-bind:class = "{'companynb': true,}" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "firstn" class = "firstnb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "lastn" class = "lastnb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "email" class = "emailb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>
<div v-if = "password" class = "passwordb" style = "background-color: #5681e4; height: 5px; border-radius: 50px"></div>

</div>
<!-- progress bar ends here -->
<div class = "the-form" style = "position: relative;top: 90px">

<keep-alive>
  <companyform v-bind:redo = "plsredo" v-if = "companyn" v-on:emitTheNextOne = 'progress($event)' v-on:getCompanyName = 'getCompanyValue($event)'></companyform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
 <firstnameform v-bind:redotwo = "plsredotwo" v-if = "firstn" v-on:emitTheNextTwo = 'progress($event)' v-on:getFirstName = 'getFirstName($event)'></firstnameform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
  <lastnameform v-bind:redothree = "plsredothree" v-if = "lastn" v-on:emitTheNextThree = 'progress($event)' v-on:getLastName = 'getLastName($event)'></lastnameform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
  <emailform v-bind:redofour = "plsredofour" v-if = "email" v-on:emitTheNextFour = 'progress($event)' v-on:getEmail = 'getEmail($event)'></emailform>
</keep-alive>

<keep-alive>
<!-- has to be a component before keep alive will work -->
<passwordform v-bind:redofive = "plsredofive" v-if = "password" v-on:getPassword = 'getPassword($event)' v-on:emitValidateForm = 'validateUserForm()'>
</passwordform>
</keep-alive>

<p style = "margin-top: 30px;text-align: left; color: red"> {{ msg }}</p>
<p style = "text-align: left; color: green"> {{ msg1 }}</p>
<p style = "text-align: left; color: green"> {{ msg2 }}</p>


</div>
<!-- end of the form -->
</div>
<!-- end of register user-->
</div>
</div>
</div>
</div>

</div>

<div  v-bind:class = "{'dn': hideEmailVer}" v-if = "signupdone">

<navcomp v-on:blurbg = "blurBg($event)"></navcomp>
<div  v-bind:class = "{'blur': blurEverything}"style = "width: 100%;position:absolute; top: 70px">

<div class="form-group" style = "text-align: left;width: 80%; margin-left: 10%;margin-top: 140px">
  <label for = "otp" style = "text-align: left">
  <font style = "font-weight: 700; ">Enter the OTP sent to your email</font>
  </label>
  <input v-model = "otpcode" v-on:keyup.13 = "otpver()" type="text" class="form-control" id="otp" style = "height: 55px; margin-top: 12px;" placeholder = "XXXXXX">
<p style = "color: red"> {{ otpre }}</p>
    <button v-on:click = 'otpver()' style = "font-family: montserrat;box-shadow: 2px 2px 3px #3c69d1">Verify Your Account</button>
<a href = "#"><p>Did not receive any OTP code? Click here to resend</p></a>

</div>
</div>


</div>


</div>





   
  </div>
</template>

<script>
/* eslint-disable */

import axios from 'axios'
import VueAxios from 'vue-axios'


export default {
  name: 'signup',
  data () {
    return {
        plsredo : {'booleann': 'false'},
        plsredotwo : {'booleann': 'false'},
        plsredothree : {'booleann': 'false'},
        plsredofour : {'booleann': 'false'},
        plsredofive : {'booleann': 'false'},

        loading : false,
        showUser : false,
        showAdmin : false,
        showChoice: true,
        showTheNav : false,
        blurEverything : false,

        companyn : true,
        firstn: false,
        lastn: false,
        email: false,
        password: false,


        hideEmailVer : true,
        otpre : '',

        companyName : '',
        firstName : '',
        lastName : '',
        emailName: '',
        passwordName: '',
        msg: '',
        msg1: '',
        msg2: '',
        signupdone: false,
        otpcode: ''

    }
  },
  methods: {
    shouldLoaderClose: function(eventt){
      if (eventt === true){
        this.loading = false;
      }

    },
    otpver: function(){
      this.loading = true;
       axios.post('http://api.revityapp.com/account/confirm',
        {
          code: this.otpcode
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
       .then((res) => {
        if (res.data.message === "confirmed"){
          this.loading = false;
          this.otpre = "Your signup is complete...redirecting to Sign in page";
          setTimeout(function(){

          var href = '/signin'
          window.location.href = href;//redirects with javascript

          }, 4000);
        }
        if (res.data.message === "invalid"){
          this.loading = false;
          this.otpre = "invalid OTP";
        }
       });

    },
    resend: function(){
      this.loading = true;
       axios.post('http://api.revityapp.com/account/resend',
        {
          email: this.email
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
       .then((res) => {

        this.loading = false;
       });
    },
    validateUserForm: function(){
      this.loading = true;
      axios.post('http://api.revityapp.com/account/create/user',
        {
          firstname : this.firstName,
          lastname: this.lastName,
          email: this.emailName,
          password: this.passwordName,
          company: this.companyName
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
      .then((res) => { 
        
        if (res.data.message == 'company_already_exist'){
          this.loading = false;
          this.msg = 'the company you entered already exist';
          this.progress('companyn');
           }

        if (res.data.message == 'invalid_company')
        {
          this.loading = false;

          this.msg = 'Company name is invalid';
          this.progress('companyn');

        }
       
        if (res.data.message == 'invalid_firstname')
        {
          this.loading = false;

          this.msg = 'Your firstname is an invalid input';
          this.progress('firstn');

        }
         if (res.data.message == 'invalid_lastname')
        {
          this.loading = false;

          this.msg = 'Your lastname input is invalid';
          this.progress('lastn');

        }
         if (res.data.message == 'invalid_email')
        {
          this.loading = false;

          this.msg = 'Your email input is invalid';
          this.progress('email');

        }
         if (res.data.message == 'email_already_exist')
        {
          this.loading = false;

          this.msg = 'Email belongs to another user';
          this.progress('email');

        }
           if (res.data.message == 'company_not_exist')
        {
          this.loading = false;

          this.msg = 'Company does not exist';
          this.progress('companyn');

        }
         if (res.data.message == 'good')
        {
          this.loading = false;

          this.msg1 = 'Your sign up is complete.' 
          this.msg2 = 'Please check your email for verification';

          this.hideEmailVer = false;
          this.signupdone = true;
          
         
        }
          if (res.data.message == 'error')
        {
          this.loading = false;

          // test.msg = 'Sorry an error occurred';
          // document.getElementById("demo").innerHTML = msg;
          console.log(res.data.message);
          console.log(res.data.reason);

         
        }

        setTimeout(() => {
          this.msg = ''
        },5000);
      });

    },
  hasNo: function(myString){
    return /\d/.test(myString);
  },

  hasWhiteSpace: function(myString){
   return /\S/.test(myString);
  },
  checkIfEmpty: function(myString){
    if (myString.length < 1){
    return true;
  }
},

checkEmailValue: function(myString){
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    booleanEmail = re.test(String(myString).toLowerCase());
    if (booleanEmail){
      return true;
    }
    else{
      return false;
    }
},//end of check my email value
    update: function(){
    },
    getCompanyValue: function(value){
      this.companyName = value;
    },
    getFirstName:function(value){
      this.firstName = value;

    },
     getLastName:function(value){
      this.lastName = value;

    },getEmail:function(value){
      this.emailName = value;

    },
     getPassword:function(value){
      this.passwordName = value;

    },
      validateForm: function(){
          this.loading = true;

     axios.post('http://api.revityapp.com/account/create/admin',
        {
          firstname : this.firstName,
          lastname: this.lastName,
          email: this.emailName,
          password: this.passwordName,
          company: this.companyName
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
      .then((res) => { 
        
        if (res.data.message == 'company_already_exist'){
          this.loading = false;

          this.msg = 'the company you entered already exist';
          this.progress('companyn');
           }

        if (res.data.message == 'invalid_company')
        {
          this.loading = false;

          this.msg = 'Company name is invalid';
          this.progress('companyn');

        }
       
        if (res.data.message == 'invalid_firstname')
        {
          this.loading = false;

          this.msg = 'Your firstname is an invalid input';
          this.progress('firstn');

        }
         if (res.data.message == 'invalid_lastname')
        {
          this.loading = false;

          this.msg = 'Your lastname input is invalid';
          this.progress('lastn');

        }
         if (res.data.message == 'invalid_email')
        {
          this.loading = false;

          this.msg = 'Your email input is invalid';
          this.progress('email');

        }
         if (res.data.message == 'email_already_exist')
        {
          this.loading = false;

          this.msg = 'Email belongs to another user';
          this.progress('email');

        }
         if (res.data.message == 'good')
        {
          this.loading = false;

          this.msg1 = 'Your sign up is complete.' 
          this.msg2 = 'Please check your email for verification';
          this.$emit('getUserEmail', this.emailName);


           this.hideEmailVer = false;
          this.signupdone = true;

          
          
         
        }
          if (res.data.message == 'error')
        {
          this.loading = false;
          
          // test.msg = 'Sorry an error occurred';
          // document.getElementById("demo").innerHTML = msg;
          console.log(res.data.message);
          console.log(res.data.reason);


         
        }

        setTimeout(() => {
          this.msg = ''
        },5000);
      });

//always use ES 6

    },
    updateAll:function(){
         this.plsredo.booleann = "true";
          this.plsredotwo.booleann = "true";
          this.plsredothree.booleann = "true";
          this.plsredofour.booleann = "true";
          this.plsredofive.booleann = "true";

    },
      progress: function(str){
        this.companyn = false;
        this.firstn = false;
        this.lastn = false;
        this.email = false;
        this.password = false;

        if (str == 'companyn'){
          this.companyn = true;
          this.updateAll();


        }
        if (str == 'firstn'){
          this.firstn = true;
          this.updateAll();
        
        }
        if (str == 'lastn'){
          this.lastn = true;
          this.updateAll();
   
        }
        if (str == 'email')
        {
          this.email = true;
          this.updateAll();
     
        }
        if (str == 'password'){
          this.password = true;
          this.updateAll();
        
        }

      },
      blurBg: function(bool){
        if (this.blurBg.bool = true)
        {
        this.blurEverything = true;
        }
        if (this.blurBg.bool = false){
          this.blurEverything = false;
        }
      },
      showAdminn: function(){
        this.showAdmin = !this.showAdmin;
        this.showChoice = !this.showChoice;
      },
      showUsern: function(){
        this.showUser = !this.showUser;
        this.showChoice = !this.showChoice;

      },


  },

  computed : {
  
  },
  updated(){
    this.$nextTick(() =>{
  
          this.plsredo.booleann = "false";
          this.plsredotwo.booleann = "false";
          this.plsredothree.booleann = "false";
          this.plsredofour.booleann = "false";
          this.plsredofive.booleann = "false";

      
        
    })//end of nextTick
  }
}


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
p a{
  text-decoration: underline;
}
.under-score{
  border-bottom: 2px solid #5681e4 !important;
}
.companynb{
  width: 20% !important;
}

.firstnb{
  width: 40% !important;
}
.lastnb{
  width: 60% !important;
}
.emailb{
  width: 80% !important;
}
.passwordb{
  width: 100% !important;
}
 div{
  font-size: 13px;
 }
button{
  padding: 30px;
  margin-top: 40px;
  background-color: #5681e4;
  border: none;
  color: white;
  -webkit-transition: width 2s; /* Safari */
   transition: background-color 2s;
   transition-timing-function: ease-in-out;
}
button:hover{
  background-color: #f98443 !important;
  text-align: center;
}
.choice{
  /*border: 1px dotted blue;*/
  /*padding: 20px;*/
  padding-bottom: 200px;
}
.row .col-sm-4{

}

.row .col-sm-8{

}

.reg-list li{
  list-style-type: none;
  padding-top: 30px;
  text-align: left !important;
  cursor: pointer;
}

.reg-list li font:hover{
  background-color: #eee !important;
}
.reg-list-sub li{
  list-style-type: none;
  display: inline;
  /*padding-left: 40px;*/
  padding-right: 40px;
  text-align: center !important;

}
@media screen and (min-width: 900px){

  .register-admin{
    margin-top: 50px;
    margin-left: -80px;
  }
  .register-user{
    margin-top: 50px;
    margin-left: -80px;
  }
}
@media screen and (min-width: 768px){
  .reg-list-sub{
    display: none;
  }
 
  
}
@media screen and (max-width: 768px){
  .reg-list{
    display: none;
  }
   .register-admin{
    position: relative;
    left: 30px;
  }

}
.signup .row{
  /*font-family: montserrat ;*/
  letter-spacing: 0.12rem;
}

.dn {
  display: none !important;
}
</style>
