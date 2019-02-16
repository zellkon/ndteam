<?php
$tw      = easynote_option( 'easynote_twitter' ); 
$fb      = easynote_option( 'easynote_facebook' ); 
$gplus   = easynote_option( 'easynote_gplus' );
$insta   = easynote_option( 'easynote_instagram' ); 
$pint    = easynote_option( 'easynote_pinterest' );
$blogv   = easynote_option( 'easynote_bloglovin' );
$tumblr  = easynote_option( 'easynote_tumblr' );
?>

<?php if ( $tw || $fb || $gplus || $insta || $pint || $blogv || $tumblr ) : ?>

	<?php if ( $tw ) { ?> 
		<a href="<?php echo esc_url( $tw ); ?>" target="_blank"><i class="fa fa-twitter"></i> <span>Twitter</span></a>
	<?php } if ( $fb ) { ?>
		<a href="<?php echo esc_url( $fb ); ?>" target="_blank"><i class="fa fa-facebook"></i> <span>Facebook</span></a>
	<?php } if ( $gplus ) { ?>
		<a href="<?php echo esc_url( $gplus ); ?>" target="_blank"><i class="fa fa-google-plus"></i>  <span>Google Plus</span></a>
	<?php } if ( $insta ) { ?>
		<a href="<?php echo esc_url( $insta ); ?>" target="_blank"><i class="fa fa-instagram"></i> <span>Instagram</span></a>
	<?php } if ( $pint ) { ?>
		<a href="<?php echo esc_url( $pint ); ?>" target="_blank"><i class="fa fa-pinterest"></i> <span>Pinterest</span></a>
	<?php } if ( $blogv ) { ?>
		<a href="<?php echo esc_url( $blogv ); ?>" target="_blank"><i class="fa fa-heart"></i> <span>Bloglovin</span></a>
	<?php } if ( $tumblr ) { ?>
		<a href="<?php echo esc_url( $tumblr ); ?>" target="_blank"><i class="fa fa-tumblr"></i> <span>Tumblr</span></a>
	<?php } ?>
	
<?php endif; ?>