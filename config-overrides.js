const {alias} = require('react-app-rewire-alias')

module.exports = function override(config) {
  alias({
    '@components': './src/components',
    '@images' : './src/assets/images',
    '@assets': './src/assets',
    '@scss' : './src/assets/scss'
  })(config)

    return {
			...config,
			ignoreWarnings: [
				{
					module: /node_modules\/@react-aria/,
				},
			],
		};
}