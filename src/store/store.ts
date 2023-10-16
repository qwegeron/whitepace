import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postByIdApi, postsApi } from "../shared/api/postsApi";

const rootReducer = combineReducers({
  [postsApi.reducerPath]: postsApi.reducer,
  [postByIdApi.reducerPath]: postByIdApi.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(
        postsApi.middleware,
        postByIdApi.middleware
      ),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
