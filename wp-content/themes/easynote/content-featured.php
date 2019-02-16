<?php
// Data from theme options.
$enable = easynote_option( 'easynote_featured_toggle' );
$tag    = easynote_option( 'easynote_featured_tag' );
$num    = easynote_option( 'easynote_featured_num' );

// Check if it enabled.
if ( $enable == 'off' ) {
	return;
}

// Posts query arguments.
$args = array(
	'post_type'           => 'post',
	'posts_per_page'      => absint( $num ),
	'ignore_sticky_posts' => 1
);

// Limit to tag based on user selected tag.
if ( ! empty( $tag ) ) {
	$args['tag_id'] = $tag;
}

// Allow dev to filter the post arguments.
$query = apply_filters( 'easynote_featured_args', $args );

// The post query.
$featured = new WP_Query( $query );

// initial bg color for image placeholder
$bg_color = 333;

// Check if the post(s) exist.
if ( $featured->have_posts() ) : ?>

	<div id="owl-demo" class="owl-carousel owl-theme">

		<?php while ( $featured->have_posts() ) : $featured->the_post(); ?>

			<div class="item">

				<a href="<?php the_permalink(); ?>" rel="bookmark">
					<?php if ( has_post_thumbnail() ) : ?>
						<?php the_post_thumbnail( 'easynote-featured', array( 'class' => 'entry-thumbnail', 'alt' => esc_attr( get_the_title() ) ) ); ?>
					<?php else : ?>
						<img class="entry-thumbnail" width="960" height="640" src="<?php echo esc_url( '//placehold.it/960x640/' . $bg_color . '/?text=' . urlencode( get_the_title() ) ); ?>" alt="<?php the_title_attribute(); ?>" />
						<?php $bg_color = ( $bg_color == 333 ) ? 666 : 333; // switch bg_color ?>
					<?php endif; ?>
				</a>

				<div class="item-overlay">
					<div class="item-text">
						<?php the_title( sprintf( '<h2 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
						<?php easynote_entry_taxonomy(); ?>
						<?php easynote_posted_on(); ?>
					</div>
				</div>
			</div>

		<?php endwhile; ?>

	</div><!-- #owl-demo -->

<?php endif; // End check.

// Restore original Post Data.
wp_reset_postdata();