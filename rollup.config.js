import peerDepsExternal from "rollup-plugin-peer-deps-external"
import typescript from "@rollup/plugin-typescript"
import resolve from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import postcss from "rollup-plugin-postcss"
import terser from "@rollup/plugin-terser"
import dts from "rollup-plugin-dts"
import path from "path"

const packageJson = require("./package.json")

// react/jsx-runtime is pulled in by the automatic JSX runtime, which React 19
// uses exclusively, so it has to stay external alongside the peer deps.
const external = [/^react($|\/)/, /^gsap($|\/)/, "classnames"]

// Every component here is interactive (context, refs, GSAP), so the whole
// bundle is one client boundary for React Server Components consumers.
const banner = '"use client";'

// The stylesheet is identical for both formats, so only the ESM pass writes it.
const stylesheet = path.resolve(__dirname, "dist/index.css")

const buildPlugins = (extractCss) => [
    peerDepsExternal(),
    postcss({
        modules: true,
        minimize: true,
        // The CJS pass only needs the class-name map, not a second copy.
        extract: extractCss ? stylesheet : false,
        inject: false,
    }),
    resolve({ extensions: [".ts", ".tsx", ".js", ".jsx"] }),
    commonjs(),
    typescript({
        tsconfig: "./tsconfig.json",
        noEmit: false,
        declaration: false,
        declarationMap: false,
        sourceMap: true,
        outDir: undefined,
        exclude: ["src/stories/**", "**/*.stories.*"],
    }),
    // output.banner would be swallowed by terser's directive handling.
    terser({ format: { preamble: banner } }),
]

const onwarn = (warning, warn) => {
    // "use client" is re-applied as an output preamble; per-module directives
    // are expected to disappear when everything is bundled into one file.
    if (warning.code === "MODULE_LEVEL_DIRECTIVE") return
    warn(warning)
}

export default [
    {
        input: "src/index.ts",
        output: {
            file: packageJson.module,
            format: "esm",
            sourcemap: true,
        },
        plugins: buildPlugins(true),
        external,
        onwarn,
    },
    {
        input: "src/index.ts",
        output: {
            file: packageJson.main,
            format: "cjs",
            sourcemap: true,
            exports: "named",
            interop: "auto",
        },
        plugins: buildPlugins(false),
        external,
        onwarn,
    },
    {
        input: ".types-cache/index.d.ts",
        output: [{ file: packageJson.types, format: "esm" }],
        plugins: [dts.default()],
        external: [/\.css$/],
    },
]
