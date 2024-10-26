export const ColorUtils = {
    ColorManipulation: function (hex: string) {
        if (hex.charAt(0) !== "#") return [0, 0, 0]

        const n = hex.slice(1)
        if (n.length !== 3 && n.length !== 6) return [0, 0, 0]

        if (n.length === 6) {
            const r = n.match(/.{1,2}/g)
            if (r && r.length === 3)
                return [
                    parseInt(r[0], 16),
                    parseInt(r[1], 16),
                    parseInt(r[2], 16),
                ]
        } else if (n.length === 3) {
            return [
                parseInt(n[0] + n[0], 16),
                parseInt(n[1] + n[1], 16),
                parseInt(n[2] + n[2], 16),
            ]
        }

        return [0, 0, 0]
    },

    Pad2: function (value: string) {
        return value.length === 1 ? "0" + value : value
    },
    RGBToHSB: function (rgb: number[]) {
        const r = Math.max(Math.min(rgb[0] / 255, 1), 0)
        const g = Math.max(Math.min(rgb[1] / 255, 1), 0)
        const b = Math.max(Math.min(rgb[2] / 255, 1), 0)

        const max = Math.max(r, g, b)
        const min = Math.min(r, g, b)

        const delta = max - min
        let hue = 0
        const saturation = max === 0 ? 0 : delta / max
        const brightness = max

        if (max !== min) {
            switch (max) {
                case r:
                    hue = ((g - b) / delta + (g < b ? 6 : 0)) * 60
                    break
                case g:
                    hue = ((b - r) / delta + 2) * 60
                    break
                case b:
                    hue = ((r - g) / delta + 4) * 60
                    break
            }
        }

        return [hue, saturation * 100, brightness * 100]
    },
    RGBToHex: function (rgb: number[]) {
        const r = this.Pad2(Math.round(rgb[0]).toString(16))
        const g = this.Pad2(Math.round(rgb[1]).toString(16))
        const b = this.Pad2(Math.round(rgb[2]).toString(16))

        return `#${r}${g}${b}`
    },
    ConvertHSBToRGB: function (hsb: number[]) {
        const hue = Math.max(Math.min(hsb[0] / 360, 1), 0) * 6
        const saturation = Math.max(Math.min(hsb[1] / 100, 1), 0)
        const brightness = Math.max(Math.min(hsb[2] / 100, 1), 0)

        const i = Math.floor(hue)
        const f = hue - i

        const p = brightness * (1 - saturation)
        const q = brightness * (1 - f * saturation)
        const t = brightness * (1 - (1 - f) * saturation)

        const r = [brightness, q, p, p, t, brightness][i % 6]
        const g = [t, brightness, brightness, q, p, p][i % 6]
        const b = [p, p, t, brightness, brightness, q][i % 6]

        return [r * 255, g * 255, b * 255]
    },
    AccentColour: function (hex: string) {
        const rgb = this.ColorManipulation(hex)
        const hsb = this.RGBToHSB(rgb)

        if (hsb[1] < 10) return "#fff"

        const accentRGB = this.ConvertHSBToRGB([hsb[0], 35, 100])
        return this.RGBToHex(accentRGB)
    },
    HexToRGB: function (hex: string) {
        if (hex[0] !== "#") return null

        let e = hex.slice(1)

        if (!e) {
            return [0, 0, 0]
        }

        let rgb

        if (e.length === 6) {
            rgb = e.match(/.{2}/g)?.map((c) => parseInt(c, 16))
        } else if (e.length === 3) {
            rgb = e.split("").map((c) => parseInt(c + c, 16))
        } else {
            return [0, 0, 0]
        }

        return rgb || [0, 0, 0]
    },
    GetHue: function (hex: string) {
        const rgb = this.HexToRGB(hex)
        if (rgb) {
            const hsb = this.RGBToHSB(rgb)
            return hsb[0]
        } else {
            return 0
        }
    },
    GetSaturation: function (hex: string) {
        const rgb = this.HexToRGB(hex)
        if (rgb) {
            const hsb = this.RGBToHSB(rgb)
            return hsb[1]
        } else {
            return 0
        }
    },
}
