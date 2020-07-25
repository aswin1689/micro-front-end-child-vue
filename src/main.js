import Vue from 'vue';
import App from './App.vue';

Vue.config.productionTip = false;

window.renderVueApp = (containerId, history) => {
	new Vue({
		render: (h) => h(App),
	}).$mount(document.getElementById(containerId));
};

window.unmountVueApp = (containerId) => {
	new Vue({
		render: (h) => h(App),
	}).$destroy(document.getElementById(containerId));
};
