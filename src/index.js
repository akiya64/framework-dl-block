import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import './style.scss';
import './framework-dd-block.js';

registerBlockType( 'framework-dl/framework-dl-block', {
	title: __( 'Framework description list', 'framework-dl-block' ),

	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'framework-dl-block'
	),

	category: 'widgets',

	icon: 'smiley',

	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: ( { className } ) => {
		return (
			<dl className={ className }>
				<InnerBlocks
					allowedBlocks={ [ 'framework-dl/description-block' ] }
				/>
			</dl>
		);
	},

	save: () => {
		return null;
	},
} );
