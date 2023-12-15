import { Header } from "./header/Header"

interface ILayoutProps {
    children: React.ReactNode
}

export const Layout: React.FC<ILayoutProps> = ({children}) => {
    return(
        <>
            <Header/>
            {children}
        </>
    )
}