"use client"

import { MltsContext } from "../context/mlts-context"
import styles from "../ui/match-live-tracker-ui.module.css"
import SoccerActionCenter from "../ui/soccer-action-center"
import EventCardContainer from "../ui/event-card-container"
import EventInfoRow from "../ui/event-info-row"
import GroundLevel from "../ui/ground-level"
import SoccerClock from "../ui/soccer-clock"
import { ComponentProps, useContext } from "react"
import ScoreUpdate from "../ui/score-update"
import WipeAnimation from "../ui/wipe-animation"

export default function MatchLiveTrackerUI({
    children,
}: ComponentProps<"div">) {
    const { activeColor, isEventInfoFixed } = useContext(MltsContext)

    return (
        <div
            id={"ml1-MatchLiveSoccerModule_Constrainer"}
            className={styles["ml1-MatchLiveSoccerModule_Constrainer"]}
            style={{
                "--ml1-XYBlobColor": activeColor,
            }}
        >
            <div className={styles["ml1-MatchLiveSoccerModule_Container"]}>
                <SoccerClock />
                <SoccerActionCenter />
                <EventInfoRow
                    style={
                        isEventInfoFixed
                            ? {
                                  position: "fixed",
                                  top: "var(--ml1-event-top-distance)",
                                  zIndex: 10,
                                  backgroundColor: "#1f1f1f",
                                  borderBottom: "0px",
                                  marginTop: "10px",
                                  width: "100%",
                                  maxWidth: "100%",
                                  left: "0",
                              }
                            : {
                                  marginTop: "15px",
                              }
                    }
                />
                {children}
                <GroundLevel />
                <EventCardContainer />
                <ScoreUpdate />
                <WipeAnimation />
            </div>
        </div>
    )
}
