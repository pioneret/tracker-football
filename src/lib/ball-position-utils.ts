import { BallPositionType, CoordinateType } from "../types"

export const BallPositionUtils = {
    retrieve(
        ballPositionProps: CoordinateType | null,
        currentBallPosition: BallPositionType,
    ) {
        if (this.isValid(ballPositionProps)) {
            return {
                current: ballPositionProps,
                prev: currentBallPosition.current,
            }
        }

        return this.getResetBallPosition()
    },

    isValid(coordinates: CoordinateType | null): boolean {
        return coordinates !== null && this.isWithinBounds(coordinates)
    },

    isWithinBounds({ x, y }: CoordinateType): boolean {
        return x >= 0 && y >= 0 && x <= 100 && y <= 100
    },

    getResetBallPosition() {
        return {
            current: null,
            prev: null,
        }
    },
}
