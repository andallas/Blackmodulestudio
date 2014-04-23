<div class="container">
	<h4>Lost Frontier is our real-time, city-building, survival, exploration, tactical, strategy game that we are making in Unity.</h4>
		<p>This game started out as a small project/experiment in making a voxel engine within Unity. After only a few weeks, the engine was up and running very well. We threw some ideas around and decided that we really wanted to make Lost Frontier.</p>

		<br>
		<center>
			<a href="<?php echo site_url('projects/'.$project) ?>" class="btn btn-primary" role="button">Project</a>
			<a href="<?php echo site_url('projects/'.$project.'-media') ?>" class="btn btn-primary" role="button">Media</a>
			<a href="<?php echo site_url('devlog/'.$project) ?>" class="btn btn-primary" role="button">Devlog</a>
		</center>
		<br>

		<div class="row marketing">
			<div class="col-xs-12">
				<h4>Create a devlog item</h4>
				<?php echo validation_errors(); ?>
				<?php echo form_open('devlog/create/'.$project) ?>
					<div class="form-group">
						<label for="title">Title</label>
						<input type="input" class="form-control" name="title" placeholder="Title">
					</div>
					<div class="form-group">
						<label for="text">Text</label>
						<textarea type="text" class="form-control" rows="5" name="text" placeholder="Devlog text..."></textarea>
					</div>
					<input class="btn btn-success" type="submit" name="submit" value="Create devlog item" />
				</form>
			</div>
		</div>