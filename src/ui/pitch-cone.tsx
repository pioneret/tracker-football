import { MltsContext } from "../context/mlts-context"
import PitchConeUI from "./pitch-cone-ui"
import React from "react"

export default function PitchCone() {
    const { coneStatus } = React.useContext(MltsContext)

    return <PitchConeUI coneStatus={coneStatus} />
}
