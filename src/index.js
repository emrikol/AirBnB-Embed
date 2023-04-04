import edit from './edit';
import save from './save';

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
import { createBlock } from '@wordpress/blocks';

export const URL_REGEX = /^https:\/\/www\.airbnb\.com\/rooms\/([0-9]+)\??.*$/;

registerBlockType( 'emrikol/airbnb-embed', {
    title: __( 'Airbnb Embed' ),
    icon: 'universal-access-alt',
    category: 'embed',
    attributes: {
        listingId: {
            type: 'string',
            default: '',
        },
        url: {
            type: 'string',
            default: '',
        },
        hideCta: {
            type: 'boolean',
            default: false,
        },
        hidePrice: {
            type: 'boolean',
            default: false,
        },
        hideDescription: {
            type: 'boolean',
            default: false,
        },
        hideTitle: {
            type: 'boolean',
            default: false,
        },
        hideHost: {
            type: 'boolean',
            default: false,
        },
        width: {
            type: 'string',
            default: '100%',
        },
        height: {
            type: 'string',
            default: '600px',
        },
        autoInit: {
            type: 'boolean',
            default: false,
        },
    },
	transforms: {
		from: [
			{
				type: 'raw',
				isMatch: node => node.nodeName === 'P' && URL_REGEX.test( node.textContent ),
				transform: node => {
					return createBlock( 'emrikol/airbnb-embed', {
						url: node.textContent.trim(),
					} );
				},
			},
		],
	},
    edit,
    save,
} );
