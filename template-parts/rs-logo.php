<link rel="stylesheet" href="<?php echo esc_url(get_template_directory_uri()); ?>/css/rs-text.css">
<link rel="stylesheet" href="<?php echo esc_url(get_template_directory_uri()); ?>/css/rs-logo.css">
<script src="<?php echo esc_url(get_template_directory_uri()); ?>/js/rs-logo.js" defer></script>
<div class="rs-sticky-block">
	<section class="rs-text">
		<div class="rs-text__container">
			<div class="rs-text__wrapper">
				<div class="rs-text__desc" data-aos="fade-up" data-aos-delay="100">
					<?if (get_field('about_text', 'options')){?>
					<?php echo get_field('about_text', 'options') ?>
					<?}?>
				</div>

				<div class="rs-text__icons">
					<?if (get_field('about_img_1', 'options')){?>
					<div class="rs-text__icon rs-text__icon-1" data-aos="fade-down" data-aos-delay="50">
						<img src="<?php echo get_field('about_img_1', 'options') ?>" alt="">
					</div>
					<?}?>
					<?if (get_field('about_img_2', 'options')){?>
					<div class="rs-text__icon rs-text__icon-2" data-aos="fade-down" data-aos-delay="100">
						<img src="<?php echo get_field('about_img_2', 'options') ?>" alt="">
					</div>
					<?}?>
					<?if (get_field('about_img_3', 'options')){?>
					<div class="rs-text__icon rs-text__icon-3" data-aos="fade-down" data-aos-delay="150">
						<img src="<?php echo get_field('about_img_3', 'options') ?>" alt="">
					</div>
					<?}?>
				</div>
			</div>
		</div>
	</section>

	<?php $logos = get_field('logos', 'option');?>
	<section class="rs-logo" data-aos="fade-up" data-aos-delay="100">
		<div class="rs-logo__container">
			<div class="rs-logo__marquee marquee" data-direction="left">
				<ul>
					<?php if ( is_array($logos) ) { ?>
					<?php foreach ( $logos as $item ) { ?>
					<li>
						<?php if($item[ 'img' ]){?><img src="<?= $item[ 'img' ] ?>" alt="">
						<?}?>
					</li>
					<?php } ?>
					<?php } ?>
				</ul>
			</div>
		</div>
	</section>
</div>
<?php unset($logos); ?>