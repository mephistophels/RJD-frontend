import {createBrowserRouter,} from "react-router-dom";
import "./index.css";
import {Wrapper} from "./components/Wrapper";
import {PATH} from "./consts";
import Auth from "./pages/auth/Auth";
import OrderRegistration from "./pages/auth/OrderRegistration";

export const router = createBrowserRouter([
    {
        path: PATH.LOGIN,
        element: <Auth />
    },
    {
        path: PATH.BASE_REGISTRATION,
        element: <Auth />
    },
    {
        path: PATH.HOME,
        element: <Wrapper />,
        children: [
            {
                path: PATH.HOME,
                element: <></>,
            },
            {
                path: PATH.ORDER_REGISTRATION,
                element: <OrderRegistration />,
            },
        ]
    }
]);
