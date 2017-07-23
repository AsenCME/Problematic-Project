<template>
  <div id="site-main">
		<div class="site-narrow-content">
			<div class="row row-bottom-padded-md">
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<img class="img-responsive" src="../assets/images/img_bg_1.jpg" alt="Free HTML5 Bootstrap Template by FreeHTML5.co">
				</div>
				<div class="col-md-6 animate-box" data-animate-effect="fadeInLeft">
					<h2 class="site-heading">About Company</h2>
					<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.</p>
					<p>Quisque sit amet efficitur nih. Interdum et malesuada fames ac ante ipsum primis in faucibus interda et malesuada parturient.</p>
				</div>
			</div>
		</div>

		<div class="site-narrow-content">
				<h2 class="site-heading animate-box" data-animate-effect="fadeInLeft">Our Services</h2>
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
  methods: {
    changeColor: changeColorMixin,
    animateEntrance: animateFunction
  },
  mounted(){
    this.animateEntrance();
    this.changeColor();
  }
}
</script>
