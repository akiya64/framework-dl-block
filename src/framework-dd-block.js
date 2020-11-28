import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

import './style.scss';

registerBlockType( 'framework-dl/description-block', {
	title: __( 'Framework description ', 'framework-dl-block' ),

	description: __( 'Framework descriptions block', 'framework-dl-block' ),

	category: 'widgets',

	parent: [ 'framework-dl/framework-dl-block' ],
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: ( { className } ) => {
		return (
			<p className={ className }>
				{ __(
					'Framework description block, this is inner block!',
					'framework-dl-block'
				) }
			</p>
		);
	},

	save: () => {
		return null;
	},
} );
