<?php
/**
 * Ads widget.
 *
 * @package    EasyNote
 * @author     Theme Junkie
 * @copyright  Copyright (c) 2015, Theme Junkie
 * @license    http://www.gnu.org/licenses/gpl-2.0.html
 * @since      1.0.0
 */
class EasyNote_Ads_Widget extends WP_Widget {

	/**
	 * Sets up the widgets.
	 *
	 * @since 1.0.0
	 */
	function __construct() {

		// Set up the widget options.
		$widget_options = array(
			'classname'   => 'widget-easynote-ad ad-widget',
			'description' => __( 'Easily to display any type of ad.', 'easynote' )
		);

		// Create the widget.
		parent::__construct(
			'easynote-ads',                            // $this->id_base
			__( '&raquo; Advertisement', 'easynote' ), // $this->name
			$widget_options                            // $this->widget_options
		);
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

			// Display the ad banner.
			if ( $instance['ad_code'] ) {
				echo '<div class="adwidget">' . stripslashes( $instance['ad_code'] ) . '</div>';
			}

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

		$instance['title']   = strip_tags( $new_instance['title'] );
		$instance['ad_code'] = stripslashes( $new_instance['ad_code'] );

		return $instance;
	}

	/**
	 * Displays the widget control options in the Widgets admin screen.
	 *
	 * @since 1.0.0
	 */
	function form( $instance ) {

		// Default value.
		$defaults = array(
			'title'   => esc_html__( 'Advertisement', 'easynote' ),
			'ad_code' => '',
		);

		$instance = wp_parse_args( (array) $instance, $defaults );
	?>

		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>">
				<?php _e( 'Title:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" value="<?php echo esc_attr( $instance['title'] ); ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'ad_code' ); ?>">
				<?php _e( 'Ad Code:', 'easynote' ); ?>
			</label>
			<textarea class="widefat" name="<?php echo $this->get_field_name( 'ad_code' ); ?>" id="<?php echo $this->get_field_id( 'ad_code' ); ?>" cols="30" rows="6"><?php echo stripslashes( $instance['ad_code'] ); ?></textarea>
		</p>

	<?php

	}

}