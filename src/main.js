import Vue from 'vue';
import App from './App.vue';
import router from './router'

Vue.config.productionTip = false;

window.renderVueApp = (containerId) => {
	new Vue({
        router,
        render: (h) => h(App)
    }).$mount(document.getElementById(containerId));
};

window.unmountVueApp = (containerId) => {
	new Vue({
		render: (h) => h(App),
	}).$destroy(document.getElementById(containerId));
};
