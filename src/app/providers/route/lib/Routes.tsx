import { ConstructorPageLazy } from "pages/constructor-page";
import { InfoPageLazy } from "pages/info-page";
import { MainPageLazy } from "pages/main-page";
import { NotFoundPageLazy } from "pages/notfound-page";
import { TestPageLazy } from "pages/test-page";
import { RouteProps } from "react-router-dom";
import { routePathName } from "shared/config/route";

export const Routes: RouteProps[] = [
    {
        path: routePathName.constructor,
        element: <ConstructorPageLazy/>
    },
    {
        path: routePathName.test,
        element: <TestPageLazy/>
    },
    {
        path: routePathName.notfound,
        element: <NotFoundPageLazy/>
    },
    {
        path: routePathName.main,
        element: <MainPageLazy/>
    },
    {
        path: routePathName.info,
        element: <InfoPageLazy/>
    }
]
