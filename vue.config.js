const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
	configureWebpack: {
		plugins: [
			new WebpackAssetsManifest({
				output: 'asset-manifest.json',
			}),
		],
		optimization: {
			splitChunks: false,
		},
	},
	css: {
		extract: false,
	}
};
