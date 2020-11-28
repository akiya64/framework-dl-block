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
			source: 'text',
			selector: 'dt',
		},
		since: {
			type: 'text',
			default: 2010,
			source: 'text',
			selector: 'span.since',
		},
		language: {
			type: 'string',
			source: 'text',
			selector: 'span.language',
			default: '',
		},
		description: {
			type: 'string',
			source: 'text',
			selector: 'dd.description',
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
							setAttributes( { since: value } )
						}
					/>
					<SelectControl
						label="言語"
						options={ [
							{ label: 'PHP', value: 'PHP' },
							{ label: 'JavaScript', value: 'JavaScript' },
							{ label: 'Ruby', value: 'Ruby' },
							{ label: 'Erlang', value: 'Erlang' },
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

	save: ( { attributes } ) => {
		return (
			<>
				<dt>{ attributes.name }</dt>
				<dd>
					<span className="since">{ attributes.since }</span>~
				</dd>
				<dd>
					言語：
					<span className="language">{ attributes.language }</span>
				</dd>
				<dd className="description">{ attributes.description }</dd>
			</>
		);
	},
} );
