<form method="get" class="searchform" id="searchform" action="<?php echo esc_url( home_url( '/' ) ); ?>" role="search">
	<div>
		<input type="text" class="field" name="s" id="search" value="<?php echo esc_attr( get_search_query() ); ?>" placeholder="<?php esc_attr_e( 'Search for &hellip;', 'easynote' ); ?>">
		<button class="btn" type="submit"><?php _e( 'Search', 'easynote' ); ?></button>
	</div>
</form>