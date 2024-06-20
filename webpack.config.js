const path = require('path');
const PugPlugin = require('pug-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const isProduction = process.env.NODE_ENV == 'production';

const menuItems = require('./data/menu.json');

const config = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.jsx', '.js', '.scss', '.sass', '.css'],
        alias: {
            '@src': path.resolve(__dirname, './src'),
            '@assets': path.resolve(__dirname, './assets'),
            '@images': path.resolve(__dirname, './assets/images'),
            '@styles': path.resolve(__dirname, './src/styles'),
            '@script': path.resolve(__dirname, './src/scripts'),
        },
    },
    devServer: {
        static: {
            directory: path.join(__dirname, '/dist'),
        },
        open: true,
        host: '0.0.0.0',
        port: 8080,
        watchFiles: {
            paths: ['src/**/*.*'],
            options: {
                usePolling: true,
            },
        },
    },
    plugins: [
        new PugPlugin({
            pretty: true,
            entry: {
                'index': {
                    import: './src/pug/views/index.pug',
                    data: require('./data/pages/index.json')
                },
                'portfolio/05ru': {
                    import: './src/pug/layouts/portfolio.pug',
                    data: require('./data/pages/portfolio/05ru.json')
                },
                'portfolio/strikepro': {
                    import: './src/pug/layouts/portfolio.pug',
                    data: require('./data/pages/portfolio/strikepro.json')
                },
                'portfolio/rc_revolution': {
                    import: './src/pug/layouts/portfolio.pug',
                    data: require('./data/pages/portfolio/rc_revolution.json')
                },
            },
            data: {
                menuItems,
            },
            js: {
                filename: 'assets/js/[name].[contenthash:8].js'
            },
            css: {
                filename: 'assets/css/[name].[contenthash:8].css'
            },
            loaderOptions: {
                sources: [
                    {
                        tag: 'a',
                        attributes: ['href'],
                    },
                ]
            }
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
            },
            {
                test: /\.(png|jpg|jp?g|ico|svg|webp)/,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/img/[name].[hash:8][ext]'
                }
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'assets/fonts/[name][ext][query]'
                }
            },
            {
                test: /\.(css|scss|sass)$/i,
                use: [
                    'css-loader',
                    'sass-loader',
                ],
                exclude: ['/node_modules/'],
            },
        ],
    },
    stats: {
        assets: false,
        colors: true,
        version: false,
        hash: true,
        timings: true,
        chunks: false,
        chunkModules: false,
        errorDetails: true
    },
};

module.exports = () => {
    if (isProduction) {
        config.mode = 'production';
    } else {
        config.mode = 'development';
    }
    return config;
};
