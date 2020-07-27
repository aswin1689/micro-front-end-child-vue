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
