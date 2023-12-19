import React, { CSSProperties, HTMLAttributes } from "react"
import style from "./Image.module.scss"
import classNames from "classnames"

interface IImageProps extends HTMLAttributes<HTMLDivElement> {
    src: string,
    className?: string,
    margin?: string,
    width?: string,
    height?: string,
    borderRaduius?: number
}

export const Image: React.FC<IImageProps> = (props) => {
    const {
        src,
        className,
        margin,
        width = "100%",
        height = "100%",
        borderRaduius,
        ...otherProps
    } = props

    const cssStyles: CSSProperties = {
        margin: margin,
        width: width,
        height: height,
        borderRadius: borderRaduius,
        backgroundImage: `url(${src})`
    }

    return(
        <div 
            {...otherProps} 
            className={classNames(style.image, className)} 
            style={cssStyles}/>
    )
}