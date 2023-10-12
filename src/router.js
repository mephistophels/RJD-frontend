import {createBrowserRouter,} from "react-router-dom";
import "./index.css";
import {Wrapper} from "./components/Wrapper";
import {PATH} from "./consts";
<<<<<<< HEAD
import Auth from "./pages/auth/Auth";
import OrderRegistration from "./pages/auth/OrderRegistration";
=======
import {Home} from "./pages/Home";
>>>>>>> main

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
                element: <Home/>,
            },
            {
                path: PATH.ORDER_REGISTRATION,
                element: <OrderRegistration />,
            },
        ]
    }
]);
