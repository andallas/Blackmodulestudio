<div class="row marketing">
	<div class="col-xs-12">
		<h4>Create a news post</h4>
		<?php echo validation_errors(); ?>
		<?php echo form_open('pages/create') ?>
			<div class="form-group">
				<label for="title">Title</label>
				<input type="input" class="form-control" name="title" placeholder="Title">
			</div>
			<div class="form-group">
				<label for="text">Text</label>
				<textarea type="text" class="form-control" rows="5" name="text" placeholder="News post text..."></textarea>
			</div>
			<input class="btn btn-success" type="submit" name="submit" value="Create news post" />
		</form>
	</div>
</div>