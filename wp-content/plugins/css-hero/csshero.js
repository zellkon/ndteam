function hero_load_this_config() {
    var csshero_promise = jQuery.Deferred();
    window.csshero_theme_is_configurated = false;
    wcom_card = function(scope, desc) {
        csshero_declare_item(scope, desc);
        csshero_declare_item(scope + ' ul.products li.product > a:not(.button)', desc + ' Main Link');
        csshero_declare_item(scope + ' > h2', desc + ' Area Title');
        csshero_declare_item(scope + ' ul.products', desc + ' List Area');
        csshero_declare_item(scope + ' ul.products li.product', desc + ' Item');
        csshero_declare_item(scope + ' ul.products li.product a img', desc + ' Img');
        csshero_declare_item(scope + ' ul.products li.product h3', desc + ' Title');
        csshero_declare_item(scope + ' ul.products li.product h3 .count', desc + ' Product Count');
        csshero_declare_item(scope + ' ul.products li.product .price', desc + ' Price Area');
        csshero_declare_item(scope + ' ul.products li.product .price del', desc + ' Old Price');
        csshero_declare_item(scope + ' ul.products li.product .price ins', desc + ' New Price');
        csshero_declare_item(scope + ' ul.products li.product a.button', desc + ' Buttons');
        csshero_declare_item(scope + ' ul.products li.product .star-rating', desc + ' Star Rating Area');
        csshero_declare_item(scope + ' ul.products li.product .woocommerce-loop-product__title', desc + ' Product Title');
    }
    wcom_product = function(scope, desc) {
        csshero_config_post(scope + ' div[itemprop=description]', '', desc);
        csshero_config_post(scope + ' .entry-summary', '', 'Summary');
        csshero_config_post(scope + ' .woocommerce-tabs #tab-description', '', desc + ' Tab Desc');
        csshero_declare_item(scope, desc);
        csshero_declare_item(scope + ' .product_title', desc + ' Title');
        csshero_declare_item(scope + ' .woocommerce-product-rating', desc + ' Rating Area');
        csshero_declare_item(scope + ' .woocommerce-review-link', desc + ' Reviews Link');
        csshero_declare_item(scope + ' .price', desc + ' Price Area');
        csshero_declare_item(scope + ' .woocommerce-product-gallery__wrapper', desc + ' Gallery Area')
        csshero_declare_item(scope + ' .woocommerce-product-gallery__trigger', desc + ' Gallery Trigger')
        csshero_declare_item(scope + ' .price .amount', desc + ' Price');
        csshero_declare_item(scope + ' .price del', desc + ' Old Price');
        csshero_declare_item(scope + ' .price ins', desc + ' New Price');
        csshero_declare_item(scope + ' form.cart', desc + ' Quantity Area');
        csshero_declare_item(scope + ' form.cart div.quantity', desc + ' Quantity Form');
        csshero_declare_item(scope + ' form.cart div.quantity .plus', desc + ' Quantity Plus');
        csshero_declare_item(scope + ' form.cart div.quantity .minus', desc + ' Quantity Minus');
        csshero_declare_item(scope + ' form.cart div.quantity input.qty', desc + ' Quantity Qty');
        csshero_declare_item(scope + ' form.cart .button', desc + ' Add To Cart');
        csshero_declare_item(scope + ' div.images', desc + ' Images Area');
        csshero_declare_item(scope + ' div.images .wp-post-image', desc + ' Image');
        csshero_declare_item(scope + ' div.images .thumbnails', desc + ' Thumbs Area');
        csshero_declare_item(scope + ' div.images .thumbnails .attachment-shop_thumbnail', desc + ' Thumb');
        csshero_declare_item(scope + ' .product_meta', desc + ' Meta Area');
        csshero_declare_item(scope + ' .product_meta > span', desc + ' Meta Inner Area');
        csshero_declare_item(scope + ' p.cart', desc + ' Cart Button Area');
        csshero_declare_item(scope + ' .single_add_to_cart_button', desc + ' Cart Button');
        csshero_declare_item(scope + ' .product_meta a', desc + ' Meta Link');
        csshero_declare_item(scope + ' .woocommerce-tabs', desc + ' Tabs Area');
        csshero_declare_item(scope + ' .woocommerce-tabs ul.tabs', desc + ' Tabs');
        csshero_declare_item(scope + ' .woocommerce-tabs ul.tabs li', desc + ' Tab');
        csshero_declare_item(scope + ' .woocommerce-tabs ul.tabs li.active', desc + ' Active Tab');
        csshero_declare_item(scope + ' .woocommerce-tabs ul.tabs li a', desc + ' Tab Link');
        csshero_declare_item(scope + ' .woocommerce-tabs ul.tabs li.active a', desc + ' Active Tab Link');
        csshero_declare_item(scope + ' .woocommerce-tabs #reviews textarea', desc + ' Review Textarea');
        csshero_declare_item(scope + ' .woocommerce-tabs #reviews input', desc + ' Review Input');
        csshero_declare_item(scope + ' .woocommerce-tabs #reviews input[type=submit]', desc + ' Submit Review');
        csshero_declare_item(scope + ' .star-rating', scope + ' Star Rating Area');
        csshero_declare_item(scope + ' .stock', desc + ' Stock');
        csshero_declare_item(scope + ' .comment-form-rating', desc + ' Rating Area');
        csshero_declare_item(scope + ' .comment-form-rating label', desc + ' Rating Area Title');
        csshero_declare_item(scope + ' .comment-form-rating .stars', desc + ' Rating Stars Area');
        csshero_declare_item(scope + ' .comment-form-rating .stars a', desc + ' Rating Area Single Star');
        csshero_declare_item(scope + ' #comments', desc + ' Revs Area');
        csshero_declare_item(scope + ' #comments > h2', desc + ' Revs Title');
        csshero_declare_item(scope + ' #comments .comment', desc + ' Review Area');
        csshero_declare_item(scope + ' #comments .comment .avatar', desc + ' Review Avatar');
        csshero_declare_item(scope + ' #comments .comment .comment-text', desc + ' Review Text');
        csshero_declare_item(scope + ' #comments .comment .meta', desc + ' Review Meta');
        csshero_declare_item(scope + ' #comments .comment .meta strong', desc + ' Review Author');
        csshero_declare_item(scope + ' #comments .comment .meta time', desc + ' Review Date');
        csshero_config_post(scope + ' #comments .comment .description', '', 'Review');
        csshero_declare_item(scope + ' #comments h3#reply-title', desc + ' Reply Title');
        csshero_declare_item(scope + ' #comments p.stars', desc + ' Stars Area');
        csshero_declare_item(scope + ' #comments textarea#comment', desc + ' Reply Textarea');
        csshero_declare_item(scope + ' #comments #submit', desc + ' Submit Reply');
        csshero_declare_item(scope + ' .gform_variation_wrapper', desc + ' Variations Wrapper');
        csshero_declare_item(scope + ' .variations', desc + ' Variations Area');
        csshero_declare_item(scope + ' .variations .label', desc + ' Variations Label');
        csshero_declare_item(scope + ' .variations .value', desc + ' Variations Value');
        csshero_declare_item(scope + ' .variations .value select', desc + ' Variations Value Select');
    }
    wcom_notice = function(scope, desc) {
        csshero_declare_item(scope + ' .woocommerce-info', desc + ' Info');
        csshero_declare_item(scope + ' .woocommerce-info .showcoupon', desc + ' Show Coupon Link');
        csshero_declare_item(scope + ' .woocommerce-error', desc + ' Error');
        csshero_declare_item(scope + ' .woocommerce-error li', desc + ' Error List Item');
        csshero_declare_item(scope + ' .woocommerce-error li strong', desc + ' Error List Strong');
    }
    wcom_checkout = function(scope, desc) {
        csshero_declare_item(scope + ' form.checkout_coupon', desc + ' Coupon Area');
        csshero_declare_item(scope + ' form.checkout_coupon .input-text', desc + ' Coupon Field');
        csshero_declare_item(scope + ' form.checkout_coupon input[name=apply_coupon]', desc + ' Coupon Submit');
        csshero_declare_item(scope + ' #customer_details', scope + ' Customer Details Area');
        csshero_declare_item(scope + ' #customer_details .col-1', scope + ' Customer Details Col1');
        csshero_declare_item(scope + ' #customer_details .col-2', scope + ' Customer Details Col2');
        csshero_declare_item(scope + ' form.checkout', desc + ' Form');
        csshero_declare_item(scope + ' form.checkout h3', desc + ' Titles');
        csshero_declare_item(scope + ' form.checkout .form-row', desc + ' Form Row');
        csshero_declare_item(scope + ' form.checkout .form-row label', desc + ' Form Label');
        csshero_declare_item(scope + ' form.checkout .form-row label .required', desc + ' Required Icon');
        csshero_declare_item(scope + ' form.checkout .form-row .input-text', desc + ' Input');
        csshero_declare_item(scope + ' #order_review', scope + ' Order Review Area');
        csshero_declare_item(scope + ' #order_review table.shop_table', scope + ' Order Table');
        csshero_declare_item(scope + ' #order_review table.shop_table th', scope + ' Order Table Heading');
        csshero_declare_item(scope + ' #order_review table.shop_table td', scope + ' Order Table Cell');
        csshero_declare_item(scope + ' #payment', desc + ' Payment Area');
        csshero_declare_item(scope + ' #payment ul.payment_methods', desc + ' Payment List');
        csshero_declare_item(scope + ' #payment ul.payment_methods li', desc + ' Payment Method');
        csshero_declare_item(scope + ' #payment ul.payment_methods li .payment_box', desc + ' Payment Suggestion');
        csshero_declare_item(scope + ' #payment div.form-row', desc + ' Place Row');
        csshero_declare_item(scope + ' #payment div.form-row .button', desc + ' Place Btn');
    }
    wcom_widget = function(scope, desc) {
        csshero_declare_item(scope + ' ul.product_list_widget', desc + ' List');
        csshero_declare_item(scope + ' ul.product_list_widget li', desc + ' Item');
        csshero_declare_item(scope + ' ul.product_list_widget li .reviewer', desc + ' Reviewer');
        csshero_declare_item(scope + ' ul.product_list_widget li .wp-post-image', desc + ' Img');
        csshero_declare_item(scope + ' ul.product_list_widget li .amount', desc + ' Price');
        csshero_declare_item(scope + ' ul.product_list_widget li del', desc + ' Old Price');
        csshero_declare_item(scope + ' ul.product_list_widget li ins', desc + ' New Price');
        csshero_declare_item(scope + ' ul.product_list_widget li .star-rating', desc + ' Stars');
        csshero_declare_item(scope + ' .widget-title', desc + ' Title');
        csshero_declare_item(scope + ' a', desc + ' Link');
        csshero_declare_item(scope + ' a.remove', desc + ' Remove Icon');
        csshero_declare_item(scope + ' .quantity', desc + ' Qty');
        csshero_declare_item(scope + ' .total', desc + ' Total Area');
        csshero_declare_item(scope + ' .total strong', desc + ' Total Desc');
        csshero_declare_item(scope + ' .total .amount', desc + ' Total Price');
        csshero_declare_item(scope + ' .buttons', desc + ' Buttons Area');
        csshero_declare_item(scope + ' .buttons .button', desc + ' Btn');
        csshero_declare_item(scope + ' .buttons .button.checkout', desc + ' Checkout Btn');
        csshero_declare_item(scope + '.widget_price_filter .ui-slider .ui-slider-range', desc + ' Price Slider Range');
        csshero_declare_item(scope + '.widget_price_filter .ui-slider .ui-slider-handle', desc + ' Price Slider Handle');
    }
    wcom_cart = function(scope, desc) {
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart', 'WCOM Cart Table');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart thead', 'WCOM Cart T Head');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart thead th', 'WCOM Cart T Head Tab');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart tbody td', 'WCOM Cart T Body');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-remove', 'WCOM Cart Remove');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-remove a.remove', 'WCOM Cart Remove Btn');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-thumbnail', 'WCOM Cart Thumb');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-thumbnail img', 'WCOM Cart Thumb Img');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-name', 'WCOM Cart Name');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-name a', 'WCOM Cart Name Link');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-price', 'WCOM Cart Price');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-price .amount', 'WCOM Cart Price Amount');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-quantity', 'WCOM Cart Qty');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-subtotal', 'WCOM Cart Subtotal');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.product-subtotal .amount', 'WCOM Cart Subtotal Amount');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions', 'WCOM Cart Actions');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity', 'WCOM Cart Quantity Form');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity .plus', 'WCOM Cart Quantity Plus');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity .minus', 'WCOM Cart Quantity Minus');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart div.quantity input.qty', 'WCOM Cart Quantity Qty');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions #coupon_code', 'WCOM Cart Coupon Input');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=apply_coupon]', 'WCOM Cart Coupon Btn');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=update_cart]', 'WCOM Update Cart');
        csshero_declare_item('.woocommerce-cart .woocommerce table.shop_table.cart td.actions input[name=proceed]', 'WCOM Proceed Btn');
        csshero_declare_item('.woocommerce .woocommerce-message', 'WCOM Message Area');
        csshero_declare_item('.woocommerce .woocommerce-message .button', 'WCOM Message Area Button');
        csshero_declare_item('.woocommerce .wc-proceed-to-checkout', 'Proceed To Check-out Area');
        csshero_declare_item('.woocommerce .wc-proceed-to-checkout .button', 'Proceed To Check-out Button');
        csshero_declare_item('body.et_color_scheme_red.woocommerce-page .wc-proceed-to-checkout a.button', 'Proceed To Check-out Button');
        csshero_declare_item('.woocommerce .cart-collaterals', 'WCOM Cart Totals Area');
        csshero_declare_item('.woocommerce .cart-collaterals .cart_totals', 'WCOM Cart Totals');
        csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table', 'WCOM Cart Totals Table');
        csshero_declare_item('.woocommerce .cart-collaterals .cart-discount a', 'WCOM Remove Coupon');
        csshero_declare_item('.woocommerce .cart-collaterals .cart_totals h2', 'WCOM Cart Totals Titles');
        csshero_declare_item('.woocommerce .cross-sells', 'Cross Sells Area');
        csshero_declare_item('.woocommerce .cross-sells > h2', 'Cross Sells Area TItle');
        csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table', 'WCOM Cart Totals Table');
        csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table th', 'WCOM Cart Totals Th');
        csshero_declare_item('.woocommerce .cart-collaterals .cart_totals table td', 'WCOM Cart Totals Td');
        csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator', 'WCOM Cart Shipping Area');
        csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator h2 a.shipping-calculator-button', 'WCOM Cart Shipping Btn');
        csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator .form-row', 'WCOM Cart Shipping Row');
        csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator .form-row input.input-text', 'WCOM Cart Shipping Input');
        csshero_declare_item('.woocommerce .cart-collaterals form.shipping_calculator button[name=calc_shipping]', 'WCOM Cart Shipping Btn');
    }
    wcom_track = function(scope, desc) {
        csshero_declare_item(scope + ' form.track_order', desc + ' Form');
        csshero_declare_item(scope + ' form.track_order label', desc + ' Label');
        csshero_declare_item(scope + ' form.track_order .input-text', desc + ' Input');
        csshero_declare_item(scope + ' form.track_order .button', desc + ' Btn');
    }
    wcom_generic = function(scope) {
        csshero_declare_item(scope + ' h1.page-title', 'WCOM Page Title');
        csshero_declare_item(scope + ' p.woocommerce-result-count', 'WCOM Result Count');
        csshero_declare_item(scope + ' form.woocommerce-ordering', 'WCOM Ordering Form');
        csshero_declare_item(scope + ' .woocommerce-breadcrumb', 'WCOM Breadcrumb Area');
        csshero_declare_item(scope + ' .woocommerce-breadcrumb a', 'WCOM Breadcrumb Link');
        csshero_declare_item(scope + ' span.onsale', 'WCOM Sale Icon');
        csshero_declare_item(scope + ' .storefront-sorting', 'Sorting Area');
        csshero_declare_item(scope + ' .site-header-cart .cart-contents', 'Widget Main');
    }
    wcom_final_checkout = function(scope, desc) {
        csshero_declare_item(scope + ' .woocommerce h2', desc + ' Title');
        csshero_declare_item(scope + ' .woocommerce p', desc + ' Paragraph');
        csshero_declare_item(scope + ' .woocommerce .order_details', desc + ' Details');
        csshero_declare_item(scope + ' .woocommerce .order_details li', desc + ' Details Tab');
        csshero_declare_item(scope + ' .woocommerce .order_details strong', desc + ' Details Value');
        csshero_declare_item(scope + ' .woocommerce .shop_table', desc + ' Table');
        csshero_declare_item(scope + ' .woocommerce .shop_table th', desc + ' Product TH');
        csshero_declare_item(scope + ' .woocommerce .shop_table td', desc + ' Product TD');
        csshero_declare_item(scope + ' .woocommerce table a', desc + ' Product Table Link');
        csshero_declare_item(scope + ' .woocommerce dl.customer_details', desc + ' Customer Details Area');
        csshero_declare_item(scope + ' .woocommerce dl.customer_details dt', desc + ' Customer DT');
        csshero_declare_item(scope + ' .woocommerce dl.customer_details dd', desc + ' Customer DD');
        csshero_declare_item(scope + ' .woocommerce .addresses', desc + ' Addresses Area');
        csshero_declare_item(scope + ' .woocommerce .addresses .title', desc + ' Addresses Title Area');
        csshero_declare_item(scope + ' .woocommerce .addresses .title h3', desc + ' Addresses Title');
        csshero_declare_item(scope + ' .woocommerce .addresses address p', desc + ' Address');
    }
    wcom_pagination = function(scope) {
        csshero_declare_item(scope + ' .woocommerce-pagination', 'WCOM Pagination Area');
        csshero_declare_item(scope + ' .woocommerce-pagination .page-numbers', 'WCOM Pagination');
        csshero_declare_item(scope + ' .woocommerce-pagination a.page-numbers', 'WCOM Pagination Item');
        csshero_declare_item(scope + ' .woocommerce-pagination .page-numbers.current', 'WCOM Current Pagination Item');
        csshero_declare_item(scope + ' .woocommerce-pagination .page-number', 'WCOM Pagination Item');
        csshero_declare_item(scope + ' .woocommerce-pagination .page-number.current', 'WCOM Current Pagination Item');
    }
    wcom_cart();
    wcom_generic('.woocommerce');
    wcom_card('.woocommerce', 'WCOM Product List');
    wcom_card('.hentry .woocommerce', 'WCOM Embedded Product');
    wcom_card('.woocommerce .related', 'WCOM Related Products');
    wcom_card('.woocommerce .upsells', 'WCOM Upsells Products');
    wcom_product('.woocommerce div.product', 'WCOM Product');
    wcom_product('.woocommerce #content div.product', 'WCOM Product');
    wcom_product('.woocommerce #content-area div.product', 'WCOM Product (Divi)');
    wcom_notice('.woocommerce', 'WCOM');
    wcom_checkout('.woocommerce', 'WCOM Checkout');
    wcom_track('.woocommerce', 'WCOM Tracking');
    wcom_card('.woocommerce .cross-sells', 'Related Sells');
    wcom_final_checkout('.woocommerce-checkout', 'WCOM Checkout');
    wcom_pagination('.woocommerce');
    wcom_widget('.et_pb_widget.woocommerce', 'WCOM Widget');
    wcom_widget('.woocommerce.widget', 'WCOM Widget');
    wcom_widget('.woocommerce.widget.widget_products', 'WCOM Widget Prods');
    wcom_widget('.woocommerce.widget.widget_recent_reviews', 'WCOM Widget Revs');
    wcom_widget('.woocommerce.widget.widget_shopping_cart', 'WCOM Shopping Cart');
    window.csshero_plugin_is_configurated = true;
    setTimeout(function() {
        csshero_promise.resolve();
    }, 1000);
    return csshero_promise;
}
function hero_get_theme_name() {
    return "betheme";
}
function theme_config_load_has_failed() {
    return true;
}
function csshero_declare_item(selector, description) {
    var selector = selector.replace(/  /g, ' ');
    configuration_paths[selector] = {
        path: selector,
        desc: description
    };
}
function csshero_refine_property() {
    console.log('csshero_refine_property non è definita')
}
$bg = 'background-color,background-image,background-repeat,background-attachment,background-size,background-position';
$padding = 'padding-left,padding-top,padding-right,padding-bottom';
$margin = 'margin-left,margin-top,margin-right,margin-bottom';
$basic = 'background-color,background-image,background-repeat,background-attachment,background-size,background-position,color';
function csshero_config_sidebar(scope, inner_scope, prefix) {
    if (!inner_scope) {
        inner_scope = '.widget';
    }
    if (!prefix) {
        prefix = 'Sidebar';
    }
    csshero_declare_item(scope, prefix);
    csshero_declare_item(scope + ' ' + inner_scope, prefix + ' Widget');
    csshero_declare_item(scope + ' ' + inner_scope + ' ul', prefix + ' List Container');
    csshero_declare_item(scope + ' ' + inner_scope + ' ul li', prefix + ' List Element');
    csshero_declare_item(scope + ' ' + inner_scope + ' a', prefix + ' Links');
    csshero_declare_item(scope + ' ' + inner_scope + ' p', prefix + ' Paragraphs');
    csshero_declare_item(scope + ' ' + inner_scope + ' img', prefix + ' Image');
    csshero_declare_item(scope + ' ' + inner_scope + ' h1', prefix + ' Text Widget h1');
    csshero_declare_item(scope + ' ' + inner_scope + ' h2', prefix + ' Text Widget h2');
    csshero_declare_item(scope + ' ' + inner_scope + ' h3:not(' + inner_scope + '-title)', prefix + ' Text Widget h3');
    csshero_declare_item(scope + ' ' + inner_scope + ' h4', prefix + ' Text Widget h4');
    csshero_declare_item(scope + ' ' + inner_scope + ' h5', prefix + ' Text Widget h5');
    csshero_declare_item(scope + ' ' + inner_scope + ' h6', prefix + ' Text Widget h6');
    csshero_declare_item(scope + ' ' + inner_scope + ' #s', prefix + ' Search Input');
    csshero_declare_item(scope + ' ' + inner_scope + ' #searchsubmit', prefix + ' Search Submit');
    csshero_declare_item(scope + ' ' + inner_scope + ' #searchform', prefix + ' Searchform');
    csshero_declare_item(scope + ' ' + inner_scope + ' .searchsubmit', prefix + ' Search Submit');
    csshero_declare_item(scope + ' ' + inner_scope + ' .searchform', prefix + ' Searchform');
    csshero_declare_item(scope + ' ' + inner_scope + ' .search-submit', prefix + ' Search Submit');
    csshero_declare_item(scope + ' ' + inner_scope + ' .search-form', prefix + ' Searchform');
    csshero_declare_item(scope + ' ' + inner_scope + ' input[type=text]', prefix + ' Text Input');
    csshero_declare_item(scope + ' ' + inner_scope + ' .widget-title', prefix + ' Widget Title');
    csshero_declare_item(scope + ' ' + inner_scope + ' input[type=submit]', prefix + ' Submit Button');
    csshero_declare_item(scope + ' ' + inner_scope + ' button', prefix + ' Button');
}
function csshero_config_post(scope, inner_scope, prefix) {
    if (!prefix) {
        prefix = 'Article';
    }
    csshero_declare_item(scope, prefix);
    csshero_declare_item(scope + ' .entry-header', prefix + ' Header');
    csshero_declare_item(scope + ' .entry-header .entry-title', prefix + ' Header Title');
    csshero_declare_item(scope + ' .entry-header .entry-title a', prefix + ' Header Title Link');
    csshero_declare_item(scope + ' .entry-header .comments-link', prefix + ' Header Comments Area');
    csshero_declare_item(scope + ' .entry-header .comments-link a', prefix + ' Header Comments Area Link');
    csshero_declare_item(scope + ' .page-title', prefix + ' Page Title');
    csshero_declare_item(scope + ' .entry-title', prefix + ' Entry Title');
    csshero_declare_item(scope + ' .entry-title a', prefix + ' Entry Title Link');
    csshero_declare_item(scope + ' ' + inner_scope + ' h1', prefix + ' Content h1');
    csshero_declare_item(scope + ' ' + inner_scope + ' h2', prefix + ' Content h2');
    csshero_declare_item(scope + ' ' + inner_scope + ' h3', prefix + ' Content h3');
    csshero_declare_item(scope + ' ' + inner_scope + ' h4', prefix + ' Content h4');
    csshero_declare_item(scope + ' ' + inner_scope + ' h5', prefix + ' Content h5');
    csshero_declare_item(scope + ' ' + inner_scope + ' h6', prefix + ' Content h6');
    csshero_declare_item(scope + ' .entry-header img.wp-post-image', prefix + ' Entry Header Images');
    csshero_declare_item(scope + ' ' + inner_scope, prefix + ' Entry Content');
    csshero_declare_item(scope + ' ' + inner_scope + ' p', prefix + ' Content Paragraph');
    csshero_declare_item(scope + ' ' + inner_scope + ' a', prefix + ' Content Links');
    csshero_declare_item(scope + ' ' + inner_scope + ' blockquote', prefix + ' Content Blockquotes');
    csshero_declare_item(scope + ' ' + inner_scope + ' blockquote p', prefix + ' Content Blockquotes Paragraph');
    csshero_declare_item(scope + ' ' + inner_scope + ' ul', prefix + ' Unordered List');
    csshero_declare_item(scope + ' ' + inner_scope + ' ul li', prefix + ' Unordered List Item');
    csshero_declare_item(scope + ' ' + inner_scope + ' ol', prefix + ' Ordered List');
    csshero_declare_item(scope + ' ' + inner_scope + ' ol li', prefix + ' Ordered List Item');
    csshero_declare_item(scope + ' ' + inner_scope + ' ins', prefix + ' Content Inserted Parts');
    csshero_declare_item(scope + ' ' + inner_scope + ' del', prefix + ' Content Deleted Parts');
    csshero_declare_item(scope + ' ' + inner_scope + ' img:not(.wp-smiley)', prefix + ' Content Images');
    csshero_declare_item(scope + ' ' + inner_scope + ' img.wp-smiley', prefix + ' Content Smiles');
    csshero_declare_item(scope + ' ' + inner_scope + ' table', prefix + ' Table Body');
    csshero_declare_item(scope + ' ' + inner_scope + ' tr', prefix + ' Table Row');
    csshero_declare_item(scope + ' ' + inner_scope + ' td', prefix + ' Table Cell');
    csshero_declare_item(scope + ' ' + inner_scope + ' thead', prefix + ' Table Heading');
    csshero_declare_item(scope + ' ' + inner_scope + ' th', prefix + ' Table Heading Cell');
    csshero_declare_item(scope + ' ' + inner_scope + ' tfoot', prefix + ' Table Footer');
    csshero_declare_item(scope + ' ' + inner_scope + ' hr', prefix + ' Break Line');
    csshero_declare_item(scope + ' ' + inner_scope + ' code', prefix + ' Code');
    csshero_declare_item(scope + ' ' + inner_scope + ' strong', prefix + ' Strong');
    csshero_declare_item(scope + ' .entry-meta', prefix + '  Meta Area');
    csshero_declare_item(scope + ' .entry-meta a', prefix + '  Meta Link');
    csshero_declare_item(scope + ' p.tags', prefix + ' Tags Area');
    csshero_declare_item(scope + ' p.tags a', prefix + ' Tag');
    csshero_declare_item(scope + ' ' + inner_scope + ' .wp-caption', 'Caption Area');
    csshero_declare_item(scope + ' ' + inner_scope + ' .wp-caption a', 'Caption Links');
    csshero_declare_item(scope + ' ' + inner_scope + ' .wp-caption .wp-caption-text', 'Caption Text');
}
function csshero_config_menu(scope, ulscope, prefix) {
    if (!ulscope) {
        ulscope = '';
    }
    if (!prefix) {
        prefix = 'NAV';
    }
    csshero_declare_item(scope, prefix + ' - Navigation Container');
    csshero_declare_item(scope + ' ul' + ulscope + ' li', prefix + ' - Main Menu Element');
    csshero_declare_item(scope + ' ul' + ulscope + ' li a', prefix + ' - Main Menu Link');
    csshero_declare_item(scope + ' ul' + ulscope + ' li.current-menu-item a', prefix + ' - Currently Active Menu Link');
    csshero_declare_item(scope + ' ul' + ulscope + ' li.current-cat a', prefix + ' - Current Category Menu Link');
    csshero_declare_item(scope + ' ul' + ulscope + ' li ul li', prefix + ' - Second Level Menu Element');
    csshero_declare_item(scope + ' ul' + ulscope + ' li ul li a', prefix + ' - Second Level Menu Links');
    csshero_declare_item(scope + ' ul' + ulscope, prefix + ' - Navigation');
    csshero_declare_item(scope + ' ul' + ulscope + ' .sub-menu', prefix + ' Submenu');
    csshero_declare_item(scope + ' ul' + ulscope + ' .current-menu-item > a', prefix + ' - Current Menu Link');
    csshero_declare_item(scope + ' ul' + ulscope + ' .current-menu-ancestor > a', prefix + ' - Current Menu Link');
    csshero_declare_item(scope + ' ul' + ulscope + ' .current_page_item > a', prefix + ' - Current Menu Link');
    csshero_declare_item(scope + ' ul' + ulscope + ' .current_page_ancestor > a', prefix + ' - Current Menu Link');
}
function csshero_config_comments(scope) {
    if (!scope) {
        scope = '#comments'
    }
    csshero_declare_item(scope, 'Comments Area');
    csshero_declare_item(scope + ' .comments-title', 'Comments Area Title');
    csshero_declare_item(scope + ' #comments-title', 'Comments Area Title');
    csshero_declare_item(scope + ' .commentlist li article', 'Comment');
    csshero_declare_item(scope + ' .commentlist li article.comment', 'Comment');
    csshero_declare_item(scope + ' .commentlist li div.comment', 'Comment');
    csshero_declare_item(scope + ' .commentlist .pingback', 'Comment Pingback');
    csshero_declare_item(scope + ' .commentlist .comment .comment-author,' + scope + ' .commentlist .fn', 'Comment Author');
    csshero_declare_item(scope + ' .commentlist .comment .comment-author a', 'Comment Author Link');
    csshero_declare_item(scope + ' .commentlist .comment header', 'Comment Header');
    csshero_declare_item(scope + ' .commentlist .comment time', 'Comment Date');
    csshero_declare_item(scope + ' .commentlist .comment .avatar', 'Comment Author Avatar');
    csshero_declare_item(scope + ' .commentlist .comment-content p', 'Comment Paragraph');
    csshero_declare_item(scope, 'Comments Area');
    csshero_declare_item(scope + ' .comments-title', 'Comments Area Title');
    csshero_declare_item(scope + ' .comment-list li article', 'Comment');
    csshero_declare_item(scope + ' .comment-list li article.comment', 'Comment');
    csshero_declare_item(scope + ' .comment-list li div.comment', 'Comment');
    csshero_declare_item(scope + ' .comment-list .pingback', 'Comment Pingback');
    csshero_declare_item(scope + ' .comment-list .comment .comment-author, ' + scope + ' .comment-list .fn, ' + scope + ' .comment-list .comment .comment-author a', 'Comment Author');
    csshero_declare_item(scope + ' .comment-list .comment header', 'Comment Header');
    csshero_declare_item(scope + ' .comment-list .comment time', 'Comment Date');
    csshero_declare_item(scope + ' .comment-list .comment .avatar', 'Comment Author Avatar');
    csshero_declare_item(scope + ' .comment-list .comment-content p', 'Comment Paragraph');
}
function new_csshero_config_comments(scope, listname, comment_container) {
    if (!scope) {
        scope = '#comments'
    }
    csshero_declare_item(scope, 'Comments Area');
    csshero_declare_item(scope + ' .comments-title', 'Comments Area Title');
    csshero_declare_item(scope + ' #comments-title', 'Comments Area Title');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container, 'Comment');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + '.pingback', 'Comment Pingback');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' .comment-author,' + scope + ' ' + listname + ' ' + comment_container + ' .fn', 'Comment Author');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' .comment-author a', 'Comment Author Link');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' header', 'Comment Header');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' time', 'Comment Date');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' .avatar', 'Comment Author Avatar');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' .comment-avatar', 'Comment Author Avatar');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' p', 'Comment Paragraph');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' p a', 'Comment Link');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' .comment-reply-link', 'Comment Reply Link');
    csshero_declare_item(scope + ' ' + listname + ' .children', 'Comment Children Area');
    csshero_declare_item(scope + ' ' + listname + ' ' + comment_container + ' .comment-content', 'Comment Content');
}
function csshero_config_respond(scope, innerscope) {
    if (!scope) {
        scope = '#comments'
    }
    if (!innerscope) {
        innerscope = '#respond'
    }
    csshero_declare_item(scope + ' ' + innerscope, 'Respond Area');
    csshero_declare_item(scope + ' ' + innerscope + ' a', 'Respond Links');
    csshero_declare_item(scope + ' ' + innerscope + ' #cancel-comment-reply-link', 'Cancel Reply Link');
    csshero_declare_item(scope + ' ' + innerscope + ' h3#reply-title', 'Respond Title');
    csshero_declare_item(scope + ' ' + innerscope + ' .logged-in-as', 'Respond Logged In Text');
    csshero_declare_item(scope + ' ' + innerscope + ' .logged-in-as a', 'Respond Logged In Text Link');
    csshero_declare_item(scope + ' ' + innerscope + ' .form-allowed-tags', 'Respond Allowed Comments Tags Area');
    csshero_declare_item(scope + ' ' + innerscope + ' .form-allowed-tags code', 'Respond Allowed Comments Tags');
    csshero_declare_item(scope + ' ' + innerscope + '  #submit', 'Respond Submit Reply');
    csshero_declare_item(scope + ' ' + innerscope + ' .comment-form-comment label', 'Respond Form Title');
    csshero_declare_item(scope + ' ' + innerscope + ' textarea', 'Respond Form Textarea');
    csshero_declare_item(scope + ' ' + innerscope + ' input', 'Respond Form Input');
    csshero_declare_item(scope + ' ' + innerscope + ' input[type=submit]', 'Respond Form Submit Button');
    csshero_declare_item(scope + ' a.comment-reply-link', 'Comment Reply Link');
}
function csshero_declare_pseudo(pseudo, scope, suggestion, css) {
    if (!css) {
        css = 'top: 0; left: 0; width:100%; height: 100%;'
    }
    jQuery(window.frames['csshero-iframe-main-page'].document.body).find(scope).each(function() {
        var position = jQuery(this).css('position');
        if (position == 'absolute' || position == 'fixed') {} else {
            jQuery(this).css('position', 'relative');
        }
        jQuery(this).append('<div class="csshero-pseudo editable" editableclass="' + pseudo + '" editablesuggestion="' + suggestion + '" style="position: absolute;' + css + '"></div>');
    });
}
function csshero_woocommerce_config(wc, wcp) {}
var declare_rocket_mode = function(delimiter, additional_excluded_classes, additional_excluded_ids, pseudo_lookup, skippers) {
    var excluded_classes = ['editable', 'clearfix', 'clear', 'hfeed', 'animatedParent', 'animate', 'animated', 'clr', 'fa-', 'lazy', 'js', 'sf-', 'type-', 'format-', 'category-', 'tag-', 'status', 'post-', 'cat-item', 'page-item', 'widget-', 'widget_', 'menu-item', 'odd', 'even', 'page_item', 'cat_item', 'menu_item', 'byuser', 'col-', 'portrait', 'landscape'];
    var excluded_ids = ['menu-', 'comment-'];
    if (additional_excluded_classes) {
        if (jQuery.isArray(additional_excluded_classes)) {
            additional_excluded_classes = additional_excluded_classes;
        } else {
            additional_excluded_classes = additional_excluded_classes.replace(/ /g, '').split(',');
        }
        excluded_classes = jQuery.merge(excluded_classes, additional_excluded_classes);
    }
    if (additional_excluded_ids) {
        if (jQuery.isArray(additional_excluded_ids)) {
            additional_excluded_ids = additional_excluded_ids;
        } else {
            additional_excluded_ids = additional_excluded_ids.replace(/ /g, '').split(',');
        }
        excluded_ids = jQuery.merge(excluded_ids, additional_excluded_ids);
    }
    var findValid = function(c, array) {
        for (var i = 0, len = array.length; i < len; i++) {
            if (c.indexOf(array[i]) > -1) {
                return null;
                break;
            }
        }
        return c;
    }
    var identifier = function(ele) {
        data = [];
        ele_obj = jQuery(ele);
        TAG = ele_obj.prop('tagName');
        ID = ele_obj.attr('id');
        var classes = [];
        CLASS = ele_obj.attr('class');
        DESC = '';
        if (CLASS) {
            CLASS = CLASS.split(' ');
            if (CLASS.length < 100) {
                jQuery(CLASS).each(function(i, cl) {
                    valid_class = findValid(cl, excluded_classes);
                    startsWith = cl[0];
                    if (cl && isNaN(startsWith) && cl != '' && valid_class)
                        classes.push(cl)
                })
                CLASS = '.' + classes.join('.');
                DESC = classes.join(' ');
            } else {
                CLASS = '';
            }
        } else {
            CLASS = '';
        }
        if (CLASS == '.')
            CLASS = '';
        if (ID && ID != '' && findValid(ID, excluded_ids)) {
            DESC = ID;
            ID = '#' + ID;
            CLASS = '';
        } else {
            ID = '';
        }
        if (ID.indexOf('post-') > -1) {
            ID = '';
            DESC = 'Post';
        }
        scope = TAG + CLASS + ID
        DESC_TAG = TAG;
        if (TAG == 'A')
            DESC_TAG = 'Link';
        if (TAG == 'UL')
            DESC_TAG = 'List';
        if (TAG == 'OL')
            DESC_TAG = 'Ordered List';
        if (TAG == 'LI')
            DESC_TAG = 'Item';
        if (TAG == 'I')
            DESC_TAG = 'Icon';
        if (TAG == 'P')
            DESC_TAG = 'Paragraph'
        if (ele_obj.hasClass('widget')) {
            scope = TAG;
            DESC = DESC_TAG;
        }
        if (CLASS == '' && ID == '') {
            PARENT_DESC = ele_obj.parent().attr('editablesuggestion');
            if (!PARENT_DESC)
                PARENT_DESC = '';
            DESC = PARENT_DESC + ' ' + DESC_TAG;
        }
        if (TAG == 'HTML' || TAG == 'BODY') {
            scope = TAG;
            DESC = TAG;
        }
        identifier_object = [];
        identifier_object.push({
            scope: scope,
            desc: DESC,
        });
        return identifier_object;
    }
    var removeNextIDs = function(split, string) {
        string = string + ' ';
        splitstring = string.split(split);
        fullstring = '';
        jQuery(splitstring).each(function(i, b) {
            if (i > 0)
                fullstring += split + b;
        })
        new_scope = '';
        new_string = fullstring.replace(/#.+?\s/g, "");
        new_scope = splitstring[0] + new_string;
        return new_scope;
    }
    var getUniquePath = function(node) {
        var parts = [];
        var descs = [];
        if (delimiter && delimiter != '') {
            parents = jQuery(node).parentsUntil(delimiter);
        } else {
            parents = jQuery(node).parents();
        }
        parents.each(function(i, element) {
            element_data = identifier(element);
            parts.push(element_data[0].scope);
            descs.push(element_data[0].desc)
        });
        fullscope = parts.join(' > ', parts.reverse());
        fulldesc = descs.join(' ', descs.reverse());
        if (delimiter && delimiter != '')
            fullscope = delimiter + ' ' + fullscope;
        full_element_data = [];
        full_element_data.push({
            fullscope: fullscope,
            fulldesc: fulldesc,
        })
        return full_element_data;
    }
    rocketframe = window.frames['csshero-iframe-main-page'].document;
    if (delimiter && delimiter != '') {
        csshero_declare_item(delimiter, delimiter)
        range = jQuery(delimiter + ' *', rocketframe);
    } else {
        csshero_declare_item('body', 'Site Body')
        range = jQuery('body *', rocketframe);
    }
    pseudo_checker = [];
    range.each(function(i, o) {
        thi = identifier(jQuery(this));
        thi_scope = thi[0].scope;
        thi_desc = thi[0].desc;
        t = getUniquePath(jQuery(this))[0].fullscope;
        d = getUniquePath(jQuery(this))[0].fulldesc;
        t = t + ' > ' + thi_scope;
        if (pseudo_lookup) {
            console.log('faccio uno pseudo lookup')
            w = t.replace('HTML > BODY > ', '');
            if (jQuery.inArray(w, pseudo_checker) == -1) {
                var original_el_w = window.getComputedStyle(rocketframe.querySelector(t)).getPropertyValue('width')
                var pseudo_after_w = window.getComputedStyle(rocketframe.querySelector(t), ':after').getPropertyValue('width')
                if (original_el_w != pseudo_after_w && pseudo_after_w != 'auto' && pseudo_after_w != 0 && pseudo_after_w != '0px') {
                    pseudo_checker.push(w);
                    csshero_declare_pseudo(w + ':after', w, thi_desc + ' After', 'width:100%;height:100%;');
                }
            }
        }
        splits = ['widget', 'sidebar', 'comment', '-meta', 'aside', 'menu', 'nav'];
        jQuery(splits).each(function(i, split) {
            if (t.indexOf(split) > -1) {
                t = removeNextIDs(split, t);
            }
        });
        if (skippers) {
            jQuery(skippers).each(function(i, skip) {
                if (t.indexOf(skip) > -1) {
                    w = t.split(' ');
                    ritmo = jQuery.grep(w, function(wi) {
                        return wi.indexOf(skip) > -1;
                    });
                    jQuery(ritmo).each(function(i, rit) {
                        t = t.replace('> ' + rit + ' >', '').replace('> ' + rit, '').replace(rit + ' >', '').replace(rit, '');
                    })
                }
            })
        }
        t = t.trim();
        csshero_declare_item(t, thi_desc)
    });
}
configuration_paths = {};
var flat_palette = ['#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#34495e', '#16a085', '#27ae60', '#2980b9', '#8e44ad', '#2c3e50', '#f1c40f', '#e67e22', '#e74c3c', '#ecf0f1', '#95a5a6', '#f39c12', '#d35400', '#c0392b', '#bdc3c7', '#7f8c8d'];
var material_palette = ['#f44336', '#E91E63', '#9C27B0', '#673AB7', '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4', '#009688', '#4CAF50', '#8BC34A', '#CDDC39', '#FFEB3B', '#FFC107', '#FF9800', '#FF5722', '#795548', '#9E9E9E', '#607D8B', '#263238']
var additional_palettes = {
    'flat': flat_palette,
    'material': material_palette
};
var unsplash_app_id = '205797f685f288d58f13cfe0755e011d48ff7ac4e39f72366223c80f1f97b858';
var default_mqs = {
    "tablet-landscape": {
        mq_details: {
            'max-width': "1024px",
        },
        pr: {},
        'mq-order': 0
    },
    "tablet-portrait": {
        mq_details: {
            'max-width': "768px",
        },
        pr: {},
        'mq-order': 1
    },
    "mobile-landscape": {
        mq_details: {
            'max-width': "568px",
        },
        pr: {},
        'mq-order': 2
    },
    "mobile-portrait": {
        mq_details: {
            'max-width': "320px",
        },
        pr: {},
        'mq-order': 3
    },
}
var default_mq_settings_array = default_mqs;
var inspector_hints = '\
       <h4>Inspector Help</h4>\
       <ul>\
        <li>LESS \ CSS syntax allowed</li>\
        <li>CSS comments allowed: <code>/* comment */</code></li>\
        <li>LESS comments <u><b>NOT</u></b> allowed: <code>// comment</code></li>\
        <li>Custom Classes shall be declared before being used</li>\
        <li>Custom (non parametric) Classes shall be defined with trailing ()s:<code>.myClass(){ border: 3px solid #000; }</code></li>\
        <li>Parametric Classes shall be defined (before being used) as it follows: <code>.myParametric(@color:#000,@size:1em){ border: @size solid @val; }</code></li>\
       </ul>\
 ';
desktop_only_parameter = 1025;
system_vars = {
    "@desktop_only": {
        "var_prop": "~'only screen and (min-width: " + desktop_only_parameter + "px)'",
        "var_type": "system_var"
    }
};
var default_gfontlist = ['Playfair Display', 'Work Sans', 'Space Mono', 'Source Sans Pro', 'Source Serif Pro', 'Roboto', 'Roboto Slab', 'BioRhyme', 'Montserrat', 'Lato', 'Cardo', 'Open Sans', 'Inconsolata', 'Cabin', 'Raleway', 'Anonymous Pro', 'Arvo', 'Merriweather'];
var system_fonts = ['Georgia, serif', 'Palatino Linotype, Book Antiqua, Palatino, serif', 'Times New Roman, Times, serif', 'Arial, Helvetica, sans-serif', 'Comic Sans MS, cursive, sans-serif', 'Impact, Charcoal, sans-serif', 'Lucida Sans Unicode, Lucida Grande, sans-serif', 'Tahoma, Geneva, sans-serif', 'Trebuchet MS, Helvetica, sans-serif', 'Verdana, Geneva, sans-serif', 'Courier New, Courier, monospace', 'Lucida Console, Monaco, monospace'];
var props_groups = {
    "background": {
        "background-color": {
            "colorpicker": 1,
        },
        "background-image": {
            "set_none": 1,
            "dropdown": ['linear-gradient(90deg,#FDEB71,#F8D800)', 'linear-gradient(90deg,#ABDCFF,#0396FF)', 'linear-gradient(90deg,#FEB692,#EA5455)', 'linear-gradient(90deg,#CE9FFC,#7367F0)', 'linear-gradient(90deg,#90F7EC,#32CCBC)', 'linear-gradient(90deg,#FFF6B7,#F6416C)', 'linear-gradient(90deg,#81FBB8,#28C76F)', 'linear-gradient(90deg,#E2B0FF,#9F44D3)', 'linear-gradient(90deg,#F97794,#623AA2)', 'linear-gradient(90deg,#FCCF31,#F55555)', 'linear-gradient(90deg,#F761A1,#8C1BAB)', 'linear-gradient(90deg,#43CBFF,#9708CC)', 'linear-gradient(90deg,#5EFCE8,#736EFE)', 'linear-gradient(90deg,#FAD7A1,#E96D71)', 'linear-gradient(90deg,#FFD26F,#3677FF)', 'linear-gradient(90deg,#A0FE65,#FA016D)', 'linear-gradient(90deg,#FFDB01,#0E197D)', 'linear-gradient(90deg,#FEC163,#DE4313)', 'linear-gradient(90deg,#92FFC0,#002661)', 'linear-gradient(90deg,#EEAD92,#6018DC)', 'linear-gradient(90deg,#F6CEEC,#D939CD)', 'linear-gradient(90deg,#52E5E7,#130CB7)', 'linear-gradient(90deg,#F1CA74,#A64DB6)', 'linear-gradient(90deg,#E8D07A,#5312D6)', 'linear-gradient(90deg,#EECE13,#B210FF)', 'linear-gradient(90deg,#79F1A4,#0E5CAD)', 'linear-gradient(90deg,#FDD819,#E80505)', 'linear-gradient(90deg,#FFF3B0,#CA26FF)', 'linear-gradient(90deg,#FFF5C3,#9452A5)', 'linear-gradient(90deg,#F05F57,#360940)', 'linear-gradient(90deg,#2AFADF,#4C83FF)', 'linear-gradient(90deg,#FFF886,#F072B6)', 'linear-gradient(90deg,#97ABFF,#123597)', 'linear-gradient(90deg,#F5CBFF,#C346C2)', 'linear-gradient(90deg,#FFF720,#3CD500)', 'linear-gradient(90deg,#FF6FD8,#3813C2)', 'linear-gradient(90deg,#EE9AE5,#5961F9)', 'linear-gradient(90deg,#FFD3A5,#FD6585)', 'linear-gradient(90deg,#C2FFD8,#465EFB)', 'linear-gradient(90deg,#FD6585,#0D25B9)', 'linear-gradient(90deg,#FD6E6A,#FFC600)', 'linear-gradient(90deg,#65FDF0,#1D6FA3)', 'linear-gradient(90deg,#6B73FF,#000DFF)', 'linear-gradient(90deg,#FF7AF5,#513162)', 'linear-gradient(90deg,#F0FF00,#58CFFB)', 'linear-gradient(90deg,#FFE985,#FA742B)', 'linear-gradient(90deg,#FFA6B7,#1E2AD2)', 'linear-gradient(90deg,#FFAA85,#B3315F)', 'linear-gradient(90deg,#72EDF2,#5151E5)', 'linear-gradient(90deg,#FF9D6C,#BB4E75)', 'linear-gradient(90deg,#F6D242,#FF52E5)', 'linear-gradient(90deg,#69FF97,#00E4FF)', 'linear-gradient(90deg,#3B2667,#BC78EC)', 'linear-gradient(90deg,#70F570,#49C628)', 'linear-gradient(90deg,#3C8CE7,#00EAFF)', 'linear-gradient(90deg,#FAB2FF,#1904E5)', 'linear-gradient(90deg,#81FFEF,#F067B4)', 'linear-gradient(90deg,#FFA8A8,#FCFF00)', 'linear-gradient(90deg,#FFCF71,#2376DD)', 'linear-gradient(90deg,#FF96F9,#C32BAC)']
        },
        "background-repeat": {
            "advanced": 1,
            "buttons": ['no-repeat', 'repeat', 'repeat-x', 'repeat-y'],
        },
        "background-size": {
            "buttons": ['auto', 'cover', 'contain', '100% 100%'],
            "advanced": 1,
        },
        "background-position": {
            "buttons": ['top left', 'top', 'top right', 'left', 'center', 'right', 'bottom left', 'bottom', 'bottom right'],
        },
        "background-blend-mode": {
            "advanced": 1,
            "dropdown": ['normal', 'multiply', 'screen', 'overlay', 'darken', 'lighten', 'color-dodge', 'dodge', 'saturation', 'color', 'luminosity'],
            "description": "The background-blend-mode property defines the blending mode of each background layer (color and/or image)."
        },
        "background-attachment": {
            "dropdown": ['fixed', 'scroll']
        }
    },
    "typography": {
        "color": {
            "colorpicker": 1,
        },
        "font-family": {
            "dropdown": ['1', '2'],
        },
        "font-weight": {
            "dropdown": ['100', '200', '300', '400', '500', '600', '700', '800', '900']
        },
        "font-size": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100]
        },
        "line-height": {
            "numeric": 1,
            "slidable": 1,
            "range": [-20, 100]
        },
        "font-style": {
            "buttons": ['normal', 'italic']
        },
        "text-transform": {
            "buttons": ['none', 'capitalize', 'uppercase', 'lowercase']
        },
        "text-decoration": {
            "buttons": ['none', 'underline', 'overline', 'line-through']
        },
        "text-align": {
            "buttons": ['left', 'center', 'right', 'justify']
        },
        "letter-spacing": {
            "numeric": 1,
            "slidable": 1,
            "range": [-10, 50]
        },
        "word-spacing": {
            "numeric": 1,
            "slidable": 1,
            "range": [-20, 100]
        },
        "text-shadow": {
            "set_none": 1,
        }
    },
    "borders": {
        "border-width": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
            "inner_group": 'border-all',
        },
        "border-color": {
            "colorpicker": 1,
            "inner_group": 'border-all',
        },
        "border-style": {
            "buttons": ['none', 'solid', 'dotted', 'dashed'],
            "inner_group": 'border-all',
        },
        "border-top-width": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
            "inner_group": 'border-top',
        },
        "border-top-color": {
            "colorpicker": 1,
            "inner_group": 'border-top',
        },
        "border-top-style": {
            "buttons": ['none', 'solid', 'dotted', 'dashed'],
            "inner_group": 'border-top',
        },
        "border-right-width": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
            "inner_group": 'border-right',
        },
        "border-right-color": {
            "colorpicker": 1,
            "inner_group": 'border-right',
        },
        "border-right-style": {
            "inner_group": 'border-right',
            "buttons": ['none', 'solid', 'dotted', 'dashed'],
        },
        "border-bottom-width": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
            "inner_group": 'border-bottom',
        },
        "border-bottom-color": {
            "colorpicker": 1,
            "inner_group": 'border-bottom',
        },
        "border-bottom-style": {
            "inner_group": 'border-bottom',
            "buttons": ['none', 'solid', 'dotted', 'dashed'],
        },
        "border-left-width": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
            "inner_group": 'border-left',
        },
        "border-left-color": {
            "colorpicker": 1,
            "inner_group": 'border-left',
        },
        "border-left-style": {
            "inner_group": 'border-left',
            "buttons": ['none', 'solid', 'dotted', 'dashed'],
        },
    },
    "border-radius": {
        "border-radius": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
        },
        "border-top-left-radius": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
        },
        "border-top-right-radius": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
        },
        "border-bottom-right-radius": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
        },
        "border-bottom-left-radius": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100],
        },
    },
    "spacings": {
        "padding-top": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100]
        },
        "padding-right": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100]
        },
        "padding-bottom": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100]
        },
        "padding-left": {
            "numeric": 1,
            "slidable": 1,
            "range": [0, 100]
        },
        "margin-top": {
            "numeric": 1,
            "slidable": 1,
            "range": [-100, 100]
        },
        "margin-right": {
            "numeric": 1,
            "slidable": 1,
            "range": [-100, 100]
        },
        "margin-bottom": {
            "numeric": 1,
            "slidable": 1,
            "range": [-100, 100]
        },
        "margin-left": {
            "numeric": 1,
            "slidable": 1,
            "range": [-100, 100]
        },
    },
    "lists": {
        "list-style-type": {
            "buttons": ['disc', 'circle', 'decimal'],
        },
        "list-style-image": {},
        "list-style-position": {
            "buttons": ['inside', 'outside']
        },
    },
    "measures": {
        "__is-advanced": true,
        "__notice": '<b>Warning:</b> those properties may break your layout, use\'m only if you\'re 100% sure of what you\'re doing.',
        "min-width": {
            "numeric": 1,
            "range": [0, 2000]
        },
        "max-width": {
            "numeric": 1,
            "range": [0, 2000]
        },
        "min-height": {
            "numeric": 1,
            "range": [0, 2000]
        },
        "max-height": {
            "numeric": 1,
            "range": [0, 2000]
        },
        "width": {
            "numeric": 1,
            "range": [0, 2000]
        },
        "height": {
            "numeric": 1,
            "range": [0, 2000]
        },
    },
    "positioning": {
        "__is-advanced": true,
        "__notice": '<b>Warning:</b> those properties may break your layout, use\'m only if you\'re 100% sure of what you\'re doing.',
        "position": {
            "dropdown": ['static', 'relative', 'absolute', 'fixed']
        },
        "top": {
            "numeric": 1,
            "slidable": 1,
            "range": [-1000, 1000]
        },
        "right": {
            "numeric": 1,
            "slidable": 1,
            "range": [-1000, 1000]
        },
        "bottom": {
            "numeric": 1,
            "slidable": 1,
            "range": [-1000, 1000]
        },
        "left": {
            "numeric": 1,
            "slidable": 1,
            "range": [-1000, 1000]
        }
    },
    "extra": {
        "box-shadow": {
            "set_none": 1,
        },
        "float": {
            "buttons": ['none', 'left', 'right']
        },
        "visibility": {
            "buttons": ['visible', 'hidden'],
        },
        "opacity": {
            "slidable": 1,
            "range": [0, 1]
        },
        "box-sizing": {
            "buttons": ['border-box', 'content-box']
        },
        "display": {
            "buttons": ['none', 'block', 'inline', 'inline-block']
        },
        "transform": {},
        "transition": {
            "set_none": 1,
        }
    }
}
var global_tips = {
    '.count-els-in-page span': {
        'desc': 'Instances of this element on the page',
        'dir': 'n'
    },
    '.csshero-selector .counter': {
        'desc': 'Instances of this element on the page',
        'dir': 'w'
    },
    '.csshero-change-editor-font-size.plus': {
        'desc': 'Increase font size',
        'dir': 's'
    },
    '.csshero-change-editor-font-size.minus': {
        'desc': 'Decrease font size',
        'dir': 's'
    },
    '.enable-nav .csshero-n': {
        'desc': 'Enable Navigation',
        'dir': 'n'
    },
    '.enable-nav .csshero-s': {
        'desc': 'Enable Selection',
        'dir': 'n'
    },
    '.show-theme-code': {
        'desc': 'Show inherited styles from theme',
        'dir': 'w'
    }
}
var inspector_themes = {
    'solarized': {
        'bg': '#fdf6e3',
        'tx': '#657b83',
        'nu': '#dc322f',
        'pr': '#268bd2',
        'at': '#2aa198',
        'qu': '#6c71c4',
        'cm': '#dc9240',
        'va': '#ff5722',
    },
    'solarized-dark': {
        'bg': '@alt',
        'tx': '#dde1f6',
        'nu': '#a3eea0',
        'pr': '#f9867b',
        'at': '#dde1f6',
        'qu': '#eddc96',
        'cm': '#9e9e9e',
        'va': '#74ffea',
    },
    'octo-cat': {
        'bg': '#fff',
        'tx': '#795ba5',
        'nu': '#a9175d',
        'pr': '#0085b5',
        'at': '#333',
        'qu': '#61a459',
        'cm': '#9e9e9e',
        'va': '#ff4c88',
    },
    'padawan': {
        'bg': '@alt1',
        'tx': '#92bfbf',
        'nu': '#ecec89',
        'pr': '#b4d388',
        'at': '#92bfbf',
        'qu': '#f49d62',
        'cm': '#ffc107',
        'va': '#a49fff',
    },
    'desert': {
        'bg': '@alt1',
        'tx': '#ddd',
        'nu': '#509cdd',
        'pr': '#d27e34',
        'at': '#509cdd',
        'qu': '#ddd',
        'cm': '#b4995c',
        'va': '#ff9730',
    },
}
var inspector_logo = '<svg version="1.1" class="inspector_logo" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="82px" height="10px" viewBox="0 0 82 10" enable-background="new 0 0 82 10" xml:space="preserve"><g> <path d="M0,9.826l2.125-9.667h2.921L2.921,9.826H0z"/><path d="M10.961,9.826L8.503,4.811L7.405,9.826H4.484l2.125-9.667h3.008l2.313,4.696l1.041-4.696h2.921l-2.125,9.667H10.961z"/><path d="M15.073,8.116l1.735-2.087c0.665,0.869,2.024,1.478,3.324,1.478c0.55,0,0.766-0.247,0.766-0.42 c0-0.812-4.611-0.783-4.611-3.609c0-1.682,1.388-3.464,4.134-3.464c1.576,0,3.151,0.551,4.207,1.609l-1.749,2.029 c-0.796-0.797-2.025-1.174-2.935-1.174c-0.377,0-0.593,0.174-0.593,0.391c0,0.768,4.627,0.812,4.627,3.609 c0,2.029-1.59,3.522-4.077,3.522C17.849,10,16.027,9.261,15.073,8.116z"/><path d="M24.202,9.826l2.125-9.667h5.089c1.62,0,2.834,1.275,2.834,2.855c0,1.405-0.925,3.768-4.265,3.768h-2.197l-0.665,3.043 H24.202z M30.129,4.232c0.536,0,1.1-0.319,1.1-0.884c0-0.435-0.304-0.638-0.796-0.638h-1.749l-0.332,1.522H30.129z"/><path d="M33.777,9.826l2.125-9.667h7.316L42.655,2.71h-4.396l-0.202,0.956h4.295l-0.564,2.551h-4.295l-0.231,1.058h4.395 l-0.564,2.551H33.777z"/><path d="M42.804,5.565C42.804,2.217,45.392,0,48.602,0c2.819,0,4.178,1.652,4.627,3.203l-2.805,0.884 C50.25,3.188,49.484,2.58,48.471,2.58c-1.561,0-2.645,1.333-2.645,2.783c0,1.102,0.838,2.058,2.168,2.058 c0.751,0,1.619-0.493,1.952-1.116l2.284,1.479C51.031,9.521,49.151,10,47.836,10C45.074,10,42.804,8.289,42.804,5.565z"/><path d="M54.405,9.826l1.562-7.116h-2.589l0.564-2.551h8.082L61.46,2.71h-2.573l-1.561,7.116H54.405z"/><path d="M61.276,5.565C61.276,2.478,63.719,0,67.074,0c2.848,0,5.016,1.797,5.016,4.406c0,3.087-2.429,5.594-5.783,5.594 C63.444,10,61.276,8.188,61.276,5.565z M69.068,4.638c0-1.189-0.866-2.058-2.168-2.058c-1.533,0-2.602,1.304-2.602,2.783 c0,1.188,0.868,2.058,2.168,2.058C67.999,7.42,69.068,6.116,69.068,4.638z"/><path d="M77.373,9.826L76.71,6.783h-1.171l-0.665,3.043h-2.921l2.125-9.667h4.684C80.511,0.159,82,1.304,82,3.086 c0,1.711-1.112,3.029-2.371,3.478l0.955,3.261H77.373z M77.88,4.232c0.637,0,1.1-0.276,1.1-0.826c0-0.406-0.361-0.696-0.81-0.696 h-1.735l-0.332,1.522h1.734H77.88z"/></g></svg>';
var demo_color = '#4289dc';
function return_plugin_url() {
    var nino = $('#csshero-body').attr('id')
    console.log(nino)
}
function return_label(name) {
    var label = '&:before{content:"' + name + '";position:absolute;top:50%;left:50%;line-height:24px;width:100px;margin:-12px -50px;background:fade(black,45%);color:white;border-radius:3px;font-weight:bold;z-index:3;}'
    return label;
}
var system_global_classes = {
    ".btn-3d(@color:#4289dc)": {
        "cla_prop": "\
   .btn-reset();\
   padding:.7vw 2vw;\
   text-transform:uppercase;\
   border:0 solid darken(@color,10%);\
   background:@color;\
   border-bottom-width:5px;\
   border-radius:5px 5px 7px 7px;\
   color:fade(contrast(@color),70%);",
        "cla_type": "system_cla",
        "cla_desc": "A classic 3d effect button with customisable color",
        "cla_cat": "Buttons",
        'render_style': 'margin: 30px auto;',
    },
    ".btn-traditional(@color:#4289dc)": {
        "cla_prop": "\
   .btn-reset();\
   @text:contrast(@color);\
   @shadow:contrast(@text);\
   background:@color;\
   .gradient(to top,@color,darken(@color,10%));\
   text-shadow:0 1px 0 fade(@shadow,30%);\
   border:1px solid darken(@color,15%);\
   color:fade(@text,70%);\
   padding:.5vw 2vw;\
   border-radius:5px;\
   box-shadow:inset 0 1px 0px fade(lighten(@color,30%),30%);",
        "cla_type": "system_cla",
        "cla_desc": "Web 2.0 button style",
        "cla_cat": "Buttons",
        'render_style': 'margin: 30px auto;',
    },
    ".btn-grad(@color:#4289dc)": {
        "cla_prop": "\
   .btn-reset();\
   @c1:spin(@color,120);\
   @c2:darken(@color,60%);\
   @c3:contrast(darken(mix(@color,@c1),30%));\
   @c4:contrast(@c3);\
   .gradient(45deg, @color 10%,@c1);\
   box-shadow:0 20px 30px fade(@c2,30%);\
   border-radius:5px;\
   padding:1.5vw 3vw;\
   color:@c3;\
   text-shadow:0 1px 0px fade(@c4,20%);\
   min-width:200px;\
   &:hover{\
    box-shadow:0 10px 20px fade(@c2,30%);\
   }",
        "cla_type": "system_cla",
        "cla_desc": "A modern, gradient styled button, choose the starting color he will do the rest",
        "cla_cat": "Buttons",
        'render_style': 'margin: 30px auto;',
    },
    ".btn-pill(@color:#4289dc)": {
        "cla_prop": "\
   .btn-reset();\
   background:transparent;\
   border:2px solid @color;\
   border-radius:150px;\
   color:@color;\
   padding: 5px 20px;\
   &:hover{\
    background:fade(@color,20%);\
   }",
        "cla_type": "system_cla",
        "cla_desc": "A very simple pill button with hover effect",
        "cla_cat": "Buttons",
        'render_style': 'margin: 30px auto;',
    },
    ".rect-button(@color:black)": {
        "cla_prop": ".btn-reset();\
     text-transform:uppercase;\
     border: 1px solid @color;\
     padding: 1vw 2vw;\
     color:@color;\
     border-radius:2px;\
     background:transparent;\
     .transition();\
     &:hover{\
      background:@color;\
      color:contrast(@color);\
     }",
        "cla_type": "system_cla",
        "cla_desc": "Simple square button with fill on hover effect",
        "cla_cat": "Buttons",
        'render_style': 'margin:10px;',
    },
    ".btn-reset()": {
        "cla_prop": "&:before,&:after{display:none;}text-align:center;text-decoration:none;font-style:normal;text-shadow:none;display:inline-block;font-size:14px;line-height:20px;border:none;font-weight:bold;.transition();&:active{position:relative;top:1px;}",
        "cla_type": "system_cla",
        "cla_desc": "Helper",
        "cla_cat": "Buttons",
        'render_style': 'display:none;',
    },
    ".gradient(@direction:to top left,@color1:#4289dc,@color2:#b6aeff)": {
        "cla_prop": "background-image: linear-gradient(@direction,@color1,@color2);",
        "cla_type": "system_cla",
        "cla_desc": "Build background gradients in a breeze, supports direction, start and end color",
        "cla_cat": "Utils",
        'render_style': 'line-height:200px;',
    },
    ".modernList(@color:#444)": {
        "cla_prop": "list-style:none;\
   padding:0;\
   margin:0;\
   border:1px solid @color;\
   border-radius:5px;\
   margin-bottom:10px;\
   > li{\
    list-style:none;\
    .transition();\
    &:hover{\
     background:fade(@color,5%);\
    }\
    padding:10px;\
    border-bottom:1px solid @color;\
    &:last-of-type{\
     border:none;\
    }}",
        "cla_type": "system_cla",
        "cla_desc": "A simple flat list, should be applied on list items such as ULs and OLs",
        "cla_cat": "Utils",
        'render_style': 'margin:10px;',
    },
    ".columns(@count:3,@gap:20px)": {
        "cla_prop": "column-count:@count;column-gap:@gap;",
        "cla_type": "system_cla",
        "cla_desc": "Splits any content into columns",
        "cla_cat": "Utils",
        'render_style': '&:after{content:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,";position:absolute;top:0;left:0;color:#aaa;text-align:left;column-count:2;column-gap:10px;padding:10px;}',
    },
    ".white-card()": {
        "cla_prop": "background:white;padding:2vw;color:#333;border-radius:5px;box-shadow:0 15px 35px rgba(50,50,93,.1), 0 5px 15px rgba(0,0,0,.07);border:none;",
        "cla_type": "system_cla",
        "cla_desc": "A modern card styled box, should be applied on containers",
        "cla_cat": "Utils",
        'render_style': 'margin:10px;',
    },
    ".transition(@timing:300ms)": {
        "cla_prop": "transition: all @timing ease;",
        "cla_type": "system_cla",
        "cla_desc": "using this snippet allows you to apply a transition effect to a given element, using it on links such as buttons and styling the Hover status of it will make the transition between the two statuses smoother when user will hover it.",
        "cla_cat": "Utils",
    },
    ".drop-shadow-subtle(@x: 0, @y: 1px, @blur: 2px, @spread: 0, @alpha: 0.25)": {
        "cla_prop": "box-shadow: @x @y @blur @spread rgba(0, 0, 0, @alpha);",
        "cla_desc": "Subtle drop shadow effect",
        "cla_type": "system_cla",
        "cla_cat": "Shadows",
        'render_style': 'margin: 20px;background:white;line-height:50px;',
    },
    ".drop-shadow-flat(@x: 0, @y: 0px, @blur: 30px, @spread: 0, @alpha: 0.5)": {
        "cla_prop": "box-shadow: @x @y @blur @spread rgba(0, 0, 0, @alpha);",
        "cla_desc": "Flat, lighter shadow effect",
        "cla_type": "system_cla",
        "cla_cat": "Shadows",
        'render_style': 'margin: 20px;background:white;line-height:50px;',
    },
    ".inner-shadow(@x: 0, @y: 1px, @blur: 2px, @spread: 0, @alpha: 0.25)": {
        "cla_prop": "box-shadow: inset @x @y @blur @spread rgba(0, 0, 0, @alpha);",
        "cla_desc": "Sets a small shadow inside the selected element",
        "cla_type": "system_cla",
        "cla_cat": "Shadows",
        'render_style': 'margin: 20px;background:white;line-height:50px;',
    },
    ".divider-arrow(@color:#4289dc)": {
        "cla_prop": "position:relative; overflow:hidden;padding-bottom:50px; &:after, &:before{content:''; position:absolute;bottom:-400px;left:-50%;width:200%;height:400px;background:@color;transform:rotate(5deg);transform-origin:center top; } &:after{transform:rotate(-5deg);}",
        "cla_desc": "An arrow shaped section divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px;',
    },
    ".divider-diagonal(@color:#4289dc)": {
        "cla_prop": "position:relative; overflow:hidden; padding-bottom:150px; &:before{-webkit-backface-visibility: hidden;box-shadow: inset 0 0 30px fade(black,20%);content:'';width:100%;height:50px;position:absolute;bottom:-300px;left:-50%;width:200%;height:400px;background:@color;transform:rotate(5deg);transform-origin:center top;}",
        "cla_desc": "A diagonal section divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px',
    },
    ".divider-3-dots(@color:#4289dc)": {
        "cla_prop": "position:relative; padding-bottom:50px;&:before{display:block;position:absolute;content:'';bottom: 20px;width: 10px;height: 10px;border-radius: 50%;left: 50%;transform: translateX(-50%);background: @color;box-shadow: 20px 0 @color, -20px 0 @color;}",
        "cla_desc": "Medium style 3 dots divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px',
    },
    ".divider-rounded(@color:#4289dc)": {
        "cla_prop": "overflow:hidden; position:relative; padding-bottom:100px; &:after{content:'';position:absolute;bottom:-30px;left:-5%;width:110%;height:130px;background:@color;border-radius:50% 50% 0 0;-webkit-backface-visibility: hidden;box-shadow: inset 0 0 30px fade(black,20%);}",
        "cla_desc": "A rounded section divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px',
    },
    ".divider-spike(@color:#4289dc,@height:80px)": {
        "cla_prop": "padding-bottom:@height;position:relative;&:before,&:after{content:'';position:absolute;bottom:0;width:51%;left:0;height:@height;background:@color;border-radius:0 @height*1.5 0 0;}&:after{left:auto;right:0;border-radius:@height*1.5 0 0 ;}",
        "cla_desc": "A spiked divider, @color should be the color of the following section",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px',
    },
    ".divider-curve-right(@color:#4289dc,@height:150px)": {
        "cla_prop": "overflow:hidden;position:relative;padding-bottom:@height;&:after{content:'';position:absolute;bottom:0;left:-10%;width:120%;height:@height/1.5;background:@color;border-top-right-radius:1500%}",
        "cla_desc": "A right oriented curved divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px',
    },
    ".divider-curve-left(@color:#4289dc,@height:150px)": {
        "cla_prop": "overflow:hidden;position:relative;padding-bottom:@height;&:after{content:'';position:absolute;bottom:0;left:-10%;width:120%;height:@height/1.5;background:@color;border-top-left-radius:1500%}",
        "cla_desc": "A left oriented curved divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px',
    },
    ".divider-fluid(@color:#4289dc,@height:90px,@scale:0.8)": {
        "cla_prop": "\
    padding-bottom:@height*1.1;\
    border-bottom:1px solid @color;\
    position:relative;\
    overflow:hidden;\
    &:after, &:before{\
     content:'';\
     background:@color;\
     position:absolute;\
     transform: scaleY(@scale);\
     transform-origin:bottom;\
     bottom:-1px;\
     left:0%;\
     width:100%;\
     height:@height;\
     mask:url(//cdn.csshero.org/svg/waves-00.svg) -20% bottom;\
     -webkit-mask:url(//cdn.csshero.org/svg/waves-00.svg) -20% bottom;\
     mask-size:auto 100%;\
     -webkit-mask-size:auto 100%;\
     mask-repeat:repeat-x;\
     -webkit-mask-repeat:repeat-x;\
     z-index:5;\
    }\
    &:after{\
     height:@height*1.3;\
     transform: scaleY(@scale*1.5);\
     left:-20%;\
     width:140%;\
     opacity:.3;\
     z-index:4;\
    }\
  ",
        "cla_desc": "Wave style divider",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px;padding:0;',
    },
    ".divider-wave-1(@color:#4289dc,@scale:0.5)": {
        "cla_prop": "\
     z-index: 1;\
     position: relative;\
     overflow: hidden;\
     &:before,&:after{\
      content: '';\
      background: @color;\
      position: absolute;\
      transform-origin: bottom;\
      bottom: -1px;\
      left: 0%;\
      width: 100%;\
      height: 700px;\
      mask: url(//cdn.csshero.org/svg/waves-01.svg) bottom right;\
      -webkit-mask: url(//cdn.csshero.org/svg/waves-01.svg) bottom right;\
      -webkit-mask-size: 100% , 100%;\
      -webkit-mask-size: 100% , 100%;\
      mask-repeat: no-repeat;\
      -webkit-mask-repeat: no-repeat;\
      z-index: -1;\
      transform: scaleY(@scale);\
     }\
     &:after{\
      left: -2%;\
      transform: scaleY(@scale*1.2);\
      opacity: .5;\
      width:104%;\
     }\
  ",
        "cla_desc": "Suuuuperwave",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px;padding:0;',
    },
    ".divider-wave-2(@color:#4289dc,@scale:0.5)": {
        "cla_prop": "\
     z-index: 1;\
     position: relative;\
     overflow: hidden;\
     &:before{\
      content: '';\
      background: @color;\
      position: absolute;\
      transform-origin: bottom;\
      bottom: -1px;\
      left: -1%;\
      width: 102%;\
      height: 300px;\
      mask: url(//cdn.csshero.org/svg/waves-02.svg) bottom right;\
      -webkit-mask: url(//cdn.csshero.org/svg/waves-02.svg) bottom right;\
      -webkit-mask-size: 100% , 100%;\
      -webkit-mask-size: 100% , 100%;\
      mask-repeat: no-repeat;\
      -webkit-mask-repeat: no-repeat;\
      z-index: -1;\
      transform: scaleY(@scale);\
     }\
  ",
        "cla_desc": "Suuuuperwave 2",
        "cla_type": "system_cla",
        "cla_cat": "Dividers",
        'render_style': 'height:100px;padding:0;',
    },
    ".striped-bg-effect()": {
        "cla_prop": "\
   position:relative;\
   z-index:0;\
   overflow:hidden;\
   &:after, &:before{\
    pointer-events:none;\
    content:'';\
    position:absolute;\
    top:10%;\
    left:0;\
    height:50%;\
    -webkit-backface-visibility:hidden;\
    backface-visibility:hidden;\
    transform:skew(0,-15deg);\
    width:70%;\
    transform-origin:top right;\
    background-color:white;\
    mix-blend-mode:overlay;\
    opacity:.3;\
    .gradient(to right,white,black);\
    z-index:-1;\
    }\
   &:after{\
    left:30%;\
    height:100%;\
   }",
        "cla_desc": "A cool striped background effect",
        "cla_type": "system_cla",
        "cla_cat": "Backgrounds",
        'render_style': 'height:100px',
    },
    ".duotonizer(@c1:rgba(240,14,46,1),@c2:rgba(25,37,80,1))": {
        "cla_prop": "\
   position:relative;\
   overflow:hidden;\
   z-index:0;\
   &:after, &:before{\
    pointer-events:none;\
    content:'';\
    position:absolute;\
    top:0;\
    left:0;\
    height:100%;\
    width:100%;\
    background-color:@c1;\
    mix-blend-mode:darken;\
    display:block;\
    z-index:-1;\
    }\
   &:after{\
    mix-blend-mode:lighten;\
    background-color:@c2;\
   }",
        "cla_desc": "Apply on elements with background-image property set to create duo-tone styles. For optimal results @c1 shall be lighter than @c2.",
        "cla_type": "system_cla",
        "cla_cat": "Backgrounds",
        'render_style': 'height:100px',
    },
    ".colorscroller(@c1:red,@c2:blue)": {
        "cla_prop": "\
   background-color:@c1;\
   background-image:linear-gradient(to top,@c1,@c2);\
   background-attachment:fixed;\
  ",
        "cla_desc": "Create scrolling animated gradients in a breeze.",
        "cla_type": "system_cla",
        "cla_cat": "Backgrounds",
        'render_style': 'height:100px',
    },
}
var imgs = {
    'geometric': ['//i.imgur.com/XTHJuL1.png', '//i.imgur.com/xiz4ORU.png', '//i.imgur.com/mDpwxm0.png', '//i.imgur.com/lwy6shD.png', '//i.imgur.com/bByGF3b.png', '//i.imgur.com/AY20rH6.jpg', '//i.imgur.com/hr3TBUI.jpg', '//i.imgur.com/hw9Esog.jpg'],
    'artistic': ['//i.imgur.com/zkdl6q0.png', '//i.imgur.com/dIb8Kn2.png', '//i.imgur.com/nxejlJ3.png', '//i.imgur.com/mojigtK.png', '//i.imgur.com/KxQHZrU.jpg', '//i.imgur.com/VOnPghD.gif', '//i.imgur.com/O9GB9AT.jpg', '//i.imgur.com/VRPWNhm.png', '//i.imgur.com/TIQaMuA.jpg', '//i.imgur.com/bTdRcUq.png', '//i.imgur.com/VeAOCJ8.png'],
    'icons': ['//i.imgur.com/w50C0y0.png', '//i.imgur.com/kxB8uX6.png', '//i.imgur.com/J3b5IwD.jpg', '//i.imgur.com/2kZBWJC.jpg', '//i.imgur.com/V6YtVRM.png', '//i.imgur.com/kqjjSAJ.gif'],
    '3d': ['//i.imgur.com/Bsn619g.png', '//i.imgur.com/BaECdJ3.png', '//i.imgur.com/yjG29fI.png', '//i.imgur.com/VIRGH7Y.gif', '//i.imgur.com/stoKKOR.jpg', '//i.imgur.com/YR1lAzZ.png', '//i.imgur.com/IsnEDMG.png', '//i.imgur.com/PT620Cn.jpg']
}
for (var cat in imgs) {
    var all = imgs[cat];
    var cnt = 0;
    for (var i in all) {
        var img = all[i];
        cnt++;
        var selector = '.bg-' + cat + '-' + cnt + '(@color:#4389dc)';
        var style = 'background-image:url(' + img + ');background-color:@color;background-blend-mode:overlay;background-position:center;background-repeat:repeat;background-size:auto;';
        system_global_classes[selector] = {
            'cla_prop': style,
            'cla_type': 'system_cla',
            'cla_cat': 'Backgrounds',
            'render_style': 'height:100px;',
        }
    }
}
var plugin_root = window.csshero_plugin_root;
var fa_icons = ['500px', 'address-book-o', 'address-book', 'address-card-o', 'address-card', 'adjust', 'adn', 'align-center', 'align-justify', 'align-left', 'align-right', 'amazon', 'ambulance', 'anchor', 'android', 'angellist', 'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down', 'angle-left', 'angle-right', 'angle-up', 'apple', 'archive', 'area-chart', 'arrow-circle-down', 'arrow-circle-left', 'arrow-circle-o-down', 'arrow-circle-o-left', 'arrow-circle-o-up', 'arrow-circle-right', 'arrow-circle-up', 'arrow-down', 'arrow-left', 'arrow-right', 'arrow-up', 'arrows-alt', 'arrows-h', 'arrows-v', 'arrows', 'asl-interpreting', 'asterisk', 'at', 'audio-description', 'automobile', 'backward', 'balance-scale', 'ban', 'bandcamp', 'bank', 'bar-chart-o', 'bar-chart', 'barcode', 'bars', 'bath', 'bathtub', 'battery-0', 'battery-1', 'battery-2', 'battery-3', 'battery-4', 'battery-empty', 'battery-full', 'battery-half', 'battery-quarter', 'battery', 'bed', 'beer', 'behance-square', 'behance', 'bell-o', 'bell-slash-o', 'bell-slash', 'bell', 'bicycle', 'binoculars', 'birthday-cake', 'bitbucket-square', 'bitbucket', 'bitcoin', 'black-tie', 'blind', 'bluetooth-b', 'bluetooth', 'bold', 'bolt', 'bomb', 'book', 'bookmark-o', 'bookmark', 'braille', 'briefcase', 'btc', 'bug', 'building-o', 'building', 'bullhorn', 'bullseye', 'bus', 'buysellads', 'cab', 'calculator', 'calendar-check-o', 'calendar-minus-o', 'calendar-o', 'calendar-plus-o', 'calendar-times-o', 'calendar', 'camera-retro', 'camera', 'car', 'caret-down', 'caret-left', 'caret-right', 'caret-square-o-down', 'caret-square-o-left', 'caret-square-o-up', 'caret-up', 'cart-arrow-down', 'cart-plus', 'cc-amex', 'cc-diners-club', 'cc-discover', 'cc-jcb', 'cc-mastercard', 'cc-paypal', 'cc-stripe', 'cc-visa', 'cc', 'certificate', 'chain-broken', 'chain', 'check-circle-o', 'check-circle', 'check-square-o', 'check-square', 'check', 'chevron-circle-down', 'chevron-circle-left', 'chevron-circle-up', 'chevron-down', 'chevron-left', 'chevron-right', 'chevron-up', 'child', 'chrome', 'circle-o-notch', 'circle-o', 'circle-thin', 'circle', 'clipboard', 'clock-o', 'clone', 'close', 'cloud-download', 'cloud-upload', 'cloud', 'cny', 'code-fork', 'code', 'codepen', 'codiepie', 'coffee', 'cog', 'cogs', 'columns', 'comment-o', 'comment', 'commenting-o', 'commenting', 'comments-o', 'comments', 'compass', 'compress', 'connectdevelop', 'contao', 'copy', 'copyright', 'creative-commons', 'credit-card-alt', 'credit-card', 'crop', 'crosshairs', 'css3', 'cube', 'cubes', 'cut', 'cutlery', 'dashboard', 'dashcube', 'database', 'deaf', 'deafness', 'dedent', 'delicious', 'desktop', 'deviantart', 'diamond', 'digg', 'dollar', 'dot-circle-o', 'download', 'dribbble', 'drivers-license-o', 'drivers-license', 'dropbox', 'drupal', 'edge', 'edit', 'eercast', 'eject', 'ellipsis-h', 'ellipsis-v', 'empire', 'envelope-o', 'envelope-open-o', 'envelope-open', 'envelope-square', 'envelope', 'envira', 'eraser', 'etsy', 'eur', 'euro', 'exchange', 'exclamation-circle', 'exclamation', 'expand', 'expeditedssl', 'external-link', 'eye-slash', 'eye', 'eyedropper', 'fa', 'facebook-f', 'facebook-official', 'facebook-square', 'facebook', 'fast-backward', 'fast-forward', 'fax', 'feed', 'female', 'fighter-jet', 'file-archive-o', 'file-audio-o', 'file-code-o', 'file-excel-o', 'file-image-o', 'file-movie-o', 'file-o', 'file-pdf-o', 'file-photo-o', 'file-picture-o', 'file-powerpoint-o', 'file-sound-o', 'file-text-o', 'file-text', 'file-video-o', 'file-word-o', 'file-zip-o', 'file', 'files-o', 'film', 'filter', 'fire-extinguisher', 'fire', 'firefox', 'first-order', 'flag-checkered', 'flag-o', 'flag', 'flash', 'flask', 'flickr', 'floppy-o', 'folder-o', 'folder-open-o', 'folder-open', 'folder', 'font-awesome', 'font', 'fonticons', 'fort-awesome', 'forumbee', 'forward', 'foursquare', 'free-code-camp', 'frown-o', 'futbol-o', 'gamepad', 'gavel', 'gbp', 'ge', 'gear', 'gears', 'genderless', 'get-pocket', 'gg-circle', 'gg', 'gift', 'git-square', 'git', 'github-alt', 'github-square', 'github', 'gitlab', 'gittip', 'glass', 'glide-g', 'glide', 'globe', 'google-plus-circle', 'google-plus-square', 'google-plus', 'google-wallet', 'google', 'graduation-cap', 'gratipay', 'grav', 'group', 'h-square', 'hacker-news', 'hand-grab-o', 'hand-lizard-o', 'hand-o-down', 'hand-o-left', 'hand-o-right', 'hand-o-up', 'hand-paper-o', 'hand-peace-o', 'hand-pointer-o', 'hand-rock-o', 'hand-scissors-o', 'hand-spock-o', 'hand-stop-o', 'handshake-o', 'hard-of-hearing', 'hashtag', 'hdd-o', 'header', 'headphones', 'heart-o', 'heart', 'heartbeat', 'history', 'home', 'hospital-o', 'hotel', 'hourglass-1', 'hourglass-2', 'hourglass-3', 'hourglass-end', 'hourglass-half', 'hourglass-o', 'hourglass-start', 'hourglass', 'houzz', 'html5', 'i-cursor', 'id-badge', 'id-card-o', 'id-card', 'ils', 'image', 'imdb', 'inbox', 'indent', 'industry', 'info-circle', 'info', 'inr', 'instagram', 'institution', 'internet-explorer', 'intersex', 'ioxhost', 'italic', 'joomla', 'jpy', 'jsfiddle', 'key', 'keyboard-o', 'krw', 'language', 'laptop', 'lastfm-square', 'lastfm', 'leaf', 'leanpub', 'legal', 'lemon-o', 'level-down', 'level-up', 'life-bouy', 'life-buoy', 'life-ring', 'life-saver', 'lightbulb-o', 'line-chart', 'link', 'linkedin-square', 'linkedin', 'linode', 'linux', 'list-alt', 'list-ol', 'list-ul', 'list', 'location-arrow', 'lock', 'long-arrow-down', 'long-arrow-left', 'long-arrow-right', 'long-arrow-up', 'low-vision', 'magic', 'magnet', 'mail-forward', 'mail-reply-all', 'mail-reply', 'male', 'map-marker', 'map-o', 'map-pin', 'map-signs', 'map', 'mars-double', 'mars-stroke-h', 'mars-stroke-v', 'mars-stroke', 'mars', 'maxcdn', 'meanpath', 'medium', 'medkit', 'meetup', 'meh-o', 'mercury', 'microchip', 'microphone-slash', 'microphone', 'minus-circle', 'minus-square-o', 'minus-square', 'minus', 'mixcloud', 'mobile-phone', 'mobile', 'modx', 'money', 'moon-o', 'mortar-board', 'motorcycle', 'mouse-pointer', 'music', 'navicon', 'neuter', 'newspaper-o', 'object-group', 'object-ungroup', 'odnoklassniki', 'opencart', 'openid', 'opera', 'optin-monster', 'outdent', 'pagelines', 'paint-brush', 'paper-plane-o', 'paper-plane', 'paperclip', 'paragraph', 'paste', 'pause-circle-o', 'pause-circle', 'pause', 'paw', 'paypal', 'pencil-square-o', 'pencil-square', 'pencil', 'percent', 'phone-square', 'phone', 'photo', 'picture-o', 'pie-chart', 'pied-piper-alt', 'pied-piper-pp', 'pied-piper', 'pinterest-p', 'pinterest-square', 'pinterest', 'plane', 'play-circle-o', 'play-circle', 'play', 'plug', 'plus-circle', 'plus-square-o', 'plus-square', 'plus', 'podcast', 'power-off', 'print', 'product-hunt', 'puzzle-piece', 'qq', 'qrcode', 'question-circle-o', 'question-circle', 'question', 'quora', 'quote-left', 'quote-right', 'ra', 'random', 'ravelry', 'rebel', 'recycle', 'reddit-alien', 'reddit-square', 'reddit', 'refresh', 'registered', 'remove', 'renren', 'reorder', 'repeat', 'reply-all', 'reply', 'resistance', 'retweet', 'rmb', 'road', 'rocket', 'rotate-left', 'rotate-right', 'rouble', 'rss-square', 'rss', 'rub', 'ruble', 'rupee', 's15', 'safari', 'save', 'scissors', 'scribd', 'search-minus', 'search-plus', 'search', 'sellsy', 'send-o', 'send', 'server', 'share-alt-square', 'share-alt', 'share-square-o', 'share-square', 'share', 'shekel', 'sheqel', 'shield', 'ship', 'shirtsinbulk', 'shopping-bag', 'shopping-basket', 'shopping-cart', 'shower', 'sign-in', 'sign-language', 'sign-out', 'signal', 'signing', 'simplybuilt', 'sitemap', 'skyatlas', 'skype', 'slack', 'sliders', 'slideshare', 'smile-o', 'snapchat-ghost', 'snapchat-square', 'snapchat', 'snowflake-o', 'soccer-ball-o', 'sort-alpha-asc', 'sort-alpha-desc', 'sort-amount-asc', 'sort-amount-desc', 'sort-asc', 'sort-desc', 'sort-down', 'sort-numeric-asc', 'sort-numeric-desc', 'sort-up', 'sort', 'soundcloud', 'space-shuttle', 'spinner', 'spoon', 'spotify', 'square-o', 'square', 'stack-exchange', 'stack-overflow', 'star-half-empty', 'star-half-full', 'star-half-o', 'star-half', 'star-o', 'star', 'steam-square', 'steam', 'step-backward', 'step-forward', 'stethoscope', 'sticky-note-o', 'sticky-note', 'stop-circle-o', 'stop-circle', 'stop', 'street-view', 'strikethrough', 'stumbleupon-circle', 'stumbleupon', 'subscript', 'subway', 'suitcase', 'sun-o', 'superpowers', 'superscript', 'support', 'table', 'tablet', 'tachometer', 'tag', 'tags', 'tasks', 'taxi', 'telegram', 'television', 'tencent-weibo', 'terminal', 'text-height', 'text-width', 'th-large', 'th-list', 'th', 'themeisle', 'thermometer-0', 'thermometer-1', 'thermometer-2', 'thermometer-3', 'thermometer-4', 'thermometer-empty', 'thermometer-full', 'thermometer-half', 'thermometer-quarter', 'thermometer', 'thumb-tack', 'thumbs-down', 'thumbs-o-down', 'thumbs-o-up', 'thumbs-up', 'ticket', 'times-circle-o', 'times-circle', 'times-rectangle-o', 'times-rectangle', 'times', 'tint', 'toggle-down', 'toggle-left', 'toggle-off', 'toggle-on', 'toggle-right', 'toggle-up', 'trademark', 'train', 'transgender-alt', 'transgender', 'trash-o', 'trash', 'tree', 'trello', 'tripadvisor', 'trophy', 'truck', 'try', 'tty', 'tumblr-square', 'tumblr', 'turkish-lira', 'tv', 'twitch', 'twitter-square', 'twitter', 'umbrella', 'underline', 'undo', 'universal-access', 'university', 'unlink', 'unlock-alt', 'unlock', 'unsorted', 'upload', 'usb', 'usd', 'user-circle-o', 'user-circle', 'user-md', 'user-o', 'user-plus', 'user-secret', 'user-times', 'user', 'users', 'vcard-o', 'vcard', 'venus-double', 'venus-mars', 'venus', 'viacoin', 'viadeo-square', 'viadeo', 'video-camera', 'vimeo-square', 'vimeo', 'vine', 'vk', 'volume-down', 'volume-off', 'volume-up', 'warning', 'wechat', 'weibo', 'weixin', 'whatsapp', 'wheelchair-alt', 'wheelchair', 'wifi', 'wikipedia-w', 'window-close-o', 'window-close', 'window-maximize', 'window-minimize', 'window-restore', 'windows', 'won', 'wordpress', 'wpbeginner', 'wpexplorer', 'wpforms', 'wrench', 'xing-square', 'xing', 'y-combinator-square', 'y-combinator', 'yahoo', 'yc-square', 'yc', 'yelp', 'yen', 'yoast', 'youtube-play', 'youtube-square', 'youtube'];
var fa_icons_cdn = 'https://cdn.rawgit.com/encharm/Font-Awesome-SVG-PNG/266b63d5/black/svg/';
var faselector = '.icon-fa(@icon:heart,@position:top-center,@size:24px,@color:#eee,@bg:' + demo_color + ',@border:0px,@border-color:' + demo_color + ')';
var fastyle = "\
   @half-size:@size*.5;\
   @space-size:@size*2;\
   position:relative;\
   &:before{\
    content:'';\
    box-sizing:border-box;\
    position:absolute;\
    top:0;\
    left:50%;\
    background:@bg;\
    width:@space-size;\
    height:@space-size;\
    margin-left:-@space-size*.5;\
    border-radius:50%;\
    border:@border solid @border-color;\
    display:block;\
    }\
   &:after{\
    mask:url('" + fa_icons_cdn + "@{icon}.svg');\
    -webkit-mask:url('" + fa_icons_cdn + "@{icon}.svg');\
    -webkit-mask-size:100% 100%;\
    mask-size:100% 100%;\
    content:'';\
    width:@size;\
    height:@size;\
    background:@color;\
    position:absolute;\
    top:@space-size*.5;\
    left:50%;\
    margin-top:-@half-size;\
    margin-left:-@half-size;\
    display:block;\
   }\
   & when(@position = top-center){\
    padding-top:@space-size*1.2;\
   }\
   & when(@position = left){\
    padding-left:@space-size*1.2;\
    &:before{\
     left:0;\
     top:50%;\
     margin:-@space-size*.5 0;\
    }\
    &:after{\
     top:50%;\
     left:@space-size*.5;\
     margin:-@half-size;\
    }\
   }\
   & when(@position = top-left){\
    padding-top:@space-size*1.2;\
    &:before{\
     left:0;\
     margin-left:inherit;\
     margin-top:inherit;\
    }\
    &:after{\
     left:@space-size*.5;\
     top:@space-size*.5;\
     margin:-@half-size;\
    }\
   }";
system_global_classes[faselector] = {
    'cla_prop': fastyle,
    'cla_type': 'system_cla',
    'cla_cat': 'Icon Sets',
    'cla_desc': 'Font Awesome icon set, browse the full icon list check <a href="http://fontawesome.io/icons/" target="_blank">here &rarr;</a>.',
    'cla_ddowns': {
        '@position': ['top-left', 'top-center', 'left'],
        '@icon': fa_icons,
    },
    'render_style': 'padding-top:15px!important;margin-top:10px;',
};
function csshero_prepare_font_manager(additional_gfonts, new_font) {
    var gfontlist = default_gfontlist;
    if (additional_gfonts) {
        var gfontlist = gfontlist.concat(additional_gfonts)
    }
    var all_wrap = $('.overlay-inner[data-service="font-manager"]');
    all_wrap.addClass('while-loading')
    gfontlist.sort(sortAlphabetical);
    var lister = $('.font-manager-side .all-g-fonts').empty()
    $.ajax({
        dataType: "json",
        url: "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyDxladV-apMhr_5M_D_iR-pe6mqJ02gEmI",
        success: function(data) {
            var fonts = data.items;
            u = 0;
            var all_google_fonts_list = [];
            $(fonts).each(function(f) {
                var font = fonts[f];
                var cat = font.category;
                var fam = font.family;
                var fam_nice = fam.replace(/ /g, '+');
                var vra = font.variants;
                if ($('.fonts-sorter li[data-sort="' + cat + '"]').length == 0) {
                    $('.fonts-sorter ul').append('<li data-sort="' + cat + '">' + cat + '</li>');
                }
                all_google_fonts_list.push(fam)
                if (vra.length > 1) {
                    var var_len = vra.length
                } else {
                    var var_len = '';
                }
                var full_variant = [];
                for (var v in vra) {
                    var variant = vra[v];
                    var end_variant = variant;
                    if (variant.indexOf('0italic') > -1)
                        end_variant = variant.replace(/0italic/g, '0i');
                    full_variant.push(end_variant)
                }
                var all_variations = full_variant.join(',');
                var f_link = '<link data-font-loader-name="' + fam_nice + '" data-font-loader-weights="' + all_variations + '" href="https://fonts.googleapis.com/css?family=' + fam_nice + ':' + all_variations + '" rel="stylesheet">';
                var ldr = $('#csshero-font-loader', window.frames['csshero-iframe-main-page'].document);
                all_google_fonts_list.push(fam)
                if (gfontlist.indexOf(fam) > -1) {
                    ldr.append(f_link);
                    var font_in_list = '<li data-cat="' + cat + '" class="filter-' + cat + ' filter-all filter-in-project" data-cat="' + cat + '" data-fam-nice="' + fam_nice + '" data-fam="' + fam + '" data-all-vars="' + all_variations + '">' + fam + '<span class="vlen">' + var_len + '</span></li>';
                } else {
                    var font_in_list = '<li data-cat="' + cat + '" class="filter-' + cat + ' filter-all" data-fam-nice="' + fam_nice + '" data-fam="' + fam + '" data-all-vars="' + all_variations + '">' + fam + '<span class="vlen">' + var_len + '</span></li>';
                }
                lister.append(font_in_list)
            })
            $('.csshero-font-checker').attr('data-all-google-fonts', all_google_fonts_list.join(','));
        }
    })
    lister.perfectScrollbar();
    setTimeout(function() {
        $('.font-manager-area.active .font-side-lister li:first-of-type').trigger('click')
        all_wrap.removeClass('while-loading')
    }, 400)
    $('.fonts-sorter input').val('')
    if (typekit_id && typekit_id != '') {
        $('#TKID').val(typekit_id)
        csshero_load_typekit(typekit_id)
    } else {
        $('.all-tk-fonts').empty();
        $('.font-manager-area[data-area="t"]').addClass('no-fonts-loaded')
        $('.font-manager-browser.typekit-fonts').empty();
    }
}
$(document).on('click', '.font-side-lister li', function() {
    var t = $(this);
    var fam = t.attr('data-fam');
    var vars = t.attr('data-all-vars')
    var cat = t.attr('data-cat')
    $(this).closest('.font-side-lister').find('li.active').removeClass('active')
    if (t.is('.is-tk')) {
        csshero_build_font_specimen(fam, vars, '', 'typekit-fonts')
    } else {
        csshero_build_font_specimen(fam, vars, cat, 'google-fonts')
    }
    t.addClass('active')
    t.closest('.font-manager-area').removeClass('no-fonts-loaded');
}).on('click', '.save-typekit', function() {
    typekit_id = $('#TKID').val();
    csshero_prepare_font_manager(stored_extra_gfonts)
    csshero_save_step('fonts', typekit_id);
}).on('click', '.font-adder', function(e) {
    var t = $(this);
    var font = t.attr('data-font-load');
    var li = $(this).closest('.font-manager-area').find('.font-side-lister li[data-fam="' + font + '"]');
    var fam_nice = li.attr('data-fam-nice');
    if (!t.is('.in-project')) {
        collection_fonts.push(font)
        t.addClass('in-project')
        li.addClass('filter-in-project');
        var all_variations = li.attr('data-all-vars')
        if (!li.is('.is-tk')) {
            stored_extra_gfonts.push(font)
            var f_link = '<link data-font-loader-name="' + fam_nice + '" data-font-loader-weights="' + all_variations + '" href="https://fonts.googleapis.com/css?family=' + fam_nice + ':' + all_variations + '" rel="stylesheet">';
            var ldr = $('#csshero-font-loader', window.frames['csshero-iframe-main-page'].document);
            ldr.append(f_link)
        }
    } else {
        var cur_arr = $('.csshero-step.cur').data('step-data')
        var used_font = cur_arr.indexOf('"font-family":"' + font + '"');
        if (used_font == -1 || confirm(font + ' is currently used in your project, are you sure you want to remove it from the collection?')) {
            collection_fonts = $.grep(collection_fonts, function(v) {
                return v != font;
            });
            stored_extra_gfonts = $.grep(stored_extra_gfonts, function(v) {
                return v != font;
            });
            default_gfontlist = $.grep(default_gfontlist, function(v) {
                return v != font;
            })
            t.removeClass('in-project')
            li.removeClass('filter-in-project');
            $('#csshero-font-loader link[data-font-loader-name="' + fam_nice + '"]', window.frames['csshero-iframe-main-page'].document).remove();
        }
    }
    csshero_save_step('fonts', $('#TKID').val());
    csshero_fill_fonts();
    var el = $('.csshero-code-wrap').attr('data-editing_element');
    if (el && el != '') {
        csshero_click_on_editable('', e, el)
    }
}).on('click', '.fonts-sorter .exp', function(event) {
    event.stopPropagation();
    $('.fonts-sorter').toggleClass('open')
}).on('mouseleave', '.fonts-sorter.open', function() {
    $(this).removeClass('open')
}).on('click', '.fonts-sorter.open li', function(event) {
    var s = $(this).attr('data-sort')
    $('.fonts-sorter').removeClass('open');
    $('.fonts-sorter .search-font').val(s).trigger('keyup')
}).on('click', '.font-specimen .inverter', function() {
    $(this).closest('.font-specimen').toggleClass('inverted')
}).on('keyup', '.fonts-sorter .search-font', csshero_throttle(function(e) {
    var v = $(this).val().toLowerCase();
    if ($('.fonts-sorter ul li[data-sort="' + v + '"]').length > 0) {
        $('.all-g-fonts li').addClass('hidden')
        $('.all-g-fonts li.filter-' + v).removeClass('hidden')
    } else {
        $('.all-g-fonts li').each(function() {
            var f = $(this).attr('data-fam').toLowerCase()
            if (f.indexOf(v) > -1) {
                $(this).removeClass('hidden')
            } else {
                $(this).addClass('hidden')
            }
        })
    }
}, 500)).on('click', '.font-manager-tab > span', function() {
    $('.font-manager-tab > span.active').removeClass('active');
    var d = $(this).attr('data-area');
    $(this).addClass('active')
    $('.font-manager-area').removeClass('active')
    $('.font-manager-area[data-area="' + d + '"]').addClass('active');
    if ($('.font-manager-area.active .font-side-lister li.active').length == 0) {
        $('.font-manager-area.active .font-side-lister li:first-of-type').trigger('click')
    }
})
function csshero_build_font_specimen(fam, vars, cat, type) {
    var fam_nice = fam.replace(/ /g, '+');
    if (type == 'google-fonts') {
        var f_link = '<link data-font-loader-name="' + fam_nice + '" data-font-loader-weights="' + vars + '" href="https://fonts.googleapis.com/css?family=' + fam_nice + ':' + vars + '" rel="stylesheet">';
        var fam_link = '<a href="https://fonts.google.com/specimen/' + fam_nice + '" target="_blank">&rarr; View on Google Fonts</a>';
    } else {
        var f_link = '';
        var fam_link = '';
    }
    if (!cat || cat == '')
        var cat = 'Typekit'
    var container = $('.font-manager-browser.' + type).empty().addClass('hidden');
    var vars_arr = vars.split(',');
    var f_specimen = '';
    for (var v in vars_arr) {
        var variation = vars_arr[v];
        var original_variation = variation;
        if (variation.indexOf('i') > -1) {
            var font_style = 'italic';
            if (variation != 'italic')
                var variation = variation.replace(/i/g, '');
        } else {
            var font_style = 'normal';
        }
        f_specimen += '<div class="font-specimen"><label>' + original_variation + '</label>\
     <span class="inverter"></span>\
     <div style="font-family:' + fam + ';font-style:' + font_style + ';font-weight:' + variation + ';">\
     <span class="h1">The quick brown fox</span>\
     <span class="h2">The quick brown fox</span>\
     <span class="h3">The quick brown fox</span>\
     <span class="p"> Lorem ipsum dolor sit amet, consectetur adipisci elit, sed eiusmod tempor incidunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.</span>\
    </div></div>';
    }
    $('.font-manager-top h1').html('<span class="c">' + cat + ' \\</span> <span>' + fam + '</span>' + fam_link)
    var gfontlist = default_gfontlist;
    if (stored_extra_gfonts) {
        var gfontlist = gfontlist.concat(stored_extra_gfonts)
    }
    if (collection_fonts.indexOf(fam) > -1) {
        $('.font-manager-bottom .font-adder').addClass('in-project')
    } else {
        $('.font-manager-bottom .font-adder').removeClass('in-project')
    }
    $('.font-manager-bottom .font-adder').attr('data-font-load', fam)
    container.append(f_link + f_specimen).perfectScrollbar();
    setTimeout(function() {
        container.removeClass('hidden')
    }, 500)
}
function csshero_load_typekit(ID) {
    var rand = Math.round(new Date().getTime() + (Math.random() * 100));
    loadScript('https://use.typekit.net/' + ID + '.js?v=' + rand, csshero_load_Typekit_iframe, cssheroframe)
    loadScript('https://use.typekit.net/' + ID + '.js?v=' + rand, csshero_load_Typekit_locally, document)
}
function csshero_load_Typekit_iframe() {
    var TK = document.getElementById("csshero-iframe-main-page").contentWindow.Typekit;
    try {
        TK.load({
            async: true
        });
    } catch (e) {
        console.log(e)
    }
}
function csshero_load_Typekit_locally() {
    var TK_wrap = $('.typekit-fonts').empty();
    var TK = Typekit;
    try {
        TK.load({
            async: true
        });
    } catch (e) {
        console.log(e)
    }
    var TK_fams = TK.config['fc'];
    TK_wrap.empty();
    var TK_fams_len = TK_fams.length;
    var TK_cntr = 0;
    var lister = $('.all-tk-fonts').empty()
    for (var t in TK_fams) {
        TK_cntr++;
        var TK_font = TK_fams[t];
        var TK_font_fam = TK_font['family'];
        if ($.inArray(TK_font_fam, collection_fonts) > -1) {
            var is_used_font = 'in-project'
        } else {
            var is_used_font = '';
        }
        var TK_weight = 400;
        var TK_style = 'normal';
        if (TK_font['descriptors']) {
            var TK_desc = TK_font['descriptors'];
            if (TK_desc.weight)
                var TK_weight = TK_desc.weight;
            if (TK_desc.style)
                var TK_style = TK_desc.style;
        }
        if (lister.find('li[data-fam="' + TK_font_fam + '"]').length == 0) {
            lister.append('<li class="is-tk filter-' + is_used_font + '" data-fam-nice="' + TK_font_fam + '" data-fam="' + TK_font_fam + '" data-all-vars="' + TK_weight + '">' + TK_font_fam + '<span class="vlen"></span></li>');
        } else {
            var curs = lister.find('li[data-fam="' + TK_font_fam + '"]').attr('data-all-vars').split(',');
            if (curs.indexOf(TK_weight) == -1)
                curs.push(TK_weight);
            lister.find('li[data-fam="' + TK_font_fam + '"]').attr('data-all-vars', curs.join(','))
            lister.find('li[data-fam="' + TK_font_fam + '"] .vlen').text(curs.length)
        }
    }
}
var base_pattern_url = 'https://www.colourlovers.com/api/patterns/top';
$(window).on('csshero-interface-loaded', function() {
    var widget = $('.csshero-editor-block-widget[data-property-name="background-image"]');
    if (!widget.hasClass('csshero-cl-patterns-loaded')) {
        widget.addClass('csshero-cl-patterns-loaded')
        var buttons_area = widget.find('.csshero-buttons-wrap');
        buttons_area.append('<span class="csshero-widget-btn csshero-load-patterns">Pattern</span>').after('<div class="csshero-patterns-browser "><div class="csshero-patterns-head"><div class="csshero-patterns-search-wrap"><input type="text" placeholder="search by text, hex or color @variable" /></div><span class="close-bg-img-tab"></span></div><div class="csshero-patterns-wrap"></div><div class="csshero-patterns-footer">Patterns by <a href="//colourlovers.com" target="_blank">COLOURlovers</a><div class="patterns-nav"><span class="prev">Prev</span><span class="next">Next</span></div></div></div>')
    }
})
function csshero_close_img_panels(t) {}
function csshero_load_cl_patterns(url, page) {
    var per_page = 9;
    var offset = page * per_page;
    var search_term = $('.csshero-patterns-browser').attr('data-search-term')
    if (search_term) {
        if (search_term.indexOf('#') > -1) {
            var search_term = search_term.split('#').join('');
            var search_term = '&hex=' + search_term;
        } else {
            if (search_term.indexOf('@') > -1) {
                if (csshero_variables[search_term] && csshero_variables[search_term]['var_prop'].indexOf('#') > -1 && csshero_variables[search_term]['var_type'] == 'color_var') {
                    var search_term = csshero_variables[search_term]['var_prop'];
                    var search_term = search_term.split('#').join('');
                    var search_term = '&hex=' + search_term;
                } else {
                    var search_term = '';
                }
            } else {
                var search_term = '&keywords=' + search_term;
            }
        }
    } else {
        var search_term = '';
    }
    var wrap = $('.csshero-patterns-browser .csshero-patterns-wrap');
    wrap.empty();
    $.ajax({
        url: url + '?numResults=' + per_page + search_term + '&resultOffset=' + offset + '&format=json&jsonCallback=callback',
        dataType: "jsonp",
        jsonpCallback: 'callback',
    }).done(function(patterns) {
        for (var p in patterns) {
            var pattern = patterns[p];
            var img = pattern['imageUrl'];
            wrap.append('<div class="csshero-cl-pattern" data-pattern-url="' + img + '"><div style="background-image:url(' + img + ');"></div><a class="cl-pattern-author" href="' + pattern['url'] + '" target="_blank">by ' + pattern['userName'] + '</a></div>')
            $('.csshero-patterns-browser').attr('data-page', page)
        }
    })
}
$(document).on('click', '.csshero-load-patterns', function() {
    clean_interface($(this))
    var wrap = $('.csshero-patterns-browser')
    if (wrap.hasClass('visible-patterns')) {
        wrap.removeClass('visible-patterns')
    } else {
        wrap.addClass('visible-patterns')
        csshero_load_cl_patterns(base_pattern_url, 0)
    }
}).on('click', '.csshero-cl-pattern', function() {
    var h = $(this).attr('data-pattern-url')
    var w = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
    w.val('url(' + h + ')').trigger('keyup')
}).on('click', '.patterns-nav > span', function() {
    var cur = parseInt($('.csshero-patterns-browser').attr('data-page'))
    if ($(this).is('.next')) {
        var destination = cur + 1;
    } else {
        var destination = cur - 1;
    }
    if (destination < 0)
        var destination = 0;
    csshero_load_cl_patterns(base_pattern_url, destination)
}).on('keyup paste', '.csshero-patterns-search-wrap input', csshero_throttle(function(e) {
    var v = $(this).val()
    $('.csshero-patterns-browser').attr('data-search-term', v)
    csshero_load_cl_patterns(base_pattern_url, 0)
}, 500))
var system_classes = [];
var default_mqs_flat = [];
for (var d in default_mqs) {
    default_mqs_flat.push(d)
}
var default_classes_flat = '';
for (var cla in system_global_classes) {
    system_classes.push(cla);
    default_classes_flat += cla + '|';
}
var typekit_id = '';
var collection_fonts_temp = [];
$(document).ready(function() {
    var saved = $('#csshero-data-from-db').val();
    if (!saved) {
        saved = '{}';
    } else {
        var saved = csshero_attach_system_classes(saved);
    }
    csshero_load_step(saved)
})
function csshero_attach_system_classes(string) {
    var the_saved_object = JSON.parse(string);
    var the_saved_classes = the_saved_object['global_classes'];
    var the_clean_classes = {};
    var the_clean_flat_classes = [];
    for (var n in the_saved_classes) {
        var c = the_saved_classes[n];
        if (c['cla_cat'] == '') {
            c['cla_cat'] = 'my-snippets'
        }
        if (c['cla_type'] != 'system_cla') {
            the_clean_classes[n] = c;
            the_clean_flat_classes.push(n)
        }
    }
    $.extend(the_clean_classes, system_global_classes);
    var the_clean_flat_classes = unique(the_clean_flat_classes.concat(system_classes))
    the_saved_object['global_classes'] = the_clean_classes;
    the_saved_object['stored_classes'] = the_clean_flat_classes;
    var saved = JSON.stringify(the_saved_object)
    return saved;
}
function csshero_return_gradient_prev(receive) {
    var vars = return_flat_vars();
    var grad = vars + ' .csshero-gradient-tester{background-image:' + receive + ';}';
    var final_grad_ok = '';
    less.render(grad, '', function(render_err, render_out) {
        if (!render_err) {
            if (render_out)
                final_grad_ok = render_out.css;
        }
    });
    var final_grad_ok = final_grad_ok.slice(final_grad_ok.indexOf(':') + 1, final_grad_ok.lastIndexOf(';'))
    return final_grad_ok;
}
function remove_duplicates(objectsArray) {
    var usedObjects = {};
    for (var i = objectsArray.length - 1; i >= 0; i--) {
        var so = JSON.stringify(objectsArray[i]);
        if (usedObjects[so]) {
            objectsArray.splice(i, 1);
        } else {
            usedObjects[so] = true;
        }
    }
    return objectsArray;
}
function csshero_prepare_default_color_palettes() {
    var container = $('#csshero-palette-designer .csshero-palette-chooser');
    var nav = $('#csshero-palette-designer').find('nav');
    for (var p in additional_palettes) {
        var palette = additional_palettes[p];
        nav.append('<span data-item="' + p + '">' + p + '</span>')
        container.append('<div class="csshero-palette-inner csshero-palette-inner-' + p + '" data-item="' + p + '"></div>');
        var inner = $('.csshero-palette-inner-' + p);
        for (var c in palette) {
            var color = palette[c];
            inner.append('<span data-color="' + color + '" style="background-color:' + color + ';"class="csshero-palette-item"></span> ');
        }
    }
}
function classname_checker(check) {
    var r = true;
    var check = check.trim().replace(/;/g, ',').replace(/,\)+$/, ')');
    if (check[check.length - 1] && check.indexOf('(') == -1) {
        var check = check + '()';
    }
    var count_open = (check.match(/\(/g) || []).length;
    var count_close = (check.match(/\)/g) || []).length;
    var count_dots = (check.match(/\./g) || []).length;
    if (count_open != count_close) {
        var r = false;
    }
    if (check[0] != '.') {
        var r = false;
    }
    if (check[1] == ' ') {
        var r = false;
    }
    if (count_dots > 1) {
        var r = false;
    }
    var check_nm = check.split('(')[0];
    if (check_nm.indexOf(' ') > -1) {
        var new_check_nm = check_nm.replace(/ /g, '-');
        var check = check.replace(check_nm, new_check_nm)
        var check_nm = new_check_nm;
    }
    var regexp = /^[a-zA-Z0-9-_.()]+$/;
    if ($.isNumeric(check_nm[1]) || check_nm.search(regexp) == -1 || check_nm == '.') {
        var r = false;
    }
    if (r == true)
        var r = check;
    return r;
}
function csshero_update_back_and_forth() {
    var cur = $('.csshero-step.cur');
    var next = cur.nextAll('.csshero-step').length;
    var prev = cur.prevAll('.csshero-step').length;
    if (next > 0) {
        $('.csshero-service-item[data-service="quick-back"]').removeClass('disabled')
    } else {
        $('.csshero-service-item[data-service="quick-back"]').addClass('disabled')
    }
    if (prev > 0) {
        $('.csshero-service-item[data-service="quick-forward"]').removeClass('disabled')
    } else {
        $('.csshero-service-item[data-service="quick-forward"]').addClass('disabled')
    }
}
function csshero_save_step(type, context, property, value) {
    var _c = '';
    var _p = '';
    var _v = '';
    var logger = '';
    var _m = '';
    if (type == 'rename_el') {
        var _c = context;
        var _p = property;
        var _v = value;
        var logger = 'Renamed ' + _c + ' to ' + _p + ' (' + _v + ')';
    }
    if (type == 'delete-path') {
        var _c = context;
        var logger = 'Deleted ' + _c + ' custom selector';
    }
    if (type == 'path') {
        var _c = context;
        var _p = property;
        var logger = 'Added a new editable element ' + _c + ' (' + _p + ')';
    }
    if (type == 'mq-el-edit') {
        var _c = context;
        var logger = 'Edited ' + _c + ' Media Query'
    }
    if (type == 'class') {
        var _c = context;
        var logger = 'Edited ' + _c + ' class';
    }
    if (type == 'fonts') {
        var logger = 'Updated Fonts Collection';
    }
    if (type == 'reset') {
        var _c = context;
        var _m = $('#csshero-body').attr('data-mq-mode');
        var logger = 'Resetted ' + _c + ' (' + _m + ')';
    }
    if (type == 'variable') {
        var _p = property;
        var _v = value;
        var logger = 'Edited variable ' + _p + ' (' + _v + ')';
    }
    if (type == 'wysiwyg') {
        var _c = context;
        var _p = property;
        var _v = value;
        var _m = $('#csshero-body').attr('data-mq-mode');
        if (_m != 'all')
            var type = type + " in-mq-step";
        var logger = "Edited <span>" + _c + "</span>'s <span>" + _p + "</span> value to <span>" + _v + " (" + _m + ")</span>";
    }
    if (type == 'start') {
        var logger = 'Starting here :)';
    }
    if (type == 'code') {
        var _c = context;
        var _m = $('#csshero-body').attr('data-mq-mode');
        if (_m != 'all')
            var type = type + " in-mq-step";
        var logger = 'Code edited on element <span>' + _c + ' (' + _m + ')</span>';
    }
    if (logger != '')
        var logger = "<div class='csshero-step-log'>" + logger + "</div>";
    var stepper = $('.csshero-stepper');
    var oggettone = {
        "global_classes": global_classes,
        "live_paths": live_paths,
        "live_array": live_array,
        "live_mq_array": live_mq_array,
        "csshero_variables": csshero_variables,
        "stored_classes": stored_classes,
        "global_classes": global_classes,
        "collection_fonts": collection_fonts,
        "stored_extra_gfonts": stored_extra_gfonts,
        "typekit_id": typekit_id,
        "default_gfontlist": default_gfontlist
    }
    var body = $('#csshero-body')
    var json_errors = body.attr('json-errors');
    var css_errors = body.attr('css-errors');
    if (!json_errors && !css_errors) {
        var now = $.now();
        var step_id = 'csshero-step-id' + now;
        var step_time = new Date(now);
        var step_data = JSON.stringify(oggettone)
        var month = step_time.getMonth() + 1;
        var day = step_time.getDate();
        var hrs = step_time.getHours();
        var mnt = step_time.getMinutes();
        var scd = step_time.getSeconds();
        var date = 'Saved ' + day + '.' + month + ' - ' + hrs + ':' + mnt + ':' + scd;
        var new_step = '<div data-step-time="' + now + '" class="csshero-step-type-' + type + ' csshero-step cur" id="' + step_id + '"><span class="timestamp">' + date + '</span><div class="drop"></div>' + logger + '</div>';
        var last = $('.csshero-step.cur')
        if (last.data('step-data') == step_data) {
            return;
        }
        last.removeClass('cur');
        stepper.prepend(new_step)
        $('#' + step_id).data('step-data', step_data)
        var next = $('#' + step_id).next();
        var next_time = parseInt(next.attr('data-step-time'));
        var diff = now - next_time;
        if (diff < 1000)
            next.remove();
        $('.last-cur-before-errors').removeClass('last-cur-before-errors');
    } else {
        $('.csshero-step.cur').removeClass('cur').addClass('last-cur-before-errors');
    }
    csshero_update_back_and_forth();
    if (type != 'start')
        $('.csshero-save-action.csshero-cancel').removeClass('no-cancel-available')
}
function csshero_delete_custom_editable_data(wra, sug) {
    delete live_paths[wra];
    csshero_apply_custom_ediandsugg(live_paths)
}
function csshero_load_step(data, element, event, open_blocks, pos) {
    var all_default_fonts = $.merge($.merge([], system_fonts), default_gfontlist);
    if (!data) {
        var data = element.data('step-data');
    }
    try {
        var data = JSON.parse(data);
    } catch (err) {
        console.log(err)
        var data = '{}';
    }
    if (data['default_gfontlist'] && data['default_gfontlist'] != '') {
        default_gfontlist = data['default_gfontlist']
    } else {
        default_gfontlist = default_gfontlist;
    }
    var all_default_fonts = $.merge($.merge([], system_fonts), default_gfontlist);
    if (data['stored_extra_gfonts']) {
        stored_extra_gfonts = data['stored_extra_gfonts']
    } else {
        stored_extra_gfonts = []
    }
    if (data['collection_fonts'] && data['collection_fonts'] != '') {
        collection_fonts = data['collection_fonts']
    } else {
        collection_fonts = $.merge($.merge([], all_default_fonts), stored_extra_gfonts);
    }
    if (data['typekit_id']) {
        typekit_id = data['typekit_id']
    } else {
        typekit_id = '';
    }
    if (data['live_array']) {
        live_array = data['live_array'];
    } else {
        live_array = {};
    }
    if (data['live_mq_array']) {
        live_mq_array = data['live_mq_array'];
    } else {
        live_mq_array = jQuery.extend(true, {}, default_mqs);
    }
    if (data['csshero_variables']) {
        csshero_variables = data['csshero_variables'];
    } else {
        csshero_variables = system_vars;
    }
    if (data['stored_classes']) {
        stored_classes = data['stored_classes']
    } else {
        stored_classes = [];
    }
    $.merge(stored_classes, system_classes)
    stored_classes = unique(stored_classes)
    if (data['global_classes']) {
        global_classes = data['global_classes'];
    } else {
        global_classes = {}
    }
    $.extend(global_classes, system_global_classes);
    if (typeof live_paths == "undefined") {} else {
        if (JSON.stringify(live_paths) != JSON.stringify(data['live_paths'])) {
            for (var y in live_paths) {
                var wra = live_paths[y]['path'];
                delete live_paths[wra]
            }
            csshero_apply_custom_ediandsugg(live_paths);
            var need_a_editor_refresh = true;
        } else {
            var need_a_editor_refresh = false;
        }
    }
    if (data['live_paths']) {
        live_paths = data['live_paths']
    } else {
        live_paths = {}
    }
    if (element) {
        function __update_editable_elements() {
            if (live_paths)
                csshero_apply_custom_ediandsugg(live_paths)
        }
        function __prepare_element() {
            $('.csshero-step.cur').removeClass('cur');
            element.addClass('cur')
        }
        function __clear_edits_holder() {
            $('#csshero-edits-holder', cssheroframe).empty();
        }
        function __render() {
            for (var f in live_array) {
                render_single_block(f)
            }
            render_mq_styles();
        }
        function __mq_trigger() {
            var current_mode = $('#csshero-body').attr('data-mq-mode');
            var current_mode_trigger = $('.csshero-service-bar-item-mq[data-mq="' + current_mode + '"]');
            if (current_mode_trigger.length > 0) {
                current_mode_trigger.trigger('click')
            } else {
                $('.csshero-service-bar-item-mq[data-mq="all"]').trigger('click')
            }
        }
        function __click_on_editable() {
            var currently_editing = $('.csshero-code-wrap').attr('data-editing_element');
            if (configuration_paths[currently_editing] || live_paths[currently_editing]) {} else {
                if (need_a_editor_refresh) {
                    $('.csshero-selector-bar').empty();
                    lister_inner.empty();
                    $('#csshero-body').addClass('show-lister')
                    $('#csshero-body').removeClass('editing-element')
                }
            }
        }
        function __prepare_variables() {
            if ($('.csshero-service-block[data-service="variables"]').is('.cur')) {
                csshero_prepare_variables(csshero_variables);
            }
        }
        var load_functions = [__prepare_element(element), __clear_edits_holder(), __render(), csshero_design_mq_elements(), __mq_trigger(), csshero_update_back_and_forth(), csshero_fill_fonts(), csshero_design_custom_tree_els(), __update_editable_elements(), __prepare_variables(), __click_on_editable()];
        var operation_l = load_functions.length;
        var g = 0;
        processArray(load_functions, function(w) {
            g++;
            w;
            if (g == operation_l) {
                $('#spinner').fadeOut(300);
                csshero_prepare_classes(global_classes)
                $('.csshero-save-action.csshero-cancel').addClass('no-cancel-available')
            }
        })
    }
    if (open_blocks) {
        for (var v in open_blocks) {
            $('.csshero-editor-block-wrap[data-prop-group="' + open_blocks[v] + '"] .csshero-editor-block-sub-title').trigger('click')
        }
    }
    if (pos) {
        $('.all-props-inner').animate({
            scrollTop: pos
        }, 100);
    }
}
$(document).on('click', '.csshero-step:not(.cur) .timestamp', function(e) {
    var open_panels = [];
    $('.csshero-editor-block-wrap:not(.hidden)').each(function() {
        open_panels.push($(this).attr('data-prop-group'))
    })
    var editor_pos = $('.all-props-inner').scrollTop();
    $('#spinner').fadeIn(300);
    var t = $(this);
    var step = t.closest('.csshero-step')
    if (step && step.is('.csshero-step-type-old')) {
        var url = step.attr('data-json-load-url')
        $.ajax({
            url: url,
            success: function(data) {
                step.data('step-data', data);
                csshero_load_step(data, step, e, open_panels, editor_pos)
            }
        });
    } else {
        csshero_load_step('', step, e, open_panels, editor_pos)
    }
}).on('click', '.csshero-step .drop', function(e) {
    $(this).closest('.csshero-step').toggleClass('show-dets')
}).on('click', '.csshero-props-actions .actions span', function(e) {
    var t = $(this);
    var cnt = parseInt($('.csshero-props-actions .count').text());
    var m = $('#csshero-body').attr('data-mq-mode')
    if (t.is('.review')) {
        $('.csshero-search-props').val('edited').trigger('keyup');
    }
    if (t.is('.reset')) {
        var stack = $('.csshero-code-wrap').attr('data-editing_element');
        var sugg = $('.csshero-code-wrap').attr('data-editing_element_sugg');
        if (confirm('Reset all ' + sugg + ' properties to default on ' + m + ' devices?')) {
            var queried_array = csshero_return_actual_state_array();
            delete_single_block(stack, e)
            csshero_enrich_tree()
            csshero_save_step('reset', stack)
            setTimeout(function() {
                csshero_click_on_editable('', e, stack);
            }, 500)
        }
    }
})
function close_service_panels() {
    $('.csshero-service-item.cur').removeClass('cur');
    $('.csshero-service-block.cur').removeClass('cur');
}
$(document).on('click', '.csshero-mq-mode-label', function() {
    $(this).toggleClass('open')
    $('#csshero-body').toggleClass('expand-mq-modes');
    adjust_mqs_bar();
}).on('click', '.enable-nav', function() {
    var b = $('#csshero-body');
    b.toggleClass('enable-navigation')
}).on('click', '.csshero-service-item', function() {
    var s = $(this).attr('data-service');
    var p = $('.csshero-service-block[data-service="' + s + '"]');
    if (s == 'quick-back' || s == 'quick-forward') {
        var cur = $('.csshero-step.cur');
        var next = cur.nextAll('.csshero-step:first');
        var prev = cur.prevAll('.csshero-step:first');
        if (!$(this).is('.disabled')) {
            if (s == 'quick-back' && next.length > 0)
                next.find('.timestamp').trigger('click')
            if (s == 'quick-forward' && prev.length > 0)
                prev.find('.timestamp').trigger('click')
        }
        return;
    }
    if (p.length > 0) {
        $('.csshero-service-block.cur').removeClass('cur');
        if ($(this).hasClass('cur')) {
            $('.csshero-service-item.cur').removeClass('cur');
        } else {
            $('.csshero-service-item.cur').removeClass('cur');
            $(this).addClass('cur');
            p.addClass('cur');
            if (s == 'variables')
                csshero_prepare_variables(csshero_variables)
            if (s == 'classes')
                csshero_prepare_classes(global_classes)
            if (s == 'tree')
                csshero_enrich_tree()
        }
        p.find('.csshero-service-scroller').perfectScrollbar();
    }
})
function csshero_load_settings_json(evt) {
    var files = evt.target.files;
    var targ = $(evt.target);
    for (var i = 0, f; f = files[i]; i++) {
        var reader = new FileReader();
        reader.onload = (function(theFile) {
            return function(e) {
                var name = theFile.name;
                if (name.indexOf('csshero-') == -1) {
                    alert('wrong file type, please use a JSON file');
                    return;
                }
                var name = name.replace('csshero-', '').replace('.json', '');
                var time = parseInt(name)
                if (isNaN(time)) {
                    var time = name;
                    var requires_date = false;
                } else {
                    var requires_date = true;
                }
                var type = 'bulk-import'
                var logger = '<div class="csshero-step-log">step loaded from json</div>';
                if (requires_date) {
                    var now = time;
                    var step_id = 'csshero-step-id' + now;
                    var step_time = new Date(now);
                    var month = step_time.getMonth() + 1;
                    var day = step_time.getDate();
                    var hrs = step_time.getHours();
                    var mnt = step_time.getMinutes();
                    var scd = step_time.getSeconds();
                    var date = 'Imported ' + day + '.' + month + ' - ' + hrs + ':' + mnt + ':' + scd;
                } else {
                    var date = 'Imported ' + time;
                    var now = 'imported-as-preset';
                    var step_id = 'csshero-step-id-' + time;
                }
                var step_data = e.target.result;
                var new_step = '<div data-step-time="' + now + '" class="csshero-step-type-' + type + ' csshero-step" id="' + step_id + '"><span class="timestamp">' + date + '</span><div class="drop"></div>' + logger + '</div>';
                var new_data = JSON.parse(step_data);
                if (targ.is('.merger')) {
                    var cur_data = JSON.parse($('.csshero-step.cur').data('step-data'))
                    var res_data = {};
                    for (var c in cur_data) {
                        if (new_data[c]) {
                            res_data[c] = cur_data[c];
                            if (c == 'collection_fonts' || c == 'stored_extra_gfonts') {
                                for (var f in new_data[c]) {
                                    if ($.inArray(new_data[c][f], res_data[c]) == -1) {
                                        console.log('adding ' + new_data[c][f])
                                        res_data[c].push(new_data[c][f])
                                    }
                                }
                                res_data[c] = unique(res_data[c])
                            } else if (c == 'live_mq_array') {
                                for (var l in new_data[c]) {
                                    if (!res_data[c][l]) {
                                        res_data[c][l] = new_data[c][l]
                                    } else {
                                        for (var y in new_data[c][l]['pr']) {
                                            res_data[c][l]['pr'][y] = new_data[c][l]['pr'][y]
                                        }
                                    }
                                }
                            } else {
                                for (var q in new_data[c]) {
                                    res_data[c][q] = new_data[c][q];
                                }
                            }
                        } else {
                            res_data[c] = cur_data[c]
                        }
                    }
                    var cusom_mq_import = new_data['mq-imported-settings'];
                    if (cusom_mq_import && cusom_mq_import != {}) {
                        for (var c in cusom_mq_import) {
                            if (!res_data['live_mq_array'][c]) {
                                res_data['live_mq_array'][c] = cusom_mq_import[c]
                            }
                        }
                    }
                } else {
                    var res_data = new_data;
                }
                targ.closest('.area').find('.inspector-import').addClass('import-ready activate').html('Activate Project')
                var step_data = JSON.stringify(res_data)
                targ.closest('.area').find('.inspector-import').addClass('import-ready').data('imported-step', new_step).data('imported-step-data', step_data).data('imported-step-id', step_id)
            }
            ;
        }
        )(f);
        reader.readAsText(f)
    }
}
var flat_props = [];
for (var p in props_groups) {
    for (var x in props_groups[p]) {
        if (x.indexOf('__') == -1)
            flat_props.push(x)
    }
}
function clean_interface(t) {
    var cl = ['open-grad', 'show-img-loader', 'quick-var-open', 'visible-patterns']
    for (var c in cl) {
        var c = cl[c]
        if (t) {
            $('.' + c).not(t).removeClass(c)
        } else {
            $('.' + c).removeClass(c)
        }
    }
    $('.csshero-gradient-super-wrap').remove();
}
function designTree() {
    $('.editable', cssheroframe).each(function() {
        try {
            var type = $(this).prop("tagName");
            var clo = $(this).parents('.editable');
            if (clo) {
                clo = clo.attr('original_editableclass')
            } else {
                clo = '';
            }
            var eclass = $(this).attr('original_editableclass');
            var esugg = $(this).attr('original_editablesuggestion');
            var t = csshero_tree;
            var m = t.find('[editableclass="' + eclass + '"]').length;
            if (m == 0 && eclass) {
                var w = t.find('.tree-el[editableclass="' + clo + '"]');
                var yell = eclass.replace(clo + ' ', '').trim();
                var propelled = w.attr('editablesuggestion')
                var propelled = esugg.replace(propelled, '').trim();
                if (w.length > 0) {
                    destination = w;
                    var idx = w.parentsUntil(".csshero-tree").length + 2;
                } else {
                    destination = t;
                    var idx = 1;
                }
                destination.append('<div class="tree-idx-' + idx + ' tree-el" editablesuggestion="' + esugg + '" editableclass="' + eclass + '"><span class="tree-in"><span class="type-icon type-icon-' + type + '"></span><span class="yell">' + propelled + '</span></span><div class="sub-assets"></div></div>')
            }
        } catch (err) {
            console.log(err)
        }
    })
    csshero_design_custom_tree_els();
}
function copyToClipboard(text) {
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val(text).select();
    document.execCommand("copy");
    $temp.remove();
}
function csshero_design_bottom_navi(ediclass, edisugg) {
    if ($('#csshero-body').hasClass('show-bottom-navi')) {
        var pars = lister_inner.find('.csshero-selector.selector-first');
        var i = 0;
        var navi = $('.csshero-bottom-navi').empty();
        pars.each(function() {
            i++;
            var c = $(this).attr('editableclass').split('|')[0].trim();
            var s = $(this).attr('editablesuggestion').split('|')[0].trim();
            var icon = $(this).find('.icon').attr('class');
            if (i == 1) {
                var navi_item_after = '<span class="bottom-nav-item last-node"></span>';
                var item_class = 'current-node';
            } else {
                var navi_item_after = '';
                var item_class = '';
            }
            navi.prepend('<span class="' + item_class + ' bottom-nav-item csshero-selector" editableclass="' + c + '" editablesuggestion="' + s + '"><span class="' + icon + '"></span><label>' + s + '</label></span>' + navi_item_after);
        })
    }
}
function csshero_color_scanner(destination) {
    var colors_arr = [];
    var els = $('body *', cssheroframe).toArray();
    els.push($('body', cssheroframe))
    processArray(els, function(e) {
        var e = $(e);
        var b = $(e).css('background-color').replace(/ /g, '');
        var c = $(e).css('color').replace(/ /g, '');
        if (b != 'rgba(0,0,0,0)' && colors_arr.indexOf(b) == -1) {
            colors_arr.push(b)
            destination.append('<span data-color="' + b + '" style="background-color:' + b + ';"class="csshero-palette-item"></span> ');
        }
        if (c != 'rgba(0,0,0,0)' && colors_arr.indexOf(c) == -1) {
            colors_arr.push(c)
            destination.append('<span data-color="' + c + '" style="background-color:' + c + ';"class="csshero-palette-item"></span> ');
        }
    });
    return colors_arr;
}
$(document).on('click', '.palette-trigger-wrap', function() {
    $('.show-palettes').each(function() {
        $(this).empty().removeClass('show-palettes');
    })
    if (!$(this).hasClass('show-palettes')) {
        $(this).addClass('show-palettes')
        var cnt = $('#csshero-palette-designer').html();
        $(this).append(cnt)
        if ($(this).is('.csshero-gradient-color *')) {
            var left_o = $(this).closest('.csshero-gradient-color').position().left;
            var parent_o = $(this).closest('.csshero-gradient-color-holder').position().left;
            var left_o = left_o + parent_o;
            console.log(left_o)
            var paletter = $(this).find('.csshero-palettes-container')
            paletter.css('margin-left', '-' + left_o + 'px')
        }
        var nav = $(this).find('.csshero-palette-nav')
        var container = $(this).find('.csshero-palette-chooser')
        var flat_vars = return_vars_array()
        var i = 0;
        var t = 0;
        var ok_color_vars = $.grep(flat_vars, function(v) {
            return is_color(csshero_variables[v]['var_prop']) && v.indexOf('--') == -1;
        });
        if (ok_color_vars && ok_color_vars.length > 0) {
            nav.append('<span data-item="swatcher" class="swatcher">Variables</span>');
            container.append('<div data-item="swatcher" class="csshero-palette-inner csshero-palette-inner-swatcher"></div>');
            processArray(ok_color_vars, function(v) {
                var c = csshero_variables[v]['var_prop'];
                t++;
                var alternatives = $('.csshero-color-paletter[data-palette-origin="' + v + '"]');
                var alternatives_cla = alternatives.attr('class');
                var alternatives = alternatives.html();
                $('.csshero-palette-inner-swatcher').append('<span data-color="' + v + '" style="background-color:' + c + ';"class="csshero-palette-item"><div class="palette-item-dd"></div><div class="swatch-alternatives ' + alternatives_cla + '">' + alternatives + '</div></span>');
                if (t == ok_color_vars.length || i % 5 == 0) {
                    var divs = $(".csshero-palette-inner-swatcher > .csshero-palette-item");
                    for (var i = 0; i < divs.length; i += 5) {
                        divs.slice(i, i + 5).wrapAll("<div class='swatches-row'></div>");
                    }
                }
            });
        }
        nav.append('<span data-item="scanner">Page Colors</span>');
        $('.csshero-palette-inner-scanner').remove()
        container.append('<div data-item="scanner" class="csshero-palette-inner csshero-palette-inner-scanner"></div>');
        setTimeout(function() {
            csshero_color_scanner($('.csshero-palette-inner-scanner'));
        }, 100)
        nav.append('<span class="closer"></span>')
        $(this).find('.csshero-palette-nav span[data-item="flat"]').trigger('click')
    } else {
        $(this).removeClass('show-palettes')
        $(this).empty();
    }
}).on('click', '.csshero-palette-nav span', function(e) {
    e.stopPropagation();
    if ($(this).is('.closer')) {
        $('.palette-trigger-wrap.show-palettes').empty().removeClass('show-palettes')
        return;
    }
    $('.csshero-palette-nav span.active').removeClass('active');
    var i = $(this).attr('data-item');
    $('.csshero-palette-inner').hide();
    $('.csshero-palette-inner[data-item="' + i + '"]').show();
    $(this).addClass('active');
}).on('click', '.csshero-palette-item', function(e) {
    e.stopPropagation();
    var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
    var color = $(this).attr('data-color');
    var trigger = $(this).closest('.csshero-editor-block-widget').find('.csshero-picker-trigger');
    var update_action = 'updateval';
    if ($(this).is('.class-prop-val-wrap *')) {
        var trigger = $(this).closest('.class-prop-val-wrap').find('.csshero-picker-trigger')
        var input = $(this).closest('.class-prop-val-wrap').find('input')
        var update_action = 'keyup';
    }
    if ($(this).is('.csshero-gradient-color *')) {
        var trigger = $(this).closest('.csshero-gradient-color').find('.csshero-picker-trigger')
        var input = false;
    }
    if ($(this).is('.csshero-shadow-builder *')) {
        var trigger = $(this).closest('.sha-node').find('.csshero-picker-trigger')
        input = false;
        $(this).closest('.sha-node').attr('data-sha-val', color);
    }
    if (input)
        input.val(color).trigger(update_action)
    var print_color = apply_color_to_picker(color);
    trigger.css('background-color', print_color).attr('data-original-color-val', color)
    trigger.spectrum("set", print_color);
    if ($(this).is('.csshero-gradient-color *')) {
        return_colorpicker_color(trigger, e, color);
    }
    if ($(this).is('.csshero-shadow-builder *')) {
        $(this).closest('.csshero-shadow-builder').trigger('updatesha');
    }
}).on('click', '.palette-item-dd', function(e) {
    e.stopPropagation();
    var p = $(this).closest('.csshero-palette-item')
    var r = $(this).closest('.swatches-row')
    if (p.hasClass('open')) {
        p.removeClass('open')
        r.removeClass('expanded')
    } else {
        $('.csshero-palette-item.open').removeClass('open')
        $('.swatches-row.expanded').removeClass('expanded');
        p.addClass('open')
        r.addClass('expanded');
    }
})
$(document).on('click', '.inspector-import.import-ready', function() {
    var step_id = $(this).data('imported-step-id')
    var step = $(this).data('imported-step')
    var step_data = $(this).data('imported-step-data')
    if (!step || !step_id || !step_data) {
        alert('something is missing')
        return;
    }
    if ($('#' + step_id).length == 0) {
        $('#' + step_id).remove();
    }
    if (confirm('load ' + step_id + '?')) {
        $('.csshero-step.cur').before(step)
        $('#' + step_id).data('step-data', step_data);
        if ($(this).is('.activate')) {
            $('#' + step_id).find('.timestamp').trigger('click')
            $('.inspector-close.inspector-shutdown').trigger('click')
            $('.csshero-super-top-bar .logo').trigger('click')
            $('.csshero-trigger-inspector').trigger('click')
        } else {
            alert('Step loaded, you can find it in your History panel as ' + $('#' + step_id + ' .timestamp').text())
        }
    }
    $('.csshero-import-settings').val('')
}).on('click', '.font-manager-tab > span', function() {
    var type = $(this).attr('data-type')
    if ($(this).hasClass('cur'))
        return;
    $('.font-manager-tab > span.cur').removeClass('cur');
    $(this).toggleClass('cur')
    $('.font-family-scroller').hide();
    var panel = $('.font-family-scroller[data-font-mode="' + type + '"]');
    panel.show().perfectScrollbar();
})
function csshero_return_inspector_style(name) {
    if (inspector_themes[name]) {
        var theme = inspector_themes[name]
    } else {
        var theme = '';
        return;
    }
    for (var i in theme) {
        if (theme[i] == '@alt1')
            theme[i] = $('.super-top-left-actions').css('background-color');
        if (theme[i] == '@alt')
            theme[i] = $('.csshero-super-top-bar').css('background-color');
    }
    var t_bg = theme.bg;
    var t_tx = theme.tx;
    var t_nu = theme.nu;
    var t_pr = theme.pr;
    var t_qu = theme.qu;
    var t_at = theme.at;
    var t_cm = theme.cm;
    var t_va = theme.va;
    var t_se = theme.tx + '50';
    var theme_styles = '<style class="inspector-custom-theme">\
       #inspector-wrapper .csshero-inspector-head .inspector_logo g *{fill:' + t_tx + ';}\
       #inspector-wrapper .CodeMirror-selected{background-color:' + t_se + ';}\
       #inspector-wrapper,\
       #inspector-wrapper .csshero-inspector-head,\
       #inspector-wrapper .cm-s-csshero-theme,\
       .csshero-code-wrap-expander.insp,\
       .csshero-inspector-head{background:' + t_bg + ';color:' + t_tx + ';}\
       #inspector-wrapper .csshero-inspector-head:after,\
       #inspector-wrapper .csshero-inspector-head:before{background:' + t_tx + ';}\
       .csshero-code-wrap-expander.insp li:hover{color:' + t_nu + '!important;}\
       #inspector-wrapper .csshero-inspector-laydown:before,\
       #inspector-wrapper .inspector-close:before{color:' + t_tx + ';}\
       #inspector-wrapper .inspector-dock:before{border-color:' + t_tx + ';}\
       #inspector-wrapper .cm-variable-2{color:' + t_va + ';}\
       #inspector-wrapper div.CodeMirror-cursor{border-left-color:' + t_tx + ';}\
       #inspector-wrapper .cm-def,\
       #inspector-wrapper span.cm-variable,\
       #inspector-wrapper .cm-number{color:' + t_nu + ';}\
       #inspector-wrapper .cm-property{color:' + t_pr + ';}\
       #inspector-wrapper .cm-qualifier{color:' + t_qu + ';}\
       #inspector-wrapper .cm-comment{color:' + t_cm + ';}\
       #inspector-wrapper .cm-atom,\
       #inspector-wrapper .cm-keyword{color:' + t_at + ';}\
       #inspector-wrapper .CodeMirror-matchingbracket{background:' + t_tx + ';color:' + t_bg + ';}\
      </style>';
    return theme_styles;
}
function csshero_return_styles(type, return_no_extras, hide_global_classes) {
    var css_vr = return_flat_vars();
    var css_la = '';
    var css_mq = '';
    for (q in live_array) {
        if (Object.keys(live_array[q]).length > 0) {
            if (csshero_json_to_string(live_array, q) != '')
                css_la += csshero_json_to_string(live_array, q) + '\n\n';
        }
    }
    var mq_sorter = [];
    for (m in live_mq_array) {
        mq_sorter.push({
            index: live_mq_array[m]['mq-order'],
            name: m
        })
    }
    mq_sorter.sort(function(obj1, obj2) {
        return obj1.index - obj2.index;
    });
    for (var m in mq_sorter) {
        var name = mq_sorter[m]['name']
        var mobj = live_mq_array[name];
        var ufo = csshero_return_mq_definition(mobj)
        var m_props = mobj['pr'];
        if (return_no_extras) {
            var css_mq_return = ufo + '{';
        } else {
            var css_mq_return = '/* ' + m + ' */\n' + ufo + '{';
        }
        var m = 0;
        for (z in m_props) {
            if (csshero_json_to_string(m_props, z) != '') {
                m++;
                if (Object.keys(m_props[z]).length > 0) {
                    css_mq_return += csshero_json_to_string(m_props, z) + '\n\n';
                }
            }
        }
        css_mq_return += '}';
        if (m != 0) {
            css_mq = css_mq + css_mq_return;
        }
    }
    var css_all = css_la + css_mq;
    var required_classes = {};
    var required_vars = {}
    for (var c in global_classes) {
        var cla = c.substring(0, c.indexOf('(')) + '('
        if (cla != '(' && css_all.indexOf(cla) > -1 && !required_classes[c]) {
            var cla_prop = global_classes[c].cla_prop;
            for (var g in global_classes) {
                var gla = g.substring(0, g.indexOf('(')) + '('
                if (cla_prop.indexOf(gla) > -1 && !required_classes[g]) {
                    var gla_prop = global_classes[g].cla_prop;
                    for (var c1 in global_classes) {
                        var cla1 = c1.substring(0, c1.indexOf('(')) + '('
                        if (gla_prop.indexOf(cla1) > -1 && !required_classes[c1]) {
                            required_classes[c1] = {
                                prop: global_classes[c1].cla_prop
                            }
                        }
                    }
                    required_classes[g] = {
                        prop: gla_prop
                    }
                }
            }
            if (cla_prop.indexOf('@') > -1) {
                for (var d in csshero_variables) {
                    if (cla_prop.indexOf(d) > -1 && !required_vars[d]) {
                        var dar_prop = csshero_variables[d].var_prop;
                        required_vars[d] = {
                            prop: dar_prop
                        }
                    }
                }
            }
            required_classes[c] = {
                prop: cla_prop
            }
        }
    }
    var css_cl = '';
    if (required_classes && required_classes != {}) {
        for (var c in required_classes) {
            var class_clean_props = required_classes[c].prop;
            var class_clean_props = class_clean_props.replace(/ISCOMMENT-([0-9]+):/g, '/* ');
            var class_clean_props = class_clean_props.replace(/ISCOMMENT-([0-9]+);/g, '/* ');
            if (hide_global_classes) {
                if (global_classes[c]['cla_type'] != 'system_cla') {
                    css_cl += '\n' + c + '{' + class_clean_props + '}\n';
                }
            } else {
                css_cl += '\n' + c + '{' + class_clean_props + '}\n';
            }
        }
    }
    var flat_required_classes = JSON.stringify(required_classes);
    for (var v in csshero_variables) {
        if (css_all.indexOf(v) > -1 && !required_vars[v]) {
            var var_prop = csshero_variables[v].var_prop;
            for (var w in csshero_variables) {
                if (var_prop.indexOf(w) > -1 && !required_vars[w]) {
                    var war_prop = csshero_variables[w].var_prop;
                    csshero_variables[w] = {
                        prop: war_prop
                    }
                }
            }
            required_vars[v] = {
                prop: var_prop
            }
        }
        if (flat_required_classes.indexOf(v) > -1 && !required_vars[v]) {
            var var_prop = csshero_variables[v].var_prop;
            required_vars[v] = {
                prop: var_prop
            }
        }
    }
    var css_vr = '';
    if (required_vars && required_vars != {}) {
        for (var v in required_vars) {
            css_vr += v + ':' + required_vars[v].prop + ';\n';
        }
    }
    var css_cl = css_cl.replace(/\t/g, ' ').replace(/  +/g, ' ');
    var plain_less_backup = css_la + css_mq;
    var plain_less = css_vr + css_cl + css_la + css_mq;
    if (css_vr && css_vr != '')
        var css_vr = '/* VARIABLES */\n' + css_vr + '/*--------------*/\n\n';
    if (css_cl && css_cl != '')
        var css_cl = '/* CLASSES */' + css_cl + '/*--------------*/\n\n';
    if (css_la && css_la != '')
        var css_la = '/* all devices */\n' + css_la + '/*--------------*/\n\n';
    var cssdbg_return = '';
    less.render(plain_less, '', function(render_err, render_out) {
        if (!render_err) {
            if (render_out)
                cssdbg_return = render_out.css;
        } else {
            cssdbg_return = render_err;
        }
    });
    if (type == 'css') {
        var required_fonts_css = csshero_determine_font_loading(cssdbg_return, $('#TKID').val());
        var styled_return = required_fonts_css + cssdbg_return;
    } else {
        var required_fonts_less = csshero_determine_font_loading(plain_less, $('#TKID').val());
        var styled_return = required_fonts_less + plain_less;
    }
    return styled_return;
}
function GetAppliedCssRules(element) {
    var appliedRules = [];
    var context = window.frames['csshero-iframe-main-page'].document.styleSheets;
    var element = $(element, window.frames['csshero-iframe-main-page'].document);
    var check_internal = new RegExp(location.host);
    for (var x = 0; x < context.length; x++) {
        var style_el = context[x].ownerNode;
        if (!$(style_el).attr('data-selector') && ($(style_el).attr('id') != 'csshero-style-protect') && check_internal.test($(style_el).attr('href')) && $(style_el).attr('href').indexOf('wpcss_action') == -1) {
            var rules = context[x].cssRules;
            for (var i = 0; i < rules.length; i++) {
                var rl = rules[i].selectorText;
                var is_ok_rule = true;
                try {
                    element.is(rl)
                } catch (err) {
                    var is_ok_rule = false;
                }
                if (rl && is_ok_rule) {
                    if (element.is(rl)) {
                        if (live_paths[rl] && live_paths[rl]['path_type'] == "context_specific") {} else {
                            appliedRules.push(rl)
                        }
                    }
                }
            }
        }
    }
    var accepted_el = [];
    for (var e in appliedRules) {
        var ei = appliedRules[e];
        var eu = ei.split(',');
        for (var x in eu) {
            var eux = eu[x].trim().replace(/"/g, '').replace(/'/g, '').replace(/.js/g, '').replace('*', '')
            if (eux && element.is(eux) && eux != '*' && eux != '' && eux != ' ' && eux != 'div' && eux.indexOf(':hover') == -1 && eux.indexOf(':visited') == -1 && eux.indexOf(':focus') == -1 && eux.indexOf(':active') == -1 && eux.indexOf(':link') == -1) {
                accepted_el.push(eux)
            }
        }
    }
    accepted_el = unique(accepted_el)
    return accepted_el;
}
function gcss(el) {
    var check_internal = new RegExp(location.host);
    var context = window.frames['csshero-iframe-main-page'].document
    var sheets = context.styleSheets;
    var ret = {
        'all': []
    };
    el.matches = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector || el.oMatchesSelector;
    for (var i in sheets) {
        var style_el = sheets[i].ownerNode;
        if ($(style_el).attr('href') && $(style_el).attr('href').indexOf('csshero-style-') > -1) {
            var is_not_from_csshero = false;
        } else {
            var is_not_from_csshero = true;
        }
        if (is_not_from_csshero && !$(style_el).attr('data-selector') && ($(style_el).attr('id') != 'csshero-style-protect') && check_internal.test($(style_el).attr('href')) && $(style_el).attr('href').indexOf('wpcss_action') == -1) {
            var rules = sheets[i].rules || sheets[i].cssRules;
            for (var r in rules) {
                if (rules[r].type && rules[r].type == 4) {
                    var media = rules[r].media.mediaText;
                    var mq_rules = rules[r].rules || rules[r].cssRules;
                    for (var m in mq_rules) {
                        if (mq_rules[m].selectorText && el.matches(mq_rules[m].selectorText)) {
                            if (!ret[media]) {
                                ret[media] = [];
                            }
                            ret[media].push({
                                'selector': mq_rules[m].selectorText,
                                'props': mq_rules[m].cssText
                            });
                        }
                    }
                }
                if (rules[r].selectorText && el.matches(rules[r].selectorText)) {
                    ret['all'].push({
                        'selector': rules[r].selectorText,
                        'props': rules[r].cssText
                    });
                }
            }
        }
    }
    return ret;
}
$(document).on('click', '.show-theme-code', function(e) {
    e.stopPropagation();
    $('.csshero-mode-props:not(.active)').trigger('click')
    var el = $('.csshero-code-wrap').attr('data-editing_element');
    var w = $(el, cssheroframe)[0];
    var theme_rules = gcss(w);
    var render = '';
    for (var mq in theme_rules) {
        if (mq != 'all')
            render += '\n@media ' + mq + '{\n\n';
        var theme_props = theme_rules[mq].reverse();
        for (var t in theme_props) {
            render += theme_props[t]['props'].split(';').join(';\n').split('}').join('}\n\n').split('{').join('{\n');
        }
        if (mq != 'all')
            render += '\n}\n';
    }
    if ($('#csshero-inspector').length > 0) {
        $('#csshero-inspector').remove();
        if (!$('#csshero-body').hasClass('inspector-laydown'))
            return;
    }
    $('.csshero-editor-interface-contents').prepend('<div id="csshero-inspector"><span class="title">Element Styles<span class="close"></span></span><textarea id="insp">' + render + '</textarea></div>')
    var inspector_mirror = document.getElementById('insp')
    var inspector_mirror_eddie = CodeMirror.fromTextArea(inspector_mirror, codemirror_options)
    inspector_mirror_eddie.setOption('readOnly', true);
}).on('click', '#csshero-inspector .close', function() {
    $('#csshero-inspector').remove();
})
function csshero_design_custom_tree_els() {
    $('.custom-tree').empty();
    $('.context-tree').empty();
    for (lp in live_paths) {
        var l = live_paths[lp];
        var p = l['path'];
        var p = p.replace(/"/g, '');
        var d = l['desc'];
        var t = l['path_type'];
        if (!t) {
            var destination = $('.custom-tree');
        } else {
            if (t == 'context_specific')
                var destination = $('.context-tree');
        }
        if (d && d != ' ') {
            d = d;
        } else {
            d = '';
        }
        if (destination.find('.tree-el[editableclass="' + p + '"]').length == 0) {
            destination.append('<div class="tree-el" editablesuggestion="' + d + '" editableclass="' + p + '"><span class="tree-el-edit"></span><span class="tree-el-delete"></span><span class="tree-in"><span class="yell">' + d + '</span></span><div class="sub-assets"></div></div>');
        }
    }
}
function psplit(s) {
    var depth = 0
      , seg = 0
      , rv = [];
    s.replace(/[^(),]*([)]*)([(]*)(,)?/g, function(m, cls, opn, com, off, s) {
        depth += opn.length - cls.length;
        var newseg = off + m.length;
        if (!depth && com) {
            rv.push(s.substring(seg, newseg - 1));
            seg = newseg;
        }
        return m;
    });
    rv.push(s.substring(seg));
    return rv;
}
function spacesplit(s) {
    var depth = 0
      , seg = 0
      , rv = [];
    s.replace(/[^() ]*([)]*)([(]*)( )?/g, function(m, cls, opn, com, off, s) {
        depth += opn.length - cls.length;
        var newseg = off + m.length;
        if (!depth && com) {
            rv.push(s.substring(seg, newseg - 1));
            seg = newseg;
        }
        return m;
    });
    rv.push(s.substring(seg));
    return rv;
}
function csshero_gradient_builder(gradient) {
    var returner = '<div class="csshero-gradient-builder"><div class="gradient-val"><input type="text" value="' + gradient + '" /></div>';
    if (gradient) {
        var colors = [];
        var gr_type = gradient.split('(')[0];
        var gr_options_backup = gradient.slice(gradient.indexOf('(') + 1, gradient.lastIndexOf(')'));
        var gr_options = gr_options_backup.trim().replace(/, /g, ',').replace(/  /g, ' ');
        var gr_options = psplit(gr_options);
        var gr_direction = gr_options[0];
        var gr_direction = gr_direction.trim().replace(/  /g, ' ');
        if (!is_color(gr_direction)) {
            gr_render_direction = 0;
            if (gr_direction == 'to top left')
                gr_render_direction = '-45deg';
            if (gr_direction == 'to left')
                gr_render_direction = '-90deg';
            if (gr_direction == 'to bottom left')
                gr_render_direction = '-135deg';
            if (gr_direction == 'to bottom')
                gr_render_direction = '-180deg';
            if (gr_direction == 'to bottom right')
                gr_render_direction = '-135deg';
            if (gr_direction == 'to right')
                gr_render_direction = '90deg';
            if (gr_direction == 'to top right')
                gr_render_direction = '45deg';
            if (gr_direction == 'to top')
                gr_render_direction = '0deg';
            if (gr_direction.indexOf('deg') > -1) {
                gr_render_direction = gr_direction;
            }
        } else {
            gr_render_direction = 0;
        }
        var gr_clr = [];
        if (is_color(gr_direction.split(' ')[0])) {
            var tshold = -1;
        } else {
            var tshold = 0;
        }
        for (var g in gr_options) {
            if (g > tshold) {
                var q = gr_options[g]
                var q = q.split(' ')
                g_val = q[0];
                g_pos = q[1];
                if (!g_pos)
                    g_pos = 'not-set';
                gr_clr.push({
                    pos: g_pos,
                    val: g_val
                })
            }
        }
        holder_class = '';
        var render_gradient = '';
        for (var c in gr_clr) {
            var pos = gr_clr[c].pos;
            if (!pos || pos == 'not-set') {
                pos = '';
            } else {
                pos = ' ' + pos;
            }
            var color_rappresentation = gr_clr[c].val;
            if (color_rappresentation.indexOf('@') > -1 && csshero_variables[color_rappresentation]) {
                var color_rappresentation = csshero_variables[color_rappresentation].var_prop;
            } else {
                var color_rappresentation = color_rappresentation;
            }
            render_gradient += color_rappresentation + pos + ',';
        }
        render_gradient = render_gradient.slice(0, -1);
        var pushers = [{
            name: 'n-o',
            grad: '-45deg'
        }, {
            name: 'n',
            grad: '0deg'
        }, {
            name: 'n-e',
            grad: '45deg'
        }, {
            name: 'c-o',
            grad: '-90deg'
        }, {
            name: 'c',
            grad: '0'
        }, {
            name: 'c-e',
            grad: '90deg',
        }, {
            name: 's-o',
            grad: '-135deg'
        }, {
            name: 's',
            grad: '180deg'
        }, {
            name: 's-e',
            grad: '135deg'
        }];
        var nice_pushers = '';
        for (var p in pushers) {
            nice_pushers += '<div class="push ' + pushers[p].name + '" data-grad="' + pushers[p].grad + '"></div>';
        }
        var gradient_orienter = '<div class="csshero-grad-orienter"><div class="pusher">' + nice_pushers + '</div><div class="orient-express" style="transform:rotate(' + gr_render_direction + ');"></div></div>';
        if (gr_type.indexOf('radial-gradient') > -1) {
            var radial_direction = gr_direction.split('at')[1];
            if (radial_direction) {
                var radial_direction = radial_direction.trim().split(' ');
                var radial_direction = 'left:' + radial_direction[0] + '; top:' + radial_direction[1] + ';'
            }
            var gradient_orienter = '<div class="csshero-radial-orienter"><div class="csshero-radial-wave-wrap"><div class="csshero-radial-wave"></div></div><div class="csshero-radial-gradient-pointer" style="' + radial_direction + '"></div></div>';
        }
        if (gr_type.indexOf('repeating-') > -1) {
            var is_repeating = 'repeating';
        } else {
            var is_repeating = '';
        }
        if (is_color(gr_direction.split(' ')[0]))
            gr_direction = '180deg';
        returner += '<div class="grad-orienter-wrap"><div class="gr-orient">' + gradient_orienter + '</div><div class="gr-val"><div><label>Direction</label><input type="text" value="' + gr_direction + '" /></div><div><label>Repeat</label><span class="gr-repeat ' + is_repeating + '"></span></div></div></div>';
        var render_gradient = 'linear-gradient(to right,' + render_gradient + ')';
        var render_gradient_ok = csshero_return_gradient_prev(render_gradient)
        returner += '<div class="csshero-gradient-render-wrap"><div class="csshero-gradient-render" style="background-image:' + render_gradient_ok + ';"></div></div><div class="csshero-gradient-color-holder ' + holder_class + '">';
        var color_index = 0;
        var color_total = gr_clr.length;
        for (var c in gr_clr) {
            color_index++;
            clr_pos = gr_clr[c].pos;
            var clr_pos_name = clr_pos;
            if (clr_pos == 'not-set') {
                var clr_pos = parseInt((100 * (color_index - 1)) / (color_total - 1)) + '%';
            }
            var color_print = gr_clr[c].val;
            var color_print = apply_color_to_picker(color_print);
            clr_direction = 'left';
            returner += '<div class="csshero-gradient-color" style="' + clr_direction + ':' + clr_pos + ';" ><div class="gradient-color-delete"></div><div class="palette-trigger-wrap"></div><div class="gradient-color-handle"></div><div class="gradient-picker-inner csshero-picker-trigger" data-position="' + clr_pos_name + '" data-original-color-val="' + gr_clr[c].val + '" style="background-color:' + color_print + ';"></div></div>';
        }
        returner = returner + '</div></div>';
        return returner;
    }
}
function build_editor_widget(prop, val, additional_classes, trans, prop_desc) {
    if (prop_desc) {
        var prop_description = '<div class="csshero-prop-desc">' + prop_desc + '</div>';
        var description_icon = '<span class="desc-icon"></span>';
    } else {
        var prop_description = '<div class="csshero-prop-desc"></div>';
        var description_icon = '<span class="desc-icon loads-externally"></span>';
    }
    if (additional_classes.indexOf('csshero-numeric-widget') > -1) {
        var numeric_controls = '<div class="numeric-controls"><span class="plus"></span><span class="minus"></span></div>';
    } else {
        var numeric_controls = '';
    }
    var widget_extras = '';
    var val_class = "";
    var widget_dropdown = '';
    var dropdown_trigger = '';
    var additional_input_btns = '';
    if (prop == 'background-image') {
        var prop_upload_form = $('#csshero-upload-img-box').html();
        var widget_post_extras = '<div class="csshero-buttons-wrap"><label>Add:</label><span class="csshero-widget-btn csshero-load-images">Image</span><span class="csshero-widget-btn csshero-load-gradients">Gradient</span></div><div class="csshero-bg-img-wrapper "><div class="csshero-show-img-tabber"><span class="cur" data-tab="unsplash">Unsplash</span><span data-tab="uploads">Uploads</span><span class="close-bg-img-tab "></span></div><div class="csshero-unsplash-loader-wrap img-upload-tab" data-tab-send="unsplash"><div class="csshero-unsplash-search"><input type="text" /><span class="csshero-unsplash-src"></span></div><div class="csshero-unsplash-sorter"><span class="cur">latest</span><span>oldest</span><span>popular</span></div><div class="csshero-unsplash-loader" data-page="1"></div><div class="csshero-unsplash-footer">Photos by <a target="_blank" href="//unsplash.com?utm_source=css-hero&utm_medium=referral&utm_campaign=api-credit">Unsplash</a><div class="csshero-unsplash-pagination"><span class="prev">prev</span><span class="next">next</span></div></div></div><div class="csshero-user-media img-upload-tab" data-tab-send="uploads">' + prop_upload_form + '</div></div>';
    }
    if (prop == 'box-shadow' || prop == 'text-shadow') {
        var widget_post_extras = '<div class="csshero-buttons-wrap"><span class="csshero-widget-btn csshero-make-shadow">Make Shadow</span></div><div class="csshero-shadow-builder"></div>';
    }
    if (prop == 'font-family') {
        var additional_input_btns = '<span class="csshero-font-nav prev"></span><span class="csshero-font-nav next"></span>';
        var widget_post_extras = '<div class="csshero-buttons-wrap"><span class="csshero-widget-btn csshero-open-font-manager">Font Manager</span></div>';
    }
    if (additional_classes.indexOf('csshero-has-set_none') > -1) {
        additional_input_btns += '<span class="set-to-none"></span>';
    }
    if (additional_classes.indexOf('csshero-slidable-widget') > -1) {
        if (!trans)
            var trans = [0, 100];
        var slider_min = trans[0];
        var slider_max = trans[1];
        if (prop == 'opacity') {
            var step = '.1';
        } else {
            var step = '1';
        }
        widget_extras += '<div class="slider-wrap-outer"><div class="slider-wrap"><input class="csshero-slider-element" type="range" min="' + slider_min + '" max="' + slider_max + '" step="' + step + '" value="0"/></div>';
        var slider_wrap_closer = '</div>'
    } else {
        var slider_wrap_closer = '';
    }
    if (additional_classes.indexOf('has_buttons') > -1) {
        var buttons = '';
        var buttons_class = '';
        if (trans.length > 3)
            var buttons_class = 'extra';
        for (t in trans) {
            var button_class = '';
            if (val == trans[t])
                var button_class = 'cur';
            buttons += '<span title="' + trans[t] + '" class="csshero-widget-button csshero-widget-button-' + trans[t] + ' ' + button_class + '" data-button-val="' + trans[t] + '"></span>';
        }
        var widget_extras = '<div class="csshero-widget-buttons ' + buttons_class + '">' + buttons + '</div>';
        var val_class = 'clears';
    }
    if (additional_classes.indexOf('has_dropdown') > -1) {
        var dropdown = '';
        for (var t in trans) {
            var dropdown_class = '';
            if (val == trans[t])
                var dropdown_class = 'cur';
            if (prop == 'background-image') {
                var dropdown_render = '<div class="bg-render" style="background-image:' + trans[t] + '"></div>';
            } else {
                var dropdown_render = trans[t]
            }
            dropdown += '<li class="csshero-widget-dropdown-item ' + dropdown_class + '" data-button-val="' + trans[t] + '"><span class="dd-prev"></span>' + dropdown_render + '</li>';
        }
        var widget_dropdown = '<ul class="csshero-dropdown">' + dropdown + '</ul>';
        var val_class = 'clears';
        var dropdown_trigger = '<div class="csshero-dropdown-trigger"></div>';
    }
    var picker_wrap = '';
    if (!additional_classes)
        additional_classes = '';
    var widget_btns = '<div class="widget-btns"><ul class="widget-btns-expander"><li class="widget-btn-action widget-btn-res">Reset This Property</li><li class="widget-btn-action widget-btn-imp">Make Important</li><li class="widget-btn-action widget-btn-donly">Large Screens Only</li></ul><span class="widget-btn widget-btn-res"></span><span class="widget-btn widget-btn-imp"></span><span class="widget-btn widget-btn-donly"></span></div>';
    clean_val = val;
    var render_prop = prop.replace(/-/g, ' ');
    var picker_extras = '';
    if (!widget_post_extras)
        var widget_post_extras = '';
    if (additional_classes.indexOf('csshero-colorpicker-widget') > -1) {
        var picker_clean_val = apply_color_to_picker(clean_val);
        picker_wrap = '<div class="csshero-picker-trigger-wrap"><div data-original-color-val="' + picker_clean_val + '" style="background-color:' + picker_clean_val + ';"class="csshero-picker-trigger"></div></div>';
        var picker_extras = '<div class="palette-trigger-wrap"></div><div class="html5-color-input-wrap"><input type="color" class="browser-picker" value="#ff0000"></div>';
    }
    var widget = '<div data-property-name="' + prop + '" class="csshero-editor-block-widget ' + additional_classes + '"><div class="csshero-render-prop"><label>' + render_prop + '</label>' + description_icon + widget_btns + '</div>' + prop_description + widget_extras + '<div class="csshero-render-val ' + val_class + '"><div class="csshero-input-wrap"><div class="csshero-quick-var">\
   <div class="csshero-quick-var-expander">\
    <div class="close-quick-var"></div>\
    <div class="csshero-quick-var-tabber">\
     <span class="active" data-load="get">Load Variable</span>\
     <span data-load="set">Save as Variable</span>\
    </div>\
    <div class="csshero-quick-var-set-wrap csshero-quick-var-wrap" data-show="set" style="display:none">\
     <div class="csshero-quick-var-set">\
      <b>Store <em class="store-var-val"></em> as variable</b>\
      <label>@</label><input placeholder="variableName" class="set-name" />\
      <input class="set-value" />\
      <span class="save-quick-var">Save</span>\
     </div>\
    </div>\
    <div class="csshero-quick-var-get-wrap csshero-quick-var-wrap" data-show="get">\
     <b class="load-var"></b>\
     <div class="csshero-quick-var-get"></div>\
    </div>\
   </div>\
  </div>' + picker_wrap + '<input type="text" class="csshero-input" value="' + val + '" />' + numeric_controls + additional_input_btns + dropdown_trigger + picker_extras + '</div>' + widget_dropdown + slider_wrap_closer + '</div>' + widget_post_extras + '</div>';
    return widget;
}
function property_looper(obj, inner_prop, stack, prop) {
    if (inner_prop == '__notice') {
        return '<div class="csshero-advanced-prop-notice">' + props_groups[prop][inner_prop] + '</div>';
    }
    if (inner_prop.indexOf('__') > -1)
        return;
    if (obj[inner_prop]) {
        var inner_prop_val = obj[inner_prop];
        var widget_classes = 'csshero-has-been-edited';
        if (inner_prop_val.indexOf('!important') > -1)
            var widget_classes = 'important-widget ' + widget_classes;
    } else {
        if (obj['@media @desktop_only'] && obj['@media @desktop_only'][inner_prop]) {
            var inner_prop_val = obj['@media @desktop_only'][inner_prop];
            var widget_classes = 'desktop_only-widget csshero-has-been-edited';
            if (inner_prop_val.indexOf('!important') > -1)
                widget_classes += ' important-widget ';
        } else {
            if ($(stack, cssheroframe).length > 0) {
                var stack_parent = $(stack, cssheroframe).parent();
                stack_parent.addClass('csshero-hidden-el');
                var inner_prop_val = $(stack, cssheroframe).css(inner_prop);
                stack_parent.removeClass('csshero-hidden-el');
                if (inner_prop_val.indexOf('"') > -1) {
                    var inner_prop_val = inner_prop_val.replace(/"/g, "'");
                }
            } else {
                var inner_prop_val = 'none';
            }
            var widget_classes = 'csshero-has-not-been-edited';
        }
    }
    var q = props_groups[prop][inner_prop];
    if (q) {
        if (q.colorpicker)
            widget_classes += ' csshero-colorpicker-widget';
        var transmitted = '';
        if (q.buttons) {
            widget_classes += ' has_buttons';
            var transmitted = q.buttons;
        }
        if (q.dropdown) {
            widget_classes += ' has_dropdown';
            var transmitted = q.dropdown;
        }
        if (q.numeric)
            widget_classes += ' csshero-numeric-widget';
        if (q.advanced)
            widget_classes += ' csshero-is-advanced-widget';
        if (q.slidable) {
            widget_classes += ' csshero-slidable-widget';
            transmitted = q.range;
        }
        if (q.inner_group) {
            widget_classes += ' csshero-inner-group csshero-inner-group-' + q.inner_group;
        }
        if (q.description) {
            var description = q.description;
        } else {
            var description = '';
        }
        if (q.set_none) {
            widget_classes += ' csshero-has-set_none';
        }
        var full_widget = build_editor_widget(inner_prop, inner_prop_val, widget_classes, transmitted, description)
        var n_controls = '<div class="numeric-controls"><span class="plus"></span><span class="minus"></span></div>';
        if (inner_prop == 'padding-top') {
            var spacings = '\
   <div class="csshero-sc sc-mar">\
    <div class="sc-lock" title="lock all margins"></div>\
    <span class="marginTop sc-s"><input data-proxy="margin-top" type="text" />' + n_controls + '</span>\
    <span class="marginRight sc-s"><input data-proxy="margin-right" type="text" />' + n_controls + '</span>\
    <span class="marginBottom sc-s"><input data-proxy="margin-bottom" type="text" />' + n_controls + '</span>\
    <span class="marginLeft sc-s"><input data-proxy="margin-left" type="text" />' + n_controls + '</span>\
   </div>\
   <div class="csshero-sc sc-pad">\
    <div class="sc-lock" title="lock all paddings"></div>\
    <span class="o n"><span class="control control-m" data-sender="margin-top"></span><span class="control control-p" data-sender="padding-top"></span></span>\
    <span class="o w"><span class="control control-m" data-sender="margin-right"></span><span class="control control-p" data-sender="padding-right"></span></span>\
    <span class="o s"><span class="control control-m" data-sender="margin-bottom"></span><span class="control control-p" data-sender="padding-bottom"></span></span>\
    <span class="o e"><span class="control control-m" data-sender="margin-left"></span><span class="control control-p" data-sender="padding-left"></span></span>\
    <span class="paddingTop sc-s" ><input data-proxy="padding-top" type="text" />' + n_controls + '</span>\
    <span class="paddingRight sc-s"><input data-proxy="padding-right" type="text" />' + n_controls + '</span>\
    <span class="paddingBottom sc-s"><input data-proxy="padding-bottom" type="text" />' + n_controls + '</span>\
    <span class="paddingLeft sc-s"><input data-proxy="padding-left" type="text" />' + n_controls + '</span>\
   </div>';
            var full_widget = '<div class="csshero-advanced-prop-notice low-level-notice"><b>Tip:</b> in some cases you may need to set the <b>extra / display</b> property to <em><b>inline-block</b></em> or <em><b>block</b></em>.</div><div class="csshero-spacing-controller">' + spacings + '</div><span class="csshero-spacing-expander">Expand</span>' + full_widget;
        }
        if (inner_prop == 'border-width') {
            var full_widget = '<div class="csshero-border-switch"><span data-border-trigger="border-all" data-border="border-all"></span><span data-border-trigger="border-top" data-border="borderTop-width"></span><span data-border-trigger="border-right" data-border="borderRight-width"></span><span data-border-trigger="border-bottom" data-border="borderBottom-width"></span><span data-border-trigger="border-left" data-border="borderLeft-width"></span></div>' + full_widget;
        }
        return full_widget;
    }
}
function property_updater(obj, prop, stack) {
    if (stack)
        var obj = obj[stack]
    $('.csshero-editor-block').attr('data-block-props', stack);
    var widget = $('.csshero-editor-block-widget[data-property-name="' + prop + '"]');
    var input = widget.find('.csshero-input');
    widget.removeClass('desktop_only-widget')
    widget.removeClass('important-widget')
    widget.removeClass('csshero-has-been-edited');
    widget.removeClass('has-variable')
    if (obj && obj[prop]) {
        var inner_prop_val = obj[prop];
        if (inner_prop_val.indexOf('@') > -1) {
            has_variable = 'has-variable'
        } else {
            has_variable = '';
        }
        widget.addClass('csshero-has-been-edited').addClass(has_variable).removeClass('csshero-has-not-been-edited')
        if (inner_prop_val.indexOf('!important') > -1) {
            widget.addClass('important-widget');
        }
    } else {
        if (obj && obj['@media @desktop_only'] && obj['@media @desktop_only'][prop]) {
            var inner_prop_val = obj['@media @desktop_only'][prop];
            widget.addClass('csshero-has-been-edited desktop_only-widget')
            if (inner_prop_val.indexOf('!important') > -1) {
                widget.addClass('important-widget');
            }
        } else {
            try {
                $(stack, cssheroframe)
                var is_real_selector = true;
            } catch (err) {
                var is_real_selector = false;
            }
            if (is_real_selector && $(stack, cssheroframe).length > 0) {
                var accurate_checker = false;
                if (prop.indexOf('margin') > -1 || prop.indexOf('padding') > -1 || prop.indexOf('height') > -1 || prop.indexOf('width') > -1 || prop == 'font-size')
                    var accurate_checker = true;
                var stack_parent = $(stack, cssheroframe).eq(0).parent();
                if (accurate_checker)
                    stack_parent.addClass('csshero-hidden-el');
                var inner_prop_val = $(stack, cssheroframe).eq(0).css(prop);
                if (accurate_checker)
                    stack_parent.removeClass('csshero-hidden-el');
                if (inner_prop_val.indexOf('"') > -1) {
                    var inner_prop_val = inner_prop_val.replace(/"/g, "'");
                }
            } else {
                var inner_prop_val = 'none';
            }
            widget.addClass('csshero-has-not-been-edited');
        }
    }
    input.val(inner_prop_val).attr('data-orginally-set-val', inner_prop_val)
    if (widget.is('.csshero-colorpicker-widget')) {
        var picker = widget.find('.csshero-picker-trigger');
        var inner_prop_val_color = inner_prop_val.replace('!important', '');
        if (inner_prop_val_color.indexOf('@') > -1) {
            var inner_prop_val_color = apply_color_to_picker(inner_prop_val_color);
        }
        picker.attr('data-original-color-val', inner_prop_val_color).css('background-color', inner_prop_val_color);
    }
    if (widget.is('.csshero-slidable-widget')) {
        var inner_prop_val_mat = parseInt(inner_prop_val);
        var slider = widget.find('.csshero-slider-element');
        slider.val(inner_prop_val_mat);
    }
    if (widget.is('.has_buttons')) {
        widget.find('.csshero-widget-button.cur').removeClass('cur')
        var btn = widget.find('.csshero-widget-button[data-button-val="' + inner_prop_val + '"]').addClass('cur')
    }
}
$(document).on('input', '.csshero-slider-element', function() {
    var prop = $(this).closest('.csshero-editor-block-widget').attr('data-property-name')
    var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
    var inner_prop_val = input.val();
    var slider_value = $(this).val();
    if (inner_prop_val.indexOf(' ') > -1) {
        var inner_prop_val = inner_prop_val.split(' ')[0]
    }
    if (slider_value.indexOf('@') > -1 && csshero_variables[slider_value]) {
        var slider_value = csshero_variables[slider_value]['var_prop'];
    }
    var slider_pre = '';
    if (slider_value < 0) {
        var slider_pre = '-';
        var slider_value = slider_value.replace(/-/g, '')
    }
    var unit = inner_prop_val.replace(/\d+/g, '').replace(/\./g, '').replace(/-/g, '');
    if (!unit || unit == '' || unit == 'none' || unit == 'auto' || unit.indexOf('@') > -1)
        var unit = 'px';
    if (prop == 'opacity')
        var unit = '';
    var newval = slider_pre + slider_value + unit;
    input.val(newval).trigger('updateval');
}).on('click', '.has-variable .csshero-input', function() {
    $('.csshero-service-item[data-service="variables"]:not(.cur)').trigger('click')
}).on('change', '.browser-picker', function() {
    var bval = $(this).val();
    var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
    input.val(bval).trigger('updateval')
    var trigger = $(this).closest('.csshero-editor-block-widget').find('.csshero-picker-trigger');
    trigger.css('background-color', bval).attr('data-original-color-val', bval)
    trigger.spectrum("set", bval);
}).on('focus', '.browser-picker', function() {
    var widget = $(this).closest('.csshero-editor-block-widget');
    var paletter = widget.find('.palette-trigger-wrap');
    if (paletter.hasClass('show-palettes')) {
        paletter.trigger('click')
    }
})
function processArray(items, process) {
    var todo = items.concat();
    setTimeout(function() {
        process(todo.shift());
        if (todo.length > 0) {
            setTimeout(arguments.callee, 10);
        }
    }, 10);
}
function class_and_props_scanner_from_object(obj) {
    $('.class-wrap').removeClass('used-class')
    var cnt = 0;
    var props = 0;
    for (var o in obj) {
        if (o.indexOf('ISCLASS') > -1) {
            cnt++;
            var class_indexer = obj[o];
            var class_match = '';
            for (var g in global_classes) {
                if (g.indexOf(class_indexer.split('(')[0]) > -1) {
                    var class_match = g;
                    var el = $('.class-wrap[data-original_claname="' + g + '"]');
                    el.addClass('used-class')
                    el.closest('.class-inner-w.hidden-list').removeClass('hidden-list')
                    break;
                }
            }
        } else {
            if (typeof obj[o] != "object" && obj[o] != 'ISEMPTYPROP' && o[0] != '@' && $('.csshero-editor-block-widget[data-property-name="' + o + '"]').length > 0)
                props++
        }
    }
    $('.csshero-mode-classes span.num').html(cnt);
    $('.csshero-mode-props span.num').html(props);
    $('.csshero-props-actions').attr('data-editable-count', props);
}
function iterate_less_objects(obj, stack, scroll_pos) {
    if (obj) {
        $('.csshero-editor-interface-contents').empty().append('<div class="csshero-editor-block" data-block-props="' + stack + '"><div class="csshero-editor-block-scroller"><div class="in-editor-classes"><div class="csshero-description">Snippets are groups of re-usable edits that you can apply on the fly.<div class="csshero-class-title-anchor">A</div></div><div class="csshero-classes-panel"></div></div><div class="all-props"><div class="csshero-props-actions"><div><div class="csshero-search-props-wrap"><input type="text" placeholder="Search Property" class="csshero-search-props" /><span class="icon-search"></span></div><span class="actions"><span class="actions-expander"><div class="lines"></div><ul class="sub-actions"><li><span class="review">Review this element edits</span></li><li><span class="toggle-advanced-props">Toggle Advanced Properties</span></li><li><span class="reset">Reset All Edits for this element</span></li><li><span class="make-class">Store this element edits as Snippet</span></li></ul></span></span></div></div><div class="csshero-sticky-title-holder"></div><div class="all-props-inner"></div></div></div></div>');
        class_and_props_scanner_from_object(obj)
        var all_props_looper = 0;
        var props_len = Object.keys(props_groups).length;
        var prop_len = 0;
        var horizontal_tabber = '<div class="csshero-horizontal-tabber">';
        for (var prop in props_groups) {
            prop_len++;
            if (props_groups[prop]['__is-advanced']) {
                var is_advanced_class = 'is-advanced-group'
            } else {
                var is_advanced_class = 'is-not-advanced-group';
            }
            if (prop_len == props_len) {
                var prop_len_count = 'last';
            } else {
                var prop_len_count = 'not-last';
            }
            horizontal_tabber += '<div class="csshero-editor-block-sub-title" data-prop-group-name="' + prop + '">' + prop + '</div>';
            var hidden_class = 'hidden';
            $('.csshero-editor-block[data-block-props="' + stack + '"] .csshero-editor-block-scroller .all-props-inner').append('<div class="csshero-editor-block-wrap ' + is_advanced_class + ' ' + hidden_class + ' ' + prop_len_count + '" data-prop-group="' + prop + '"><div class="csshero-editor-block-sub-title" data-prop-group-name="' + prop + '">' + prop + '<div class="csshero-dropdown-prop-trigger"></div></div><div class="csshero-editor-block-inner-wrap csshero-editor-block-inner-wrap-' + prop + '" data-property-block-wrap-name="' + prop + '"></div></div>')
            var inprops = props_groups[prop]
            for (var t in inprops) {
                var full_widget = property_looper(obj, t, stack, prop);
                $('.csshero-editor-block-inner-wrap[data-property-block-wrap-name="' + prop + '"]').append(full_widget);
            }
        }
        horizontal_tabber += '</div>';
        $('.all-props').append(horizontal_tabber);
    }
}
function csshero_interface_has_loaded(scroll_pos) {
    csshero_load_pickers();
    var pb = $('.all-props').outerHeight();
    var pm = $('.csshero-editor-block-wrap.last').outerHeight();
    var pb = pb - pm;
    if (scroll_pos) {
        $('.csshero-editor-block-scroller .all-props-inner').perfectScrollbar().animate({
            scrollTop: scroll_pos
        }, 0).trigger('ps-scroll-y');
    } else {
        $('.csshero-editor-block-scroller .all-props-inner').perfectScrollbar().trigger('ps-scroll-y');
    }
    $(window).trigger('csshero-interface-loaded')
}
function csshero_fill_fonts() {
    var wid = $('.csshero-editor-block-widget[data-property-name="font-family"]');
    var loader = $('#csshero-font-loader', cssheroframe);
    var dd = wid.find('.csshero-dropdown');
    if (loader.html() != '' && loader && wid.attr('data-loaded-fonts') == JSON.stringify(collection_fonts))
        return;
    dd.empty();
    dd.append('<ul class="group" data-group="system"><li class="group-title">System Fonts</li></ul><ul class="group" data-group="gfonts"><li class="group-title">Google Fonts</li></ul><ul class="group" data-group="typekit"><li class="group-title">Typekit Fonts</li></ul>')
    var f_count = 0;
    processArray(collection_fonts, function(f) {
        f_count++;
        var font_style = '';
        if ($.inArray(f, stored_extra_gfonts) > -1 || $.inArray(f, default_gfontlist) > -1) {
            var destination = dd.find('.group[data-group="gfonts"]')
            var font_style = "<link href='https://fonts.googleapis.com/css?family=" + f + "' rel='stylesheet' type='text/css'>";
        } else {
            if ($.inArray(f, system_fonts) > -1) {
                var destination = dd.find('.group[data-group="system"]')
            } else {
                var destination = dd.find('.group[data-group="typekit"]')
            }
        }
        var font_el = '<li class="csshero-widget-dropdown-item" data-button-val="' + f + '" style="font-family:' + f + ';"><span class="dd-prev"></span>' + f + font_style + '</li>';
        if (destination.find('li[data-button-val="' + f + '"]').length < 1)
            destination.append(font_el)
        if (collection_fonts.length == f_count) {
            dd.find('.group').each(function() {
                var mylist = $(this);
                var listitems = mylist.children('.csshero-widget-dropdown-item').get();
                listitems.sort(function(a, b) {
                    return $(a).text().toUpperCase().localeCompare($(b).text().toUpperCase());
                })
                $.each(listitems, function(idx, itm) {
                    mylist.append(itm);
                });
            });
            wid.attr('data-loaded-fonts', JSON.stringify(collection_fonts))
        }
    })
}
function return_spectrum_options(startcolor, customclass) {
    if (!customclass)
        customclass = 'no-class'
    var startcolor = startcolor.replace(/ /g, '');
    if (startcolor == 'rgba(0,0,0,0)' || startcolor == 'transparent') {
        startcolor = 'black';
    }
    var opz = {
        color: startcolor,
        preferredFormat: 'rgb',
        showAlpha: true,
        showInput: true,
        allowEmpty: false,
        showInitial: true,
        containerClassName: customclass,
        showPalette: true,
        palette: [['rgba(0,0,0,0)']]
    }
    return opz;
}
function return_colorpicker_color(el, e, tinycolor) {
    var color_input = el.spectrum("get");
    var safe_var = '';
    if (tinycolor) {
        var rgba = color_input.toRgbString();
        if (typeof tinycolor == 'string' && tinycolor.indexOf('@') > -1 && csshero_variables[tinycolor]) {
            var rgba = csshero_variables[tinycolor]['var_prop'];
            var safe_var = tinycolor;
        }
    } else {
        var rgba = '';
    }
    console.log(safe_var)
    el.css('background-color', rgba);
    if (el.is('.gradient-picker-inner')) {
        console.log('wopppa')
        var end = el.closest('.csshero-gradient-builder').find('.gradient-val input');
        var original = end.val();
        var original_options = original.slice(original.indexOf('(') + 1, original.lastIndexOf(')'));
        var updater_position = el.attr('data-position');
        if (safe_var && safe_var != '') {
            var ori_color = safe_var;
        } else {
            var ori_color = rgba;
        }
        el.attr('data-original-color-val', ori_color)
        if (updater_position != 'not-set')
            ori_color = ori_color + ' ' + updater_position;
        var original_optins_arr = psplit(original_options);
        var updater_index = el.closest('.csshero-gradient-color').index();
        if (!is_color(original_optins_arr[0].split(' ')[0]))
            updater_index = updater_index + 1;
        original_optins_arr.splice(updater_index, 1, ori_color);
        var updated_val = original_optins_arr.join(',');
        var updated_val = original.replace(original_options, updated_val)
        end.val(updated_val).trigger('update-from-drag')
    } else {
        if (el.hasClass('class-picker')) {
            var end_input = el.closest('.class-prop-val-wrap').find('input')
        } else {
            var end_input = el.closest('.csshero-input-wrap').find('.csshero-input');
        }
        if (end_input.length == 0)
            var end_input = el.closest('.csshero-input-wrap').find('.csshero-input-proxy');
        if (el.closest('.csshero-editor-block-widget').hasClass('important-widget'))
            rgba = rgba + '!important';
        if (el.is('.var-color-prev')) {
            var end_input = el.closest('.csshero-var-wrap').find('.csshero-val')
        }
        end_input.val(rgba).trigger('updateval')
    }
    return rgba;
}
var colorpicker_palette = '';
function csshero_load_pickers(context) {
    if (!context) {
        var pickers = $(".csshero-picker-trigger");
        var gradient_pickers = $(".csshero-gradient-color");
        var radial_pointers = $('.csshero-radial-gradient-pointer');
    } else {
        var pickers = context.find(".csshero-picker-trigger")
        var gradient_pickers = context.find(".csshero-gradient-color");
        var radial_pointers = context.find('.csshero-radial-gradient-pointer');
    }
    if (context && context.is('.csshero-var-wrap')) {
        var additional_c = 'is_var_picker'
    } else {
        var additional_c = '';
    }
    pickers.each(function() {
        var t = $(this);
        var val = $(this).attr('data-original-color-val');
        var uniq = additional_c + ' uniclass-' + Math.round(new Date().getTime() + (Math.random() * 999));
        t.addClass(uniq).attr('data-uniq', uniq)
        t.spectrum(return_spectrum_options(val, uniq))
    })
    gradient_pickers.each(function() {
        var cont = $(this).closest('.csshero-gradient-color-holder');
        var hand = $(this).find('.gradient-color-handle');
        $(this).draggable({
            axis: 'x',
            containment: cont,
            handle: hand,
            drag: function(event) {
                var wrapper = $(this).closest('.csshero-gradient-wrapper');
                var gr_repeat = wrapper.find('.gr-repeat');
                wrapper.find('.palette-trigger-wrap.show-palettes').each(function() {
                    $(this).empty().removeClass('show-palettes')
                })
                if (gr_repeat.is('.repeating')) {
                    var repeat = 'repeating-';
                } else {
                    var repeat = '';
                }
                if (wrapper.is('.csshero-gradient-wrapper-linear')) {
                    var grad_type = 'linear-gradient'
                } else {
                    var grad_type = 'radial-gradient'
                }
                var grad_w = $(this).closest('.csshero-gradient-builder').find('.csshero-gradient-render').outerWidth();
                var grad_w = parseInt(grad_w) - parseInt($(this).outerWidth());
                var grad_dir = $(this).closest('.csshero-gradient-builder').find('.gr-val input').val();
                var grad_input = $(this).closest('.csshero-gradient-builder').find('.gradient-val input');
                var w = $(this).closest('.csshero-gradient-color-holder');
                var divs = w.find('.csshero-gradient-color:not(.cloned)');
                divs.sort(function(a, b) {
                    var contentA = parseInt($(a).css('left'))
                    var contentB = parseInt($(b).css('left'))
                    return (contentA < contentB) ? -1 : (contentA > contentB) ? 1 : 0;
                }).appendTo(w)
                var divs = w.find('.csshero-gradient-color:not(.cloned)');
                var n = [];
                divs.each(function() {
                    var e = $(this).find('.gradient-picker-inner');
                    var c = e.attr('data-original-color-val');
                    var l = $(this).css('left')
                    if (l.indexOf('%' == -1))
                        l = parseInt((parseInt(l) * 100) / grad_w);
                    if (l > 100)
                        l = 100;
                    n.push(c + ' ' + l + '%');
                })
                grad_input.val(repeat + grad_type + '(' + grad_dir + ',' + n.join(',') + ')').trigger('update-from-drag')
                return;
            }
        });
    });
    radial_pointers.each(function() {
        var cont = $(this).closest('.csshero-radial-orienter');
        $(this).draggable({
            containment: cont,
            drag: function(event) {
                var bg = $(this).closest('.csshero-gradient-builder').find('.gradient-val input');
                var bgval = bg.val();
                var cont_w = parseInt(cont.outerWidth());
                var cont_h = parseInt(cont.outerHeight());
                var drag_t = parseInt($(this).css('top'));
                var drag_l = parseInt($(this).css('left'));
                var wave = cont.find('.csshero-radial-wave');
                var perc_l = parseInt(drag_l * 100 / cont_w);
                var perc_h = parseInt(drag_t * 100 / cont_h);
                var wave_class_h = (perc_h < 50) ? 'from-top' : 'from-bottom';
                var wave_class_l = (perc_l < 50) ? 'from-left' : 'from-right';
                var bgval_options = bgval.slice(bgval.indexOf('(') + 1, bgval.lastIndexOf(')'));
                var bgval_arr = psplit(bgval_options);
                if (is_color(bgval_arr[0])) {
                    var replace_idx = 0;
                    var radial_option = 'farthest corner at';
                } else {
                    var replace_idx = 1;
                    var radial_option = bgval_arr[0].split('at');
                    var radial_option = radial_option[0] + ' at';
                }
                var radial_option = radial_option + ' ' + perc_l + '% ' + perc_h + '%';
                var radial_option = radial_option.replace(/  /g, ' ');
                bgval_arr.splice(0, replace_idx, radial_option)
                bg.val('radial-gradient(' + bgval_arr.join(',') + ')').trigger('update');
                $(this).closest('.csshero-gradient-super-wrap').find('.gr-val input').val(radial_option)
                wave.attr('data-wave-h', wave_class_h).attr('data-wave-l', wave_class_l)
            }
        });
    })
}
function csshero_remove_status_from_selector(el) {
    var status = 'normal';
    if (el.indexOf(':hover') > -1)
        var status = 'hover';
    if (el.indexOf(':active') > -1)
        var status = 'active';
    if (el.indexOf(':visited') > -1)
        var status = 'visited';
    var ret = el.replace(/:hover/g, '').replace(/:active/g, '').replace(/:visited/g, '')
    var ob = {
        clean: ret,
        status: status
    }
    return ob;
}
window.csshero_render_loop_id = 0;
function property_cycler(obj, scope) {
    clean_interface();
    var session = csshero_render_loop_id;
    var il = $('.interface-loader');
    var visible_ws = $('.csshero-editor-block-wrap:not(.hidden) .csshero-editor-block-widget').toArray();
    if (visible_ws.length == 0)
        return;
    il.fadeIn(300);
    var v_l = visible_ws.length;
    var v_i = 0;
    processArray(visible_ws, function(v) {
        v_i++;
        property_updater(obj, $(v).attr('data-property-name'), scope)
        il.find('.barr').css('width', parseInt(v_i * 100 / v_l) + '%')
        if (v_l == v_i) {
            il.fadeOut(300)
            csshero_interface_has_loaded(0)
        }
    })
}
function csshero_draw_wysiwyg(obj, scope, sugg, update) {
    csshero_render_loop_id++;
    if (!sugg)
        sugg = $('.csshero-code-wrap').attr('data-editing_element_sugg')
    if (obj[scope]) {
        $('.show-shadow-maker').removeClass('show-shadow-maker')
        if (update == 'UPDATE_FROM_CODE' || !update) {
            class_and_props_scanner_from_object(obj[scope])
        }
        if (!update) {
            $('.csshero-search-props').val('').trigger('keyup')
            $('html', cssheroframe).css('min-height', 'inherit')
            var html_h = $('html', cssheroframe).outerHeight();
            $('html', cssheroframe).css('min-height', html_h)
            var statuses = ['hover', 'active', 'visited'];
            var current_array = csshero_return_actual_state_array()
            var status_scope = csshero_remove_status_from_selector(scope).clean;
            var is_status_edited = 'no_status_edited';
            if (current_array[status_scope] && !$.isEmptyObject(current_array[status_scope])) {
                var is_status_edited = 'is_status_edited';
            }
            try {
                $(status_scope, cssheroframe).prop("tagName")
                var selector_type = $(status_scope, cssheroframe).prop("tagName");
            } catch (err) {
                var selector_type = 'A';
            }
            var render_sugg = sugg.replace('(hover)', '').replace('(active)', '').replace('(visited)', '')
            var is_status = 'normal';
            var status_list = '<li data-type="' + is_status + '" class="' + is_status_edited + '" data-cla="' + status_scope + '" data-sug="' + render_sugg + '">normal</li>';
            for (var s in statuses) {
                var s = statuses[s];
                if (scope.indexOf(s) > -1)
                    var is_status = s;
                var status_selector = status_scope + ':' + s;
                if (current_array[status_selector] && !$.isEmptyObject(current_array[status_selector])) {
                    var is_status_edited = 'is_status_edited';
                } else {
                    var is_status_edited = 'no_status_edited';
                }
                status_list += '<li data-type="' + s + '" class="' + is_status_edited + '" data-cla="' + status_selector + '" data-sug="' + render_sugg + ' (' + s + ')">' + s + '</li>';
            }
            var stack_rename = '<span class="csshero-stack-option csshero-stack-option-modify">Modify</span>';
            var stack_grouping = '';
            var stack_options = '<div class="atom csshero-stack-options" data-original-sugg="' + sugg + '" data-original-stack="' + scope + '">' + stack_rename + stack_grouping + '</div>';
            var stack_class_options = '';
            try {
                $(status_scope, cssheroframe);
                var counted_els = '<span>' + $(status_scope, cssheroframe).length + '</span>';
            } catch (err) {
                if (global_classes[scope]) {
                    var scope_matcher = scope.split('(')[0] + '(';
                    var l_count = JSON.stringify(live_array).split(scope_matcher).length - 1;
                    var m_count = 0;
                    for (var m in live_mq_array) {
                        var f_m = JSON.stringify(live_mq_array[m]['pr']);
                        var f_m = f_m.split(scope_matcher).length - 1;
                        m_count += f_m;
                    }
                    var count = m_count + l_count;
                    var counted_els = '<span>' + count + '</span>';
                } else {
                    var counted_els = '<span>0</span>'
                }
            }
            if (!label)
                var label = 'Element:';
            var status_atom = '<div data-type="' + selector_type + '" class="status-chooser status_is_' + is_status + '"><ul>' + status_list + '</ul></div>';
            $('.csshero-selector-options').empty().append(status_atom + stack_options)
            $('.csshero-selector-bar').empty();
            $('.csshero-selector-bar').append('<div class="atom atom-sugg"><span class="icon-selection"></span><span class="h1-sugg">' + sugg + '</span><span class="dd"></span><span class="count-els-in-page toggle-zoom" data-zoomable="' + status_scope + '">' + counted_els + '</span></div>');
            $('.csshero-class-actions-wrap').empty().append('<span class="csshero-classes-action-undo">Cancel</span><span class="csshero-classes-action-update">Update Snippet</span>')
        }
        if ($('#csshero-body').attr('data-code-mode') == 'full')
            return;
        property_cycler(obj, scope);
        csshero_borders_check()
    }
}
function adjust_selectors_bar() {
    var bar = $('.csshero-selector-bar');
    var fluid = bar.find('.fluid-atoms');
    var fluid_inner = fluid.find('.fluid-atoms-inner')
    var fixed = bar.find('.fixed-atoms');
    var fl_w = fluid.find('.atom.icon').outerWidth()
    var fl_w = fl_w + fluid.find('.atom.atom-sugg').outerWidth();
    var fl_w = fl_w + fluid.find('.atom.atom-selector').outerWidth()
    var fi_w = fixed.outerWidth();
    var ww = $(document).outerWidth();
    if (fl_w + fi_w > ww) {
        fluid.css('max-width', ww - fi_w).perfectScrollbar();
        fluid_inner.css('width', fl_w)
    } else {
        fluid.removeAttr('style')
        fluid_inner.removeAttr('style')
    }
}
function adjust_mqs_bar() {
    return;
    var bar = $('.mq-mode-expander-inner');
    var mqs = bar.find('.csshero-service-bar-item-mq');
    var mqs_w = mqs.outerWidth()
    var mqs_c = mqs.length;
    var final_w = mqs_w * mqs_c;
    bar.css('width', final_w)
    return;
    var fluid = bar.find('.fluid-atoms');
    var fluid_inner = fluid.find('.fluid-atoms-inner')
    var fixed = bar.find('.fixed-atoms');
    var fl_w = fluid.find('.atom.icon').outerWidth()
    var fl_w = fl_w + fluid.find('.atom.atom-sugg').outerWidth();
    var fl_w = fl_w + fluid.find('.atom.atom-selector').outerWidth()
    var fi_w = fixed.outerWidth();
    var ww = $(document).outerWidth();
    if (fl_w + fi_w > ww) {
        fluid.css('max-width', ww - fi_w).perfectScrollbar();
        fluid_inner.css('width', fl_w)
    } else {
        fluid.removeAttr('style')
        fluid_inner.removeAttr('style')
    }
}
function csshero_return_mq_definition(mq_obj) {
    var mq_definition = '@media screen ';
    mqdets = mq_obj['mq_details'];
    if (mqdets) {
        for (mo in mqdets) {
            mq_definition += ' and (' + mo + ':' + mqdets[mo] + ') ';
        }
    }
    return mq_definition;
}
function csshero_render_less(listofClasses, listofVars, onlyThis, mediaQuery) {
    if (mediaQuery == 'all' || !mediaQuery) {
        mediaQuery = 'all';
        media_start = '';
        media_end = '';
    }
    if (onlyThis) {
        var styles = $('#csshero-edits-holder .mq-style-wrapper[data-mq-name="' + mediaQuery + '"] style[data-selector="' + onlyThis + '"]', cssheroframe);
    } else {
        var styles = $('#csshero-edits-holder style', cssheroframe);
    }
    $.each(styles, function(i, s) {
        var s = $(s);
        s.attr('type', 'text/css');
        var less_style = s.attr('data-less');
        var pre = listofClasses + listofVars + less_style;
        var mediaq = s.closest('.mq-style-wrapper').attr('data-mq-name');
        if (mediaq != 'all') {
            mediaq_start = csshero_return_mq_definition(live_mq_array[mediaq]) + '{';
            mediaq_end = '}'
        } else {
            mediaq_start = '';
            mediaq_end = '';
        }
        less.render(pre, '', function(error, output) {
            if (!error) {
                $('#csshero-body').removeAttr('css-errors')
                if (output)
                    s.text(mediaq_start + output.css + mediaq_end)
                $('.csshero-log').remove();
            } else {
                $('.csshero-log').remove();
                var logger = less_style;
                var logger_sta = logger.substring(0, error.index)
                var logger_end = logger.substring(error.index, error.index + 3) + '[...]'
                logger = logger_sta + '<span class="error-mark"></span>' + logger_end;
                logger = logger.replace(/\{/g, '{<br />').replace(/;/g, ';<br />');
                logger = '<h3>' + error.message + '</h3><div class="csshero-err">' + logger + '</div>';
                logger += '<span class="restore-last-ok">Restore last working setting</span>';
                $('#csshero-body').append('<div class="csshero-log">' + logger + '</div>');
                $('.csshero-log').perfectScrollbar();
                $('#csshero-body').attr('css-errors', 'true')
            }
        })
    });
}
function return_vars_array() {
    var __vars = [];
    for (v in csshero_variables) {
        __vars.push(v);
    }
    return __vars;
}
function return_flat_vars() {
    var __flat_vars = '';
    for (v in csshero_variables) {
        __flat_vars += v + ':' + csshero_variables[v]['var_prop'] + ';';
    }
    return __flat_vars;
}
function return_flat_global_classes() {
    var __classes = '';
    for (c in global_classes) {
        __classes += c + '{' + global_classes[c]['cla_prop'] + '}';
    }
    return __classes;
}
function is_control_key(event) {
    controlKeys = [37, 38, 39, 40];
    is_valid_key = $.inArray(event.which, controlKeys) > -1;
    return is_valid_key;
}
function csshero_throttle(event, delay) {
    var timer = null;
    return function() {
        var context = this
          , args = arguments;
        clearTimeout(timer);
        timer = window.setTimeout(function() {
            event.apply(context, args);
        }, delay || 500);
    }
    ;
}
function csshero_draw_code_editor(code, mirror) {
    if (code.indexOf('{}') > -1) {
        var code = code.replace(/}/g, '}\n')
    } else {
        var code = code.replace(/}/g, '}\n')
    }
    var code = code.replace(/;/g, ';\n').replace(/{/g, '{\n');
    var code = code.replace(/\n\s*\n/g, '\n');
    var code = code.trim();
    mirror.getDoc().setValue(code);
    var totalLines = mirror.lineCount();
    var lastLine = mirror.lineCount();
    mirror.markText({
        line: 0,
        ch: 0
    }, {
        line: 1,
        ch: 0
    }, {
        inclusiveLeft: true,
        atomic: true,
        className: 'readOnly-line',
        readOnly: true,
        replacedWith: document.createTextNode(""),
    });
    mirror.markText({
        line: lastLine - 1,
        ch: 0
    }, {
        line: lastLine,
        ch: 0
    }, {
        inclusiveRight: true,
        atomic: true,
        className: 'readOnly-line',
        readOnly: true,
        replacedWith: document.createTextNode(""),
    });
    for (var i = 0; i < totalLines; i++) {
        mirror.indentLine(i, "smart");
    }
    var editing = $('.csshero-code-wrap').attr('data-editing_element');
    $('.code-wrap-selector').html('<span>' + editing + '</span>{');
    var requested_font_size = localStorage.getItem('CSSHERO-CODE-EDITOR-FONT-SIZE');
    if (requested_font_size && requested_font_size != '') {
        $('.csshero-code-wrap .CodeMirror, .code-wrap-selector, .code-trail').css('font-size', requested_font_size)
    }
}
invalid_splitters = [':active', ':after', ':before', ':checked', ':disabled', ':empty', ':enabled', ':first-child', ':first-letter', ':first-line', ':first-of-type', ':focus', ':hover', ':in-range', ':invalid', ':lang', ':last-child', ':last-of-type', ':link', ':not', ':nth-child', ':nth-last-child', ':nth-last-of-type', ':nth-of-type', ':only-of-type', ':only-child', ':optional', ':out-of-range', ':read-only', ':read-write', ':required', ':root', ':selection', ':target', ':valid', ':visited'];
function csshero_string_to_json(string, codeEditor) {
    var liveEl = $('.csshero-code-wrap').attr('data-editing_element');
    var backup_string = string;
    var string = string.replace(/\"/g, "'");
    var string = string.replace(/  /g, ' ').replace(/\) {/g, '){').replace(/\{ /g, '{').replace(/; /g, ';').replace(/\/ /g, '/');
    var string = string.replace(/\r?\n|\r/g, '').replace(/\t+/g, "");
    var string = string.replace(/::/g, ':');
    var rusker = string.indexOf('(@');
    if (rusker) {
        razar = string.match(/\(.*?\)/g);
        for (rz in razar) {
            ruzer = razar[rz].replace(/:/g, '§')
            ruzer = ruzer.replace(/;/g, '∆')
            ruzer = ruzer.replace(/,/g, '∆')
            string = string.split(razar[rz]).join(ruzer);
        }
    }
    for (i in invalid_splitters) {
        var splitter = invalid_splitters[i];
        if (string.indexOf(splitter) > -1) {
            var fixed_splitter = splitter.replace(':', '§')
            string = string.split(splitter).join(fixed_splitter)
        }
    }
    var string = string.replace(/ {/g, '{');
    var string = string.split(':').join('":"');
    var string = string.split('{').join('":{"').split('}').join('"},')
    var string = string.split('},').join('},"')
    var string = string.split(';').join('","').split('""').join('"')
    var string = '{"' + string + '}';
    var string = string.split(',"}').join('}').split(',}').join('"}')
    var string = string.split('∆').join(',');
    var nth_splits = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 'odd', 'even']
    for (var n in nth_splits) {
        var s = nth_splits[n]
        var string = string.split('nth-child(' + s + ')').join('---nthsplitter-' + s + '---')
    }
    var class_declaration = ')":{'
    if (string.indexOf(class_declaration) > -1) {
        var cla_string = string.split(class_declaration)
        var cla_length = cla_string.length;
        for (var c in cla_string) {
            var cla = cla_string[c];
            if (c < cla_length - 1) {
                var final_cla = cla.substring(cla.lastIndexOf("."), cla.length);
                var final_cla = final_cla.split('§').join(':').split('∆').join(';')
                stored_classes = $.grep(stored_classes, function(n, i) {
                    return n.indexOf(final_cla.split('(')[0]) > -1;
                }, true);
                var final_cla = final_cla.split(')"')[0]
                stored_classes.push(final_cla + ')')
            }
        }
    }
    for (var n in nth_splits) {
        var s = nth_splits[n]
        var string = string.split('---nthsplitter-' + s + '---').join('nth-child(' + s + ')')
    }
    for (var v in stored_classes) {
        var cla = stored_classes[v];
        var cla = cla.split(':').join('§')
        var cla_replacer = cla.split('(')[0] + '(';
        string = string.split(cla + '":{').join('---hold---')
        string = string.split(cla_replacer).join('ISCLASS-' + v + '":"' + cla_replacer)
        string = string.split('---hold---').join(cla + '":{')
    }
    var string = string.split('§').join(':')
    if (string.indexOf('@import') > -1) {
        var required_gfonts_from_inspector = string.split("fonts.googleapis.com/css?family=");
        for (var f in required_gfonts_from_inspector) {
            var desired_font = required_gfonts_from_inspector[f].split("'")[0];
            if (desired_font.indexOf(':') > 1) {
                var desired_font = desired_font.split(':')[0];
            }
            if (stored_extra_gfonts.indexOf(desired_font) == -1 && all_google_fonts_list.indexOf(desired_font) > -1) {
                stored_extra_gfonts.push(desired_font)
            }
        }
        string = string.replace(/@import/g, function(e, w) {
            return '@import-' + w + '":"';
        })
    }
    if (string.indexOf('/*') > -1) {
        string = string.replace(/\/\*/g, function(e, w) {
            return "ISCOMMENT-" + w + '":"';
        })
        string = string.replace(/\*\//g, '*/","');
    }
    string = string.split(',"}').join('}').split(',""}').join('}')
    var string = string.replace(/  /g, ' ').replace(/," "/g, '').replace(/" "/g, '').replace(/" /g, '"').replace(/\{"}/g, '{}')
    var vk = string;
    console.log(vk)
    if (!codeEditor) {
        var codeEditor = $('.csshero-code-wrap');
    }
    var tyco = backup_string.replace(liveEl, '');
    if (tyco.length > -1) {
        try {
            kup = JSON.parse(vk)
            $('#csshero-body').removeAttr('json-errors')
        } catch (err) {
            console.log(err)
            $('#csshero-body').attr('json-errors', 'true')
            kup = {}
        }
    } else {
        kup = {}
        kup[liveEl] = {};
    }
    return kup;
}
jQuery.expr[':'].textEquals = function(a, i, m) {
    return jQuery(a).text().match("^" + m[3] + "$");
}
;
function csshero_initialize_livearray(obj) {
    for (selector in obj) {
        for (property in obj[selector]) {
            var inner_property = obj[selector][property];
            if (property == 'style') {
                inner_property_json = csshero_string_to_json(inner_property)
                live_array[selector] = inner_property_json[selector];
            }
        }
    }
}
function csshero_initialize_mq_livearray(obj) {
    for (m in obj) {
        var mq_obj = obj[m];
        var mq_max_dtls = mq_obj['mq_details'];
        var mq_props = mq_obj['pr'];
        live_mq_array[m] = {
            'mq_details': mq_max_dtls,
            props: {}
        };
        for (selector in mq_props) {
            for (l in mq_props[selector]) {
                if (l == 'style') {
                    var sty = mq_props[selector]['style'];
                    mq_prop_json = csshero_string_to_json(sty)
                    live_mq_array[m]['pr'][selector] = mq_prop_json[selector];
                }
            }
        }
    }
}
function csshero_json_to_string(obj, scope) {
    if (scope) {
        var objToString = JSON.stringify(obj[scope])
    } else {
        var objToString = JSON.stringify(obj)
        var scope = '';
    }
    if (objToString) {
        objToString = objToString.replace(/"}/g, ';}').replace(/,"/g, '').replace(/":"/g, ':').replace(/":{"/g, '{').replace(/"/g, ';').replace(/\{;/g, '{');
        objToString = objToString.replace(/ISCLASS-([0-9]+):/g, '');
        objToString = objToString.split('ISEMPTY:ISEMPTYPROP;').join('');
        objToString = scope + objToString;
        objToString = objToString.split('*/;').join(' */\n');
        objToString = objToString.replace(/ISCOMMENT:/g, '');
        objToString = objToString.replace(/ISCOMMENT-([0-9]+):/g, '/* ');
        objToString = objToString.replace(/ISCOMMENT-([0-9]+);/g, '/* ');
        objToString = objToString.replace(/@import-([0-9]+):/g, '@import ');
        objToString = objToString.replace(/@import-([0-9]+);/g, '@import ');
    } else {
        objToString = '';
    }
    return objToString;
}
function apply_mq_treshold(mqname) {
    if (mqname != 'all') {
        var mqd = live_mq_array[mqname]['mq_details'];
        if (mqd['max-width'])
            var mq_treshold = parseInt(mqd['max-width']);
        if (mqd['min-width'])
            var mq_treshold = parseInt(mqd['min-width']) + 1;
    } else {
        var mq_treshold = 999999;
    }
    $('.mq-style-wrapper[data-mq-name="' + mqname + '"]', cssheroframe).attr('data-mq-treshold', mq_treshold);
}
function sortNumber(a, b) {
    return a - b;
}
function sort_mq_render() {
    var sortable_mq_elements = [];
    $("#csshero-edits-holder", cssheroframe).find('.mq-style-wrapper').each(function() {
        var l = $(this).attr('data-order');
        sortable_mq_elements.push(l);
    });
    sortable_mq_elements.sort(sortNumber)
    for (var u in sortable_mq_elements) {
        var mq_instance = sortable_mq_elements[u];
        var mq_style_el = $('#csshero-edits-holder .mq-style-wrapper[data-order="' + mq_instance + '"]', cssheroframe);
        var mq_style_el_backup = mq_style_el.get();
        mq_style_el.remove();
        $("#csshero-edits-holder", cssheroframe).append(mq_style_el_backup)
    }
}
function render_single_block(scope, mq_name) {
    if (!mq_name) {
        mq_name = 'all';
        queried_array = live_array;
        var mq_order = 0;
    } else {
        queried_array = csshero_return_actual_state_array(mq_name);
        if (mq_name == 'all') {
            var mq_order = 0;
        } else {
            var mq_order = live_mq_array[mq_name]['mq-order'];
        }
    }
    returner = csshero_json_to_string(queried_array, scope);
    current_mq_styles_wrapper = $('#csshero-edits-holder', cssheroframe).find('.mq-style-wrapper[data-mq-name="' + mq_name + '"]').length;
    if (current_mq_styles_wrapper == 0) {
        $('#csshero-edits-holder', cssheroframe).append('<div class="mq-style-wrapper" data-order="' + mq_order + '" data-mq-name="' + mq_name + '"></div>');
    }
    reference_style = $('#csshero-edits-holder .mq-style-wrapper[data-mq-name="' + mq_name + '"] style[data-selector="' + scope + '"]', cssheroframe);
    if (reference_style.length == 0) {
        $('#csshero-edits-holder', cssheroframe).find('.mq-style-wrapper[data-mq-name="' + mq_name + '"]').append('<style data-selector="' + scope + '" data-less="' + returner + '"></style>');
    }
    reference_style = $('#csshero-edits-holder .mq-style-wrapper[data-mq-name="' + mq_name + '"] style[data-selector="' + scope + '"]', cssheroframe);
    reference_style.attr('type', 'text/less').attr('data-less', returner);
    apply_mq_treshold(mq_name)
    csshero_render_less(return_flat_global_classes(), return_flat_vars(), scope, mq_name);
    if (0 == current_mq_styles_wrapper) {
        sort_mq_render()
    }
}
function csshero_shutdown_inspector(e) {
    if ($('.inspector-actions').hasClass('while-error')) {
        alert('Please check your code for errors before closing Inspector');
        return;
    }
    if ($('#csshero-body').hasClass('inspector-laydown')) {
        $('#csshero-body').removeClass('inspector-laydown')
        $('.show-theme-code').trigger('click')
    }
    if (localStorage.getItem('CSSHERO-BOTTOM-NAVI')) {
        $('#csshero-body').addClass('show-bottom-navi')
    }
    $('#inspector-wrapper').remove()
    $('#csshero-body').removeClass('inspector-on')
    $('#csshero-edits-holder', cssheroframe).empty();
    for (style_el in live_array) {
        render_single_block(style_el)
    }
    render_mq_styles();
    $('#csshero-edits-holder style', cssheroframe).each(function() {
        var y = $(this)[0];
        y.disabled = false;
    })
    $('#inspector-style', cssheroframe).remove()
    var curel = $('.csshero-code-wrap').attr('data-editing_element')
    if (curel && curel != '')
        csshero_click_on_editable('', e, curel);
    $('.csshero-editor-container').removeAttr('style')
    if ($('#csshero-body').hasClass('detached-editor'))
        csshero_get_editor_render_options('position')
}
function delete_single_block(scope, event, all) {
    if (!all) {
        var queried_array = csshero_return_actual_state_array();
        delete queried_array[scope];
        var curmq = $('#csshero-body').attr('data-mq-mode');
        $('#csshero-edits-holder .mq-style-wrapper[data-mq-name="' + curmq + '"] style[data-selector="' + scope + '"]', cssheroframe).remove();
    } else {
        delete live_array[scope];
        for (var g in live_mq_array) {
            delete live_mq_array[g]['pr'][scope];
        }
        $('#csshero-edits-holder style[data-selector="' + scope + '"]', cssheroframe).remove();
    }
}
function csshero_deep_value(obj, path) {
    for (var i = 0, path = path.split('|||'), len = path.length; i < len; i++) {
        obj = obj[path[i]];
    }
    ;return obj;
}
;function csshero_enrich_tree_element_loop(obj, stack, topper, arr, arr2) {
    for (var property in obj) {
        if (obj.hasOwnProperty(property)) {
            if (typeof obj[property] == "object") {
                var new_stack = stack + ' ' + property;
                new_stack = new_stack.trim();
                csshero_enrich_tree_element_loop(obj[property], new_stack, topper, arr, arr2);
            } else {
                if (property.indexOf('ISCLASS-') > -1)
                    arr2.push(obj[property])
                if (stack) {
                    arr.push(stack);
                }
            }
        }
    }
    returnMe = {
        'subassets': arr,
        'classes': arr2
    };
    return returnMe;
}
function csshero_enrich_tree_element(obj, stack, topper) {
    var tree_item = $('.csshero-tree .tree-el[editableclass="' + topper + '"]');
    if (obj && !$.isEmptyObject(obj) && obj[Object.keys(obj)[0]] != 'ISEMPTYPROP') {
        tree_item.addClass('edited-tree-el');
    } else {
        tree_item.removeClass('edited-tree-el');
    }
    var leaf = $('.csshero-tree .tree-el[editableclass="' + topper + '"] > .sub-assets');
    var sub_arr = [];
    var cla_arr = [];
    var new_subassets_o = csshero_enrich_tree_element_loop(obj, stack, topper, sub_arr, cla_arr);
    var new_subassets = new_subassets_o['subassets'];
    var new_subclasses = new_subassets_o['classes'];
    leaf.empty();
    if (new_subassets.length) {
        for (w in new_subassets) {
            if (!leaf.find('[title="' + new_subassets[w] + '"]').length && new_subassets[w].indexOf('@') == -1) {
                leaf.append('<span class="sub-el" title="' + new_subassets[w] + '"><span class="yell">' + new_subassets[w] + '</span></span>')
            }
        }
    }
    if (new_subclasses.length) {
        for (n in new_subclasses) {
            subcla_matcher = new_subclasses[n].split('(')[0] + '(';
            subcla_class = 'is_local_class';
            for (m in global_classes) {
                if (m.indexOf(subcla_matcher) > -1) {
                    subcla_class = 'is_global_class';
                    break;
                }
            }
            leaf.append('<span class="sub-el sub-cla ' + subcla_class + '"><span class="yell">' + new_subclasses[n] + '</span></span>')
        }
    }
}
function csshero_enrich_tree(obj) {
    if (!obj)
        var obj = csshero_return_actual_state_array();
    $('.csshero-tree .sub-assets').empty();
    $('.edited-tree-el').removeClass('edited-tree-el');
    for (m in obj) {
        csshero_enrich_tree_element(obj[m], '', m);
    }
}
function csshero_rename_var_from_array(object, varname, replacer) {
    var replacer_regex = new RegExp(varname + "\\b","g")
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (typeof object[property] == "object") {
                if (!property.match(replacer_regex)) {
                    csshero_rename_var_from_array(object[property], varname, replacer);
                }
            } else {
                var to_be_renamed = object[property];
                var to_be_renamed = to_be_renamed.toString();
                var has_been_renamed = to_be_renamed.replace(replacer_regex, replacer)
                object[property] = has_been_renamed;
            }
        }
    }
}
function csshero_replace_var_from_array(object, varname, replacer) {
    var replacer_regex = new RegExp(varname + "\\b","g");
    var class_param_replacer_regex = new RegExp(':' + varname + "\\b","g");
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (typeof object[property] == "object") {
                if (!property.match(replacer_regex)) {
                    csshero_replace_var_from_array(object[property], varname, replacer);
                } else {
                    if (property.match(class_param_replacer_regex)) {
                        var duplicated_object_name = property.replace(class_param_replacer_regex, ':' + replacer);
                        object[duplicated_object_name] = {}
                        object[duplicated_object_name] = object[property];
                        delete object[property]
                    }
                }
            } else {
                var updated_object = object[property];
                var updated_object = updated_object.toString()
                updated_object = updated_object.replace(replacer_regex, replacer)
                object[property] = updated_object;
            }
        }
    }
}
function csshero_replace_class_from_array(object, classname, replacer, new_val) {
    replacer = replacer.split('(')[0] + '(';
    classname = classname.split('(')[0] + '(';
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (typeof object[property] == "object") {
                csshero_replace_class_from_array(object[property], classname, replacer);
            } else {
                if (object[property] && typeof object[property] == 'string' && object[property].indexOf(classname) > -1) {
                    if (replacer != classname) {
                        var replaced_in_array = object[property].replace(classname, replacer)
                        object[property] = replaced_in_array;
                    }
                }
            }
        }
    }
}
function is_color(color) {
    if (color[0] == ('@') && csshero_variables[color]) {
        var color = csshero_variables[color]['var_prop'];
    }
    var color = color.replace('!important', '')
    var $div = $("<div>");
    $div.css("border", "1px solid " + color);
    if ($div.css('border-color')) {
        is_color_ret = $div.css('border-color');
    } else {
        is_color_ret = false;
    }
    return is_color_ret;
}
function csshero_prepare_variables(vars, just_one) {
    var colormanager_wrapper = $('.csshero-colormanager').empty();
    vars_wrapper.empty();
    $('.advanced-vars-textarea').val('');
    for (var i in vars) {
        if (is_color(vars[i]['var_prop'])) {
            var pal_class = "is_color_variable"
            var color_prev = '<div class="var-color-prev-wrap"><div class="var-color-prev csshero-picker-trigger" style="background-color:' + vars[i]['var_prop'] + ';" data-original-color-val="' + vars[i]['var_prop'] + '"></div></div>';
            var color_palette = csshero_render_colorpalette(i);
            vars[i]['var_type'] = 'color_var';
            var color_dropdown = '';
        } else {
            var pal_class = '';
            var color_prev = '';
            if (!vars[i]['var_type'])
                vars[i]['var_type'] = 'normal_var';
            var color_palette = '';
            var color_dropdown = '';
            var var_parent = vars[i]["var_parent"];
            if (var_parent) {
                if (!is_color(vars[var_parent]['var_prop']))
                    delete vars[i];
            }
        }
        if (i.indexOf('--') > -1 || vars[i]['var_type'] == 'system_var') {} else {
            var var_type = vars[i]['var_type']
            var iname = i.replace(/@/g, '');
            vars_wrapper.prepend('<div data-var-wrap-name="' + i + '" data-var-original-value="' + vars[i]['var_prop'] + '" class="csshero-var-type-' + var_type + ' csshero-var-wrap ' + pal_class + '"><div class="var-ante">@</div><input data-drag-type="var" class="draggable csshero-var" disabled="disabled" value="' + iname + '" />' + color_prev + '<input class="csshero-val" disabled="disabled" value="' + vars[i]['var_prop'] + '" />' + color_dropdown + return_var_actions() + color_palette + '</div>');
        }
    }
}
function csshero_append_class_structure(cl, cl_name, data) {
    if (data) {
        var data = data.slice(data.indexOf('{') + 1, data.lastIndexOf('}'));
        var data = data.replace(/\{([^}]+)\}/g, '{}');
    }
    if (cl && cl_name) {
        while_editing = '';
        cl_props = cl[cl_name]['cla_prop'];
        cl_type = cl[cl_name]['cla_type'];
        cl_cat = cl[cl_name]['cla_cat'];
        if (!cl_cat)
            cl_cat = cl_cat = 'cla-cat-not-defined-by-user';
    } else {
        while_editing = 'while-editing expanded';
        if (!cl_name)
            cl_name = '.newClass()'
        cl_props = '';
        cl_type = 'user_cla';
        cl_cat = 'cla-cat-not-defined-by-user';
    }
    var cl_cat = cl_cat.replace(/ /g, '-')
    if (!cl_type)
        cl_type = 'user_cla';
    if (cl_name && cl) {
        if (cl[cl_name]['cla_desc']) {
            cl_desc = '<p class="cla-desc">' + cl[cl_name]['cla_desc'] + '</p>';
        } else {
            cl_desc = '';
        }
    } else {
        cl_desc = '';
    }
    cl_props = cl_props.trim();
    var uniq = cl_name[1] + cl_name[2] + '-' + Math.round(new Date().getTime() + (Math.random() * 999));
    var cl_nicename = cl_name.split('(')[0] + '()';
    if (data) {
        var class_in_use = data.indexOf(cl_name.split('(')[0] + '(');
        if (class_in_use > -1) {
            var class_is_used = 'used-class'
        } else {
            var class_is_used = 'unused-class'
        }
    } else {
        class_is_used = 'unused-class';
    }
    if (cl && cl[cl_name] && cl[cl_name]['render_style']) {
        var render_h = cl[cl_name]['render_style'];
    } else {
        var render_h = '';
    }
    var cl_demo_render = cl_name + '{' + cl_props + render_h + '}';
    less.render(return_flat_vars() + return_flat_global_classes() + cl_demo_render + '.csshero-class-demo-element-' + uniq + '{' + cl_nicename + '}', '', function(cl_props_err, cl_props_output) {
        if (!cl_props_err) {
            if (cl_props_output)
                cl_props_style = cl_props_output.css;
        } else {
            cl_props_style = 'ooo';
        }
    });
    var cl_demo_render = '<div class="csshero-class-demo-element-wrap"><div class="csshero-class-demo-element csshero-class-demo-element-' + uniq + '"><style>' + cl_props_style + '</style>' + cl_name.split('(')[0] + '</div></div>';
    var primary_cla_actions = '<div class="csshero-classes-actions primary-class-actions"><span class="remove-class">Remove</span><span class="apply-class"></span><span class="csshero-preview-class" data-manual-preview="' + cl_name.split('(')[0] + '()"></span></div>';
    if (cl_type != 'user_cla') {
        cla_actions = '';
    } else {
        cla_actions = '<div class="csshero-classes-actions secondary-class-actions"><span class="csshero-class-category-swapper"></span><span class="send-to-editor">Modify Snippet</span><span class="csshero-classes-action-delete">Delete Snippet</span></div>';
    }
    if (cl_name.indexOf('@') > -1) {
        var is_parametric_class = 'is_parametric';
    } else {
        var is_parametric_class = 'not_parametric';
    }
    var cl_appender = '<div class="cw-' + uniq + ' ' + is_parametric_class + ' class-wrap ' + while_editing + ' ' + class_is_used + ' ' + cl_type + '" data-class-replacer-props="' + cl_props + '" data-class-replacer-selector="' + cl_name + '" data-original_claname="' + cl_name + '">\
 <span class="class-nicename">' + cl_nicename + '</span>\
 <div class="class-overlay-wrap">' + cl_demo_render + primary_cla_actions + '</div>\
 <div class="csshero-class-contents-wrap">\
  ' + cl_desc + '\
  <div class="class-applier-wrap"></div></div>' + cla_actions + '</div>';
    var is_hidden = 'hidden-list';
    if (cl_type == 'system_cla') {
        var cl_nm = 'Built-in Snippets';
    } else {
        var cl_nm = 'Your Snippets';
    }
    var new_cl_container = $('.csshero-classes-panel').find('.csshero-class-container-' + cl_type + ' .class-inner-super-w');
    if (cl_cat == 'cla-cat-not-defined-by-user') {
        var final_cl_container = new_cl_container
    } else {
        var cl_cat_container = new_cl_container.find('.csshero-class-cat-container-' + cl_cat);
        if (!cl_cat_container.length)
            new_cl_container.append('<div class="csshero-class-cat-container csshero-class-cat-container-' + cl_cat + '"><span class="dropdown-title" data-toggles=".class-inner-w">' + cl_cat + '<span class="csshero-rename-snippet-cat"></span></span></div>');
        var final_cl_container = new_cl_container.find('.csshero-class-cat-container-' + cl_cat);
    }
    if (final_cl_container.find('.class-inner-w').length == 0) {
        final_cl_container.append('<div class="class-inner-w ' + is_hidden + '"></div>')
    }
    if (cl_type == 'system_cla') {
        final_cl_container.find('.class-inner-w').append(cl_appender)
    } else {
        final_cl_container.find('.class-inner-w').prepend(cl_appender)
    }
}
function csshero_prepare_classes(classes) {
    $('.csshero-classes-panel').empty()
    $('.csshero-classes-panel').append('<div class="csshero-class-container csshero-class-container-user_cla"><span class="dropdown-title" data-toggles=".class-inner-super-w">Your Snippets</span><div class="class-inner-super-w"></div></div>').append('<div class="csshero-class-container csshero-class-container-system_cla"><span class="dropdown-title" data-toggles=".class-inner-super-w">Built-In Snippets</span><div class="class-inner-super-w"></div></div>');
    var current_data = eddie.getValue();
    for (c in classes) {
        csshero_append_class_structure(classes, c, current_data)
    }
}
function csshero_hover_element(element) {
    var has_editable_from_style = GetAppliedCssRules(element);
    if (has_editable_from_style.length == 0 && !element.attr('custom_editableclass')) {
        element.removeClass('editable')
        return;
    }
    var canvas = $('#csshero-focus-view')
    if (element.hasClass('no-config-el')) {
        var cla = '';
        canvas.addClass('we-have-no-config')
    } else {
        var custom_editableclass = element.attr('custom_editableclass')
        var custom_editablesugg = element.attr('custom_editablesuggestion')
        if (!custom_editableclass) {
            var custom_editableclass = '';
        } else {
            var custom_editableclass = custom_editableclass + ' | ';
        }
        if (!custom_editablesugg) {
            var custom_editablesugg = '';
        } else {
            var custom_editablesugg = custom_editablesugg + ' | ';
        }
        var editablesugg = element.attr('editablesuggestion');
        if (!editablesugg)
            var editablesugg = '';
        var editableclass = element.attr('editableclass');
        if (!editableclass)
            var editableclass = '';
        var all_editableclasses = custom_editableclass + editableclass;
        var all_editablesuggs = custom_editablesugg + editablesugg;
        var cla = all_editableclasses.split(' | ')[0]
        canvas.removeClass('we-have-no-config')
    }
    canvas.attr('data-els', cla)
    try {
        $(cla + ':in-viewport', cssheroframe)
    } catch (err) {
        if (err)
            return;
    }
    if (element.hasClass('no-config-el')) {
        var elements = element.toArray();
    } else {
        var elements = $(cla + ':in-viewport', cssheroframe).toArray();
        if (elements.length == 0) {
            var elements = $('html', cssheroframe).find(cla + ':in-viewport', cssheroframe).toArray();
        }
    }
    var scrolled = $(cssheroframe).scrollTop()
    var fw = canvas.outerWidth();
    var fh = canvas.outerHeight();
    canvas.show()
    var eindex = 0;
    $(elements).each(function(i, v) {
        eindex++;
        var h = $(v).outerHeight();
        var w = $(v).outerWidth();
        if (w == 0 || h == 0)
            return;
        var t = $(v).offset().top;
        var t = t - scrolled;
        var l = $(v).offset().left;
        var label_pos_t = 'label_bottom';
        var label_pos_l = 'label_left';
        if ($(v).is('.csshero-currently-hovered')) {
            var cl = 'current-probe';
            if (element.hasClass('no-config-el')) {
                var es = '';
                var ec = ''
            } else {
                var es = all_editablesuggs.split(' | ');
                var ec = all_editableclasses.split(' | ');
            }
            if (element.hasClass('no-config-el')) {
                var label = '';
            } else {
                var sug = '';
                var sco = '';
                for (var e in ec) {
                    if (ec[e] && e == 0) {
                        var len = $(ec[e], cssheroframe).length;
                        sug += '<span class="atom">' + es[e] + '<span class="cnt">' + len + '</span></span>';
                        sco += '<span class="atom">' + ec[e] + '</span>';
                    }
                }
                if (t + h > fh / 2) {
                    var label_pos_t = 'label_top';
                }
                if (l > fw / 2) {
                    var label_pos_l = 'label_right';
                }
                var label = '<div class="focus-label"><div class="sug">' + sug + '</div><div class="sco">' + sco + '</div></div>';
            }
            var p = $(v).css('padding')
            var probe_padding = '<div style="border-width:' + p + ';" class="focus-probe-p"></div>';
            var m = $(v).css('margin');
            var nm = m.split(' ');
            var _nm = [];
            for (u in nm) {
                var mar = -parseFloat(nm[u]) + 'px';
                _nm.push(mar)
            }
            var neg_mar = _nm.join(' ');
            var probe_margin = '<div style="border-width:' + m + ';margin:' + neg_mar + ';" class="focus-probe-m"></div>';
        } else {
            var cl = ''
            var label = '';
            var probe_padding = '';
            var probe_margin = '';
        }
        var sty = 'top:' + t + 'px;left:' + l + 'px;width:' + w + 'px;height:' + h + 'px;'
        var hov = '<div data-probe-scope="' + cla + '" style="' + sty + '" class="' + cl + ' focus-probe ' + label_pos_l + ' ' + label_pos_t + '">' + label + probe_padding + probe_margin + '</div>';
        var ich = canvas.attr('data-els')
        if (cla == ich)
            $(hov).appendTo(canvas)
    })
}
jQuery.fn.extend({
    getPath: function() {
        var pathes = [];
        this.each(function(index, element) {
            var path, $node = jQuery(element);
            while ($node.length) {
                var realNode = $node.get(0)
                  , name = realNode.localName;
                if (!name) {
                    break;
                }
                name = name.toLowerCase();
                var parent = $node.parent();
                var sameTagSiblings = parent.children(name);
                if (sameTagSiblings.length > 1) {
                    allSiblings = parent.children();
                    var index = allSiblings.index(realNode) + 1;
                    if (index > 0) {
                        name += ':nth-child(' + index + ')';
                    }
                }
                classes = jQuery(realNode).attr('class');
                if (jQuery(realNode).attr('id')) {
                    name = '#' + jQuery(realNode).attr('id');
                } else {
                    if (classes && classes.indexOf('post-') > -1) {
                        classes_arr = classes.split(' ');
                        single_post_class = jQuery.grep(classes_arr, function(a) {
                            return a.indexOf('post-') == 0;
                        });
                        if (single_post_class.length > 0) {
                            name = '.' + single_post_class.join('.');
                        }
                    }
                }
                path = name + (path ? ' > ' + path : '');
                $node = parent;
            }
            pathes.push(path);
        });
        return pathes.join(',');
    }
});
function sort_tree_li(a, b) {
    return ($(b).attr('data-index_in_dom')) < ($(a).attr('data-index_in_dom')) ? 1 : -1;
}
function csshero_reorder_tree() {
    $('.csshero-tree .tree-trigger').each(function() {
        var scope = $(this).attr('editableclass');
        if (live_array[scope])
            $(this).addClass('hasprops')
    });
    $('.csshero-tree > ul').find(' > li b').each(function() {
        var scope = $(this).text();
        var li = $(this).closest('li');
        var idx = $(scope, cssheroframe).parents().length;
        var num = $(scope, cssheroframe).length;
        if (idx == 0)
            idx = 999999;
        if (num == 0)
            li.remove();
        li.attr('data-index_in_dom', idx);
        var nth = ':nth-child';
        if (scope.indexOf(nth) > -1) {
            var nth_splitted = $(this).text().split(nth);
            $(this).html(nth_splitted[0] + '<span class="csshero-tree-nth"><span class="csshero-hidden">' + nth_splitted + '</span>' + nth_splitted[1] + '</span>')
        }
    })
    $(".csshero-tree > ul > li").sort(sort_tree_li).appendTo('.csshero-tree > ul');
}
function csshero_return_actual_state_array(spec) {
    if (spec && spec == 'all')
        spec = 0;
    if (!spec) {
        var mq_mode = $('#csshero-body').attr('data-mq-mode');
        if (mq_mode && mq_mode != 'all') {
            var queried_array = live_mq_array[mq_mode]['pr'];
        } else {
            var queried_array = live_array;
        }
    } else {
        var queried_array = live_mq_array[spec]['pr']
    }
    return queried_array;
}
function csshero_apply_custom_ediandsugg(array) {
    cssheroframe = window.frames['csshero-iframe-main-page'].document;
    $('*[custom_editableclass]', cssheroframe).removeAttr('custom_editableclass').removeAttr('custom_editablesuggestion');
    for (var z in array) {
        if (array[z]['path_type'] != 'context_specific') {
            sele = array[z].path;
            desc = array[z].desc;
            if (!desc || desc == '' || desc == ' ')
                var desc = sele;
            try {
                var el = $(sele, cssheroframe);
                el.each(function() {
                    if ($(this).attr('custom_editableclass')) {
                        var cec = $(this).attr('custom_editableclass').split(' | ');
                        var ces = $(this).attr('custom_editablesuggestion').split(' | ');
                        var cec = unique(cec);
                        var ces = unique(ces);
                    }
                    if (cec) {
                        var prev_ce = cec.join(' | ') + ' | ';
                        var prev_cs = ces.join(' | ') + ' | ';
                    } else {
                        var prev_ce = '';
                        var prev_cs = '';
                    }
                    var final_sele = prev_ce + sele;
                    var final_desc = prev_cs + desc;
                    $(this).attr('custom_editableclass', final_sele).attr('custom_editablesuggestion', final_desc).addClass('editable')
                })
            } catch (error) {
                console.log(sele + ' is not a valid selector')
            }
        }
    }
}
function csshero_apply_ediandsugg(el, _selector, _sugg) {
    var _selector = _selector.trim();
    if (_selector.indexOf('  ') > -1) {
        var _selector = _selector.replace(/  /g, ' ')
    }
    var _selector_comes_from_live_paths = live_paths[_selector];
    if (!_selector_comes_from_live_paths) {
        el.attr('original_editableclass', _selector)
    }
    var _sugg_comes_from_live_paths = live_paths[_selector];
    if (!_sugg_comes_from_live_paths) {
        el.attr('original_editablesuggestion', _sugg)
    }
    var editableclass = el.attr('editableclass');
    var editablesuggestion = el.attr('editablesuggestion')
    if (editableclass) {
        if (_selector != editableclass) {
            var new_editableclass = _selector + ' | ' + editableclass;
            var new_editablesuggestion = _sugg + ' | ' + editablesuggestion;
        } else {
            var new_editableclass = _selector;
            var new_editablesuggestion = _sugg;
        }
    } else {
        var new_editableclass = _selector;
        var new_editablesuggestion = _sugg;
    }
    el.attr('editableclass', new_editableclass).attr('editablesuggestion', new_editablesuggestion).addClass('editable').removeClass('no-config-el')
}
function csshero_click_on_editable(element, e, editable_class, editable_sugg) {
    if (e)
        e.stopPropagation();
    if (e)
        e.preventDefault();
    if (editable_class) {
        var class_check = editable_class.split('(')[0];
        for (var n in global_classes) {
            if (n.indexOf(class_check) > -1) {
                click_on_class_element(n);
                $('#csshero-body').addClass('scanning-for-classes')
                return;
            } else {
                $('#csshero-body').removeClass('scanning-for-classes')
            }
        }
    } else {
        $('#csshero-body').removeClass('scanning-for-classes')
    }
    if (editable_class) {
        var ediclass = editable_class;
    } else {
        if (element && element != '') {
            var ediclass = element.attr('editableclass');
        }
    }
    if (editable_sugg) {
        var edisugg = editable_sugg;
    } else {
        if (element && element != '') {
            var edisugg = element.attr('editablesuggestion');
        }
    }
    if (ediclass)
        ediclass = ediclass.trim();
    var tree_anchor = csshero_tree.find('[editableclass="' + ediclass + '"]');
    var queried_array = csshero_return_actual_state_array();
    if ($('body').hasClass('inspector-on')) {
        $('.inspector-selector-add').empty()
        var marked = []
        var inspector_ed = $('.inspector-code-wrap').find('.CodeMirror')[0].CodeMirror
        var zurb = inspector_ed.getSearchCursor(ediclass)
        var u = 0;
        for (var cursor = inspector_ed.getSearchCursor(ediclass + '{'); cursor.findNext(); ) {
            u++;
            if (u == 1) {
                marked.push(inspector_ed.markText(cursor.from(), cursor.to()));
                inspector_ed.setSelection(cursor.from(), cursor.to());
                var searched_line = cursor.to().line;
                var t = inspector_ed.charCoords({
                    line: searched_line,
                    ch: 0
                }, "local").top;
                var middleHeight = inspector_ed.getScrollerElement().offsetHeight / 2;
                inspector_ed.scrollTo(null, t - middleHeight - 5);
            }
        }
        if (marked.length == 0 && e.currentTarget.className != 'csshero-trigger-inspector') {
            $('.inspector-selector-add').append('<span>' + ediclass + '</span><div class="bubble-actions"><span data-sel="' + ediclass + '" class="add">add</span><span class="clo"></span>')
        }
        if ($('#csshero-body').hasClass('inspector-laydown')) {
            $('.csshero-code-wrap').attr('data-editing_element', ediclass).attr('data-editing_element_sugg', edisugg);
            $('.show-theme-code').trigger('click')
        }
        return;
    }
    $('.csshero-code-wrap').attr('data-editing_element', ediclass).attr('data-editing_element_sugg', edisugg);
    if (!queried_array[ediclass]) {
        queried_array[ediclass] = {}
    }
    $('.csshero-active-tree-el').removeClass('csshero-active-tree-el');
    $('#csshero-body').removeClass('show-lister')
    $('.tree-trigger[editableclass="' + ediclass + '"]').addClass('csshero-active-tree-el');
    var queried_object_string = csshero_json_to_string(queried_array, ediclass);
    $('#csshero-body').addClass('editing-element');
    csshero_draw_code_editor(queried_object_string, eddie);
    csshero_draw_wysiwyg(queried_array, ediclass, edisugg);
    $('.all-props-inner').trigger('ps-scroll-y');
    $('.csshero-search-props').focus();
}
function unique(list) {
    var result = [];
    $.each(list, function(i, e) {
        if ($.inArray(e, result) == -1)
            result.push(e);
    });
    return result;
}
function render_mq_styles() {
    $('#csshero-edits-holder .mq-style-wrapper:not([data-mq-name="all"])', cssheroframe).remove();
    var sortable_mqs = [];
    for (mq_el in live_mq_array) {
        var mq_enriched_object = live_mq_array[mq_el];
        mq_enriched_object['mq-name-stored'] = mq_el;
        mq_enriched_object['mq-order'] = live_mq_array[mq_el]['mq-order'];
        sortable_mqs.push(mq_enriched_object)
    }
    sortable_mqs = sortable_mqs.sort(function(a, b) {
        return parseInt(a['mq-order']) < parseInt(b['mq-order'])
    });
    $.each(sortable_mqs, function(i, s) {
        var mq_props = sortable_mqs[i]['pr'];
        for (mq_prop in mq_props) {
            var mq_el = sortable_mqs[i]['mq-name-stored'];
            var mq_order = sortable_mqs[i]['mq-order'];
            render_single_block(mq_prop, mq_el, mq_order)
        }
    });
}
function csshero_render_colorpalette(variable_name) {
    if (variable_name.indexOf('--') > -1)
        return;
    var color_val = csshero_variables[variable_name]['var_prop']
    var paletter_id = Math.round(new Date().getTime() + (Math.random() * 100));
    var color_combinations = {
        'analog': ['spin(' + variable_name + ',30)', 'spin(' + variable_name + ',-30)'],
        'tones': ['lighten(' + variable_name + ',60%)', 'lighten(' + variable_name + ',40%)', 'lighten(' + variable_name + ',20%)', color_val, 'darken(' + variable_name + ',20%)', 'darken(' + variable_name + ',40%)', 'darken(' + variable_name + ',60%)'],
        'shades': ['fade(' + variable_name + ',20%)', 'fade(' + variable_name + ',40%)', 'fade(' + variable_name + ',60%)', 'fade(' + variable_name + ',80%)', color_val],
        'tri': [variable_name, 'spin(' + variable_name + ', 120)', 'spin(' + variable_name + ', -120)'],
        'quadri': [variable_name, 'spin(' + variable_name + ', (90))', 'spin(' + variable_name + ', (180))', 'spin(' + variable_name + ', (270))'],
        'palette': [variable_name, 'spin(' + variable_name + ', 180)', 'darken(spin(' + variable_name + ', 180), 15%)', 'lighten(' + variable_name + ', 15%)', 'lighten(' + variable_name + ', 30%)'],
    }
    var palette_structure = '';
    var palette_style = variable_name + ':' + color_val + ';';
    for (combo in color_combinations) {
        palette_structure += '<div class="csshero-combo-wrap"><b>' + combo + ':</b><div class="csshero-combo combo-' + combo + '">';
        var combo_n = 0;
        for (inner_combo in color_combinations[combo]) {
            combo_n++;
            var combo_style = color_combinations[combo][inner_combo];
            palette_style += '.csshero-palette-item-' + combo + '-' + combo_n + '{background-color:' + combo_style + ';}';
            if (combo_style == color_val) {
                var palette_item_name = variable_name;
            } else {
                var palette_item_name = variable_name + '--' + combo + '-' + combo_n;
            }
            csshero_variables[palette_item_name] = {
                'var_prop': combo_style,
                'var_type': 'subcolor_var',
                'var_parent': variable_name.split('--')[0]
            }
            palette_structure += '<div data-color="' + palette_item_name + '" data-drag-type="color" class="draggable csshero-palette-item csshero-palette-item-' + combo + '-' + combo_n + '"  data-style="' + combo_style + '"></div>';
        }
        palette_structure += '</div></div>';
    }
    less.render('.palette-' + paletter_id + ' {' + palette_style + '}', '', function(tri_err, tri_output) {
        if (!tri_err) {
            if (tri_output)
                tri_style = tri_output.css;
        } else {
            tri_style = '';
        }
    });
    var palette_obj_final = '<div data-palette-origin="' + variable_name + '" class="palette-' + paletter_id + ' csshero-color-paletter">' + palette_structure + '<style>' + tri_style + '</style></div>';
    return palette_obj_final;
}
function enable_hints(where) {
    var ExcludedIntelliSenseTriggerKeys = {
        "8": "backspace",
        "9": "tab",
        "13": "enter",
        "16": "shift",
        "17": "ctrl",
        "18": "alt",
        "19": "pause",
        "20": "capslock",
        "27": "escape",
        "33": "pageup",
        "34": "pagedown",
        "35": "end",
        "36": "home",
        "37": "left",
        "38": "up",
        "39": "right",
        "40": "down",
        "45": "insert",
        "46": "delete",
        "91": "left window key",
        "92": "right window key",
        "93": "select",
        "107": "add",
        "109": "subtract",
        "110": "decimal point",
        "111": "divide",
        "112": "f1",
        "113": "f2",
        "114": "f3",
        "115": "f4",
        "116": "f5",
        "117": "f6",
        "118": "f7",
        "119": "f8",
        "120": "f9",
        "121": "f10",
        "122": "f11",
        "123": "f12",
        "144": "numlock",
        "145": "scrolllock",
        "186": "semicolon",
        "187": "equalsign",
        "188": "comma",
        "189": "dash",
        "190": "period",
        "191": "slash",
        "192": "graveaccent",
        "220": "backslash",
        "222": "quote"
    }
    where.on("keyup", function(editor, event) {
        var __Cursor = editor.getDoc().getCursor();
        var __Token = editor.getTokenAt(__Cursor);
        var __Type = __Token.type;
        if (__Type) {
            if (!editor.state.completionActive && !ExcludedIntelliSenseTriggerKeys[(event.keyCode || event.which).toString()]) {
                CodeMirror.showHint(editor)
            }
        }
    });
}
mq_properties = ['min-width', 'max-width'];
mq_detail_actions = '<span class="mq-atom-edit">EDIT</span><div class="csshero-btn-wrapper mq-atom-actions-wrapper text-right"><span class="csshero-btn csshero-btn-delete-atom-mq cancel">Delete</span></div>';
mq_actions = '<div class="csshero-btn-wrapper"><span class="csshero-btn csshero-btn-delete-mq">Delete</span><span class="csshero-btn csshero-save-mq primary">Save MQ</span></div>';
function return_options_select(selected) {
    mq_properties_select = '';
    for (mqp in mq_properties) {
        if (selected) {
            if (selected == mq_properties[mqp]) {
                is_selected = 'selected="selected"';
            } else {
                is_selected = '';
            }
        } else {
            is_selected = '';
        }
        mq_properties_select += '<option ' + is_selected + ' value="' + mq_properties[mqp] + '">' + mq_properties[mqp] + '</option>';
    }
    mq_properties_select = '<span class="select-wrap"><select>' + mq_properties_select + '</select></span>';
    return mq_properties_select;
}
mq_prop_adder = '<span class="mq-atom-prop">' + return_options_select() + '<input type="text" placeholder="value" />' + mq_detail_actions + '</span>';
function csshero_append_mq_structure(mq_name, mq_details, mq_order) {
    if (mq_name && mq_details) {
        var claname = '';
        var is_left_handed = 'is-not-left-handed';
        if (mq_details['max-width']) {
            var mxw = parseInt(mq_details['max-width']);
            var mq_point = mxw;
            var mq_reference = mq_point;
        }
        if (mq_details['min-width']) {
            var mq_point = parseInt(mq_details['min-width']);
            if (!mq_details['max-width']) {
                var mq_reference = parseInt(mq_details['min-width']);
                var is_left_handed = 'is-left-handed';
            }
        }
        if (mq_details['min-width'] && mq_details['max-width']) {
            var mq_max = parseInt(mq_details['max-width']);
            var mq_min = parseInt(mq_details['min-width']);
            var mq_point = mq_max - mq_min;
            var mq_point_extra = mq_min;
        } else {
            var mq_point_extra = 'none';
        }
        if ($.inArray(mq_name, default_mqs_flat) != -1) {
            var mq_builtin = 'builtin-mq';
            var mq_icon_label = '';
            var this_mq_actions = '';
        } else {
            var mq_builtin = 'custom-mq';
            var this_mq_actions = '<div class="edit-this-mq open-overlay" data-overlay-service="mq-manager"></div>';
            var mq_icon_label = '<span class="mq-icon-label">' + mq_name[0] + '</span>'
        }
        var mq_label_max = '';
        var mq_label_min = '';
        if (mq_details['max-width'])
            var mq_label_max = '<em>max:</em><b>' + mq_details['max-width'] + '</b>';
        if (mq_details['min-width'])
            var mq_label_min = '<em>min:</em><b>' + mq_details['min-width'] + '</b>';
        var mq_details_label = '<div class="mq-mode-dets"><span>' + mq_name + '</span><div class="min-max">' + mq_label_min + mq_label_max + '</div></div>';
        $('.mq-mode-expander-inner').prepend('<div class="csshero-service-bar-item csshero-service-bar-item-mq ' + mq_builtin + '" data-mq="' + mq_name + '" data-mq-order="' + mq_order + '" data-mq-reference="' + mq_reference + '"><div data-mq-icon="' + mq_name + '" class="responsive-icon">' + mq_icon_label + '</div>' + mq_details_label + this_mq_actions + '</div>');
        mq_name_element = '<input type="text" value="' + mq_name + '" />';
    } else {
        var claname = 'new_mq'
        mq_name = 'NEWMQ';
        mq_name_element = '<input type="text" placeholder="Media Query Name" />';
        var mq_builtin = 'custom-mq';
    }
    mq_details_expanded = '';
    var this_mq_props = mq_properties.slice();
    for (var v in mq_details) {
        if (this_mq_props.indexOf(v) == -1) {
            this_mq_props.push(v)
        }
    }
    for (var m in this_mq_props) {
        var mq_prop = this_mq_props[m];
        if (mq_name && mq_details) {
            var single_mq_prop = mq_details[mq_prop]
        } else {
            var single_mq_prop = '';
        }
        if (!single_mq_prop)
            var single_mq_prop = '';
        mq_details_expanded += '<span class="mq-label">' + mq_prop + '</span><input data-mq-val-prop="' + mq_prop + '" class="mq-val" value="' + single_mq_prop + '" />';
    }
    $('.csshero-mqs-panel').prepend('<div class="mq-manager-item ' + claname + ' ' + mq_builtin + '" data-order="' + mq_order + '" data-mq-name="' + mq_name + '"><div class="mq-manager-atom mq-manager-atom-name" >' + mq_name_element + '</div><div class="mq-manager-atom mq-manager-atom-code">' + mq_details_expanded + '</div>' + mq_actions + '<div class="mq-sorter"><span class="mq-sort sort-up"></span><span class="mq-sort sort-down"></span></div></div>');
}
$(document).on('click', '.media-query-manager-toggle', function() {
    $('#csshero-body').toggleClass('show-mq-controller');
    setupMQcontroller();
}).on('click', '.mq-sorter .mq-sort', function() {
    var ref = $(this).closest('.mq-manager-item');
    ref.addClass('moved')
    var block = ref.get();
    if ($(this).is('.sort-down')) {
        var dest = ref.next();
        ref.remove();
        dest.after(block)
        setTimeout(function() {
            $(block).removeClass('moved')
        }, 500)
    } else {
        var dest = ref.prev();
        ref.remove();
        dest.before(block)
        setTimeout(function() {
            $(block).removeClass('moved')
        }, 500)
    }
    $('.mq-manager-item').each(function(i) {
        var n = $(this).attr('data-mq-name');
        live_mq_array[n]['mq-order'] = i;
    })
    csshero_save_step('mq-el-edit', 'Order');
    render_mq_styles()
})
function setupMQcontroller(refreshing) {
    return;
    var controller = $('#csshero-mq-scroller-bar .scroller-area');
    var track = controller.find('.track');
    var handle = track.find('.cursor')
    var body = $('#csshero-body');
    var track_w = track.outerWidth();
    var controller_max = 1400;
    var expander_contents = $('.expander-contents')
    var controller_min = 0;
    var frame = $('#csshero-inner-frame-wrap');
    var frame_w = frame.outerWidth();
    if (frame_w > controller_max)
        var controller_max = frame_w + 100;
    var current_mq = body.attr('data-mq-mode');
    var response = $('#csshero-mq-response');
    var d_only_render = desktop_only_parameter;
    var d_only_render = 100 - (d_only_render * 100 / controller_max);
    var current_mq_min = 0;
    var current_mq_max = 9999;
    response.find('.current-mq-label').html(current_mq)
    track.find('.mq-point').remove();
    expander_contents.find('.mq-line').remove();
    for (var m in live_mq_array) {
        if (m == current_mq) {
            var is_active_line = 'active-line';
            var w = live_mq_array[m];
            var current_mq_max_looker = w['mq_details']['max-width'];
            if (current_mq_max_looker)
                var current_mq_max = parseInt(current_mq_max_looker);
            var current_mq_min_looker = w['mq_details']['min-width'];
            if (current_mq_min_looker)
                var current_mq_min = parseInt(current_mq_min_looker);
        } else {
            var is_active_line = 'not-active-line'
        }
        var mq = live_mq_array[m];
        var mqd = mq['mq_details'];
        var mqd_max = mqd['max-width'];
        var mqd_min = mqd['min-width'];
        var type = 'left-sided';
        if (mqd_max && mqd_min) {
            var type = 'constrained';
        } else {
            if (mqd_min)
                var type = 'right-sided';
        }
        if (mqd_max) {
            var origin = 0;
            var max_r = parseInt(mqd_max);
            var max_r = max_r * 100 / controller_max;
            var mqd_max_render = '<span class="det">up to: <span>' + mqd_max + '</span></span>';
        } else {
            var max_r = 100;
            var mqd_max = 'NONE';
            var mqd_max_render = '';
        }
        if (mqd_min) {
            var min_r = parseInt(mqd_min);
            var min_r = min_r * 100 / controller_max;
            var origin = min_r;
            var max_r = max_r - min_r;
            var mqd_min_render = '<span class="det">from: <span>' + mqd_min + '</span></span>';
        } else {
            var mqd_min = 'NONE';
            var mqd_min_render = '';
        }
        var snap_label = '<div class="snap-label"><b>' + m + '</b>' + mqd_min_render + mqd_max_render + '</div>';
        var mq_object_l = '<div class="mq-line ' + is_active_line + '"><div class="area left">' + m + '</div><div class="area right"><div class="mq-render-line ' + type + '" data-mq-line-name="' + m + '" style="left:' + origin + '%;width:' + max_r + '%;"></div></div>';
        track.append('<div class="mq-point ' + type + '" style="left:' + origin + '%;width:' + max_r + '%;"><div class="snap l">' + snap_label + '</div><div class="snap r">' + snap_label + '</div></div>')
        expander_contents.append(mq_object_l)
    }
    expander_contents.prepend('<div class="mq-line all"><div class="area left">All Devices</div><div class="area right">---ALL---</div></div>')
    handle.draggable({
        axis: "x",
        containment: "#csshero-mq-scroller-bar .track",
        snap: ".mq-point",
        snapMode: "inner",
        snapTolerance: 5,
        drag: function(event, ui) {
            snapper(ui.position.left)
        },
    });
    function snapper(pos) {
        var y = pos * 100 / track_w;
        var n = Math.round(controller_max * y / 100);
        var snaps = $('#csshero-mq-scroller-bar .mq-render-line')
        if (current_mq_min > n || n > current_mq_max) {
            $('#csshero-body').attr('data-warning', 'inconsistence')
        } else {
            $('#csshero-body').removeAttr('data-warning');
        }
        handle.attr('data-position', n + 'px')
        response.find('.current-preview-px').html(n + 'px');
        frame.css({
            'min-width': 0,
            'width': n + 'px'
        })
        var snap_o = handle.offset().left;
        response.find('.visible-mq-feedback').empty();
        snaps.each(function() {
            if ($(this).hasClass('right-sided') || $(this).hasClass('constrained')) {
                var o = $(this).offset().left - 1;
            } else {
                var o = $(this).offset().left + 1;
            }
            var w = $(this).outerWidth();
            var w = o + w;
            var mn = $(this).attr('data-mq-line-name');
            if (o < snap_o && snap_o < w) {
                $(this).addClass('active')
                response.find('.visible-mq-feedback').append('<span class="active-mq-label">' + mn + '</span>')
            } else {
                $(this).removeClass('active')
            }
        });
    }
    var handle_pos_o = frame_w * 100 / controller_max;
    var handle_pos_o = (track_w / 100) * handle_pos_o;
    var handle_pos = Math.round(handle_pos_o);
    var unit_reporter = parseInt($('#csshero-mq-scroller-bar .unit-reporter').outerWidth());
    if (unit_reporter < 1050)
        var unit_reporter = 1050;
    var unit_reporter = unit_reporter * 100 / controller_max;
    var unit_reporter = Math.round((track_w / 100) * unit_reporter);
    var desktop_only_area = desktop_only_parameter * 100 / controller_max;
    $('.expander .desktop-only-area').css('left', desktop_only_area + '%');
    $('.scroller-area .desktop-only-area').css('left', desktop_only_area + '%');
    track.append('<div class="mq-point current-view" style="left:0;width:' + unit_reporter + 'px;"><div class="snap r"></div></div>');
    handle.attr('data-position', frame_w + 'px').css('left', handle_pos + 'px');
    snapper(handle_pos_o)
}
$(window).resize(function() {
    var f = $('#csshero-inner-frame-wrap');
    f.append('<div class="csshero-size-alert">' + f.outerWidth() + 'px</div>');
    clearTimeout(window.resizedFinished);
    window.resizedFinished = setTimeout(function() {
        setupMQcontroller();
        $('.csshero-size-alert').fadeOut(300, function() {
            $(this).remove();
        })
        if ($('#csshero-body').attr('data-mq-mode') == 'all')
            f.removeAttr('style')
    }, 450);
});
$(document).on('click', '.toggle-mq-panel', function() {
    $('.mq-mode-head').toggleClass('show-mq')
})
function csshero_design_mq_elements() {
    $('.mq-mode-expander-inner').empty()
    $('.csshero-mqs-panel').empty();
    var mq_ps = [];
    for (m in live_mq_array) {
        var this_mq = live_mq_array[m];
        var this_mq_details = this_mq['mq_details'];
        if (this_mq_details['max-width']) {
            var mq_p = parseInt(this_mq_details['max-width']);
        } else {
            var mq_p = 0;
        }
        if (this_mq_details['min-width']) {
            var mq_m = parseInt(this_mq_details['min-width']);
        } else {
            var mq_m = 0;
        }
        mq_ps.push(mq_m)
        mq_ps.push(mq_p)
        var mq_order = this_mq['mq-order']
        csshero_append_mq_structure(m, this_mq_details, mq_order)
    }
    var mq_ps = unique(mq_ps)
    var largest_mq_p = Math.max.apply(Math, mq_ps);
    $('.mq-mode-expander-inner').prepend('<div class="csshero-service-bar-item csshero-service-bar-item-mq on" datamaxw="100%" data-mq="all"><div data-mq-icon="all" class="responsive-icon"></div><div class="mq-mode-dets"><span>All Devices</span></div></div>');
    $('.csshero-mqs-scroller').perfectScrollbar();
    var items = $('.mq-mode-expander-inner').find('.csshero-service-bar-item-mq');
    items.sort(function(a, b) {
        return +$(a).data('mq-order') - +$(b).data('mq-order');
    });
    items.appendTo('.mq-mode-expander-inner');
    var mitems = $('.csshero-mqs-panel').find('.mq-manager-item');
    mitems.sort(function(a, b) {
        return +$(a).data('order') - +$(b).data('order');
    });
    mitems.appendTo('.csshero-mqs-panel');
}
function csshero_submit_new_mq(name, options) {
    if (live_mq_array[name]) {
        var props = live_mq_array[name]['pr'];
    } else {
        var props = {}
    }
    var new_mq_idx = Object.keys(live_mq_array).length + 1;
    new_mq_object = {
        'mq_details': options,
        'pr': props,
        'mq-name-stored': name,
        'mq-order': new_mq_idx
    };
    live_mq_array[name] = new_mq_object
}
valid_colors = [];
function validTextColour(stringToTest) {
    if (stringToTest === "") {
        return false;
    }
    if (stringToTest === "inherit") {
        return false;
    }
    if (stringToTest === "transparent") {
        return false;
    }
    var image = document.createElement("img");
    image.style.color = "rgb(0, 0, 0)";
    image.style.color = stringToTest;
    if (image.style.color !== "rgb(0, 0, 0)") {
        return true;
    }
    image.style.color = "rgb(255, 255, 255)";
    image.style.color = stringToTest;
    return image.style.color !== "rgb(255, 255, 255)";
}
function csshero_determine_font_loading(css, tkid) {
    var look_for_gfonts = css.split('font-family:')
    var all_g_fonts = $('.csshero-font-checker').attr('data-all-google-fonts');
    var import_styles = '';
    var g_font_to_request = '';
    $(look_for_gfonts).each(function(i, e) {
        if (i > 0) {
            var font_to_check = e.split(';')[0].trim();
            if (all_g_fonts && all_g_fonts.indexOf(font_to_check) > -1) {
                var font_to_check = font_to_check.split(' ').join('+');
                var font_css_url = $('#csshero-font-loader', cssheroframe).find('link[data-font-loader-name="' + font_to_check + '"]').attr('data-font-loader-weights');
                if (font_css_url) {
                    var font_css_url = font_to_check + ':' + font_css_url
                }
                g_font_to_request += font_css_url + '|';
            }
        }
    })
    if (g_font_to_request != '') {
        import_styles += "@import url('https://fonts.googleapis.com/css?family=" + g_font_to_request + "');\n"
    }
    if (tkid && tkid != '') {
        import_styles += "@import url('https://use.typekit.net/" + tkid + ".css');\n";
    }
    if (import_styles && import_styles != '')
        import_styles += '\n';
    return import_styles;
}
function csshero_strip_stuff_from_saved_array(obj) {
    var global_classes = obj['global_classes'];
    var stored_classes = obj['stored_classes'];
    var new_global_classes = {}
    var new_stored_classes = [];
    for (var c in global_classes) {
        if (global_classes[c]['cla_type'] != "system_cla") {
            new_global_classes[c] = global_classes[c];
            new_stored_classes.push(c)
        }
    }
    var new_obj = obj;
    new_obj['global_classes'] = new_global_classes;
    new_obj['stored_classes'] = new_stored_classes;
    return new_obj;
}
function csshero_remove_empty_objects(plain_data) {
    if (!plain_data) {
        console.log('plain_data is undefined or null')
        return;
    }
    var data = JSON.parse(plain_data)
    var mq = data['live_mq_array'];
    for (var y in mq) {
        var all_props = mq[y]['pr']
        for (var s in all_props) {
            var single_prop = all_props[s];
            if ($.isEmptyObject(single_prop))
                delete all_props[s];
        }
    }
    var la = data['live_array'];
    for (var y in la) {
        var all_props = la[y]
        if ($.isEmptyObject(all_props))
            delete la[y]
    }
    data['live_array'] = la;
    data['live_mq_array'] = mq;
    return JSON.stringify(data);
}
function apply_color_to_picker(ecolor, picker) {
    var ecolor = ecolor.replace('!important', '')
    if (ecolor.indexOf('@') > -1) {
        if (csshero_variables[ecolor] && is_color(csshero_variables[ecolor]['var_prop'])) {
            color_definition = csshero_variables[ecolor]['var_prop'];
        } else {
            less.render(return_flat_vars() + '.csshero-color-tester{color:' + ecolor + ';}', '', function(test_color_error, test_color_output) {
                if (!test_color_error) {
                    color_definition = test_color_output.css;
                    color_definition = color_definition.split(':')[1];
                    color_definition = color_definition.split(';')[0];
                } else {
                    color_definition = 'black';
                }
            });
        }
        returning_color = color_definition;
        if (picker) {
            picker.css('background-color', color_definition).attr('data-original-color-val', color_definition).spectrum(return_spectrum_options(color_definition));
        }
    } else {
        if (is_color(ecolor)) {
            returning_color = ecolor;
        } else {
            returning_color = 'white';
            less.render(return_flat_vars() + '.csshero-color-tester{color:' + ecolor + ';}', '', function(test_color_error, test_color_output) {
                if (!test_color_error) {
                    color_definition = test_color_output.css;
                    color_definition = color_definition.split(':')[1];
                    color_definition = color_definition.split(';')[0];
                } else {
                    color_definition = 'black';
                }
            });
            returning_color = color_definition;
        }
        if (picker) {
            picker.css('background-color', returning_color).attr('data-original-color-val', returning_color).spectrum(return_spectrum_options(returning_color));
        }
    }
    return returning_color;
}
function csshero_validate(string) {
    if (string && string[0].match(/[a-z]/i)) {
        var regexp = /^[a-zA-Z0-9-_]+$/;
        if (string.search(regexp) == -1) {
            validation_pass = false;
        } else {
            validation_pass = true;
        }
    } else {
        validation_pass = false;
    }
    return validation_pass;
}
function color_looker(object) {
    for (var property in object) {
        if (object.hasOwnProperty(property)) {
            if (typeof object[property] == "object") {
                color_looker(object[property]);
            } else {
                if (object[property]) {
                    prop = object[property];
                    prop = prop.replace(/!important/g, '');
                    prop = prop.split(' ');
                    for (l in prop) {
                        propv = prop[l];
                        if ($.inArray(propv, valid_colors) == -1 && validTextColour(propv))
                            valid_colors.push(propv)
                    }
                }
            }
        }
    }
    return valid_colors;
}
function open_modify_selector(stack, sugg) {
    console.log(stack)
    var l = $(stack, cssheroframe).length;
    if ($('.csshero-stack-options-modify-box-wrap').length) {
        $('.csshero-stack-options-modify-box-wrap').remove();
    }
    $('.csshero-selector-options').append('\
   <div class="csshero-stack-options-modify-box-wrap">\
    <div class="csshero-stack-options-modify-box" data-stack-sugg="' + sugg + '" data-stack="' + stack + '">\
     <div class="title">\
      <span class="service-title">Modify Selector</span>\
      <span class="close-overlay"></span>\
     </div>\
     <div class="modify-contents">\
     <div>\
       <label class="new">Description</label>\
       <span class="value"><input value="' + sugg + '" type="text" class="csshero-stack-options-modify-sugg" placeholder="' + sugg + '"/></span>\
      </div>\
      <div>\
       <label class="new">CSS Selector</label>\
       <span class="value"><input type="text" value="' + stack + '" class="csshero-stack-options-modify-value" placeholder="' + stack + '"/>\
       <span class="counter new">' + l + '</span></span>\
      </div>\
     </div>\
     <div class="modify-footer">\
      <span class="closeme">Cancel</span><span class="csshero-button-submit">Change</span>\
     </div>\
    </div>\
   </div>');
}
all_google_fonts_list = [];
function loadScript(src, callback, context) {
    var s, r, t;
    r = false;
    s = context.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    s.onload = s.onreadystatechange = function() {
        if (!r && (!this.readyState || this.readyState == 'complete')) {
            r = true;
            callback();
        }
    }
    ;
    t = context.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}
function sortNumber(a, b) {
    return a - b;
}
function sortAlphabetical(a, b) {
    var A = a.toLowerCase();
    var B = b.toLowerCase();
    if (A < B) {
        return -1;
    } else if (A > B) {
        return 1;
    } else {
        return 0;
    }
}
function showlogger(txt, time) {
    if (!time)
        time = 3500;
    var logger = $('.service-logger').fadeIn(300);
    logger.empty().append('<p>' + txt + '</p>')
    setTimeout(function() {
        logger.fadeOut(300, function() {
            logger.empty();
        })
    }, time)
}
function identify_required_fonts(string) {
    if (string.indexOf('font-family:') > -1) {
        var splitter = string.split(';')
        $.each(splitter, function(i, s) {
            if (s.indexOf('font-family:') > -1) {
                var font = s.split('font-family:')[1]
                var gfont_looker = $('.google-font-container').find('.google-font-item > .fam-variation[data-font-name="' + font + '"]');
                if (gfont_looker.length > 0) {
                    var google_font_link = gfont_looker.closest('.google-font-item').find('link').attr('href')
                    console.log(font + ' esiste google font, devo appendere ' + google_font_link)
                } else {
                    console.log(font + ' non esiste')
                }
            }
        })
    }
}
$.fn.getStyleObject = function() {
    var dom = this.get(0);
    var style;
    var returns = {};
    if (window.getComputedStyle) {
        var camelize = function(a, b) {
            return b.toUpperCase();
        };
        style = window.getComputedStyle(dom, null);
        for (var i = 0, l = style.length; i < l; i++) {
            var prop = style[i];
            var camel = prop.replace(/\-([a-z])/, camelize);
            var val = style.getPropertyValue(prop);
            returns[camel] = val;
        }
        ;return returns;
    }
    ;if (style = dom.currentStyle) {
        for (var prop in style) {
            returns[prop] = style[prop];
        }
        ;return returns;
    }
    ;if (style = dom.style) {
        for (var prop in style) {
            if (typeof style[prop] != 'function') {
                returns[prop] = style[prop];
            }
        }
        return returns;
    }
    return returns;
}
function return_uploaded_img(re) {
    var re = JSON.parse(re);
    var show_upload_response = '';
    var uploaded_img_prev = '';
    var img_sizes_arr = {};
    for (var r in re) {
        var size = re[r][0];
        var url = re[r][1];
        var url = url.split(' ').join('%20');
        img_sizes_arr[size] = url;
        if (size == 'thumbnail') {
            var uploaded_img_thumb_url = url;
        }
    }
    if (img_sizes_arr) {
        var img_sizes_arr = JSON.stringify(img_sizes_arr)
    } else {
        var img_sizes_arr = '{}';
    }
    if (!uploaded_img_thumb_url) {
        var uploaded_img_thumb_url = re[0][1];
    }
    var uploaded_img_thumb = '<div data-available-sizes=' + img_sizes_arr + ' class="csshero-media-img"><img src="' + uploaded_img_thumb_url + '" /></div>';
    $('.csshero-upload-img-browse').prepend(uploaded_img_thumb)
    $('.csshero-upload-img-form input[type="file"]').val('').trigger('change');
    $('.csshero-upload-img-browse').removeClass('uploading')
}
function csshero_updated_from_mirror(e) {
    if (!is_control_key(e)) {
        var queried_array = csshero_return_actual_state_array();
        var what_we_are_editing = $('.csshero-code-wrap').attr('data-editing_element');
        var what_we_are_editing_sugg = $('.csshero-code-wrap').attr('data-editing_element_sugg');
        var the_code_we_are_creating = eddie.getValue();
        var the_object_we_are_creating = csshero_string_to_json(the_code_we_are_creating);
        queried_array[what_we_are_editing] = the_object_we_are_creating[what_we_are_editing];
        var mq_identify = $('#csshero-body').attr('data-mq-mode');
        if (!mq_identify)
            mq_identify = 'all';
        render_single_block(what_we_are_editing, mq_identify);
        if ($('#csshero-body').attr('data-code-mode') == 'full' || $(e.target).hasClass('csshero-apply-class') || $(e.target).hasClass('apply-class') || $(e.target).hasClass('csshero-import-class-now')) {} else {
            csshero_draw_wysiwyg(queried_array, what_we_are_editing, what_we_are_editing_sugg, 'UPDATE_FROM_CODE')
        }
        if ($('.csshero-service-block[data-service="tree"]').hasClass('cur')) {
            csshero_enrich_tree_element(queried_array[what_we_are_editing], '', what_we_are_editing);
        }
        var checker = the_code_we_are_creating.replace(/[\t\n]+/g, '');
        if (checker == what_we_are_editing + '{}') {}
    }
}
function return_var_actions(open) {
    if (open) {
        var open_lines = 'open';
    } else {
        var open_lines = '';
    }
    vars_actions = '<div class="csshero-var-actions-trigger ' + open_lines + '"><div class="lines"></div></div><div class="csshero-var-actions csshero-in-service-actions"><span class="csshero-var-action csshero-var-action-delete cancel csshero-btn">Delete</span><span class="csshero-var-action primary csshero-var-action-edit csshero-btn">Save</span><span class="csshero-var-action csshero-var-action-close open"><span class="lines"></span></span></div>';
    return vars_actions;
}
$(document).ready(function() {
    csshero_prepare_default_color_palettes();
    $(document).on('change', '.csshero-import-settings', csshero_load_settings_json);
    csshero_custom_carrier = '';
    $('.csshero-navigator').perfectScrollbar();
    $(document).on('keyup', '#csshero-frame-nav input', function(e) {
        csshero_custom_carrier = '<div id="csshero-edits-holder">' + $('#csshero-edits-holder', cssheroframe).html() + '</div>';
        var font_carrier = '<div id="csshero-font-loader">' + $('#csshero-font-loader', cssheroframe).html() + '</div>';
        csshero_custom_carrier = csshero_custom_carrier + font_carrier;
        var evtobj = e;
        var kc = evtobj.keyCode;
        if (kc == 13) {
            $('iframe').attr('src', $(this).val());
        }
    }).on('mouseenter mouseleave', '*[data-tip]', function(e) {
        var tip = $(this).attr('data-tip');
        $('.top-tips').remove();
        if (e.type == 'mouseleave' || !tip)
            return;
        $(this).append('<div class="top-tips"><span>' + tip + '</span></div>')
    }).on('click', '.csshero-open-new-tab', function(e) {
        e.stopPropagation();
    }).on('click', '.toggle-advanced-props', function() {
        if ($('#csshero-body').hasClass('show-advanced-editing-properties')) {
            $('#csshero-body').removeClass('show-advanced-editing-properties');
            localStorage.removeItem('CSSHEROSAVE-SHOW-ADVANCED-PROPS');
        } else {
            $('#csshero-body').addClass('show-advanced-editing-properties');
            localStorage.setItem('CSSHEROSAVE-SHOW-ADVANCED-PROPS', true);
        }
    }).on('click', '.csshero-class-category-swapper', function() {
        var tit = $(this).closest('.csshero-class-cat-container').find('.dropdown-title').text();
        var availables = []
        var t = $(this);
        $('.csshero-class-container-user_cla .class-inner-super-w .dropdown-title').each(function() {
            availables.push($(this).text())
        })
        t.find('.class-swapper').remove();
        if (!t.hasClass('swapper-open')) {
            t.addClass('swapper-open')
            t.append('<ul class="class-swapper"></ul>')
            for (var n in availables) {
                if (availables[n] == tit) {
                    var t_class = 'active';
                } else {
                    var t_class = '';
                }
                t.find('.class-swapper').append('<li class="' + t_class + '">' + availables[n] + '</li>');
            }
        } else {
            t.removeClass('swapper-open')
        }
    }).on('click', '.class-swapper li:not(.active)', function() {
        var t = $(this).closest('.class-wrap').attr('data-original_claname')
        var c = $(this).text();
        if (confirm('Sure you want to move ' + t + ' to ' + c + ' category?')) {
            global_classes[t]['cla_cat'] = c;
            csshero_prepare_classes(global_classes)
            csshero_save_step('class', t)
        }
    })
    if (localStorage.getItem('CSSHEROSAVE-SHOW-ADVANCED-PROPS')) {
        $('#csshero-body').addClass('show-advanced-editing-properties');
    }
    $('iframe').on('load', function() {
        cssheroframe = window.frames['csshero-iframe-main-page'].document;
        var url = window.location.href;
        var split_url = url.split('?');
        var hero_param = '?' + split_url[1];
        if (url.indexOf('&rocket=true') > -1 || url.indexOf('&local=true') > -1) {
            generate_editables();
        } else {
            hero_load_this_config().done(function() {
                generate_editables();
            });
        }
        var frame_url = window.frames['csshero-iframe-main-page'].location.href;
        if (frame_url.indexOf('?rand') == -1) {
            history.replaceState('', 'CSS Hero', frame_url + hero_param);
        }
        $('#csshero-frame-nav input').val(frame_url)
        var select_protect = '<style id="csshero-style-protect">.csshero-hidden-el{/*display:none!important;*/}</style>';
        $('head #csshero-main-stylesheet-css', cssheroframe).attr('disabled', 'disabled').after(csshero_custom_carrier + select_protect)
        var selector = '.editable';
        $(cssheroframe).on('mouseenter mousemove', selector, function(e) {
            e.stopPropagation();
            csshero_zoom_on_element($(this))
        }).on('contextmenu', selector, function(e) {
            if (!$('#csshero-body').hasClass('enable-navigation')) {
                e.preventDefault();
                e.stopPropagation();
                var t = $(this);
                t.trigger('mouseup')
                var os = t.attr('original_editablesuggestion')
                var oc = t.attr('original_editableclass');
                var specific_context = '';
                var context = '';
                var b = $('body', cssheroframe);
                var b_classes = b.attr('class').split(' ');
                var context_id = '';
                var current = csshero_return_actual_state_array()
                var is_edited = '';
                for (var k in b_classes) {
                    var b_class = b_classes[k];
                    if (b_class.match(/^page-id-([0-9]+)$/)) {
                        var specific_context = b_class;
                        var context = 'page';
                        var context_id = specific_context.replace('page-id-', '')
                        break;
                    }
                    if (b_class.match(/^category-([0-9]+)$/)) {
                        var specific_context = b_class;
                        var context = 'category';
                        var context_id = specific_context.replace('category-', '')
                        break;
                    }
                }
                var contexts = '';
                if (context) {
                    var oc_s = oc.split(' ');
                    var oc_ok = [];
                    for (var s in oc_s) {
                        var el = $(oc_s[s], cssheroframe);
                        if (!el.is('body') && !el.is('html')) {
                            oc_ok.push(oc_s[s]);
                        }
                    }
                    var context_selector = '.' + specific_context + ' ' + oc_ok.join(' ');
                    if (current[context_selector] && !$.isEmptyObject(current[context_selector])) {
                        var is_edited = '[edited] ';
                    }
                    contexts += '<li data-context-desc="' + os + ' [only on ' + context + ' ' + context_id + ']" data-context="' + context_selector + '">' + is_edited + ' Only on this ' + context + '</li>';
                }
                var is_ot_edited = '';
                if (current[t.getPath()] && !$.isEmptyObject(current[t.getPath()])) {
                    var is_ot_edited = '<span class="hb-e"></span>';
                }
                contexts += '<li data-context-desc="' + os + ' [only-this]" data-context="' + t.getPath() + '">' + is_ot_edited + ' Only This</li>';
                var fw = $('#csshero-inner-frame-wrap');
                $('.csshero-ctx-chooser').remove();
                var offset_top = $(cssheroframe).scrollTop();
                var style_top = parseInt(e.pageY - offset_top);
                var style = 'top:' + style_top + 'px;left:' + e.pageX + 'px;';
                fw.append('<div class="csshero-ctx-chooser" style="' + style + '"><ul><li data-context-desc="' + os + '" data-context="' + oc + '"><span>Edit </span>' + os + '</li>' + contexts + '</ul></div>')
            }
        }).on('click', selector, function(e) {
            e.stopPropagation();
            csshero_custom_carrier = '<div id="csshero-edits-holder">' + $('#csshero-edits-holder', cssheroframe).html() + '</div>';
            var font_carrier = '<div id="csshero-font-loader">' + $('#csshero-font-loader', cssheroframe).html() + '</div>';
            csshero_custom_carrier = csshero_custom_carrier + font_carrier;
            if (!$('#csshero-body').hasClass('enable-navigation')) {
                e.preventDefault();
            }
            lister_inner.append('<div class="selectors-list-footer"><span class="csshero-service-item" data-service="tree">Add Editable Elements</span></div>');
            lister_inner.find('.csshero-selector').eq(0).trigger('click');
            csshero_design_bottom_navi();
            $('.csshero-clicked-range', cssheroframe).removeClass('csshero-clicked-range');
        }).on('mousedown', selector, function(e) {
            $(this).addClass('csshero-clicked-range')
            if ($('#csshero-body').hasClass('csshero-grouping'))
                return;
            $('.csshero-selector-bar').empty();
            e.preventDefault();
            lister_inner.empty();
            $('#csshero-body').addClass('show-lister')
            $('#csshero-body').removeClass('editing-element')
        }).on('mouseup', selector, function(e) {
            e.preventDefault();
            e.stopPropagation();
            var edited_range = $('.csshero-clicked-range', cssheroframe);
            var edited_range = edited_range.toArray();
            var edited_range = edited_range.reverse();
            $('.csshero-mode-props:not(.active)').trigger('click')
            if ($('#csshero-body').hasClass('enable-navigation'))
                return;
            if ($('#csshero-body').hasClass('csshero-hide-editor'))
                $('#csshero-body').removeClass('csshero-hide-editor');
            $.each(edited_range, function(w) {
                var y = $(this);
                if (y.hasClass('no-config-el') && !y.hasClass('has-been-processed')) {
                    var all = y.toArray();
                    var y_parents = y.parents().toArray();
                    $.merge(all, y_parents)
                    var all = all.reverse();
                    $.each(all, function(d) {
                        var d = $(all[d]);
                        csshero_editables_scanner(d);
                    })
                }
                if ($('#csshero-body').hasClass('csshero-grouping')) {
                    var limbo = $(this).attr('editableclass').split(' | ').join('</li><li>');
                    var limbo = '<li>' + limbo + '</li>';
                    $('#grouper').append(limbo)
                    return;
                }
                var custom_selector = y.attr('custom_editableclass');
                if (custom_selector) {
                    var custom_selector_render = custom_selector + ' | ';
                    var custom_suggestion_render = y.attr('custom_editablesuggestion') + ' | ';
                } else {
                    var custom_selector_render = '';
                    var custom_suggestion_render = '';
                }
                if (!y.attr('editableclass') && !custom_selector)
                    return;
                var list_appender = '';
                if ($(this).attr('editableclass')) {
                    var ediclass = $(this).attr('editableclass');
                } else {
                    var ediclass = '';
                }
                var clicked_ediclass = custom_selector_render + ediclass;
                if ($(this).attr('editablesuggestion')) {
                    var edisug = $(this).attr('editablesuggestion');
                } else {
                    var edisug = '';
                }
                var clicked_edisugg = custom_suggestion_render + edisug;
                var this_has_been_edited = '';
                var queried_array = csshero_return_actual_state_array();
                var clicked_ediclass_els = clicked_ediclass.split(' | ');
                var clicked_edisugg_els = clicked_edisugg.split(' | ');
                var hwo_many_els = clicked_ediclass_els.length;
                var this_selector_dropdown = (hwo_many_els > 1) ? selector_dropdown : '';
                var the_arrays = [];
                var processed_selectors = [];
                for (n in clicked_ediclass_els) {
                    var clicked_ediclass = clicked_ediclass_els[n];
                    var clicked_edisugg = clicked_edisugg_els[n];
                    if ($.inArray(clicked_ediclass, processed_selectors) == -1) {
                        processed_selectors.push(clicked_ediclass)
                        var els_in_frame = $(clicked_ediclass, cssheroframe).length;
                        var this_has_been_edited = queried_array[clicked_ediclass]
                        var where = '<div class="where-it-has-been-edited">';
                        if (live_array[clicked_ediclass] && !$.isEmptyObject(live_array[clicked_ediclass])) {
                            where += '<span class="csshero-quick-mq-trigger" data-mq="all">all</span> '
                        }
                        for (var m in live_mq_array) {
                            if (live_mq_array[m]['pr'][clicked_ediclass] && !$.isEmptyObject(live_mq_array[m]['pr'][clicked_ediclass])) {
                                where += '<span class="csshero-quick-mq-trigger" data-mq="' + m + '">' + m + '</span> ';
                            }
                        }
                        where += '</div>';
                        if (this_has_been_edited && !$.isEmptyObject(this_has_been_edited)) {
                            var this_has_been_edited_class = 'this_selector_has_been_edited';
                        } else {
                            var this_has_been_edited_class = '';
                        }
                        var selector_type = $(clicked_ediclass, cssheroframe).prop("tagName");
                        var alternative_class = (n > 0) ? 'selector-alternative' : 'selector-first';
                        if (clicked_ediclass && clicked_edisugg)
                            list_appender += '\
     <div class="csshero-selector toggle-zoom ' + this_has_been_edited_class + ' ' + alternative_class + '" editableclass="' + clicked_ediclass + '" data-zoomable="' + clicked_ediclass + '" editablesuggestion="' + clicked_edisugg + '">\
      <div class="csshero-selector-contents">\
       <span class="icon tag-name tag-name-' + selector_type + '"></span>\
       <span class="h1">' + clicked_edisugg + '</span>\
       <span class="counter">' + els_in_frame + '</span>\
       <span class="csshero-selector-code">' + clicked_ediclass + '</span>\
       ' + this_selector_dropdown + '\
       ' + where + '\
      </div>\
     </div>';
                    }
                }
                lister_inner.append(list_appender)
            })
        });
    })
    $(document).on('click', '.csshero-ctx-chooser li', function(e) {
        var d = $(this).attr('data-context-desc');
        var s = $(this).attr('data-context')
        if (!live_paths[s]) {
            live_paths[s] = {
                'desc': d,
                'path': s,
                'path_type': 'context_specific'
            }
            csshero_design_custom_tree_els()
            csshero_save_step('path', s, d)
        }
        csshero_click_on_editable('', e, s, d)
        $('.csshero-ctx-chooser').remove();
    }).on('mouseleave', '.csshero-ctx-chooser', function() {
        $(this).remove();
    })
    var plugin_version = $('#csshero-body').attr('data-js-version')
    var css_version = $('#csshero-body').attr('data-css-version')
    $('.logo').attr('data-plugin-version', plugin_version + ' / ' + css_version)
    var code_editor_pos = localStorage.getItem('CSSHEROSAVE-INTERFACE-POSITION');
    if (code_editor_pos) {
        if (code_editor_pos == 'expanded')
            $('#csshero-body').attr('data-code-mode', 'full')
        if (code_editor_pos == 'normal')
            $('#csshero-body').removeAttr('data-code-mode')
        if (code_editor_pos == 'min')
            $('#csshero-body').addClass('hide-code');
    }
    vars_wrapper = $('.csshero-variables-panel');
    codemirror_options = {
        lineNumbers: false,
        mode: "text/x-less",
        theme: "csshero-theme",
        lineWrapping: true,
        autoCloseBrackets: true,
        tabSize: 4,
        indentUnit: 1,
        extraKeys: {
            "Alt-F": "findPersistent",
            "Cmd-F": "findPersistent"
        },
        matchBrackets: true,
        autoRefresh: true,
    }
    csshero_tree = $('.csshero-tree.config-tree')
    timeout = 300;
    eddie = CodeMirror.fromTextArea(document.getElementById("code"), codemirror_options);
    enable_hints(eddie);
    csshero_design_mq_elements()
    csshero_prepare_variables(csshero_variables);
    $(document).on('click', '.logo', function() {
        csshero_clear_interface();
    }).on('mouseenter', '.csshero-selectors-list-inner', function() {
        $(this).perfectScrollbar();
    }).on('click', '.csshero-selector-dd', function(e) {
        e.stopPropagation();
        var y = $(this).closest('.csshero-selector');
        y.nextUntil('.selector-first').toggle();
        $('.selector-alternative.this_selector_has_been_edited').show();
        y.toggleClass('showing-childs')
    }).on('click', '.csshero-close-service', function() {
        close_service_panels();
    }).on('click', '.csshero-search-service', function() {
        $(this).closest('.csshero-service-block').toggleClass('show-search');
        $(this).closest('.csshero-service-block').find('.csshero-service-src').val('').trigger('keyup')
    }).on('click', '.mq-line-actions > span', function(e) {
        var t = $(this);
        var mq = t.closest('.mq-line').find('.mq-line-name').text();
        if (t.hasClass('mq-line-activate')) {
            load_mq_view(mq, e, true)
        }
        if (t.hasClass('mq-line-preview')) {
            load_mq_view(mq, e, false)
        }
    }).on('click', '.set-to-none', function() {
        var wid = $(this).closest('.csshero-editor-block-widget');
        var input = wid.find('.csshero-input');
        var val = 'none';
        if (wid.hasClass('csshero-colorpicker-widget'))
            var val = 'transparent';
        if (input.val() != val) {
            input.val(val).trigger('updateval');
        }
    }).on('click', '.csshero-make-shadow', function() {
        var wid = $(this).closest('.csshero-editor-block-widget');
        var default_grad = 'rgba(255,0,0,1) 5px 5px 10px';
        if (wid.hasClass('show-shadow-maker')) {
            wid.removeClass('show-shadow-maker')
            return;
        }
        csshero_scrollto(wid)
        wid.addClass('show-shadow-maker');
        var prop = wid.attr('data-property-name');
        var val = wid.find('.csshero-input').val().replace(/  /g, ' ');
        if (!val || val == 'none') {
            var val = default_grad;
        }
        var val = psplit(val)[0];
        var con = wid.find('.csshero-shadow-builder');
        var split_val = spacesplit(val);
        if (split_val.length < 3) {
            var val = default_grad;
            var split_val = spacesplit(val)
        }
        var sha_color = '';
        var sha_inset = '';
        for (var v in split_val) {
            var shaval = split_val[v];
            if (is_color(shaval)) {
                var sha_color = shaval;
                var sha_color_print = shaval;
            }
            if (shaval == 'inset') {
                var sha_inset = shaval;
            }
            if (shaval.indexOf('@') > -1) {
                var sha_color = shaval;
                var sha_color_print = apply_color_to_picker(shaval);
            }
        }
        var split_val = $.grep(split_val, function(value) {
            return value != sha_color;
        });
        if (sha_inset && sha_inset != '') {
            var split_val = $.grep(split_val, function(value) {
                return value != sha_inset;
            });
        }
        var split_val = $.grep(split_val, function(value) {
            return value != '';
        });
        var pos_x = split_val[0];
        var pos_y = split_val[1];
        if (split_val[2]) {
            var blur = split_val[2];
        } else {
            var blur = '0px';
        }
        if (split_val[3]) {
            var spread = split_val[3];
        } else {
            var spread = '0px';
        }
        var inset = '<div class="sha-node sha-pos" data-sha-val="' + sha_inset + '"><label>Shadow Position</label><div class="sha-pos-btns"><span data-val="inset">Inside</span><span data-val="">Outside</span></div></div>';
        var color = '<div data-sha-val="' + sha_color + '" class="sha-color sha-node"><label>Shadow Color</label><div class="csshero-picker-trigger-wrap"><div data-original-color-val="' + sha_color + '" style="background-color: ' + sha_color_print + ';" class="csshero-picker-trigger"></div></div><span class="palette-trigger-wrap"></span></div>';
        var blurrer = '<div class="sha-node sha-full-node sha-blur" data-sha-val="' + blur + '"><label>Shadow Blur</label><div class="slider-wrap-outer"><div class="slider-wrap"><input class="csshero-sha-slider-element" type="range" min="0" max="50" step="1" value="' + parseInt(blur) + '"></div><input type="text" value="' + blur + '" /></div></div>';
        var spreader = '<div class="sha-node sha-spread sha-full-node" data-sha-val="' + spread + '"><label>Shadow Spread</label><div class="slider-wrap-outer"><div class="slider-wrap"><input class="csshero-sha-slider-element" type="range" min="0" max="50" step="1" value="' + parseInt(spread) + '"></div><input type="text" value="' + spread + '" /></div></div>';
        var positioner = '<div class="sha-node sha-ori-wrap" data-sha-val="' + pos_x + ' ' + pos_y + '"><label>Orientation</label><div class="sha-orienter"><div class="sha-snapper"></div><div class="sha-snapper"></div><div class="sha-snapper"></div><div class="sha-snapper"></div><div class="sha-anchor"><div class="handle"></div></div></div></div>';
        if (prop == 'text-shadow') {
            var inset = '';
            var spreader = '';
        }
        con.empty().append('<div class="sha-head">Shadow Builder<span class="closer"></span></div><div class="sha-wrap">' + inset + color + '</div>' + positioner + blurrer + spreader);
        csshero_load_pickers(con.find('.sha-color'))
        var cont = con.find('.sha-orienter');
        var handle = con.find('.handle');
        handle.css({
            'left': pos_x,
            'top': pos_y
        }).draggable({
            snap: ".sha-snapper",
            snapMode: "inner",
            snapTolerance: 1,
            containment: cont,
            drag: csshero_throttle(function(event) {
                var thisPos = $(this).position();
                var x = parseInt(thisPos.left * .5);
                var y = parseInt(thisPos.top * .5);
                $(this).closest('.sha-node').attr('data-sha-val', x + "px " + y + "px");
                $(this).closest('.csshero-shadow-builder').trigger('updatesha');
            }, 300)
        });
    }).on('click', '.sha-head .closer', function() {
        $(this).closest('.csshero-editor-block-widget').find('.csshero-make-shadow').trigger('click')
    }).on('click', '.sha-pos-btns > span', function() {
        var val = $(this).attr('data-val');
        $(this).closest('.sha-node').attr('data-sha-val', val);
        $(this).closest('.csshero-shadow-builder').trigger('updatesha');
    }).on('change', '.csshero-sha-slider-element', csshero_throttle(function(e) {
        $(this).closest('.sha-node').attr('data-sha-val', $(this).val() + "px");
        $(this).closest('.csshero-shadow-builder').trigger('updatesha');
    }, 300)).on('updatesha', '.csshero-shadow-builder', function() {
        var nodes = $(this).find('.sha-node');
        var new_sha = [];
        nodes.each(function() {
            var val = $(this).attr('data-sha-val');
            new_sha.push(val)
            $(this).find('input[type="text"]').val(val)
        })
        $(this).closest('.csshero-editor-block-widget').find('.csshero-input').val(new_sha.join(' ')).trigger('updateval');
    }).on('keyup', '.sha-node input[type="text"]', function() {
        $(this).closest('.sha-node').attr('data-sha-val', $(this).val());
        $(this).closest('.csshero-shadow-builder').trigger('updatesha');
        $(this).closest('.sha-node').find('.csshero-sha-slider-element').val($(this).val())
    })
    $(document).on('keyup', '.imported-class-new-name', function() {
        var check = $(this).val().toLowerCase();
        var g_checker = 'valid';
        for (var s in stored_classes) {
            var claname = stored_classes[s].toLowerCase();
        }
        if (g_checker == 'invalid' || classname_checker('.' + check) == false) {
            var checker = 'invalid';
        } else {
            var checker = 'valid';
            var checked_class = classname_checker('.' + check);
        }
        $(this).attr('data-valid', checker).attr('data-ok-class', checked_class)
        $(this).closest('.csshero-editor-overlay').find('.csshero-import-class-now').attr('data-valid', checker)
    })
    $(document).on('click', '.csshero-radio-container span', function(event) {
        var par = $(this).closest('.csshero-radio-container');
        par.find('.active').removeClass('active')
        $(this).addClass('active')
    }).on('mouseleave', '.sub-actions', function() {
        $('.actions-expander.open').trigger('click')
    }).on('click', '.csshero-import-class-now', function(event) {
        if ($(this).attr('data-valid') == 'invalid')
            return;
        var class_contents = eddie.getValue();
        var sel = $('.csshero-code-wrap').attr('data-editing_element')
        var class_contents = class_contents.substring(class_contents.indexOf('{') + 1, class_contents.lastIndexOf('}'));
        var class_contents = class_contents.replace(/  /g, '').replace(/[\t\n]+/g, '');
        if (class_contents == '' || class_contents == ' ') {
            alert('Snippet is empty');
            return;
        }
        var new_cla_cat = '';
        var new_cla_cat = $(this).closest('.csshero-editor-overlay').find('.imported-class-new-cat').attr('data-ok-class-cat');
        var new_cla = {
            "cla_prop": class_contents,
            "cla_type": "user_cla",
            "cla_desc": "",
            "cla_cat": new_cla_cat,
        }
        var new_cla_name = $(this).closest('.csshero-editor-overlay').find('.imported-class-new-name').attr('data-ok-class');
        var replace = $(this).closest('.csshero-editor-overlay').find('.csshero-radio-container .active').text().toLowerCase();
        stored_classes.push(new_cla_name)
        global_classes[new_cla_name] = new_cla;
        var new_clean_cla_name = new_cla_name.split('(')[0] + '()';
        if (replace == 'yes') {
            eddie.setValue(sel + '{' + new_clean_cla_name + '}')
        }
        csshero_updated_from_mirror(event);
        csshero_click_on_editable('', event, sel);
        csshero_prepare_classes(global_classes)
        $(this).closest('.csshero-editor-overlay').find('.csshero-overlay-close').trigger('click');
        csshero_save_step('class', new_cla_name)
        $('.csshero-mode-classes').trigger('click');
    }).on('click', '.csshero-rename-snippet-cat', function(e) {
        e.stopPropagation();
        var cla = $(this).closest('.dropdown-title').text();
        $('.all-props').append('\
   <div class="csshero-editor-overlay">\
    <div class="csshero-editor-overlay-contents">\
     <span class="csshero-overlay-close"></span>\
     <span class="minititles">Rename Snippets Category</span>\
     <input class="csshero-rename-class-input" data-original="' + cla + '" placeholder="' + cla + '" value="' + cla + '" />\
     <div class="csshero-btn-wrapper">\
      <span class="csshero-overlay-close">Cancel</span>\
      <span class="csshero-btn csshero-rename-class-cat-now">Rename</span>\
     </div>\
    </div>\
   </div>')
    }).on('click', '.csshero-rename-class-cat-now', function() {
        var val = $('.csshero-rename-class-input').val();
        var original = $('.csshero-rename-class-input').attr('data-original')
        if (val && val != '' && val != original) {
            for (var n in global_classes) {
                var cla = global_classes[n];
                if (cla['cla_cat'] == original) {
                    cla['cla_cat'] = val;
                }
            }
            csshero_prepare_classes(global_classes)
            csshero_save_step('class', original)
            $(this).closest('.csshero-btn-wrapper').find('.csshero-overlay-close').trigger('click')
        } else {
            alert('error')
        }
    }).on('keyup paste input', '.imported-class-new-cat , .csshero-rename-class-input', function(event) {
        var text = $(this).val().toLowerCase();
        var text = text.replace(/[^a-zA-Z0-9 _]/g, '');
        var text = text.replace(/ /g, '_');
        $(this).val(text)
        if (!text || text == ' ' || text == '')
            var text = 'my-snippets';
        $(this).attr('data-ok-class-cat', text)
    }).on('click', '.make-class', function(event) {
        var cnt = parseInt($('.csshero-props-actions .count').text());
        if (cnt == 0)
            return;
        var new_class_object = '<p>&nbsp; <input placeholder="Category" list="csshero_class_cats" data-ok-class-cat="my-snippets" class="imported-class-new-cat" />';
        var custom_class_cat_els = $('.csshero-class-container-user_cla .class-inner-super-w').find('.dropdown-title');
        if (custom_class_cat_els && custom_class_cat_els.length > 0) {
            new_class_object += '<datalist id="csshero_class_cats">';
            custom_class_cat_els.each(function() {
                new_class_object += '<option value="' + $(this).text() + '">';
            });
            new_class_object += '</datalist></p>';
        }
        $('.all-props').append('<div class="csshero-editor-overlay"><div class="csshero-editor-overlay-contents"><span class="csshero-overlay-close"></span><span class="minititles">Create new snippet</span><p>Time to make a new snippet? Please give it a proper name (Ex: mySnippet) </p><span class="dot">.</span><input class="imported-class-new-name" placeholder="mySnippet" />' + new_class_object + '<p>Do you want me to replace the current element styles with this snippet aswell?</p><div class="csshero-radio-container"><span class="active">Yes</span><span>No</span></div><div class="csshero-btn-wrapper"><span class="csshero-overlay-close">Cancel</span><span class="csshero-btn csshero-import-class-now" data-valid="invalid">Save Snippet</span></div></div></div>');
    })
    $(document).on('click', '.font-manager-shortcut', function() {
        if (!$('#csshero-body').hasClass('pro-mode'))
            $('#csshero-body').addClass('pro-mode')
        $('.csshero-service-bar-item[data-service="font-manager"]').trigger('click')
    }).on('click', '.csshero-save', function() {
        var hero_loader = $('head').find('script[src^="https://csshero.org/production-v3/heroes-loader-v3.php"]').attr('src');
        if (hero_loader && hero_loader.indexOf('css-hero-demo') > -1) {
            alert('Publish is disabled in demo mode')
            return;
        }
        if ($('#csshero-body').attr('css-errors') == 'true') {
            alert('CSS ERRORS, NO SAVE');
            return;
        }
        if ($('#csshero-body').attr('json-errors') == 'true') {
            alert('JSON ERRORS, NO SAVE');
            return;
        }
        var t = $(this).addClass('saving')
        var current_step = $('.csshero-step.cur');
        var to_be_stored_data = current_step.data('step-data');
        var to_be_stored_data = csshero_remove_empty_objects(to_be_stored_data)
        var the_style = csshero_return_styles('css');
        var clean_object = csshero_strip_stuff_from_saved_array(JSON.parse(to_be_stored_data));
        $('#csshero-css-saving-field').val(the_style)
        var clean_object = JSON.stringify(clean_object)
        $('#csshero-livearray-saving-field').val(clean_object)
        var options = {
            target: '#csshero-saving-data-formresult',
            success: function(responseText, statusText, xhr, $form) {
                if (responseText !== "Saved") {
                    alert(responseText);
                } else {
                    $('.csshero-save-action.csshero-cancel').addClass('no-cancel-available');
                }
                console.log('SAVE - status: ' + statusText + '\n\nresponseText: \n' + responseText + '\n\nThe output div should have already been updated with the responseText.');
            }
        };
        $('#csshero-saving-form').ajaxSubmit(options);
        $('.csshero-step.latest-save').removeClass('latest-save');
        current_step.addClass('latest-save');
        var latest_save = $('.csshero-step.latest-save');
        if (latest_save.length > 0 && latest_save.is('.cur')) {
            $('.csshero-save-action.csshero-cancel').addClass('no-cancel-available')
        }
        setTimeout(function() {
            t.removeClass('saving')
            t.addClass('has-saved')
        }, 500)
        setTimeout(function() {
            t.removeClass('has-saved')
        }, 2000)
    }).on('click', '.csshero-cancel:not(.no-cancel-available)', function() {
        if (confirm('Cancel all edits up to latest published version?')) {
            if ($('.csshero-step.latest-save').length > 0) {
                var latest_save = $('.csshero-step.latest-save')
            } else {
                var latest_save = $('.csshero-step.csshero-step-type-start');
            }
            latest_save.find('.timestamp').trigger('click')
        }
    }).on('click', '.csshero-quit a', function(e) {
        if (!$('.csshero-save-action.csshero-cancel').hasClass('no-cancel-available')) {
            if (!confirm('You may have some unsaved changes, quit CSS Hero?')) {
                e.preventDefault();
            }
        }
    }).on('click', '.csshero-reset', function() {
        var hero_loader = $('head').find('script[src^="https://csshero.org/production-v3/heroes-loader-v3.php"]').attr('src');
        if (hero_loader && hero_loader.indexOf('css-hero-demo') > -1) {
            alert('Reset is disabled in demo mode');
            return;
        }
        if (confirm('Do you want to reset all your CSS Hero customizations?')) {
            $('#csshero-css-saving-field').val('')
            $('#csshero-livearray-saving-field').val('{}')
            var options = {
                target: '#csshero-saving-data-formresult',
                success: function(responseText, statusText, xhr, $form) {
                    console.log('RESET - status: ' + statusText + '\n\nresponseText: \n' + responseText + '\n\nThe output div should have already been updated with the responseText.');
                    location.reload();
                }
            };
            $('#csshero-saving-form').ajaxSubmit(options);
        }
    });
    $(document).on('click', '.csshero-close-response', function() {
        $(this).closest('.csshero-upload-response').addClass('no-response')
    }).on('click', '.csshero-media-img', function() {
        var data = $(this).attr('data-available-sizes')
        var data = JSON.parse(data);
        if (data['medium']) {
            var prev_img = data['medium'];
        } else {
            var prev_img = $(this).find('img').attr('src')
        }
        var available_sizes = '';
        for (var d in data) {
            available_sizes += '<span data-url="' + data[d] + '" class="csshero-upload-size-item">' + d + '</span>';
        }
        $('.csshero-upload-response .uploaded-img-wrap').remove();
        $('.csshero-upload-response .uploaded-img-sizes').remove();
        $('.csshero-upload-response').removeClass('no-response').append('<div class="uploaded-img-wrap"><img src="' + prev_img + '" /></div><div class="uploaded-img-sizes"><span class="add-uploaded-img"><div class="uploaded-img-chooser">' + available_sizes + '</div>Apply Image</span></div>');
    }).on('submit', 'form.csshero-upload-img-form', function(e) {
        e.preventDefault();
        $('.csshero-upload-img-browse').addClass('uploading')
        var options = {
            success: function(responseText, statusText, xhr, $form) {
                return_uploaded_img(responseText)
            }
        };
        $('form.csshero-upload-img-form').ajaxSubmit(options);
    }).on('click', '.add-uploaded-img', function() {
        $(this).toggleClass('show-sizes')
        if ($(this).hasClass('show-sizes')) {
            $(this).find('.uploaded-img-chooser').perfectScrollbar();
        }
    }).on('change', '.csshero-upload-img-form input[type=file]', function() {
        var hasNoFiles = this.files.length == 0;
        $(this).closest('form')
        var wrap = $(this).closest('.csshero-upload-img-upload');
        var name_el = wrap.find('.csshero-upload-img-name');
        name_el.empty();
        if (hasNoFiles) {
            wrap.addClass('no-files')
        } else {
            wrap.removeClass('no-files')
            name_el.append('<b>' + this.files[0].name + '</b>')
        }
    }).on('click', '.csshero-upload-size-item', function() {
        var url = $(this).attr('data-url');
        var widget = $(this).closest('.csshero-editor-block-widget');
        var input = widget.find('.csshero-input');
        var is_important = '';
        if ($(this).closest('.csshero-editor-block-widget').hasClass('important-widget')) {
            var is_important = '!important';
        }
        var css_url = 'url(' + url + ')' + is_important;
        input.val(css_url).trigger('keyup')
    })
    $(document).on('keyup updateval input', '.csshero-render-val .csshero-input,.csshero-slider-element', function(e) {
        var currently_editing_inner_block = $(this).closest('.csshero-editor-block-widget');
        var currently_editing_prop = currently_editing_inner_block.attr('data-property-name');
        if (currently_editing_prop.indexOf('border') > -1 && currently_editing_prop.indexOf('width') > -1) {
            var queried_array = csshero_return_actual_state_array();
            var queried_element = $('.csshero-code-wrap').attr('data-editing_element');
            var border_style_prop = currently_editing_prop.replace('-width', '-style');
            var border_style = $('.csshero-editor-block-widget[data-property-name="' + border_style_prop + '"] .csshero-input');
            if (!border_style.val() || border_style.val() == 'none') {
                var all_border_val = $('.csshero-editor-block-widget[data-property-name="border-style"] .csshero-input').val();
                if (!all_border_val || all_border_val == 'none') {
                    queried_array[queried_element][border_style_prop] = 'solid';
                    property_updater(queried_array, border_style_prop, queried_element)
                }
            }
        }
    });
    $(document).on('click', '.csshero-border-switch > span', function() {
        var b = $(this).attr('data-border-trigger');
        $('.csshero-inner-group.visible').removeClass('visible')
        $('.csshero-inner-group-' + b).addClass('visible');
        $('.csshero-border-switch .active').removeClass('active')
        $(this).addClass('active')
    });
    $(document).on('keyup updateval paste cut', '.csshero-render-val .csshero-input', csshero_throttle(function(e) {
        var currently_editing_block = $(this).closest('.csshero-editor-block');
        var currently_editing_inner_block = $(this).closest('.csshero-editor-block-widget');
        var mainly_editing = $('.csshero-code-wrap').attr('data-editing_element');
        var currently_editing_scope = currently_editing_block.attr('data-block-props');
        var currently_editing_prop = currently_editing_inner_block.attr('data-property-name');
        var currently_editing_val = $(this).val();
        var color_picker = $(this).closest('.csshero-input-wrap').find('.csshero-picker-trigger');
        currently_editing_inner_block.addClass('csshero-has-been-edited')
        if (currently_editing_inner_block.hasClass('has_buttons') || currently_editing_inner_block.hasClass('has_dropdown')) {
            currently_editing_inner_block.find('*[data-button-val="' + currently_editing_val + '"]:not(.cur)').trigger('click')
        }
        if (currently_editing_val.indexOf('!important') > -1) {
            if (!currently_editing_inner_block.hasClass('important-widget')) {
                currently_editing_inner_block.addClass('important-widget')
            }
        } else {
            if (currently_editing_inner_block.hasClass('important-widget')) {
                currently_editing_inner_block.removeClass('important-widget')
            }
        }
        if (currently_editing_val.indexOf('@') > -1) {
            currently_editing_inner_block.addClass('has-variable')
            var valname = $(this).val();
            if (!csshero_variables[valname]) {
                currently_editing_inner_block.addClass('not-available')
            } else {
                currently_editing_inner_block.removeClass('not-available')
            }
        } else {
            currently_editing_inner_block.removeClass('has-variable');
        }
        if (color_picker.length) {
            apply_color_to_picker(currently_editing_val, color_picker)
        }
        if ($('#csshero-body').hasClass('scanning-for-classes')) {
            var to_be_edited_in_array = global_classes[mainly_editing]['cla_prop'].trim()
            var to_be_edited_in_array = csshero_string_to_json(to_be_edited_in_array)
            if (!currently_editing_val || currently_editing_val == '' || currently_editing_val == ' ') {
                delete to_be_edited_in_array[currently_editing_prop];
            } else {
                to_be_edited_in_array[currently_editing_prop] = currently_editing_val;
            }
            var temp_class_object = {}
            temp_class_object[mainly_editing] = to_be_edited_in_array;
            var to_be_edited_in_array_as_string = csshero_json_to_string(temp_class_object, mainly_editing);
            var to_be_saved_as_class_prop = to_be_edited_in_array_as_string.slice(to_be_edited_in_array_as_string.indexOf('{') + 1, to_be_edited_in_array_as_string.lastIndexOf('}')).trim();
            global_classes[mainly_editing]['cla_prop'] = to_be_saved_as_class_prop;
            csshero_draw_code_editor(to_be_edited_in_array_as_string, eddie);
            $('.scanning-for-classes .csshero-code-wrap').trigger('update-class-from-code')
            return;
        }
        var queried_array = csshero_return_actual_state_array();
        var to_be_edited_in_array = csshero_deep_value(queried_array, currently_editing_scope)
        if (currently_editing_inner_block.hasClass('desktop_only-widget')) {
            if (!to_be_edited_in_array['@media @desktop_only']) {
                to_be_edited_in_array['@media @desktop_only'] = {};
            }
            delete live_array[currently_editing_scope][currently_editing_prop];
            to_be_edited_in_array = to_be_edited_in_array['@media @desktop_only']
        } else {
            if (to_be_edited_in_array['@media @desktop_only'] && to_be_edited_in_array['@media @desktop_only'][currently_editing_prop]) {
                delete to_be_edited_in_array['@media @desktop_only'][currently_editing_prop];
                if ($.isEmptyObject(to_be_edited_in_array['@media @desktop_only'])) {
                    delete to_be_edited_in_array['@media @desktop_only'];
                }
            }
        }
        if (!currently_editing_val || currently_editing_val == '' || currently_editing_val == ' ') {
            delete to_be_edited_in_array[currently_editing_prop];
        } else {
            to_be_edited_in_array[currently_editing_prop] = currently_editing_val;
        }
        var to_be_edited_in_array_as_string = csshero_json_to_string(queried_array, mainly_editing);
        var mq_identify = $('#csshero-body').attr('data-mq-mode');
        if (!mq_identify)
            mq_identify = 'all';
        render_single_block(mainly_editing, mq_identify);
        csshero_draw_code_editor(to_be_edited_in_array_as_string, eddie);
        var is_status = false;
        if (mainly_editing.indexOf(':hover') > -1 || mainly_editing.indexOf(':active') > -1 || mainly_editing.indexOf(':visited') > -1) {
            var mainly_editing = csshero_remove_status_from_selector(mainly_editing).clean;
            var is_status = true;
        }
        var inframe = $(mainly_editing, cssheroframe);
        inframe.css('transition', 'none')
        var editing_prop = currently_editing_inner_block.attr('data-property-name')
        $('#csshero-body').append('<div class="hero-checker">checker</div>');
        var inframe_styles = inframe.getStyleObject();
        var t_val = $(this).val();
        if (t_val.indexOf('@') > -1 && csshero_variables[t_val]) {
            var the_checked_value = csshero_variables[t_val].var_prop;
        } else {
            var the_checked_value = t_val;
        }
        $('.hero-checker').css(inframe_styles).css(editing_prop, the_checked_value).hide();
        var new_style = $('.hero-checker').css(editing_prop)
        setTimeout(function() {
            var inframe_parent = $(inframe, cssheroframe).parent();
            inframe_parent.addClass('csshero-hidden-el');
            var frameelementprop = inframe.css(editing_prop);
            inframe_parent.removeClass('csshero-hidden-el');
            if (e.type == 'updateval' && frameelementprop != new_style && t_val != '') {
                if (!is_status)
                    $('.csshero-editor-block-widget[data-property-name="' + editing_prop + '"]:not(.important-widget) .widget-btn-action.widget-btn-imp').trigger('click')
            }
        }, 10)
        $('.hero-checker').remove();
        if (e.type == 'keyup' && currently_editing_inner_block.is('.csshero-slidable-widget')) {
            var slider_item = currently_editing_inner_block.find('.csshero-slider-element');
            slider_item.val(parseInt(t_val))
        }
        class_and_props_scanner_from_object(to_be_edited_in_array)
        if ($('.csshero-service-block[data-service="tree"]').is('.cur')) {
            if ($.isEmptyObject(queried_array[mainly_editing])) {} else {
                csshero_enrich_tree()
            }
        }
        csshero_save_step('wysiwyg', mainly_editing, editing_prop, t_val)
    }, 5));
    $(document).on('cut paste', '.csshero-code-wrap', function(e) {
        $(this).trigger('keyup')
    })
    $(document).on('keyup', '.csshero-code-wrap', csshero_throttle(function(e) {
        var searching = $('.CodeMirror-dialog-top').length;
        var k = e.keyCode;
        var prev_code = $(this).attr('data-plain-code');
        var plain_code = $(this).find('.CodeMirror-code').text().replace(/ +/g, ' ')
        if (k == 8 || k == 9 || k == 13) {
            if (prev_code && plain_code == prev_code) {
                return;
            }
        }
        if (k == 9 || k == 37 || k == 38 || k == 39 || k == 40 || searching)
            return;
        $(this).attr('data-plain-code', plain_code)
        if ($('#csshero-body').hasClass('scanning-for-classes')) {
            return;
            var value = eddie.getValue();
            var value = value.slice(value.indexOf('{') + 1, value.lastIndexOf('}')).trim();
            var el = $(this).attr('data-editing_element');
            console.log(el)
            global_classes[el]['cla_prop'] = value;
            console.log(global_classes)
            for (style_el in live_array) {
                render_single_block(style_el)
            }
            render_mq_styles();
            var ugo = csshero_string_to_json(value)
            var kobe = {}
            kobe[el] = ugo;
            $('#csshero-body').data('class-properties', kobe);
            csshero_draw_wysiwyg(kobe, el, el)
            csshero_save_step('class', el)
            return;
        }
        csshero_updated_from_mirror(eddie)
        csshero_save_step('code', $('.csshero-code-wrap').attr('data-editing_element'))
        if ($('.csshero-editor-block-wrap:not(.hidden) .csshero-editor-block-sub-title[data-prop-group-name="spacings"]').length > 0) {
            csshero_draw_spacing_widget()
        }
    }, 700));
    $(document).on('click', '.dropdown-title .view-only-editable', function(e) {
        e.stopPropagation();
        var list = $(this).closest('.dropdown-title');
        if (list.hasClass('hidden-tree'))
            list.trigger('click')
        $(this).toggleClass('active')
        var list = list.next('.csshero-tree');
        list.toggleClass('show-only-editable')
    }).on('click', '.sha-preset', function() {
        var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-fake-input');
        var val = $(this).attr('data-sha-preset-val');
        input.val(val).trigger('keyup')
    }).on('click', '.dropdown-title', function() {
        var t = $(this);
        var list = $(this).attr('data-toggles')
        var list = $(this).next(list);
        list.toggleClass('hidden-list');
        if ($(this).is('.csshero-class-title-anchor .dropdown-title')) {
            var txt = t.text();
            $(".csshero-class-cat-container .dropdown-title:contains('" + txt + "')").trigger('click')
        } else {
            csshero_scrollto($(this))
        }
    });
    var color_changer_selector = 0;
    var color_changer_prop = 0;
    $(document).on('move.spectrum', '.csshero-picker-trigger', function(e, tinycolor) {
        if (color_changer_prop == 'box-shadow' || color_changer_prop == 'text-shadow') {
            $(this).closest('.sha-node').attr('data-sha-val', tinycolor.toRgbString());
            $(this).closest('.csshero-shadow-builder').trigger('updatesha')
            return;
        }
        var color_changer_item = $('head', cssheroframe).find('.csshero-color-change-previewer');
        var color_changer_css = color_changer_selector + '{' + color_changer_prop + ':' + tinycolor.toRgbString() + '!important;}';
        var color_changer_style = '<style class="csshero-color-change-previewer">' + color_changer_css + '</style>';
        if (color_changer_item.length == 0) {
            $('#csshero-edits-holder', cssheroframe).after(color_changer_style)
        } else {
            color_changer_item.html(color_changer_css)
        }
    }).on('change', '.csshero-picker-trigger', function(e, tinycolor) {
        $('.csshero-color-change-previewer', cssheroframe).remove();
        return_colorpicker_color($(this), e, tinycolor, 'updateval');
    }).on('beforeShow.spectrum', '.csshero-picker-trigger', function() {
        color_changer_selector = $('.csshero-code-wrap').attr('data-editing_element');
        color_changer_prop = $(this).closest('.csshero-editor-block-widget').attr('data-property-name');
        var widget = $(this).closest('.csshero-editor-block-widget');
        if (!$(this).is('.csshero-gradient-color *'))
            clean_interface($(this))
    }).on('mouseleave', '.mq-mode-expander', function() {
        $('#csshero-body').removeClass('expand-mq-modes')
    }).on('mousemove', '.csshero-editor-interface, .csshero-service-block:not([data-service="tree"]), .csshero-overlay-service, .service-interstitial,.csshero-super-top-bar,.mq-mode-expander,#csshero-frame-nav, .csshero-stack-options-modify-box', function() {
        $('.csshero-currently-hovered', cssheroframe).removeClass('csshero-currently-hovered')
        if ($('.focus-probe').length > 0)
            $('.focus-probe').remove()
    }).on('click', '.csshero-var-action-close', function() {
        $(this).closest('.csshero-var-wrap.modifying-var').find('input').attr('disabled', 'disabled')
        $(this).closest('.csshero-var-wrap.modifying-var').removeClass('modifying-var');
        if ($(this).closest('.csshero-var-wrap').find('.csshero-var').val().trim() == '' && $(this).closest('.csshero-var-wrap').find('.csshero-val').val().trim() == '') {
            $(this).closest('.csshero-var-wrap').fadeOut(300, function() {
                $(this).remove();
            })
        }
    }).on('keyup', '.csshero-var-wrap', function() {
        var tvar = '@' + $(this).find('.csshero-var').val();
        var tval = $(this).find('.csshero-val').val();
        if (csshero_variables[tvar] && csshero_variables[tvar]['var_prop'] == tval) {
            $(this).find('.csshero-var-action-close').show();
        } else {
            $(this).find('.csshero-var-action-close').hide();
        }
    }).on('keyup', '.csshero-var', function() {
        varname_checker = csshero_validate($(this).val())
        if (varname_checker && !csshero_variables['@' + $(this).val()]) {
            $(this).closest('.csshero-var-wrap').removeClass('while-error')
        } else {
            if ('@' + $(this).val() != $(this).closest('.csshero-var-wrap').attr('data-var-wrap-name')) {
                $(this).closest('.csshero-var-wrap').addClass('while-error')
            }
        }
    }).on('click', '.csshero-widget-button,.csshero-widget-dropdown-item', function() {
        var btn = $(this);
        var wdg = btn.closest('.csshero-editor-block-widget');
        if (btn.is('.csshero-show-input')) {
            wdg.toggleClass('show-render-val')
            return;
        }
        if (btn.is('.fake-button'))
            return;
        if (btn.is('.csshero-widget-dropdown-item')) {
            var grp = btn.closest('.csshero-dropdown');
            if ($(this).closest('.csshero-editor-block-widget').hasClass('show-dropdown')) {}
            if ($(this).hasClass('disabled'))
                return;
        } else {
            var grp = btn.closest('.csshero-widget-buttons');
        }
        var val = btn.attr('data-button-val');
        var is_important = '';
        if ($(this).closest('.csshero-editor-block-widget').hasClass('important-widget')) {
            var is_important = '!important';
            var val = val + is_important;
        }
        var txt = wdg.find('.csshero-input');
        if (btn.hasClass('cur')) {
            btn.removeClass('cur')
            $(this).closest('.csshero-editor-block-widget').find('.widget-btn-action.widget-btn-res').trigger('click')
        } else {
            grp.find('.cur').removeClass('cur')
            btn.addClass('cur');
            txt.val(val).trigger('keyup')
        }
    }).on('click', '.csshero-code-wrap-expander', function(e) {
        $(this).toggleClass('open')
        return;
    }).on('mousewheel', '.fluid-atoms, .csshero-mqs-scroller', function(e) {
        var delta = e.originalEvent.deltaY;
        this.scrollLeft = this.scrollLeft + (delta / 5);
        e.preventDefault();
    }).on('click', '.csshero-code-wrap-expander li', function(e) {
        e.preventDefault();
        e.stopPropagation();
    }).on('click', '.csshero-change-editor-font-size', function() {
        var t = $(this);
        var m = $('.csshero-code-wrap .CodeMirror, .code-wrap-selector, .code-trail, .inspector-code-wrap .CodeMirror');
        var f = parseInt(m.css('font-size'))
        if (t.is('.plus')) {
            var nf = f + 1;
            if (nf > 30)
                var nf = 30;
        }
        if (t.is('.minus')) {
            var nf = f - 1;
            if (nf < 5)
                var nf = 5;
        }
        m.css('font-size', nf + 'px')
        var _cm = $('.csshero-code-wrap').find('.CodeMirror').get(0).CodeMirror;
        var _em = $('.inspector-code-wrap').find('.CodeMirror')
        if (_em.length > 0) {
            var _em = _em.get(0).CodeMirror;
            _em.refresh();
        }
        _cm.refresh();
        localStorage.setItem('CSSHERO-CODE-EDITOR-FONT-SIZE', nf + 'px');
    }).on('click', '.csshero-code-toggle-code-editor-pos', function(e) {
        if ($('#csshero-body').attr('data-code-mode') == 'full') {
            $('#csshero-body').removeAttr('data-code-mode');
            var pos = 'normal'
            var actual_array = csshero_return_actual_state_array();
            csshero_draw_wysiwyg(actual_array, $('.h1-scope').text(), $('.h1-sugg').text(), 'UPDATE_FROM_CODE')
        } else {
            $('#csshero-body').attr('data-code-mode', 'full')
            var pos = 'expanded'
        }
        localStorage.setItem('CSSHEROSAVE-INTERFACE-POSITION', pos)
    }).on('click', '.csshero-bottom-interface-actions-label', function() {
        var t = $(this);
        var b = $('#csshero-body');
        if (b.hasClass('hide-code')) {
            b.removeClass('hide-code')
            var pos = 'normal';
        } else {
            b.addClass('hide-code')
            var pos = 'min'
        }
        localStorage.setItem('CSSHEROSAVE-INTERFACE-POSITION', pos)
    }).on('click', '.csshero-dropdown-trigger', function() {
        var wid = $(this).closest('.csshero-editor-block-widget');
        wid.toggleClass('show-dropdown');
        var dd = wid.find('.csshero-dropdown');
        dd.perfectScrollbar();
        var lis = dd.find('li');
        lis.show();
        if (dd.find('.cur').length > 0) {
            var selected = dd.find('.cur');
            var si = selected.index()
            var sh = selected.outerHeight();
            var angolo = si * sh;
            dd.animate({
                scrollTop: angolo
            }, 10);
        }
        if (wid.hasClass('show-dropdown'))
            csshero_scrollto(wid);
    }).on('click', '.csshero-editor-block-widget[data-property-name="font-family"] .csshero-dropdown-trigger,.csshero-font-nav', function() {
        csshero_fill_fonts();
    })
    $(document).on('click', '.csshero-detach-editor', function() {
        var body = $('#csshero-body');
        body.toggleClass('detached-editor')
        var editor = $('.csshero-editor-container')
        if (body.hasClass('detached-editor')) {
            editor.draggable({
                handle: $('.csshero-selector-bar, .csshero-save-actions, .csshero-first-drag-handle'),
                drag: function(event) {},
                start: function() {
                    $(this).addClass('dragging-hero')
                },
                stop: function() {
                    $(this).removeClass('dragging-hero')
                    csshero_save_editor_position(editor)
                }
            });
            if ($('#csshero-body').hasClass('inspector-on')) {
                csshero_get_editor_render_options('all')
            } else {
                csshero_get_editor_render_options('position')
            }
            $(this).attr('data-tip', 'Attach Editor')
            localStorage.setItem('CSSHERO-DETACHED-EDITOR', true);
        } else {
            editor.draggable("destroy");
            editor.removeAttr('style')
            localStorage.removeItem('CSSHERO-DETACHED-EDITOR');
            $('#csshero-body').removeClass('inspector-laydown')
            localStorage.removeItem('CSSHERO-INSPECTOR-LAYDOWN');
            $(this).attr('data-tip', 'Detach Editor')
        }
    })
    $(document).on('click', '.csshero-quick-var', function(e) {
        var widget = $(this).closest('.csshero-editor-block-widget');
        var input = widget.find('.csshero-input');
        var load_var = $(this).find('b.load-var');
        var val = input.val();
        var vars = return_vars_array()
        var getter = $(this).find('.csshero-quick-var-get').empty();
        var setter = $(this).find('.csshero-quick-var-set');
        $(this).find('.store-var-val').text(val)
        var setter_v = setter.find('.set-value').val(val)
        if (vars.length > 1) {
            for (var v in vars) {
                var v = vars[v];
                if (v != '@desktop_only' && v.indexOf('--') == -1) {
                    if (v == val) {
                        var qc = 'active';
                    } else {
                        var qc = '';
                    }
                    if (v.indexOf('--') == -1) {
                        var sub_class = '';
                    } else {
                        var sub_class = 'sub';
                    }
                    getter.append('<div class="csshero-quick-var-applier ' + sub_class + ' ' + qc + '" data-var="' + v + '">' + v + '</div>')
                }
            }
            getter.perfectScrollbar();
            load_var.text('Load Variables')
        } else {
            load_var.html('<span>(No variables available)</span>')
        }
        clean_interface($(this))
        $(this).toggleClass('quick-var-open')
    }).on('click', '.csshero-quick-var-applier', function(e) {
        e.stopPropagation();
        $(this).closest('.csshero-quick-var-get').find('.active').removeClass('active');
        $(this).addClass('active')
        var widget = $(this).closest('.csshero-editor-block-widget');
        var input = widget.find('.csshero-input');
        var v = $(this).attr('data-var');
        input.val(v).trigger('keyup')
    }).on('click', '.save-quick-var', function() {
        var setter = $(this).closest('.csshero-quick-var-set');
        var widget = $(this).closest('.csshero-editor-block-widget');
        var input = widget.find('.csshero-input');
        var setter_n = setter.find('.set-name');
        var setter_v = setter.find('.set-value');
        var v = setter_n.val();
        var v = v.replace(/  /g, '').replace(/ /g, '_').replace(/-/g, '_');
        if (v && v.indexOf('@') == -1) {
            var v = '@' + v;
            if (csshero_variables[v]) {
                alert('variable ' + v + ' is already defined');
            } else {
                if (is_color(setter_v.val())) {
                    var var_type = "color_var";
                } else {
                    var var_type = "normal_var";
                }
                csshero_variables[v] = {
                    var_prop: setter_v.val(),
                    var_type: var_type
                }
                csshero_save_step('variable', '', v, setter_v.val())
                csshero_prepare_variables(csshero_variables)
                setter_v.val('')
                setter_n.val('')
                input.val(v).trigger('keyup')
                console.log(csshero_variables)
            }
        } else {
            alert('variable is not properly named')
        }
        $('.quick-var-open').removeClass('quick-var-open')
    }).on('click', '.csshero-quick-var-set *', function(e) {
        e.stopPropagation();
    }).on('click', '.status-select', function() {
        $(this).toggleClass('choose-status');
    }).on('click', '.status-chooser li', function(e) {
        var status = $(this).text();
        e.stopPropagation();
        if ($('.status-chooser').is('.status_is_' + status)) {
            return;
        }
        csshero_click_on_editable('', e, $(this).attr('data-cla'), $(this).attr('data-sug'));
    })
    $(document).on('click', '.close-bg-img-tab', function() {
        var widget = $(this).closest('.csshero-editor-block-widget');
        widget.removeClass('show-img-loader');
        widget.find('.csshero-load-gradients.open-grad').trigger('click');
        $('.csshero-patterns-browser').removeClass('visible-patterns');
    });
    $(document).on('click', '.widget-btn-action', function() {
        var btn = $(this);
        var widget = btn.closest('.csshero-editor-block-widget');
        var input = widget.find('.csshero-input')
        var inputv = input.val();
        if (1) {
            if (btn.hasClass('widget-btn-imp')) {
                if (!widget.hasClass('important-widget')) {
                    new_inputv = inputv + '!important';
                    widget.addClass('important-widget')
                } else {
                    new_inputv = inputv.replace(/!important/g, '');
                    widget.removeClass('important-widget')
                }
                input.val(new_inputv).trigger('keyup');
            }
            if (btn.hasClass('widget-btn-res')) {
                var widget = $(this).closest('.csshero-editor-block-widget');
                if (widget.hasClass('desktop_only-widget')) {
                    widget.find('.widget-btn-donly').trigger('click')
                }
                input.val('').trigger('keyup');
                var what_is_editing = $('.csshero-code-wrap').attr('data-editing_element');
                var what_is_editing_sugg = $('.csshero-code-wrap').attr('data-editing_element_sugg');
                var actual_array = csshero_return_actual_state_array();
                csshero_draw_wysiwyg(actual_array, what_is_editing, what_is_editing_sugg, 'UPDATE_FROM_ACTION')
            }
            if (btn.hasClass('widget-btn-donly')) {
                var what_are_we_editing = $('.csshero-code-wrap').attr('data-editing_element');
                var prop_we_are_editing = widget.attr('data-property-name');
                if (!widget.hasClass('desktop_only-widget')) {
                    widget.addClass('desktop_only-widget');
                    input.trigger('keyup');
                } else {
                    widget.removeClass('desktop_only-widget');
                    input.trigger('keyup')
                }
            }
        }
    }).on('update keyup update-from-drag', '.gradient-val input', csshero_throttle(function(e) {
        var wrapper = $(this).closest('.csshero-gradient-builder');
        var tval = $(this).val()
        var gradient_new_preview = tval.slice(tval.indexOf('(') + 1, tval.lastIndexOf(')'));
        var gradient_new_preview = gradient_new_preview.replace(/, /g, ',');
        var gradient_new_preview = psplit(gradient_new_preview)
        var new_grad_prev = [];
        var new_grad_positions = [];
        for (var g in gradient_new_preview) {
            var gradient_checker = gradient_new_preview[g].split(' ')[0];
            var position_checker = gradient_new_preview[g].split(' ')[1];
            if (is_color(gradient_checker)) {
                new_grad_prev.push(gradient_checker);
                if (!position_checker)
                    var position_checker = 'not-set';
                new_grad_positions.push(position_checker)
            }
        }
        if (e.type != 'update-from-drag') {
            for (var c in new_grad_prev) {
                wrapper.find('.csshero-gradient-color-holder .csshero-gradient-color').eq(c).find('.gradient-picker-inner').spectrum("set", new_grad_prev[c]).css('background-color', new_grad_prev[c]).attr('data-original-color-val', new_grad_prev[c])
            }
            var idx = 0;
            for (var c in new_grad_positions) {
                idx++;
                if (new_grad_positions[c] != 'not-set') {
                    var css_position = new_grad_positions[c];
                } else {
                    if (idx == 0) {
                        var css_position = 0;
                    } else {
                        if (idx == new_grad_positions.length) {
                            var css_position = '100%';
                        } else {}
                    }
                }
                wrapper.find('.csshero-gradient-color-holder .csshero-gradient-color').eq(c).find('.gradient-picker-inner').attr('data-position', new_grad_positions[c]);
                wrapper.find('.csshero-gradient-color-holder .csshero-gradient-color').eq(c).css('left', css_position)
            }
            console.log('non dovrei succedere')
        }
        var first_gradient_param = gradient_new_preview[0].split(' ')[0];
        if (!is_color(first_gradient_param)) {
            gradient_new_preview.splice(0, 1);
        }
        var new_grad_prev = gradient_new_preview.join(',')
        var final_grad_prev = 'linear-gradient(to right,' + new_grad_prev + ')';
        var grad_to_be_rendered_final = csshero_return_gradient_prev(final_grad_prev)
        wrapper.find('.csshero-gradient-render').css('background-image', grad_to_be_rendered_final)
        var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
        input.val(tval).trigger('keyup')
    }, 300)).on('click', '.open-project-manager', function() {
        $('.csshero-trigger-inspector').trigger('click')
    }).on('click', '.csshero-editor-mode-tabber > div', function() {
        $('.csshero-editor-mode-tabber > div.active').removeClass('active');
        if ($(this).is('.csshero-mode-classes')) {
            $('.csshero-editor-container').addClass('show-classes');
            $('.csshero-classes-panel').perfectScrollbar();
        } else {
            $('.csshero-editor-container').removeClass('show-classes');
        }
        $(this).addClass('active')
    }).on('click', '.actions-expander', function() {
        $(this).toggleClass('open')
    }).on('click', '.csshero-context-chooser', function() {
        var b = $('body', cssheroframe);
        var b_classes = b.attr('class').split(' ');
        var context = 'sitewide';
        var context_id = '';
        var specific_context = '';
        var selector = $('.csshero-code-wrap').attr('data-editing_element');
        var selected_context = context;
        var pre = '';
        for (var k in b_classes) {
            var b_class = b_classes[k];
            if (b_class.match(/^page-id-([0-9]+)$/)) {
                var specific_context = b_class;
                var context = 'page';
                var context_id = specific_context.replace('page-id-', '')
                break;
            }
            if (b_class.match(/^category-([0-9]+)$/)) {
                var specific_context = b_class;
                var context = 'category';
                var context_id = specific_context.replace('category-', '')
                break;
            }
        }
        var the_return_selector = '';
        var split_selector = selector.split(' ');
        for (var s in split_selector) {
            var f = split_selector[s];
            if (f.indexOf(context_id) > -1) {
                var m = '';
                var selected_context = f;
            } else {
                var m = f;
            }
            if ($(f, cssheroframe).find('body').length > 0) {
                var pre = f + ' ';
                var m = '';
            } else {}
            if ($(f, cssheroframe).is('body')) {
                console.info(f + ' e body')
            }
            the_return_selector += m + ' ';
        }
    }).on('mousemove', '.csshero-gradient-color-holder', function(e) {
        var cursor_x = e.pageX;
        var holder_w = parseInt($(this).outerWidth());
        var holder_x = parseInt($(this).offset().left);
        var reference = $(this).find('.csshero-gradient-color').eq(0).clone();
        reference.addClass('cloned')
        if ((cursor_x - holder_x) > 0 && (cursor_x - holder_x) < holder_w) {
            if (!$(this).find('.cloned').length)
                $(this).append(reference)
            var cloner_position = cursor_x - holder_x;
            var cloner_position = parseInt((cloner_position * 100) / holder_w);
            var clone = $(this).find('.cloned');
            clone.css('left', cloner_position + '%');
            clone.find('.gradient-picker-inner').attr('data-position', cloner_position + '%')
        }
    }).on('mouseleave', '.csshero-gradient-color-holder', function(e) {
        $(this).find('.cloned').remove();
    }).on('click', '.csshero-gradient-color-holder .cloned', function(e) {
        var all_colors = []
        $(this).closest('.csshero-gradient-color-holder').find('.csshero-gradient-color').each(function() {
            all_colors.push($(this).offset().left)
        })
        all_colors.sort(sortNumber);
        var final_position = '';
        final_position = all_colors.indexOf($(this).offset().left);
        $(this).removeClass('cloned')
        var original_input = $(this).closest('.csshero-gradient-builder').find('.gradient-val input');
        var original_grad_backup = original_input.val();
        var original_grad = original_grad_backup.slice(original_grad_backup.indexOf('(') + 1, original_grad_backup.lastIndexOf(')'));
        var new_grad = psplit(original_grad);
        var color_position = final_position;
        if (!is_color(new_grad[0].split(' ')[0]))
            final_position = final_position + 1;
        var new_gradient_el = $(this).find('.gradient-picker-inner').attr('data-original-color-val') + ' ' + $(this).find('.gradient-picker-inner').attr('data-position');
        new_grad.splice(final_position, 0, new_gradient_el);
        var new_grad = new_grad.join(',');
        var final_grad = original_grad_backup.replace(original_grad, new_grad);
        original_input.val(final_grad).trigger('update-from-drag')
        var new_clone = $(this).clone();
        if (color_position > -1) {
            $(this).closest('.csshero-gradient-color-holder').find('.csshero-gradient-color').eq(color_position).before(new_clone)
        } else {
            $(this).closest('.csshero-gradient-color-holder').prepend(new_clone)
        }
        $(this).remove()
        csshero_load_pickers();
    }).on('mousedown', '.orient-express', function() {
        grad_dragging = true
    }).on('mouseup', '.orient-express', function() {
        grad_dragging = false
    }).on('mouseenter', '.orient-express', function() {
        var box = $(this);
        var inp = $(this).closest('.grad-orienter-wrap').find('.gr-val input');
        var boxCenter = [box.offset().left + box.width() / 2, box.offset().top + box.height() / 2];
        $(document).on('mousemove click', '.orient-express', function(e) {
            if (grad_dragging || e.type == 'click') {
                var angle = Math.atan2(e.pageX - boxCenter[0], -(e.pageY - boxCenter[1])) * (180 / Math.PI);
                var angle = parseInt(angle);
                box.css({
                    'transform': 'rotate(' + angle + 'deg)'
                });
                inp.val(angle + 'deg').trigger('keyup')
            }
        });
    });
    grad_dragging = false;
    $(document).on('keyup', '.grad-orienter-wrap .gr-val input', function(e) {
        var grad = $(this).val();
        var current_input = $(this).closest('.csshero-gradient-builder').find('.gradient-val input');
        var current_grad = current_input.val();
        var current_grad_type = current_grad.split('(')[0];
        var angle = grad;
        var current_options = current_grad.slice(current_grad.indexOf('(') + 1, current_grad.lastIndexOf(')'));
        var current_orientation_backup = psplit(current_options);
        var current_orientation = current_orientation_backup[0]
        if (!is_color(current_orientation.split(' ')[0])) {
            current_orientation_backup.splice(0, 1, angle);
            var new_grad = current_orientation_backup.join(',');
            current_input.val(current_grad_type + '(' + new_grad + ')').trigger('update')
        } else {
            current_orientation_backup.splice(0, 0, angle);
            var new_grad = current_orientation_backup.join(',');
            current_input.val(current_grad_type + '(' + new_grad + ')').trigger('update')
        }
    }).on('click', '.gr-repeat', function() {
        var val = $(this).closest('.csshero-gradient-builder').find('.gradient-val input').val();
        $(this).toggleClass('repeating')
        if (val.indexOf('repeating-') > -1) {
            var new_val = val.replace(/repeating-/g, '')
        } else {
            var new_val = 'repeating-' + val;
        }
        $(this).closest('.csshero-gradient-builder').find('.gradient-val input').val(new_val).trigger('update-from-drag')
    }).on('click', '.gradient-color-delete', function() {
        $('.csshero-gradient-color-holder').trigger('mousemove')
        $('.csshero-gradient-color.cloned').remove();
        var current_input = $(this).closest('.csshero-gradient-builder').find('.gradient-val input')
        var val = current_input.val();
        var current_grad_type = val.split('(')[0];
        var color = $(this).closest('.csshero-gradient-color');
        var len = $(this).closest('.csshero-gradient-color-holder').find('.csshero-gradient-color:not(.cloned)').length;
        var idx = color.index();
        var current_options = val.slice(val.indexOf('(') + 1, val.lastIndexOf(')'));
        var current_orientation_backup = psplit(current_options);
        var current_orientation = current_orientation_backup[0]
        if (!is_color(current_orientation.split(' ')[0])) {
            var _idx = idx + 1;
        } else {
            var _idx = idx;
        }
        current_orientation_backup.splice(_idx, 1);
        var new_grad = current_orientation_backup.join(',');
        if (len >= 3) {
            current_input.val(current_grad_type + '(' + new_grad + ')').trigger('update')
            color.remove();
        } else {
            alert('Gradient requires at least two colors')
        }
    }).on('click', '.restore-last-ok', function() {
        $('.last-cur-before-errors .timestamp').trigger('click')
    }).on('click', '.csshero-font-nav', function() {
        var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
        var val = input.val();
        var dd = $(this).closest('.csshero-editor-block-widget').find('.csshero-dropdown');
        var el = dd.find('.csshero-widget-dropdown-item[data-button-val="' + val + '"]');
        if (!el.length)
            var el = dd.find('.csshero-widget-dropdown-item').eq(0);
        $('.cur-group').removeClass('cur-group')
        el.closest('.group').addClass('cur-group')
        var next = el.index();
        var next = next - 1;
        if ($(this).is('.next')) {
            var next = el.next('.csshero-widget-dropdown-item');
            if (next.length < 1)
                var next = $('.cur-group').next().find('.csshero-widget-dropdown-item').eq(0)
        } else {
            var next = el.prev('.csshero-widget-dropdown-item')
            if (next.length < 1)
                var next = $('.cur-group').prev().find('.csshero-widget-dropdown-item').eq(-1)
        }
        if (next.length) {
            next.trigger('click')
            var nof = next.offset().top
            var no = dd.offset().top;
            var nod = dd.scrollTop();
            var nok = nof - no + nod;
            dd.animate({
                scrollTop: nok
            });
        }
    }).on('click', '.csshero-quick-var-tabber span', function(e) {
        e.preventDefault();
        e.stopPropagation();
        var load = $(this).attr('data-load');
        $('.csshero-quick-var-wrap').hide();
        $('.csshero-quick-var-wrap[data-show="' + load + '"]').show();
        $('.csshero-quick-var-tabber .active').removeClass('active');
        $(this).addClass('active')
    }).on('click', '.close-quick-var', function() {
        clean_interface($('.csshero-quick-var'))
    }).on('mousedown', '.csshero-editor-block-widget[data-property-name="font-weight"] .csshero-dropdown-trigger', function() {
        var el = $('.csshero-editor-block').attr('data-block-props');
        var t = $(this);
        var d = t.closest('.csshero-editor-block-widget').find('.csshero-widget-dropdown-item');
        var font = $(el, cssheroframe).css('font-family');
        var font = font.replace(/"/g, '').replace(/'/g, '');
        var gfontmatch = $('.csshero-font-item > .fam-variation[data-font-name="' + font + '"]');
        if (gfontmatch.length > 0) {
            d.addClass('disabled')
            var ws = gfontmatch.next('.fam-variations').find('.fam-variation');
            $.each(ws, function() {
                var w = $(this).attr('data-font-weight');
                t.closest('.csshero-editor-block-widget').find('.csshero-widget-dropdown-item[data-button-val="' + w + '"]').removeClass('disabled');
            })
        }
    }).on('click', '.numeric-controls span', function() {
        var widget_el = $(this).closest('.csshero-editor-block-widget');
        var widget = widget_el.attr('data-property-name');
        var t = $(this);
        var i = t.closest('.csshero-input-wrap').find('.csshero-input');
        if (i.length == 0)
            var i = t.closest('.csshero-input-wrap').find('.csshero-input-proxy');
        if (i.length == 0)
            var i = t.closest('.sc-s').find('input');
        var v = i.val().trim();
        if (!widget)
            var widget = 'spacings'
        if (v.indexOf('@') > -1)
            return;
        if (!v || v == 'none' || v == 'auto')
            v = '0px';
        var n = parseFloat(v);
        var u = v.replace(n.toString(), '')
        if (!u)
            var u = 'px'
        if (widget == 'opacity') {
            var u = '';
            if (t.is('.plus')) {
                var y = n + .1;
            } else {
                var y = n - .1;
            }
            var y = y.toFixed(1)
            if (y > 1)
                var y = 1.0;
        } else {
            if (t.is('.plus')) {
                var y = n + 1;
            } else {
                var y = n - 1;
            }
        }
        if (widget.indexOf('margin') > -1 || widget == 'line-height' || widget == 'letter-spacing' || widget == 'word-spacing' || widget == 'box-shadow' || widget == 'text-shadow') {
            var soil = -99999;
        } else {
            var soil = 0;
        }
        if (y <= soil)
            var y = 0;
        if (widget_el.is('.csshero-slidable-widget')) {
            var slider_item = widget_el.find('.csshero-slider-element');
            slider_item.val(parseInt(y))
        }
        i.val(y + '' + u).trigger('updateval');
    }).on('mouseenter mousemove', '.csshero-gradient-color:not(.cloned)', function() {
        $(this).closest('.csshero-gradient-color-holder').find('.cloned').hide();
    }).on('mouseleave', '.csshero-gradient-color:not(.cloned)', function() {
        $(this).closest('.csshero-gradient-color-holder').find('.cloned').show();
    }).on('click', '.pusher .push', function() {
        $(this).closest('.csshero-gradient-builder').find('.gr-val input').val($(this).attr('data-grad')).trigger('keyup');
        $(this).closest('.csshero-gradient-builder').find('.orient-express').css('transform', 'rotate(' + $(this).attr('data-grad') + ')');
    }).on('click', '.csshero-show-interstitial', function() {
        $(this).closest('.csshero-service-block').toggleClass('show-interstitial')
    }).on('click', '.csshero-service-bar-item-mq,.csshero-quick-mq-trigger', function(e) {
        e.stopPropagation();
        $('.csshero-service-bar-item-mq.on').removeClass('on');
        $(this).addClass('on');
        var mq = $(this).attr('data-mq');
        load_mq_view(mq, e, true)
        setupMQcontroller();
    }).on('click', '.edit-this-mq', function(e) {
        e.stopPropagation();
    }).on('click', '.class-opener .control-class', function() {
        if (!$('#csshero-body').hasClass('pro-mode')) {
            $('#csshero-body').addClass('pro-mode')
        }
        $('.csshero-service-bar-item[data-service="classes"]:not(.on)').trigger('click');
        var cla = $(this).closest('.class-opener').attr('data-original_claname').split('(')[0];
        $('.class-inner-super-w').find('.class-wrap').each(function() {
            var cnm = $(this).attr('data-original_claname');
            if (cnm.indexOf(cla + '(') > -1) {
                $(this).find('.control-class').trigger('click')
                return;
            }
        })
    }).on('click', '.desc-icon', function() {
        var widget = $(this).closest('.csshero-editor-block-widget');
        var prop_name = widget.attr('data-property-name')
        var widget_desc = widget.find(".csshero-prop-desc");
        if ($(this).is('.loads-externally') && !widget.hasClass('show-desc') && widget_desc.html() == '') {
            var url = 'https://developer.mozilla.org/en-US/docs/Web/CSS/' + prop_name + '/';
            widget_desc.load(url + " #wikiArticle > p:first-of-type", function(ww) {
                var text = $(this).text();
                $(this).empty();
                $(this).append('<p>' + text + ' <a href="' + url + '" target="_blank">Read More &rarr;</a></p>');
            });
        }
        widget.toggleClass('show-desc')
    }).on('mouseup', '.where-it-has-been-edited > span', function() {
        $(this).closest('.csshero-selector').trigger('click')
    }).on('click', '.csshero-editor-block-sub-title', function() {
        var searcher = $('.csshero-search-props');
        if (searcher.val())
            searcher.val('').trigger('keyup')
        var g = $(this).attr('data-prop-group-name')
        var y = $('.csshero-editor-block-wrap[data-prop-group="' + g + '"]');
        if ($(this).parent().is('.csshero-horizontal-tabber')) {
            $('.csshero-editor-block-sub-title.cur').removeClass('cur')
            $(this).addClass('cur')
        }
        if (!y.is('.hidden'))
            $('.all-props-inner').animate({
                scrollTop: 0
            }, 0).trigger('ps-scroll-y');
        y.toggleClass('hidden');
        $('.all-props-inner').trigger('ps-scroll-y');
        var scope = $('.csshero-code-wrap').attr('data-editing_element');
        if ($('#csshero-body').hasClass('scanning-for-classes')) {
            var array = $('#csshero-body').data('class-properties');
        } else {
            var array = csshero_return_actual_state_array()
        }
        property_cycler(array, scope)
        $('.csshero-border-switch span[data-border="border-all"]:not(.active)').trigger('click')
    }).on('ps-scroll-y', '.csshero-editor-block-scroller .all-props-inner', function(e) {
        var o = $(this).offset().top;
        var f = $('.csshero-editor-block-wrap:not(.hidden):in-viewport(' + o + ')').eq(0);
        if (f) {
            var g = f.find('.csshero-editor-block-sub-title').clone();
            $('.csshero-sticky-title-holder').html(g)
        }
    }).on('ps-scroll-y', '.csshero-classes-panel', function() {
        var o = $(this).offset().top;
        var p = $('.class-inner-super-w .dropdown-title');
        $('.csshero-class-title-anchor').hide().empty();
        p.each(function() {
            var t_o = $(this).offset().top;
            var tit = $(this).clone();
            if (t_o < o) {
                $('.csshero-class-title-anchor').show().empty().append(tit)
            }
        })
    })
    var search_timer, search_value;
    $(document).on('keyup', '.csshero-search-props', function(e) {
        var t = $(this);
        var v = t.val();
        var timer, value;
        var ico = $(this).closest('.csshero-search-props-wrap').find('.icon-search');
        $('.all-props-inner').animate({
            scrollTop: 0
        }, 0).trigger('ps-scroll-y');
        var w = $('.csshero-editor-block-widget');
        var el = $('.csshero-code-wrap').attr('data-editing_element');
        var queried_array = csshero_return_actual_state_array();
        var edited_props = queried_array[el];
        clearTimeout(search_timer);
        var str = $(this).val();
        if (v) {
            search_timer = setTimeout(function() {
                search_value = v;
                $('.csshero-editor-block-wrap.hidden').addClass('hidden');
                w.hide();
                var y = [];
                if (v == 'edited') {
                    for (var u in edited_props) {
                        y.push($('.csshero-editor-block-widget[data-property-name="' + u + '"]'));
                    }
                } else {
                    var match_props = $('.csshero-editor-block-widget[data-property-name*="' + v + '"]');
                    match_props.each(function() {
                        y.push($(this))
                    })
                }
                for (var i in y) {
                    var shown = $(y[i]);
                    var p = shown.attr('data-property-name')
                    property_updater(queried_array, p, el)
                    shown.closest('.csshero-editor-block-wrap.hidden').removeClass('hidden');
                    shown.show();
                }
                ico.addClass('searching')
                ico.attr('data-counted', y.length)
            }, 400);
            csshero_draw_spacing_widget()
            csshero_borders_check()
        } else {
            w.show()
            $('.csshero-editor-block-wrap').addClass('hidden');
            ico.removeClass('searching')
        }
        $('.all-props-inner').perfectScrollbar();
    }).on('click', '.csshero-search-props-wrap .icon-search.searching', function() {
        $(this).closest('.csshero-search-props-wrap').find('.csshero-search-props').val('').trigger('keyup');
    }).on('click', '#grouper li', function(e) {
        var t = $(this).text();
        var now_clicked = $('.csshero-code-wrap').attr('data-editing_element');
        var joined = now_clicked + ',' + t;
        live_paths[joined] = {
            desc: 'Group Desc',
            path: joined
        }
        csshero_design_custom_tree_els();
        $(joined, cssheroframe).each(function() {
            csshero_apply_ediandsugg($(this), joined, 'Group Desc')
        })
        csshero_enrich_tree()
        csshero_save_step('path', joined, 'Group Desc')
    }).on('click', '.csshero-stack-option-modify', function(e) {
        var options_panel = $(this).closest('.csshero-stack-options');
        var stack = options_panel.attr('data-original-stack');
        var sugg = options_panel.attr('data-original-sugg');
        open_modify_selector(stack, sugg);
    }).on('click', '.csshero-stack-options-modify-box .closeme', function() {
        $('.csshero-stack-options-modify-box-wrap').remove();
    }).on('keyup paste', '.csshero-stack-options-modify-value', function() {
        var t = $(this);
        var val = t.val();
        var submit = $(this).closest('.csshero-stack-options-modify-box').find('.csshero-button-submit');
        var counter = $(this).closest('.csshero-stack-options-modify-box').find('.counter.new');
        submit.removeClass('disabled')
        if (!val) {
            var l = 'None';
        } else {
            var l = $(val, cssheroframe).length;
        }
        counter.html(l);
    }).on('click', '.csshero-stack-options-modify-box .csshero-button-submit', function(e) {
        if ($(this).hasClass('disabled'))
            return;
        var new_stack_name = $('.csshero-stack-options-modify-value').val();
        var new_stack_sugg = $('.csshero-stack-options-modify-sugg').val();
        var stack = $(this).closest('.csshero-stack-options-modify-box').attr('data-stack');
        var sugg = $(this).closest('.csshero-stack-options-modify-box').attr('data-stack-sugg');
        if (!sugg || sugg == ' ')
            var sugg = new_stack_name;
        if (new_stack_name != stack || new_stack_sugg != sugg) {
            if (live_paths[stack])
                delete live_paths[stack];
            live_paths[new_stack_name] = {
                path: new_stack_name,
                desc: new_stack_sugg
            }
            var backup_l = live_array[stack];
            if (!backup_l)
                var backup_l = {};
            delete live_array[stack];
            live_array[new_stack_name] = backup_l;
            for (var y in live_mq_array) {
                var backup = live_mq_array[y]['pr'][stack];
                if (!backup)
                    var backup = {};
                delete live_mq_array[y]['pr'][stack];
                live_mq_array[y]['pr'][new_stack_name] = backup;
                render_single_block(new_stack_name, y)
            }
            $('#csshero-edits-holder style[data-selector="' + stack + '"]', cssheroframe).remove();
            render_single_block(new_stack_name)
            csshero_apply_custom_ediandsugg(live_paths)
            csshero_click_on_editable('', e, new_stack_name, new_stack_sugg);
            csshero_design_custom_tree_els();
            csshero_enrich_tree()
            csshero_save_step('rename_el', stack, new_stack_name, new_stack_sugg)
            $('.csshero-stack-options-modify-box-wrap').remove();
            return;
        } else {
            console.log('non serve nulla grazie')
        }
        return;
    }).on('click', '.csshero-add-mq', function() {
        if ($('.mq-manager-item[data-mq-name="NEWMQ"]').length == 0) {
            csshero_append_mq_structure()
        }
    }).on('click', '.csshero-btn-delete-mq', function() {
        var mq_item = $(this).closest('.mq-manager-item');
        var mq_name = mq_item.attr('data-mq-name');
        if (confirm('i will delete ' + mq_name + ' Media Query and all edited elements in it')) {
            delete live_mq_array[mq_name];
            render_mq_styles();
            csshero_design_mq_elements()
            csshero_save_step('mq-el-edit', mq_name)
            $('.csshero-service-bar-item-mq[data-mq="all"]').trigger('click')
        }
    }).on('click', '.csshero-save-mq', function() {
        var mq_item = $(this).closest('.mq-manager-item');
        var name = mq_item.find('.mq-manager-atom-name input');
        var updated_name = name.val().trim();
        if (!updated_name || updated_name == ' ') {
            alert('Please insert a name')
            name.focus();
            return;
        }
        var mq_name = mq_item.attr('data-mq-name');
        var mq_dets = mq_item.find('.mq-manager-atom-code .mq-val');
        var mq_dets_obj = {};
        var all_empty = true;
        $.each(mq_dets, function() {
            var mq_det_n = $(this).attr('data-mq-val-prop');
            var mq_det_v = $(this).val();
            if (mq_det_v) {
                all_empty = false;
            }
            if (mq_det_n && mq_det_v && mq_det_n != ' ') {
                var mq_det_v = parseInt(mq_det_v);
                var mq_det_v = mq_det_v + 'px';
                mq_dets_obj[mq_det_n] = mq_det_v;
            }
        })
        if (all_empty) {
            alert('please insert at least one value for this Media Query')
            return;
        }
        if (mq_dets_obj['max-width'] && mq_dets_obj['min-width']) {
            if (parseInt(mq_dets_obj['max-width']) <= parseInt(mq_dets_obj['min-width'])) {
                alert('Max-width can\'t be lower or equal than Min-width');
                return;
            }
        }
        if (mq_name != 'NEWMQ' && updated_name != mq_name) {
            var mq_backup = live_mq_array[mq_name];
            delete live_mq_array[mq_name];
            csshero_submit_new_mq(updated_name, mq_dets_obj);
            live_mq_array[updated_name]['pr'] = mq_backup['pr'];
        } else {
            csshero_submit_new_mq(updated_name, mq_dets_obj);
        }
        csshero_design_mq_elements()
        render_mq_styles();
        apply_mq_treshold(updated_name)
        sort_mq_render();
        csshero_save_step('mq-el-edit', updated_name)
        $('.csshero-service-bar-item-mq[data-mq="' + updated_name + '"]').trigger('click')
    }).on('click', '.csshero-selector', function(e) {
        csshero_click_on_editable($(this), e);
        if ($('.csshero-service-block[data-service="classes"]').is('.cur')) {
            csshero_prepare_classes(global_classes)
        }
    }).on('click', '.icon-toggle-preview-mode', function() {
        var b = $('#csshero-body');
        if (b.hasClass('show-scroller-bar')) {
            $('.csshero-service-bar-item-mq.on').trigger('click');
            b.removeClass('show-scroller-bar')
        } else {
            b.addClass('show-scroller-bar')
            setupMQcontroller();
        }
    });
});
$.expr[":"].contains = $.expr.createPseudo(function(arg) {
    return function(elem) {
        return $(elem).text().toUpperCase().indexOf(arg.toUpperCase()) >= 0;
    }
    ;
});
function csshero_load_v_limiter() {
    var cur_mq = $('#csshero-body').attr('data-mq-mode');
    var v = $('.v-limiter-handle');
    var cont = $('.csshero-vertical-limiter-safe-area');
    var starting_h_val = cont.position().top;
    if (localStorage.getItem('CSSHERO-MQ-RENDER-HEIGHT--' + cur_mq)) {
        var stored_h_val = localStorage.getItem('CSSHERO-MQ-RENDER-HEIGHT--' + cur_mq);
    } else {
        var stored_h_val = starting_h_val + cont.outerHeight() - 7;
    }
    if ($('#csshero-frame-wrap').is('.show-v-limiter')) {
        $('#csshero-inner-frame-wrap').css('max-height', stored_h_val + 'px')
        v.css('top', stored_h_val - starting_h_val + 'px').find('.v-val').html(stored_h_val + 'px')
        v.draggable({
            axis: 'y',
            containment: cont,
            drag: function(event) {
                $('#csshero-focus-view').empty();
                var true_val = starting_h_val + event.target.offsetTop;
                $(this).find('.v-val').html(true_val + 'px')
                $('#csshero-inner-frame-wrap').css('max-height', true_val + 'px')
                localStorage.setItem('CSSHERO-MQ-RENDER-HEIGHT--' + cur_mq, true_val)
            },
            start: function() {
                $(this).addClass('drag')
            },
            stop: function() {
                $(this).removeClass('drag')
            }
        })
    } else {
        $('#csshero-inner-frame-wrap').removeAttr('style')
    }
}
function load_mq_view(mq, e, refresh_editor) {
    var frame = $('#csshero-inner-frame-wrap');
    var cont = $('#csshero-frame-wrap')
    var mq_mode = $('.csshero-mq-mode-item');
    var mq_mode_name = mq_mode.find('.mq-name')
    mq_mode.find('.icon').empty()
    var is_custom_mq = false;
    if ($.inArray(mq, default_mqs_flat) == -1 && mq != 'all') {
        mq_mode.find('.icon').append('<span class="mq-icon-label">' + mq[0] + '</span>');
        cont.addClass('show-v-limiter')
    } else {
        cont.removeClass('show-v-limiter')
    }
    if (mq == 'all') {
        var mqw = '100%';
    } else {
        var mqw = live_mq_array[mq]['mq_details']['max-width'];
        if (live_mq_array[mq]['mq_details']['min-width']) {
            var mqw = live_mq_array[mq]['mq_details']['min-width'];
        }
    }
    if (mq == 'all') {
        $('#csshero-body').attr('data-mq-mode', 'all');
        frame.removeAttr('style');
    } else {
        $('#csshero-body').attr('data-mq-mode', mq)
        csshero_load_v_limiter();
        frame.css('width', mqw);
    }
    if (refresh_editor) {
        var editing = $('.csshero-code-wrap').attr('data-editing_element');
        if (editing)
            csshero_click_on_editable('', e, editing)
        csshero_enrich_tree();
    }
    if (mq == 'all')
        var mq = 'All Devices'
    mq_mode_name.text(mq)
}
function csshero_scrollto(element, offset) {
    if (!offset)
        var offset = 40;
    var scroller = element.closest('.ps-container');
    var s_t = scroller.offset().top;
    var s_s = scroller.scrollTop();
    var e_t = element.offset().top;
    var e_t = e_t + s_s;
    var scrolled_pos = e_t - s_t - offset;
    scroller.animate({
        scrollTop: scrolled_pos
    }, 100).trigger('ps-scroll-y');
}
function specificity(selector, isStyleAttribute) {
    selector = selector || "";
    function numMatches(regex) {
        return (selector.match(regex) || []).length;
    }
    var numClasses = numMatches(/\.[\w-_]+\b/g);
    var numIds = numMatches(/#[\w-_]+\b/g);
    var numNamesInBraces = 0;
    var namesInBraces = selector.match(/\[[^\]]*\b[\w-_]+\b[^\]]*\]/g) || [];
    for (var idx = 0; idx < namesInBraces.length; ++idx) {
        numNamesInBraces += (namesInBraces[idx].match(/\b[\w-_]+\b/g) || []).length;
    }
    var results = [0, 0, 0, 0];
    results[0] = isStyleAttribute ? 1 : 0;
    results[1] = numIds;
    results[2] = numMatches(/\[[^\]]+\]/g) + numClasses;
    results[3] = numMatches(/\b[\w-_]+\b/g) - numIds - numClasses - numNamesInBraces;
    return results;
}
function csshero_editables_scanner(element) {
    if (element.hasClass('has-been-processed'))
        return;
    var accepted_el = GetAppliedCssRules(element);
    for (var a in accepted_el) {
        if (live_paths[accepted_el[a]]) {
            accepted_el.splice($.inArray(accepted_el[a], accepted_el), 1);
        }
    }
    if (accepted_el.length > 0) {
        accepted_el.sort(function(a, b) {
            return specificity(a) < specificity(b);
        });
        var primary_el = accepted_el[0];
        var primary_el = primary_el.split(/(?:>| )+/);
        var primary_el = primary_el[primary_el.length - 1];
        var primary_el_spec = parseInt(specificity(primary_el).join(''));
        if (primary_el_spec < 2) {
            var new_primary = scan_for_parent(element, primary_el)['e'];
            var new_primary_s = scan_for_parent(element, primary_el)['s'];
            accepted_el.unshift(new_primary)
        }
        var finalizer = accepted_el.join(' | ')
        var finalizer = finalizer.split(' | ');
        var finalizer = unique(finalizer);
        finalizer.sort(function(a, b) {
            return specificity(a) < specificity(b);
        });
        var rendered_finalizer = finalizer.join(' | ');
        element.attr('original_editableclass', finalizer[0]).attr('original_editablesuggestion', finalizer[0]).addClass('has-been-processed')
        element.attr('editableclass', rendered_finalizer).attr('editablesuggestion', rendered_finalizer).addClass('editable').addClass('has-been-processed')
    }
}
function scan_for_parent(element, primary_el) {
    var parent = element.closest('*[original_editableclass]');
    if (parent.length) {
        var parent_original = parent.attr('original_editableclass');
        var new_primary_el = parent_original + ' /// ' + primary_el;
        var new_primary_el = new_primary_el.split(' /// ')
        var new_primary_el = unique(new_primary_el);
        var new_primary_el = new_primary_el.join(' ')
        var new_primary_el_spec = parseInt(specificity(new_primary_el).join(''));
    }
    return {
        e: new_primary_el,
        s: new_primary_el_spec
    }
}
function generate_editables() {
    cssheroframe = window.frames['csshero-iframe-main-page'].document;
    if (typeof csshero_theme_is_configurated == 'undefined') {
        var need_auto_config = true;
    } else {
        if (csshero_theme_is_configurated) {
            var need_auto_config = false;
        } else {
            var need_auto_config = true;
        }
    }
    $('#csshero-editable-loader').hide();
    var paths = configuration_paths;
    csshero_apply_custom_ediandsugg(live_paths)
    for (var u in paths) {
        sele = paths[u].path;
        desc = paths[u].desc;
        try {
            var el = $(sele, cssheroframe);
        } catch (error) {
            console.log(sele + ' is not a valid selector')
        }
        el.each(function() {
            var n = $(this);
            csshero_apply_ediandsugg(n, sele, desc)
        })
    }
    var config_loader = $('#csshero-editable-loader > span');
    if (need_auto_config) {
        $('html *:not(.editable)', cssheroframe).addClass('editable no-config-el');
        csshero_design_custom_tree_els();
    } else {
        designTree();
        csshero_enrich_tree(live_array);
    }
}
function csshero_load_old_history_steps() {
    var base_url = $('#csshero-body').attr('data-site-base-url');
    var history_url = base_url + '?csshero_action=list_saved_snapshots&snapshot_type=history';
    var stepper = $('.csshero-stepper');
    $.ajax({
        url: history_url,
        success: function(data) {
            if (data) {
                var steps = $(data).find('.csshero-step').clone();
                stepper.append('<div class="history-treshold"><span>Previous Sessions <a href="?csshero_action=delete_history_snapshots" class="del">clear</a></span></div>').append(steps)
            }
        }
    });
}
$(window).on('load', function() {
    csshero_load_old_history_steps();
    cssheroframe = window.frames['csshero-iframe-main-page'].document;
    lister = $('.csshero-selectors-list');
    lister_inner = $('.csshero-selectors-list-inner');
    frameWrap = $('#csshero-frame-wrap');
    csshero_prepare_font_manager(stored_extra_gfonts)
    iterate_less_objects('empty-iteration', 'empty-iteration');
    csshero_prepare_classes(global_classes)
    frameWrap.removeClass('hidd')
    if (localStorage.getItem('CSSHERO-DETACHED-EDITOR')) {
        $('.csshero-detach-editor').trigger('click')
    }
    if (localStorage.getItem('CSSHERO-BOTTOM-NAVI')) {
        $('#csshero-body').addClass('show-bottom-navi')
    }
    selector_dropdown = '<span class="csshero-selector-dd"></span>';
    $('head #csshero-main-stylesheet-css', cssheroframe).attr('disabled', 'disabled').after('<div id="csshero-font-loader"></div><div id="csshero-edits-holder"><div class="mq-style-wrapper" data-mq-name="all" data-mq-treshold="99999"></div></div>');
    $(document).on('click', '.send-selector-to-editor', function(e) {
        var s = $(this).attr('data-selector');
        var m = $(this).attr('data-overview-mq');
        var d = $(this).closest('.overview-selector-wrap').attr('data-overview-sugg');
        var present = $(s, cssheroframe).length;
        if (!present)
            alert('Warning, ' + d + ' is not available on this page, may be available on other pages.')
        $('.csshero-service-bar-item-mq[data-mq="' + m + '"]').trigger('click')
        csshero_click_on_editable('', e, s, d);
    }).on('mouseenter mousemove', '.csshero-editor-container,.csshero-service,.csshero-service-bar', function() {
        if (!$('#csshero-body').hasClass('resizing')) {}
    }).on('click', '.csshero-toggle-interface', function() {
        var t = $(this);
        $('#csshero-frame-wrap').fadeOut(400, function() {
            $('#csshero-body').toggleClass('hide-interface');
            t.toggleClass('hide-interface');
            setTimeout(function() {
                $('#csshero-frame-wrap').fadeIn(400)
            }, 400)
        })
    })
    $(cssheroframe).scroll(function() {
        $('#csshero-focus-view').empty();
    })
    $(document).on('click', '.history-treshold .del', function(e) {
        e.preventDefault();
        if (confirm('Do you really want to clear all your edits history? This action is irreversible')) {
            var href = $(this).attr('href');
            $.ajax({
                url: href,
                success: function(data) {
                    $('.history-treshold').remove();
                    $('.csshero-step-type-old').remove();
                    csshero_load_old_history_steps()
                }
            });
        }
    })
    $(document).on('click', '.send-to-editor', function(e) {
        var cl = $(this).closest('.class-wrap').attr('data-original_claname');
        csshero_click_on_editable('', e, cl)
        $('#csshero-body.hide-code').removeClass('hide-code').removeAttr('data-code-mode');
        $('.csshero-mode-props').trigger('click')
    }).on('click', '.csshero-classes-action-undo', function(e) {
        var original = $('#csshero-body').data('class-properties');
        var last = $('#csshero-body').attr('last_clicked_true_el');
        var last_sugg = $('#csshero-body').attr('last_clicked_true_el_sugg');
        var current = $('.csshero-code-wrap').attr('data-editing_element');
        var restored_props = '';
        for (var n in original[current]) {
            restored_props += n + ':' + original[current][n] + ';'
        }
        global_classes[current]['cla_prop'] = restored_props
        for (style_el in live_array) {
            render_single_block(style_el)
        }
        render_mq_styles();
        csshero_click_on_editable('', e, last, last_sugg)
    }).on('click', '.csshero-classes-action-update', function(e) {
        var t = $(this).closest('.class-wrap');
        if ($(this).hasClass('while-error')) {
            alert('error no save')
            return;
        } else {
            var cname = $('.csshero-code-wrap').attr('data-editing_element');
            var clawrap = $('.class-wrap[data-original_claname="' + cname + '"]');
            var rep_cla = clawrap.attr('data-original_claname').trim();
            var original = rep_cla;
            var replacer_props = clawrap.attr('data-class-replacer-props');
            var replacer = $('.code-wrap-selector > span').text()
            var replacer = classname_checker(replacer);
            if (replacer == false) {
                alert('Erorr in snippet name')
                return;
            }
            var nice_replacer = replacer.split('(')[0] + '(';
            if (original.indexOf('@') == 1 && replacer.indexOf('@') > -1) {
                alert('hrrr, warning bro, this class was not parametric, turning it into a parametric class could break your code');
                return;
            }
            if (original.indexOf('@') > -1 && replacer.indexOf('@') == -1) {
                alert('hrrr, warning bro, this class was parametric, turning it into a non-parametric class could break your code');
                return;
            }
            if (original == replacer) {
                global_classes[original]['cla_prop'] = replacer_props;
            } else {
                for (var n in global_classes) {
                    if (n.indexOf(nice_replacer) > -1) {
                        if (global_classes[n]['cla_type'] == 'system_cla') {
                            alert('this class has been already defined ( ' + n + ' )');
                            return;
                        }
                    }
                }
                if (global_classes[original]) {
                    var backup_element = global_classes[original];
                } else {
                    var backup_element = {
                        'cla_prop': '',
                        'cla_type': 'user_cla'
                    }
                }
                delete global_classes[original];
                global_classes[replacer] = backup_element;
                global_classes[replacer]['cla_prop'] = replacer_props;
                clawrap.attr('data-original_claname', replacer)
            }
            var updated_stored_classes = [];
            for (var g in global_classes) {
                updated_stored_classes.push(g)
            }
            stored_classes = updated_stored_classes;
            csshero_replace_class_from_array(live_array, original, replacer, replacer_props);
            csshero_replace_class_from_array(live_mq_array, original, replacer, replacer_props);
            csshero_save_step('class', replacer)
            for (style_el in live_array) {
                render_single_block(style_el)
            }
            render_mq_styles();
            csshero_prepare_classes(global_classes)
            var last = $('#csshero-body').attr('last_clicked_true_el');
            var last_sugg = $('#csshero-body').attr('last_clicked_true_el_sugg');
            csshero_click_on_editable('', e, last, last_sugg)
        }
        $('.csshero-code-wrap').trigger('keyup')
    }).on('click', '.remove-class', function(event) {
        var claw = $(this).closest('.class-wrap');
        var prop = claw.attr('data-original_claname');
        var classname = prop.split('(')[0];
        var el = $('.csshero-code-wrap').attr('data-editing_element');
        var queried_array = csshero_return_actual_state_array();
        var current_el = queried_array[el];
        for (var q in current_el) {
            if (typeof current_el[q] != 'object' && current_el[q].indexOf(classname + '(') > -1) {
                delete current_el[q];
            }
        }
        csshero_click_on_editable('', event, el);
        csshero_updated_from_mirror(event)
        csshero_save_step('code', el)
        claw.removeClass('used-class').addClass('unused-class')
    }).on('click', '.apply-class', function(event) {
        var claw = $(this).closest('.class-wrap');
        var prop = claw.attr('data-original_claname');
        var classname = prop.split('(')[0];
        var niceclassname = classname + '()';
        var used_params = [];
        var is_updater = '';
        if (claw.hasClass('used-class')) {
            var el = $('.csshero-code-wrap').attr('data-editing_element');
            var queried_array = csshero_return_actual_state_array();
            var current_el = queried_array[el];
            for (var q in current_el) {
                if (typeof current_el[q] != 'object' && current_el[q].indexOf(classname + '(') > -1) {
                    var use = current_el[q].slice(current_el[q].indexOf('(') + 1, current_el[q].lastIndexOf(')')).replace(/;/g, ',');
                    var used_params = psplit(use);
                    break;
                }
            }
        }
        var splitted_props = prop.replace(/;/g, ',');
        var splitted_props = splitted_props.slice(splitted_props.indexOf('(') + 1, splitted_props.lastIndexOf(')'));
        var splitted_props = psplit(splitted_props);
        var class_options_panel = '';
        if (splitted_props.length == 1 && splitted_props[0] == '') {
            var hidden_tab = 'display:none;'
        } else {
            var hidden_tab = '';
        }
        for (var s in splitted_props) {
            var sp = splitted_props[s];
            if (!sp)
                break;
            var sp = sp.split(':');
            var sp_par = sp[0];
            if (used_params[s]) {
                var sp_val = used_params[s];
            } else {
                if (sp[1]) {
                    var sp_val = sp[1]
                    var sp_val = sp_val.trim();
                } else {
                    var sp_val = '';
                }
            }
            if (sp_val && is_color(sp_val)) {
                var is_color_parameter_add = '<span class="palette-trigger-wrap"></span><div class="csshero-picker-trigger-wrap"><span class="csshero-picker-trigger class-picker" style="background-color:' + sp_val + ';" data-original-color-val="' + sp_val + '"></span></div>';
            } else {
                var is_color_parameter_add = '';
            }
            var quick_vars_expander = '<div class="load-quick-var-expander"></div>';
            var quick_load_vars = '<span class="load-quick-var">' + quick_vars_expander + '</span>';
            if (global_classes[prop]['cla_ddowns'] && global_classes[prop]['cla_ddowns'][sp_par]) {
                var sp_val_element = '<select>';
                var ddown = global_classes[prop]['cla_ddowns'][sp_par];
                for (var d in ddown) {
                    if (sp_val == ddown[d]) {
                        var is_selected = 'selected';
                    } else {
                        var is_selected = '';
                    }
                    sp_val_element += '<option value="' + ddown[d] + '" ' + is_selected + '>' + ddown[d] + '</option>';
                }
                sp_val_element += '</select>';
            } else {
                var sp_val_element = quick_load_vars + '<input data-default-val="' + sp_val + '" type="text" value="' + sp_val + '" placeholder="' + sp_val + '" />' + is_color_parameter_add;
            }
            var option_panel = '<li class="class-option-item"><div><span>' + sp_par + '</span></div><div class="class-prop-val-wrap">' + sp_val_element + '</div></li>';
            class_options_panel += option_panel;
        }
        if (used_params.length > 1)
            var is_updater = 'updater';
        var destination = claw.find('.class-applier-wrap')
        destination.html('<div class="csshero-service-overlay-contents"><ul class="class-props-ul" data-classname="' + classname + '">' + class_options_panel + '</ul><div class="csshero-btn-wrapper"><span class="csshero-service-overlay-close">Close</span><span class="csshero-preview-class">Preview</span><span class="csshero-apply-class ' + is_updater + '">Apply</span></div></div>');
        if (splitted_props.length == 1 && splitted_props[0] == '') {
            $('.csshero-apply-class').trigger('click')
        } else {
            csshero_load_pickers(claw.find('.class-applier-wrap'));
            claw.trigger('applying-class')
        }
        csshero_scrollto(claw)
    }).on('mouseenter mouseleave', '.csshero-preview-class', function(e) {
        $(this).closest('.csshero-btn-wrapper').find('.csshero-apply-class').trigger('preview')
        var claw = $(this).closest('.class-wrap');
        var to_be_prev = $(this).attr('data-manual-preview');
        if (!to_be_prev || to_be_prev == '') {
            var to_be_prev = $(this).closest('.class-wrap').attr('data-previewable');
        }
        var el = $('.csshero-code-wrap').attr('data-editing_element')
        if (e.type == 'mouseenter') {
            var eddiesval = eddie.getValue();
            $(this).attr('original-val', eddiesval)
            var pos = eddiesval.lastIndexOf('}');
            var eddiesval = eddiesval.substring(0, pos) + to_be_prev + '\n}';
            eddie.setValue(eddiesval);
            csshero_draw_code_editor(eddiesval, eddie)
            csshero_updated_from_mirror(e)
            claw.addClass('previewing')
        } else {
            var original_val = $(this).attr('original-val');
            eddie.setValue(original_val);
            csshero_updated_from_mirror(e)
            csshero_draw_code_editor(original_val, eddie)
            claw.removeClass('previewing');
            $(this).removeAttr('original-val')
        }
    }).on('click', '.load-quick-var', function(e) {
        $(this).toggleClass('show');
        if (!$(this).hasClass('show'))
            return;
        var expander = $(this).find('.load-quick-var-expander').empty();
        var vars = return_vars_array()
        expander.append('<span>Load Variable:</span>')
        for (var v in vars) {
            var variable = vars[v];
            var var_type = variable['var_type'];
            if (variable != '@desktop_only' && variable.indexOf('--') == -1) {
                if (var_type == 'color_var') {
                    var mini_prev = '<span class="quick-mini-prev" style="background-color:' + variable['var_prop'] + ';"></span>';
                } else {
                    var mini_prev = '';
                }
                expander.append('<div class="quick-variable-load-item" data-load-var="' + variable + '">' + mini_prev + variable + '</div>');
            }
        }
        expander.perfectScrollbar();
    }).on('mouseleave', '.load-quick-var-expander', function() {
        $(this).closest('.load-quick-var').removeClass('show')
    }).on('click', '.quick-variable-load-item', function() {
        var val = $(this).attr('data-load-var');
        $(this).closest('.class-option-item').find('input').val(val);
    }).on('applying-class', '.class-wrap', function() {
        var t = $(this);
        if (!t.hasClass('applying-class')) {
            t.addClass('applying-class');
            $('.class-wrap').not(t).each(function() {
                $(this).find('.class-applier-wrap').empty();
                $(this).removeClass('applying-class')
            });
        } else {
            t.find('.class-applier-wrap').empty();
            t.removeClass('applying-class')
        }
    }).on('click preview', '.csshero-apply-class', function(event) {
        var parent = $(this).closest('.csshero-class-cat-container');
        var this_class_wrap = $(this).closest('.class-wrap');
        var similar = parent.find('.used-class:not(.applying-class)')
        var similar_group = parent.find('.dropdown-title').text();
        if (this_class_wrap.is('.system_cla') && similar.length > 0 && similar_group.indexOf('Util') == -1 && event.type != 'preview') {
            if (confirm('Looks like there\'s another ' + similar_group + ' applied, do you want me to remove it before going on?')) {
                similar.find('.remove-class').trigger('click')
            }
        }
        var el = $('.csshero-code-wrap').attr('data-editing_element')
        var queried_array = csshero_return_actual_state_array();
        var class_props = [];
        var classname = $(this).closest('.class-wrap').find('.class-props-ul').attr('data-classname');
        var wrap = $('.class-wrap[data-original_claname^="' + classname + '("]');
        var has_been_edited = false;
        $(this).closest('.class-wrap').find('.class-props-ul li').each(function() {
            if ($(this).find('select').length > 0) {
                var val = $(this).find(":selected").text();
            } else {
                var val = $(this).find('input').val();
            }
            var ori = $(this).find('input').attr('data-default-val')
            if (val == '' || val == ' ')
                val = ori;
            if (val != ori)
                has_been_edited = true;
            class_props.push(val)
        })
        if ($(this).hasClass('updater'))
            has_been_edited = true;
        if (has_been_edited) {
            var apply_class_props = class_props.join(',');
        } else {
            var apply_class_props = '';
        }
        var eddiesval = eddie.getValue();
        var pos = eddiesval.lastIndexOf('}');
        var the_applied_result = classname + '(' + apply_class_props + ')';
        if (event.type == 'preview') {
            this_class_wrap.attr('data-previewable', the_applied_result);
            return;
        }
        var eddiesval = eddiesval.substring(0, pos) + the_applied_result + '\n}';
        eddie.setValue(eddiesval)
        csshero_updated_from_mirror(event)
        csshero_click_on_editable('', event, el);
        wrap.addClass('used-class').removeClass('unused-class')
        wrap.trigger('applying-class')
        csshero_save_step('code', el)
        $('.csshero-service-overlay-close').trigger('click')
    }).on('mousedown', '.sp-cancel', function(e) {
        $('.csshero-color-change-previewer', cssheroframe).remove();
    }).on('click', '.csshero-overlay-close', function() {
        $('.csshero-editor-overlay').fadeOut(300, function() {
            $(this).remove();
        })
    }).on('mouseenter', '.sp-container', function() {
        if ($('#csshero-frame-picker-mask').length == 0) {
            $('#csshero-frame-wrap').append('<div id="csshero-frame-picker-mask"></div>');
        }
    }).on('hide.spectrum', '.csshero-picker-trigger', function() {
        $('#csshero-frame-picker-mask').remove();
    }).on('click', '.csshero-classes-action-delete', function() {
        var cancel_class_wrap = $(this).closest('.class-wrap');
        var cancel_class_base = cancel_class_wrap.attr('data-original_claname');
        var cancel_class = cancel_class_base.split('(')[0];
        var cancel_notifications = [];
        var check_styles = $('#csshero-edits-holder style', cssheroframe);
        $(check_styles).each(function(y, sty) {
            check_less = $(sty).attr('data-less');
            check_selector = $(sty).attr('data-selector');
            check_mq = $(sty).closest('.mq-style-wrapper').attr('data-mq-name');
            if (check_less.indexOf(cancel_class) > -1) {
                cancel_notifications.push('in ' + check_mq + ' > ' + check_selector)
            }
        })
        for (g in global_classes) {
            if (global_classes[g]['cla_prop'].indexOf(cancel_class) > -1) {
                cancel_notifications.push('in class ' + g)
            }
        }
        if (cancel_notifications.length) {
            alert('Sorry, can\'t delete ' + cancel_class + ' as it\'s used ' + cancel_notifications.join(' and '))
        } else {
            if (confirm('Are you sure you want to delete ' + cancel_class + '?')) {
                delete global_classes[cancel_class_base];
                stored_classes = jQuery.grep(stored_classes, function(stored_classes_value) {
                    return stored_classes_value != cancel_class_base;
                });
                cancel_class_wrap.fadeOut(300, function() {
                    $(this).remove();
                })
            }
        }
        csshero_save_step('class', cancel_class_base)
    }).on('keyup update-class-from-code', '.scanning-for-classes .csshero-code-wrap', csshero_throttle(function(e) {
        var check_mirror = $(this).find('.CodeMirror').get(0).CodeMirror;
        var check_mirror = check_mirror.getValue();
        var check_mirror = check_mirror.trim();
        var check_mirror_selector = check_mirror.split('{')[0].replace(/  /g, ' ').replace(/ \(/g, '(').replace(/\( /g, '(').replace(/ \( /g, '(').replace(/ \)/g, ')').replace(/\) /g, ')').replace(/ \) /g, ')').replace(/ \:/g, ':').replace(/\: /g, ':').replace(/ \: /g, ':').replace(/;/g, ',').replace(/ \,/g, ',').replace(/\, /g, ',').replace(/ \, /g, ',').trim()
        var cwrap = $('.class-wrap[data-original_claname="' + check_mirror_selector + '"]')
        var check_mirror_props = check_mirror.substr(check_mirror.indexOf('{') + 1).slice(0, -1);
        check_mirror_json_test = csshero_string_to_json(check_mirror_props)
        if (check_mirror[0] != '.' || check_mirror[check_mirror.length - 1] != '}' || (check_mirror.match(/\{/g) || []).length != (check_mirror.match(/\}/g) || []).length) {
            $('.csshero-classes-action-update').addClass('while-error');
            return;
        }
        var array_tester = check_mirror_selector.split('(')[0] + '(';
        var plain_classes = stored_classes.join(' ');
        if (plain_classes.indexOf(array_tester) > -1 && cwrap.attr('data-original_claname').indexOf(array_tester) == -1) {
            $('.csshero-classes-action-update').addClass('while-error');
            return;
        }
        if ($.isEmptyObject(check_mirror_json_test)) {
            $('.csshero-classes-action-update').addClass('while-error')
        } else {
            $('.csshero-classes-action-update').removeClass('while-error')
            cwrap.attr('data-class-replacer-selector', check_mirror_selector).attr('data-class-replacer-props', check_mirror_props);
            global_classes[check_mirror_selector]['cla_prop'] = check_mirror_props
        }
        for (style_el in live_array) {
            render_single_block(style_el)
        }
        render_mq_styles();
    }, 300));
    $(document).on('mouseover', '.csshero-editor-block-widget li[data-button-val] .dd-prev', function() {
        var el = $('.csshero-code-wrap').attr('data-editing_element')
        var preview_val = $(this).closest('li').attr('data-button-val');
        var preview_prop = $(this).closest('.csshero-editor-block-widget').attr('data-property-name')
        var holder = $('#csshero-edits-holder', cssheroframe)
        var prev_style = holder.find('.temp-style-render');
        prev_style.remove();
        holder.append('<style class="temp-style-render">' + el + '{' + preview_prop + ':' + preview_val + ';}</style>')
    }).on('mouseout', '.csshero-editor-block-widget .csshero-dropdown', function() {
        var holder = $('#csshero-edits-holder', cssheroframe)
        var prev_style = holder.find('.temp-style-render');
        prev_style.remove();
    }).on('click', '.toggle-navi', function() {
        $('#csshero-body').toggleClass('show-bottom-navi');
        if ($('#csshero-body').hasClass('show-bottom-navi')) {
            localStorage.setItem('CSSHERO-BOTTOM-NAVI', true)
        } else {
            localStorage.removeItem('CSSHERO-BOTTOM-NAVI')
        }
    }).on('mouseenter', '.bottom-nav-item', function() {
        var el = $(this).attr('editableclass');
        var el = $(el + ':in-viewport', cssheroframe).eq(0);
        csshero_zoom_on_element(el)
    }).on('click', '.bottom-nav-item', function() {
        $('.bottom-nav-item.current-node').removeClass('current-node')
        $('.bottom-nav-item.hidden-node').removeClass('hidden-node')
        $(this).addClass('current-node')
        $(this).nextAll('.bottom-nav-item:not(.last-node)').addClass('hidden-node');
    })
    $(document).on('click', '.csshero-service-overlay-close', function() {
        $(this).closest('.class-wrap').trigger('applying-class')
    }).on('click', '.csshero-btn-add-new-var', function() {
        if (vars_wrapper.find('.newly-created-var').length > 0)
            return;
        vars_wrapper.prepend('<div class="csshero-var-wrap while-error newly-created-var modifying-var"><div class="var-ante">@</div><input class="csshero-var" value="" placeholder="variable_name"><input class="csshero-val" value="" placeholder="variable value" />' + return_var_actions(true) + '</div>');
        $('.newly-created-var .csshero-var').focus();
    }).on('click', '.csshero-var-action-delete', function(e) {
        var is_color_var = $(this).closest('.csshero-var-wrap').hasClass('is_color_variable');
        var v = '@' + $(this).closest('.csshero-var-wrap').find('.csshero-var').val();
        var r = $(this).closest('.csshero-var-wrap').find('.csshero-val').val();
        var r_replacer = new RegExp(v + "\\b","g")
        if (v == '' || r == '') {
            showlogger('Empty variable, i will delete it.')
            $('.csshero-var-action-close').trigger('click')
            return;
        } else {
            if (confirm('Delete ' + v + ' variable? I will take care of replacing all ' + v + ' with ' + r)) {
                showlogger('Will delete <span class="code">' + v + '</span> and replace all <span class="code">' + v + '</span> instances with <span class="code">' + r + '</span>');
                if (is_color_var) {
                    for (varia in csshero_variables) {
                        if (varia.indexOf(v + '--') > -1) {
                            palette_item = csshero_variables[varia]['var_prop'];
                            palette_item = palette_item.replace(r_replacer, r);
                            csshero_replace_var_from_array(live_array, varia, palette_item);
                            csshero_replace_var_from_array(csshero_variables, varia, palette_item);
                            csshero_replace_var_from_array(live_mq_array, varia, palette_item);
                            csshero_replace_var_from_array(global_classes, varia, palette_item)
                            if (csshero_variables[varia]) {
                                delete csshero_variables[varia];
                            }
                        }
                    }
                }
                if (v && r) {
                    csshero_replace_var_from_array(live_array, v, r)
                    csshero_replace_var_from_array(csshero_variables, v, r);
                    csshero_replace_var_from_array(live_mq_array, v, r);
                    csshero_replace_var_from_array(global_classes, v, r)
                    if (csshero_variables[v]) {
                        delete csshero_variables[v];
                    }
                    csshero_prepare_classes(global_classes);
                    csshero_prepare_variables(csshero_variables)
                    var editing = $('.csshero-code-wrap').attr('data-editing_element');
                    if (editing)
                        csshero_click_on_editable('', e, editing)
                }
            }
        }
        for (style_el in live_array) {
            render_single_block(style_el)
        }
        render_mq_styles();
        csshero_save_step('variable', '', v, r)
    }).on('click', '.csshero-var-actions-trigger', function() {
        var varwrap = $(this).closest('.csshero-var-wrap');
        varwrap.removeClass('show_palette');
        varwrap.toggleClass('modifying-var');
        $(this).toggleClass('open')
        var varval = varwrap.find('input');
        if (varval.attr('disabled') == 'disabled') {
            varval.removeAttr('disabled')
        }
        if ($(this).hasClass('open')) {
            varwrap.find('.var-color-prev').addClass('csshero-picker-trigger');
            csshero_load_pickers(varwrap)
        } else {
            var val = varwrap.attr('data-var-original-value');
            if (varwrap.find('.csshero-val').val() != val) {
                varwrap.find('.csshero-val').val(val)
                varwrap.find('.csshero-var-action-edit').trigger('click')
            }
        }
    }).on('click', '.csshero-var-action-edit', function(e) {
        var els = $(this).closest('.csshero-var-wrap').find('.csshero-val');
        var wrap = $(this).closest('.csshero-var-wrap');
        if (wrap.hasClass('while-error')) {
            alert("There's an error");
            return;
        }
        var vval = wrap.find('.csshero-val').val()
        var vvar = wrap.find('.csshero-var').val()
        if (!vval || vval == ' ' || !vvar || vvar == ' ') {
            alert("There's something wrong here")
            return;
        }
        var varname = '@' + vvar;
        var original_varname = wrap.attr('data-var-wrap-name');
        if (original_varname && varname != original_varname) {
            csshero_rename_var_from_array(live_array, original_varname, varname)
            csshero_rename_var_from_array(csshero_variables, original_varname, varname);
            csshero_rename_var_from_array(live_mq_array, original_varname, varname);
            csshero_rename_var_from_array(global_classes, original_varname, varname)
            $.each(csshero_variables, function(i, v) {
                if (v.var_parent == original_varname)
                    delete csshero_variables[i];
            });
            delete csshero_variables[original_varname];
        }
        var varval = wrap.find('.csshero-val').val();
        var varval = varval.replace(/"/g, "'");
        if (varval.indexOf('rgba(') > -1) {
            var rgba_color = varval.slice(varval.indexOf('(') + 1, varval.lastIndexOf(')'))
            if (rgba_color.split(',').length != 4) {
                alert('A RGBA color requires 4 parameters');
                return;
            }
        }
        if (varval.indexOf('rgb(') > -1) {
            var rgb_color = varval.slice(varval.indexOf('(') + 1, varval.lastIndexOf(')'))
            if (rgb_color.split(',').length != 3) {
                alert('A RGB color requires 3 parameters');
                return;
            }
        }
        if (wrap.hasClass('is_color_variable') && !is_color(varval)) {
            showlogger('beware you\'re about to change a color var to a non color var');
        }
        csshero_variables[varname] = {
            'var_prop': varval
        };
        var queried_array = csshero_return_actual_state_array();
        csshero_prepare_variables(csshero_variables)
        for (style_el in live_array) {
            render_single_block(style_el)
        }
        render_mq_styles();
        csshero_prepare_classes(global_classes);
        var editing = $('.csshero-code-wrap').attr('data-editing_element');
        if (editing)
            csshero_click_on_editable('', e, editing)
        csshero_save_step('variable', '', varname, varval)
    }).on('click', '.csshero-btn-add-new-class', function() {
        alert('to be refined');
        return;
        var new_class_name = '.class-' + Math.ceil(Math.random() * 100) + '()';
        csshero_append_class_structure('', new_class_name);
        global_classes[new_class_name] = {
            'cla_cat': '',
            'cla_desc': '',
            'cla_prop': '',
            'cla_type': 'user_cla'
        };
        $('.class-wrap[data-original_claname="' + new_class_name + '"] .send-to-editor').trigger('click')
    }).on('keyup', '.csshero-service-src', csshero_throttle(function(e) {
        var t = $(this);
        var looker = t.val();
        var searchable = t.attr('data-search-item')
        var block = t.closest('.csshero-service-block');
        var scroller = block.find('.csshero-service-scroller');
        var counter = t.closest('.csshero-search-in-service-wrap').find('.counter');
        var salsa = block.find(searchable + ':contains(' + looker + ')');
        block.find('.matcher').removeClass('matcher');
        scroller.animate({
            scrollTop: 0
        }, 0).trigger('ps-scroll-y');
        if (!salsa || !salsa.length || looker == '' || looker == ' ') {
            counter.html(0)
            return;
        }
        var len = salsa.length;
        counter.html(len)
        salsa.each(function() {
            $(this).addClass('matcher')
        }).promise().done(function() {
            var nav = t.closest('.csshero-search-in-service-wrap').find('.nav');
            nav.attr('data-set', 0);
            nav.find('.next').trigger('click');
        })
        return;
    }, 700)).on('click', '.csshero-search-in-service-wrap .nav span', function() {
        var nav = $(this).closest('.nav');
        var set = parseInt(nav.attr('data-set'));
        var max = $(this).closest('.csshero-search-in-service-wrap').find('.counter').text() - 1;
        var anchor = nav.attr('data-anchor')
        var block = $(this).closest('.csshero-service-block');
        var scroller = block.find('.csshero-service-scroller');
        scroller.animate({
            scrollTop: 0
        }, 0).trigger('ps-scroll-y');
        var scroller_t = scroller.offset().top;
        var first_match = block.find('.matcher').eq(set);
        var first_match = first_match.closest(anchor);
        var first_match_top = first_match.offset().top;
        var first_match_top = first_match_top - scroller_t;
        scroller.animate({
            scrollTop: first_match_top
        }, 50).trigger('ps-scroll-y');
        if ($(this).is('.next'))
            var new_set = set + 1;
        if ($(this).is('.prev'))
            var new_set = set - 1;
        if (new_set > max)
            var new_set = 0;
        if (new_set < 0)
            var new_set = max;
        nav.attr('data-set', new_set);
    })
    $(document).on('click', '.tree-el', function(z) {
        var e = $(this).attr('editableclass');
        var s = $(this).attr('editablesuggestion');
        csshero_click_on_editable('', z, e, s)
    }).on('click', '.csshero-open-font-manager', function() {
        $('.open-overlay[data-overlay-service="font-manager"]').trigger('click')
    }).on('click', '.open-overlay', function() {
        var t = $(this);
        var s = $(this).attr('data-overlay-service');
        var p = $('.csshero-overlay-service .overlay-inner[data-service="' + s + '"]');
        $('.csshero-overlay-service').show();
        $('.csshero-overlay-service .overlay-inner').hide();
        p.show();
        if (s == 'font-manager')
            csshero_prepare_font_manager(stored_extra_gfonts);
        p.find('.overlay-scroller').perfectScrollbar();
        $('.overlay-footer').show();
    }).on('click', '.close-overlay', function() {
        $('.csshero-overlay-service').hide();
        $('.csshero-stack-options-modify-box-wrap').remove();
    })
    $(document).on('click', '.csshero-hide-interstitial', function() {
        $(this).closest('.csshero-service-block').removeClass('show-interstitial')
    }).on('click', '.csshero-btn-add-new-custom-tree-el', function() {
        var wra = $(this).closest('.csshero-custom-tree-add');
        var name = wra.find('.add-new-custom-tree-el-name').val();
        var sele = wra.find('.add-new-custom-tree-el-selector').val();
        var queried_array = csshero_return_actual_state_array();
        $('.add-selector-helper').empty();
        if (live_paths[sele]) {
            var is_already_available = true;
        } else {
            var is_already_available = false;
        }
        if (!name || name == ' ')
            var name = sele;
        if (!is_already_available && sele && sele != ' ') {
            live_paths[sele] = {
                path: sele,
                desc: name
            };
            csshero_design_custom_tree_els();
            csshero_apply_custom_ediandsugg(live_paths)
        }
        csshero_enrich_tree()
        wra.find('input,textarea').val('')
        $('.csshero-show-add-tree-el').trigger('click')
        showlogger('<span class="code">' + sele + '</span> is now editable!')
        csshero_save_step('path', sele, name)
        $(this).closest('.csshero-service-block').removeClass('show-interstitial')
    }).on('click', '.tree-el-edit', function(e) {
        var wra = $(this).closest('.tree-el').attr('editableclass');
        var sug = $(this).closest('.tree-el').attr('editablesuggestion')
        open_modify_selector(wra, sug)
    }).on('click', '.tree-el-delete', function(e) {
        e.stopPropagation();
        var wra = $(this).closest('.tree-el').attr('editableclass');
        var sug = $(this).closest('.tree-el').attr('editablesuggestion')
        var element_has_customisations = false;
        if (live_array[wra] && !$.isEmptyObject(live_array[wra]))
            element_has_customisations = true;
        for (y in live_mq_array) {
            var mq_live_props = live_mq_array[y]['pr'][wra];
            if (mq_live_props && !$.isEmptyObject(mq_live_props)) {
                element_has_customisations = true;
            }
        }
        if (!element_has_customisations) {
            if (confirm('Delete ' + wra + ' selector?')) {
                delete live_paths[wra];
                csshero_apply_custom_ediandsugg(live_paths)
                csshero_design_custom_tree_els();
                showlogger('<span class="code">' + wra + '</span> deleted');
                csshero_save_step('delete-path', wra)
            }
        } else {
            alert('Sorry, ' + wra + ' is customised, remove all customisations before deleting the selector');
        }
    }).on('keyup', '.add-new-custom-tree-el-selector', function() {
        var v = $(this).val();
        var s = $('.add-selector-helper')
        if (v.indexOf(',') > -1 || v.indexOf(';') > -1) {
            var c = "use the multiple selectors field"
        } else {
            try {
                var c = $(v, cssheroframe).length
            } catch (err) {}
            if (c && v) {
                if (v.length > 0) {
                    var c = c + ' on this page';
                } else {
                    var c = 'invalid selector';
                }
            } else {
                var c = '0 elements on this page';
            }
        }
        s.html(c);
    })
    $('#csshero-edits-holder', cssheroframe).empty();
    for (var f in live_array) {
        render_single_block(f)
    }
    render_mq_styles();
    csshero_save_step('start');
    function load_unsplash_images(container, page, navigate) {
        var query = $('.csshero-unsplash-search input').val();
        var filter = $('.csshero-unsplash-sorter .cur').text()
        var how_many = 10;
        if (!page)
            var page = 1;
        container.empty();
        var api = 'https://api.unsplash.com/photos';
        var url = api + '/?client_id=' + unsplash_app_id + '&per_page=' + how_many + '&page=' + page + '&order_by=' + filter;
        if (query !== '') {
            var api = 'https://api.unsplash.com/search/photos';
            var url = api + '/?client_id=' + unsplash_app_id + '&per_page=' + how_many + '&query=' + query + '&page=' + page + '&order_by=' + filter;
        }
        $.getJSON(url, function(data) {
            if (query !== '') {
                data = data.results;
            }
            for (var elem in data) {
                var img = data[elem];
                var id = img['id'];
                var color_item = img['color'];
                var color_item = '<span data-id="' + id + '" data-color="' + color_item + '" class="csshero-unsplash-img-color" style="background-color:' + color_item + ';"></span>';
                var username = img['user']['username'];
                var username = '<a target="_blank" href="//unsplash.com/@' + username + '?utm_source=css-hero&utm_medium=referral&utm_campaign=api-credit" class="username">@' + username + '</a>';
                var thumb = img['urls']['thumb']
                var chooser = '<div class="unsplash-chooser"><b>Choose size</b>';
                for (var s in img['urls']) {
                    var l = s;
                    if (s == 'raw')
                        var l = 'Extra-large'
                    if (s == 'full')
                        var l = 'Large';
                    if (s == 'regular')
                        var l = 'Medium';
                    if (s == 'thumb')
                        var l = 'Extra-small';
                    if (s == 'small')
                        var l = 'Small';
                    chooser += '<span data-ping="' + img['links']['download_location'] + '" data-link="' + img['urls'][s] + '">' + l + '</span>'
                }
                chooser += '</div>';
                var chooser = '<span class="unsplash-zoom" data-img-id="' + id + '" data-preview="' + img['urls']['small'] + '">' + chooser + '</span>';
                container.append('<div class="csshero-unsplash-img" style="background-image:url(' + thumb + ');">' + chooser + username + color_item + '</div>')
            }
        }).done(function() {
            container.show().perfectScrollbar();
            if (navigate) {
                if (navigate == 'next') {
                    var img_trigger = container.find('.csshero-unsplash-img').eq(0);
                } else {
                    var img_trigger = container.find('.csshero-unsplash-img').length;
                    var img_trigger = container.find('.csshero-unsplash-img').eq(img_trigger - 1);
                }
                img_trigger.find('.unsplash-zoom').trigger('click')
            }
        })
    }
    $(document).on('click', '.unsplash-zoom', function() {
        var wrap = $('.csshero-unsplash-loader-wrap');
        var img_wrap = $(this).closest('.csshero-unsplash-img');
        var img = $(this).attr('data-preview');
        var actions = $(this).html();
        var actions = actions + '<span class="unsplash-apply-img">Apply Image</span>';
        $('.csshero-unsplash-img.zoomed').removeClass('zoomed');
        img_wrap.addClass('zoomed');
        $('.csshero-unsplash-zoom-img').remove();
        var structure = '\<div class="csshero-unsplash-zoom-img">\
       <div class="unsplash-zoom-close"></div>\
       <div class="unsplash-zoom-in">\
        <div class="unsplash-zoom-nav zoom-next"></div>\
        <div class="unsplash-zoom-nav zoom-prev"></div>\
        <div class="unsplash-zoom-img" style="background-image:url(' + img + ');">\
       </div>\
       <div class="unsplash-zoom-actions">' + actions + '</div>\
       </div>\
      </div>\
  \
  ';
        wrap.append(structure);
    }).on('click', '.unsplash-apply-img', function() {
        $('.unsplash-zoom-actions').toggleClass('show-sizes')
    }).on('click', '.unsplash-zoom-close', function() {
        $('.csshero-unsplash-zoom-img').remove();
    }).on('click', '.unsplash-zoom-nav', function() {
        var loader = $('.csshero-unsplash-loader');
        if ($(this).is('.zoom-next')) {
            var destiny = $('.csshero-unsplash-img.zoomed').next('.csshero-unsplash-img');
            var page = parseInt(loader.attr('data-page')) + 1;
            var nav_trigger = 'next';
        } else {
            var destiny = $('.csshero-unsplash-img.zoomed').prev('.csshero-unsplash-img');
            var page = parseInt(loader.attr('data-page')) - 1;
            var nav_trigger = 'prev';
        }
        if (destiny.length > 0) {
            destiny.find('.unsplash-zoom').trigger('click')
        } else {
            if (page < 1 && nav_trigger == 'prev')
                return;
            loader.attr('data-page', page)
            load_unsplash_images(loader, page, nav_trigger);
        }
    })
    $(document).on('click', '.csshero-load-images', function() {
        var widget = $(this).closest('.csshero-editor-block-widget');
        var loader = $('.csshero-unsplash-loader');
        var wrapper = $('.csshero-bg-img-wrapper');
        if (!widget.hasClass('show-img-loader')) {
            widget.addClass('show-img-loader')
            if (loader.html() == '') {
                load_unsplash_images(loader);
            }
            $('.csshero-unsplash-zoom-img').remove();
            csshero_scrollto(widget)
        } else {
            widget.removeClass('show-img-loader')
        }
        clean_interface(widget)
    }).on('click', '.csshero-unsplash-src', function() {
        load_unsplash_images($('.csshero-unsplash-loader'));
    }).on('click', '.unsplash-chooser > span', function() {
        var is_important = '';
        if ($(this).closest('.csshero-editor-block-widget').hasClass('important-widget')) {
            var is_important = '!important';
        }
        var img = $(this).attr('data-link');
        var url = 'url(' + img + ')' + is_important;
        var input = $(this).closest('.csshero-editor-block-widget').find('.csshero-input');
        input.val(url).trigger('keyup');
        var ping = $(this).attr('data-ping')
        var url = ping + '/?client_id=' + unsplash_app_id;
        $.ajax({
            url: url,
            success: function(data) {}
        });
    }).on('click', '.csshero-unsplash-pagination > span', function() {
        var loader = $('.csshero-unsplash-loader');
        var current_page = parseInt(loader.attr('data-page'));
        if ($(this).is('.prev')) {
            var next_page = current_page - 1;
        } else {
            var next_page = current_page + 1;
        }
        if (next_page <= 1)
            var next_page = 1;
        loader.attr('data-page', next_page);
        load_unsplash_images(loader, next_page);
    }).on('keyup', '.csshero-unsplash-search input', function(e) {
        if ($(this).val() == '' || e.keyCode == 13)
            load_unsplash_images($('.csshero-unsplash-loader'));
    }).on('click', '.csshero-unsplash-sorter > span', function() {
        $('.csshero-unsplash-sorter span.cur').removeClass('cur');
        $(this).addClass('cur')
        load_unsplash_images($('.csshero-unsplash-loader'));
    }).on('click', '.csshero-unsplash-img-color', function() {
        var name = $(this).attr('data-id')
        var name = "@color-" + name;
        var v = $(this).attr('data-color')
        if (confirm('Do you want me to create a color variable with this color(' + v + ')?')) {
            if (csshero_variables[name]) {
                alert('variable ' + name + ' is already defined');
            } else {
                csshero_variables[name] = {
                    var_prop: v,
                    var_type: "color_var"
                }
                csshero_save_step('variable', '', name, v)
                csshero_prepare_variables(csshero_variables)
            }
        }
    }).on('click', '.csshero-load-gradients', function() {
        var t = $(this);
        clean_interface(t)
        if (t.hasClass('open-grad')) {
            $('.open-grad').removeClass('open-grad')
            return;
        }
        var widget = t.closest('.csshero-editor-block-widget')
        var val = t.closest('.csshero-editor-block-widget').find('.csshero-input').val();
        csshero_scrollto(widget)
        t.addClass('open-grad');
        var type = 'linear';
        var val_l = 'linear-gradient(to top,white,black)';
        var val_r = 'radial-gradient(farthest-corner,white,black)';
        if (val.indexOf('radial-gradient') > -1) {
            var val_r = val;
            var type = 'radial'
        }
        if (val.indexOf('linear-gradient') > -1) {
            var val_l = val;
        }
        widget.append('<div class="csshero-gradient-super-wrap " data-show-type="' + type + '"><div class="csshero-gradient-tabber"><span data-t="linear">Linear</span><span data-t="radial">Radial</span><span class="close-bg-img-tab "></span></div><div class="csshero-gradient-wrapper csshero-gradient-wrapper-linear">' + csshero_gradient_builder(val_l) + '</div></div>')
        widget.find('.csshero-gradient-super-wrap').append('<div class="csshero-gradient-wrapper csshero-gradient-wrapper-radial">' + csshero_gradient_builder(val_r) + '</div>')
        csshero_load_pickers();
    }).on('click', '.csshero-gradient-tabber span', function() {
        var t = $(this);
        var type = t.attr('data-t');
        var w = t.closest('.csshero-gradient-super-wrap');
        w.attr('data-show-type', type)
    }).on('click', '.csshero-show-img-tabber span:not(.close-bg-img-tab)', function() {
        var tab = $(this).attr('data-tab')
        $('.img-upload-tab').hide();
        $('.img-upload-tab[data-tab-send=' + tab + ']').show();
        $('.csshero-show-img-tabber span').removeClass('cur');
        $(this).addClass('cur')
        if (tab == 'uploads' && $(this).is('.cur')) {
            $('.csshero-bg-img-wrapper  .csshero-media-img img').each(function() {
                $(this).attr('src', $(this).attr('data-src'))
            })
            $('.csshero-upload-img-browse').perfectScrollbar();
        }
        return;
    })
});
window.send_to_editor = function(html) {
    html = html.toString();
    var matches = html.match(/src="(.+)\" alt/);
    imgurl = matches[1];
    var image_input = $('.csshero-editor-block-widget[data-property-name="' + window.CurrPropertySlug + '"] .csshero-input')
    image_input.val('url(' + imgurl + ')').trigger('keyup');
    $('.csshero-load-images').trigger('click')
}
$(document).on('keydown', function(e) {
    var evtobj = window.event ? event : e;
    var body = $('#csshero-body');
    var focused = $('#csshero-body input:focus').length;
    var focused_mirror = $('.CodeMirror-focused').length;
    if (evtobj.keyCode == 72 && evtobj.metaKey)
        e.preventDefault();
    if (!focused && !focused_mirror) {
        if (evtobj.keyCode == 90 && evtobj.ctrlKey)
            $('.csshero-service-item:not(.disabled)[data-service="quick-back"]').trigger('click');
        if (evtobj.keyCode == 90 && evtobj.metaKey)
            $('.csshero-service-item:not(.disabled)[data-service="quick-back"]').trigger('click');
        if (evtobj.keyCode == 88 && evtobj.ctrlKey)
            $('.csshero-service-item:not(.disabled)[data-service="quick-forward"]').trigger('click');
        if (evtobj.keyCode == 88 && evtobj.metaKey)
            $('.csshero-service-item:not(.disabled)[data-service="quick-forward"]').trigger('click');
    }
    if (evtobj.keyCode == 72 && evtobj.metaKey) {
        $('#csshero-body').toggleClass('csshero-hide-editor');
        return false;
    }
    if (evtobj.keyCode == 72 && evtobj.ctrlKey) {
        $('#csshero-body').toggleClass('csshero-hide-editor');
        return false;
    }
    if (evtobj.keyCode == 83 && evtobj.ctrlKey) {
        e.preventDefault();
        $('.csshero-save-action.csshero-save').trigger('click');
        return false;
    }
    if (evtobj.keyCode == 83 && evtobj.metaKey) {
        e.preventDefault();
        $('.csshero-save-action.csshero-save').trigger('click');
        return false;
    }
    if (evtobj.keyCode == 32) {
        if (focused || focused_mirror)
            return;
        var probe = $('.focus-probe.current-probe');
        var scope = probe.attr('data-probe-scope');
        var el = $('.csshero-currently-hovered', cssheroframe);
        if (!el.length)
            return;
        el.trigger('mousedown');
        el.trigger('mouseup')
    }
}).on('keydown', '.csshero-numeric-widget .csshero-input', function(e) {
    var evtobj = window.event ? event : e;
    var kc = evtobj.keyCode;
    if (evtobj.shiftKey) {
        if (kc == 38 || kc == 40) {
            e.preventDefault();
            var val = $(this).val();
            var vvv = parseFloat(val);
            var uni = val.replace(vvv, '');
            if (kc == 40) {
                var fin = vvv - 10;
            } else {
                var fin = vvv + 10;
            }
            if (fin < 0)
                var fin = 0;
            $(this).val(fin + uni)
        }
    } else {
        if (kc == 38 || kc == 40) {
            e.preventDefault();
            var trigger = $(this).closest('.csshero-input-wrap').find('.numeric-controls .plus')
            if (kc == 40)
                var trigger = $(this).closest('.csshero-input-wrap').find('.numeric-controls .minus')
            trigger.trigger('click')
        }
    }
}).on('mouseenter', '.csshero-code-wrap .CodeMirror .cm-qualifier', function() {
    var t = $(this);
    var v = t.text();
    var class_tester = stored_classes.join(' ');
    if (class_tester.indexOf(v + '(') > -1) {
        t.addClass('triggerable-class').attr('data-class-scroll', v)
    } else {
        t.removeClass('triggerable-class')
    }
}).on('mouseenter', '.csshero-code-wrap .CodeMirror .cm-variable-2', function() {
    var t = $(this);
    var v = t.text();
    if (csshero_variables[v]) {
        t.addClass('triggerable-var');
    } else {
        t.removeClass('triggerable-var');
    }
}).on('click', '.triggerable-var', function() {
    $('.csshero-service-item[data-service="variables"]:not(.cur)').trigger('click')
}).on('click', '.triggerable-class', function() {
    $('.csshero-mode-classes:not(.active)').trigger('click')
    var c = $(this).attr('data-class-scroll');
    var e = $('.class-wrap[data-original_claname^="' + c + '("]')
    var w = $('.csshero-classes-panel');
    w.scrollTop(0)
    var t = e.position().top - 5;
    w.animate({
        scrollTop: t
    }, 100);
}).on('mouseenter', '.toggle-zoom', function() {
    var el = $(this).attr('data-zoomable');
    var el = $(el + ':in-viewport', cssheroframe).eq(0);
    csshero_zoom_on_element(el)
}).on('mouseenter', '.tree-in', csshero_throttle(function(e) {
    var el = $(this).closest('.tree-el').attr('editableclass');
    var el = $(el + ':in-viewport', cssheroframe).eq(0);
    csshero_zoom_on_element(el)
}, 40)).on('mouseleave', '.toggle-zoom', function() {
    $('#csshero-zoom-view').remove();
}).on('click', '.atom-sugg', function() {
    $('#csshero-body').toggleClass('show-lister')
}).on('click', '.csshero-inspector-help', function() {
    $('.csshero-code-wrap-expander.insp').find('.open').removeClass('open')
    $(this).toggleClass('visible');
    if ($(this).hasClass('visible')) {
        localStorage.removeItem('CSSHERO-HIDES-INSPECTOR-HINTS')
    } else {
        localStorage.setItem('CSSHERO-HIDES-INSPECTOR-HINTS', true)
    }
}).on('mouseleave', '.inspector-themes-wrap', function() {
    var q = $(this).find('.cur').attr('data-theme-name');
    var nt = csshero_return_inspector_style(q)
    $('.inspector-custom-theme').remove();
    $('#csshero-body').append(nt)
    $('.csshero-inspector-themes.open').trigger('click');
}).on('click', '.csshero-inspector-themes', function(e) {
    $('.csshero-code-wrap-expander.insp').find('.visible').removeClass('visible')
    $(this).toggleClass('open')
}).on('mouseenter', '.inspector-select-theme', function(e) {
    $('.inspector-custom-theme').remove();
    var theme = $(this).attr('data-theme-name');
    if (theme != 'default') {
        var nt = csshero_return_inspector_style(theme)
        $('#csshero-body').append(nt)
    }
}).on('click', '.inspector-select-theme', function(e) {
    e.stopPropagation();
    var theme = $(this).attr('data-theme-name');
    if (theme != 'default') {
        localStorage.setItem('CSSHERO-INSPECTOR-THEME', theme)
    } else {
        localStorage.removeItem('CSSHERO-INSPECTOR-THEME')
    }
    $('.inspector-select-theme.cur').removeClass('cur')
    $(this).addClass('cur')
    $('.csshero-inspector-themes').removeClass('open')
}).on('click', '.csshero-trigger-inspector', function(evt) {
    close_service_panels()
    $('.mq-mode-expander .csshero-service-bar-item-mq[data-mq="all"]').trigger('click')
    if ($('#inspector-wrapper').length == 0) {
        $('.inspector-custom-theme').remove();
        var i_theme = localStorage.getItem('CSSHERO-INSPECTOR-THEME');
        if (i_theme) {
            var nt = csshero_return_inspector_style(i_theme)
            $('#csshero-body').append(nt)
        }
        $('#csshero-body').addClass('inspector-on').removeClass('show-bottom-navi')
        var y = csshero_return_styles('less', true, true);
        var y = y.replace(/\};/g, '}')
        var y = y.split('{').join('{\n').split('}').join('\n}\n').split(';').join(';\n')
        var y = y.split('\n\n').join('\n');
        var y = y.split('}@').join('}\n@');
        var y = y.replace(/  /g, ' ')
        var y = y.replace(/\) {/g, '){')
        var y = y.replace(/\n\ \*/g, ' *')
        var qq = csshero_return_styles('css')
        var opts = '<div class="csshero-code-wrap-expander insp">\
      <ul>\
       <li class="csshero-change-editor-font-size plus">A+</li>\
       <li class="csshero-change-editor-font-size minus">A-</li>\
       <li class="csshero-inspector-themes"><div class="inspector-themes-wrap"></div></li>\
       <li class="csshero-inspector-help"><div class="inspector-help-box">' + inspector_hints + '</div></li>\
      </ul>\
     </div>';
        var newe = '<div id="inspector-wrapper"><span class="csshero-inspector-laydown"></span><span class="inspector-dock"></span><span class="inspector-close inspector-shutdown"></span><div class="csshero-inspector-head">' + inspector_logo + '</div><div class="inspector-code-wrap"><div class="inspector-selector-add"></div><textarea id="inspector-code">' + y + '</textarea></div>' + opts + '<div class="inspector-export-actions"><div class="area"><label>Export</label><span class="inspector-export inspector-export-css">CSS</span><a class="inspector-export inspector-export-json">Project</a></div><div class="area"><label>Import</label><span class="inspector-import">Import Project</span><div class="inspector-import-box"><input type="file" accept=".json" class="csshero-import-settings" name="csshero-import-settings" /></div></div></div><div class="inspector-actions"><span class="inspector-cancel inspector-shutdown">Cancel</span><span class="inspector-save">Save & Publish</span></div></div>';
        $('.csshero-editor-container').append(newe);
        var box = $('#inspector-wrapper').find('.inspector-themes-wrap')
        box.empty().append('<span class="inspector-select-theme" data-theme-name="default">Default</span>');
        for (var v in inspector_themes) {
            if (v == i_theme) {
                var selected = 'cur';
            } else {
                var selected = '';
            }
            box.append('<span class="inspector-select-theme ' + selected + '" data-theme-name="' + v + '">' + v + '</span>');
        }
        var inspi = CodeMirror.fromTextArea(document.getElementById('inspector-code'), codemirror_options);
        inspi.setOption("lineNumbers", true)
        var requested_font_size = localStorage.getItem('CSSHERO-CODE-EDITOR-FONT-SIZE');
        if (requested_font_size && requested_font_size != '') {
            $('#inspector-wrapper .CodeMirror').css('font-size', requested_font_size)
        }
        enable_hints(inspi)
        inspi.refresh();
        for (var i = 0; i < inspi.lineCount(); i++) {
            inspi.indentLine(i);
        }
        $('#inspector-wrapper .CodeMirror-wrap').trigger('keyup')
        $('#csshero-edits-holder style', cssheroframe).each(function() {
            var y = $(this)[0];
            y.disabled = true;
        })
        $('#csshero-edits-holder', cssheroframe).append('<style id="inspector-style">' + qq + '</style>')
        if (!localStorage.getItem('CSSHERO-HIDES-INSPECTOR-HINTS')) {
            setTimeout(function() {
                $('.csshero-inspector-help').addClass('visible')
            }, 600)
        }
        if (localStorage.getItem('CSSHERO-INSPECTOR-LAYDOWN')) {
            $('.csshero-inspector-laydown').trigger('click')
        }
        if ($('#csshero-body').hasClass('detached-editor')) {
            csshero_get_editor_render_options('all')
        }
        var curel = $('.csshero-code-wrap').attr('data-editing_element');
        if (curel) {
            var ello = $(curel, cssheroframe);
            csshero_click_on_editable('', evt, curel)
        }
        csshero_make_inspector_resizable();
    } else {
        $('.inspector-shutdown').trigger('click')
    }
}).on('click', '.inspector-on .csshero-trigger-wysiwyg', function() {
    $('.inspector-shutdown').trigger('click')
}).on('click', '.inspector-dock', function() {
    var e = $('.csshero-editor-container');
    if ($(this).hasClass('docked')) {
        var h = -10
        var w = -10
        $(this).removeClass('docked')
    } else {
        var h = e.outerHeight() - 40;
        var w = e.outerWidth() - 40;
        $(this).addClass('docked')
    }
    e.css({
        'left': -w + 'px',
        'top': 'auto',
        'bottom': -h + 'px'
    })
}).on('click', '.inspector-import', function() {
    $(this).closest('.area').toggleClass('show-import')
}).on('mouseenter', '.inspector-export-json', function() {
    var jsn = $('.csshero-step.cur').data('step-data');
    var step_time = $('.csshero-step.cur').attr('data-step-time')
    var clean_jsn = csshero_strip_stuff_from_saved_array(JSON.parse(jsn));
    var clean_jsn = JSON.stringify(clean_jsn)
    $(this).attr('download', 'csshero-' + step_time + '.json').attr('href', 'data:text/plain;charset=UTF-8,' + encodeURIComponent(clean_jsn));
}).on('click', '.inspector-export-css', function() {
    var css = $('#inspector-style', cssheroframe).text();
    copyToClipboard(css)
    alert('CSS copied to clipboard')
}).on('click', '.inspector-shutdown', function(e) {
    if (!$(this).is('.inspector-cancel') && $('#inspector-wrapper').hasClass('may-be-unsaved')) {
        csshero_inspector_save();
    }
    csshero_shutdown_inspector(e);
}).on('keydown cut paste', '#inspector-wrapper .CodeMirror-wrap', function(e) {
    $('.inspector-actions').addClass('not-rendered-yet');
    $('#inspector-wrapper').addClass('may-be-unsaved')
}).on('cut paste', '#inspector-wrapper .CodeMirror-wrap', function(e) {
    $(this).trigger('keyup')
}).on('keyup', '#inspector-wrapper .CodeMirror-wrap', csshero_throttle(function(e) {
    var inspector_css = '';
    var inspector_editor_el = $('#inspector-wrapper').find('.CodeMirror');
    var inspector_editor = inspector_editor_el.get(0).CodeMirror;
    var inspector_less = inspector_editor.getValue();
    var inspector_less = inspector_less.trim();
    $('.inspector-actions').removeClass('not-rendered-yet');
    inspector_editor_el.find('.CodeMirror-linenumber.error_line').removeClass('error_line');
    less.render(return_flat_vars() + return_flat_global_classes() + ' ' + inspector_less, '', function(render_err, render_out) {
        if (!render_err) {
            if (render_out) {
                inspector_css = render_out.css;
                $('#csshero-edits-holder #inspector-style', cssheroframe).html(inspector_css)
            }
            $('.inspector-actions').removeClass('while-error')
        } else {
            console.log(render_err)
            var error_line = render_err.line - 1;
            inspector_editor_el.find('.CodeMirror-linenumber:textEquals("' + error_line + '")').addClass('error_line');
            $('.inspector-actions').addClass('while-error')
        }
    });
}, 500)).on('mousedown', '.inspector-save', function() {
    $(this).addClass('saving')
}).on('mouseup', '.inspector-save', function() {
    csshero_inspector_save();
    var t = $(this);
    setTimeout(function() {
        $('.csshero-save').trigger('click')
        t.removeClass('saving')
        $('#inspector-wrapper').removeClass('may-be-unsaved')
    }, 500)
}).on('click', '.inspector-selector-add .bubble-actions > span', function() {
    if ($(this).is('.add')) {
        var ediclass = $(this).attr('data-sel');
        var cm = $('#inspector-wrapper .CodeMirror')[0].CodeMirror;
        var doc = cm.getDoc();
        var cursor = doc.getCursor();
        var line = doc.getLine(cursor.line);
        var pos = {
            line: cm.lineCount(),
            ch: line.length - 1
        }
        doc.replaceRange('\n' + ediclass + '{\n \n}', pos);
        var marked = []
        for (cursor = cm.getSearchCursor(ediclass + '{'); cursor.findNext(); ) {
            marked.push(cm.markText(cursor.from(), cursor.to()));
            cm.setSelection(cursor.from(), cursor.to());
        }
    }
    $('.inspector-selector-add').empty()
}).on('click', '.csshero-inspector-laydown', function() {
    $('#csshero-body').toggleClass('inspector-laydown');
    $('.csshero-code-wrap').attr('data-editing_element', 'body').attr('data-editing_element_sugg', 'body');
    $('.show-theme-code').trigger('click')
    if ($('#csshero-body').hasClass('inspector-laydown')) {
        localStorage.setItem('CSSHERO-INSPECTOR-LAYDOWN', 'yes')
    } else {
        localStorage.removeItem('CSSHERO-INSPECTOR-LAYDOWN')
    }
    var miro = $('#inspector-wrapper').find('.CodeMirror').get(0).CodeMirror;
    miro.refresh();
})
function csshero_clear_interface() {
    $('.csshero-service-item.cur').trigger('click');
    $('.csshero-selectors-list-inner').show().empty()
    $('#csshero-frame-canvas').empty();
    $('#csshero-body:not([data-mq-mode="all"]) .csshero-service-bar-item-mq[data-mq="all"]').trigger('click')
    $('.csshero-selector-bar').empty();
    $('#csshero-body').addClass('hide-code').removeAttr('data-code-mode').removeClass('editing-element').removeClass('expand-mq-modes')
}
function csshero_zoom_on_element(t) {
    var c = 'csshero-currently-hovered';
    if (!t.is('.' + c)) {
        $('.focus-probe').remove()
        $('.' + c, cssheroframe).removeClass(c)
        t.addClass(c)
        csshero_hover_element(t)
    }
    return;
}
function click_on_class_element(cl) {
    var the_props = global_classes[cl]['cla_prop'];
    var the_props = the_props.trim();
    var the_props = cl + '{' + the_props + '}'
    var nino = csshero_string_to_json(the_props)
    var nino = nino[cl];
    var c = $('.csshero-code-wrap')
    var temp_class_object = {}
    temp_class_object[cl] = nino
    var last_clicked_true_el = c.attr('data-editing_element');
    var last_clicked_true_el_sugg = c.attr('data-editing_element_sugg');
    c.attr('data-editing_element', cl).attr('data-editing_element_sugg', cl);
    $('.csshero-active-tree-el').removeClass('csshero-active-tree-el');
    $('#csshero-body').removeClass('show-lister')
    $('#csshero-body').addClass('editing-element').data('class-properties', temp_class_object).addClass('scanning-for-classes').attr('last_clicked_true_el', last_clicked_true_el).attr('last_clicked_true_el_sugg', last_clicked_true_el_sugg);
    var new_props = csshero_json_to_string(temp_class_object, cl)
    csshero_draw_wysiwyg(temp_class_object, cl, cl)
    csshero_draw_code_editor(new_props, eddie)
    $('.code-wrap-selector > span').attr('contenteditable', 'true');
}
function csshero_make_inspector_resizable() {
    var t = $('.csshero-editor-container');
    if (t.length > 0) {
        t.addClass('ui-widget-content').resizable({
            minWidth: 310,
            minHeight: 250,
            start: function(event, ui) {
                $(this).addClass('resizing-editor')
                var o = t.offset().top;
                t.css('top', o + 'px')
            },
            stop: function() {
                $(this).removeClass('resizing-editor')
                csshero_save_editor_position(t, true);
            }
        });
    }
}
function csshero_save_editor_position(t, resize) {
    var h = t.outerHeight();
    var w = t.outerWidth();
    var l = t.offset().left;
    var u = t.offset().top;
    var pos = 'left:' + l + 'px;';
    var siz = 'width:' + w + 'px; height:' + h + 'px;top:' + u + 'px';
    localStorage.setItem('CSSHERO-INSPECTOR-POSITION', pos)
    if (resize)
        localStorage.setItem('CSSHERO-INSPECTOR-SIZE', siz)
}
function csshero_get_editor_render_options(evt) {
    var siz = localStorage.getItem('CSSHERO-INSPECTOR-SIZE')
    var pos = localStorage.getItem('CSSHERO-INSPECTOR-POSITION')
    var edi = $('.csshero-editor-container')
    var sty = edi.attr('style');
    if (!sty)
        var sty = '';
    if (evt == 'position') {
        edi.attr('style', sty + pos)
    } else {
        edi.attr('style', sty + pos + siz)
    }
}
function csshero_inspector_save() {
    var the_empty_string = '.ale{empty:ale;}';
    var inspector_editor_el = $('#inspector-wrapper').find('.CodeMirror');
    var inspector_editor = inspector_editor_el.get(0).CodeMirror;
    var inspector_less = inspector_editor.getValue();
    var inspector_less = inspector_less.trim();
    var inspector_less = inspector_less.replace(/\n/g, '').replace(/\t/g, '').replace(/  /g, ' ');
    var inspector_less = inspector_less.split('){ }').join('){}');
    var inspector_less = inspector_less.split('){}').join('){' + the_empty_string + '}')
    var general_mqs_rx = /@media screen.*?}}/g;
    var braces_mqs_rx = /\([^)]*\)/g;
    var inspector_less_no_mqs = inspector_less;
    var the_inspector_mega_obj = jQuery.extend(true, {}, default_mqs);
    the_inspector_mega_obj['all'] = {
        'pr': {}
    }
    var insp_mqs = inspector_less.match(general_mqs_rx);
    if (insp_mqs) {
        var mq_order = 0;
        insp_mqs.forEach(function(m) {
            mq_order++;
            var mq_data = m;
            var mq_title = mq_data.split('{')[0];
            var the_new_mq_details = {}
            var new_mq_title = [];
            mq_title.match(braces_mqs_rx).forEach(function(w) {
                var single_mq_dets = w.replace(/\(/g, '').replace(/\)/g, '').replace(/ /g, '').split(':')
                new_mq_title.push(single_mq_dets.join('_'));
                the_new_mq_details[single_mq_dets[0]] = single_mq_dets[1]
            });
            var new_mq_title = new_mq_title.join('_and_')
            var new_mq_details_checker = JSON.stringify(the_new_mq_details);
            var mq_already_exists = false;
            for (var w in live_mq_array) {
                var default_mq_dets = live_mq_array[w]['mq_details']
                if (new_mq_details_checker == JSON.stringify(default_mq_dets)) {
                    console.log(new_mq_details_checker)
                    console.log(JSON.stringify(default_mq_dets))
                    mq_already_exists = w;
                    break;
                }
            }
            if (mq_already_exists) {
                var send_mq_name = mq_already_exists
            } else {
                var send_mq_name = new_mq_title
            }
            if (the_inspector_mega_obj[send_mq_name] && typeof the_inspector_mega_obj[send_mq_name]['pr'] == 'string') {
                var previously_set = the_inspector_mega_obj[send_mq_name]['pr'];
            } else {
                var previously_set = '';
            }
            var original_mq_data = mq_data;
            var mq_data = mq_data.split('{ }').join('{}')
            var mq_data = mq_data.trim().replace(/  /g, ' ').replace(/ {/g, '{')
            var this_mq_data = mq_data.slice(mq_data.indexOf('{') + 1, mq_data.lastIndexOf('}'))
            console.log(previously_set + '|' + this_mq_data)
            var this_mq_data = this_mq_data.replace(the_empty_string, '');
            the_inspector_mega_obj[send_mq_name] = {
                'mq_details': the_new_mq_details,
                'mq-name-stored': send_mq_name,
                'mq-order': mq_order,
                'pr': previously_set + this_mq_data
            }
            inspector_less_no_mqs = inspector_less_no_mqs.replace(original_mq_data, '')
        });
    }
    the_inspector_mega_obj['all']['pr'] = inspector_less_no_mqs
    for (var s in the_inspector_mega_obj) {
        var scope = the_inspector_mega_obj[s];
        scope.computed = {}
        var props = scope.pr;
        if (props && typeof props == 'string') {
            var w = csshero_string_to_json(props, inspector_editor_el);
            for (var y in w) {
                if (s == 'all' && y[0] == '@' && y.indexOf('@import') == -1 && y.indexOf('@media') == -1) {
                    var var_val = w[y];
                    if (is_color(var_val)) {
                        var var_type = "color_var";
                    } else {
                        var var_type = "normal_var";
                    }
                    csshero_variables[y] = {
                        var_prop: var_val,
                        var_type: var_type
                    }
                } else {
                    if (y.indexOf('(@') > -1 || y.indexOf('()') > -1) {
                        var cla_props = [];
                        var clas = w[y];
                        for (var c in clas) {
                            if (c.indexOf('ISCLA') > -1) {
                                var label = '';
                            } else {
                                var label = c + ':'
                            }
                            var dets = clas[c];
                            if (typeof dets == 'object') {
                                var hh = [];
                                for (var d in dets) {
                                    var dets_d = dets[d];
                                    if (d.indexOf('ISCLASS') > -1) {
                                        hh.push(dets_d)
                                    } else {
                                        if (d.indexOf('ISCOMM') > -1) {
                                            hh.push('/* ' + dets_d)
                                        } else {
                                            hh.push(d + ':' + dets_d)
                                        }
                                    }
                                }
                                var dets = hh.join(';') + '}'
                                var l_pos = label.lastIndexOf(':');
                                var label = label.substring(0, l_pos) + '{' + label.substring(l_pos + 1)
                            }
                            cla_props.push(label + dets);
                        }
                        for (var v in global_classes) {
                            var iv = v.split('(')[0]
                            var check = y.split('(')[0]
                            if (iv == check) {
                                if (default_classes_flat.indexOf(check + '(') == -1) {
                                    delete global_classes[v];
                                }
                            }
                        }
                        var second_check = y.split('(')[0];
                        if (default_classes_flat.indexOf(second_check + '(') == -1) {
                            global_classes[y] = {
                                cla_prop: cla_props.join(';'),
                                cla_cat: "my-snippets",
                                cla_type: "user_cla"
                            }
                        }
                    } else {
                        if (y.indexOf('@') == -1) {
                            if (!live_paths[y] && !configuration_paths[y]) {
                                if (y.indexOf('ISCOMMENT-') == -1) {
                                    live_paths[y] = {
                                        path: y,
                                        desc: y
                                    }
                                }
                            }
                            var nicely = y.replace(/"/g, '').trim();
                            scope.computed[nicely] = w[y]
                        }
                    }
                }
            }
        }
    }
    live_array = {}
    live_mq_array = jQuery.extend(true, {}, default_mqs);
    for (var v in the_inspector_mega_obj) {
        var computed = the_inspector_mega_obj[v].computed;
        if (!live_mq_array[v]) {
            if (v != 'all') {
                live_mq_array[v] = {
                    'mq_details': the_inspector_mega_obj[v]['mq_details'],
                    'mq-name-stored': v,
                    'pr': {},
                    'mq-custom-details': the_inspector_mega_obj[v]['mq_details'],
                    'mq-order': the_inspector_mega_obj[v]['mq-order'],
                }
            }
        } else {
            if (v != 'all') {
                live_mq_array[v]['pr'] = {}
                live_mq_array[v]['mq-order'] = the_inspector_mega_obj[v]['mq-order']
            }
        }
        for (var c in computed) {
            if (v === 'all') {
                live_array[c] = computed[c];
            } else {
                live_mq_array[v]['pr'][c] = computed[c];
            }
        }
    }
    csshero_save_step('code', 'all');
    csshero_design_mq_elements();
    csshero_prepare_variables(csshero_variables)
    csshero_prepare_classes(global_classes)
    csshero_design_custom_tree_els();
    csshero_apply_custom_ediandsugg(live_paths)
}
function csshero_draw_spacing_widget() {
    var el = $('.csshero-code-wrap').attr('data-editing_element');
    if (el.indexOf(':hover') > -1 || el.indexOf(':active') > -1 || el.indexOf(':visited') > -1)
        return;
    var el = $(el, cssheroframe).eq(0);
    var lookers = ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft', 'marginTop', 'marginRight', 'marginBottom', 'marginLeft']
    el.hide();
    var ziz = el.getStyleObject();
    el.show();
    for (var p in lookers) {
        var l = lookers[p];
        var val = ziz[l];
        var dest = $('.csshero-spacing-controller span.' + l + ' input');
        if (val == '0px' || val == 'auto') {
            dest.removeClass('hasVal')
        } else {
            dest.addClass('hasVal')
        }
        dest.val(val)
    }
}
$(document).on('click', '.csshero-editor-block-wrap.hidden .csshero-editor-block-sub-title[data-prop-group-name="spacings"]', function() {
    csshero_draw_spacing_widget()
}).on('click', '.csshero-spacing-expander', function() {
    $('.csshero-editor-block-inner-wrap-spacings').toggleClass('showing-details')
}).on('updateval keyup', '.sc-s input', csshero_throttle(function(e) {
    var area = $(this).closest('.csshero-sc');
    if (area.is('.locked')) {
        var proxies = area.find('.sc-s input')
    } else {
        var proxies = $(this)
    }
    var proxies = proxies.get()
    var val = $(this).val();
    processArray(proxies, function(e) {
        $(e).val(val)
        var proxy = $(e).attr('data-proxy');
        $('.csshero-editor-block-widget[data-property-name="' + proxy + '"]').find('.csshero-input').val(val).trigger('updateval');
        $('.csshero-editor-block-widget[data-property-name="' + proxy + '"]').find('.csshero-slider-element').val(parseInt(val))
    })
}, 500)).on('updateval keyup', '.csshero-input', csshero_throttle(function(e) {
    var wid = $(this).closest('.csshero-editor-block-widget')
    if (wid.attr('data-property-name') && wid.attr('data-property-name').indexOf('padding') > -1 || (wid.attr('data-property-name').indexOf('margin') > -1)) {
        csshero_draw_spacing_widget()
    }
}, 700)).on('click', '.sc-lock', function() {
    $(this).closest('.csshero-sc').toggleClass('locked')
}).on('click', '.csshero-editor-block-wrap.hidden .csshero-editor-block-sub-title[data-prop-group-name="borders"]', function() {
    csshero_borders_check()
}).on('updateval keyup', '.csshero-editor-block-widget[data-property-name^="border-"] .csshero-input', csshero_throttle(function(e) {
    csshero_borders_check()
}, 700)).on('mousedown', '.csshero-sc .o .control', function(w) {
    window.csshero_resize_sender = $(this).attr('data-sender')
    $('#csshero-body').addClass('measuring')
    $(this).addClass('current-controller')
    if (csshero_resize_sender.indexOf('-left') > -1 || csshero_resize_sender.indexOf('-right') > -1) {
        window.csshero_resize_unit = w.clientX;
    } else {
        window.csshero_resize_unit = w.clientY;
    }
    window.csshero_editing_el = $('.csshero-code-wrap').attr('data-editing_element')
    var original_val = $('.sc-s input[data-proxy="' + csshero_resize_sender + '"]').val();
    if (original_val.indexOf('%') > -1) {
        window.csshero_resize_u = '%'
    } else {
        window.csshero_resize_u = 'px'
    }
    var original_val = parseInt(original_val);
    if (isNaN(original_val))
        var original_val = 0;
    window.csshero_resize_original_val = parseInt(original_val);
    $('#csshero-body').append('<div class="csshero-spacing-controller-mask"></div>')
}).on('mousemove', '#csshero-body.measuring', function(e) {
    if (csshero_resize_sender.indexOf('-left') > -1 || csshero_resize_sender.indexOf('-right') > -1) {
        var diff = csshero_resize_unit - e.clientX;
    } else {
        var diff = csshero_resize_unit - e.clientY;
    }
    var diff = parseInt(diff / 2);
    if (csshero_resize_sender.indexOf('-bottom') > -1 || csshero_resize_sender.indexOf('-right') > -1) {
        var endsize = csshero_resize_original_val - diff;
    } else {
        var endsize = csshero_resize_original_val + diff;
    }
    if (csshero_resize_sender.indexOf('padding-') > -1 && endsize < 0)
        var endsize = 0;
    $('.sc-s input[data-proxy="' + csshero_resize_sender + '"]').val(endsize + csshero_resize_u)
    $('#csshero-edits-holder', cssheroframe).append('<style class="temp-resizer">' + csshero_editing_el + '{' + csshero_resize_sender + ':' + endsize + csshero_resize_u + '}</style>')
    csshero_zoom_on_element($('.non-existing-el', cssheroframe))
    csshero_zoom_on_element($(csshero_editing_el, cssheroframe))
}).on('mouseup', '#csshero-body.measuring', function() {
    $(this).removeClass('measuring')
    $('.csshero-spacing-controller-mask').remove()
    $('.sc-s input[data-proxy="' + csshero_resize_sender + '"]').trigger('keyup')
    $('.focus-probe').remove()
    $('.current-controller').removeClass('current-controller')
    setTimeout(function() {
        $('#csshero-edits-holder .temp-resizer', cssheroframe).remove();
    }, 1000)
}).on('click', '.csshero-mode-props.active .num', function() {
    $('.csshero-search-props').val('edited').trigger('keyup');
})
function csshero_borders_check() {
    var el = $('.csshero-code-wrap').attr('data-editing_element');
    if (el.indexOf(':hover') > -1 || el.indexOf(':active') > -1 || el.indexOf(':visited') > -1)
        return;
    var el = $(el, cssheroframe).eq(0);
    var borders_checks = ['borderTop-width', 'borderRight-width', 'borderBottom-width', 'borderLeft-width'];
    el.hide();
    var ziz = el.getStyleObject();
    el.show();
    $('.csshero-border-switch span').removeClass('has-bb')
    for (var w in borders_checks) {
        var bb = borders_checks[w];
        var b_val = parseFloat(ziz[bb]);
        if (b_val > 0) {
            $('.csshero-border-switch span[data-border="' + bb + '"]').addClass('has-bb')
        }
    }
}
