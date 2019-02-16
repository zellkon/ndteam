<?php
// show when at least one Footer Widget Area is active
if ( is_active_sidebar( 'footer-one' ) || is_active_sidebar( 'footer-two' ) || is_active_sidebar( 'footer-three' ) ) :
?>

<div id="footer-columns" class="container clearfix" role="complementary" aria-label="<?php echo esc_attr_x( 'Footer Sidebar', 'Sidebar aria label', 'easynote' ); ?>" <?php hybrid_attr( 'sidebar', 'footer' ); ?>>
			
		<?php if ( is_active_sidebar( 'footer-one' ) ) : ?>
			<div class="footer-column footer-column-1">
				<?php dynamic_sidebar( 'footer-one' ); ?>
			</div><!-- .footer-column -->
		<?php endif; ?>

		<?php if ( is_active_sidebar( 'footer-two' ) ) : ?>
			<div class="footer-column footer-column-2">
				<?php dynamic_sidebar( 'footer-two' ); ?>
			</div><!-- .footer-column -->
		<?php endif; ?>

		<?php if ( is_active_sidebar( 'footer-three' ) ) : ?>
			<div class="footer-column footer-column-3">
				<?php dynamic_sidebar( 'footer-three' ); ?>
			</div><!-- .footer-column -->
		<?php endif; ?>

</div><!-- #footer-columns -->

<?php endif; ?>