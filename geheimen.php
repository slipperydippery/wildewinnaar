<?php 
	include 'partials/header.php';
 ?>

	<div class="background--subpage background--verleden ">
	</div>
	<div class="wrapper">
		<div class="content">
			<a href="index.html"><img src="img/wilde_logo.png" alt="" class="logo"></a>
			<div class="content--head">
				<h2>De geheimen van de Wilde Winnaar</h2>
				<div class="social--icons">
					<a href="#"><img src="img/social_facebook.png" alt=""/></a>
					<a href="#"><img src="img/social_twitter.png" alt=""/></a>
					<a href="#"><img src="img/social_linkedin.png" alt=""/></a>
				</div>
			</div>
			<div class="content--body">
				<p>Genomineerd worden, in de picture staan en dan ook nog eens winnen. Het lijkt heel vanzelfsprekend, maar dat is het niet. Voor De Wilde kwam de nominatie als een verrassing. Sterker nog, legt Jeroen de Wilde uit: ‘We wisten niet eens waar we aan begonnen. Toch zijn we er vanaf het begin vol ingegaan. Want als je meedoet, ga je ervoor. Een eigenschap die we bij alle medewerkers van De Wilde tegenkomen.’ </p>
			</div>
			<div class="content--links">
				<a href="driveomtewinnen.php" class="linkblock" target="_blank">
					<div>
						<div class="linkblock--visual">
							<img src="img/geheimdrive.png" alt=""/>
							<img src="img/pdf_read.png" alt="" class="linkblock--icon linkblock--icon--document">
						</div>
						<div class="linkblock--description">
							Lees: De drive om te winnen
						</div>
					</div>
				</a>
				<a href="#test-popup" class="linkblock open-popup-link">
					<div>
						<div class="linkblock--visual">
							<img src="img/geheimfilm.png" alt=""/>
							<img src="img/video_play.png" alt="" class="linkblock--icon linkblock--icon--video">
						</div>
						<div class="linkblock--description">
							Bekijk het winnende filmpje
						</div>
					</div>
				</a>
				
				<div class="linkblock"></div>
			</div>

		</div>
		<div id="test-popup" class="player mfp-hide">
			<video id="example_video_1" class="video-js	 vjs-default-skin" controls preload="auto"
			style="height:auto; width:100%"
			data-setup="{}">
			<source src="video/ijmondonderneemt.mp4" type='video/mp4' />
			<p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video</a></p>
			</video>
		</div>
	</div>
<?php 
	include 'partials/footer.php';
 ?>	