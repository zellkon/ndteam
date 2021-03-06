<?php get_header(); ?>

<header class="breadcrumbs">
	<?php
		the_archive_title();
		the_archive_description( '<div class="taxonomy-description">', '</div>' );
	?>
</header><!-- .page-header -->

<!-- Site Main / Start -->
<main id="main" class="site-main container<?php easynote_dynamic_sidebar_class(); ?>" role="main" <?php hybrid_attr( 'content' ); ?>><?php /* close on footer.php */ ?>

	<div id="primary" class="content-area">

		<?php if ( have_posts() ) : ?>

			<div id="content">
				<div class="content-loop loop-blog">

				<?php /* Start the Loop */ ?>
				<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'content', get_post_format() ); ?>

				<?php endwhile; ?>

				</div><!-- .content-loop -->

				<?php get_template_part( 'loop', 'nav' ); // Loads the loop-nav.php template ?>

			</div><!-- #content -->

		<?php else : ?>

			<?php get_template_part( 'content', 'none' ); ?>

		<?php endif; ?>

	</div><!-- #primary -->

	<?php get_sidebar(); ?>

	<div class="clearfix"></div>	

<?php get_footer(); ?>