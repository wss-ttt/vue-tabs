import request from '@/utils/request.js'
export default {
    namespaced: false,   // 命名空间
    state: {
        newsList: [],  // 保存用户数据
    },
    getters: {

    },
    actions: {
        getNews({ commit, state },payload) {
            request({
                url: 'http://localhost:3000/news/page',
                method: 'get',
                params: {
                    start: payload.start,
                    end: payload.end
                }
            }).then((data) => {
                commit({
                    type: 'getNews',
                    res: data
                })
            })
        },
    },
    mutations: {
        getNews(state, playload) {
            state.newsList = playload.res
        },
    }
}