const getters = {
    getUserById: (state) => (id) => {
        // Lógica para obter um usuário por ID
        return state.users.find((user) => user.id === id);
    },
};

export default getters