<?php

/**
 * Extra (specific) Theme Options
 */

add_filter( 'easynote_theme_options', 'easynote_extra_theme_options' );

function easynote_extra_theme_options( $options ) {

	// echo '<pre>'; var_dump( $options ); echo '</pre>'; exit;
	
	// ================================== //
	// ===== Featured Slider =========== //
	// ================================== //
	
	// Pull all tags into an array
	$options_tags = array();
	$options_tags_obj = get_tags();
	$options_tags[''] = __( 'All Tags', 'easynote' );
	foreach ( $options_tags_obj as $tag ) {
		$options_tags[$tag->term_id] = $tag->name;
	}
	
	$featured[] = array(
		'name' => __( 'Featured', 'easynote' ),
		'type' => 'heading'
	);
	$featured['slider_toggle'] = array(
		'name' => __( 'Featured Slider', 'easynote' ),
		'desc' => __( 'Display Featured Slider on Index/Archive pages.', 'easynote' ),
		'id'   => 'easynote_featured_toggle',
		'std'  => 'on',
		'type' => 'onoff'
	);
	$featured['slider_tag'] = array(
		'name' => __( 'Select a Tag', 'easynote' ),
		'desc' => __( 'Select a tag to be used as Featured Slider.', 'easynote' ),
		'id' => 'easynote_featured_tag',
		'type' => 'select',
		'options' => $options_tags
	);
	$featured['slider_num'] = array(
		'name'  => __( 'Limit', 'easynote' ),
		'desc'  => __( 'Number of sliders to show.', 'easynote' ),
		'id'    => 'easynote_featured_num',
		'std'   => 4,
		'type'  => 'text'
	);

	array_splice( $options, 9, 0, $featured );


	// remove Single Post: Author (index: 7->11)
	unset( $options[11] );

	// remove Single Post: Tags (index: 10->14)
	// unset( $options[14] );

	// remove Post Misc Settings: Breadcrumbs (index: 13->17)
	unset( $options[17] );

	// ================================== //
	// ===== Footer Instagram =========== //
	// ================================== //
	$footer['easynote_footer_insta_title'] = array(
		'name' => __( 'Instagram Title', 'easynote' ),
		'desc' => __( 'Enter a title before your Instagram feeds.', 'easynote' ),
		'id'   => 'easynote_footer_insta_title',
		'std'  => __( 'Follow us @Instagram', 'easynote' ),
		'type' => 'text'
	);

	$footer['easynote_footer_insta'] = array(
		'name' => __( 'Instagram Shortcode', 'easynote' ),
		'desc' => sprintf( __( 'Enter your Instagram shortcode. Please install %s first and use <strong>Thumbnails</strong> template only.', 'easynote' ), '<a href="https://wordpress.org/plugins/instagram-slider-widget/" target="_blank">Instagram Slider Widget</a>' ),
		'id'   => 'easynote_footer_insta',
		'type' => 'text'
	);

	array_splice( $options, 31, 0, $footer );

	// ================================== //
	// ===== Social Links Settings ======= //
	// ================================== //
	$options[] = array(
		'name' => __( 'Social Links', 'easynote' ),
		'type' => 'heading'
	);

		$options['easynote_twitter'] = array(
			'name' => __( 'Twitter URL', 'easynote' ),
			'desc' => __( 'Enter your full Twitter URL <br />e.g. http://twitter.com/ThemeJunkie', 'easynote' ),
			'id'   => 'easynote_twitter',
			'type' => 'text'
		);

		$options['easynote_facebook'] = array(
			'name' => __( 'Facebook URL', 'easynote' ),
			'desc' => __( 'Enter your full Facebook URL e.g. http://www.facebook.com/themejunkies', 'easynote' ),
			'id'   => 'easynote_facebook',
			'type' => 'text'
		);
	
		$options['easynote_gplus'] = array(
			'name' => __( 'Google+ URL', 'easynote' ),
			'desc' => __( 'Enter your full Google+ URL. e.g. https://plus.google.com/+themejunkies', 'easynote' ),
			'id'   => 'easynote_gplus',
			'type' => 'text'
		);

		$options['easynote_instagram'] = array(
			'name' => __( 'Instagram URL', 'easynote' ),
			'desc' => __( 'Enter your full Instagram URL e.g. http://instagram.com/ThemeJunkie', 'easynote' ),
			'id'   => 'easynote_instagram',
			'type' => 'text'
		);

		$options['easynote_pinterest'] = array(
			'name' => __( 'Pinterest URL', 'easynote' ),
			'desc' => __( 'Enter your full Pinterest URL e.g. http://pinterest.com/themejunkie', 'easynote' ),
			'id'   => 'easynote_pinterest',
			'type' => 'text'
		);

		$options['easynote_bloglovin'] = array(
			'name' => __( 'Bloglovin URL', 'easynote' ),
			'desc' => __( 'Enter your full Bloglovin URL e.g. https://www.bloglovin.com/blogs/theme-junkie-5570541', 'easynote' ),
			'id'   => 'easynote_bloglovin',
			'type' => 'text'
		);

		$options['easynote_tumblr'] = array(
			'name' => __( 'Tumblr URL', 'easynote' ),
			'desc' => __( 'Enter your full Tumblr URL e.g. http://themejunkie.tumblr.com', 'easynote' ),
			'id'   => 'easynote_tumblr',
			'type' => 'text'
		);

	return $options;
}