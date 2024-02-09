import { configureStore } from "@reduxjs/toolkit";
import bannerApi from "./api/slices/bannerApi";
import uploadApi from "./api/slices/uploadApi";

const store = configureStore({
    reducer: {
        [bannerApi.reducerPath]: bannerApi.reducer,
        [uploadApi.reducerPath]: uploadApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([
            uploadApi.middleware,
            bannerApi.middleware,
        ]),
});

export default store;
