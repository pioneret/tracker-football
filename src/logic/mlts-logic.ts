import { TeamColorsUtils } from "../lib/team-colors-utils"
import { BallPositionUtils } from "../lib/ball-position-utils"
import { CameraUtils } from "../lib/camera-utils"
import { ScoreUtils } from "../lib/score-utils"
import { ConeUtils } from "../lib/cone-utils"
import { BallTrajectoryUtils } from "../lib/ball-trajectory-utils"
import { SoccerPathUtils } from "../lib/soccer-path-utlils"
import { EventCardUtils } from "../lib/event-card-utils"
import { WipeAnimationUtils } from "../lib/wipe-animation-utils"
import { AdBoardsAnimationUtils } from "../lib/ad-boards-animation-utils"
import {
    ActiveTeamType,
    ConeStatusType,
    CoordinateType,
    EventCardType,
    MltsPropsType,
    MltsStateType,
    SoccerPathType,
} from "../types"

export const DEFAULT_MLTS_STATE: MltsStateType = {
    teamsName: {
        home: "Team Home",
        away: "Team Away",
    },
    teamsColors: {
        home: "red",
        away: "blue",
    },
    ballPosition: {
        current: null,
        prev: null,
    },
    cameraPosition: {
        scale: 0.85,
        translateX: 1.7 * -0.5,
        translateY: -5,
        rotateZ: 0,
        rotateX: 0,
    },
    status: "unknown",
    activeTeamHistory: {
        current: null,
        prev: null,
    },
    activeColor: "",
    currentScore: null,
    coneStatus: {
        status: false,
        ballPosition: null,
        angle: 0,
        type: 2,
    },
    ballOnTargetStatus: {
        show: false,
        distance: 0,
        angle: 0,
        targetX: 0,
        targetY: 0,
    },
    pitchBlobRef: {
        current: null,
    },
    soccerPath: {
        points: "",
        type: null,
    },
    eventCard: null,
    wipeAnimation: null,
    adBoardsAnimation: {
        isEvent: false,
    },
}

export const BALL_POSITION_UNPROVIDED: Record<string, CoordinateType> = {
    // Throw in
    H_TH_U: { x: 0.75, y: 1 },
    H_TH_M: { x: 0.5, y: 1 },
    H_TH_D: { x: 0.35, y: 1 },
    A_TH_U: { x: 0.75, y: 0 },
    A_TH_M: { x: 0.5, y: 0 },
    A_TH_D: { x: 0.35, y: 0 },
    // Free Kick
    H_FK_DG: { x: 0.72, y: 0.55 },
    A_FK_DG: { x: 0.22, y: 0.55 },
    H_FK_U: { x: 0.75, y: 0.15 },
    H_FK_D: { x: 0.75, y: 0.85 },
    A_FK_U: { x: 0.25, y: 0.15 },
    A_FK_D: { x: 0.25, y: 0.85 },
}

const BALL_POSITION_PROVIDED_FROM_STATUS: Record<string, CoordinateType> = {
    // Goal Kick
    H_GC: { x: 0.04, y: 0.4 },
    A_GC: { x: 0.96, y: 0.4 },
    // Corner
    H_CR_U: { x: 1, y: 0 },
    H_CR_D: { x: 1, y: 1 },
    A_CR_U: { x: 0, y: 0 },
    A_CR_D: { x: 0, y: 1 },

    // Penalty
    H_PENALTY: { x: 0.87, y: 0.5 },
    A_PENALTY: { x: 0.13, y: 0.5 },
}

export const LINE_ACTION_LOOKUP_STATUS: Record<string, 1 | 2 | 3> = {
    H_CR_U: 3,
    H_CR_D: 3,
    A_CR_U: 3,
    A_CR_D: 3,
    H_GC: 3,
    A_GC: 3,
    H_FK_DG: 3,
    A_FK_DG: 3,
    H_FK_U: 3,
    H_FK_D: 3,
    A_FK_U: 3,
    A_FK_D: 3,
    H_TH_U: 2,
    A_TH_U: 2,
    H_TH_M: 2,
    A_TH_M: 2,
    H_TH_D: 2,
    A_TH_D: 2,
    H_PENALTY: 1,
    A_PENALTY: 1,
}

const TEAM_BALL_POSITION_STATE = ["HP", "AP", "HA", "AA", "HDA", "ADA"]

const DEFAULT_TEAM_BALL_POSITION_STATE: Record<string, CoordinateType> = {
    HP: { x: 0.44, y: 0.5 },
    AP: { x: 0.56, y: 0.5 },
    HA: { x: 0.65, y: 0.5 },
    AA: { x: 0.35, y: 0.5 },
    HDA: { x: 0.8, y: 0.5 },
    ADA: { x: 0.2, y: 0.5 },
}

