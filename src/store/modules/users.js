import request from '@/utils/request.js'
export default {
    namespaced: false,   // 命名空间
    state: {
        usersList: [],  // 保存用户数据
    },
    getters: {

    },
    actions: {
        getUsers({ commit, state },payload) {
            request({
                url: 'http://localhost:3000/users/page',
                method: 'get',
                params: {
                    start: payload.start,
                    end: payload.end
                }
            }).then((data) => {
                commit({
                    type: 'getUsers',
                    res: data
                })
            })
        },
    },
    mutations: {
        getUsers(state, payload) {
            state.usersList = payload.res
            console.log(state.usersList)
        },
    }
}