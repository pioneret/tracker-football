import type { StorybookConfig } from "@storybook/react-vite"

const config: StorybookConfig = {
    stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
    addons: ["@chromatic-com/storybook", "@storybook/addon-docs"],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
    typescript: {
        // The library's own tsconfig is emit-only; let Vite handle transpiling.
        check: false,
    },
}

export default config
