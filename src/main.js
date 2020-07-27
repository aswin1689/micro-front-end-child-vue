import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

window.renderVueApp = (containerId) => {
	console.log('in render vue app')
	new Vue({
		render: (h) => h(App),
	}).$mount(document.getElementById(containerId));
};

window.unmountVueApp = (containerId) => {
	console.log('in vue unmount')
	new Vue({
		render: (h) => h(App),
	}).$destroy(document.getElementById(containerId));
};
