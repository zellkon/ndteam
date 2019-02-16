<?php
/**
 * Recent Posts with Thumbnail widget.
 *
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */
class EasyNote_Recent_Widget extends WP_Widget {

	/**
	 * Sets up the widgets.
	 *
	 * @since 1.0.0
	 */
	function __construct() {

		// Set up the widget options.
		$widget_options = array(
			'classname'   => 'widget-easynote-recent widget_posts_thumbnail',
			'description' => __( 'Display recent posts with thumbnails.', 'easynote' )
		);

		// Create the widget.
		parent::__construct(
			'easynote-recent',                                   // $this->id_base
			__( '&raquo; Recent Posts Thumbnails', 'easynote' ), // $this->name
			$widget_options                                      // $this->widget_options
		);

		// Flush the transient.
		add_action( 'save_post'   , array( $this, 'flush_widget_transient' ) );
		add_action( 'deleted_post', array( $this, 'flush_widget_transient' ) );
		add_action( 'switch_theme', array( $this, 'flush_widget_transient' ) );

	}

	/**
	 * Outputs the widget based on the arguments input through the widget controls.
	 *
	 * @since 1.0.0
	 */
	function widget( $args, $instance ) {
		extract( $args );

		// Output the theme's $before_widget wrapper.
		echo $before_widget;

		// If the title not empty, display it.
		if ( $instance['title'] ) {
			echo $before_title . apply_filters( 'widget_title', $instance['title'], $instance, $this->id_base ) . $after_title;
		}

		// Display the recent posts.
		if ( false === ( $recent = get_transient( 'easynote_recent_widget_' . $this->id ) ) ) {

			// Posts query arguments.
			$args = array(
				'post_type'           => 'post',
				'posts_per_page'      => $instance['limit'],
				'ignore_sticky_posts' => true
			);

			// The post query
			$recent = new WP_Query( $args );

			// Store the transient.
			set_transient( 'easynote_recent_widget_' . $this->id, $recent );

		}

		global $post;
		if ( $recent->have_posts() ) {
			echo '<ul>';

				while ( $recent->have_posts() ) :
					$recent->the_post();

					echo '<li>';
						echo '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . get_the_post_thumbnail( get_the_ID(), 'easynote-widget-thumb', array( 'class' => 'entry-thumbnail', 'alt' => esc_attr( get_the_title() ) ) ) . '</a>';
						echo '<a href="' . esc_url( get_permalink() ) . '" rel="bookmark">' . esc_attr( get_the_title() ) . '</a>';
						if ( $instance['show_date'] ) :
							echo '<time class="entry-date" datetime="' . esc_html( get_the_date( 'c' ) ) . '">' . esc_html( get_the_date() ) . '</time>';
						endif;
					echo '</li>';

				endwhile;

			echo '</ul>';
		}

		// Reset the query.
		wp_reset_postdata();
		
		// Close the theme's widget wrapper.
		echo $after_widget;

	}

	/**
	 * Updates the widget control options for the particular instance of the widget.
	 *
	 * @since 1.0.0
	 */
	function update( $new_instance, $old_instance ) {

		$instance = $new_instance;
		$instance['title']     = strip_tags( $new_instance['title'] );
		$instance['limit']     = (int) $new_instance['limit'];
		$instance['show_date'] = isset( $new_instance['show_date'] ) ? (bool) $new_instance['show_date'] : false;

		// Delete our transient.
		$this->flush_widget_transient();

		return $instance;
	}

	/**
	 * Flush the transient.
	 *
	 * @since  1.0.0
	 */
	function flush_widget_transient() {
		delete_transient( 'easynote_recent_widget_' . $this->id );
	}

	/**
	 * Displays the widget control options in the Widgets admin screen.
	 *
	 * @since 1.0.0
	 */
	function form( $instance ) {

		// Default value.
		$defaults = array(
			'title'     => esc_html__( 'Recent Posts', 'easynote' ),
			'limit'     => 5,
			'show_date' => false
		);

		$instance = wp_parse_args( (array) $instance, $defaults );
	?>

		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>">
				<?php _e( 'Title', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo esc_attr( $instance['title'] ); ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'limit' ); ?>">
				<?php _e( 'Number of posts to show', 'easynote' ); ?>
			</label>
			<input class="small-text" id="<?php echo $this->get_field_id( 'limit' ); ?>" name="<?php echo $this->get_field_name( 'limit' ); ?>" type="number" step="1" min="0" value="<?php echo (int)( $instance['limit'] ); ?>" />
		</p>

		<p>
			<input class="checkbox" type="checkbox" <?php checked( $instance['show_date'] ); ?> id="<?php echo $this->get_field_id( 'show_date' ); ?>" name="<?php echo $this->get_field_name( 'show_date' ); ?>" />
			<label for="<?php echo $this->get_field_id( 'show_date' ); ?>">
				<?php _e( 'Display post date?', 'easynote' ); ?>
			</label>
		</p>

	<?php

	}

}