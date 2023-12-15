import { BrowserRouter, Route, Routes as ReactRoutes } from "react-router-dom"
import { Routes } from "../lib/Routes"
import React from "react"

interface iRouteProviderProps {
    children: React.ReactNode,
}

export const RouteProvider:React.FC<iRouteProviderProps> = ({children}) => {
    return(
        <BrowserRouter>
            <ReactRoutes>
                {Routes.map(item => <Route key={item.path} {...item}/>)}
            </ReactRoutes>
            {children}
        </BrowserRouter>
    )
}