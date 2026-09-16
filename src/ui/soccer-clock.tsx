import styles from "./soccer-clock.module.css"
import { MltsContext } from "../context/mlts-context"
import { useContext } from "react"

/*TODO*/
export default function SoccerClock() {
    const { teamsColors } = useContext(MltsContext)

    return <div className={styles["ml1-SoccerClock"]}></div>
}
