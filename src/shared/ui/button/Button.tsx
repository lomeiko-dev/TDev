import style from "./Buttom.module.scss"
import classNames from "classnames"
import { CSSProperties, HTMLAttributes } from "react"

export enum enumSizeButton {
    SMALL = "small",
    MIDDLE = "middle",
    LARGE = "large",
    NONE = 0,
}

export enum enumStyleButton {
    FILLED = "filled",
    CLEAR = "clear",
    OUTLINE = "outline",
}

interface IButtonProps extends HTMLAttributes<HTMLButtonElement> {
    children?: React.ReactNode,
    icon?: React.ReactNode,
    className?: string,
    sizeButton?: enumSizeButton,
    styleButton?: enumStyleButton,
    margin?: string,
    padding?: string,
    border?: string,
    borderRadius?: number,
    bgColor?: string,
    color?: string,
    width?: string,
    height?: string,
}

export const Button: React.FC<IButtonProps> = (props) => {
    const {
        children,
        icon,
        className,
        sizeButton = enumSizeButton.NONE,
        styleButton = enumStyleButton.CLEAR,
        margin = "5px 5px",
        padding,
        border,
        borderRadius = '5px',
        bgColor,
        color,
        width,
        height,
        ...otherProps
    } = props

    const cssStyles: CSSProperties = {
        margin: margin,
        padding: padding,
        border: border,
        borderRadius: borderRadius,
        backgroundColor: bgColor,
        color: color,
        width: width,
        height: height,
    }

    return(
        <button
            {...otherProps} 
            style={cssStyles}
            className={classNames(className, style.button, style[sizeButton], style[styleButton])}>
            {icon}
            {children}
        </button>
    )
}