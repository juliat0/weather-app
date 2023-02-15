import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import App from './App.vue'

import GothenburgView from './GothenburgView.vue';
import NewYorkView from './NewYorkView.vue';
import ParisView from './ParisView.vue';
import StockholmView from './StockholmView.vue';
import TokyoView from './TokyoView.vue';
import Other from './OtherView.vue';


const router = createRouter ({
    history: createWebHashHistory(),
    routes: [
        {
            component: GothenburgView,
            path: '/gothenburg',
            props: { lat: 57.7089, lon: 11.9746 },
        },
        {
            component: NewYorkView,
            path: '/newyork',
            props: { lat: 40.7128, lon: 74.0060 },
        },
        {
            component: ParisView,
            path: '/paris',
            props: { lat: 48.8566, lon: 2.3522 },
        },
        {
            component: StockholmView,
            path: '/stockholm',
            props: { lat: 59.3293, lon: 18.06858 },
        },
        {
            component: TokyoView,
            path: '/tokyo',
            props: { lat: 35.6895, lon: 139.6917 },
        },
        {
            component: Other,
            path: '/other',
    },

    ]
})



createApp(App).use(router).mount('#app')
