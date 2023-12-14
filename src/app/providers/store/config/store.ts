import { ReducersMapObject, configureStore } from "@reduxjs/toolkit";
import { createReducerManager } from "../lib/reducerManager";
import { IStore } from "./types";

const rootReducer: ReducersMapObject<IStore> = {
    
}

export const reducerManager = createReducerManager(rootReducer);

export const store = configureStore({
    reducer: reducerManager.reduce,
    devTools: true,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch