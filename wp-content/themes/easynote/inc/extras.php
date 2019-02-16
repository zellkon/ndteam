<?php
/**
 * Custom functions that act independently of the theme templates
 *
 * Eventually, some of the functionality here could be replaced by core features
 *
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */

/**
 * Get our wp_nav_menu() fallback, wp_page_menu(), to show a home link.
 *
 * @since  1.0.0
 * @param  array $args Configuration arguments.
 * @return array
 */
function easynote_page_menu_args( $args ) {
	$args['show_home'] = true;
	return $args;
}
add_filter( 'wp_page_menu_args', 'easynote_page_menu_args' );

/**
 * Adds custom classes to the array of body classes.
 *
 * @since  1.0.0
 * @param  array $classes Classes for the body element.
 * @return array
 */
function easynote_body_classes( $classes ) {

	// Adds a class of group-blog to blogs with more than 1 published author.
	if ( is_multi_author() ) {
		$classes[] = 'group-blog';
	}

	return $classes;
}
add_filter( 'body_class', 'easynote_body_classes' );

/**
 * Adds custom classes to the array of post classes.
 *
 * @since  1.0.0
 * @param  array $classes Classes for the post element.
 * @return array
 */
function easynote_post_classes( $classes ) {

	// Adds a class if a post hasn't a thumbnail.
	if ( ! has_post_thumbnail() ) {
		$classes[] = 'no-post-thumbnail';
	}

	return $classes;
}
add_filter( 'post_class', 'easynote_post_classes' );

if ( version_compare( $GLOBALS['wp_version'], '4.1', '<' ) ) :
	/**
	 * Filters wp_title to print a neat <title> tag based on what is being viewed.
	 *
	 * @param string $title Default title text for current view.
	 * @param string $sep Optional separator.
	 * @return string The filtered title.
	 */
	function easynote_wp_title( $title, $sep ) {
		if ( is_feed() ) {
			return $title;
		}

		global $page, $paged;

		// Add the blog name
		$title .= get_bloginfo( 'name', 'display' );

		// Add the blog description for the home/front page.
		$site_description = get_bloginfo( 'description', 'display' );
		if ( $site_description && ( is_home() || is_front_page() ) ) {
			$title .= " $sep $site_description";
		}

		// Add a page number if necessary:
		if ( ( $paged >= 2 || $page >= 2 ) && ! is_404() ) {
			$title .= " $sep " . sprintf( __( 'Page %s', 'easynote' ), max( $paged, $page ) );
		}

		return $title;
	}
	add_filter( 'wp_title', 'easynote_wp_title', 10, 2 );

	/**
	 * Title shim for sites older than WordPress 4.1.
	 *
	 * @link https://make.wordpress.org/core/2014/10/29/title-tags-in-4-1/
	 * @todo Remove this function when WordPress 4.3 is released.
	 */
	function easynote_render_title() {
		?>
		<title><?php wp_title( '|', true, 'right' ); ?></title>
		<?php
	}
	add_action( 'wp_head', 'easynote_render_title' );
endif;

/**
 * Change the excerpt more string.
 *
 * @since  1.0.0
 * @param  string  $more
 * @return string
 */
function easynote_excerpt_more( $more ) {
	return '&hellip;';
}
add_filter( 'excerpt_more', 'easynote_excerpt_more' );

/**
 * Change the excerpt length (default 55)
 * 
 * @param  int $length
 * @return int
 */
function easynote_custom_excerpt_length( $length ) {
	return 20;
}
add_filter( 'excerpt_length', 'easynote_custom_excerpt_length', 999 );

/**
 * Remove theme-layouts meta box on attachment and bbPress post type.
 * 
 * @since 1.0.0
 */
function easynote_remove_theme_layout_metabox() {
	remove_post_type_support( 'attachment', 'theme-layouts' );
	remove_post_type_support( 'forum', 'theme-layouts' );
	remove_post_type_support( 'topic', 'theme-layouts' );
	remove_post_type_support( 'reply', 'theme-layouts' );
}
add_action( 'init', 'easynote_remove_theme_layout_metabox', 11 );

/**
 * Add post type 'post' support for the Simple Page Sidebars plugin.
 * 
 * @since  1.0.0
 */
function easynote_page_sidebar_plugin() {
	if ( class_exists( 'Simple_Page_Sidebars' ) ) {
		add_post_type_support( 'post', 'simple-page-sidebars' );
	}
}
add_action( 'init', 'easynote_page_sidebar_plugin' );

if ( ! function_exists( 'easynote_get_the_archive_title' ) ) :
/**
 * Filter get_the_archive_title
 * almost like rewriting, don't know if it's better to called directly
 */
