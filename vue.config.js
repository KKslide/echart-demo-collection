const webpack = require('webpack')
const path = require("path")

// const proxyUrl = process.env.NODE_ENV === 'production'
//     ? 'http://134.175.129.219'  // 开发
//     : 'http://127.0.0.1:80' // 生产

module.exports = {
    // publicPath: proxyUrl
    outputDir: './dist',
    assetsDir: './', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
    indexPath: 'index.html', //指定生成的 index.html 的输出路径 (相对于 outputDir)。也可以是一个绝对路径。
    productionSourceMap: false, // 生产环境是否生成 sourceMap 文件
    filenameHashing: true, // 文件后缀哈希值, 用于控制缓存
    lintOnSave: false, //设置是否在开发环境下每次保存代码时都启用 eslint验证
    productionSourceMap: false, // 生产环境的 source map
    devServer: {
        // 跨域代理配置
        // proxy: {
        //     '/index': {
        //         changeOrigin: true,
        //         target: proxyUrl
        //     },
        // },
        port: 8090, // 端口号
    },
    configureWebpack: {
        // plugins: [
        //     new MyAwesomeWebpackPlugin()
        // ]
        // 把原本需要写在webpack.config.js中的配置代码 写在这里 会自动合并
        externals: {
            'vue': 'Vue',
            'element-ui': 'element-ui',
            'echarts': 'echarts',
        }
    },
    chainWebpack: config => {
        // jQuery载入(本地)配置:
        // config.plugin('provide').use(webpack.ProvidePlugin, [{
        //     $: 'jquery',
        //     jquery: 'jquery',
        //     jQuery: 'jquery',
        //     'window.jQuery': 'jquery'
        // }])

    },
    css: {
        // requireModuleExtension: false, // 这一项尽量不要配置true, 否则全局less或者scss就要以.moudule.xxx来命名
        // loaderOptions: {
        //     scss: {
        //         prependData: `@import "./src/styles/main.scss";`,
        //     },
        // },
    },
}