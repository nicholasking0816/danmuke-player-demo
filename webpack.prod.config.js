const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    mode: 'production',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ['ts-loader']
            },
            {
                test: /\.tsx$/,
                use: ['ts-loader']
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
        }),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.join(__dirname, 'src/assets/video/najimi.mp4'),
                    to: 'najimi.mp4'
                }
            ]
        })
        
    ],
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    }
}