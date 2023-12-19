import style from "./Loader.module.scss"

interface ILoaderProps {
    size: number
}

export const Loader: React.FC<ILoaderProps> = (props) => {
    const {
        size,
    } = props

    return(
        <span 
            className={style.Loader}
            style={{width: `${size}px`, height: `${size}px`}}>
        </span>
    )
}