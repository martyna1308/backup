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
define('DB_NAME', 'pacio_wp12');

/** MySQL database username */
define('DB_USER', 'pacio_wp12');

/** MySQL database password */
define('DB_PASSWORD', 'D4|$1j2hH$S9@1#');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

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
define('AUTH_KEY',         'mzIkcFQ6oUxlqZmrCuhiyQ6Ki6OyMibOBNyYWzVoD4pqCact6y7uTiDtnOzQ0DCS');
define('SECURE_AUTH_KEY',  '860azcoXnwF0VXXJsiq4WU6eulnBBulAZx4rR0jr4YdynRv4dvGIYe9HLXwovp7Z');
define('LOGGED_IN_KEY',    'kqDiq9EeFZzPBwnTeR0wPuAZmeklKe986Sry9xSud2bKq2dJxGTCBWyQS1psju7t');
define('NONCE_KEY',        't9klVyiSJuTl2Mo1UERAa5iVETld5gwBMSjwJH8YULVpZb8abvH28ikAM52KeAbR');
define('AUTH_SALT',        'nZUfcWGHX8VLG5Kacb8eQM3AHnXG3UjSRIFuW21b81XKiANTmcLV8niHixNKamN0');
define('SECURE_AUTH_SALT', 'KfZMa6SwxjSX3nskoKXgLSDnKVmRUV5rrHrzaYfwIvR0GzbqtPcXCc6BGtzRe33j');
define('LOGGED_IN_SALT',   'MdBxOYXX0zzurlIC2aUonIXxEbAjlf0HxKkZvItmmiRiJwmL5ZJUUuFQwPQZEzhM');
define('NONCE_SALT',       'hgvLe396fjRgPO2dJ2uuWafVA9KP7RHexMhPm3gegMpWTODmK5j7iATvBWRGd3oe');

/**
 * Other customizations.
 */
define('FS_METHOD','direct');define('FS_CHMOD_DIR',0755);define('FS_CHMOD_FILE',0644);
define('WP_TEMP_DIR',dirname(__FILE__).'/wp-content/uploads');

/**
 * Turn off automatic updates since these are managed upstream.
 */
define('AUTOMATIC_UPDATER_DISABLED', true);


/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

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
