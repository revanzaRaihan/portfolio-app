// ecosystem.config.cjs — buat di root project lokal
module.exports = {
    apps: [
        {
            name: 'portfolio-ssr',
            script: './bootstrap/ssr/ssr.js',
            cwd: '/var/www/project/portfolio-app',
            instances: 1,
            autorestart: true,
            watch: false,
            env: {
                NODE_ENV: 'production',
                PORT: 13714,
            },
        },
    ],
};