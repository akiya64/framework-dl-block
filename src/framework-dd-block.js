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

	edit: () => {
		return (
			<>
			<TextControl
				placeholder="Framework name"
			/>
			<Flex>
				<NumberControl
					label="登場年"
					shiftStep={ 1 }
					value="2010"
				/>
				<SelectControl
					label="言語"
					options={ [
							{ label: 'PHP', value: 'php' },
							{ label: 'JavaScript', value: 'js' },
							{ label: 'Ruby', value: 'ruby' },
							{ label: 'Erlang', value: 'erlang' },
						]
					}
				/>
			</Flex>

			<TextareaControl
				placeholder="概要"
			/>

			</>
		);
	},

	save: () => {
		return null;
	},
} );
