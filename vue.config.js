const path = require('path');

const resolve = dir => {
    return path.join(__dirname, dir);
};


module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    // devServer: {
    //     proxy: {
    //         '/app/mock/311531': {// api 表示拦截以 /api开头的请求路径
    //             target: 'http://rap2api.taobao.org/',//跨域的域名（不需要写路径）
    //         },
    //     },   
    // },
    // 其他配置
    chainWebpack: config => {
        config.resolve.alias
          .set("@", resolve("src"))
          .set("assets", resolve("src/assets"))
          .set("components", resolve("src/components"))
    },
}
