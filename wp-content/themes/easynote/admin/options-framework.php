<?php
/**
 * Options Framework
 *
 * We extend the style and functions of this framework.
 *
 * @package   Options Framework
 * @author    Devin Price <devin@wptheming.com>
 * @author    Theme Junkie <support@theme-junkie.com>
 * @license   GPL-2.0+
 * @link      http://wptheming.com
 * @copyright 2010-2014 WP Theming
 */

// If this file is called directly, abort.
if ( ! defined( 'WPINC' ) ) {
	die;
}

// Don't load if optionsframework_init is already defined
if (is_admin() && ! function_exists( 'optionsframework_init' ) ) :

function optionsframework_init() {

	//  If user can't edit theme options, exit
	if ( ! current_user_can( 'edit_theme_options' ) ) {
		return;
	}

	// Loads the required Options Framework classes.
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-framework.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-framework-admin.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-interface.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-media-uploader.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-sanitization.php';
	require plugin_dir_path( __FILE__ ) . 'includes/class-options-backup.php';

	// Instantiate the options page.
	$options_framework_admin = new Options_Framework_Admin;
	$options_framework_admin->init();

	// Instantiate the media uploader class
	$options_framework_media_uploader = new Options_Framework_Media_Uploader;
	$options_framework_media_uploader->init();

	// Instantiate the backup class
	$options_framework_backup = new Options_Framework_Backup();
	$options_framework_backup->init();

}

add_action( 'init', 'optionsframework_init', 20 );

endif;


/**
 * Helper function to return the theme option value.
 * If no value has been saved, it returns $default.
 * Needed because options are saved as serialized strings.
 *
 * Not in a class to support backwards compatibility in themes.
 */
if ( ! function_exists( 'of_get_option' ) ) :
function of_get_option( $name, $default = false ) {

	$option_name = '';

	// Gets option name as defined in the theme
	if ( function_exists( 'optionsframework_option_name' ) ) {
		$option_name = optionsframework_option_name();
	}

	// Fallback option name
	if ( '' == $option_name ) {
		$option_name = get_option( 'stylesheet' );
		$option_name = preg_replace( "/\W/", "_", strtolower( $option_name ) );
	}

	// Get option settings from database
	$options = get_option( $option_name );

	// Return specific option
	if ( isset( $options[$name] ) ) {
		return $options[$name];
	}

	return $default;
}
endif;

/**
 * Get the option default value.
 *
 * @author Theme Junkie <support@theme-junkie.com>
 */
function of_get_default( $option ) {

	// Get all Options value.
	$options = optionsframework_options();

	// loop each index
	foreach ( $options as $opt ) {
		// if 'std' exist
		if ( array_key_exists( 'std', $opt ) ) {
			// put and arrange in new default array
			$defaults[$opt['id']] = $opt['std'];
		}
	}

	// check if $option has default value (from new array)
	if ( array_key_exists( $option, $defaults ) ) {
		return $defaults[$option];
	}

	return false; // default if no std is set
}