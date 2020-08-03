const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
	filenameHashing: false,
	configureWebpack: {
		plugins: [
			new WebpackAssetsManifest({
				output: 'asset-manifest.json',
				transform(assets) {
					return {
						files: assets
					}
				}
			}),
		],
		devServer: {
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		},
		optimization: {
			splitChunks: false,
		}
	},
	css: {
		extract: false
	}
};
