<?php
/**
 * Theme Options.
 *
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */

/**
 * A unique identifier is defined to store the options in the database and reference them from the theme.
 *
 * @since  1.0.0
 */
function optionsframework_option_name() {
	return 'easynote'; // Theme slug
}

/**
 * Defines an array of options that will be used to generate the settings page and be saved in the database.
 * When creating the 'id' fields, make sure to use all lowercase and no spaces.
 *
 * @since  1.0.0
 */
function optionsframework_options() {

	// Pull all the categories into an array
	$options_categories = array();
	$options_categories_obj = get_categories();
	$options_categories[''] = __( 'All Categories', 'easynote' );
	foreach ($options_categories_obj as $category) {
		$options_categories[$category->cat_ID] = $category->cat_name;
	}

	// Pull all tags into an array
	$options_tags = array();
	$options_tags_obj = get_tags();
	$options_tags[''] = __( 'All Tags', 'easynote' );
	foreach ( $options_tags_obj as $tag ) {
		$options_tags[$tag->term_id] = $tag->name;
	}

	// Pull all the pages into an array
	$options_pages = array();
	$options_pages_obj = get_pages( 'sort_column=post_parent,menu_order' );
	$options_pages[''] = __( 'Select a page:', 'easynote' );
	foreach ($options_pages_obj as $page) {
		$options_pages[$page->ID] = $page->post_title;
	}

	// Image path
	$imagepath =  get_template_directory_uri() . '/assets/img/';

	// Set empty $options.
	$options = array();

	/**
	 * Defines array of options.
	 */
	
	// ============================ //
	// ===== General Settings ===== //
	// ============================ //
	$options[] = array(
		'name' => __( 'General', 'easynote' ),
		'type' => 'heading'
	);

		$options['easynote_favicon'] = array(
			'name' => __( 'Favicon', 'easynote' ),
			'desc' => __( 'Your custom favicon. 32x32px recommended.', 'easynote' ),
			'id'   => 'easynote_favicon',
			'type' => 'upload'
		);

		$options['easynote_mobile_icon'] = array(
			'name' => __( 'Mobile Icon', 'easynote' ),
			'desc' => __( '144x144 recommended in PNG format. This icon will be used when users add your website as a shortcut on mobile devices like iPhone, iPad, Android etc.', 'easynote' ),
			'id'   => 'easynote_mobile_icon',
			'type' => 'upload'
		);

		$options[] = array(
			'name'  => __( 'FeedBurner URL', 'easynote' ),
			'desc'  => __( 'Enter your full FeedBurner URL. If you wish to use FeedBurner over the standard WordPress feed.', 'easynote' ),
			'id'    => 'easynote_feedburner_url',
			'placeholder' => 'http://feeds.feedburner.com/ThemeJunkie',
			'type'  => 'text'
		);

		$options['easynote_tracking'] = array(
			'name' => __( 'Tracking Code', 'easynote' ),
			'desc' => __( 'Paste your Google Analytics (or other) tracking code here. It will be inserted before the closing body tag of your theme.', 'easynote' ),
			'id'   => 'easynote_tracking',
			'type' => 'textarea'
		);

	// ============================ //
	// ===== Header Settings ===== //
	// ============================ //
	$options[] = array(
		'name' => __( 'Header', 'easynote' ),
		'type' => 'heading'
	);

		$options['easynote_logo'] = array(
			'name' => __( 'Logo', 'easynote' ),
			'desc' => __( 'Upload your custom logo, it will automatically replace the Site Title', 'easynote' ),
			'id'   => 'easynote_logo',
			'type' => 'upload'
		);

		$options['easynote_logo_retina'] = array(
			'name' => __( 'Retina Logo', 'easynote' ),
			'desc' => __( 'Upload your retina version of your logo. eg: logo@2x.png', 'easynote' ),
			'id'   => 'easynote_logo_retina',
			'type' => 'upload'
		);

		$options[] = array(
			'name' => __( 'Site Description', 'easynote' ),
			'desc' => __( 'Display the site description.', 'easynote' ),
			'id'   => 'easynote_site_desc',
			'std'  => 'on',
			'type' => 'onoff'
		);

	// ================================ //
	// ===== Single Post Settings ===== //
	// ===== index: 9 ===== //
	// ================================ //
	$options[] = array(
		'name' => __( 'Single Post', 'easynote' ),
		'type' => 'heading'
	);

		$options[] = array(
			'name' => __( 'Featured Image', 'easynote' ),
			'desc' => __( 'Display the featured image.', 'easynote' ),
			'id'   => 'easynote_featured_image',
			'std'  => 'on',
			'type' => 'onoff'
		);

		$options[] = array(
			'name' => __( 'Date', 'easynote' ),
			'desc' => __( 'Display the post date.', 'easynote' ),
			'id'   => 'easynote_date',
			'std'  => 'on',
			'type' => 'onoff'
		);

		$options[] = array(
			'name' => __( 'Author', 'easynote' ),
			'desc' => __( 'Display the post author.', 'easynote' ),
			'id'   => 'easynote_author',
			'std'  => 'on',
			'type' => 'onoff'
		);

		$options[] = array(
			'name' => __( 'Comment', 'easynote' ),
			'desc' => __( 'Display the post comment link. This will override WordPress setting.', 'easynote' ),
			'id'   => 'easynote_comment',
			'std'  => 'on',
			'type' => 'onoff'
		);

		$options[] = array(
			'name' => __( 'Categories', 'easynote' ),
			'desc' => __( 'Display the post categories.', 'easynote' ),
			'id'   => 'easynote_categories',
			'std'  => 'on',
			'type' => 'onoff'
		);

		$options[] = array(
			'name' => __( 'Tags', 'easynote' ),
			'desc' => __( 'Display the post tags.', 'easynote' ),
			'id'   => 'easynote_tags',
			'std'  => 'on',
			'type' => 'onoff'
		);

		$options[] = array(
			'name' => __( 'Post Navigation', 'easynote' ),
			'desc' => __( 'Display the post navigation.', 'easynote' ),
			'id'   => 'easynote_post_navigation',
			'std'  => 'on',
			'type' => 'onoff'
		);

		// index: 17
		$options[] = array(
			'name' => __( 'Post Misc Settings', 'easynote' ),
			'id'   => '',
			'type' => 'seperator'
		);

			$options[] = array(
				'name' => __( 'Breadcrumbs', 'easynote' ),
				'desc' => __( 'Display the breadcrumbs. We recommend to enable it.', 'easynote' ),
				'id'   => 'easynote_breadcrumbs',
				'std'  => 'on',
				'type' => 'onoff'
			);

			$options[] = array(
				'name' => __( 'Author Bio', 'easynote' ),
				'desc' => __( 'Display the author biographical info.', 'easynote' ),
				'id'   => 'easynote_author_bio',
				'std'  => 'on',
				'type' => 'onoff'
			);

			$options[] = array(
				'name' => __( 'Share Buttons', 'easynote' ),
				'desc' => __( 'Display the social share buttons info.', 'easynote' ),
				'id'   => 'easynote_share_buttons',
				'std'  => 'on',
				'type' => 'onoff'
			);

		$options[] = array(
			'name' => __( 'Related Posts Settings', 'easynote' ),
			'id'   => '',
			'type' => 'seperator'
		);

			$options[] = array(
				'name' => __( 'Related Posts', 'easynote' ),
				'desc' => __( 'Display the related posts.', 'easynote' ),
				'id'   => 'easynote_related_posts',
				'std'  => 'on',
				'type' => 'onoff'
			);

			$options[] = array(
				'name' => __( 'Related Posts Thumbnail', 'easynote' ),
				'desc' => __( 'Display the related posts with thumbnail.', 'easynote' ),
				'id'   => 'easynote_related_posts_thumbnail',
				'std'  => 'on',
				'type' => 'onoff'
			);

			$options[] = array(
				'name' => __( 'Related Posts Date', 'easynote' ),
				'desc' => __( 'Display the related posts with date.', 'easynote' ),
				'id'   => 'easynote_related_posts_date',
				'std'  => 'on',
				'type' => 'onoff'
			);

		$options[] = array(
			'name' => __( 'Advertisement Settings', 'easynote' ),
			'id'   => '',
			'type' => 'seperator'
		);

			$options['easynote_ad_single_before'] = array(
				'name' => __( 'Before Content Advertisement', 'easynote' ),
				'desc' => __( 'Your ad will appear on single post before content.', 'easynote' ),
				'id'   => 'easynote_ad_single_before',
				'type' => 'textarea'
			);

			$options['easynote_ad_single_after'] = array(
				'name' => __( 'After Content Advertisement', 'easynote' ),
				'desc' => __( 'Your ad will appear on single post after content.', 'easynote' ),
				'id'   => 'easynote_ad_single_after',
				'type' => 'textarea'
			);

	// =========================== //
	// ===== Footer Settings ===== //
	// ===== index: 28 =========== //
	// =========================== //
	$options[] = array(
		'name' => __( 'Footer', 'easynote' ),
		'type' => 'heading'
	);

		$theme = wp_get_theme();
		$options['easynote_footer_text'] = array(
			'name' => __( 'Footer Text', 'easynote' ),
			'desc' => __( 'You can customize the footer text here.', 'easynote' ),
			'id'   => 'easynote_footer_text',
			'std'  => sprintf( __( '&copy; %1$s %2$s &middot; %3$s %4$s Designed by %5$s', 'easynote' ), 
				date( 'Y' ),
				'<a href="' . esc_url( home_url() ) . '">' . esc_attr( get_bloginfo( 'name' ) ) . '</a>',
				'<span class="themejunkie">',
				'<a href="' . esc_url( $theme->get( 'ThemeURI' ) ) . '">' . esc_attr( $theme->get( 'Name' ) ) . '</a>',
				'<a href="' . esc_url( $theme->get( 'AuthorURI' ) ) . '" rel="designer">' . esc_attr( $theme->get( 'Author' ) ) . '</a>.</span>' ),
			'type' => 'editor'
		);

	// ================================== //
	// ===== Advertisement Settings ===== //
	// ================================== //
	$options[] = array(
		'name' => __( 'Advertisement', 'easynote' ),
		'type' => 'heading'
	);

		$options['easynote_header_ads'] = array(
			'name' => __( 'Header Advertisement', 'easynote' ),
			'desc' => __( 'The ad will appear at the top of your site. Recommended size 728x90', 'easynote' ),
			'id'   => 'easynote_header_ads',
			'type' => 'textarea'
		);

	// ================================== //
	// ===== Custom Code Settings ======= //
	// ================================== //
	$options[] = array(
		'name' => __( 'Custom Code', 'easynote' ),
		'type' => 'heading'
	);

		$options['easynote_script_head'] = array(
			'name' => __( 'Header code', 'easynote' ),
			'desc' => __( 'If you need to add custom scripts to your header (meta tag verification, google fonts url), you should enter them in the box. They will be added before &lt;/head&gt; tag', 'easynote' ),
			'id'   => 'easynote_script_head',
			'type' => 'textarea'
		);

		$options['easynote_script_footer'] = array(
			'name' => __( 'Footer code', 'easynote' ),
			'desc' => __( 'If you need to add custom scripts to your footer, you should enter them in the box. They will be added before &lt;/body&gt; tag', 'easynote' ),
			'id'   => 'easynote_script_footer',
			'type' => 'textarea'
		);
	
	// Allow dev to filter the theme options.
	return apply_filters( 'easynote_theme_options', $options );
}

/*
 * This is an example of how to add custom scripts to the options panel.
 * This one shows/hides the an option when a checkbox is clicked.
 *
 * You can delete it if you not using that option
 */
add_action( 'optionsframework_custom_scripts', 'optionsframework_custom_scripts' );

function optionsframework_custom_scripts() { ?>

<script type="text/javascript">
jQuery(document).ready(function() {

	jQuery('#example_showhidden').click(function() {
  		jQuery('#section-example_text_hidden').fadeToggle(400);
	});

	if (jQuery('#example_showhidden:checked').val() !== undefined) {
		jQuery('#section-example_text_hidden').show();
	}

});
</script>

<?php
}