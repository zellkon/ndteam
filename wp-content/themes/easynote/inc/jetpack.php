<?php
/**
 * Jetpack Compatibility File
 * See: http://jetpack.me/
 *
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */

/**
 * Jetpack setup
 * 
 * @since  1.0.0
 */
function easynote_jetpack_setup() {

	/**
	 * Add theme support for Infinite Scroll.
	 * See: http://jetpack.me/support/infinite-scroll/
	 */
	add_theme_support( 'infinite-scroll', array(
		'container'      => 'primary',
		'footer_widgets' => array(
			'footer-one',
			'footer-two',
			'footer-three'
		),
		'footer'         => 'page',
	) );
	
	/**
	 * Add theme support for Responsive Videos.
	 */
	add_theme_support( 'jetpack-responsive-videos' );

}
add_action( 'after_setup_theme', 'easynote_jetpack_setup' );

/**
 * Remove sharedaddy from excerpt.
 *
 * @since  1.0.0
 */
function easynote_remove_sharedaddy() {
    remove_filter( 'the_excerpt', 'sharing_display', 19 );
}
add_action( 'loop_start', 'easynote_remove_sharedaddy' );