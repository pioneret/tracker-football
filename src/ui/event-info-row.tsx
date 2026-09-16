import styles from "../ui/event-info-row.module.css"
import { MltsContext } from "../context/mlts-context"
import React, { ComponentProps } from "react"
import classnames from "classnames"

export default function EventInfoRow(props: ComponentProps<"div">) {
    const { eventInfo, eventInfoRef } = React.useContext(MltsContext)

    return (
        <div
            className={styles["ml1-MatchLiveSoccerModule_EventsInfoRow"]}
            ref={eventInfoRef}
            {...props}
        >
            <div
                className={
                    styles["ml1-MatchLiveSoccerModule_EventsInfoRowWrapper"]
                }
            >
                {eventInfo && (
                    <div
                        className={
                            styles[
                                "ml1-MatchLiveSoccerModule_AnimatedTextBarInfoRow"
                            ]
                        }
                    >
                        <div
                            className={
                                styles[
                                    "ml1-AnimatedTextBarInfoRow_InfoRowWrapper"
                                ]
                            }
                            style={{
                                flexDirection:
                                    eventInfo.direction === "right"
                                        ? "row-reverse"
                                        : "row",
                                left: "auto",
                                right: "auto",
                                ...eventInfo.positionStyle,
                            }}
                        >
                            <div
                                className={
                                    styles[
                                        "ml1-AnimatedTextBarInfoRow_LabelsWrapper"
                                    ]
                                }
                                style={{
                                    flexDirection:
                                        eventInfo.stack === "vertical"
                                            ? "column"
                                            : "row",
                                    gap:
                                        eventInfo.stack === "vertical"
                                            ? "0px"
                                            : "10px",
                                }}
                            >
                                <div
                                    className={
                                        styles[
                                            "ml1-AnimatedTextBarInfoRow_TextWrapper"
                                        ]
                                    }
                                    style={{
                                        textAlign:
                                            eventInfo.direction === "right"
                                                ? "left"
                                                : "right",
                                    }}
                                >
                                    {eventInfo.subTitle}
                                </div>
                                <div
                                    className={
                                        styles[
                                            "ml1-AnimatedTextBarInfoRow_TextWrapper"
                                        ]
                                    }
                                    style={{
                                        lineHeight: "16px",
                                        fontSize: "12px",
                                        textAlign:
                                            eventInfo.direction === "right"
                                                ? "left"
                                                : "right",
                                        color: eventInfo.baseTitleColor
                                            ? "var(--ml1-coneColour)"
                                            : "inherit",
                                    }}
                                >
                                    {eventInfo.title}
                                </div>
                            </div>

                            {!eventInfo.hiddeBar && (
                                <div
                                    className={classnames({
                                        [styles[
                                            "ml1-AnimatedTextBarInfoRow_Line_Horizontal"
                                        ]]: eventInfo.horizontalBar,
                                        [styles[
                                            "ml1-AnimatedTextBarInfoRow_Line"
                                        ]]: !eventInfo.horizontalBar,
                                    })}
                                    style={{
                                        opacity: 1,
                                        backgroundColor: eventInfo.color,
                                        margin:
                                            eventInfo.direction === "left"
                                                ? "0 0 0 7px"
                                                : "0 7px 0 0",
                                        transition:
                                            "background-color 0.3s ease-in-out",
                                    }}
                                />
                            )}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}
