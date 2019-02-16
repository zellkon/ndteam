<?php
/**
 * Admin  - enqueue sytle, scripts
 */


if ( ! defined( 'ABSPATH' ) ) exit;

if ( ! class_exists( 'HTCC_Enqueue' ) ) :

class HTCC_Enqueue {


    function enqueue( $hook ) {
        
        // echo $hook;
        if( 'toplevel_page_wp-chatbot' == $hook || 'wp-chatbot_page_wp-chatbot-features' == $hook || 'wp-chatbot_page_wp-chatbot-actions' == $hook || 'wp-chatbot_page_wp-chatbot-pro-woo' == $hook ) {
            
            
            // color picker..
            // wp_enqueue_style( 'htcc_admin_color_picker_styles', plugins_url( 'admin/assets/color/colors.css', HTCC_PLUGIN_FILE ), '', HTCC_VERSION );
            // wp_enqueue_script( 'htcc_admin_color_picker_js', plugins_url( 'admin/assets/color/colors.js', HTCC_PLUGIN_FILE ), array( 'jquery', 'wp-color-picker', 'htcc_admin_md_js' ), HTCC_VERSION );

            // spectrum
            wp_enqueue_style( 'htcc_admin_color_picker_styles', 'https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.css', '', HTCC_VERSION );
            wp_enqueue_script( 'htcc_admin_color_picker_js', 'https://cdnjs.cloudflare.com/ajax/libs/spectrum/1.8.0/spectrum.min.js', array( 'jquery' ), HTCC_VERSION, true );



            wp_enqueue_style( 'htcc_admin_styles', plugins_url( 'admin/assets/css/admin-styles.css', HTCC_PLUGIN_FILE ), '', HTCC_VERSION );
            wp_enqueue_style( 'htcc_admin_md_styles', plugins_url( 'admin/assets/css/materialize.min.css', HTCC_PLUGIN_FILE ), '', HTCC_VERSION );
            
            wp_enqueue_style( 'wp-color-picker' );
            wp_enqueue_script( 'wp-color-picker');

            
            wp_enqueue_script( 'htcc_admin_js', plugins_url( 'admin/assets/js/admin.js', HTCC_PLUGIN_FILE ), array( 'wp-color-picker', 'jquery' ), HTCC_VERSION, true );
            wp_enqueue_script( 'htcc_admin_md_js', plugins_url( 'admin/assets/js/materialize.min.js', HTCC_PLUGIN_FILE ), array('wp-color-picker',  'jquery' ), HTCC_VERSION, true );


        }

    }

}

$htcc_enqueue = new HTCC_Enqueue();

add_action('admin_enqueue_scripts', array( $htcc_enqueue, 'enqueue' ) );


endif; // END class_exists check