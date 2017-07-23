<template>
  <div id="site-main">
    <div class="site-more-contact">
      <div class="site-narrow-content">
        <div class="row">
          <div class="col-md-4">
            <div class="site-feature site-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div class="site-icon">
                <i class="icon-globe"></i>
              </div>
              <div class="site-text">
                <p><a href="#">info@domain.com</a></p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="site-feature site-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div class="site-icon">
                <i class="icon-map"></i>
              </div>
              <div class="site-text">
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="site-feature site-feature-sm animate-box" data-animate-effect="fadeInLeft">
              <div class="site-icon">
                <i class="icon-phone"></i>
              </div>
              <div class="site-text">
                <p><a href="tel://">+123 456 7890</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="site-narrow-content animate-box" data-animate-effect="fadeInLeft">
      <form v-on:submit.prevent="sendMsg()">
        <div class="row">
          <div class="col-md-12">

            <div class="row" v-show="!isLoggedIn">
              <div class="col-md-6">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Name" v-model="newMessage.senderName">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Email" v-model="newMessage.email">
                </div>
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="Phone" v-model="newMessage.phone">
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <textarea style="resize: vertical;" id="message" cols="30" rows="7" class="form-control" placeholder="Message" v-model="newMessage.content"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary btn-md" value="Send Message">
                </div>
              </div>
            </div>

            <div class="row" v-show="isLoggedIn">
              <div class="col-md-12">
                <div class="form-group">
                  <textarea style="resize: vertical;" id="message" cols="30" rows="7" class="form-control" placeholder="Message" v-model="newMessage.content"></textarea>
                </div>
                <div class="form-group">
                  <input type="submit" class="btn btn-primary btn-md" value="Send Message">
                </div>
              </div>
            </div>

          </div>
        </div>
      </form>
    </div>
    <!-- <gmap-map
      :center="{lat:42.0260311, lng:23.097751}"
      :zoom="7"
      map-type-id="terrain"
      style="width: 100%; height: 500px"></gmap-map> -->
  </div>
</template>

<script>
import changeColorMixin from '../mixins/changeColorMixin'
import animateFunction from '../mixins/animationMixin'
import Firebase from 'firebase'
import app from '../firebaseApp'

export default {
  data(){
    return{
      isLoggedIn: '',
      newMessage:{
        senderName: '',
        content: '',
        phone: '',
        email: '',
        timeSent: ''
      }
    }
  },
  methods: {
    changeColor: changeColorMixin,
    animateEntrance: animateFunction,
    sendMsg: function(){
      var $this = this;
      Firebase.auth().onAuthStateChanged(function(user){
        if(user){
          $this.newMessage.senderName = user.displayName;
          $this.newMessage.email = user.email;
          $this.newMessage.phone = user.phoneNumber;
          var today = new Date();
          $this.newMessage.timeSent = today.toDateString();
          var db = app.database();
          var messages = db.ref('/messages');
          messages.push($this.newMessage);
        }else{

        }
        $this.newMessage.senderName = '';
        $this.newMessage.content = '';
        $this.newMessage.phone = '';
        $this.newMessage.email = '';
        $this.newMessage.timeSent = '';
      });
    }
  },
	mounted(){
    var $this = this;
    Firebase.auth().onAuthStateChanged(function(user){
      if(user){
        $this.isLoggedIn = true;
      }else{
        $this.isLoggedIn = false;
      }
    });
    this.animateEntrance();
    this.changeColor();
	}
}
</script>
