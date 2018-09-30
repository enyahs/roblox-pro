const tailwindcss = require('tailwindcss');

module.exports = {

    plugins: [
        
        // Tailwind CSS
        tailwindcss('./tailwind.config.js'),

        // Autoprefixer
        require('autoprefixer'),

    ]

}