import styles from "./ad-boards-section.module.css"
import { MltsContext } from "../context/mlts-context"
import classnames from "classnames"
import { useContext } from "react"
import * as React from "react"

export default function AdBoardsSection() {
    const { adBoardsAnimation } = useContext(MltsContext)

    return (
        <div className={styles["ml1-AdBoardsSection"]}>
            <div className={styles["ml1-AdBoardsSection_LeftBoard"]}>
                <div
                    className={styles["ml1-AdBoardsSection_Inner"]}
                    style={{
                        "--ml1-totalWidth": "1125px",
                        "--ml1-offset": "0px",
                    }}
                >
                    <EventAdBoardContent />
                </div>
            </div>

            <div className={styles["ml1-AdBoardsSection_TopLeftBoard"]}>
                <div
                    className={styles["ml1-AdBoardsSection_Inner"]}
                    style={{
                        "--ml1-totalWidth": "1125px",
                        "--ml1-offset": "313px",
                    }}
                >
                    <EventAdBoardContent />
                </div>
            </div>

            <div className={styles["ml1-AdBoardsSection_CentreBoard"]}>
                <div
                    className={styles["ml1-AdBoardsSection_Inner"]}
                    style={{
                        "--ml1-totalWidth": "1125px",
                        "--ml1-offset": "327px",
                    }}
                >
                    <EventAdBoardContent />
                </div>
            </div>

            <div className={styles["ml1-AdBoardsSection_TopRightBoard"]}>
                <div
                    className={styles["ml1-AdBoardsSection_Inner"]}
                    style={{
                        "--ml1-totalWidth": "1125px",
                        "--ml1-offset": "797px",
                    }}
                >
                    <EventAdBoardContent />
                </div>
            </div>

            <div className={styles["ml1-AdBoardsSection_RightBoard"]}>
                <div
                    className={styles["ml1-AdBoardsSection_Inner"]}
                    style={{
                        "--ml1-totalWidth": "1125px",
                        "--ml1-offset": "812px",
                    }}
                >
                    <EventAdBoardContent />
                </div>
            </div>
        </div>
    )
}

function EventAdBoardContent() {
    const { adBoardsAnimation } = useContext(MltsContext)

    return (
        <>
            {adBoardsAnimation.isEvent ? (
                <div
                    className={styles["ml1-AdBoardsSection_EventWrapper"]}
                    style={{
                        "--ml1-bgColour": adBoardsAnimation.bgColour ?? "",
                        "--ml1-penBgColour":
                            adBoardsAnimation.penBgColour ?? "",
                    }}
                >
                    <div
                        className={
                            styles["ml1-AdBoardsSection_EventAssetContainer"]
                        }
                    >
                        {Array.from({ length: 19 }, (_, i) => (
                            <span
                                key={i}
                                className={classnames(
                                    styles[
                                        adBoardsAnimation.eventAssetClass ?? ""
                                    ],
                                    styles[
                                        adBoardsAnimation.eventSlideDirection ===
                                        "right"
                                            ? "ml1-AdBoardsSection_slide_right"
                                            : "ml1-AdBoardsSection_slide_left"
                                    ],
                                )}
                            >
                                {adBoardsAnimation.eventTitle}
                            </span>
                        ))}
                    </div>
                </div>
            ) : (
                <div className={styles["ml1-AdBoardsSection_BoardLogo"]}></div>
            )}
        </>
    )
}
