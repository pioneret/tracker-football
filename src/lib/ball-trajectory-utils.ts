export const BallTrajectoryUtils = {
    calculateAngle: function (
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        element: HTMLElement,
    ) {
        const elementWidth = element.clientWidth
        const elementHeight = element.clientHeight

        const deltaX = ((endX - startX) * elementWidth) / 100
        const deltaY = ((endY - startY) * elementHeight) / 100

        return Math.atan2(deltaY, deltaX) * (180 / Math.PI)
    },
    calculateDistance: function (
        startX: number,
        startY: number,
        endX: number,
        endY: number,
        element: HTMLElement,
    ) {
        const elementWidth = element.clientWidth
        const elementHeight = element.clientHeight

        const deltaX = ((endX - startX) * elementWidth) / 100
        const deltaY = ((endY - startY) * elementHeight) / 100

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY)
    },

    drawBallTrajectory: function (
        startX: number,
        startY: number,
        isHome: boolean,
        isTarget: boolean,
        element: HTMLElement,
    ) {
        const targetX = isHome ? 100 : 0
        const targetY = 50

        const distance = this.calculateDistance(
            startX,
            startY,
            targetX,
            targetY,
            element,
        )
        const angle = this.calculateAngle(
            startX,
            startY,
            targetX,
            targetY,
            element,
        )

        return {
            show: true,
            angle,
            distance,
            targetX: targetX / 100,
            targetY: targetY / 100,
        }
    },
}
