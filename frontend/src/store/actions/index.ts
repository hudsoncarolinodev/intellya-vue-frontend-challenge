import { getUsers, getUserById } from '@/services/usersService/usersService';
import { Commit } from 'vuex';

const actions = {
  async fetchUsers({ commit }: { commit: Commit }): Promise<void> {
    try {
      const response = await getUsers();
      const { data } = response;

      commit('SET_USERS', data);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  },
  async setCurrentUser({ commit }: { commit: Commit }, id: string): Promise<void> {
    try {
      const response = await getUserById(id);
      const { data } = response;

      commit('SET_CURRENT_USER', data);
    } catch (error) {
      console.error('Error setting current user:', error);
    }
  },
};

export default actions;