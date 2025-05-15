import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category"
import NotFound from "../pages/NotFound";

const routes = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/item/:id",
                element: <Item />
            },
            {
                path: "/category/:id",
                element: <Category />
            },
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <>Login</>
            },
            {
                path: "/compra",
                element: <>Compra</>
            },
            {
                path: "/renta",
                element: <>Renta</>
            },
            {
                path: "/perfil",
                element: <>Perfil</>
            },
            {
                path: "/contacto",
                element: <>Contacto</>
            },
            {
                path: "*",
                element: <NotFound/>
            },

        ],
    },

];

export const router = createBrowserRouter(routes);