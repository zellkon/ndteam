<?php
/**
 * Template Name: Blog Grid Template
 */
get_header(); ?>

<?php get_template_part( 'content', 'featured' ); ?>

<!-- Site Main / Start -->
<main id="main" class="site-main container<?php easynote_dynamic_sidebar_class(); ?>" role="main" <?php hybrid_attr( 'content' ); ?>><?php /* close on footer.php */ ?>

	<div id="primary" class="content-area">

		<?php if ( have_posts() ) : ?>

			<?php while ( have_posts() ) : the_post(); ?>

				<div class="content-loop loop-grid clearfix">

					<div class="section-heading">
						<h3 class="heading"><?php the_title(); ?></h3>
						<?php the_content(); ?>
					</div>

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

						<?php /* Start the Loop */ ?>
						<?php while ( $blog->have_posts() ) : $blog->the_post(); ?>

							<?php get_template_part( 'content', 'listgrid' ); ?>

						<?php endwhile; ?>

				</div><!-- .content-loop -->

				<?php 
				// injecting max_num_pages to get the loop_pagination() works
				$wp_query->max_num_pages = $blog->max_num_pages;
				get_template_part( 'loop', 'nav' ); // Loads the loop-nav.php template ?>

					<?php else : ?>

						<?php get_template_part( 'content', 'none' ); ?>

				</div><!-- .content-loop --><?php /* so it not break the layout */ ?>

					<?php endif; wp_reset_postdata(); ?>

			<?php endwhile; ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>	

		<?php endif; ?>

	</div><!-- #primary -->

	<?php get_sidebar(); ?>

	<div class="clearfix"></div>

<?php get_footer(); ?>