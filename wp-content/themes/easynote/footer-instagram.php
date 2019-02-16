<?php if ( ! class_exists( 'JR_InstagramSlider' ) ) return; // bounce back if plugin is not installed ?>

<?php if ( easynote_option( 'easynote_footer_insta' ) ) : ?>

	<div id="footer-instagram">

		<?php if ( easynote_option( 'easynote_footer_insta_title' ) ) : ?>
			<h4 class="instagram-heading"><?php echo easynote_option( 'easynote_footer_insta_title' ); ?></h4>
		<?php endif; ?>

		<div class="instag">
			<?php echo do_shortcode( easynote_option( 'easynote_footer_insta' ) ); ?>
		</div><!-- .instag -->

	</div><!-- #footer-instagram -->

<?php endif; ?>