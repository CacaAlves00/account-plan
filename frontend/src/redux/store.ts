import { configureStore } from '@reduxjs/toolkit'
import dateFilter from './states/dateFilter'
import plan from './states/plan'
import offcanvas from './states/offcanvas'

const store = configureStore({
    reducer: {
        'dateFilter': dateFilter,
        'plan': plan,
        'offcanvas': offcanvas

    }
})

export default store

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch