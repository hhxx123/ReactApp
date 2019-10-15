module.exports={
    entry:__dirname+"/public/index.jsx",
    output:{
        path:__dirname+"/public",
        filename:'bundle.js'
    },
    devServer:{
        contentBase:"./public"
    },
    module: {
        rules: [
            { test: /\.(jsx)$/, exclude: /node_modules/, loader: 'babel-loader' }
        ]
    }
}