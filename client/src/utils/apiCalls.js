import api from "./api";

export const createNewUser = async (data) => {
    try {
        const response = await api.post('/auth/register', data);

        return response;
    } catch (error) {
        throw new Error('Ocorreu um erro ao adicionar o usuário. Tente mais tarde');
    }
}

export const loginUser = async (data) => {
    const response = await api.post('/auth/login', data);

    return response;
}

export const getGeneralStats = async (id, token) => {
    try {
        const response = await api.get(`/general/${id}`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao procurar os status gerais');
    }
}

export const getNotes = async (id, token) => {
    try {
        const response = await api.get(`/notes/${id}`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao procurar as anotações')
    }
}

export const getNote = async (id, token) => {
    try {
        const response = await api.get(`/notes/${id}/specific`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao procurar a anotação')
    }
}

export const createNote = async (data, token) => {
    try {
        const response = await api.post("/notes", data, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao adicionar as anotação');
    }
}

export const editNote = async (id, data, token) => {
   try {
        const response = await api.patch(`/notes/${id}`, data, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao atualizar a anotação');
    }
}

export const deleteNote = async (id, data, token) => {
    try {
        const response = await api.delete(`/notes/${id}`, {data, headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu um erro ao deletar a anotação');
    }
}

export const getTrashCollections = async (id, token) => {
    try {
        const response = await api.get(`/collect/${id}`, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao procurar as coletas');
    }
}

export const createTrashCollection = async (data, token) => {
    try {
        const response = await api.post("/collect", data, {headers: {
            Authorization: `Bearer ${token}`
        }});

        return response.data;
    } catch(error) {
        throw new Error('Ocorreu ao adicionar a coleta, tente mais tarde');
    }
}