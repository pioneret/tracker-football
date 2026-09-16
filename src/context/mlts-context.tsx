import * as React from "react"
import { MltsPropsWithChildrenType, MltsStateType } from "../types"
import { DEFAULT_MLTS_STATE, getMltsCurrentState } from "../logic/mlts-logic"
import { CameraUtils } from "../lib/camera-utils"
import { useEffect } from "react"

const MltsContext = React.createContext<MltsStateType>(DEFAULT_MLTS_STATE)

const MltsProvider = ({ mltsProps, children }: MltsPropsWithChildrenType) => {
    const mltsCurrentStateRef =
        React.useRef<
            Omit<
                MltsStateType,
                | "pitchBlobRef"
                | "pitchSvgRef"
                | "eventInfoRef"
                | "isEventInfoFixed"
            >
        >(DEFAULT_MLTS_STATE)
    const pitchBlobRef = React.useRef<HTMLDivElement>(null)
    const pitchSvgRef = React.useRef<SVGSVGElement>(null)
    const eventInfoRef = React.useRef<HTMLDivElement>(null)
    const [isEventInfoFixed, setIsEventInfoFixed] = React.useState(false)

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
        mltsProps.injuryTimeProp,
        mltsProps.clockTimeProp,
        mltsProps.teamsNameProp,
        mltsProps.playerNameProp,
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

    const handleResize = (entries: ResizeObserverEntry[]) => {
        if (entries.length > 0) {
            const entry = entries[0]
            const entryWidth = entry.contentRect.width
            const calculatedHeight = CameraUtils.setPitchHeight(
                entryWidth,
                window.innerWidth,
            )
            window.document.documentElement.style.setProperty(
                "--ml1-standardHeight",
                `${calculatedHeight}px`,
            )
        }
    }

    const handleScroll = () => {
        const elm = document.querySelector(
            "#ml1-MatchLiveSoccerModule_Constrainer",
        )
        if (elm && eventInfoRef.current) {
            const topOffset = elm.getBoundingClientRect().top
            const height = elm.getBoundingClientRect().height
            setIsEventInfoFixed(
                -1 * (topOffset - 90) >
                    height -
                        eventInfoRef.current.getBoundingClientRect().height,
            )
        }
    }

    React.useEffect(() => {
        const resizeObserver = new ResizeObserver(handleResize)

        if (pitchSvgRef.current) {
            resizeObserver.observe(pitchSvgRef.current)
        }

        return () => {
            if (pitchSvgRef.current) {
                resizeObserver.unobserve(pitchSvgRef.current)
            }
        }
    }, [])

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll)

        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    return (
        <MltsContext.Provider
            value={{
                ...mltsCurrentState,
                pitchBlobRef,
                pitchSvgRef,
                eventInfoRef,
                isEventInfoFixed,
            }}
        >
            {children}
        </MltsContext.Provider>
    )
}

export { MltsContext, MltsProvider }
