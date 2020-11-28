import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

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
			<p className={ className }>
				{ __(
					'Framework description list – hello from the editor!',
					'framework-dl-block'
				) }
			</p>
		);
	},

	save: () => {
		return null;
	},
} );
