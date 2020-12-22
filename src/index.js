import { registerBlockType, createBlock } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { dispatch } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import './editor.scss';
import './style.scss';

import './framework-dd-block.js';

registerBlockType( 'framework-dl/framework-dl-block', {
	title: __( 'Framework description list', 'framework-dl-block' ),

	description: __(
		'Example block written with ESNext standard and JSX support – build step required.',
		'framework-dl-block'
	),

	category: 'widgets',

	icon: 'feedback',

	edit: ( { className, clientId } ) => {
		return (
			<dl className={ className }>
				<InnerBlocks
					allowedBlocks={ [ 'framework-dl/description-block' ] }
					template={ [ [ 'framework-dl/description-block', {} ] ] }
					renderAppender={ () => (
						<button
							type="button"
							onClick={ () => { dispatch('core/block-editor').insertBlocks(createBlock('framework-dl/description-block'), 9999, clientId) } }
						>
							{ __( 'Add', 'framework-dl-block' ) }
						</button>
					) }
				/>
			</dl>
		);
	},

	save: () => {
		return (
			<dl>
				<InnerBlocks.Content />
			</dl>
		);
	},
} );
