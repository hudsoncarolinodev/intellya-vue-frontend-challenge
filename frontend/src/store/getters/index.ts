import {type IuserProps } from "@/interface/user";
const getters = {
    getUsers: (state) => {
        return state.users;
    },
};

export default getters