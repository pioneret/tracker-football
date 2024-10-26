import styles from "./pitch-cone.module.css"
import { ConeStatusType } from "../types"
import React from "react"

function PitchConeUI({ coneStatus }: { coneStatus: ConeStatusType }) {
    const ConeActiveSides: Record<1 | 2 | 3, boolean[]> = {
        1: [false, true, false],
        2: [false, false, true],
        3: [true, false, false],
    }

    const activeSides = ConeActiveSides[coneStatus.type] ?? [
        false,
        false,
        false,
    ]

    return (
        <div className={styles["ml1-MatchLiveSoccerModule_ConeContainer"]}>
            {coneStatus.status && coneStatus.ballPosition && (
                <svg
                    viewBox="0 0 353 433"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles["ml1-MatchLiveSoccerModule_ConeAsset"]}
                    style={{
                        left: `${coneStatus.ballPosition.x * 100}%`,
                        top: `${coneStatus.ballPosition.y * 100}%`,
                        transform: `translateY(-50%) rotate(${coneStatus.angle}deg)`,
                    }}
                >
                    <g
                        fillRule="nonzero"
                        className={
                            styles["ml1-MatchLiveSoccerModule_ConeComponent"]
                        }
                        id="ml1-WideKickRadial"
                        style={{
                            visibility: activeSides[0] ? "visible" : "hidden",
                        }}
                    >
                        <path
                            id="ml1-WideKickRadialOuter"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeOuter"]
                            }
                            d="M278.584658,433 C325.213017,373.232594 353,298.07888 353,216.433882 C353,134.847656 325.251258,59.7468358 278.687617,0 L0,216.539671 L278.584658,433 Z"
                            fill="var(--ml1-coneColour)"
                            opacity="0.3"
                        ></path>
                        <path
                            id="ml1-WideKickRadialCentre"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeMid"]
                            }
                            d="M183.03038,358 C213.68962,318.648413 232,269.193714 232,215.43388 C232,161.732819 213.727797,112.331017 183.136101,73 L0,215.539672 L183.03038,358 Z"
                            fill="var(--ml1-coneColour)"
                            opacity="0.5"
                        ></path>
                        <path
                            id="ml1-WideKickRadialInner"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeInner"]
                            }
                            d="M90.6996154,286 C105.912051,266.527758 115,242.049041 115,215.43521 C115,188.880279 105.953333,164.454572 90.8057692,145 L0,215.54123 L90.6996154,286 Z"
                            fill="var(--ml1-coneColour)"
                            opacity="0.7"
                        ></path>
                    </g>
                    <g
                        fillRule="nonzero"
                        className={
                            styles["ml1-MatchLiveSoccerModule_ConeComponent"]
                        }
                        id="ml1-NarrowKickRadial"
                        style={{
                            visibility: activeSides[1] ? "visible" : "hidden",
                        }}
                    >
                        <path
                            id="ml1-NarrowKickRadialOuter"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeOuter"]
                            }
                            fill="var(--ml1-coneColour)"
                            d="M0 216.538 329.68 343C344.707 303.712 353 261.087 353 216.501c0-44.585-8.292-87.213-23.32-126.501L.173 216.4l-.174.138Z"
                        ></path>
                        <path
                            id="ml1-NarrowKickRadialCentre"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeMid"]
                            }
                            fill="var(--ml1-coneColour)"
                            d="m0 216.538 216.98 83.233c9.91-25.857 15.38-53.915 15.38-83.27 0-29.354-5.47-57.412-15.377-83.269L.173 216.4l-.173.138Z"
                        ></path>
                        <path
                            id="ml1-NarrowKickRadialInner"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeInner"]
                            }
                            fill="var(--ml1-coneColour)"
                            d="m0 216.538 107.07 41.07a114.58 114.58 0 0 0 7.594-41.107 114.64 114.64 0 0 0-7.592-41.106L.174 216.4l-.174.138Z"
                        ></path>
                    </g>
                    <g
                        fillRule="nonzero"
                        className={
                            styles["ml1-MatchLiveSoccerModule_ConeComponent"]
                        }
                        style={{
                            visibility: activeSides[2] ? "visible" : "hidden",
                        }}
                        id="ml1-ThrowRadial"
                    >
                        <path
                            id="ml1-ThrowRadialOuter"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeOuter"]
                            }
                            d="M164.44594,362 C255.272751,283.572597 255.260808,156.415459 164.44594,78 L0.001,219.999005 L164.44594,362 L164.44594,362 Z"
                            fill="var(--ml1-coneColour)"
                        ></path>
                        <path
                            id="ml1-ThrowRadialInner"
                            className={
                                styles["ml1-MatchLiveSoccerModule_ConeInner"]
                            }
                            d="M82.611 287.665c45.628-39.398 45.622-103.277 0-142.67L0 216.33l82.611 71.336Z"
                            fill="var(--ml1-coneColour)"
                        ></path>
                    </g>
                </svg>
            )}
        </div>
    )
}

export default React.memo(PitchConeUI)
