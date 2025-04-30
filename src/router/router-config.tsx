import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/login.tsx";

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
                element: <div>register</div>
            }
        ]
    }
]);

export default router;