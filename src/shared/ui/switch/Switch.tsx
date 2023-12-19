import React from "react"
import style from "./Switch.module.scss"

interface ISwitchProps {
    speed?: number
}

export const Switch: React.FC<ISwitchProps> = (props) => {
    const {
        speed = 300,
    } = props
    return(
        <label className={style.wrapper}>
            <input type="checkbox"/>
            <div className={style.toggler_slider}>
                <div style={{transition: `all ${speed}ms ease`}} className={style.toggler_knob}></div>
            </div>
      </label>
    )
}