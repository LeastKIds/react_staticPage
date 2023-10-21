const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src'),
        filename: './assets/js/index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true, // CSS Modules 활성화
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 프로젝트의 HTML 파일 경로
        }),
    ],

    devServer: {
        static: {
            directory: path.join(__dirname, 'src'), // 이전의 'contentBase'와 동일한 역할을 합니다.
        },
        compress: true,
        port: 9000, // 원하는 포트 번호를 사용합니다.
        hot: true, // HMR(Hot Module Replacement)을 활성화합니다.
        open: true, // 서버 실행 시 브라우저를 자동으로 엽니다.
    },
    // performance: {
    //     hints: false, // 이 설정은 성능 힌트 시스템을 완전히 비활성화합니다.
    // },


};