function easynote_get_the_archive_title() {

	if ( is_category() ) {
		$title = '<span>' . __( 'Browsing Category', 'easynote' ) . '</span>';
		$title .= '<h1>' . single_cat_title( '', false ) . '</h1>';
	} elseif ( is_tag() ) {
		$title = '<span>' . __( 'Browsing Tag', 'easynote' ) . '</span>';
		$title .= '<h1>' . single_tag_title( '', false ) . '</h1>';
	} elseif ( is_author() ) {
		$title = '<span>' . __( 'Browsing Author', 'easynote' ) . '</span>';
		$title .= '<h1 class="vcard">' . get_the_author() . '</h1>';
	} elseif ( is_year() ) {
		$title = '<span>' . __( 'Browsing Year', 'easynote' ) . '</span>';
		$title .= '<h1>' . get_the_date( _x( 'Y', 'yearly archives date format', 'easynote' ) ) . '</h1>';
	} elseif ( is_month() ) {
		$title = '<span>' . __( 'Browsing Month', 'easynote' ) . '</span>';
		$title .= '<h1>' . get_the_date( _x( 'F Y', 'monthly archives date format', 'easynote' ) ) . '</h1>';
	} elseif ( is_day() ) {
		$title = '<span>' . __( 'Browsing Category', 'easynote' ) . '</span>';
		$title .= '<h1>' . get_the_date( _x( 'F j, Y', 'daily archives date format', 'easynote' ) ) . '</h1>';
	} elseif ( is_tax( 'post_format' ) ) {
		if ( is_tax( 'post_format', 'post-format-aside' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Asides', 'post format archive title', 'easynote' ) . '</h1>';
			$title = _x( 'Asides', 'post format archive title', 'easynote' );
		} elseif ( is_tax( 'post_format', 'post-format-gallery' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Galleries', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-image' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Images', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-video' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Videos', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-quote' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Quotes', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-link' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Links', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-status' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Statuses', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-audio' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Audio', 'post format archive title', 'easynote' ) . '</h1>';
		} elseif ( is_tax( 'post_format', 'post-format-chat' ) ) {
			$title = '<span>' . __( 'Browsing Post Format', 'easynote' ) . '</span>';
			$title .= '<h1>' . _x( 'Chats', 'post format archive title', 'easynote' ) . '</h1>';
		}
	} elseif ( is_post_type_archive() ) {
		$title = '<span>' . __( 'Browsing Archives', 'easynote' ) . '</span>';
		$title .= '<h1>' . post_type_archive_title( '', false ) . '</h1>';
	} elseif ( is_tax() ) {
		$tax = get_taxonomy( get_queried_object()->taxonomy );
		/* translators: 1: Taxonomy singular name, 2: Current taxonomy term */
		$title = '<span>' . sprintf( __( 'Browsing %1$s', 'easynote' ), $tax->labels->singular_name ) . '</span>';
		$title .= '<h1>' . sprintf( __( '%1$s', 'easynote' ), single_term_title( '', false ) ) . '</h1>';
	} else {
		$title = '<h1>' . __( 'Archives', 'easynote' ) . '</h1>';
	}

	return $title;
	
}
add_filter( 'get_the_archive_title', 'easynote_get_the_archive_title' );
endif;

/**
 * Register custom contact info fields.
 *
 * @since  1.0.0
 * @param  array $contactmethods
 * @return array
 */
function easynote_contact_info_fields( $contactmethods ) {
	$contactmethods['twitter']   = __( 'Twitter URL', 'easynote' );
	$contactmethods['facebook']  = __( 'Facebook URL', 'easynote' );
	$contactmethods['gplus']     = __( 'Google Plus URL', 'easynote' );
	$contactmethods['instagram'] = __( 'Instagram URL', 'easynote' );
	$contactmethods['pinterest'] = __( 'Pinterest URL', 'easynote' );

	return $contactmethods;
}
add_filter( 'user_contactmethods', 'easynote_contact_info_fields' );

/**
 * Custom comment form fields.
 *
 * @since  1.0.0
 * @param  array $fields
 * @return array
 */
function easynote_comment_form_fields( $fields, $args = array() ) {

	$args = wp_parse_args( $args );
	if ( ! isset( $args['format'] ) )
		$args['format'] = current_theme_supports( 'html5', 'comment-form' ) ? 'html5' : 'xhtml';

	$commenter = wp_get_current_commenter();
	$req       = get_option( 'require_name_email' );
	$aria_req  = ( $req ? " aria-required='true'" : '' );
	$html5     = 'html5' === $args['format'];

	$fields =  array(
		'author' =>
		'<p class="comment-form-author"><input id="author" class="txt" name="author" type="text" value="' . esc_attr( $commenter['comment_author'] ) . '" size="30"' . $aria_req . ' placeholder="' . __( 'Name', 'easynote' ) . ( $req ? ' *' : '' ) . '" /></p>',

		'email' =>
		'<p class="comment-form-email"><input id="email" class="txt" name="email" type="text" value="' . esc_attr(  $commenter['comment_author_email'] ) . '" size="30"' . $aria_req . ' placeholder="' . __( 'Email', 'easynote' ) . ( $req ? ' *' : '' ) . '" /></p>',

		'url' =>
		'<p class="comment-form-url"><input id="url" class="txt" name="url" type="text" value="' . esc_attr( $commenter['comment_author_url'] ) . '" size="30" placeholder="' . __( 'Website', 'easynote' ) . ( $req ? ' *' : '' ) . '" /></p>',
	);

	return $fields;
}
add_filter( 'comment_form_default_fields', 'easynote_comment_form_fields' );