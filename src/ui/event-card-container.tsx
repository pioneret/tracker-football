import { MltsContext } from "../context/mlts-context"
import styles from "./event-card-container.module.css"
import classnames from "classnames"
import React from "react"

export default function EventCardContainer() {
    const { eventCard, status } = React.useContext(MltsContext)

    if (!eventCard) return null

    return (
        <>
            {eventCard && (
                <div
                    key={status}
                    className={classnames(
                        styles["ml1-MatchLiveSoccerModule_EventCardContainer"],
                        styles[
                            "ml1-MatchLiveSoccerModule_EventCardContainer-overlay"
                        ],
                    )}
                    style={{ ...eventCard.outlineStyle }}
                >
                    <div
                        className={styles["ml1-EventCardBase"]}
                        style={{ ...eventCard.eventCardStyle }}
                    >
                        <div
                            className={
                                styles["ml1-EventCardBase_ContentWrapper"]
                            }
                            style={{
                                ...eventCard.wrapperStyle,
                            }}
                        >
                            <div
                                className={
                                    styles["ml1-EventCardBase_TitleContainer"]
                                }
                                style={{ ...eventCard.titleContainerStyle }}
                            >
                                <div
                                    data-content={eventCard.title}
                                    className={
                                        styles["ml1-EventCardBase_Title"]
                                    }
                                    style={{
                                        ...eventCard.titleStyle,
                                    }}
                                >
                                    {eventCard.title}
                                </div>
                                <div
                                    className={
                                        styles["ml1-EventCardBase_SubHeader"]
                                    }
                                    style={{
                                        ...eventCard.subtitleStyle,
                                    }}
                                >
                                    {eventCard.subtitle}
                                </div>

                                {eventCard.showThreeDots && (
                                    <div
                                        className={
                                            styles["ml1-VarCheck_DotsContainer"]
                                        }
                                    >
                                        <div
                                            className={
                                                styles["ml1-VarCheck_Dot"]
                                            }
                                        />
                                        <div
                                            className={
                                                styles["ml1-VarCheck_Dot"]
                                            }
                                            style={{
                                                animationDelay: ".5s",
                                            }}
                                        />
                                        <div
                                            className={
                                                styles["ml1-VarCheck_Dot"]
                                            }
                                            style={{
                                                animationDelay: "1s",
                                            }}
                                        />
                                    </div>
                                )}
                            </div>

                            {eventCard.type === "icon" && (
                                <div
                                    style={{
                                        ...eventCard.iconContainerStyle,
                                    }}
                                    className={
                                        styles[
                                            "ml1-EventCardBase_AssetContainer"
                                        ]
                                    }
                                >
                                    <div
                                        style={{
                                            ...eventCard.iconStyle,
                                        }}
                                        className={
                                            styles[eventCard.iconClass ?? ""]
                                        }
                                    ></div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
