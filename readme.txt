=== AirBnB Embed ===
Contributors:      Derrick Tennant
Tags:              block
Tested up to:      6.0
Stable tag:        0.1.0
License:           GPL-2.0-or-later
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

A Gutenberg block for embedding Airbnb listings.

== Description ==

The Airbnb Embed block allows you to easily embed Airbnb listings in your WordPress posts and pages using the Gutenberg editor. Simply enter the Airbnb listing ID or URL, and choose which elements of the embed to display or hide.

Note: This plugin was cobbled together as a quick hack with ChatGPT, so don't trust it to actually work :D

Features:

- Simple and intuitive block interface
- Option to display or hide the view on Airbnb button, price, description, title, and host name and photo
- Responsive embed that automatically adjusts to the available space on the screen
- Option to automatically initialize the Airbnb JavaScript SDK

== Installation ==

1. Upload the `airbnb-embed-block` folder to the `/wp-content/plugins/` directory, or install the plugin through the WordPress plugins screen directly.
2. Activate the plugin through the 'Plugins' screen in WordPress.

== Usage ==

1. Create a new post or page in the Gutenberg editor.
2. Add the Airbnb Embed block by selecting it from the 'Embeds' category.
3. Enter the Airbnb listing ID or URL in the block settings.
4. Choose which elements of the embed to display or hide.
5. Publish or update your post or page.

== Changelog ==

= 1.0.0 =
* Initial release

== Frequently Asked Questions ==

= Can I embed multiple Airbnb listings in the same post or page? =

Yes, you can add as many Airbnb Embed blocks as you like to a single post or page.

= Can I customize the size of the embed? =

Yes, you can specify the width and height of the embed container in the block settings. The embed will automatically adjust to fit the available space on the screen.

= Can I change the styling of the embed? =

Yes, you can add custom CSS to your theme to style the embed as desired. The embed container has the class `airbnb-embed-frame`, and the `iframe` within it has no classes.
