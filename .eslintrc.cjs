/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
	root: true,
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/eslint-config-typescript',
	],
	parserOptions: {ecmaVersion: 'latest'},
	rules: {
		'no-console': 'warn',
		indent: ['warn', 'tab'],
		'no-mixed-spaces-and-tabs': ['warn'],

		semi: ['warn', 'always', {
			omitLastInOneLineBlock: true,
		}],
		quotes: ['warn', 'single'],
		'vue/script-indent': ['warn', 'tab', {
			'baseIndent': 1,
			'switchCase': 1,
			'ignores': []
		}],
		'vue/html-indent': ['warn', 'tab', {
			'attribute': 1,
			'baseIndent': 1,
			'closeBracket': 0,
			'alignAttributesVertically': true,
			'ignores': []
		}]
	},
	overrides: [
		{
			'files': ['*.vue'],
			'rules': {
				'indent': 'off'
			}
		}
	],
};
