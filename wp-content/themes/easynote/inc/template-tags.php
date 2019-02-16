<?php
/**
 * Custom template tags for this theme.
 * Eventually, some of the functionality here could be replaced by core features.
 * 
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */

/**
 * Wrap Theme Options getter function
 * useful for switching between Theme Options lib/framework
 */
function easynote_option( $name ) {
	return of_get_option( $name, of_get_default( $name ) );
}

if ( ! function_exists( 'easynote_site_branding' ) ) :
/**
 * Site branding for the site.
 * 
 * Display site title by default, but user can change it with their custom logo.
 * They can upload it on Customizer page.
 * 
 * @since  1.0.0
 */
function easynote_site_branding() {

	// Check if logo available, then display it.
	if ( of_get_option( 'easynote_logo' ) ) :
		echo '<div id="logo" itemscope itemtype="http://schema.org/Brand">' . "\n";
			echo '<a href="' . esc_url( get_home_url() ) . '" itemprop="url" rel="home">' . "\n";
				echo '<img itemprop="logo" src="' . esc_url( of_get_option( 'easynote_logo' ) ) . '" alt="' . esc_attr( get_bloginfo( 'name' ) ) . '" />' . "\n";
			echo '</a>' . "\n";
		echo '</div>' . "\n";

	// If not, then display the Site Title and Site Description.
	else :
		echo '<div id="logo">'. "\n";
			echo '<h1 class="site-title" ' . hybrid_get_attr( 'site-title' ) . '><a href="' . esc_url( get_home_url() ) . '" itemprop="url" rel="home"><span itemprop="headline">' . esc_attr( get_bloginfo( 'name' ) ) . '</span></a></h1>'. "\n";
			if ( of_get_option( 'easynote_site_desc', 'on' ) == 'on' ) :
				echo '<p class="site-description" ' . hybrid_get_attr( 'site-description' ) . '>' . esc_attr( get_bloginfo( 'description' ) ) . '</p>';
			endif;
		echo '</div>'. "\n";
	endif;

}
endif;

if ( ! function_exists( 'easynote_header_ad' ) ) {
	/**
	 * Header ad.
	 *
	 * @since  1.0.0
	 */
	function easynote_header_ad() {

		// Get the ad code.
		$ad = easynote_option( 'easynote_header_ads' );

		// Display the ad.
		if ( ! empty( $ad ) ) {
			echo '<div class="header-ad">' . stripslashes( $ad ) . '</div>';
		}

	}
}

if ( ! function_exists( 'easynote_post_thumbnail' ) ) :
/**
 * Custom post thumbnail size.
 * 
 * @since  1.0.0
 */
function easynote_post_thumbnail( $size='full' ) {
	if ( easynote_option( 'easynote_featured_image' ) == 'on' ) :

		if ( has_post_thumbnail() ) {

			$image = get_the_post_thumbnail( get_the_ID(), $size, array( 'class' => 'entry-thumbnail', 'alt' => esc_attr( get_the_title() ) ) );

			if ( is_single() ) {
				$image_html = $image;
			} else {
				$image_html = sprintf( '<a class="img-link" href="%1$s" rel="bookmark">%2$s</a>', esc_url( get_permalink() ), $image );
			}

			printf( '<div class="entry-image clearfix">%1$s</div>', $image_html ); ?>
			
			<?php
		}

	endif;
}
endif;

if ( ! function_exists( 'easynote_posted_on' ) ) :
/**
 * Prints HTML with meta information for the current post-date/time and author.
 *
 * @since 1.0.0
 */
function easynote_posted_on() {

	// Hide publish dates and author for Pages on Search
	if ( 'post' != get_post_type() ) 
		return;

	if ( easynote_option( 'easynote_date' ) == 'on' ) :

		$time_string = '<time class="entry-date published" datetime="%1$s" ' . hybrid_get_attr( 'entry-published' ) . '>%2$s</time>';

		$time_string = sprintf( $time_string,
			esc_attr( get_the_date( 'c' ) ),
			esc_html( get_the_date() )
		);

		if ( is_single() ) {
			$time_html = $time_string;
		} else {
			$time_html = sprintf( '<a href="%1$s" rel="bookmark">%2$s</a>', esc_url( get_permalink() ), $time_string );
		}

		printf( '<div class="entry-meta"><span class="entry-date">%1$s</span></div>', $time_string );

	endif;
}
endif;

