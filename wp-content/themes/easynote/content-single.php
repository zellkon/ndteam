<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> <?php hybrid_attr( 'post' ); ?>>
	
	<?php if ( has_post_format( 'video' ) ) : ?>
		<div class="entry-image video">
			<?php echo hybrid_media_grabber( array( 'type' => 'video', 'split_media' => true ) ); ?>
		</div>
	<?php elseif ( has_post_format( 'audio' ) ) : ?>
		<div class="entry-image audio">
			<?php echo hybrid_media_grabber( array( 'type' => 'audio', 'split_media' => true ) ); ?>
		</div>
	<?php endif; ?>

	<header class="entry-header">
		<?php easynote_entry_taxonomy(); ?>
		<?php easynote_posted_on(); ?>

		<?php the_title( '<h1 class="entry-title" ' . hybrid_get_attr( 'entry-title' ) . '>', '</h2>' ); ?>
	</header><!-- .entry-header -->

	<?php if ( ! has_post_format( 'video' ) && ! has_post_format( 'audio' ) && ! has_post_format( 'image' )) : ?>

		<?php easynote_post_thumbnail( 'large' ); ?>

	<?php endif; ?>

	<div class="entry-content" <?php hybrid_attr( 'entry-content' ); ?>>
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . __( 'Pages:', 'easynote' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<?php easynote_entry_footer(); ?>
	
</article><!-- #post-## -->

<?php easynote_post_author(); ?>

<?php easynote_related_posts(); ?>