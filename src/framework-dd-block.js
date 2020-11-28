import { registerBlockType } from '@wordpress/blocks';
import {
	Flex,
	TextControl,
	__experimentalNumberControl as NumberControl,
	SelectControl,
	TextareaControl,
} from '@wordpress/components';
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

	attributes: {
		name: {
			type: 'string',
		},
		since: {
			type: 'integer',
			default: 2010,
		},
		language: {
			type: 'string',
		},
		description: {
			type: 'string',
		},
	},

	edit: ( { attributes, setAttributes } ) => {
		const { name, since, language, description } = attributes;
		return (
			<>
				<TextControl
					placeholder="Framework name"
					value={ name }
					onChange={ ( value ) => setAttributes( { name: value } ) }
				/>
				<Flex>
					<NumberControl
						label="登場年"
						shiftStep={ 1 }
						value={ since }
						onChange={ ( value ) =>
							setAttributes( { since: parseInt( value, 10 ) } )
						}
					/>
					<SelectControl
						label="言語"
						options={ [
							{ label: 'PHP', value: 'php' },
							{ label: 'JavaScript', value: 'js' },
							{ label: 'Ruby', value: 'ruby' },
							{ label: 'Erlang', value: 'erlang' },
						] }
						value={ language }
						onChange={ ( value ) =>
							setAttributes( { language: value } )
						}
					/>
				</Flex>

				<TextareaControl
					placeholder="概要"
					value={ description }
					onChange={ ( value ) =>
						setAttributes( { description: value } )
					}
				/>
			</>
		);
	},

	save: () => {
		return null;
	},
} );
