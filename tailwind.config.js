/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: "#9610FF",
                secondary: "#6A5ACD",
                alertStatus: {
                    info: "#9610FF",
                    success: "#12D18E",
                    warning: "#FACC15",
                    error: "#F75555",
                    light_disabled: "#D8D8D8",
                    dark_disabled: "#23252B",
                    button_disabled: "#780DCC"
                },
                greyScale: {
                    900: "#212121",
                    800: "#424242",
                    700: "#616161",
                    600: "#757575",
                    500: "#9E9E9E",
                    400: "#BDBDBD",
                    300: "#E0E0E0",
                    200: "#EEEEEE",
                    100: "#F5F5F5",
                    50: "#FAFAFA",
                },
                // TODO: Add gradients?
                darkColors: {
                    dark_1: "#181A20",
                    dark_2: "#1E2025",
                    dark_3: "#1F222A",
                    dark_4: "#262A35",
                    dark_5: "#35383F"
                },
                other: {
                    white: "#FFFFFF",
                    black: "#000000",
                    red: "#F44336",
                    pink: "#E91E63",
                    purple: "#9C27B0",
                    deepPurple: "#673AB7",
                    indigo: "#3F51B5",
                    blue: "#2196F3",
                    lightBlue: "#03A9F4",
                    cyan: "#00BCD4",
                    teal: "#009688",
                    green: "#4CAF50",
                    lightGreen: "#8BC34A",
                    lime: "#CDDC39",
                    yellow: "#FFEB3B",
                    amber: "#FFC107",
                    orange: "#FF9800",
                    deepOrange: "#FF5722",
                    brown: "#795548",
                    blueGrey: "#607D8B"
                },
                background: {
                    purple: "#F7ECFF",
                    green: "#E7FAF4",
                    blue: "#EEF2FF",
                    red: "#FFEFEE",
                    teal: "#EDF7F6",
                    brown: "#F8F3F1",
                    yellow: "#FFFCEB",
                    orange: "#FFF7EB"
                },
                transparent: {
                    purple: "rgba(150, 16, 255, 0.1)",
                    green: "rgba(18, 209, 142, 0.8)",
                    blue: "rgba(35, 93, 255, 0.8)",
                    red: "rgba(254, 51, 35, 0.8)",
                    teal: "rgba(26, 153, 142, 0.8)",
                    brown: "rgba(164, 99, 77, 0.8)",
                    yellow: "rgba(255, 211, 0, 0.8)",
                    orange: "rgba(248, 147, 0, 0.8)"
                }
            },
            fontFamily: {
                urbanist_bold: ["Urbanist Bold", 'sans-serif'],
                urbanist_semibold: ["Urbanist SemiBold", 'sans-serif'],
                urbanist_medium: ["Urbanist Medium", 'sans-serif'],
                urbanist_regular: ["Urbanist Regular", 'sans-serif']
            },
            fontSize: {
                "heading-1": 48,
                "heading-2": 40,
                "heading-3": 32,
                "heading-4": 24,
                'heading-5': 20,
                'heading-6': 18,

                'body-xlarge': 18,
                'body-large': 16,
                'body-medium': 14,
                'body-small': 12,
                'body-xsmall': 10,
            }
        },
    },
    plugins: [],
}

