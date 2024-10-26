import styles from "./soccer-action-center.module.css"
import AdBoardsSection from "./ad-boards-section"
import Stadium from "./stadium"
import Pitch from "./pitch"
import { MltsContext } from "../context/mlts-context"
import { useContext } from "react"

export default function SoccerActionCenter() {
    const { cameraPosition } = useContext(MltsContext)

    return (
        <div className={styles["ml1-MatchLiveSoccerModule_ActionSection"]}>
            <div
                className={styles["ml1-MatchLiveSoccerModule_DistortedContent"]}
                style={{
                    "--ml1-scale": cameraPosition.scale,
                    "--ml1-sceneXTranslate": cameraPosition.translateX + "px",
                    "--ml1-sceneYTranslate": cameraPosition.translateY + "px",
                    "--ml1-sceneZAdjustment": cameraPosition.rotateZ + "deg",
                    "--ml1-sceneXAdjustment": cameraPosition.rotateX + "deg",
                }}
            >
                <Pitch />
                <Stadium />
                {/*ml1-ScoresOverlay Hidden */}
                {/*ml1-MatchLiveSoccerModule_AnimationsContainer */}
                <AdBoardsSection />
            </div>
        </div>
    )
}
