<?php
/**
 * TGM Plugin Lists
 *
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */

// Include the TGM_Plugin_Activation class.
require trailingslashit( get_template_directory() ) . 'inc/classes/class-tgm-plugin-activation.php';

/**
 * Register required and recommended plugins.
 *
 * @since  1.0.0
 */
function easynote_register_plugins() {

	$plugins = array(

		array(
			'name'     => 'Theme Junkie Shortcodes',
			'slug'     => 'theme-junkie-shortcodes',
			'required' => false,
		),

		array(
			'name'     => 'Theme Junkie Custom CSS',
			'slug'     => 'theme-junkie-custom-css',
			'required' => false,
		),

		array(
			'name'     => 'Theme Junkie Team Content',
			'slug'     => 'theme-junkie-team-content',
			'required' => false,
		),

		array(
			'name'     => 'Jetpack by WordPress.com',
			'slug'     => 'jetpack',
			'required' => false,
		),

		array(
			'name'     => 'WordPress SEO by Yoast',
			'slug'     => 'wordpress-seo',
			'required' => false,
		),

		array(
			'name'     => 'Simple Page Sidebars',
			'slug'     => 'simple-page-sidebars',
			'required' => false,
		),

		array(
			'name'     => 'Instagram Slider Widget',
			'slug'     => 'instagram-slider-widget',
			'required' => false,
		),

		array(
			'name'     => 'Ninja Forms',
			'slug'     => 'ninja-forms',
			'required' => false,
		),

		array(
			'name'     => 'bbPress',
			'slug'     => 'bbpress',
			'required' => false,
		)

	);

	$config = array(
		'id'           => 'tgmpa',
		'default_path' => '',
		'menu'         => 'tgmpa-install-plugins',
		'has_notices'  => true,
		'dismissable'  => true,
		'dismiss_msg'  => '',
		'is_automatic' => false,
		'message'      => '',
	);

	tgmpa( $plugins, $config );

}
add_action( 'tgmpa_register', 'easynote_register_plugins' );