import { MltsContext } from "../context/mlts-context"
import styles from "./pitch-blob-player-acting.module.css"
import React from "react"

export default function PitchBlobPlayerActing() {
    const { ballPosition } = React.useContext(MltsContext)

    if (!ballPosition.current) {
        return null
    }

    return (
        <div
            className={styles["ml1-XYBlob_PlayerActing"]}
            style={{
                opacity: 1,
                left: `${ballPosition.current.x * 100}%`,
                top: `${ballPosition.current.y * 100}%`,
            }}
        >
            LUKA
        </div>
    )
}
