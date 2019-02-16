<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'database');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '/7stGr/dEY[hE-ryyJ`U3$fO[c?F;W^<CM}TUwC(7(f{+D/}pfO6AYnoxTYE& {i');
define('SECURE_AUTH_KEY',  '+p##2Q,I>!ZfF4RnT^/Ae|g9B%l!r@KWd#3[cB;[<^b*z-5@}3g>EQ&5<#=!;MNC');
define('LOGGED_IN_KEY',    '<0]cF_QL*~1%(IcJ124}X+u m6u9+}Gy|[Wi{}8$kNDP-q&sL6b;@y|jPX9mujyg');
define('NONCE_KEY',        '>3AX@+)mE1_) h4+p8%-nFgZ]y=( Bf3kFVf/elZp%<gjiQ10aUx76$FS$LW,xDq');
define('AUTH_SALT',        '@WHHeZr|p8A};c,7!A:4Sq.O>$r`tVf?|3g_1u./]=mt~[WW2+hQwhV,f,!%Lq1k');
define('SECURE_AUTH_SALT', 'gZyK~glKiY*0.gv7LLmOCeENBd6i.{]G8BP[1rM<Ibyq.OVWm{Y.V.GkyU#V^=S{');
define('LOGGED_IN_SALT',   '@)Tw31v3frRMHjXK_jaI69e7 r-3x(1L-$7VqFA>_r{vL8Ae1[{!*:b1s[G+YkAX');
define('NONCE_SALT',       '-n^IShePVaPMg8#$CtTIY7]?e@1hl#WbrPU=<e/?(^8|2Y>x8Mp!xKq04`` H`F+');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'tn_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
