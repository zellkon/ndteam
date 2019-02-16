<div id="content" class="single loop-blog">
	<section class="no-results not-found">

		<article class="hentry">
			<div class="entry-content">

			<?php if ( is_home() && current_user_can( 'publish_posts' ) ) : ?>

				<p><?php printf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'easynote' ), esc_url( admin_url( 'post-new.php' ) ) ); ?></p>

			<?php elseif ( is_search() ) : ?>

				<p><?php _e( 'Sorry, but nothing matched your search terms. Please try again with some different keywords.', 'easynote' ); ?></p>
				<?php get_search_form(); ?>

			<?php else : ?>

				<p><?php _e( 'It seems we can&rsquo;t find what you&rsquo;re looking for. Perhaps searching can help.', 'easynote' ); ?></p>
				<?php get_search_form(); ?>

			<?php endif; ?>

			</div><!-- .entry-content -->
		</article><!-- .hentrysear -->

	</section><!-- .no-results -->
</div><!-- #content -->