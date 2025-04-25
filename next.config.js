module.exports = {
    reactStrictMode: true,
    output: 'export',
    trailingSlash: true, // Optional: Adds trailing slashes to URLs
    exportPathMap: async function () {
        return {
        '/': { page: '/' },
        '/works': { page: '/works' },
        '/works/alptrader': { page: '/works/alptrader' },
        }
    }
}
