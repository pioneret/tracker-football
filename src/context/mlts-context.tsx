import * as React from "react"
import { MltsPropsWithChildrenType, MltsStateType } from "../types"
import { DEFAULT_MLTS_STATE, getMltsCurrentState } from "../logic/mlts-logic"

const MltsContext = React.createContext<MltsStateType>(DEFAULT_MLTS_STATE)

const MltsProvider = ({ mltsProps, children }: MltsPropsWithChildrenType) => {
    const mltsCurrentStateRef =
        React.useRef<Omit<MltsStateType, "pitchBlobRef">>(DEFAULT_MLTS_STATE)
    const pitchBlobRef = React.useRef<HTMLDivElement>(null)

    const mltsCurrentState = React.useMemo(() => {
        return getMltsCurrentState(
            mltsProps,
            mltsCurrentStateRef.current,
            pitchBlobRef.current,
        )
    }, [
        mltsProps.teamsColorProps?.away,
        mltsProps.teamsColorProps?.home,
        mltsProps.ballPositionProps?.x,
        mltsProps.ballPositionProps?.y,
        mltsProps.matchStatusProps,
        mltsProps.currentScoreProp,
    ])

    mltsCurrentStateRef.current = mltsCurrentState

    const setTeamColorsCssVariables = (
        homeColor: string,
        awayColor: string,
    ) => {
        if (typeof window === "undefined") {
            return
        }
        document.documentElement.style.setProperty(
            "--ml1-scoresTeam1Color",
            homeColor,
        )

        document.documentElement.style.setProperty(
            "--ml1-scoresTeam2Color",
            awayColor,
        )
    }

    setTeamColorsCssVariables(
        mltsCurrentState.teamsColors.home,
        mltsCurrentState.teamsColors.away,
    )

    return (
        <MltsContext.Provider value={{ ...mltsCurrentState, pitchBlobRef }}>
            {children}
        </MltsContext.Provider>
    )
}

export { MltsContext, MltsProvider }
