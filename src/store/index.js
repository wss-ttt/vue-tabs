import Vue from 'vue' 
import Vuex from 'vuex' 
import common from './modules/common.js'
import users from './modules/users.js'
import news from './modules/news.js'
Vue.use(Vuex);

export default new Vuex.Store({ 
    strict: process.env.NODE_ENV !== 'production', //在非生产环境下，使用严格模式
    modules: {
        common,
        users,
        news
    } 
});