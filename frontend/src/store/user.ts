import mutations from './mutations'
import actions   from './actions'
import getters   from './getters'
import {type IstoreProps} from './../interface/store'

const state: IstoreProps = {
    users: [],
    currentUser: undefined,
};

export default {
    state,
    mutations,
    actions,
    getters,
};