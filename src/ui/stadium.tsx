import styles from "./stadium.module.css"
import classnames from "classnames"
import { useContext } from "react"
import { MltsContext } from "../context/mlts-context"
import { ColorUtils } from "../lib/color-utils"

// declare module "react" {
//     interface CSSProperties {
//         [key: `--${string}`]: string | number
//     }
// }

export default function Stadium() {
    const { teamsColors } = useContext(MltsContext)

    return (
        /*TODO CHECK CALCULATION AND DYNAMIC COLORS BASE ON TEAM*/
        <div className={styles["ml1-Stadium"]}>
            <div
                className={classnames(
                    styles["ml1-Stadium_Stand"],
                    styles["ml1-Stadium_LeftStand"],
                )}
                style={{
                    "--ml1-sat":
                        ColorUtils.GetSaturation(teamsColors.home) === 0
                            ? 0
                            : 1,
                    "--ml1-hue": ColorUtils.GetHue(teamsColors.home) + "deg",
                }}
            />
            <div
                className={classnames(
                    styles["ml1-Stadium_Stand"],
                    styles["ml1-Stadium_RightStand"],
                )}
                style={{
                    "--ml1-sat":
                        ColorUtils.GetSaturation(teamsColors.away) === 0
                            ? 0
                            : 1,
                    "--ml1-hue": ColorUtils.GetHue(teamsColors.away) + "deg",
                }}
            />
        </div>
    )
}
