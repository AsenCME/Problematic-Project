<template>
  <div class="login-container">
    <div class="login-card"></div>
    <div class="login-card">
      <h1 class="login-title">Login</h1>
      <form>
        <div class="login-input-container">
          <input type="email" id="#{label}" required="required" v-model="email"/>
          <label for="#{label}">Email</label>
          <div class="login-bar"></div>
        </div>
        <div class="login-input-container">
          <input type="password" id="#{label}" required="required" v-model="password"/>
          <label for="#{label}">Password</label>
          <div class="login-bar"></div>
        </div>
        <div class="login-button-container">
          <button type="submit"><span>Go</span></button>
        </div>
        <div class="login-footer"><a href="#">Forgot your password?</a></div>
      </form>
    </div>
    <div class="login-card login-alt">
      <div class="login-toggle"></div>
      <h1 class="login-title">Register
        <div class="login-close"></div>
      </h1>
      <form v-on:submit.prevent="register()">
        <div class="login-input-container">
          <input type="email" id="#{label}" required="required" v-model="email"/>
          <label for="#{label}">Email</label>
          <div class="login-bar"></div>
        </div>
        <div class="login-input-container">
          <input type="password" id="#{label}" required="required" v-model="password"/>
          <label for="#{label}">Password</label>
          <div class="login-bar"></div>
        </div>
        <div class="login-input-container">
          <input type="text" id="#{label}" required="required" v-model="address"/>
          <label for="#{label}">Address</label>
          <div class="login-bar"></div>
        </div>
        <div class="login-input-container">
          <input type="phone" id="#{label}" required="required" v-model="phone"/>
          <label for="#{label}">Phone</label>
          <div class="login-bar"></div>
        </div>
        <div class="login-button-container">
          <button type="submit"><span>Next</span></button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import '../assets/css/loginForm.css'
import Firebase from 'firebase'
import app from '../firebaseApp'

export default {
  data(){
    return{
      email: '',
      password: '',
      address: '',
      phone: ''
    }
  },
  methods:{
    login: function(){

    },
    register: function(){
      var $this = this;
      Firebase.auth().createUserWithEmailAndPassword($this.email, $this.password).then(function(){
        var db = app.database();
        var users = db.ref('/users');
        var newUser = {
          email: $this.email,
          password: $this.password,
          phone: $this.phone,
          address: $this.address,
          uuid: Firebase.auth().currentUser.uid
        };
        users.push(newUser);
        setTimeout(function(){
          Firebase.auth().currentUser.sendEmailVerification().then(function(){
            console.log('email sent');
            $this.$router.push('/');
            location.reload();
          },function(err){
            console.log(err);
          });
        }, 1000)
      }).catch(function(err){
        console.log(err);
      });
    },
  },
  mounted(){
    var $this = this;
    var user = Firebase.auth().currentUser;
    if(user){
      $this.$router.push('/');
      location.reload();
    }
  }
}
</script>

<style media="screen">
  body{overflow-y: hidden;}
  .login-container{
    transition: .3s ease-in-out;
    transform: translateY(-50%);
    top: 50vh;
  }
  .login-active{
    top: 10vh;
    transform: translateY(0);
  }
</style>
