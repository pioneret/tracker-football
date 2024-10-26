import goalPostStyles from "./goal-post.module.css"
import PitchDynamicSvg from "./pitch-dynamic-svg"
import styles from "pitch.module.css"
import GoalPost from "./goal-post"
import PitchBlob from "./pitch-blob"
import PitchCone from "./pitch-cone"

export default function Pitch() {
    return (
        <div className={styles["ml1-MatchLiveSoccerModule_SVGPitchContainer"]}>
            <PitchDynamicSvg />
            <GoalPost className={goalPostStyles["ml1-GoalPost-home"]} />
            <GoalPost className={goalPostStyles["ml1-GoalPost-away"]} />
            <PitchBlob />
            <PitchCone />
        </div>
    )
}
