import { TextControl, ToggleControl } from '@wordpress/components';
import { useState, useEffect } from '@wordpress/element';
import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';

const Edit = ({ attributes, setAttributes }) => {
	const { listingId, url, hideReviews, hidePrice, width, height, autoInit } = attributes;
	const [pasteData, setPasteData] = useState(null);
	const [embedCode, setEmbedCode] = useState('');

	const handlePaste = (event) => {
		const { clipboardData } = event;
		const pastedText = clipboardData.getData('text');
		const regex = /^https:\/\/www\.airbnb\.com\/rooms\/([0-9]+)\??.*$/;
		const match = pastedText.match(regex);
		if (match) {
			setPasteData(match[0]);
			event.preventDefault();
		}
	};

	useEffect(() => {
		// Convert Airbnb URL to embed code
		const regex = /^https:\/\/www\.airbnb\.com\/rooms\/([0-9]+)\??.*$/;
		const match = url.match(regex);
		if (match) {
			const id = match[1];
			const dataAttrs = {};
			if (hideReviews) dataAttrs['data-hide-reviews'] = 'true';
			if (hidePrice) dataAttrs['data-hide-price'] = 'true';
			if (autoInit) dataAttrs['data-auto-init'] = 'true';
			const embed = (
				<div className="airbnb-embed-frame" data-id={id} data-view="home" style={{ width, height, margin: 'auto' }} {...dataAttrs}>
					<a href={`https://www.airbnb.com/rooms/${id}`} target="_blank" rel="nofollow noopener"></a>
					<script async src="https://www.airbnb.com/embeddable/airbnb_jssdk"></script>
				</div>
			);
			setEmbedCode(embed);
			setAttributes({ listingId: id });
		} else {
			setEmbedCode('');
		}
	}, [url, hideReviews, hidePrice, width, height, autoInit]);
	useEffect(() => {
		if (embedCode) {
			window.AirbnbAPI && window.AirbnbAPI.bootstrap();
		}
	}, [embedCode]);

	const onChange = (field) => (newValue) => {
		setAttributes({ [field]: newValue });
		setEmbedCode('');
	};

	const blockProps = useBlockProps({
		onPaste: handlePaste,
	});

	return (
		<>
			<TextControl
				label={__('Airbnb URL')}
				value={url}
				onChange={onChange('url')}
			/>
			<InspectorControls>
				<PanelBody title={__('Airbnb Embed Settings')}>
					<ToggleControl
						label={__('Hide Reviews')}
						checked={hideReviews}
						onChange={onChange('hideReviews')}
					/>
					<ToggleControl
						label={__('Hide Price')}
						checked={hidePrice}
						onChange={onChange('hidePrice')}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				{embedCode}
			</div>
		</>
	);
};

export default Edit;
