import { MltsContext } from "../context/mlts-context"
import styles from "./pitch-blob-original-disc.module.css"
import classnames from "classnames"
import React from "react"

export default function PitchBlobOriginalDisc() {
    /*TODO CONTROLS*/
    const { ballPosition, activeTeamHistory } = React.useContext(MltsContext)

    const ref = React.useRef<HTMLDivElement>(null)

    React.useMemo(() => {
        if (
            ref.current &&
            activeTeamHistory.current === activeTeamHistory.prev
        ) {
            ref.current.style.animation = "none"
            ref.current.offsetHeight
            ref.current.style.animation = ""
        }
    }, [ballPosition.prev])

    if (!ballPosition.prev) {
        return null
    }

    return (
        <div
            ref={ref}
            className={classnames(
                styles["ml1-XYBlob_OriginDisc"],
                styles["ml1-XYBlob-pulse"],
            )}
            style={{
                transform: "scale(1)",
                left: `${ballPosition.prev.x * 100}%`,
                top: `${ballPosition.prev.y * 100}%`,
            }}
        ></div>
    )
}
