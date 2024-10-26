"use client"

import { MltsContext } from "../../context/mlts-context"
import styles from "./score-board.module.css"
import React from "react"

export default function ScoreBoard() {
    const { teamsName, teamsColors, currentScore } =
        React.useContext(MltsContext)

    const scoreArray = currentScore ? currentScore?.split("-") : ["0", "0"]

    return (
        <div className={styles["lsb-LiteScoreboardModule-wrapper"]}>
            <div className={styles["lsb-LiteScoreboardModule"]}>
                <div className={styles["lsb-ScoreBasedScoreboardAggregate"]}>
                    {/*TEAM 1*/}
                    <div
                        className={
                            styles[
                                "lsb-ScoreBasedScoreboardAggregate_TeamContainer"
                            ]
                        }
                        style={{
                            paddingRight: "6px",
                        }}
                    >
                        <div
                            className={
                                styles[
                                    "lsb-ScoreBasedScoreboardAggregate_TeamName-normal"
                                ]
                            }
                            style={{
                                textAlign: "right",
                            }}
                        >
                            {teamsName.home}
                        </div>
                    </div>

                    {/*SCORE*/}
                    <div
                        className={
                            styles[
                                "lsb-ScoreBasedScoreboardAggregate_ScoreContainer"
                            ]
                        }
                    >
                        <div
                            className={
                                styles[
                                    "lsb-ScoreBasedScoreboardAggregate_TeamScoreContainer"
                                ]
                            }
                            style={{
                                marginRight: "1px",
                                borderBottom: `2px solid ${teamsColors.home}`,
                            }}
                        >
                            <span
                                className={
                                    styles[
                                        "lsb-ScoreBasedScoreboardAggregate_TeamScore"
                                    ]
                                }
                            >
                                {scoreArray[0]}
                            </span>
                        </div>
                        <div
                            className={
                                styles[
                                    "lsb-ScoreBasedScoreboardAggregate_TeamScoreContainer"
                                ]
                            }
                            style={{
                                borderBottom: `2px solid ${teamsColors.away}`,
                            }}
                        >
                            <span
                                className={
                                    styles[
                                        "lsb-ScoreBasedScoreboardAggregate_TeamScore"
                                    ]
                                }
                            >
                                {scoreArray[1]}
                            </span>
                        </div>
                    </div>

                    {/*TEAM 2*/}
                    <div
                        className={
                            styles[
                                "lsb-ScoreBasedScoreboardAggregate_TeamContainer"
                            ]
                        }
                        style={{
                            paddingLeft: "6px",
                        }}
                    >
                        <div
                            className={
                                styles[
                                    "lsb-ScoreBasedScoreboardAggregate_TeamName-normal"
                                ]
                            }
                            style={{
                                textAlign: "left",
                            }}
                        >
                            {teamsName.away}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
