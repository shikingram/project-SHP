import { reqGetSearchInfo } from "@/api"

const state ={
    searchList: {}
}

const mutations ={
    SEARCHINFO(state,searchList) {
        state.searchList = searchList
    }
}

const actions ={
    async getSearchInfo({commit},params={}) {
        let result = await reqGetSearchInfo(params)
        if (result.code == 200) {
            commit('SEARCHINFO', result.data)
        }
    }
}

// 简化数据
const getters ={
    goodsList(state) {
        // 如果数据回来是一个数组，如果网络不给力，返回的是undifind
        return state.searchList.goodsList || []
    },
    trademarkList() {
        return state.searchList.trademarkList ||[]
    },
    attrsList() {
        return state.searchList.attrsList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters,
}