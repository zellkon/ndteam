<?php
// Check if there's a menu assigned to the 'primary' location.
if ( ! has_nav_menu( 'primary' ) ) {
	return;
}
?>
<!-- Primary Navigation / Start -->
<nav id="primary-nav" class="main-navigation" role="navigation" <?php hybrid_attr( 'menu' ); ?>>

	<?php wp_nav_menu(
		array(
			'theme_location'  => 'primary',
			'container'       => false,
			'menu_id'         => 'primary-menu',
			'menu_class'      => 'sf-menu',
			'fallback_cb'     => '',
			'walker'          => new EasyNote_Custom_Nav_Walker
		)
	); ?>

</nav><!-- #primary-nav -->
<!-- Primary Navigation / End -->