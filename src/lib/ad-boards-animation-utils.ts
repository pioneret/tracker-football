import { AdBoardsAnimationType, MatchStatusType } from "../types"

export const AdBoardsAnimationUtils = {
    retrieve(
        eventType: MatchStatusType,
        teamsName: {
            home: string
            away: string
        },
        teamColors: {
            home: string
            away: string
        },
    ): AdBoardsAnimationType {
        const AD_BOARDS_ANIMATION_MAP: Partial<
            Record<MatchStatusType, AdBoardsAnimationType>
        > = {
            H_GOAL: {
                isEvent: true,
                eventTitle: "GOAL",
                eventAssetClass: "ml1-AdBoardsSection_GoalAsset",
                bgColour: teamColors.home,
                eventSlideDirection: "right",
            },
            A_GOAL: {
                isEvent: true,
                eventTitle: "GOAL",
                eventAssetClass: "ml1-AdBoardsSection_GoalAsset",
                bgColour: teamColors.away,
                eventSlideDirection: "left",
            },
            H_PENALTY: {
                isEvent: true,
                eventTitle: "PENALTY",
                eventAssetClass: "ml1-AdBoardsSection_PenaltyEvent",
                bgColour: "#1b4d42",
                penBgColour: teamColors.home,
                eventSlideDirection: "right",
            },
            A_PENALTY: {
                isEvent: true,
                eventTitle: "PENALTY",
                eventAssetClass: "ml1-AdBoardsSection_PenaltyEvent",
                bgColour: "#1b4d42",
                penBgColour: teamColors.away,
                eventSlideDirection: "left",
            },

            VAR: {
                isEvent: true,
                eventTitle: "VAR",
                eventAssetClass: "ml1-AdBoardsSection_VarAsset",
                bgColour: "#1b4d42",
                eventSlideDirection: "right",
            },
        }

        return (
            AD_BOARDS_ANIMATION_MAP[eventType] ?? {
                isEvent: false,
            }
        )
    },
}
