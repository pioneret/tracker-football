import React, { FC, ReactNode } from "react"
import styles from "./Button.module.css"

interface Props {
    children: ReactNode | ReactNode[]
}

const Button: FC<Props> = ({ children }) => {
    return <button className={styles["btnPrimary"]}>{children}</button>
}

export default Button
