<div class="row marketing">
	<?php foreach ($post as $news_post): ?>
		<div class="col-xs-12 col-lg-6">
			<h4><?php echo $news_post['title'] ?></h4>
			<p class="article-date"><?php echo $news_post['date'] ?></p>
			<p class="article"><?php echo $news_post['text'] ?></p>

			<br>
		</div>
	<?php endforeach ?>
</div>