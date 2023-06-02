import {type IuserProps} from './../../interface/user'
import {type IstoreProps} from './../../interface/store'

const mutations = {
    SET_USERS(state: IstoreProps, users: IuserProps[]) {
        state.users = users;
    },
    SET_CURRENT_USER(state: IstoreProps, user: IuserProps) {
        state.currentUser = user;
    },
};

export default mutations

