import LayoutTwo from "../components/Layout/LayoutTwo";
import CorporatePage from "../pages/Corporate";

const CorporateRoutes = {
    path:'/',
    element: <LayoutTwo/>,
    children: [
        {
            path: '/corporate-club',
            element: <CorporatePage/>
        }
    ]
}

export default CorporateRoutes;