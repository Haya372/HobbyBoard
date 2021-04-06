const state = {
    userId: "",
}

const mutations = {
    updateUserInfo(state, user) {
        state.userId = user.userId;
    },
    reset (state) {
        Object.assign(state, JSON.parse(localStorage.getItem('initialState')));
    }
}

const actions = {
    auth(context, user) {
        context.commit('updateUserInfo', user)
    },
    logout(context){
        context.commit('reset', null)
    }
}

export default {
    state,
    mutations,
    actions
}