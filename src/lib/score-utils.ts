import { SoccerScoreType } from "../types"

export const ScoreUtils = {
    getScore: (currentScoreProp: string | null): SoccerScoreType | null => {
        if (!currentScoreProp) return null

        const scoreArray = currentScoreProp.split("-")
        if (scoreArray.length !== 2) return null

        const [score1, score2] = scoreArray.map(Number)
        if ([score1, score2].some(isNaN) || score1 < 0 || score2 < 0) {
            return null
        }

        return `${score1}-${score2}`
    },
}
