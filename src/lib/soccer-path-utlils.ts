export const SoccerPathUtils = {
    generateSoccerPath(t: number, isHomeTeam: boolean) {
        return isHomeTeam
            ? this.generateSoccerPathHomeTeam(t)
            : this.generateSoccerPathAwayTeam(t)
    },

    generateSoccerPathHomeTeam(progress: number) {
        // Constants
        const BASE_X = 37.75
        const BASE_Y = 22.75
        const MAX_WIDTH = 924.5
        const MAX_HEIGHT = 620.5
        const MIN_SCALE = 0.5
        const SEGMENTS = 1
        const START_CURVE = 80

        // Calculate dimensions
        const scale = Math.max(progress / 100, MIN_SCALE)
        const width = MAX_WIDTH * scale
        const curveDepth = this.getValueAtProgress(
            [0, 100],
            [START_CURVE, START_CURVE],
            progress,
        )
        const segmentHeight = MAX_HEIGHT / SEGMENTS
        const endY = BASE_Y + MAX_HEIGHT

        // Calculate X coordinate for the path
        const pathX = BASE_X + width

        // Generate the curved path
        function generateCurvedPath() {
            let path = `${pathX} ${BASE_Y} `
            const controlX = pathX + curveDepth

            for (let i = 1; i <= SEGMENTS; i++) {
                const segmentY = BASE_Y + segmentHeight * i
                const controlY =
                    BASE_Y + (segmentHeight * i - segmentHeight / 2)

                path += `${controlX} ${controlY} `
                path += `${pathX} ${segmentY} `
            }

            return path
        }

        // Construct the final path
        return `${BASE_X} ${BASE_Y} ${generateCurvedPath()} ${BASE_X} ${endY}`
    },

    generateSoccerPathAwayTeam(progressPercentage: number) {
        // Constants
        const BASE_X = 924.5
        const BASE_Y = 22.75
        const MAX_WIDTH = 40
        const PATH_HEIGHT = 620.5
        const NUM_SEGMENTS = 1

        // Calculate dimensions
        const clampedProgress = Math.min(progressPercentage, 50)
        const pathWidth = this.getValueAtProgress(
            [100, 0],
            [MAX_WIDTH, MAX_WIDTH],
            progressPercentage,
        )
        const endX = 37.75 + BASE_X * (clampedProgress / 100)
        const startX = 962.25
        const endY = BASE_Y + PATH_HEIGHT
        const segmentHeight = PATH_HEIGHT / NUM_SEGMENTS

        function generateZigZagPath() {
            let path = `${endX} ${BASE_Y} `
            const leftX = endX - pathWidth

            for (let i = 1; i <= NUM_SEGMENTS; i++) {
                const midY = BASE_Y + segmentHeight * i - segmentHeight / 2
                const bottomY = BASE_Y + segmentHeight * i

                path += `${leftX} ${midY} `
                path += `${endX} ${bottomY} `
            }

            return path
        }

        return `${startX} ${BASE_Y} ${generateZigZagPath()} ${startX} ${endY}`
    },

    getValueAtProgress(
        range: number[],
        values: number[],
        progress: number,
    ): number {
        const rangeSpan = range[1] - range[0]
        const normalizedProgress = Math.max(
            Math.min((progress - range[0]) / rangeSpan, 1),
            0,
        )
        const valueSpan = values[1] - values[0]
        return values[0] + valueSpan * normalizedProgress
    },
}
