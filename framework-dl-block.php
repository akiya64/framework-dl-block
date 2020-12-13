<?php
/**
 * Plugin Name:     Framework description list
 * Plugin URI:      https://github.com/akiya64/framework-dl-block
 * Description:     Example of Gutenberg block for commentary on the blog how to create Guteberg block.
 * Version:         1.0.0
 * Author:          Akiya Kasumi
 * Author URI:      https://autumnsky.jp/
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     framework-dl-block
 *
 * @package         framework-dl
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function framework_dl_framework_dl_block_block_init() {
	$dir = dirname( __FILE__ );

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "framework-dl/framework-dl-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'framework-dl-framework-dl-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'framework-dl-framework-dl-block-block-editor', 'framework-dl-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'framework-dl-framework-dl-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'framework-dl-framework-dl-block-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type( 'framework-dl/framework-dl-block', array(
		'editor_script' => 'framework-dl-framework-dl-block-block-editor',
		'editor_style'  => 'framework-dl-framework-dl-block-block-editor',
		'style'         => 'framework-dl-framework-dl-block-block',
	) );
}
add_action( 'init', 'framework_dl_framework_dl_block_block_init' );
