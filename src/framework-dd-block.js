import { registerBlockType } from '@wordpress/blocks';
import { TextControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import './style.scss';
import './editor.scss';

registerBlockType( 'framework-dl/description-block', {
	title: __( 'Framework description ', 'framework-dl-block' ),

	description: __( 'Framework descriptions block', 'framework-dl-block' ),

	category: 'widgets',

	parent: [ 'framework-dl/framework-dl-block' ],
	supports: {
		// Removes support for an HTML mode.
		html: false,
	},

	edit: () => {
		return (
			<>
			<TextControl
				placeholder="Framework name"
			/>
			<TextControl
				placeholder="Framework name"
			/>
			</>
		);
	},

	save: () => {
		return null;
	},
} );
