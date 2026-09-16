import { MltsContext } from "../context/mlts-context"
import styles from "../ui/pitch-blob-player-acting.module.css"
import React from "react"
import { ColorUtils } from "../lib/color-utils"

export default function PitchBlobPlayerActing() {
    const { ballPosition, playerName, activeColor } =
        React.useContext(MltsContext)

    if (!ballPosition.current || !playerName) {
        return null
    }

    // The tag takes the kit colour, so the label has to be whichever of black or
    // white still reads on it — white on a dark kit, black on a light one. Both
    // variables are set here rather than globally so only this tag and its
    // pointer are tinted, leaving the ball and the discs alone.
    const teamColorStyle = activeColor
        ? {
              "--ml1-XYBlobColor": activeColor,
              "--ml1-XYBlobFontColour": ColorUtils.ContrastText(activeColor),
          }
        : {}

    return (
        <div
            className={styles["ml1-XYBlob_PlayerActing"]}
            style={
                {
                    opacity: 1,
                    left: `${ballPosition.current.x * 100}%`,
                    top: `${ballPosition.current.y * 100}%`,
                    ...teamColorStyle,
                } as React.CSSProperties
            }
        >
            {playerName}
        </div>
    )
}
