import { configureStore } from '@reduxjs/toolkit'
import dateFilter from './states/dateFilter'
import plan from './states/plan'

const store = configureStore({
    reducer: {
        'dateFilter': dateFilter,
        'plan': plan,

    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch