<!DOCTYPE html>
<html class="no-js" <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> <?php hybrid_attr( 'body' ); ?>>

	<div id="page" class="hfeed site">

		<!-- Primary Bar / Start -->
		<div id="primary-bar" class="clearfix">

			<div class="container">

				<?php get_template_part( 'menu', 'primary' ); // Loads the menu-primary.php template. ?>

				<div class="header-social">
					<?php get_template_part( 'social', 'icons' ); ?>
				</div>
				
				<div class="header-search">
					<a href="#top" id="searchtoggl"><i class="fa fa-search"></i></a>					
				</div>	

			</div><!-- .container -->

		</div>	
		<!-- Primary Bar / End -->


		<div id="searchbar" class="clearfix">
			<div class="container">
				<form id="searchform" method="get" action="<?php echo esc_url( home_url( '/' ) ); ?>">
					<button type="submit" id="search-submit" class="fa fa-search fa-4x"></button>
					<input type="search" name="s" id="s" placeholder="<?php esc_attr_e( 'Search for &hellip;', 'easynote' ); ?>" autocomplete="off" value="<?php echo esc_attr( get_search_query() ); ?>" />
				</form>
			</div>
		</div>


		<header id="masthead" class="site-header clearfix" role="banner" <?php hybrid_attr( 'header' ); ?>>

			<div class="site-branding">
				<?php easynote_site_branding(); ?>
				<?php easynote_header_ad(); // Display banner/ad in header. ?>
			</div>

		</header><!-- #masthead -->