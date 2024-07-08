/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                black: '#000',
                white: '#fff',
                gray: {
                    100: '#f7fafc',
                    800: '#2d3748',
                },
            },
            boxShadow: {
                '2xl': '10px 10px 0px 0px rgba(0,0,0,1)',
            },
            fontFamily: {
                sans: ['Comic Sans MS', 'sans-serif'],
            },
        },
    },
    variants: {
        extend: {
            backgroundColor: ['hover'],
            transform: ['hover'],
            transitionProperty: ['hover'],
        },
    },
    plugins: [],
}

