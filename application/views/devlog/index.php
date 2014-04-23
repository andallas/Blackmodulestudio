<div class="container">
	<h4>Lost Frontier is our real-time, city-building, survival, exploration, tactical, strategy game that we are making in Unity.</h4>
		<p>This game started out as a small project/experiment in making a voxel engine within Unity. After only a few weeks, the engine was up and running very well. We threw some ideas around and decided that we really wanted to make Lost Frontier.</p>

		<br>
		<center>
			<a href="<?php echo site_url('projects/'.$project) ?>" class="btn btn-primary" role="button">Project</a>
			<a href="<?php echo site_url('projects/'.$project.'-media') ?>" class="btn btn-primary" role="button">Media</a>
		</center>
		<br>

		<div class="row marketing">
			<div class="col-xs-12">
				<?php foreach ($devlog as $devlog_item): ?>

				<h4><?php echo $devlog_item['title'] ?></h4>
				<p class="article-date"><?php echo $devlog_item['date'] ?></p>
				<p class="article"><?php echo $devlog_item['text'] ?></p>

				<br>

				<p>
					<a href="<?php echo site_url('devlog/view/'.$project.'/'.$devlog_item["slug"]) ?>" class="btn btn-success" role="button">View devlog</a>
				</p>

				<?php endforeach ?>
			</div>
		</div>