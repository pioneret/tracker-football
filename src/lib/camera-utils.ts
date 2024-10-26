export const CameraUtils = {
    getUpdateCameraPosition: function (
        horizontalPercentage: number,
        verticalPercentage: number,
    ) {
        const MAX_PERCENTAGE = 100
        const MIN_PERCENTAGE = 0

        // Ensure input values are within the valid range
        if (
            horizontalPercentage >= MIN_PERCENTAGE &&
            horizontalPercentage <= MAX_PERCENTAGE &&
            verticalPercentage >= MIN_PERCENTAGE &&
            verticalPercentage <= MAX_PERCENTAGE
        ) {
            // Map the horizontal percentage to a cubic curve
            const mappedHorizontal = this.mapValueToRangeWithCubicCurve(
                horizontalPercentage / MAX_PERCENTAGE,
            )

            // Calculate vertical translation, relative to the center
            const verticalAdjustment = (verticalPercentage - 50) / 20

            // Determine scale adjustment based on horizontal movement
            const horizontalScaleAdjustment = Math.abs(mappedHorizontal) / 250
            const scale = 0.85 + horizontalScaleAdjustment

            return {
                scale,
                translateX: 2.2 * -mappedHorizontal,
                translateY: 2 * -verticalAdjustment - 5,
                rotateZ: -mappedHorizontal / 5,
                rotateX: -verticalAdjustment / 5,
            }
        }

        return this.getResetCameraPosition()
    },

    // Function to map a normalized value to a cubic curve
    mapValueToRangeWithCubicCurve: function (normalizedValue: number) {
        const clampedValue = Math.max(0, Math.min(1, normalizedValue))

        // Apply cubic curve mapping
        const cubicInput = 2 * (clampedValue - 0.5)
        const cubicOutput = Math.pow(cubicInput, 5)
        return 30 * cubicOutput
    },

    getResetCameraPosition: function () {
        const defaultHorizontal = 0
        const defaultVertical = 0
        const defaultScale = 0.85

        return {
            scale: defaultScale,
            translateX: 1.7 * -defaultHorizontal,
            translateY: 2 * -defaultVertical - 5,
            rotateZ: -defaultHorizontal / 5,
            rotateX: -defaultVertical / 5,
        }
    },
}
