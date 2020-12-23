import { registerBlockType, createBlock } from '@wordpress/blocks';
import { InnerBlocks } from '@wordpress/block-editor';
import { dispatch, withSelect } from '@wordpress/data';
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

	attributes: {
		minYear: {
			type: 'string',
		},
		maxYear: {
			type: 'string',
		},
	},

	edit: withSelect( ( select, blockData ) => {
		return {
			innerBlockProps: select( 'core/block-editor' ).getBlocks(
				blockData.clientId
			),
		};
	} )(
		( {
			className,
			clientId,
			innerBlockProps,
			attributes,
			setAttributes,
		} ) => {
			const years = innerBlockProps.map(
				( prop ) => prop.attributes.since
			);
			setAttributes( { minYear: Math.min( ...years ) } );
			setAttributes( { maxYear: Math.max( ...years ) } );

			return (
				<>
					{ attributes.minYear !== attributes.maxYear && (
						<p>
							{ attributes.minYear }～{ attributes.maxYear }年
						</p>
					) }
					<dl className={ className }>
						<InnerBlocks
							allowedBlocks={ [
								'framework-dl/description-block',
							] }
							template={ [
								[ 'framework-dl/description-block', {} ],
							] }
							renderAppender={ () => (
								<button
									type="button"
									onClick={ () => {
										dispatch(
											'core/block-editor'
										).insertBlocks(
											createBlock(
												'framework-dl/description-block'
											),
											9999,
											clientId
										);
									} }
								>
									{ __( 'Add', 'framework-dl-block' ) }
								</button>
							) }
						/>
					</dl>
				</>
			);
		}
	),

	save: ( { attributes } ) => {
		return (
			<div>
				{ attributes.minYear !== attributes.maxYear && (
					<p>
						{ attributes.minYear }～{ attributes.maxYear }年
					</p>
				) }
				<dl>
					<InnerBlocks.Content />
				</dl>
			</div>
		);
	},
} );
