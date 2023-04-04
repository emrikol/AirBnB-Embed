<?php
/**
 * Plugin Name:       AirBnB Embed
 * Plugin URI:        https://github.com/emrikol/AirBnB-Embed
 * Description:       Embeds AirBnB Rooms
 * Requires at least: 5.9
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            Derrick Tennant
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       airbnb-embed
 *
 * @package           airbnb-embed
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function emrikol_airbnb_embed_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'emrikol_airbnb_embed_block_init' );

/**
 * Enqueues the Airbnb Embed Editor script.
 *
 * @return void
 */
function emrikol_airbnb_embed_enqueue_editor_script(): void {
	$file_data = get_file_data( __FILE__, array( 'Version' => 'Version' ) );
	$version   = $file_data['Version'] ?? filemtime( __FILE__ );

	wp_enqueue_script( 'airbnb-embed-editor-script', 'https://www.airbnb.com/embeddable/airbnb_jssdk', array(), $version, true );
}
add_action( 'enqueue_block_editor_assets', 'emrikol_airbnb_embed_enqueue_editor_script' );
