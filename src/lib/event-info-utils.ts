import { BallPositionType, EventInfoType, MatchStatusType } from "../types"

export const EventInfoUtils = {
    retrieve: (
        eventInfoType: MatchStatusType,
        teamsName: {
            home: string
            away: string
        },
        teamColors: {
            home: string
            away: string
        },
        ballPosition: BallPositionType,
    ): EventInfoType | null => {
        let ballPositionInPercentage =
            EventInfoUtils.getBallPositionPercentage(ballPosition)

        const eventCardMap: Partial<Record<MatchStatusType, EventInfoType>> = {
            HP: {
                title: "In Possession",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49.5%",
                    transform: "translateX(-100%)",
                },
            },
            AP: {
                title: "In Possession",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "51%",
                },
            },
            HA: {
                title: "Attack",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: ballPositionInPercentage?.left ?? "68%",
                    transform: "translateX(-100%)",
                },
            },
            AA: {
                title: "Attack",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: ballPositionInPercentage?.left ?? "32%",
                },
            },
            HDA: {
                title: "Dangerous Attack",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: ballPositionInPercentage?.left ?? "86%",
                    transform: "translateX(-100%)",
                },
            },
            ADA: {
                title: "Dangerous Attack",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: ballPositionInPercentage?.left ?? "14%",
                },
            },

            HT: {
                title: "Half Time",
                subTitle: "",
                stack: "horizontal",
                direction: "right",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                hiddeBar: true,
            },
            FT: {
                title: "Full Time",
                subTitle: "",
                stack: "horizontal",
                direction: "right",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                hiddeBar: true,
            },

            H_GOAL: {
                title: ("Goal " + teamsName.home).toUpperCase(),
                subTitle: "",
                stack: "horizontal",
                direction: "right",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                hiddeBar: true,
                baseTitleColor: true,
            },
            A_GOAL: {
                title: ("Goal " + teamsName.away).toUpperCase(),
                subTitle: "",
                stack: "horizontal",
                direction: "right",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                hiddeBar: true,
                baseTitleColor: true,
            },
            H_SH_G: {
                title: "Shot Target",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_SH_G: {
                title: "Shot Target",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            H_SH_OFF_G: {
                title: "Shot Off Target",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_SH_OFF_G: {
                title: "Shot Off Target",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },

            H_TH_U: {
                title: "Throw-in",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: ballPositionInPercentage?.left,
                    transform: "translateX(-100%)",
                },
            },
            A_TH_U: {
                title: "Throw-in",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: ballPositionInPercentage?.left,
                    transform: "translateX(-100%)",
                },
            },

            H_TH_M: {
                title: "Throw-in",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: ballPositionInPercentage?.left,
                    transform: "translateX(-100%)",
                },
            },
            A_TH_M: {
                title: "Throw-in",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: ballPositionInPercentage?.left,
                },
            },
            H_TH_D: {
                title: "Throw-in",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: ballPositionInPercentage?.left,
                    transform: "translateX(-100%)",
                },
            },
            A_TH_D: {
                title: "Throw-in",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: ballPositionInPercentage?.left,
                },
            },
            H_CR_U: {
                title: "Corner",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "80%",
                    transform: "translateX(-100%)",
                },
            },
            A_CR_U: {
                title: "Corner",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "20%",
                },
            },
            H_CR_D: {
                title: "Corner",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "97%",
                    transform: "translateX(-100%)",
                },
            },
            A_CR_D: {
                title: "Corner",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "3%",
                },
            },
            H_GC: {
                title: "Goal Kick",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "4%",
                },
            },
            A_GC: {
                title: "Goal Kick",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "97%",
                    transform: "translateX(-100%)",
                },
            },
            H_FK_DG: {
                title: "Free Kick Dangerous",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "70%",
                    transform: "translateX(-100%)",
                },
            },
            A_FK_DG: {
                title: "Free Kick Dangerous",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "25%",
                },
            },
            H_FK_U: {
                title: "Free Kick",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "70%",
                    transform: "translateX(-100%)",
                },
            },
            A_FK_U: {
                title: "Free Kick",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "30%",
                },
            },
            H_FK_D: {
                title: "Free Kick",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "77%",
                    transform: "translateX(-100%)",
                },
            },
            A_FK_D: {
                title: "Free Kick",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "23%",
                },
            },
            H_OFS: {
                title: "Offside",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_OFS: {
                title: "Offside",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            VAR: {
                title: "VAR",
                subTitle: "",
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                hiddeBar: true,
                baseTitleColor: true,
            },

            H_SUB: {
                title: teamsName.home + " Substitution",
                subTitle: "",
                stack: "vertical",
                direction: "right",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                horizontalBar: true,
            },
            A_SUB: {
                title: teamsName.away + " Substitution",
                subTitle: "",
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
                horizontalBar: true,
            },
            INJURY: {
                title: "INJURY",
                subTitle: "",
                stack: "vertical",
                direction: "right",
                color: "var(--ml1-borderColour)",
                positionStyle: {
                    left: "50%",
                    transform: "translateX(-50%)",
                },
                horizontalBar: true,
            },
            H_INJURY: {
                title: teamsName.home + " INJURY",
                subTitle: "",
                stack: "vertical",
                direction: "right",
                color: teamColors.home,
                positionStyle: {
                    left: "50%",
                    transform: "translateX(-50%)",
                },
                horizontalBar: true,
            },
            A_INJURY: {
                title: teamsName.away + " INJURY",
                subTitle: "",
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "50%",
                    transform: "translateX(-50%)",
                },
                horizontalBar: true,
            },
            H_YELLOW_CARD: {
                title: "Yellow Card",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_YELLOW_CARD: {
                title: "Yellow Card",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            H_RED_CARD: {
                title: "Red Card",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_RED_CARD: {
                title: "Red Card",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            H_PENALTY: {
                title: "Penalty",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_PENALTY: {
                title: "Penalty",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            H_PENALTY_M: {
                title: "Penalty Missed",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_PENALTY_M: {
                title: "Penalty Missed",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            H_KICK_OFF: {
                title: "Kick Off",
                subTitle: teamsName.home,
                stack: "vertical",
                direction: "left",
                color: teamColors.home,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
            A_KICK_OFF: {
                title: "Kick Off",
                subTitle: teamsName.away,
                stack: "vertical",
                direction: "right",
                color: teamColors.away,
                positionStyle: {
                    left: "49%",
                    transform: "translateX(-50%)",
                },
            },
        }

        return eventCardMap[eventInfoType] || null
    },

    getBallPositionPercentage(ballPosition: BallPositionType) {
        if (!ballPosition.current) {
            return null
        }

        let rightBallPosition = ballPosition.current?.x * 100

        if (rightBallPosition > 95) {
            rightBallPosition = 90
        }
        if (rightBallPosition < 5) {
            rightBallPosition = 10
        }
        return {
            left: rightBallPosition + "%",
            right: 100 - rightBallPosition + "%",
        }
    },
}
