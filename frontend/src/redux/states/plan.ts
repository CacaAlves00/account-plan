import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum Plans {
    'Contas a pagar',
    'Despesas fixas',
    'Receita a débito',
    'Receita a crédito', 
    'Receita a dinheiro'
}

type PlanState = {
    plan: Plans
}

const initialState: PlanState = {
    plan: Plans['Contas a pagar']
}

export const planSlice = createSlice({
    name: 'dateFilter',
    initialState,
    reducers: {
        setPlan: (state, action: PayloadAction<Plans>) => {
            state.plan = action.payload
        },
    }
})

export const { setPlan } = planSlice.actions

export default planSlice.reducer