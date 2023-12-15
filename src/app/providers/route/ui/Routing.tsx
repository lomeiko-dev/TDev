import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom"
import { Routes } from "../lib/Routes"

export const Routing = () => {
    return(
        <BrowserRouter>
            <ReactRoutes>
                {Routes.map(item => <Route key={item.path} {...item}/>)}
            </ReactRoutes>
        </BrowserRouter>
    )
}