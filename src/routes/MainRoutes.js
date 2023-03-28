import LayoutOne from "../components/Layout/LayoutOne";
import HomePage from "../pages/Home";

const MainRoutes = {
    path:'/',
    element: <LayoutOne/>,
    children: [
        {
            path: '/',
            element: <HomePage/>
        }
    ]
}

export default MainRoutes;