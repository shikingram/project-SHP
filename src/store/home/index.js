import { reqCategoryList, reqGetBannerList,reqGetFloorList } from "@/api"

const state = {
    categoryList: [],
    bannerList:[],
    floorList:[],
}

const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    },
    BANNERLIST(state,bannerList) {
        state.bannerList = bannerList
    },
    FloorList(state,floorList) {
        state.floorList = floorList
    }
}

const actions = {
    async categoryList({commit}) {
        let result = await reqCategoryList()
        if (result.code == 200) {
            commit('CATEGORYLIST', result.data)
        }
    },
    async getBannerList({commit}) {
        let result = await reqGetBannerList()
        // console.log(result)
        if (result.code == 200) {
            commit('BANNERLIST', result.data)
        }
    },
    async getFloorList({commit}) {
        let result = await reqGetFloorList()
        // console.log(result)
        if (result.code == 200) {
            commit('FloorList', result.data)
        }
    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters,
}