import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import IBanner from "../../../types/models/banner";

const bannerApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: "http://localhost:3000/api",
    }),
    reducerPath: "bannerApi",
    endpoints: (builder) => ({
        addBanner: builder.mutation<
            Partial<IBanner>,
            { status: number; data: { message: string; url: string } }
        >({
            query: (body) => ({
                url: "/banner",
                method: "POST",
                body,
            }),
        }),
        getBanner: builder.query({
            query: () => "/banner",
        }),
    }),
});

export default bannerApi;
export const { useAddBannerMutation, useGetBannerQuery } = bannerApi;
