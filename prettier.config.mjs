/**
 * @see https://prettier.io/docs/configuration
 * @type {import("prettier").Config}
 */
const config = {
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "es5",
    plugins: ["prettier-plugin-tailwindcss"],
};

export default config;
