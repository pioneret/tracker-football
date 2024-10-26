import PitchBlobPlayerReceiving from "./pitch-blob-player-receiving"
import PitchBlobOriginalDisc from "./pitch-blob-original-disc"
import PitchBlobPlayerActing from "./pitch-blob-player-acting"
import PitchBlobTargetDisc from "./pitch-blob-target-disc"
import styles from "./pitch-blob.module.css"
import PitchBlobBall from "./pitch-blob-ball"
import PitchBlobGoalLine from "./pitch-blob-goal-line"
import { useContext } from "react"
import { MltsContext } from "../context/mlts-context"
export default function PitchBlob() {
    const { pitchBlobRef } = useContext(MltsContext)

    return (
        <div
            ref={pitchBlobRef}
            className={styles["ml1-XYBlob"]}
            style={{
                opacity: "1",
                "--ml1-XYBlob-PlayerTag-scale": "1",
            }}
        >
            <PitchBlobOriginalDisc />
            <PitchBlobTargetDisc />
            <PitchBlobBall />
            {/*<PitchBlobPlayerReceiving />*/}
            {/*<PitchBlobPlayerActing />*/}
            <PitchBlobGoalLine />
        </div>
    )
}
