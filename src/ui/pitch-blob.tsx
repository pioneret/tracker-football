import PitchBlobPlayerReceiving from "../ui/pitch-blob-player-receiving"
import PitchBlobOriginalDisc from "../ui/pitch-blob-original-disc"
import PitchBlobPlayerActing from "../ui/pitch-blob-player-acting"
import PitchBlobTargetDisc from "../ui/pitch-blob-target-disc"
import styles from "../ui/pitch-blob.module.css"
import PitchBlobBall from "../ui/pitch-blob-ball"
import PitchBlobGoalLine from "../ui/pitch-blob-goal-line"
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
            <PitchBlobPlayerActing />
            <PitchBlobGoalLine />
        </div>
    )
}
