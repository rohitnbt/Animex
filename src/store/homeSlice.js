import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    animeBackground: "null",
    mangaBackground: "null",
    characterBackground: "null"
}

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
        getAnimeBackground: (state, action) => {
            state.animeBackground = action.payload;
        },
        getMangaBackground: (state, action) => {
            state.mangaBackgroundBackground = action.payload;
        },
        getCharacterBackground: (state, action) => {
            state.characterBackgroundBackground = action.payload;
        }
    }
})

export const { getAnimeBackground, getMangaBackground, getCharacterBackground } = homeSlice.actions

export default homeSlice.reducer