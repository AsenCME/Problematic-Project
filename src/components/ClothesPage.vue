<template>
	<div id="site-main">
	  <div class="site-narrow-content">
  		<h2 class="site-heading animate-box" data-animate-effect="fadeInLeft">Portfolio</h2>
  		<div class="row row-bottom-padded-md">
  			<div class="col-md-3 col-sm-6 col-padding text-center animate-box">
  				<a href="#" class="work image-popup" id="cloth-1">
  					<div class="desc">
  						<h3>Project Name</h3>
  						<span>Illustration</span>
  					</div>
  				</a>
  			</div>
  		</div>
  	</div>
		SignUp
		<form v-on:submit.prevent="signup()">
			<input type="text" v-model="suEmail">
			<input type="text" v-model="suPassword">
			<button type="submit">SignUp</button>
		</form>
		LogIn
		<form v-on:submit.prevent="login()">
			<input type="text" v-model="liEmail">
			<input type="text" v-model="liPass">
			<button type="submit">Login</button>
		</form>
		New Order
		<form v-on:submit.prevent="postToFirebase()">
			<input type="text">
			<input type="text">
			<button type="submit">Post</button>
		</form>
	</div>
</template>

<script>
import changeColorMixin from '../mixins/changeColorMixin'
import animateFunction from '../mixins/animationMixin'
import Firebase from 'firebase'
import '../firebaseApp'

export default {
  firebase: {

  },
  data(){
    return{
			suEmail: '',
			suPassword: '',
			liEmail: '',
			liPass: ''
    }
  },
  methods:{
		changeColor: changeColorMixin,
		animateEntrance: animateFunction,
		signup: function(){
			var email = this.suEmail;
			var pass = this.suPassword;
			Firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error){
				console.log(error.code);
				console.log(error.message);
			}).then(function(){
				var user = Firebase.auth().currentUser;
				user.sendEmailVerification();
				//TODO: Add new user in db
			});
		},
		login: function(){
			var email = this.liEmail;
			var pass = this.liPass;
			Firebase.auth().signInWithEmailAndPassword(email, pass).catch(function(error){
				console.log(error.code);
				console.log(error.message);
			});
		},
		postToFirebase: function() {

		}
  },
	mounted(){
		this.animateEntrance();
		this.changeColor();
		console.log(Firebase.auth().currentUser);
	}
}
</script>

<style scoped>
	#cloth-1{background: url(../assets/images/img_bg_1.jpg);}
</style>
