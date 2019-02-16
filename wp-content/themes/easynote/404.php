<?php get_header(); ?>

<header class="breadcrumbs">
	<h1><?php _e( 'Oops! That page can&rsquo;t be found.', 'easynote' ); ?></h1>
</header><!-- .page-header -->

<!-- Site Main / Start -->
<main id="main" class="site-main container" role="main" <?php hybrid_attr( 'content' ); ?>><?php /* close on footer.php */ ?>

	<div id="primary" class="content-area">

		<div id="content" class="single loop-blog">

			<section class="error-404 not-found">

				<article class="hentry">
					<div class="entry-content">
						
						<p><?php _e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'easynote' ); ?></p>

						<div class="widget"><?php get_search_form(); ?></div> 

						<?php the_widget( 'WP_Widget_Recent_Posts' ); ?>

						<?php if ( easynote_categorized_blog() ) : // Only show the widget if site has multiple categories. ?>
							<div class="widget widget_categories">
								<h2 class="widgettitle"><?php _e( 'Most Used Categories', 'easynote' ); ?></h2>
								<ul>
									<?php
										wp_list_categories( array(
											'orderby'    => 'count',
											'order'      => 'DESC',
											'show_count' => 1,
											'title_li'   => '',
											'number'     => 10,
										) );
									?>
								</ul>
							</div><!-- .widget -->
						<?php endif; ?>

						<?php
							/* translators: %1$s: smiley */
							$archive_content = '<p>' . sprintf( __( 'Try looking in the monthly archives. %1$s', 'easynote' ), convert_smilies( ':)' ) ) . '</p>';
							the_widget( 'WP_Widget_Archives', 'dropdown=1', "after_title=</h2>$archive_content" );
						?>

						<?php the_widget( 'WP_Widget_Tag_Cloud' ); ?>

					</div><!-- .entry-content -->
				</article>

			</section><!-- .error-404 -->

		</div><!-- #content -->

	</div><!-- #primary -->

<?php get_footer(); ?>