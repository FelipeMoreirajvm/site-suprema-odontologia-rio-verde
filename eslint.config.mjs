import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import prettier from "eslint-config-prettier/flat";

const MAX_FUNCTION_LINES = 30;
const MAX_COMPLEXITY = 8;
const MAX_PARAMS = 3;
const MAX_NESTING_DEPTH = 3;
const MIN_NAME_LENGTH = 2;

const cleanCodeRules = {
  "max-lines-per-function": [
    "error",
    { max: MAX_FUNCTION_LINES, skipBlankLines: true, skipComments: true },
  ],
  complexity: ["error", MAX_COMPLEXITY],
  "max-params": ["error", MAX_PARAMS],
  "max-depth": ["error", MAX_NESTING_DEPTH],
  "no-magic-numbers": ["error", { ignore: [0, 1] }],
  "no-nested-ternary": "error",
  "id-length": ["error", { min: MIN_NAME_LENGTH }],
  "no-console": "error",
  "@typescript-eslint/no-unused-vars": "error",
};

function forbidImportsFrom(layers) {
  const layerPatterns = layers.map((layer) => ({
    group: [`@/${layer}`, `@/${layer}/**`],
    message: `This folder cannot import from "${layer}".`,
  }));

  const parentRelativePattern = {
    regex: "^\\.\\./",
    message: 'Use the "@/" alias instead of parent-relative imports.',
  };

  return {
    "no-restricted-imports": [
      "error",
      { patterns: [...layerPatterns, parentRelativePattern] },
    ],
  };
}

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  { rules: cleanCodeRules },
  {
    files: ["src/lib/**", "src/config/**"],
    rules: forbidImportsFrom(["components", "sections", "app"]),
  },
  {
    files: ["src/components/**"],
    rules: forbidImportsFrom(["sections", "app"]),
  },
  {
    files: ["src/sections/**"],
    rules: forbidImportsFrom(["app"]),
  },
  {
    files: ["**/*.test.ts", "**/*.test.tsx"],
    rules: {
      "max-lines-per-function": "off",
      "no-magic-numbers": "off",
    },
  },
  prettier,
  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"]),
]);

export default eslintConfig;
