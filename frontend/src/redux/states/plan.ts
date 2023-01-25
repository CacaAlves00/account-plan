import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export enum Plans {
    'Contas a pagar' = 0,
    'Despesas fixas',
    'Receita a débito',
    'Receita a crédito', 
    'Receita a dinheiro'
}

export type Plan = keyof typeof Plans

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