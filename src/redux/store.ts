import { combineReducers, configureStore } from "@reduxjs/toolkit";
import general from "./general";

const reducer = combineReducers({
  general,
});

const store = configureStore({
  reducer,
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateType = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type DispatchType = typeof store.dispatch;
