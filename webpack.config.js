const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "development",
  entry: {
    main: "./src/js/main.js",
    dictionary: "./src/components/dictionary/dictionary.js",
    chapter1: "./src/components/chapter1/chapter1.js",
    chapter2: "./src/components/chapter2/chapter2.js",
    chapter3: "./src/components/chapter3/chapter3.js",
  },
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    assetModuleFilename: "assets/[hash][ext][query]",
  },
  devServer: {
    port: 8080,
    open: true,
    static: {
      directory: path.join(__dirname, "dist"),
    },
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      chunks: ["main"],
      template: "./src/index.html",
      favicon: "./public/assets/ico/manual.png",
    }),
    new HtmlWebpackPlugin({
      filename: "dictionary.html",
      chunks: ["dictionary", "main"],
      template: "./src/pages/dictionary/dictionary.html",
      favicon: "./public/assets/ico/manual.png",
    }),
    new HtmlWebpackPlugin({
      filename: "chapter1.html",
      chunks: ["chapter1", "main"],
      template: "./src/pages/chapter1/chapter1.html",
      favicon: "./public/assets/ico/manual.png",
    }),
    new HtmlWebpackPlugin({
      filename: "chapter2.html",
      chunks: ["chapter2", "main"],
      template: "./src/pages/chapter2/chapter2.html",
      favicon: "./public/assets/ico/manual.png",
    }),
    new HtmlWebpackPlugin({
      filename: "chapter3.html",
      chunks: ["chapter23", "main"],
      template: "./src/pages/chapter3/chapter3.html",
      favicon: "./public/assets/ico/manual.png",
    }),
    new HtmlWebpackPlugin({
      template: "./src/components/header/header.html",
      filename: "components/header/header.html",
    }),
    new HtmlWebpackPlugin({
      template: "./src/components/footer/footer.html",
      filename: "components/footer/footer.html",
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: "public/assets", to: "assets" }],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      {
        test: /\.(scss)$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [autoprefixer],
              },
            },
          },
          {
            // Loads a SASS/SCSS file and compiles it to CSS
            loader: "sass-loader",
            options: {
              sassOptions: {
                silenceDeprecations: [
                  "mixed-decls",
                  "color-functions",
                  "global-builtin",
                  "import",
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
