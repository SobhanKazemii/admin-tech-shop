import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TRes = {
    status: number;
    url: string;
};

const uploadApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
    }),
    reducerPath: "uploadPath",
    endpoints: (builder) => ({
        upload: builder.mutation<TRes, FormData>({
            query: (body) => ({
                url: "/upload",
                method: "POST",
                body,
            }),
        }),
    }),
});

export default uploadApi;
export const { useUploadMutation } = uploadApi;
