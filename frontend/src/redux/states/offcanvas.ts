import { createSlice } from '@reduxjs/toolkit'

type OffcanvasState = {
    show: boolean
}

const initialState: OffcanvasState = {
    show: false
}

export const offcanvasSlice = createSlice({
    name: 'offcanvas',
    initialState,
    reducers: {
        toggleOffcanvas: (state) => {
            state.show = !state.show
        },
    }
})

export const { toggleOffcanvas } = offcanvasSlice.actions

export default offcanvasSlice.reducer