const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, 'src/index.tsx')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js',
        publicPath: '/',
    },
    devServer: {
        // contentBase: path.join(__dirname, 'dist'),
        static: path.join(__dirname, 'dist'),
        historyApiFallback: true,
        // host: '192.168.0.162',
        port: 3001
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
        alias: {
            components: path.resolve(__dirname, 'src/components'),
            containers: path.resolve(__dirname, 'src/containers')
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'main.css'
        }),
        new htmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            // favicon: ""
        })
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ["ts-loader"]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                        },
                    }
                ]
            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', "@babel/react", "@babel/preset-typescript"]
                    }
                }
            }
        ]
    }
};