import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import postcss from "rollup-plugin-postcss"
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"

const packageJson = require("./package.json")

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "esm",
                sourcemap: true,
            },
        ],
        plugins: [
            typescript(),
            peerDepsExternal(),
            resolve(),
            commonjs(),
            terser(),
            postcss({
                modules: true,
                extract: true,
            }),
        ],
    },
    {
        input: "dist/cjs/types/src/index.d.ts",
        output: [{ file: "dist/index.d.ts", format: "esm" }],
        plugins: [dts.default()],
        external: [/\.css$/],
    },
]
