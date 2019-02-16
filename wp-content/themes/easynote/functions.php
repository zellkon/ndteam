<?php
/**
 * Theme functions file
 *
 * Contains all of the Theme's setup functions, custom functions,
 * custom hooks and Theme settings.
 * 
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 800; /* pixels */
}

if ( ! function_exists( 'easynote_content_width' ) ) :
/**
 * Set new content width if user uses 1 column layout.
 *
 * @since  1.0.0
 */
function easynote_content_width() {
	global $content_width;

	if ( in_array( get_theme_mod( 'theme_layout' ), array( '1c' ) ) ) {
		$content_width = 1140;
	}
}
endif;
add_action( 'template_redirect', 'easynote_content_width' );

if ( ! function_exists( 'easynote_theme_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * @since  1.0.0
 */
function easynote_theme_setup() {

	// Make the theme available for translation.
	load_theme_textdomain( 'easynote', trailingslashit( get_template_directory() ) . 'languages' );

	// Add custom stylesheet file to the TinyMCE visual editor.
	add_editor_style( array( 'assets/css/editor-style.css', easynote_lato_font_url(), easynote_playfair_font_url() ) );

	// Add RSS feed links to <head> for posts and comments.
	add_theme_support( 'automatic-feed-links' );

	/*
	 * Let WordPress manage the document title.
	 * By adding theme support, we declare that this theme does not use a
	 * hard-coded <title> tag in the document head, and expect WordPress to
	 * provide it for us.
	 */
	add_theme_support( 'title-tag' );

	// Enable support for Post Thumbnails.
	add_theme_support( 'post-thumbnails' );

	// used in Blog Grid and Blog List
	set_post_thumbnail_size( 300, 185, 1 );

	/* set WP default image sizes when theme activated */
	global $pagenow;
	if ( is_admin() && isset( $_GET['activated'] ) && $pagenow == 'themes.php' ) {
		// used in Single Post
		update_option( 'large_size_w', 940 );
		update_option( 'large_size_h', 580 ); // no need to crop the height, let user decide later
		update_option( 'large_crop', 1 );

		// used as Related Posts
		update_option( 'medium_size_w', 600 );
		update_option( 'medium_size_h', 340 );
		update_option( 'medium_crop', 1 );		
	}

	// Declare image sizes.
	add_image_size( 'easynote-widget-thumb', 64, 64, true );
	add_image_size( 'easynote-featured', 960, 640, true );
	add_image_size( 'easynote-megamenu-posts', 260, 160, true );

	// Register custom navigation menu.
	register_nav_menus(
		array(
			'primary'   => __( 'Primary Location', 'easynote' ),
			// 'secondary' => __( 'Secondary Location' , 'easynote' ),
		)
	);

	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'comment-list', 'search-form', 'comment-form', 'gallery', 'caption'
	) );

	/*
	 * Enable support for Post Formats.
	 * See: http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'audio', 'gallery', 'image', 'link', 'video'
	) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'easynote_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );

	// Enable theme-layouts extensions.
	add_theme_support( 'theme-layouts', 
		array(
			'1c'   => __( '1 Column Wide (Full Width)', 'easynote' ),
			'2c-l' => __( '2 Columns: Content / Sidebar', 'easynote' ),
			'2c-r' => __( '2 Columns: Sidebar / Content', 'easynote' )
		),
		array( 'customize' => true, 'default' => '2c-l' ) 
	);

	// This theme uses its own gallery styles.
	add_filter( 'use_default_gallery_style', '__return_false' );

}
endif; // easynote_theme_setup
add_action( 'after_setup_theme', 'easynote_theme_setup' );

/**
 * Registers custom widgets.
 *
 * @since 1.0.0
 * @link  http://codex.wordpress.org/Function_Reference/register_widget
 */
function easynote_widgets_init() {

	// Register ad widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-ads.php';
	register_widget( 'EasyNote_Ads_Widget' );

	// Register ad grid widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-ads-grid.php';
	register_widget( 'EasyNote_Ads_Grid_Widget' );

	// Register feedburner widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-feedburner.php';
	register_widget( 'EasyNote_Feedburner_Widget' );

	// Register recent posts thumbnail widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-recent.php';
	register_widget( 'EasyNote_Recent_Widget' );

	// Register popular posts thumbnail widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-popular.php';
	register_widget( 'EasyNote_Popular_Widget' );

	// Register random posts thumbnail widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-random.php';
	register_widget( 'EasyNote_Random_Widget' );

	// Register most views posts thumbnail widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-views.php';
	register_widget( 'EasyNote_Views_Widget' );

	// Register tabs widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-tabs.php';
	register_widget( 'EasyNote_Tabs_Widget' );

	// Register twitter widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-twitter.php';
	register_widget( 'EasyNote_Twitter_Widget' );

	// Register video widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-video.php';
	register_widget( 'EasyNote_Video_Widget' );

	// Register facebook widget.
	require trailingslashit( get_template_directory() ) . 'inc/widgets/widget-facebook.php';
	register_widget( 'EasyNote_Facebook_Widget' );
	
}
add_action( 'widgets_init', 'easynote_widgets_init' );

/**
 * Registers widget areas and custom widgets.
 *
 * @since 1.0.0
 * @link  http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function easynote_sidebars_init() {

	register_sidebar(
		array(
			'name'          => __( 'Primary Sidebar', 'easynote' ),
			'id'            => 'primary',
			'description'   => __( 'Main sidebar that appears on the right.', 'easynote' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer One', 'easynote' ),
			'id'            => 'footer-one',
			'description'   => __( 'Use this widget area to display widgets in the first column of the footer.', 'easynote' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer Two', 'easynote' ),
			'id'            => 'footer-two',
			'description'   => __( 'Use this widget area to display widgets in the second column of the footer.', 'easynote' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);

	register_sidebar(
		array(
			'name'          => __( 'Footer Three', 'easynote' ),
			'id'            => 'footer-three',
			'description'   => __( 'Use this widget area to display widgets in the third column of the footer.', 'easynote' ),
			'before_widget' => '<aside id="%1$s" class="widget %2$s">',
			'after_widget'  => '</aside>',
			'before_title'  => '<h3 class="widget-title">',
			'after_title'   => '</h3>',
		)
	);
	
}
add_action( 'widgets_init', 'easynote_sidebars_init' );

/**
 * Register Lato Google font.
 *
 * @since  1.0.0
 * @return string
 */
function easynote_lato_font_url() {
	
	$font_url = '';
	/*
	 * Translators: If there are characters in your language that are not supported
	 * by Lato, translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Lato font: on or off', 'easynote' ) ) {
		$font_url = add_query_arg( array( 
			'family' => urlencode( 'Lato:300,400,700,300italic,400italic,700italic' ),
			),
			"//fonts.googleapis.com/css" 
		);
	}

	return $font_url;
}

/**
 * Register Playfair Google font.
 *
 * @since  1.0.0
 * @return string
 */
function easynote_playfair_font_url() {
	
	$font_url = '';
	/*
	 * Translators: If there are characters in your language that are not supported
	 * by Playfair, translate this to 'off'. Do not translate into your own language.
	 */
	if ( 'off' !== _x( 'on', 'Playfair font: on or off', 'easynote' ) ) {
		$font_url = add_query_arg( 'family', urlencode( 'Playfair Display:400,700,400italic,700italic' ), "//fonts.googleapis.com/css" );
	}

	return $font_url;
}

/**
 * Custom template tags for this theme.
 */
require trailingslashit( get_template_directory() ) . 'inc/template-tags.php';

/**
 * Enqueue scripts and styles.
 */
require trailingslashit( get_template_directory() ) . 'inc/scripts.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require trailingslashit( get_template_directory() ) . 'inc/extras.php';

/**
 * Customizer additions.
 */
require trailingslashit( get_template_directory() ) . 'inc/customizer.php';

/**
 * Require and recommended plugins list.
 */
require trailingslashit( get_template_directory() ) . 'inc/plugins.php';

/**
 * Load Jetpack compatibility file.
 */
require trailingslashit( get_template_directory() ) . 'inc/jetpack.php';

/**
 * Mega menus walker.
 */
require trailingslashit( get_template_directory() ) . 'inc/megamenus/init.php';
require trailingslashit( get_template_directory() ) . 'inc/megamenus/class-primary-nav-walker.php';

/**
 * Load Additional Theme Options
 */
require trailingslashit( get_template_directory() ) . 'inc/options.php';

/**
 * Load Options Framework core.
 */
define( 'OPTIONS_FRAMEWORK_DIRECTORY', trailingslashit( get_template_directory_uri() ) . 'admin/' );
require trailingslashit( get_template_directory() ) . 'admin/options-framework.php';
require trailingslashit( get_template_directory() ) . 'admin/options.php';
require trailingslashit( get_template_directory() ) . 'admin/options-functions.php';

/**
 * We use some part of Hybrid Core to extends our themes.
 *
 * @link  http://themehybrid.com/hybrid-core Hybrid Core site.
 */
require trailingslashit( get_template_directory() ) . 'inc/hybrid/attr.php';
require trailingslashit( get_template_directory() ) . 'inc/hybrid/breadcrumb-trail.php';
require trailingslashit( get_template_directory() ) . 'inc/hybrid/loop-pagination.php';
require trailingslashit( get_template_directory() ) . 'inc/hybrid/theme-layouts.php';
require trailingslashit( get_template_directory() ) . 'inc/hybrid/entry-views.php';
require trailingslashit( get_template_directory() ) . 'inc/hybrid/hybrid-media-grabber.php';

/**
 * One Click Demo Import
 */
require trailingslashit( get_template_directory() ) .'inc/import/init.php';
@ini_set( 'upload_max_size' , '64M' );
@ini_set( 'post_max_size', '64M');
@ini_set( 'max_execution_time', '300' );