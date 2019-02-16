<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> <?php hybrid_attr( 'post' ); ?>>

	<header class="entry-header">
		<?php easynote_entry_taxonomy(); ?>
		<?php easynote_posted_on(); ?>

		<?php easynote_get_post_format_link_url(); ?>
	</header><!-- .entry-header -->

	<?php easynote_post_thumbnail( 'large' ); ?>

	<div class="entry-content" <?php hybrid_attr( 'entry-summary' ); ?>>
		<?php the_content(""); ?>
		<a class="more-link" href="<?php the_permalink(); ?>"><?php apply_filters( 'easynote_readmore_text', _e( 'Read More &rarr;', 'easynote' ) ); ?></a>
	</div><!-- .entry-summary -->

	<?php easynote_entry_footer(); ?>
	
</article><!-- #post-## -->
