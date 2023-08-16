import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    token: null,
    generalStats: null,
    trashCollections: [],
    notes: [],
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setLogin: (state, action) => {
            state.user = action.payload.user;
            state.token = action.payload.token;
        },
        setLogout: (state) => {
            state.user = null;
            state.token = null;
        },
        setGeneralStats: (state, action) => {
            state.generalStats = action.payload.generalStats;
        },
        setTrashCollections: (state, action) => {
            state.trashCollections = action.payload.trashCollections;
        },
        setNotes: (state, action) => {
            state.notes = action.payload.notes;
        }
    }
});

export const {setLogin, setLogout, setGeneralStats, 
setTrashCollections, setNotes} = authSlice.actions;

export default authSlice.reducer;