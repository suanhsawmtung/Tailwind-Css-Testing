/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./public/*.{html,js}"],
    theme: {
        extend: {
            colors: {
                travel: '#1B2631',
            },
            spacing: {
                '90': '18rem',
                '96': '24rem'
            }
        },
    },
    plugins: [],
}