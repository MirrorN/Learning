// 使用 node js地导出故语法，向外导出一个 webpack 的配置对象
const path = require('path')
// 导入插件 返回构造函数（因此大写）
const HtmlPlugin = require('html-webpack-plugin')

const htmlPlugin = new HtmlPlugin({
  template: './src/index.html',
  filename: './index.html',
})

// 导入插件 得到插件的构造函数 并创建实例对象
// 解构赋值
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const cleanPlugin = new CleanWebpackPlugin()

module.exports = {
  // 开发模式下使用此设置 生产模式中不建议使用
  // devtool: 'eval-source-map',
  // 生产模式下设置nosource-source-map只显示行号不追踪源码，或者直接关闭devtool
  devtool: 'nosources-source-map',
  // mode 指定构建模式 可选值为 development 和 production
  mode: 'development',
  // 打包入口文件路径
  entry: path.join(__dirname, './src/index.js'),
  output: {
    // 输出文件的存放路径
    path: path.join(__dirname, './dist'),
    // 输出文件的名称
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      // 定义不同模块对应的loader
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      // 处理less文件
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      // 处理url 可以采用 url 传递参数的方式 也可以使用对象方式
      { test: /\.jpg|png|gif$/, use: 'url-loader?limit=229&outputPath=images' },
      // 使用 exclude 排除指定的目录 node modules目录下的文件不需要进行打包
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
    ]
  },
  resolve: {
    alias: {
      '@': path.join(__dirname, './src/')
    }
  },
  devServer: {
    //....//
    open: true,   // 初次打包完成后自动打开浏览器
    host: '127.0.0.1',  // 实时打包使用的主机地址
    port: 80,   // 实时打包使用的端口号
    static: {
      directory: path.join(__dirname, './'),
      watch: true
    }
  },
  // 通过plugins节点 使htmlPlugin生效
  // 将自动删除旧dist的文件夹的插件挂载到plugins节点上
  plugins: [htmlPlugin, cleanPlugin],
}