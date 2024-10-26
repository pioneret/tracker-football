import { EventCardType, MatchStatusType } from "../types"

export const EventCardUtils = {
    retrieve: (
        eventCardType: MatchStatusType,
        teamsName: {
            home: string
            away: string
        },
        teamColors: {
            home: string
            away: string
        },
    ): EventCardType | null => {
        const eventCardMap: Partial<Record<MatchStatusType, EventCardType>> = {
            HT: {
                title: "Half Time",
                subtitle: "",
                type: "default",
                eventCardStyle: {
                    "--ml1-driftPolarity": "-1",
                },
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
            },
            FT: {
                title: "Full Time",
                subtitle: "",
                type: "default",
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
                eventCardStyle: {
                    "--ml1-driftPolarity": "-1",
                },
            },
            H_SUB: {
                title: "Substitution",
                subtitle: teamsName.home,
                type: "default",
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                    fontStyle: "italic",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
                eventCardStyle: {
                    "--ml1-borderColour": teamColors.home,
                    "--ml1-driftPolarity": "-1",
                },
            },
            A_SUB: {
                title: "Substitution",
                subtitle: teamsName.away,
                type: "default",
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                    fontStyle: "italic",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
                eventCardStyle: {
                    "--ml1-borderColour": teamColors.away,
                },
            },
            H_INJURY: {
                title: "INJURY",
                subtitle: teamsName.home,
                type: "default",
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                    fontStyle: "italic",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
                eventCardStyle: {
                    "--ml1-borderColour": teamColors.home,
                    "--ml1-driftPolarity": "-1",
                },
            },
            A_INJURY: {
                title: "INJURY",
                subtitle: teamsName.away,
                type: "default",
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                    fontStyle: "italic",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
                eventCardStyle: {
                    "--ml1-borderColour": teamColors.away,
                },
            },
            INJURY: {
                title: "INJURY",
                subtitle: "",
                type: "default",
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                    fontStyle: "italic",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                },
                subtitleStyle: {
                    paddingRight: 0,
                },
                eventCardStyle: {
                    "--ml1-driftPolarity": "-1",
                },
            },

            VAR: {
                title: "VAR",
                subtitle: "Reviewing Goal",
                type: "default",
                eventCardStyle: {
                    "--ml1-driftPolarity": "-1",
                },
                outlineStyle: {
                    backgroundColor: undefined,
                },
                titleContainerStyle: {
                    paddingRight: "10px",
                },
                titleStyle: {
                    maxWidth: "none",
                    textAlign: "center",
                    fontStyle: "italic",
                },
                subtitleStyle: {
                    marginTop: "7px",
                    paddingRight: 0,
                },
                showThreeDots: true,
            },
            H_SH_G: {
                title: "Shot On Target",
                subtitle: teamsName.home,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-shotongoal",
                eventCardStyle: {
                    "--ml1-driftPolarity": "-1",
                },
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                titleContainerStyle: {
                    paddingRight: 0,
                },
                titleStyle: {
                    maxWidth: "101px",
                    textAlign: "right",
                },
                subtitleStyle: {
                    paddingRight: "11px",
                },
            },
            A_SH_G: {
                title: "Shot On Target",
                subtitle: teamsName.away,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-shotongoal",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                wrapperStyle: {
                    gap: "15px",
                    flexDirection: "row-reverse",
                },
                titleContainerStyle: {
                    paddingRight: 0,
                },
                titleStyle: {
                    maxWidth: "101px",
                    textAlign: "left",
                },
                subtitleStyle: {
                    paddingRight: "11px",
                },
                iconStyle: {
                    transform: "scaleX(1)",
                },
            },
            H_SH_OFF_G: {
                title: "Shot Off Target",
                subtitle: teamsName.home,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-shotoffgoal",
                eventCardStyle: {
                    "--ml1-driftPolarity": "-1",
                    "--ml1-borderColour": teamColors.home,
                },
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                titleContainerStyle: {
                    paddingRight: 0,
                },
                titleStyle: {
                    maxWidth: "101px",
                    textAlign: "right",
                },
                subtitleStyle: {
                    paddingRight: "11px",
                },
            },
            A_SH_OFF_G: {
                title: "Shot Off Target",
                subtitle: teamsName.away,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-shotoffgoal",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                wrapperStyle: {
                    gap: "15px",
                    flexDirection: "row-reverse",
                },
                titleContainerStyle: {
                    paddingRight: 0,
                },
                titleStyle: {
                    maxWidth: "101px",
                    textAlign: "left",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "right",
                },
                iconStyle: {
                    transform: "scaleX(1)",
                },
            },
            H_OFS: {
                title: "Offside",
                subtitle: teamsName.home,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-flag",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                eventCardStyle: {
                    padding: "20px 0 20px 20px",
                    "--ml1-driftPolarity": "-1",
                    "--ml1-borderColour": teamColors.home,
                },
                wrapperStyle: {
                    gap: "15px",
                },
                titleContainerStyle: {
                    padding: 0,
                    alignItems: "flex-end",
                },
                titleStyle: {
                    fontStyle: "italic",
                    maxWidth: "101px",
                    textAlign: "right",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "right",
                    "--ml1-driftPolarity": "-1",
                },
                iconStyle: {
                    transform: "scaleX(-1)",
                },
            },
            A_OFS: {
                title: "Offside",
                subtitle: teamsName.away,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-flag",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                eventCardStyle: {
                    padding: "20px 20px 20px 0",
                    "--ml1-borderColour": teamColors.away,
                },
                wrapperStyle: {
                    gap: "15px",
                    flexDirection: "row-reverse",
                },
                titleContainerStyle: {
                    padding: 0,
                    alignItems: "flex-start",
                },
                titleStyle: {
                    fontStyle: "italic",
                    maxWidth: "101px",
                    textAlign: "right",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "right",
                },
            },
            H_YELLOW_CARD: {
                title: "Yellow Card",
                subtitle: teamsName.home,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-yellowcard",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                eventCardStyle: {
                    padding: "20px",
                    "--ml1-driftPolarity": "-1",
                    "--ml1-borderColour": teamColors.home,
                },
                wrapperStyle: {
                    gap: "15px",
                },
                titleContainerStyle: {
                    padding: 0,
                    alignItems: "flex-end",
                },
                titleStyle: {
                    fontStyle: "italic",
                    maxWidth: "101px",
                    textAlign: "right",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "right",
                    "--ml1-driftPolarity": "-1",
                },
            },
            A_YELLOW_CARD: {
                title: "Yellow Card",
                subtitle: teamsName.away,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-yellowcard",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                eventCardStyle: {
                    padding: "20px",
                    "--ml1-borderColour": teamColors.away,
                },
                wrapperStyle: {
                    gap: "15px",
                    flexDirection: "row-reverse",
                },
                titleContainerStyle: {
                    padding: 0,
                    alignItems: "flex-start",
                },
                titleStyle: {
                    fontStyle: "italic",
                    maxWidth: "101px",
                    textAlign: "left",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "left",
                },
                iconStyle: {
                    transform: "scaleX(-1)",
                },
            },
            H_RED_CARD: {
                title: "Red Card",
                subtitle: teamsName.home,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-redcard",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                eventCardStyle: {
                    padding: "20px",
                    "--ml1-driftPolarity": "-1",
                    "--ml1-borderColour": teamColors.home,
                },
                wrapperStyle: {
                    gap: "15px",
                },
                titleContainerStyle: {
                    padding: 0,
                    alignItems: "flex-end",
                },
                titleStyle: {
                    fontStyle: "italic",
                    maxWidth: "101px",
                    textAlign: "right",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "right",
                    "--ml1-driftPolarity": "-1",
                },
            },
            A_RED_CARD: {
                title: "Red Card",
                subtitle: teamsName.away,
                type: "icon",
                iconClass: "ml1-EventCardBase_Asset-redcard",
                outlineStyle: {
                    backgroundColor: "transparent",
                },
                eventCardStyle: {
                    padding: "20px",
                    "--ml1-borderColour": teamColors.away,
                },
                wrapperStyle: {
                    gap: "15px",
                    flexDirection: "row-reverse",
                },
                titleContainerStyle: {
                    padding: 0,
                    alignItems: "flex-start",
                },
                titleStyle: {
                    fontStyle: "italic",
                    maxWidth: "101px",
                    textAlign: "left",
                },
                subtitleStyle: {
                    paddingRight: "0",
                    marginTop: "4px",
                    paddingTop: "4px",
                    textAlign: "left",
                },
                iconStyle: {
                    transform: "scaleX(-1)",
                },
            },
        }

        return eventCardMap[eventCardType] || null
    },
}
