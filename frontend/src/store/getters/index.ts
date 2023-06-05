import {type IstoreProps} from './../../interface/store'
const getters = {
    getUsers: (state:IstoreProps) => {
        return state.users;
    },

    getUser: (state:IstoreProps) => {
        return state.currentUser;
    },
};

export default getters