import goalPostStyles from "../ui/goal-post.module.css"
import PitchDynamicSvg from "../ui/pitch-dynamic-svg"
import styles from "../ui/pitch.module.css"
import GoalPost from "../ui/goal-post"
import PitchBlob from "../ui/pitch-blob"
import PitchCone from "../ui/pitch-cone"

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
