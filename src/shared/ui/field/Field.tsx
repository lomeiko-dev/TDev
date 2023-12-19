import style from "./Field.module.scss"
import classNames from "classnames";
import { CSSProperties, HTMLAttributes, useEffect, useState } from "react";

export enum enumSizeInput {
    SMALL = "small",
    MIDDLE = "middle",
    LARGE = "large",
    NONE = 0
}

interface IFieldProps extends HTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    className?: string,
    sizeInput ?: enumSizeInput,
    typeInput?: "date" | "datetime-local" | "email" | "file" | "month" | "number" | "password" | "search" | "tel" | "text" | "url"
    margin?: string,
    padding?: string,
    width?: string,
    borderRadius?: number,
    isMultiline?: boolean,
    fontSize?: number,
    color?: string,
    bgColor?: string,
    border?: string,
}

export const Field: React.FC<IFieldProps> = (props) => {
    const {
        className,
        sizeInput = enumSizeInput.NONE,
        margin,
        padding,
        width = "200px",
        borderRadius = 5,
        isMultiline = false,
        typeInput = "text",
        fontSize,
        color,
        border,
        bgColor,
        ...otherProps
    } = props

    const [background, setBackground] = useState<string>();

    useEffect(() => {
        setBackground(bgColor);
    }, [])

    const cssStyles: CSSProperties = {
        margin: margin,
        padding: padding,
        width: width,
        borderRadius: borderRadius,
        fontSize: fontSize,
        color: color,
        backgroundColor: background,
        border: border
    }

    const blurHandle = () => {
        setBackground(bgColor)
    }
    const focusHandle = () => {
        setBackground(bgColor + "90")
    }

    return(
        <>
            {isMultiline ? 
                <textarea 
                    onBlur={blurHandle} onFocus={focusHandle}
                    {...otherProps}
                    style={cssStyles} className={classNames(style.input, className, style[sizeInput])}/> :
                <input 
                    onBlur={blurHandle} onFocus={focusHandle}
                    {...otherProps}
                    style={cssStyles} className={classNames(style.input, className, style[sizeInput])} 
                    type={typeInput}/>}
        </>
    )
}