<script type="text/javascript">/*eslint-disable*/</script>

<template>
  <div class="firstname-form">
  <div class = "firstname-form" >
<input id = "first-name" v-model = "firstname" v-on:keyup.13 = "emitNext()" type = "text" placeholder = "Enter your first name" class = "form-control" style = "font-size: 17px;height: 50px; width: 90%;border: 1px solid grey">
<br>
<div style = "text-align: left">
<button style = "padding-top: 20px;padding-bottom: 20px;padding-left: 60px;padding-right: 60px;" v-on:click = "emitNext()">Next</button>
<p><a href = "/signin">I already have an account</a></p>
<p style = "display: none">{{ redotwo }}</p>
</div>
</div>
  </div>
</template>

<script>
/* eslint-disable */


export default {
  props: ['redotwo'],
  data () {
    return {
    firstname : ''
    }
  }
  ,
  methods : {
      emitNext: function(){
        this.$emit('emitTheNextTwo', 'lastn');
        this.$emit('getFirstName', this.firstname);

      }
    },
    updated(){
      $('#first-name').focus();
       this.$nextTick(() =>{
      // props is best passed as an array
      if (this.redotwo.booleann == 'true'){
        this.$emit('getFirstName', this.firstname); this.redotwo.booleann = 'false';}
    });
},
created(){

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
