const WebpackAssetsManifest = require('webpack-assets-manifest');
const webpack = require("webpack");

module.exports = {
	filenameHashing: false,
	configureWebpack: {
		plugins: [
			new WebpackAssetsManifest({
				output: 'asset-manifest.json',
				transform(assets, manifest) {
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