if ( ! function_exists( 'easynote_entry_taxonomy' ) ) :
/**
 * Prints HTML with Category/Tags for the current post.
 *
 * @since 1.0.0
 */
function easynote_entry_taxonomy() {

	// Hide category (and tag) text for pages on Search
	if ( 'post' != get_post_type() ) 
		return;

	if ( easynote_option( 'easynote_categories' ) == 'on' ) :

		$category = get_the_category( get_the_ID() );
		if ( $category ) :
		?>
			<span class="entry-category" <?php hybrid_attr( 'entry-terms', 'category' ); ?>>
				<a href="<?php echo esc_url( get_category_link( $category[0]->term_id ) ); ?>"><?php echo esc_attr( $category[0]->name ); ?></a>
			</span>
		<?php endif; // End if category ?>

	<?php endif; ?>

	<?php

}
endif;

if ( ! function_exists( 'easynote_entry_tags' ) ) :
/**
 * Prints HTML with Tags for the current post.
 *
 * @since 1.0.0
 */
function easynote_entry_tags() {

	if ( easynote_option( 'easynote_tags' ) == 'on' ) :

		/* translators: used between list items, there is a space after the comma */
		$tags_list = get_the_tag_list( '', __( ', ', 'easynote' ) );
		if ( $tags_list ) :
		?>
			<span class="tags-links" <?php hybrid_attr( 'entry-terms', 'post_tag' ); ?>>
				<?php printf( __( 'Tags: %1$s', 'easynote' ), $tags_list ); ?>
			</span>
		<?php endif; // End if $tags_list ?>

	<?php endif;
}
endif;

/**
 * Returns true if a blog has more than 1 category.
 *
 * @since  1.0.0
 * @return bool
 */
function easynote_categorized_blog() {
	if ( false === ( $all_the_cool_cats = get_transient( 'easynote_categories' ) ) ) {
		// Create an array of all the categories that are attached to posts.
		$all_the_cool_cats = get_categories( array(
			'fields'     => 'ids',
			'hide_empty' => 1,

			// We only need to know if there is more than one category.
			'number'     => 2,
		) );

		// Count the number of categories that are attached to the posts.
		$all_the_cool_cats = count( $all_the_cool_cats );

		set_transient( 'easynote_categories', $all_the_cool_cats );
	}

	if ( $all_the_cool_cats > 1 ) {
		// This blog has more than 1 category so easynote_categorized_blog should return true.
		return true;
	} else {
		// This blog has only 1 category so easynote_categorized_blog should return false.
		return false;
	}
}

/**
 * Flush out the transients used in easynote_categorized_blog.
 *
 * @since 1.0.0
 */
function easynote_category_transient_flusher() {
	if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE ) {
		return;
	}
	// Like, beat it. Dig?
	delete_transient( 'easynote_categories' );
}
add_action( 'edit_category', 'easynote_category_transient_flusher' );
add_action( 'save_post',     'easynote_category_transient_flusher' );


if ( ! function_exists( 'easynote_entry_footer' ) ) :
/**
 * Prints HTML with Comments, Social share, Edit link in the footer
 *
 * @since 1.0.0
 */
function easynote_entry_footer() {
?>
	<footer class="entry-footer clearfix">
		<?php if ( easynote_option( 'easynote_comment' ) == 'on' ) : ?>
			<?php if ( ! post_password_required() && ( comments_open() || '0' != get_comments_number() ) ) : ?>
				<span class="entry-comments"><?php _e( 'Replies: ', 'easynote' ); ?><?php comments_popup_link( 0, 1, '%' ); ?></span>
				<span class="sep">/</span>
			<?php endif; ?>
		<?php endif; ?>

		<?php easynote_share_buttons(); ?>
		
		<?php edit_post_link( __( 'Edit', 'easynote' ), '<span class="sep">/</span><span class="edit-link">', '</span>' ); ?>

		<?php if ( is_single() ) easynote_entry_tags(); ?>
	</footer><!-- .entry-footer -->
	<?php
}
endif; 

if ( ! function_exists( 'easynote_share_buttons' ) ) :
/**
 * Social Share Buttons
 *
 * @since 1.0.0
 */
