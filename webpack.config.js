module.exports = {
    entry: './src/main.js',
    output: {
        filename: './dist/app.js'
    },
    module: {
        loaders: [{
            test: /\.vue$/,
            loader: 'vue-loader'
        }, {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }, {
            //for css file
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }, {
            //for element-ui
            test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
            loader: 'file-loader'
        }, {
            //for element-ui
            test: /\.(png|jpe?g|gif|svg)(\?\S*)?$/,
            loader: 'file-loader',
            query: {
                name: '[name].[ext]?[hash]'
            }
        }]
    },
    vue: {
        loaders: {
            js: 'babel?{"presets":["es2015"]}',
            css: 'vue-style!css'
        }
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.common.js'
        }
    }
}
