const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'src/output'),
        filename: 'assets/js/index.js',
        clean: true,
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
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]', // 파일의 원래 경로와 이름을 유지합니다.
                            context: path.resolve(__dirname, 'src/'), // 'src/'를 기본 경로로 설정합니다.
                            outputPath: (url, resourcePath, context) => {
                                // 프로젝트 내의 상대 경로를 유지하기 위한 함수
                                const relativePath = path.relative(context, resourcePath);
                                return `assets/${relativePath}`; // 최종 경로를 'output/'으로 설정합니다.
                            },
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html', // 프로젝트의 HTML 파일 경로
            filename: '../output/index.html'
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