function easynote_share_buttons() {

	// Bail if user don't want to display the author info via theme settings.
	if ( easynote_option( 'easynote_share_buttons' ) != 'on' ) {
		return;
	}
?>
	<span class="entry-share">
		<?php _e( 'Share:', 'easynote' ); ?>
		<a href="https://twitter.com/intent/tweet?text=<?php echo esc_attr( get_the_title( get_the_ID() ) ); ?>&url=<?php echo urlencode( get_permalink( get_the_ID() ) ); ?>" target="_blank"><i class="fa fa-twitter"></i></a>
		<a href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode( get_permalink( get_the_ID() ) ); ?>" target="_blank"><i class="fa fa-facebook"></i></a>
		<a href="https://plus.google.com/share?url=<?php echo urlencode( get_permalink( get_the_ID() ) ); ?>" target="_blank"><i class="fa fa-google-plus"></i></a>
		<a href="http://pinterest.com/pin/create/button/?url=<?php echo urlencode( get_permalink( get_the_ID() ) ); ?>&media=<?php echo urlencode( wp_get_attachment_url( get_post_thumbnail_id( get_the_ID() ) ) ); ?>" target="_blank"><i class="fa fa-pinterest"></i></a>
	</span>
	<?php
}
endif;

if ( ! function_exists( 'easynote_post_author' ) ) :
/**
 * Author post informations.
 *
 * @since  1.0.0
 */
function easynote_post_author() {

	// Bail if user don't want to display the author info via theme settings.
	if ( of_get_option( 'easynote_author_bio', 'on' ) != 'on' ) {
		return;
	}

	// Bail if not on the single post.
	if ( ! is_single() ) {
		return;
	}

	// Bail if user hasn't fill the Biographical Info field.
	if ( ! get_the_author_meta( 'description' ) ) {
		return;
	}

		// Get the author social information.
		$twitter   = get_the_author_meta( 'twitter' );
		$facebook  = get_the_author_meta( 'facebook' );
		$gplus     = get_the_author_meta( 'gplus' );
		$instagram = get_the_author_meta( 'instagram' );
		$pinterest = get_the_author_meta( 'pinterest' );
?>

	<div class="entry-author" <?php hybrid_attr( 'entry-author' ) ?>>
		<?php echo get_avatar( is_email( get_the_author_meta( 'user_email' ) ), apply_filters( 'easynote_author_bio_avatar_size', 100 ), '', strip_tags( get_the_author() ) ); ?>
		<div class="author-content">
			<h5 class="author-title name">
				<a class="author-name url fn n" href="<?php echo esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ); ?>" rel="author" itemprop="url"><span itemprop="name"><?php echo strip_tags( get_the_author() ); ?></span></a>
			</h5>
			<p class="bio" itemprop="description"><?php echo stripslashes( get_the_author_meta( 'description' ) ); ?></p>

			<?php if ( $twitter || $facebook || $gplus || $instagram || $pinterest ) : ?>
				<div class="social-links">
					<?php if ( $twitter ) { ?>
						<a href="<?php echo esc_url( $twitter ); ?>"><i class="fa fa-twitter"></i></a>
					<?php } ?>
					<?php if ( $facebook ) { ?>
						<a href="<?php echo esc_url( $facebook ); ?>"><i class="fa fa-facebook"></i></a>
					<?php } ?>
					<?php if ( $gplus ) { ?>
						<a href="<?php echo esc_url( $gplus ); ?>"><i class="fa fa-google-plus"></i></a>
					<?php } ?>
					<?php if ( $instagram ) { ?>
						<a href="<?php echo esc_url( $instagram ); ?>"><i class="fa fa-instagram"></i></a>
					<?php } ?>
					<?php if ( $pinterest ) { ?>
						<a href="<?php echo esc_url( $pinterest ); ?>"><i class="fa fa-pinterest"></i></a>
					<?php } ?>
				</div>
			<?php endif; ?>
		</div>
	</div><!-- .entry-author -->

<?php
}
endif;

if ( ! function_exists( 'easynote_related_posts' ) ) :
/**
 * Related posts.
 *
 * @since  1.0.0
 */
