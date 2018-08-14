<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="signin">
<!-- nav component -->
<navcomp v-on:blurbg = "blurBg($event)"></navcomp>
<div  v-bind:class = "{'blur': blurEverything}"style = "width: 100%;position:absolute; top: 70px"></div>
  <!-- end of nav component -->
<keep-alive>
<signup v-on:getUserEmail = "giveUserEmail($event)"></signup>
</keep-alive>
<div class = "row j-white" style = "height: ;background-color: ;padding: 50px;padding-bottom: 50px">
<div class = "connn col-sm-0 col-lg-3 col-md-3 col-xs-0"></div>
<div class = "col-sm-12 col-md-6 col-xs-12 col-lg-6" style = "border-radius: 15px;margin-top: 60px;background-color: white;height : auto;padding: 50px" >
<br>
  <center style = "font-weight: 700; font-size: 16px">
     <font v-if = "!verified">VERIFICATION PAGE</font>
     <font class = "hh" v-if = "verified">Login</font>

    </center>
<br><br>

<!-- <form> -->
<div class = "small-width" style = "width :70%;margin-left: 15%">
  <div class = "row" v-bind:class = "{'hidePasswordArea': hidePasswordArea}">

<div class = "col-sm-12" style = "text-align: left">
  PASSWORD<br>
<input type = "password" class = "j-in"  v-model = "password" style = "width: 100%;" v-on:keyup.13="signin()">
<p class = "email-reply red">{{ passre }}</p>

</div>

</div>

<div v-bind:class = "{'row': true, 'hideOtpArea': hideOtpArea}">
<div class = "col-sm-12" style = "text-align: left">
  <font style = " "></font><br>
<input type = "text" class = "j-in form-control" placeholder = "Enter the OTP sent to your email" v-model = "otp" style = "width: 100%;padding-bottom: 4px;font-size: 12px; font-family: montserrat" v-on:keyup.13="activate()">
<p class = "red">{{ otpre }}</p>

<a href = "#" style = "cursor: pointer; position: relative; top: 60px" v-on:click = "rresend()">Resend the OTP? Click here</a>

</div>

</div>

<!-- email starts here -->
<div v-bind:class = "{'row': true, 'hideEmailArea': hideEmailArea}">

<div class = "col-sm-12">
  EMAIL<br>
<input type = "email" class = "j-in email"  v-model = "email" style = "width: 100%;" v-on:keyup.13="verify()">
<p class = "email-reply red">{{ emailre }}</p>

</div>

</div>
<!-- email ends here -->
<br><br>

<!-- company starts here -->
<div  v-bind:class = "{'row': true, 'hideEmailArea': hideEmailArea}">

<div class = "col-sm-12">
COMPANY<br>
<input type = "text" class = "j-in company" v-model = "company" style = "width: 100%;" v-on:keyup.13="verify()">
<p class = "company-reply red">{{ companyre }}</p>
</div>

</div>
<!-- company ends here -->
<br><br>

<center >
  <a v-bind:class = "{'row': true, 'hideEmailArea': hideEmailArea}"  v-on:click = "verify()" href = "#">
<button class = "ss verification-btn"  style = "width: 100%; background-color: #5681e4;border-radius: 7px; padding: 10px;border:none"><font style = "font-weight: 550">Verify</font></button>
</a>
<p class = "red" >{{ totalre }}</p>
  <a v-bind:class = "{'hidePasswordArea': hidePasswordArea}"  v-on:click = "signin()" href = "#">
<button class = "ss verification-btn"  style = "width: 100%; background-color: #5681e4;border-radius: 7px; padding: 10px;border:none"><font style = "font-weight: 550">Sign in</font></button>
</a>

<a v-bind:class = "{'row': true, 'hideOtpArea': hideOtpArea}"  v-on:click = "activate()" href = "#">
<button class = "ss activate-btn"  style = "width: 100%; background-color: #5681e4;border-radius: 7px; padding: 10px;border:none"><font style = "font-weight: 550">Activate</font></button>
</a>
</center>
</div>
<!-- small width verification form -->
<!-- </form> -->

</div>

</div>
</div><!--end of the row div-->

















   
  </div>
</template>

<script>
/* eslint-disable */


