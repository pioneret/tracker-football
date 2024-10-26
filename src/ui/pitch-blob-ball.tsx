import styles from "./pitch-blob-ball.module.css"
import { MltsContext } from "../context/mlts-context"
import React from "react"

export default function PitchBlobBall() {
    const { ballPosition, ballOnTargetStatus } = React.useContext(MltsContext)

    if (!ballPosition.current) {
        return null
    }

    const x = ballOnTargetStatus.show
        ? ballOnTargetStatus.targetX
        : ballPosition.current.x
    const y = ballOnTargetStatus.show
        ? ballOnTargetStatus.targetY
        : ballPosition.current.y

    return (
        <div
            className={styles["ml1-XYBlob_BallContainer"]}
            style={{
                left: `${x * 100}%`,
                top: `${y * 100}%`,
            }}
        ></div>
    )
}
