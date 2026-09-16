import type { Preview } from "@storybook/react-vite"
import "../src/index.css"

const preview: Preview = {
    parameters: {
        backgrounds: {
            options: {
                black: { name: "Black", value: "#000000" },
                dark: { name: "Dark", value: "#1f1f1f" },
                light: { name: "Light", value: "#ffffff" },
            },
        },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    initialGlobals: {
        backgrounds: { value: "black" },
    },
}

export default preview
