<article id="post-<?php the_ID(); ?>" <?php post_class(); ?> <?php hybrid_attr( 'post' ); ?>>

	<header class="entry-header">
		<?php easynote_entry_taxonomy(); ?>
		<?php easynote_posted_on(); ?>

		<?php the_title( sprintf( '<h2 class="entry-title" ' . hybrid_get_attr( 'entry-title' ) . '><a href="%s" rel="bookmark" itemprop="url">', esc_url( get_permalink() ) ), '</a></h2>' ); ?>
	</header><!-- .entry-header -->

	<?php $video = hybrid_media_grabber( array( 'type' => 'video', 'split_media' => true ) ); ?>
	<?php if ( $video ) :  ?>
		<div class="entry-image video"><?php echo $video; ?></div>
	<?php endif; ?>

	<div class="entry-content" <?php hybrid_attr( 'entry-summary' ); ?>>
		<?php the_content(""); ?>
		<a class="more-link" href="<?php the_permalink(); ?>"><?php apply_filters( 'easynote_readmore_text', _e( 'Read More &rarr;', 'easynote' ) ); ?></a>
	</div><!-- .entry-summary -->

	<?php easynote_entry_footer(); ?>
	
</article><!-- #post-## -->
