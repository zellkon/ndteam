<?php
/**
 * Template Name: Blog Template
 */
get_header(); ?>

<?php get_template_part( 'content', 'featured' ); ?>

<!-- Site Main / Start -->
<main id="main" class="site-main container<?php easynote_dynamic_sidebar_class(); ?>" role="main" <?php hybrid_attr( 'content' ); ?>><?php /* close on footer.php */ ?>

	<div id="primary" class="content-area">

		<?php 
		// more robust condition for $paged
		if ( 0 != get_query_var( 'paged' ) ) {
			$paged = absint( get_query_var( 'paged' ) );
		} elseif ( 0 != get_query_var( 'page' ) ) {
			$paged = absint( get_query_var( 'page' ) );
		} else {
			$paged = 1;
		}

		$args = apply_filters( 'easynote_blog_query', array( 
			'post_type' => 'post',
			'paged' => $paged
		) ); 
		?>
		<?php $blog = new WP_Query( $args ); ?>

		<?php if ( $blog->have_posts() ) : ?>

			<div class="content-loop loop-blog">

				<?php /* Start the Loop */ ?>
				<?php while ( $blog->have_posts() ) : $blog->the_post(); ?>

					<?php get_template_part( 'content', get_post_format() ); ?>

				<?php endwhile; ?>

			</div><!-- .content-loop -->

			<?php 
			// injecting max_num_pages to get the loop_pagination() works
			$wp_query->max_num_pages = $blog->max_num_pages;
			get_template_part( 'loop', 'nav' ); // Loads the loop-nav.php template ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; wp_reset_postdata(); ?>

	</div><!-- #primary -->

	<?php get_sidebar(); ?>

	<div class="clearfix"></div>

<?php get_footer(); ?>