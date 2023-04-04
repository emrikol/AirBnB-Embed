const { __ } = wp.i18n;

const Save = ({ attributes }) => {
	const { listingId, url, hideReviews, hidePrice, width, height, autoInit } = attributes;
		const dataAttrs = {};
	if (hideReviews) {
		dataAttrs['data-hide-reviews'] = 'true';
	}
	if (hidePrice) {
		dataAttrs['data-hide-price'] = 'true';
	}
	if (autoInit) {
		dataAttrs['data-auto-init'] = 'true';
	}

	const embedCode = (
	<div className = "airbnb-embed-frame" data-id={listingId} data-view="home" style={{ width, height, margin: 'auto' }} {...dataAttrs}>
		<a href = {`https://www.airbnb.com/rooms/${listingId}`} target="_blank" rel="nofollow noopener"></a>
		<script async src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
	</div>
	);

	return embedCode;
};

export default Save;
