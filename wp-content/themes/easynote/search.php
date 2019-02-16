<?php get_header(); ?>

<header class="breadcrumbs">
	<h1>
		<?php if ( have_posts() ) : ?>
			<?php printf( __( 'Search Results for: %s', 'easynote' ), '<em>' . get_search_query() . '</em>' ); ?>
		<?php else: ?>
			<?php _e( 'Nothing Found', 'easynote' ); ?>
		<?php endif; ?>
	</h1>
</header><!-- .page-header -->

<!-- Site Main / Start -->
<main id="main" class="site-main container" role="main" <?php hybrid_attr( 'content' ); ?>><?php /* close on footer.php */ ?>

	<div id="primary" class="content-area">

		<?php if ( have_posts() ) : ?>

			<div class="content-loop loop-blog">

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', get_post_format() ); ?>

				<?php endwhile; ?>

			</div><!-- .content-loop -->

			<?php get_template_part( 'loop', 'nav' ); // Loads the loop-nav.php template ?>

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

	</div><!-- #primary -->

	<?php get_sidebar(); ?>

	<div class="clearfix"></div>
	
<?php get_footer(); ?>
