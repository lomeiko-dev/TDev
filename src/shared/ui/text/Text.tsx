import classNames from 'classnames';
import style from './Text.module.scss';
import { CSSProperties, HTMLAttributes } from 'react';

export enum enumSizeText {
    SMALL = "small",
    MIDDLE = "middle",
    LARGE = "large",
    OVERLARGE = "over_large",
    NONE = 0
}

export enum enumTypeText {
    TEXT = "text",
    ERROR = "error",
    WARNING = "warning",
    SELECTED = "selected",
    DESCRIPTION = "description",
    NONE = 0
}

export enum enumStyleText {
    SHADOW = "shadow",
    
}

interface ITextProps extends HTMLAttributes<HTMLDivElement> {
    text: string,
    className?: string,
    sizeText?: enumSizeText,
    typeText?: enumTypeText,
    color?: string,
    margin?: string,
    fontSize?: number,
    fontWeight?: "300" | '400' | '500' | '600' | '700' | '800',
    border?: string
}

export const Text: React.FC<ITextProps> = (props) => {
    const {
        text,
        className,
        color,
        fontSize,
        fontWeight,
        margin,
        sizeText = enumSizeText.NONE,
        typeText = enumTypeText.NONE,
        ...otherProps
    } = props

    const cssStyles: CSSProperties = {
        color: color,
        margin: margin,
        fontWeight: fontWeight,
        fontSize: fontSize,
    }

    return(
        <div 
            {...otherProps} 
            style={cssStyles} 
            className={classNames(className, style[sizeText], style[typeText])}>
            {text}
        </div>
    )
}