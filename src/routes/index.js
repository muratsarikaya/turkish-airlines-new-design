import {useRoutes} from "react-router-dom";

import MainRoutes from "./MainRoutes";
import CorporateRoutes from "./CorporateRoutes";

const ThemeRoutes = () => {
    return useRoutes([MainRoutes, CorporateRoutes])

}

export default ThemeRoutes;