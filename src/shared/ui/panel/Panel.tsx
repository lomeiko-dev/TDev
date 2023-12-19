import style from "./Panel.module.scss"
import classNames from "classnames"
import { CSSProperties, HTMLAttributes } from "react"

export enum enumPositionPanel {
    LEFT = "left",
    TOP = "top",
    BOTTOM = "bottom",
    RIGHT = "right",
    LEFT_TOP = "left_top",
    RIGHT_TOP = "right_top",
    LEFT_BOTTOM = "left_bottom",
    RIGHT_BOTTOM = "right_bottom",
    NONE = 0
}

export enum enumOrintationPanel {
    ROW = "row",
    COLUMN = "column",
    ROW_CENTER = "row_center",
    ROW_CENTERED = "row_centered",
    COLUMN_CENTER = "column_center",
    COLUMN_CENTERED = "column_centered",
    NONE = 0
}

interface IPanelProps extends HTMLAttributes<HTMLDivElement>{
    children: React.ReactNode,
    className?: string,
    orientationPanel?: enumOrintationPanel,
    positionPanel?: enumPositionPanel,
    margin?: string,
    padding?: string,
    width?: string,
    height?: string,
    bgColor?: string,
    border?: string,
    borderRadius?: number
}

export const Panel: React.FC<IPanelProps> = (props) => {
    const {
        children,
        className,
        orientationPanel = enumOrintationPanel.NONE,
        positionPanel = enumPositionPanel.NONE,
        margin,
        padding = "5px 5px",
        width = "100%",
        height = "10px",
        bgColor,
        border,
        borderRadius,
        ...otherProps
    } = props

    const cssStyles: CSSProperties = {
        margin: margin,
        padding: padding,
        width: width,
        height: height,
        backgroundColor: bgColor,
        border: border,
        borderRadius: borderRadius
    }

    return(
        <div 
            {...otherProps}
            style={cssStyles}
            className={classNames(className, style.panel, style[orientationPanel], style[positionPanel])}>
            {children}
        </div>
    )
}