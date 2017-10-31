const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 不需要打包的文件
const externals = {
    'vue': 'vue'
}

const packageJson = path.resolve(process.cwd(), 'static') + '/package.json';
const name = require(packageJson).name;

const config = {
    node: {
        Buffer: false
    },
    entry: {
        app: './src/' + name + '/' + 'index.js'
    },
    output: {
        path: path.resolve(process.cwd(), name),
        filename: 'index.js',
        publicPath: '/',
        libraryTarget: "commonjs2"
    },
    resolve: {
        extensions: ['.js', '.json', '.vue']
    },
    externals: externals,
    module: {
        rules: [{
            test: /\.css$/,
            use: ExtractTextPlugin.extract({
                use: 'css-loader?minimize!postcss-loader'
            })
        },
        // {
        //     test: /\.less$/,
        //     use: ExtractTextPlugin.extract({
        //         use: 'css-loader?minimize!postcss-loader!less-loader'
        //     })
        // },
        {
            test: /\.js$/,
            loader: 'babel-loader',
            include: [path.resolve(process.cwd(), 'src')],
        }, {
            test: /\.vue$/,
            loader: 'vue-loader',
            options: {
                loaders: {
                    css: ExtractTextPlugin.extract({
                        use: 'css-loader?minimize',
                    }),

                    less: ExtractTextPlugin.extract({
                        use: 'css-loader?minimize!postcss-loader!less-loader',
                    })
                    // css:'css-loader?minimize',

                    // less: 'css-loader?minimize!postcss-loader!less-loader'


                }
            }
        }, {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000 * 5,
                name: '[name].[hash:7].[ext]'
            }
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
            loader: 'url-loader',
            query: {
                limit: 1000 * 5,
                name: '[name].[hash:7].[ext]'
            }
        }]
    },
    plugins: [
        new ExtractTextPlugin('style.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            },
            sourceMap: true
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
};
module.exports = config;