export default {
  props : ['propsemail'],
  data () {
    return {
      // nav data
    blurEverything : false,
      // nav data

      email : '',
    company: '',
    password: '',
    companyre : '',
    emailre: '',
    totalre : '',
    verified: true,
    passre: '',
    theToken: '',
    accountType: '',
    activated: false,
    otpre: '',
    otp: '',
    dn : false,
    hideOtpArea : true,
    hideEmailArea: false,
    hidePasswordArea: true,
    emailgotten : '',

    }
  },
  mounted(){
    
    alert(this.emailgotten);
  },
  computed: {

  },

  methods: {
    giveUserEmail:function(emailValue){
      this.emailgotten = this.giveUserEmail.emailValue;
    },
    followOrder: function(){

    },
    
    // nav method
    blurBg: function(bool){
        if (this.blurBg.bool = true)
        {
        this.blurEverything = true;
        }
        if (this.blurBg.bool = false){
          this.blurEverything = false;
        }
      },//end of nav method

      activate: function(){
        axios.post('https://revity-api.herokuapp.com/account/confirm',
        {
           code: this.otp,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
        .then((res)=>{
          if (res.data.message == "confirmed"){
            this.hideEmailArea = false;
            this.hideOtpArea = true;
         
          }
          else{
            this.otpre = "the otp you entered was invalid";
          }

        });
      },

      resend: function(){
        axios.post('https://revity-api.herokuapp.com/account/resend',
        {
           email: this.email,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
        .then((res) =>{
          console.log(res);
          if (res.data.message == "resent"){
            this.otpre = "";
          }
            else {
            this.otpre = res.data.reason;
          }
        });
      },

        signin : function(){
    this.passre = '';
    axios.post('https://revity-api.herokuapp.com/account/login',
    {
      // email: this.email,
        // company: this.company,
            email: this.email,
            company: this.company,
            password: this.password,
    },
    {
        'Content-type': 'application/x-www-form-urlencoded',
    })
    .then((res) => {
      if (res.data.message === "true"){
        this.theToken = res.data.jwt_token;
        this.accountType = res.data.account_type;

        setTimeout(function(){

          var href = '/dashboard';
          window.location.href = href;//redirects with javascript

          }, 4000);

              }

      if (res.data.message === 'invalid_password'){
      this.passre = "Password is invalid"
      }
      if(res.data.message === 'not_activated'){
        this.totalre = "This account is not activated";
        this.verified = false;
        this.dn = true;
        this.activated = false;
      }
      if (res.data.message !== "true" && res.data.message !== 'not_activated'){
       this.passre = "Check Your details again";
       // console.log(res);
      }
    })

  },
  checkEmailValue : function(myString){
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var booleanEmail = re.test(String(myString).toLowerCase());
    if (booleanEmail){
      return 'good';
    }
    else{
      return 'Enter a valid email address';
    }
  },//end of check my email value
    verifyy: function(){
      axios.post('https://revity-api.herokuapp.com/account/verify',
        {
          email: this.email,
          company: this.company,
        },//the data to post
      {
        'Content-type': 'application/x-www-form-urlencoded',

      })//end of axios.post
        .then((res) => {
          if (res.data.message == 'invalid_email'){
            this.emailre = res.data.reason;
          }
          if (res.data.message == 'invalid_company'){
            this.companyre = res.data.reason;
          }
          if (res.data.message == 'company_verified'){
            this.totalre = res.data.reason;
          }
          if (res.data.message == 'non_verified'){
            this.companyre = res.data.reason;
          }
          if (res.data.message == 'invalid'){
            this.emailre = res.data.reason;
          }
          if (res.data.message == 'verified'){
            this.totalre = 'Verified';
            // followOrder();
            this.hideEmailArea  = true;
            this.hidePasswordArea = false;
           setTimeout(function(){ this.totalre = ''}, 3000);
          }
        });


    },
    verify: function(){
      console.log(this.emailgotten);
        this.emailre = '';
        this.companyre = '';
        this.totalre = '';

      if (this.checkEmailValue(this.email) == 'good'){ this.verifyy();}
      else if (this.company.length < 1){
        this.companyre = 'You have to enter your company';
      }
      else if (this.email.length < 1){
        this.emailre = 'You have to enter your email';
      }
      else{
        this.emailre = this.checkEmailValue(this.email);
      }

    },//end of the verify method

  }
}


</script>


























<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hideEmailArea{
  display: none;
}
.hideOtpArea{
  display: none;
}
.hidePasswordArea{
  display: none;
}
.j-white{
  background-color: #eee;
  margin-top: 110px;
}
input{
  height: 60px;
}
button{
  padding-top: 30px !important;
  padding-bottom: 30px !important;
}
@media screen and (min-width: 786px){
.hh{
  font-size: 30px;
  font-family: montserrat;
}
}
.display-none{
  display: none !important;
}
.red{
  color: red !important;
}
.activate-btn{
  color : white !important;
}
@media screen and (max-width: 768px){
  .connn{
    display: none;
  }
}
.verification-btn{
  color: white !important;
}


</style>
