module.exports={
    entry:__dirname+"/public/index.jsx",
    output:{
        path:__dirname+"/public",
        filename:'bundle.js'
    },
    devServer:{
        contentBase:"./public",
        inline:true,
        historyApiFallback:true,
    },
    module: {
        rules: [
            { test: /\.(jsx)$/, exclude: /node_modules/, loader: 'babel-loader' },
            { test: /\.(css|less)$/,   use: ["style-loader", "css-loader", "less-loader"] }
        ]
    }

}