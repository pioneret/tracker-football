import type { Meta, StoryObj } from "@storybook/react-vite"
import { useEffect, useState } from "react"

import { MltsProvider } from "../context/mlts-context"
import MatchLiveTrackerUI from "./match-live-tracker-ui"
import type { MatchStatusType, MltsPropsType } from "../types"

const MATCH_STATUSES: MatchStatusType[] = [
    "unknown",
    "HP",
    "AP",
    "HA",
    "AA",
    "HDA",
    "ADA",
    "HT",
    "FT",
    "H_GOAL",
    "A_GOAL",
    "H_SH_G",
    "A_SH_G",
    "H_SH_OFF_G",
    "A_SH_OFF_G",
    "H_TH_U",
    "A_TH_U",
    "H_CR_U",
    "A_CR_U",
    "H_GC",
    "A_GC",
    "H_FK_DG",
    "A_FK_DG",
    "H_OFS",
    "A_OFS",
    "VAR",
    "H_SUB",
    "A_SUB",
    "INJURY",
    "H_YELLOW_CARD",
    "A_YELLOW_CARD",
    "H_RED_CARD",
    "A_RED_CARD",
    "H_PENALTY",
    "A_PENALTY",
    "H_KICK_OFF",
    "A_KICK_OFF",
]

type StoryArgs = {
    homeName: string
    awayName: string
    homeColor: string
    awayColor: string
    ballX: number
    ballY: number
    matchStatus: MatchStatusType
    currentScore: string
    injuryTime: string
    clockTime: string
    player: string
}

const toProps = (args: StoryArgs): MltsPropsType => ({
    teamsNameProp: { home: args.homeName, away: args.awayName },
    teamsColorProps: { home: args.homeColor, away: args.awayColor },
    ballPositionProps: { x: args.ballX, y: args.ballY },
    matchStatusProps: args.matchStatus,
    currentScoreProp: args.currentScore || null,
    injuryTimeProp: args.injuryTime || null,
    clockTimeProp: args.clockTime || null,
    playerNameProp: args.player || null,
})

const Tracker = (args: StoryArgs) => (
    <MltsProvider mltsProps={toProps(args)}>
        <MatchLiveTrackerUI />
    </MltsProvider>
)

const meta = {
    title: "Tracker/MatchLiveTrackerUI",
    component: Tracker,
    parameters: {
        layout: "fullscreen",
    },
    argTypes: {
        homeColor: { control: "color" },
        awayColor: { control: "color" },
        ballX: { control: { type: "range", min: 0, max: 100, step: 1 } },
        ballY: { control: { type: "range", min: 0, max: 100, step: 1 } },
        matchStatus: { control: "select", options: MATCH_STATUSES },
    },
    args: {
        homeName: "Home FC",
        awayName: "Away FC",
        homeColor: "#d90429",
        awayColor: "#0353a4",
        ballX: 50,
        ballY: 50,
        matchStatus: "HP",
        currentScore: "0-0",
        injuryTime: "",
        clockTime: "12:34",
        player: "Agim",
    },
} satisfies Meta<typeof Tracker>

export default meta
type Story = StoryObj<typeof meta>

export const Playground: Story = {}

/** A scripted feed that ticks every 2s, the way a live match would. */
const SCRIPT: Array<Partial<StoryArgs>> = [
    { matchStatus: "H_KICK_OFF", ballX: 50, ballY: 50 },
    { matchStatus: "HP", ballX: 62, ballY: 40 },
    { matchStatus: "HP", ballX: 74, ballY: 55 },
    { matchStatus: "H_CR_U", ballX: 86, ballY: 22 },
    { matchStatus: "H_SH_G", ballX: 92, ballY: 48 },
    { matchStatus: "H_GOAL", ballX: 98, ballY: 50, currentScore: "1-0" },
    { matchStatus: "A_KICK_OFF", ballX: 50, ballY: 50 },
    { matchStatus: "AP", ballX: 36, ballY: 62 },
    { matchStatus: "A_FK_DG", ballX: 22, ballY: 44 },
    { matchStatus: "A_SH_OFF_G", ballX: 10, ballY: 38 },
    { matchStatus: "VAR", ballX: 10, ballY: 38 },
    { matchStatus: "H_YELLOW_CARD", ballX: 24, ballY: 50 },
    { matchStatus: "HT", ballX: 50, ballY: 50 },
]

const LiveFeedTracker = (args: StoryArgs) => {
    const [step, setStep] = useState(0)

    useEffect(() => {
        const id = setInterval(
            () => setStep((s) => (s + 1) % SCRIPT.length),
            2000,
        )
        return () => clearInterval(id)
    }, [])

    const frame = { ...args, ...SCRIPT[step] }

    return (
        <>
            <Tracker {...frame} />
            <p
                style={{
                    fontFamily: "monospace",
                    padding: "8px 12px",
                    color: "#888",
                }}
            >
                step {step + 1}/{SCRIPT.length} — {frame.matchStatus} @{" "}
                {frame.ballX},{frame.ballY}
            </p>
        </>
    )
}

export const LiveFeed: Story = {
    render: (args) => <LiveFeedTracker {...args} />,
}
