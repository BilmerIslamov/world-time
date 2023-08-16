/** @type {import('next').NextConfig} */
module.exports = {
    // your existing configuration...

    images: {
        domains: ['sobit2204.pythonanywhere.com'],
    },
    env: {
        GOOGLE_ANALYTICS_ID: 'G-CBD7KWSDWW',
    },
    youtube: {
        source: '/embed/:path*',
        destination: 'https://www.youtube.com/embed/:path*',
    },
}