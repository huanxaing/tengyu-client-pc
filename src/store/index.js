import { createStore } from 'vuex'
import user from './modules/user'
import cart from './modules/cart'
import category from './modules/category'
import createPersistedstate from 'vuex-persistedstate'

export default createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
        user,
        cart,
        category
    },
    // 配置插件
    plugins: [
        // 默认存储在 localStorage
        createPersistedstate({
            // 本地存储名字
            key: 'erabbit-client-pc-store',
            // 指定需要存储的模块
            paths: ['user', 'cart']
        })
    ]
})