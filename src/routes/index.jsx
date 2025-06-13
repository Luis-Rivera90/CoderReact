import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import Item from "../pages/Item";
import Category from "../pages/Category"
import NotFound from "../pages/NotFound";
import AddDoc from "../pages/AddDoc";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";

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
                element: <NotFound />
            },
            {
                path: "/add-doc",
                element: <AddDoc />,
            },
            {
                path: "/cart",
                element: <Cart />,
            },
            {
                path: "/checkout",
                element: <Checkout />
            },

        ],
    },

];

export const router = createBrowserRouter(routes);