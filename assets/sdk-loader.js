/**
 * Loads Airbnb's embed SDK in the block editor.
 *
 * Gutenberg's client-side media processing makes the editor cross-origin
 * isolated, and adds crossorigin="anonymous" to every external script in the
 * editor's HTML. Airbnb sends no CORS headers, so a plain <script> tag for the
 * SDK is blocked. A script added from JavaScript gets no crossorigin
 * attribute, so the browser loads it without CORS.
 */
( function () {
	const script = document.createElement( 'script' );

	script.src = 'https://www.airbnb.com/embeddable/airbnb_jssdk';
	script.async = true;

	document.head.appendChild( script );
} )();
