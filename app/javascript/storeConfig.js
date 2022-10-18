import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./Redux";

const store = configureStore({
    reducer: {
        displayGreetings: reducer,
    },
});

export default store