import { MatchStatusType, WipeAnimationType } from "../types"

export const WipeAnimationUtils = {
    retrieve(
        eventCardType: MatchStatusType,
        teamsName: {
            home: string
            away: string
        },
        teamColors: {
            home: string
            away: string
        },
    ): WipeAnimationType | null {
        const WIPE_ANIMATION_MAP: Partial<
            Record<MatchStatusType, WipeAnimationType>
        > = {
            H_GOAL: {
                title: "GOAL",
                subTitle: teamsName.home,
                duration: "5s",
                wipeColor: teamColors.home,
                iconColor: teamColors.home,
                contentWrapperClass:
                    "ml1-WipeAnimation_ContentContainer-rightAlign",
                subTextColor: teamColors.home,
                chevronClass: "ml1-WipeAnimation_Chevron-rightAlign",
                isRight: true,
            },
            A_GOAL: {
                title: "GOAL",
                subTitle: teamsName.away,
                duration: "5s",
                wipeColor: teamColors.away,
                iconColor: teamColors.away,
                contentWrapperClass:
                    "ml1-WipeAnimation_ContentContainer-rightAlign",
                wipeAnimationClass: "ml1-WipeAnimation_Container-rightAlign",
                subTextColor: teamColors.away,
                chevronClass: "ml1-WipeAnimation_Chevron-leftAlign",
                isRight: false,
            },
            VAR: {
                title: "VAR",
                subTitle: "",
                duration: "5s",
                wipeColor: "#1b4d26",
                iconColor: "#58e476",
                subTextColor: "#1b4d26",
                contentWrapperClass: "ml1-WipeAnimation_ContentContainer-alt",
                contentWrapperStyle: {
                    display: "flex",
                    alignItems: "center",
                    flexDirection: "row",
                    justifyContent: "center",
                },
                hasIcon: true,
                chevronClass: "ml1-WipeAnimation_Chevron-rightAlign",
                isRight: true,
            },
        }

        return WIPE_ANIMATION_MAP[eventCardType] ?? null
    },
}