export const getMltsCurrentState = (
    mltsProviderProps: MltsPropsType,
    mltsCurrentState: Omit<MltsStateType, "pitchBlobRef">,
    pitchBlobRef: HTMLElement | null,
): Omit<MltsStateType, "pitchBlobRef"> => {
    const {
        teamsColorProps,
        currentScoreProp,
        ballPositionProps,
        matchStatusProps,
    } = mltsProviderProps

    const teamsName =
        mltsProviderProps.teamsNameProp || DEFAULT_MLTS_STATE.teamsName

    const ballPosition = BallPositionUtils.retrieve(
        ballPositionProps,
        mltsCurrentState.ballPosition,
    )

    // if ball position is not provided
    if (!ballPositionProps) {
        const ballPositionIfNotProvided =
            BALL_POSITION_UNPROVIDED[matchStatusProps]

        if (ballPositionIfNotProvided) {
            ballPosition.current = ballPositionIfNotProvided
            ballPosition.prev = null
        }
    }

    const ballPositionProvideFromStatus =
        BALL_POSITION_PROVIDED_FROM_STATUS[matchStatusProps]

    if (ballPositionProvideFromStatus) {
        ballPosition.current = ballPositionProvideFromStatus
        ballPosition.prev = null
    }

    const cameraPosition = ballPosition.current
        ? CameraUtils.getUpdateCameraPosition(
              ballPosition.current.x * 100,
              ballPosition.current.y * 100,
          )
        : CameraUtils.getResetCameraPosition()

    const teamsColor = TeamColorsUtils.retrieve(teamsColorProps)

    const activeTeamHistory = {
        current: (matchStatusProps.startsWith("H")
            ? "H"
            : matchStatusProps.startsWith("A")
              ? "A"
              : null) as ActiveTeamType,
        prev: mltsCurrentState.activeTeamHistory.current,
    }

    const activeColor = activeTeamHistory.current
        ? teamsColor[activeTeamHistory.current === "H" ? "home" : "away"]
        : ""

    const lineAction = LINE_ACTION_LOOKUP_STATUS[matchStatusProps]

    const isPenalty = ["H_PENALTY", "A_PENALTY"].includes(matchStatusProps)

    const coneStatus: ConeStatusType =
        lineAction && ballPosition.current && activeTeamHistory.current
            ? {
                  status: true,
                  ballPosition: ballPosition.current,
                  angle: ConeUtils.getAngle(
                      ballPosition.current.x * 100,
                      ballPosition.current.y * 100,
                      activeTeamHistory.current === "H",
                      isPenalty,
                  ),
                  type: lineAction,
              }
            : {
                  status: false,
                  ballPosition: null,
                  angle: 0,
                  type: 2,
              }

    const ballOnTargetStatus =
        ["H_SH_G", "A_SH_G"].includes(matchStatusProps) &&
        ballPosition.current &&
        pitchBlobRef
            ? BallTrajectoryUtils.drawBallTrajectory(
                  ballPosition.current.x * 100,
                  ballPosition.current.y * 100,
                  activeTeamHistory.current === "H",
                  true,
                  pitchBlobRef,
              )
            : {
                  show: false,
                  distance: 0,
                  angle: 0,
                  targetX: 0,
                  targetY: 0,
              }

    const soccerPath: SoccerPathType = {
        points: "",
        type: null,
    }

    if (
        TEAM_BALL_POSITION_STATE.includes(matchStatusProps) &&
        activeTeamHistory.current
    ) {
        soccerPath.type = activeTeamHistory.current

        if (ballPosition.current) {
            soccerPath.points = SoccerPathUtils.generateSoccerPath(
                ballPosition.current.x * 100,
                activeTeamHistory.current === "H",
            )
        } else {
            const teamBallPosition =
                DEFAULT_TEAM_BALL_POSITION_STATE[matchStatusProps as string]
            soccerPath.points = SoccerPathUtils.generateSoccerPath(
                teamBallPosition.x * 100,
                activeTeamHistory.current === "H",
            )
        }
    }

    const eventCard: EventCardType | null = EventCardUtils.retrieve(
        matchStatusProps,
        teamsName,
        teamsColor,
    )

    return {
        teamsName,
        teamsColors: teamsColor,
        ballPosition,
        cameraPosition,
        status: matchStatusProps,
        activeTeamHistory,
        activeColor,
        currentScore: ScoreUtils.getScore(currentScoreProp),
        coneStatus,
        ballOnTargetStatus,
        soccerPath,
        eventCard,
        wipeAnimation: WipeAnimationUtils.retrieve(
            matchStatusProps,
            teamsName,
            teamsColor,
        ),
        adBoardsAnimation: AdBoardsAnimationUtils.retrieve(
            matchStatusProps,
            teamsName,
            teamsColor,
        ),
    }
}
