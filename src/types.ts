import "react"

declare module "react" {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

export type MltsPropsWithChildrenType = {
    children: React.ReactNode
    mltsProps: MltsPropsType
}

export type MltsPropsType = {
    teamsNameProp: TeamsNameType | null
    teamsColorProps: TeamsColorType | null
    ballPositionProps: CoordinateType | null
    matchStatusProps: MatchStatusType
    currentScoreProp: CurrentScorePropType
}

export type CurrentScorePropType = string | null

export type MatchStatusType =
    | "unknown"
    | "HP"
    | "AP"
    | "HA"
    | "AA"
    | "HDA"
    | "ADA"
    | "HT"
    | "FT"
    | "H_GOAL"
    | "A_GOAL"
    | "H_SH_G"
    | "A_SH_G"
    | "H_SH_OFF_G"
    | "A_SH_OFF_G"
    | "H_TH_U"
    | "A_TH_U"
    | "H_TH_M"
    | "A_TH_M"
    | "H_TH_D"
    | "A_TH_D"
    | "H_CR_U"
    | "H_CR_D"
    | "A_CR_U"
    | "A_CR_D"
    | "H_GC"
    | "A_GC"
    | "H_FK_DG"
    | "A_FK_DG"
    | "H_FK_U"
    | "H_FK_D"
    | "A_FK_U"
    | "A_FK_D"
    | "H_OFS"
    | "A_OFS"
    | "VAR"
    | "H_SUB"
    | "A_SUB"
    | "INJURY"
    | "H_INJURY"
    | "A_INJURY"
    | "H_YELLOW_CARD"
    | "A_YELLOW_CARD"
    | "H_RED_CARD"
    | "A_RED_CARD"
    | "H_PENALTY"
    | "A_PENALTY"

export type TeamsColorType = {
    home: string
    away: string
}

export type MltsStateType = {
    teamsName: TeamsNameType
    teamsColors: TeamsColorType
    ballPosition: BallPositionType
    cameraPosition: CameraPositionType
    status: MatchStatusType
    activeTeamHistory: ActiveTeamHistoryType
    activeColor: string
    currentScore: SoccerScoreType | null
    coneStatus: ConeStatusType
    ballOnTargetStatus: BallOnTargetStatusType
    pitchBlobRef: React.RefObject<HTMLDivElement>
    soccerPath: SoccerPathType
    eventCard: EventCardType | null
    wipeAnimation: WipeAnimationType | null
    adBoardsAnimation: AdBoardsAnimationType
}
export type AdBoardsAnimationType = {
    isEvent: boolean
    eventTitle?: string
    eventAssetClass?: string
    bgColour?: string
    penBgColour?: string
    eventSlideDirection?: "left" | "right"
}

export type TeamsNameType = {
    home: string
    away: string
}

export type WipeAnimationType = {
    title: string
    subTitle: string
    duration: string
    wipeColor: string
    iconColor: string
    subTextColor: string
    contentWrapperClass?: string
    wipeAnimationClass?: string
    contentWrapperStyle?: React.CSSProperties
    hasIcon?: boolean
    chevronClass?: string
    isRight: boolean
}

export type EventCardType = {
    type: string
    title: string
    subtitle: string
    iconClass?: string
    outlineStyle?: React.CSSProperties
    eventCardStyle?: React.CSSProperties
    wrapperStyle?: React.CSSProperties
    titleContainerStyle?: React.CSSProperties
    titleStyle?: React.CSSProperties
    subtitleStyle?: React.CSSProperties
    iconContainerStyle?: React.CSSProperties
    iconStyle?: React.CSSProperties
    showThreeDots?: boolean
}

export type SoccerPathType = {
    points: string
    type: "H" | "A" | null
}

export type BallOnTargetStatusType = {
    show: boolean
    distance: number
    angle: number
    targetX: number
    targetY: number
}

export type ConeStatusType = {
    status: boolean
    ballPosition: CoordinateType | null
    angle: number
    type: 1 | 2 | 3
}

export type SoccerScoreType = `${number}-${number}`

export type ActiveTeamHistoryType = {
    current: ActiveTeamType
    prev: ActiveTeamType
}

export type ActiveTeamType = "H" | "A" | null

export type CameraPositionType = {
    scale: number
    translateX: number
    translateY: number
    rotateZ: number
    rotateX: number
}

export type BallPositionType = {
    current: CoordinateType | null
    prev: CoordinateType | null
}

export type CoordinateType = {
    x: number
    y: number
}
