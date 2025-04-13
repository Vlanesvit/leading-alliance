<!-- rs-text-block -->
<?php if (get_field('welcome', 'options')){?>
<link rel="stylesheet" type="text/css"
		  href="<?php echo esc_url(get_template_directory_uri()); ?>/css/block-css/rs-text-block.css">

<section class="rs-17">
	<div class="rs-text-block">
		<div class="container">
			<div class="row">
				<div class="col-xs-12" data-nekoanim="fadeInUp" data-nekodelay="200">
					<?php the_field('welcome', 'option'); ?>
				</div>
			</div>
		</div>
	</div>
</section>
<?}?>
<!-- /.rs-text-block -->