<?php if ( is_singular( 'post' ) ) : // If viewing a single post page. ?>

	<?php if ( easynote_option( 'easynote_post_navigation' ) == 'on' ) : ?>	

		<?php if ( get_previous_post_link() || get_next_post_link() ) : ?>
			<div class="post-nav">
				<div class="nav-prev">
					<?php previous_post_link( 
						'%link',					
						'<div class="arrow"><i class="fa fa-angle-left"></i></div>'.
						'<div class="nav-text"><span>' . __( 'Previous Post', 'easynote' ) . '</span><h5>%title</h5></div>' 
					); ?>
					
				</div>
				
				<div class="nav-next">
					<?php next_post_link(  
						'%link',
						'<div class="arrow"><i class="fa fa-angle-right"></i></div>' .
						'<div class="nav-text"><span>' . __( 'Next Post', 'easynote' ) . '</span><h5>%title</h5></div>'
						); 
					?>
				</div>
			</div><!-- .loop-nav -->
		<?php endif; ?>
		
	<?php endif; ?>

<?php elseif ( is_home() || is_archive() || is_search() ) : // If viewing the blog, an archive, or search results. ?>

	<?php 
		if ( class_exists( 'Jetpack' ) && Jetpack::is_module_active( 'infinite-scroll' ) ) {
			return;
		}
	?>
	
	<?php the_posts_pagination( array( 
		'prev_text' => _x( '&larr; Prev', 'posts navigation', 'easynote' ),
		'next_text' => _x( 'Next &rarr;', 'posts navigation', 'easynote' )
	) ); ?>

<?php elseif ( is_page_template( 'page-templates/blog.php' ) || is_page_template( 'page-templates/blog-list.php' ) || is_page_template( 'page-templates/blog-grid.php' ) ) : // loop_pagination still used since the_posts_pagination not working for page templates ?>

	<?php 
		if ( class_exists( 'Jetpack' ) && Jetpack::is_module_active( 'infinite-scroll' ) ) {
			return;
		}
	?>

	<?php loop_pagination( array( 
		'prev_text' => _x( '&larr; Prev', 'posts navigation', 'easynote' ),
		'next_text' => _x( 'Next &rarr;', 'posts navigation', 'easynote' )
	) ); ?>

<?php endif; // End check for type of page being viewed. ?>