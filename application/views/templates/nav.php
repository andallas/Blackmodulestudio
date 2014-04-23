<div class="navbar navbar-default navbar-fixed-top">
	<div class="container">
		<div class="navbar-header">
			<a href="<?php echo site_url('home') ?>" class="navbar-brand"><img src="<?php echo base_url(); ?>assets/img/logo-small.png" class="home-image"></a>
			<a href="<?php echo site_url('home') ?>" class="navbar-brand">Blackmodule Studio</a>
			<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
		</div>

		<div class="navbar-collapse collapse" id="navbar-collapse">
			<ul class="nav navbar-nav navbar-right">
				<li><a href="<?php echo site_url('about') ?>">About</a></li>
				<li><a href="<?php echo site_url('contact') ?>">Contact</a></li>
				<li><a href="<?php echo site_url('games') ?>">Games</a></li>
				<li class="dropdown">
					<a href="#" class="dropdown-toggle" data-toggle="dropdown">Projects <b class="caret"></b></a>
					<ul class="dropdown-menu">
						<li class="dropdown-header">HTML5</li>
						<li><a href="<?php echo site_url('projects/katt') ?>">KATT</a></li>
						<li class="divider"></li>
						<li class="dropdown-header">Unity</li>
						<li><a href="<?php echo site_url('projects/tones-adventure') ?>">Tone's Adventure</a></li>
						<li><a href="<?php echo site_url('projects/outland') ?>">Outland</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</div>
</div>