const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "bundle.js",
    //打包文件使用环境
    environment: {
      //不能使用箭头函数
      arrowFunction: false,
      const: false,
    },
  },
  module: {
    // 指定要加载的规则
    rules: [
      {
        //test指定规则生效的文件
        test: /\.ts$/,
        //要使用的loader
        use: [
          {
            /**
             * babel ：
             * 1将新语法转为旧语法 ,
             * 2将浏览器中不支持的转为浏览器支持的
             * 3按需加载
             * */

            //指定加载器
            loader: "babel-loader",
            //配置
            options: {
              //设置预定义环境
              presets: [
                [
                  //指定环境的插件
                  "@babel/preset-env",
                  //配置信息
                  {
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    //指定corejs的版本
                    corejs: "3",
                    //使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          "ts-loader",
        ],
        //要排除的文件
        exclude: /node-modules/,
      },
      //设置less文件的处理
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({ template: "src/index.html" }),
    new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
  ],
  //用来设置引用的模块
  resolve: {
    extensions: [".ts", ".js"],
  },
};
