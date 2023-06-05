const formatActive = (active: string | boolean | Number) => {
    return active ? 'Ativo' : 'Inativo';
};

export default formatActive