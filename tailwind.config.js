/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            screens: {
                "sm": "480 px"
            },
            spacing: {
                "big": "40rem"
            }
        },
    },

    plugins: [],
}