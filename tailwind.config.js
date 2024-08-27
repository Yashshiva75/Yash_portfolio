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
            },
            colors: {
                "nav": "gray",
                "section": "#80ffdb",
                "one": "#000000",
                "two": "#e74c3c"
            },
            fontFamily: {
                "google": ["Poppins", "sans-serif"]
            }
        },
    },

    plugins: [],
}