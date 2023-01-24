import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum DateFilters { 
    'TODAY', 'YESTERDAY', 'MONTH'
}

type DateFilterState = {
    dateFilter: DateFilters
}

const initialState: DateFilterState = {
    dateFilter: DateFilters.TODAY
}

export const dateFilterSlice = createSlice({
    name: 'dateFilter',
    initialState,
    reducers: {
        setDateFilter: (state, action: PayloadAction<DateFilters>) => {
            state.dateFilter = action.payload
        },
    }
})

export const { setDateFilter } = dateFilterSlice.actions

export default dateFilterSlice.reducer