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
class EasyNote_Ads_Grid_Widget extends WP_Widget {

	/**
	 * Sets up the widgets.
	 *
	 * @since 1.0.0
	 */
	function __construct() {

		// Set up the widget options.
		$widget_options = array(
			'classname'   => 'widget-easynote-ad-grid widget_125',
			'description' => __( 'Display ads in a grid.', 'easynote' )
		);

		// Create the widget.
		parent::__construct(
			'easynote-ads-grid',                            // $this->id_base
			__( '&raquo; Advertisement Grid', 'easynote' ), // $this->name
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
		?>

		<?php if ( $instance['ad_grid_1_image'] ) : ?>
			<a href="<?php echo esc_url( $instance['ad_grid_1_link'] ); ?>" title="<?php echo esc_attr( $instance['ad_grid_1_title'] ); ?>">
				<img src="<?php echo esc_url( $instance['ad_grid_1_image'] ); ?>" alt="<?php echo esc_attr( $instance['ad_grid_1_title'] ); ?>" />
			</a>
		<?php endif; ?>

		<?php if ( $instance['ad_grid_2_image'] ) : ?>
			<a href="<?php echo esc_url( $instance['ad_grid_2_link'] ); ?>" title="<?php echo esc_attr( $instance['ad_grid_2_title'] ); ?>">
				<img class="img-right" src="<?php echo esc_url( $instance['ad_grid_2_image'] ); ?>" alt="<?php echo esc_attr( $instance['ad_grid_2_title'] ); ?>" />
			</a>
		<?php endif; ?>

		<?php if ( $instance['ad_grid_3_image'] ) : ?>
			<a href="<?php echo esc_url( $instance['ad_grid_3_link'] ); ?>" title="<?php echo esc_attr( $instance['ad_grid_3_title'] ); ?>">
				<img src="<?php echo esc_url( $instance['ad_grid_3_image'] ); ?>" alt="<?php echo esc_attr( $instance['ad_grid_3_title'] ); ?>" />
			</a>
		<?php endif; ?>

		<?php if ( $instance['ad_grid_4_image'] ) : ?>
			<a href="<?php echo esc_url( $instance['ad_grid_4_link'] ); ?>" title="<?php echo esc_attr( $instance['ad_grid_4_title'] ); ?>">
				<img class="img-right" src="<?php echo esc_url( $instance['ad_grid_4_image'] ); ?>" alt="<?php echo esc_attr( $instance['ad_grid_4_title'] ); ?>" />
			</a>
		<?php endif; ?>

		<?php
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

		$instance['title']           = strip_tags( $new_instance['title'] );
		$instance['ad_grid_1_link']  = stripslashes( $new_instance['ad_grid_1_link'] );
		$instance['ad_grid_1_image'] = stripslashes( $new_instance['ad_grid_1_image'] );
		$instance['ad_grid_1_title'] = stripslashes( $new_instance['ad_grid_1_title'] );
		$instance['ad_grid_2_link']  = stripslashes( $new_instance['ad_grid_2_link'] );
		$instance['ad_grid_2_image'] = stripslashes( $new_instance['ad_grid_2_image'] );
		$instance['ad_grid_2_title'] = stripslashes( $new_instance['ad_grid_2_title'] );
		$instance['ad_grid_3_link']  = stripslashes( $new_instance['ad_grid_3_link'] );
		$instance['ad_grid_3_image'] = stripslashes( $new_instance['ad_grid_3_image'] );
		$instance['ad_grid_3_title'] = stripslashes( $new_instance['ad_grid_3_title'] );
		$instance['ad_grid_4_link']  = stripslashes( $new_instance['ad_grid_4_link'] );
		$instance['ad_grid_4_image'] = stripslashes( $new_instance['ad_grid_4_image'] );
		$instance['ad_grid_4_title'] = stripslashes( $new_instance['ad_grid_4_title'] );

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
			'ad_grid_1_link' => '',
			'ad_grid_1_image' => '',
			'ad_grid_1_title' => '',
			'ad_grid_2_link' => '',
			'ad_grid_2_image' => '',
			'ad_grid_2_title' => '',
			'ad_grid_3_link' => '',
			'ad_grid_3_image' => '',
			'ad_grid_3_title' => '',
			'ad_grid_4_link' => '',
			'ad_grid_4_image' => '',
			'ad_grid_4_title' => '',
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
			<label for="<?php echo $this->get_field_id( 'ad_grid_1_link' ); ?>">
				<?php _e( 'Ads Link 1:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_1_link' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_1_link' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_1_link'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_1_image' ); ?>">
				<?php _e( 'Ads Image Link 1:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_1_image' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_1_image' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_1_image'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_1_title' ); ?>">
				<?php _e( 'Ads Title 1:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_1_title' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_1_title' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_1_title'] ); ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_2_link' ); ?>">
				<?php _e( 'Ads Link 2:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_2_link' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_2_link' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_2_link'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_2_image' ); ?>">
				<?php _e( 'Ads Image Link 2:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_2_image' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_2_image' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_2_image'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_2_title' ); ?>">
				<?php _e( 'Ads Title 2:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_2_title' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_2_title' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_2_title'] ); ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_3_link' ); ?>">
				<?php _e( 'Ads Link 3:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_3_link' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_3_link' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_3_link'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_3_image' ); ?>">
				<?php _e( 'Ads Image Link 3:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_3_image' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_3_image' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_3_image'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_3_title' ); ?>">
				<?php _e( 'Ads Title 3:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_3_title' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_3_title' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_3_title'] ); ?>" />
		</p>

		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_4_link' ); ?>">
				<?php _e( 'Ads Link 4:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_4_link' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_4_link' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_4_link'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_4_image' ); ?>">
				<?php _e( 'Ads Image Link 4:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_4_image' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_4_image' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_4_image'] ); ?>" />
		</p>
		<p>
			<label for="<?php echo $this->get_field_id( 'ad_grid_4_title' ); ?>">
				<?php _e( 'Ads Title 4:', 'easynote' ); ?>
			</label>
			<input type="text" class="widefat" id="<?php echo $this->get_field_id( 'ad_grid_4_title' ); ?>" name="<?php echo $this->get_field_name( 'ad_grid_4_title' ); ?>" value="<?php echo esc_attr( $instance['ad_grid_4_title'] ); ?>" />
		</p>

	<?php
	}

}