import { MltsContext } from "../context/mlts-context"
import styles from "./pitch-blob-target-disc.module.css"
import classNames from "classnames"
import React from "react"

export default function PitchBlobTargetDisc() {
    /*TODO CONTROLS*/
    const { ballPosition } = React.useContext(MltsContext)

    if (!ballPosition.current) {
        return null
    }

    return (
        <div
            className={classNames(
                styles["ml1-XYBlob_TargetDisc"],
                styles["ml1-XYBlob-pulse"],
            )}
            style={{
                left: `${ballPosition.current.x * 100}%`,
                top: `${ballPosition.current.y * 100}%`,
                transform: "scale(3)",
            }}
        ></div>
    )
}
