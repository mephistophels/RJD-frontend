import {createBrowserRouter,} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import {Wrapper} from "./components/Wrapper";
import {PATH} from "./consts";

export const router = createBrowserRouter([
    {
        path: PATH.LOGIN,
        element: <Login/>
    },
    {
        path: PATH.REGISTRATION,
        element: <Registration/>
    },
    {
        path: PATH.HOME,
        element: <Wrapper />,
        children: [
            {
                path: PATH.HOME,
                element: <></>,
            },
        ]
    }
]);
