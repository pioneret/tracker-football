import { DEFAULT_MLTS_STATE } from "../logic/mlts-logic"
import { TeamsColorType } from "../types"

export const TeamColorsUtils = {
    retrieve(teamsColor: TeamsColorType | null): TeamsColorType {
        if (!teamsColor) {
            return {
                home: DEFAULT_MLTS_STATE.teamsColors.home,
                away: DEFAULT_MLTS_STATE.teamsColors.away,
            }
        }

        return teamsColor
    },
}
