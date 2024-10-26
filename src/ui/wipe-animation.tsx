import styles from "./wipe-animation.module.css"
import classnames from "classnames"
import { MltsContext } from "../context/mlts-context"
import { useContext } from "react"
import { ColorUtils } from "../lib/color-utils"

export default function WipeAnimation() {
    const { wipeAnimation } = useContext(MltsContext)

    if (!wipeAnimation) {
        return null
    }
    const alignClasses = {
        right: {
            type: "right",
            containerClass: "ml1-WipeAnimation_Container-rightAlign",
            chevronClass: "ml1-WipeAnimation_Chevron-rightAlign",
            contentContainerClass:
                "ml1-WipeAnimation_ContentContainer-rightAlign",
            contentWrapperClass: "ml1-WipeAnimation_ContentWrapper-rightAlign",
            subTitleClass: "ml1-WipeAnimation_SubTitle-rightAlign",
        },
        left: {
            type: "left",
            containerClass: "ml1-WipeAnimation_Container-leftAlign",
            chevronClass: "ml1-WipeAnimation_Chevron-leftAlign",
            contentContainerClass:
                "ml1-WipeAnimation_ContentContainer-leftAlign",
            contentWrapperClass: "ml1-WipeAnimation_ContentWrapper-leftAlign",
            subTitleClass: "ml1-WipeAnimation_SubTitle-leftAlign",
        },
    }

    const selectedAlign = alignClasses[wipeAnimation.isRight ? "right" : "left"]

    return (
        <div
            className={styles["ml1-WipeAnimation"]}
            style={{
                "--ml1-wipe-color": wipeAnimation.wipeColor,
                "--ml1-icon-color": ColorUtils.AccentColour(
                    wipeAnimation.iconColor,
                ),
                "--ml1-team-subtext-color": ColorUtils.AccentColour(
                    wipeAnimation.subTextColor,
                ),
            }}
        >
            <div
                className={classnames(
                    styles["ml1-WipeAnimation_Container"],
                    styles[selectedAlign.containerClass ?? ""],
                )}
            >
                <div className={styles["ml1-WipeAnimation_ChevronsContainer"]}>
                    <div
                        className={classnames(
                            styles["ml1-WipeAnimation_Chevron"],
                            styles[selectedAlign.chevronClass ?? ""],
                        )}
                        style={{
                            [selectedAlign.type]: "10px",
                        }}
                    ></div>
                    <div
                        className={classnames(
                            styles["ml1-WipeAnimation_Chevron"],
                            styles[selectedAlign.chevronClass ?? ""],
                        )}
                        style={{
                            [selectedAlign.type]: "40px",
                            animationDelay: ".1s",
                            opacity: 0.6,
                        }}
                    ></div>
                    <div
                        className={classnames(
                            styles["ml1-WipeAnimation_Chevron"],
                            styles[selectedAlign.chevronClass ?? ""],
                        )}
                        style={{
                            [selectedAlign.type]: "80px",
                            animationDelay: ".2s",
                            opacity: 0.4,
                        }}
                    ></div>
                    <div
                        className={classnames(
                            styles["ml1-WipeAnimation_Chevron"],
                            styles[selectedAlign.chevronClass ?? ""],
                        )}
                        style={{
                            [selectedAlign.type]: "130px",
                            animationDelay: ".3s",
                            opacity: 0.2,
                        }}
                    ></div>
                </div>
                <div
                    className={classnames(
                        styles["ml1-WipeAnimation_ContentContainer"],
                        styles[selectedAlign.contentContainerClass ?? ""],
                    )}
                >
                    <div
                        className={classnames(
                            styles["ml1-WipeAnimation_ContentWrapper"],
                            styles[selectedAlign.contentWrapperClass ?? ""],
                        )}
                        style={
                            wipeAnimation.hasIcon
                                ? {
                                      flexDirection: "row",
                                      justifyContent: "flex-end",
                                      alignItems: "center",
                                  }
                                : {}
                        }
                    >
                        {wipeAnimation.hasIcon && (
                            <div
                                className={styles["ml1-WipeAnimation_Icon-var"]}
                            ></div>
                        )}

                        <div className={styles["ml1-WipeAnimation_Title"]}>
                            {wipeAnimation.title}
                        </div>
                        <div
                            className={classnames(
                                styles["ml1-WipeAnimation_SubTitle"],
                                styles[selectedAlign.subTitleClass],
                            )}
                        >
                            {wipeAnimation.subTitle}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
