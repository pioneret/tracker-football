"use client"

import { MltsContext } from "../context/mlts-context"
import styles from "match-live-tracker-ui.module.css"
import SoccerActionCenter from "./soccer-action-center"
import EventCardContainer from "./event-card-container"
import EventInfoRow from "./event-info-row"
import GroundLevel from "./ground-level"
import SoccerClock from "./soccer-clock"
import { useContext } from "react"
import ScoreUpdate from "./score-update"
import WipeAnimation from "./wipe-animation"

export default function MatchLiveTrackerUI() {
    const { activeColor } = useContext(MltsContext)

    return (
        <div
            className={styles["ml1-MatchLiveSoccerModule_Constrainer"]}
            style={{
                "--ml1-XYBlobColor": activeColor,
            }}
        >
            <div className={styles["ml1-MatchLiveSoccerModule_Container"]}>
                <SoccerClock />
                <SoccerActionCenter />
                <EventInfoRow />
                <GroundLevel />
                <EventCardContainer />
                <ScoreUpdate />
                <WipeAnimation />
            </div>
        </div>
    )
}