function easynote_related_posts() {
	global $post;

	// Bail if user don't want to display the related posts via theme settings.
	if ( of_get_option( 'easynote_related_posts', 'on' ) != 'on' ) {
		return;
	}

	// Get the taxonomy terms of the current page for the specified taxonomy.
	$terms = wp_get_post_terms( $post->ID, 'category', array( 'fields' => 'ids' ) );

	// Bail if the term empty.
	if ( empty( $terms ) ) {
		return;
	}
	
	// Posts query arguments.
	$query = array(
		'post__not_in' => array( $post->ID ),
		'tax_query'    => array(
			array(
				'taxonomy' => 'category',
				'field'    => 'id',
				'terms'    => $terms,
				'operator' => 'IN'
			)
		),
		'posts_per_page' => 3,
		'post_type'      => 'post',
	);

	// Allow dev to filter the query.
	$args = apply_filters( 'easynote_related_posts_args', $query );

	// The post query
	$related = new WP_Query( $args );

	if ( $related->have_posts() ) : ?>

		<div class="entry-related">
			<h3 class="block-title"><span><?php _e( 'You might also like &hellip;', 'easynote' ); ?></span></h3>
			<ul class="clearfix">
				<?php while ( $related->have_posts() ) : $related->the_post(); ?>
					<li>
						<?php if ( of_get_option( 'easynote_related_posts_thumbnail', 'on' ) == 'on' && has_post_thumbnail() ) : ?>
							<a href="<?php the_permalink(); ?>">
								<?php the_post_thumbnail( 'medium', array( 'alt' => esc_attr( get_the_title() ) ) ); ?>
							</a>
						<?php endif; ?>
						<?php the_title( sprintf( '<h2 class="entry-title" ' . hybrid_get_attr( 'entry-title' ) . '><a href="%s" rel="bookmark" itemprop="url">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
						<?php if ( of_get_option( 'easynote_related_posts_date', 'on' ) == 'on' ) : ?>
							<div class="entry-meta">
								<time class="entry-date published" datetime="<?php echo esc_attr( get_the_date( 'c' ) ); ?>"><?php echo esc_html( get_the_date() )?></time>
							</div>
						<?php endif; ?>
					</li>
				<?php endwhile; ?>
			</ul>
		</div>
	
	<?php endif;

	// Restore original Post Data.
	wp_reset_postdata();

}
endif;

if ( ! function_exists( 'easynote_comment' ) ) :
/**
 * Template for comments and pingbacks.
 *
 * Used as a callback by wp_list_comments() for displaying the comments.
 *
 * @since  1.0.0
 */
function easynote_comment( $comment, $args, $depth ) {
	$GLOBALS['comment'] = $comment;
	switch ( $comment->comment_type ) :
		case 'pingback' :
		case 'trackback' :
		// Display trackbacks differently than normal comments.
	?>
	<li <?php comment_class(); ?> id="comment-<?php comment_ID(); ?>" <?php hybrid_attr( 'comment' ); ?>>
		<article id="comment-<?php comment_ID(); ?>" class="comment-wrapper">
			<p <?php hybrid_attr( 'comment-content' ); ?>><?php _e( 'Pingback:', 'easynote' ); ?> <span <?php hybrid_attr( 'comment-author' ); ?>><span itemprop="name"><?php comment_author_link(); ?></span></span> <?php edit_comment_link( __( '(Edit)', 'easynote' ), '<span class="edit-link">', '</span>' ); ?></p>
		</article>
	<?php
			break;
		default :
		// Proceed with normal comments.
		global $post;
	?>
	<li <?php comment_class(); ?> id="li-comment-<?php comment_ID(); ?>" <?php hybrid_attr( 'comment' ); ?>>
		<article id="comment-<?php comment_ID(); ?>" class="comment-wrapper">

			<div class="comment-avatar">
				<figure>
					<?php echo get_avatar( $comment, apply_filters( 'easynote_comment_avatar_size', 64 ) ); ?>
				</figure>
			</div>

			<div class="comment-detail">
				<div class="comment-name number">
					<span class="name" <?php hybrid_attr( 'comment-author' ); ?>><span itemprop="name"><?php echo get_comment_author_link(); ?></span></span>				
				<?php
					printf( '<span class="comment-date"><a href="%1$s" ' . hybrid_get_attr( 'comment-permalink' ) . '><time datetime="%2$s" ' . hybrid_get_attr( 'comment-published' ) . '>%3$s</time></a> %4$s</span>',
						esc_url( get_comment_link( $comment->comment_ID ) ),
						get_comment_time( 'c' ),
						/* translators: 1: date, 2: time */
						sprintf( __( '%1$s at %2$s', 'easynote' ), get_comment_date(), get_comment_time() ),
						sprintf( __( '%1$s&middot; Edit%2$s', 'easynote' ), '<a href="' . get_edit_comment_link() . '" title="' . esc_attr__( 'Edit Comment', 'easynote' ) . '">', '</a>' )
					);
				?>
				</div>
			
				<div class="comment-description comment-entry comment" <?php hybrid_attr( 'comment-content' ); ?>>
					<?php if ( '0' == $comment->comment_approved ) : ?>
						<p class="comment-awaiting-moderation"><?php _e( 'Your comment is awaiting moderation.', 'easynote' ); ?></p>
					<?php endif; ?>
					<?php comment_text(); ?>
					<span class="reply">
						<?php comment_reply_link( array_merge( $args, array( 'reply_text' => __( 'Reply', 'easynote' ), 'depth' => $depth, 'max_depth' => $args['max_depth'] ) ) ); ?>
					</span><!-- .reply -->
				</div><!-- .comment-content -->

			</div><!-- .comment-detail -->

		</article><!-- #comment-## -->
	<?php
		break;
	endswitch; // end comment_type check
}
endif;

if ( ! function_exists( 'easynote_get_first_image' ) ) :
/**
* Return an HTML img tag for the first image in a post content. Used to draw
* the content for posts of the “image” format.
* http://css-tricks.com/snippets/wordpress/get-the-first-image-from-a-post/#comment-1582091 --> not working
* http://www.wprecipes.com/how-to-get-the-first-image-from-the-post-and-display-it
*
* @return string An HTML img tag for the first image in a post content.
*/
function easynote_get_first_image( $size='full', $echo=true ) {

	if ( has_post_thumbnail() )
		return easynote_post_thumbnail( $size );

	// Expose information about the current post.
	global $post;

	// We'll trap to see if this stays empty later in the function.
	$src = '';

	// Grab all img src's in the post content
	// $output = preg_match_all( '//i', $post->post_content, $matches ); // not working
	$output = preg_match_all('/<img.+src=[\'"]([^\'"]+)[\'"].*>/i', $post->post_content, $matches);

	// Grab the first img src returned by our regex.
	// if ( ! isset ( $matches[1][0] ) ) { return false; }
	// $src = $matches[1][0];

	// Grab the first <img> complete markup returned by our regex.
	if ( ! isset ( $matches[0][0] ) ) { return false; }
	$src = $matches[0][0];

	// Make sure there's still something worth outputting after sanitization.
	if ( empty( $src ) ) { return false; }

	// add wrapper
	$content = '<div class="entry-image clearfix">';
		$content .= '<a class="img-link" href="' . get_the_permalink() . '">';
			$content .= $src;
		$content .= '</a>';
	$content .= '</div>';

	// choose whether to echo the result or return it as variable
	if ( true == $echo )
		echo $content;
	else
		return $content;

}
endif;

if ( ! function_exists( 'easynote_get_format_gallery' ) ) :
	/**
	 * Get the [gallery] shortcode from the post content and display it on index page. It require
	 * gallery ids [gallery ids=1,2,3,4] to display it as thumbnail slideshow. If no ids exist it
	 * just display it as standard [gallery] markup.
	 *
	 * If no [gallery] shortcode found in the post content, get the attached images to the post and 
	 * display it as slideshow.
	 * 
	 * @since  1.0.0
	 * @uses   get_post_gallery() to get the gallery in the post content.
	 * @uses   wp_get_attachment_image() to get the HTML image.
	 * @uses   get_children() to get the attached images if no [gallery] found in the post content.
	 * @return string
	 */
	function easynote_get_format_gallery() {
		global $post;

		// Set up a default, empty $html variable.
		$html = '';

		// Set up default image size.
		$size = 'large';

		// Check the [gallery] shortcode in post content.
		$gallery = get_post_gallery( $post->ID, false );

		// opening wrapper
		$html = '<div class="entry-image">';
			$html .= '<ul class="bxslider">';

		// Check if the [gallery] exist.
		if ( $gallery ) {

			// Check if the gallery ids exist.
			if ( isset( $gallery['ids'] ) ) {

				// Get the gallery ids and convert it into array.
				$ids = explode( ',', $gallery['ids'] );

				// Display the gallery in a cool slideshow on index page.
				foreach( $ids as $id ) {
					$html .= '<li>';
					$html .= wp_get_attachment_image( $id, $size, false, array( 'class' => 'entry-thumbnail' ) );
					$html .= '</li>';
				}

			} else {

				// If gallery ids not exist, display the standard gallery markup.
				// avoid this, since it'll look bad
				// $html = get_post_gallery( $post->ID );

				// if gallery based on images attached to post (only [gallery] in post content)
				// note: in the post content, better to use: [gallery size="large"] or [gallery size="full"]
				$srcs = $gallery['src'];

				// Display the gallery in a cool slideshow on index page.
				foreach( $srcs as $src ) {
					$html .= '<li>';
					$html .= '<img src="' . esc_url( $src ) . '" />';
					$html .= '</li>';
				}

			}

		// If no [gallery] in post content, get attached images to the post.
		} else {

			// Set up default arguments.
			$defaults = array( 
				'order'          => 'ASC',
				'post_type'      => 'attachment',
				'post_parent'    => $post->ID,
				'post_mime_type' => 'image',
				'numberposts'    => -1
			);

			// Retrieves attachments from the post.
			$attachments = get_children( apply_filters( 'easynote_gallery_format_args', $defaults ) );

			// Check if attachments exist.
			if ( $attachments ) {

				// Display the attachment images in a cool slideshow on index page.
				foreach ( $attachments as $attachment ) {
					$html .= '<li>';
					$html .= wp_get_attachment_image( $attachment->ID, $size, false, array( 'class' => 'entry-thumbnail' ) );
					$html .= '</li>';
				}

			} else {

				// if no [gallery] shortcode and has no attachments, bail them out
				return;

			}

		}

		// closing wrapper
			$html .= '</ul>';
		$html .= '</div>';

		// Return the gallery images.
		return $html;

	}
endif;

if ( ! function_exists( 'easynote_get_post_format_link_url' ) ) :
/**
 * Forked from hybrid_get_the_post_format_url.
 * Filters 'get_the_post_format_url' to make for a more robust and back-compatible function.  If WP did 
 * not find a URL, check the post content for one.  If nothing is found, return the post permalink.
 * Used in Post Format Link
 *
 * @since 1.0.0
 */
function easynote_get_post_format_link_url( $url = '', $post = null ) {

	if ( empty( $url ) ) {

		$post = is_null( $post ) ? get_post() : $post;

		/* Catch links that are not wrapped in an '<a>' tag. */
		$content_url = preg_match( '/<a\s[^>]*?href=[\'"](.+?)[\'"]/is', make_clickable( $post->post_content ), $matches );

		$content_url = ! empty( $matches[1] ) ? esc_url_raw( $matches[1] ) : '';

		$url = ! empty( $content_url ) ? $content_url : get_permalink( $post->ID );
	}

	if ( $url ) {
	?>
		<h2 class="entry-title">
			<a href="<?php echo esc_url( $url ); ?>" itemprop="url">
				<?php if ( get_the_title() && ( __( '(Untitled)', 'easynote' ) != get_the_title() ) ) { ?>
					<?php the_title(); ?>
				<?php } else { ?>
					<?php echo esc_attr( $url ); ?>
				<?php }	?>
			</a>
		</h2>
	<?php
	}
	
}
endif;

if ( ! function_exists( 'easynote_dynamic_sidebar_class' ) ) :
/**
 * Add has_sidebar to the content area.
 *
 * @since 1.0
 */
function easynote_dynamic_sidebar_class() {
	if ( current_theme_supports( 'theme-layouts' ) && ! is_admin() ) {
		if ( 'layout-2c-l' == theme_layouts_get_layout() || 'layout-2c-r' == theme_layouts_get_layout() ) {
			echo ' has_sidebar';
		}
	}
}
endif;