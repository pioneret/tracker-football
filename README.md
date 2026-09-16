# @pioneret/tracker-football

A React library for real-time football match UI — live ball position tracking, event
display, and components for an interactive match experience.

Supports **React 18.2+ and React 19**, ships ESM + CJS builds with TypeScript
declarations, and is marked `"use client"` for React Server Components consumers.

## Installation

```bash
npm install @pioneret/tracker-football gsap
```

`react` and `gsap` are peer dependencies — install them alongside the library.

| Peer    | Supported range        |
| ------- | ---------------------- |
| `react` | `^18.2.0 \|\| ^19.0.0` |
| `gsap`  | `^3.12.5`              |

## Usage

The stylesheet is shipped separately and must be imported once, near your app root.

```tsx
import {
    MltsProvider,
    MatchLiveTrackerUI,
    type MltsPropsType,
} from "@pioneret/tracker-football"
import "@pioneret/tracker-football/styles.css"

export function LiveMatch({ feed }: { feed: MltsPropsType }) {
    return (
        <MltsProvider mltsProps={feed}>
            <MatchLiveTrackerUI />
        </MltsProvider>
    )
}
```

Drive the UI by passing a new `mltsProps` object whenever your match feed ticks.
The provider derives camera position, ball trajectory, cones, event cards and
score animations from the change between renders.

```tsx
const feed: MltsPropsType = {
    teamsNameProp: { home: "Home FC", away: "Away FC" },
    teamsColorProps: { home: "#d90429", away: "#0353a4" },
    ballPositionProps: { x: 62, y: 48 }, // percentages, 0–100
    matchStatusProps: "H_GOAL",
    currentScoreProp: "1-0",
}
```

### Next.js App Router

The bundle carries a `"use client"` banner, so it can be imported directly from a
server component without an extra wrapper. Import the stylesheet in your root layout.

## API

| Export               | Description                                                          |
| -------------------- | -------------------------------------------------------------------- |
| `MltsProvider`       | Context provider; takes `mltsProps` and derives all match state.     |
| `MatchLiveTrackerUI` | The full match tracker view. Must be rendered inside `MltsProvider`. |
| `MltsContext`        | Raw context, for building custom views on the derived state.         |
| `Button`             | Small styled button used by the library.                             |

All types (`MltsPropsType`, `MatchStatusType`, `CoordinateType`, `TeamsColorType`,
`MltsStateType`, …) are exported as named type exports.

### `mltsProps`

| Prop                | Type                     | Description                                      |
| ------------------- | ------------------------ | ------------------------------------------------ |
| `teamsNameProp`     | `{ home, away } \| null` | Display names for each side.                     |
| `teamsColorProps`   | `{ home, away } \| null` | Team colours; also set as CSS custom properties. |
| `ballPositionProps` | `{ x, y } \| null`       | Ball position as percentages (`0–100`).          |
| `matchStatusProps`  | `MatchStatusType`        | Current event, e.g. `"HP"`, `"H_GOAL"`, `"VAR"`. |
| `currentScoreProp`  | `string \| null`         | Score string, e.g. `"1-0"`.                      |

`matchStatusProps` accepts a fixed union covering possession, shots, throw-ins,
crosses, corners, free kicks, offsides, VAR, substitutions, injuries, cards and
penalties for both sides — see `MatchStatusType` for the full list.

### Theming

Colours and layout are driven by `--ml1-*` CSS custom properties defined on
`:root`. The library augments `React.CSSProperties` so custom properties are
type-safe in inline styles:

```tsx
<div style={{ "--ml1-coneColour": "#ffd166" }} />
```

## Development

```bash
npm install
npm run build        # ESM + CJS + bundled .d.ts
npm run typecheck
npm run storybook    # component workshop on :6006
npm run format:fix
```

## License

MIT © Pioneret
