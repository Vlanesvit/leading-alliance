<link rel="stylesheet" href="<?php echo esc_url(get_template_directory_uri()); ?>/css/rs-banner.css">
<?if (get_field('text_banner')){?>		
	<section class="rs-banner" data-aos="fade" data-aos-delay="100">
		<div class="rs-banner__container">
			<div class="rs-banner__wrapper">
				<div class="rs-banner__desc">
					<h2><?php echo get_field('text_banner') ?></h2>
					<?if (get_field('descr_banner')){?>	
						<p><?php echo get_field('descr_banner') ?></p>
					<?}?>
				</div>
			</div>
		</div>
	</section>
<?} else {?>
<section class="rs-banner" data-aos="fade" data-aos-delay="100"></section>
<?}?>