<div class="container">
	<h4>Outland is our real-time, city-building, survival, exploration, tactical, strategy game that we are making in Unity.</h4>
		<p>This game started out as a small project/experiment in making a voxel engine within Unity. After only a few weeks, the engine was up and running very well. We threw some ideas around and decided that we really wanted to make Outland.</p>

		<br>
		<center>
			<a href="<?php echo site_url('projects/'.$project) ?>" class="btn btn-primary" role="button">Project</a>
			<a href="<?php echo site_url('projects/'.$project.'-media') ?>" class="btn btn-primary" role="button">Media</a>
		</center>
		<br>

		<div class="row marketing">
			<div class="col-xs-12">
				<h4><?php echo $devlog['title'] ?></h4>
				<p class="article-date"><?php echo $devlog['date'] ?></p>
				<p class="article"><?php echo $devlog['text'] ?></p>

				<br>

				<p>
					<a href="<?php echo site_url('devlog/'.$project) ?>" class="btn btn-success" role="button">Back to project devlog</a>
					<!-- <a href="<?php echo site_url('devlog/remove/'.$devlog["id"]) ?>" class="btn btn-danger" role="button">Remove devlog</a> -->
				</p>
			</div>
		</div>