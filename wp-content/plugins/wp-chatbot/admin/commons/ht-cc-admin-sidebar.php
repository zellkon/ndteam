<?php
/**
 * sidebar in admin area - plugin settings page.
 * 
 * @uses at settings_page.php
 * 
 */

if ( ! defined( 'ABSPATH' ) ) exit;

?>




<!-- Premium plugin Content -->
<div class="service-content" style="display: none;"  >
    <br><br>

        
        <div class="row">
            <div class="col s12 m6   offset-s2 offset-m3 offset-xl2">


                <!-- docs -->
                <div class="links">
                    <p>Documentation</p>
                    <p><a target="_blank" href="https://www.holithemes.com/wp-chatbot/wp-chatbot-settings/?utm_source=wp-chatbot&utm_medium=admin-page">WP-Chatbot Settings</a></p>
                    <p><a target="_blank" href="https://www.holithemes.com/wp-chatbot/basic-troubleshooting/?utm_source=wp-chatbot&utm_medium=admin-page">Basic Troubleshooting</a></p>
                </div>
                <br>


                <?php

                // dont display on pro version
                if ( 'true' !== HTCC_PRO ) {
                ?>

                <!-- premium plugin card -->
                <div class="card blue-grey darken-1">
                    <div class="card-content white-text">

                        <span class="card-title">WP-Chatbot Pro</span>
                        <br>

                        <p>Change Messenger <br>
                        - Icon Position <br>
                        - Greetings Dialog and Chat Window Position<br>
                        Different Settings per Device ( Mobile, Desktop ) </p>
                        <br>

                        <p>Call Customer Chat SDK<br>
                        - at any time after page loads </p>
                        <br>

                        <p>Display Messenger <br>
                        - After Some Time Delay, <br>
                        - After user Scroll down the page <br>
                        Different Settings per Device ( Mobile, Desktop ) </p>
                        <br>

                        <p>Set Greetings text Dialog<br>
                        - based on time range (like working hours or not)<br>
                        - based on days in a week (like working days or not) <br>
                        ( Online / Offline feature )</p>
                        <br>

                        <p>option to not Load Messenger on <br>
                        - Selected Days in a Week ( like Weekends ) <br>
                        - Selected Time Range ( like non working hours ) <br>
                        ( Online / Offline feature )</p>
                        <br>
                        
                        <p>Update Greetings, REF on Fly <br>
                        - based on Time <br>
                        - based on user Scroll down the page <br>
                        - based on Clicks</p>
                        <br>

                        <p>Actions - Show, Hide - Icon, Greetings Dialog<br>
                        - based on Time <br>
                        - based on user Scroll down the page <br>
                        - based on Clicks</p>
                        <br>
                        
                        <p>Click Actions - When Clicked on Button/ Element <br>
                        - Show - Icon, Greetings Dialog <br>
                        - Hide - Icon, Greetings Dialog <br> 
                        - Update Greetings, REF </p>
                        <br>

                        <p>WooCommerce - Separate Settings page<br>
                        - Greetings Dialog, REF, Page ID, Color <br> 
                        plan to expand to a lot of features </p>
                        <br>

                        <p>Placeholders for Greetings Dialog, REF <br>
                        - {{product}} - to add WooCommerce product name  
                            in Greeting Dialog, REF Attribute <br> 
                        - {{title}} -  to add page title in REF Attribute  <br> 
                        - {{id}} - to add the page ID in REF Attribute  </p>
                        <br>

                        <!-- <p>( planning to expand a lot of Features, Especially related to WooCommerce )</p> -->
                        <p>More Features Included</p>
                        <br>

                        <p>One Time Payment, Lifetime updates</p>
                        <p></p>
                    </div>
                    <div class="card-action">
                        <a target="_blank" href="https://www.holithemes.com/wp-chatbot/pro/?utm_source=wp-chatbot&utm_medium=admin-page">WP-Chatbot PRO</a><br><br>
                        
                        <!-- <a target="_blank" href="https://www.holithemes.com/shop/product/wp-chatbot-pro-single-website-plan/?utm_source=wp-chatbot&utm_medium=admin-page">Single Website plan</a><br><br> -->
                        <!-- <a target="_blank" href="https://www.holithemes.com/shop/product/wp-chatbot-pro-unlimited-website-plan/?utm_source=wp-chatbot&utm_medium=admin-page">Unlimited Website plan</a> -->
                    </div>
                </div>

                <?php
                }
                ?>
                
                <small class="close" onclick="ht_cc_admin_hide_services_content()" style="cursor: pointer;">Hide this box</small>

            </div>

        </div>



        <!-- <br><hr><br> -->

        <!-- <p>Busy, someone to setup the plugin</p>
        <div class="wpchatbot-setup">
            <h2>We will setup the plugin for US$ 10</h2>
            <li>Setup the Required things, to appear messenger on your Website.</li>
            <li>modify the plugin settings based on your requirement</li>
            <p>Pay US$ 10, After the setup has done</p>
            <p>To start the project please <a target="_blank" href="https://www.messenger.com/t/holithemes?ref=wp-chabot-setup">message us</a> </p>
        </div> -->

        
</div>
