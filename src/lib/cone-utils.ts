export const ConeUtils = {
    getAngle: function (
        x: number,
        y: number,
        isHomeTeam: boolean,
        isPenalty: boolean,
    ) {
        if (isPenalty) {
            return isHomeTeam ? 0 : 180
        }

        // Set the reference point based on the team (team 1 or another team)
        let referenceX = isHomeTeam ? 87 : 13
        let referenceY = 50

        // Scale the input and reference coordinates
        x = 924.5 * x
        referenceX = 924.5 * referenceX
        y = 620 * y
        referenceY = 620 * referenceY

        // Calculate the differences in x and y coordinates
        const deltaX = referenceX - x
        const deltaY = referenceY - y

        // Calculate the angle in radians using atan2
        const angleRadians = Math.atan2(deltaY, deltaX)

        // Convert the angle to degrees
        const angleDegrees = (180 * angleRadians) / Math.PI

        // Normalize the angle to be within the range [0, 360)
        return (angleDegrees + 360) % 360
    },
}
