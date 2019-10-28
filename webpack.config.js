const HtmlWebpackPlugin = require('html-webpack-plugin'); // Require  html-webpack-plugin plugin

module.exports = {
  entry: __dirname + "/src/app/index.js", // webpack entry point. Module to start building dependency graph
  output: {
    path: __dirname + '/dist/assets/bundle.js', // Folder to store generated bundle
    filename: 'bundle.js',  // Name of generated bundle after build
    // publicPath: '/', // public URL of the output directory when referenced in a browser
    sourceMapFilename: 'bundle.map'
  },
  devtool: '#source-map',
  module: {  // where we defined file patterns and their loaders
      rules: [ 
        {
            test: /\.js$/,
            use: 'babel-loader',
            exclude: [
              /node_modules/
            ],
           
          },

           {
            test: /\.(sass|scss)$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "sass-loader" // compiles Sass to CSS
            }]
          },
          {
            test: /\.(jpg|jpeg|gif|png)$/,
            exclude: /node_modules/,
            loader:'url-loader?limit=1024&name=images/[name].[ext]'
        },
        {
            test: /\.(woff|woff2|eot|ttf|svg)$/,
            exclude: /node_modules/,
            loader: 'url-loader?limit=1024&name=fonts/[name].[ext]'
        }

      ]
  },
  plugins: [  // Array of plugins to apply to build chunk
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      }),
      
  ],
  devServer: {  // configuration for webpack-dev-server
      contentBase: './src/public',  //source of static assets
      port: 7700, // port to run dev-server
  } 
}