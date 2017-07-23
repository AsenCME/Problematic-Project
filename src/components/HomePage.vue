<template>
	<div id="site-main">
	  <aside id="site-hero" class="js-fullheight">
  		<div class="flexslider js-fullheight">
  			<ul class="slides">
  		   	<li>
  		   		<div class="overlay"></div>
  		   		<div class="container-fluid">
  		   			<div class="row">
  			   			<div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
  			   				<div class="slider-text-inner">
  			   					<h1>Some text</h1>
  			   					<h2>Some text</h2>
  									<!-- <p><a class="btn btn-primary btn-demo popup-vimeo"> <i class="icon-monitor"></i> Live Preview</a> <a class="btn btn-primary btn-learn">Learn More<i class="icon-arrow-right3"></i></a></p> -->
  			   				</div>
  			   			</div>
  			   		</div>
  		   		</div>
  		   	</li>
					<li>
  		   		<div class="overlay"></div>
  		   		<div class="container-fluid">
  		   			<div class="row">
  			   			<div class="col-md-8 col-md-offset-2 text-center js-fullheight slider-text">
  			   				<div class="slider-text-inner">
  			   					<h1>Some other text</h1>
  			   					<h2>Some other text</h2>
  									<!-- <p><a class="btn btn-primary btn-demo popup-vimeo"> <i class="icon-monitor"></i> Live Preview</a> <a class="btn btn-primary btn-learn">Learn More<i class="icon-arrow-right3"></i></a></p> -->
  			   				</div>
  			   			</div>
  			   		</div>
  		   		</div>
  		   	</li>
  		  </ul>
  	  </div>
  	</aside>
  	<div class="site-narrow-content">
  		<h2 class="site-heading animate-box" data-animate-effect="fadeInLeft">Services</h2>
  		<div class="row">
  			<div class="col-md-6">
  				<div class="site-feature animate-box" data-animate-effect="fadeInLeft">
  					<div class="site-icon">
  						<i class="icon-settings"></i>
  					</div>
  					<div class="site-text">
  						<h3>Strategy</h3>
  						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
  					</div>
  				</div>
  			</div>
  			<div class="col-md-6">
  				<div class="site-feature animate-box" data-animate-effect="fadeInLeft">
  					<div class="site-icon">
  						<i class="icon-search4"></i>
  					</div>
  					<div class="site-text">
  						<h3>Explore</h3>
  						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
  					</div>
  				</div>
  			</div>

  			<div class="col-md-6">
  				<div class="site-feature animate-box" data-animate-effect="fadeInLeft">
  					<div class="site-icon">
  						<i class="icon-paperplane"></i>
  					</div>
  					<div class="site-text">
  						<h3>Direction</h3>
  						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
  					</div>
  				</div>
  			</div>
  			<div class="col-md-6">
  				<div class="site-feature animate-box" data-animate-effect="fadeInLeft">
  					<div class="site-icon">
  						<i class="icon-params"></i>
  					</div>
  					<div class="site-text">
  						<h3>Expertise</h3>
  						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>
  					</div>
  				</div>
  			</div>
  		</div>
  	</div>
	</div>
</template>

<script>
import changeColorMixin from '../mixins/changeColorMixin'
import animateFunction from '../mixins/animationMixin'

export default {
	methods:{
		changeColor: changeColorMixin,
		animateEntrance: animateFunction
	},
	mounted(){
		$('a').show();
		$('aside').show();
		$('.fab').show();
		$('.animate-box').css("opacity", "0");
		this.changeColor();
		this.animateEntrance();
	}
}
</script>
