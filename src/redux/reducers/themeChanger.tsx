import { createSlice, PayloadAction } from "@reduxjs/toolkit"
export interface ThemeState {
    darkTheme: boolean,
}

export const initialState: ThemeState = {
    darkTheme: false
}

export const switchThemeSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.darkTheme = !state.darkTheme
        }
    },
})

export const { changeTheme } = switchThemeSlice.actions

export default switchThemeSlice.reducer
