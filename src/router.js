import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Login from "./pages/auth/Login";
import Registration from "./pages/auth/Registration";
import {Wrapper} from "./components/Wrapper";
import Home from './pages/home/Home';
import ClientMyOrders from './pages/client/ClientMyOrders';
import ImplementerAvailableOrders from './pages/implementer/ImplementerAvailableOrders';
import ImplementerTask from "./pages/implementer/ImplementerOrderRespond";
import ImplementerTodo from "./pages/implementer/ImplementerTodo";
import ImplementerCloseOrder from "./pages/implementer/ImplementerCloseOrder";
import ClientCheckOrder from "./pages/client/ClientCheckOrder";
import Balance from "./pages/Balance";
import ClientCreateOrder from "./pages/client/ClientCreateOrder";
import {ClientResponses} from "./pages/client/ClientResponses";
import {PATH} from "./consts";
import Profile from "./pages/profile/Profile";

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
                element: <Home />,
            },
        ]
    }
]);
