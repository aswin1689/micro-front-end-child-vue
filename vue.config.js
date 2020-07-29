const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
	configureWebpack: {
		output: {
			filename: 'main-[hash].js'
		},
		plugins: [
			new WebpackAssetsManifest({
				output: 'asset-manifest.json',
				customize(entry, original, manifest, asset){
					return {
						key: `${entry.key.replace('app', 'main')}`,
						value: `${entry.value}`
					}
				},
				transform(assets, manifest){
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
		},
	},
	chainWebpack: config => {
		config.merge({
			externals: process.env.VUE_APP_BUILD_MODE === 'test' || process.env.NODE_ENV === 'development' ? [] : {
				'vue': 'Vue',
				'vue-router': 'VueRouter',
			},
		});
	},
	css: {
		extract: false,
		sourceMap: true,
	}
};
