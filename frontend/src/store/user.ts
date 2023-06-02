import mutations from './mutations'
import actions from './actions'
import getters from './getters'

const state = {
    users: [],
    currentUser: null,
};

export default {
    state,
    mutations,
    actions,
    getters,
};