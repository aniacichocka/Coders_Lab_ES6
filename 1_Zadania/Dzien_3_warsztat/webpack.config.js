module.exports = {
    entry: './js/app.js',
    output: {
        filename: './js/out.js'
    },
    watch: true,
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                },
                test: /\.js$/,
                exclude: /node_modules/
            },
            {
                loader: ['style-loader', 'css-loader'],
                test: /\.css$/
            },
            {
                loader: ['style-loader', 'css-loader', 'sass-loader'],
                test: /\.scss$/
            }
        ]
    }
}
// npm install node-sass sass-loader --save-dev
// npm install style-loader css-loader --save-dev
