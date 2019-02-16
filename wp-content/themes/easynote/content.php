<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> <?php hybrid_attr( 'post' ); ?>>

	<header class="entry-header">
		<?php easynote_entry_taxonomy(); ?>
		<?php easynote_posted_on(); ?>

		<?php the_title( sprintf( '<h2 class="entry-title" ' . hybrid_get_attr( 'entry-title' ) . '><a href="%s" rel="bookmark" itemprop="url">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	</header><!-- .entry-header -->

	<?php easynote_post_thumbnail( 'large' ); ?>

	<div class="entry-content" <?php hybrid_attr( 'entry-summary' ); ?>>
		<?php the_content(""); ?>
		
	</div><!-- .entry-summary -->

	<?php easynote_entry_footer(); ?>
	
</article><!-- #post-## -->
