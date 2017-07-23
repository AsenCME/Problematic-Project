<template>
  <div>
		<a v-show="currentPage !== '/login'" href="#" class="js-site-nav-toggle site-nav-toggle"><i></i></a>

		<aside v-show="currentPage !== '/login'" id="site-aside" role="complementary" class="border js-fullheight">
			<h1 id="site-logo"><a href="index.html">Clothes</a></h1>
			<nav id="site-main-menu" role="navigation">
				<ul>
					<li class="site-active"><router-link to="/">Home</router-link></li>
					<li><router-link to="/clothes">Clothes</router-link></li>
					<li><router-link to="/about">About</router-link></li>
					<li><router-link to="/contact">Contact</router-link></li>
          <li v-show="!isLoggedIn" v-on:click="reload()"><router-link to="/login">Login</router-link></li>
				</ul>
			</nav>
			<div class="site-footer">
				<p><small>&copy; 2017 Clothes</span><span>Designed by <a href="" target="_blank">Asen</a></span></small></p>
			</div>
		</aside>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>

    <div class="fab" v-show="currentPage !== '/login'">
      <ul class="fab-menu">
        <li class="fab-circle"></li>
        <li class="fab-circle"></li>
        <li class="fab-circle" style="background: #858585;" v-on:click="signOut()"><i class="fa fa-sign-out" aria-hidden="true" style="font-size: 25px; color: white;"></i></li>
      </ul>
      <div class="main-circle"><i class="fa fa-user-circle-o" aria-hidden="true" style="font-size: 67px; color: white;"></i></div>
    </div>

  </div>
</template>

<!-- <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?v=3&sensor=true&key=AIzaSyA-vWPdHrVfy2OEWTGLskUoI_x17LCjDtk"></script> -->

<script>
import './assets/css/bootstrap.css'
import './assets/css/animate.css'
import './assets/css/flexslider.css'
import './assets/css/icomoon.css'
import './assets/css/style.css'
import './assets/css/button.css'
import './assets/css/font-awesome.css'

import './assets/js/jquery.min.js'
import './assets/js/jquery.easing.1.3.js'
import './assets/js/bootstrap.min.js'
import './assets/js/jquery.waypoints.min.js'
import './assets/js/jquery.flexslider-min.js'
import './assets/js/main.js'
// import './assets/js/materialize.js'
// import './assets/js/google_map.js'

import changeColorMixin from './mixins/changeColorMixin'
import Firebase from 'firebase'
import './firebaseApp'



export default {
  data(){
    return{
      isLoggedIn: false,
      currentPage: this.$router.app._route.fullPath
    }
  },
  methods:{
    reload: function(){
      location.reload();
    },
    changeColor: changeColorMixin,
    signOut: function(){
      Firebase.auth().signOut().then(function(){console.log('yay!')}).catch(function(){console.log('nope...');});
    }
  },
  mounted(){
    var $this = this;
    Firebase.auth().onAuthStateChanged(function(user){
      if(user){
        $this.isLoggedIn = true;
      }
    });
    this.changeColor();
    console.log(this.currentPage);
  }
}
</script>

<style scoped>
.signedIn{
  background: #76b01e;
}
.signedOut{
  background: #ed4d4d;
}
</style>
