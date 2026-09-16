import styles from "../ui/soccer-clock.module.css"
import { MltsContext } from "../context/mlts-context"
import { useContext } from "react"

export default function SoccerClock() {
    const { clockTime, injuryTime } = useContext(MltsContext)

    return (
        <div className={styles["ml1-SoccerClock"]}>
            <div>
                {clockTime && (
                    <div className={styles["ml1-SoccerClock_Timer"]}>
                        <div>
                            <div
                                className={
                                    styles["ml1-SoccerClock_TimerInnerWrapper"]
                                }
                            >
                                <span>{clockTime}</span>
                            </div>
                            {injuryTime && (
                                <span
                                    className={
                                        styles["ml1-SoccerClock_InjuryTime"]
                                    }
                                >
                                    {injuryTime}
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
