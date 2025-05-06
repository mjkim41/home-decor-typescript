import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login.tsx";
import Signup from "../pages/Signup.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        // element: ,
        // errorElement: ,
        children: [{
            path: '/sign-in',
            element: <Login />
            },
            {
                path: '/sign-up',
                element: <Signup />
            }
        ]
    }
]);

export default router;