/*
 * @Description: 这里输入文件功能
 * @Author: zhoupeng
 * @Date: 2020-05-19 10:03:23
 */

const webpackDevServer = require("webpack-dev-server");
const webpack = require("webpack");

const config = require("./webpack.dev");
const options = {
  contentBase: "./dist",
  hot: true,
  host: "10.112.14.29"
};

webpackDevServer.addDevServerEntrypoints(config, options);
const compiler = webpack(config);
const server = new webpackDevServer(compiler, options);

server.listen(8081, "10.112.14.29", () => {
  console.log("dev server listening on port 8081");
});
