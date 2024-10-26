import { MltsContext } from "../context/mlts-context"
import styles from "./score-update.module.css"
import { useContext, useEffect, useState } from "react"
import classnames from "classnames"

export default function ScoreUpdate() {
    const { currentScore, status } = useContext(MltsContext)
    const [show, setShow] = useState(false)

    const isGoal = ["H_GOAL", "A_GOAL"].includes(status)

    useEffect(() => {
        /*In case of GOAL wait for the GOAL Animation than show the score*/
        let id: NodeJS.Timeout
        if (isGoal) {
            id = setTimeout(() => {
                setShow(true)
            }, 5000)
        }

        return () => {
            clearTimeout(id)
            setShow(false)
        }
    }, [isGoal])

    if (!show || !currentScore) {
        return null
    }

    const scoreArray = currentScore.split("-")
    const isHomeGoal = status === "H_GOAL"

    const teamScore = parseInt(scoreArray[isHomeGoal ? 0 : 1])
    let prevTeamScore = teamScore - 1

    if (prevTeamScore < 0) {
        prevTeamScore = 0
    }

    const noGoalTeamScore = scoreArray[isHomeGoal ? 1 : 0]

    return (
        <div className={styles["ml1-SoccerScoreUpdate"]}>
            <div className={styles["ml1-SoccerScoreUpdate_OuterWrapper"]}>
                {/*LEFT*/}
                <div
                    className={classnames(
                        styles["ml1-SoccerScoreUpdate_ScoreWrapper"],
                        styles["ml1-SoccerScoreUpdate_ScoreWrapper-score1"],
                        styles["ml1-SoccerScoreUpdate_ScoreWrapper-animate1"],
                    )}
                >
                    <div
                        className={classnames(
                            styles["ml1-SoccerScoreUpdate_ScoreOriginal"],
                            isHomeGoal &&
                                styles[
                                    "ml1-SoccerScoreUpdate_ScoreOriginal-animate"
                                ],
                        )}
                        style={{
                            paddingLeft: `20%`,
                        }}
                    >
                        <span
                            className={
                                styles["ml1-SoccerScoreUpdate_ScoreOriginal"]
                            }
                            style={{
                                paddingLeft: `20%`,
                            }}
                        >
                            {isHomeGoal ? prevTeamScore : noGoalTeamScore}
                        </span>
                    </div>
                    <div
                        className={classnames(
                            styles["ml1-SoccerScoreUpdate_ScoreNew"],
                            styles["ml1-SoccerScoreUpdate_ScoreWrapper"],
                            isHomeGoal &&
                                styles[
                                    "ml1-SoccerScoreUpdate_ScoreNew-animate"
                                ],
                        )}
                        style={{
                            paddingLeft: `20%`,
                        }}
                    >
                        {isHomeGoal && (
                            <span
                                style={{
                                    paddingLeft: `20%`,
                                }}
                                className={
                                    styles["ml1-SoccerScoreUpdate_ScoreNew"]
                                }
                            >
                                {teamScore}
                            </span>
                        )}
                    </div>
                </div>

                {/*RIGHT*/}
                <div
                    className={classnames(
                        styles["ml1-SoccerScoreUpdate_ScoreWrapper"],
                        styles["ml1-SoccerScoreUpdate_ScoreWrapper-score2"],
                        styles["ml1-SoccerScoreUpdate_ScoreWrapper-animate2"],
                    )}
                >
                    <div
                        className={classnames(
                            styles["ml1-SoccerScoreUpdate_ScoreOriginal"],
                            !isHomeGoal &&
                                styles[
                                    "ml1-SoccerScoreUpdate_ScoreOriginal-animate"
                                ],
                        )}
                        style={{
                            paddingRight: `20%`,
                        }}
                    >
                        <span
                            className={
                                styles["ml1-SoccerScoreUpdate_ScoreOriginal"]
                            }
                            style={{
                                paddingRight: `20%`,
                            }}
                        >
                            {!isHomeGoal ? prevTeamScore : noGoalTeamScore}
                        </span>
                    </div>
                    <div
                        className={classnames(
                            styles["ml1-SoccerScoreUpdate_ScoreNew"],
                            styles["ml1-SoccerScoreUpdate_ScoreWrapper"],
                            !isHomeGoal &&
                                styles[
                                    "ml1-SoccerScoreUpdate_ScoreNew-animate"
                                ],
                        )}
                        style={{
                            paddingRight: `20%`,
                        }}
                    >
                        {!isHomeGoal && (
                            <span
                                className={
                                    styles["ml1-SoccerScoreUpdate_ScoreNew"]
                                }
                                style={{
                                    paddingRight: `20%`,
                                }}
                            >
                                {teamScore}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}
