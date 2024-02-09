import Layout from "@/components/layout/Layout";
import HomePage from "@/pages/HomePage";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
        ],
    },
];

export default routes;
