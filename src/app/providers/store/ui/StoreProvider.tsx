import { Provider } from "react-redux"
import { store } from "../config/store"

interface IStoreProvider {
    children: React.ReactNode,
}

export const StoreProvider: React.FC<IStoreProvider> = ({children}) => {
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}