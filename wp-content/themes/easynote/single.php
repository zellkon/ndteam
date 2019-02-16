<?php get_header(); ?>

<!-- Site Main / Start -->
<main id="main" class="site-main container<?php easynote_dynamic_sidebar_class(); ?>" role="main" <?php hybrid_attr( 'content' ); ?>><?php /* close on footer.php */ ?>

	<div id="primary" class="content-area">

		<div id="content" class="single loop-blog">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', 'single' ); ?>

				<?php
					// override comment settings from Theme Options
					if ( easynote_option( 'easynote_comment' ) == 'on' ) :
						// If comments are open or we have at least one comment, load up the comment template
						if ( comments_open() || '0' != get_comments_number() ) :
							comments_template();
						endif;
					endif;
				?>

				<?php get_template_part( 'loop', 'nav' ); // Loads the loop-nav.php template  ?>

			<?php endwhile; // end of the loop. ?>

		</div><!-- #content -->

	</div><!-- #primary -->

	<?php get_sidebar(); ?>

	<div class="clearfix"></div>
	
<?php get_footer(); ?>