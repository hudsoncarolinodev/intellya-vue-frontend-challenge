import {type IuserProps} from './../../interface/user'
import {type IstoreProps} from './../../interface/store'

const mutations = {
    SET_USERS(state: IstoreProps, users: IuserProps[]) {
        state.users = users;
    },
    SET_CURRENT_USER(state: IstoreProps, user: IuserProps) {
        state.currentUser = user;
    },
    SET_USERS_ERROR(state: IstoreProps, error) {
       
    },
    SET_USER_ERROR(state: IstoreProps, error) {
        
    },
};

export default mutations

