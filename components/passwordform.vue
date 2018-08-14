<script type="text/javascript">/*eslint-disable*/</script>

<template>
    <div class = "password-form">
<input id = "password" v-on:keyup.13 = "emitValidate()" v-on:keyup = "pwdValidation()" v-model= "password" type = "password" placeholder = "Enter your password" class = "form-control" style = "font-size: 17px;height: 50px; width: 90%;border: 1px solid grey">
<br>

<input v-on:keyup.13 = "emitValidate()" v-on:keyup = "pwdValidation()" v-model= "cpassword" type = "password" placeholder = "Confirm your password" class = "form-control" style = "font-size: 17px;height: 50px; width: 90%;border: 1px solid grey">

<div style = "text-align: left">
<button style = "padding-top: 20px;padding-bottom: 20px;padding-left: 60px;padding-right: 60px;" v-on:click = "emitValidate()" >Submit</button>
<p><a href = "/signin">I already have an account</a></p>
<p style = "display: none">{{ redofive }}</p>
<p style = "color: red">  {{ passre }} </p>

</div>
</div>
</template>

<script>
/* eslint-disable */


export default {
  props : ['redofive'],
  data () {
    return {
      password : '',
      cpassword : '',
      passre : '',
      counter: 0,
    }
  },
  methods : {
      emitNext: function(){
       

      },
      emitValidate: function(){
        if (this.pwdValidation() === true){
        this.$emit('emitTheNextFive', 'companyn');
        this.$emit('getPassword', this.password);
        this.$emit('emitValidateForm');
  
        }
      else{
        
      }        
      },
   
   checkIfPasswordsMatch:function(){
   ;

        if (this.password == this.cpassword){
          return true;
        }
        else{
          return false;
        }

  },

checkPassword:function (){
   
    var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    var pBool = re.test(String(this.password));
    return pBool;
  },


pwdValidation:function(){

     this.passre = '';
    if (this.checkIfPasswordsMatch()){
      if (this.checkPassword()){

      
        this.passre = "you are good to go";
        return true;

      }
      else{
         this.passre = "Your password must contain: at least 8 characters,alphanumerics, at least an Uppercase and a LowerCase";
        return false;
      }
    }
    else{
      this.passre = 'Your passwords don\'t match';
      return false;
    }


},//end of pwd validation

 },
    updated(){
 

       this.$nextTick(() =>{
      // props is best passed as an array
      if (this.redofive.booleann == 'true'){ 
        this.$emit('getPassword', this.password); this.redofive.booleann = 'false';}
      this.redofive.booleann = 'false';
    });
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
}
button:hover{
  background-color: #7499ef !important;
}
.choice{
  border: 1px dotted blue;
  padding: 50px;
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
  padding-left: 40px;
  padding-right: 40px;
  text-align: center !important;

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


</style>
