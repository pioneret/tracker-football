import styles from "./pitch-blob-goal-line.module.css"
import { MltsContext } from "../context/mlts-context"
import React from "react"

export default function PitchBlobGoalLine() {
    const { ballOnTargetStatus, ballPosition } = React.useContext(MltsContext)

    if (!ballOnTargetStatus.show || !ballPosition.current) {
        return null
    }

    return (
        <div
            className={styles["ml1-XYBlob_GoalLine"]}
            style={{
                transform: `rotate(${ballOnTargetStatus.angle}deg)`,
                left: `${ballPosition.current.x * 100}%`,
                top: `${ballPosition.current.y * 100}%`,
                "--ml1-line-distance": `${ballOnTargetStatus.distance}px`,
            }}
        ></div>
    )
}
