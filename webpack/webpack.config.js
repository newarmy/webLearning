module.exports ={
    //分块（入口文件，这是分块的写写法， 如果一个入口时可以这些写:
	//entry: 'm.js'或  entry: ['m.js', 'm1.js']）
	entry: {
		chunk1: './src/main.js',
		chunk2: ['./src/main_1.js', './src/main_2.js'],
		chunk3: './amd/main.js'
	},
	//编译后的输出配置
	output: {
	    // 输出路径，__dirname指webpack.config.js的路径
		path: __dirname+'/js/',
		//输出文件名称
		filename: '[name].js',//[name] 表示 chunk1， chunk2，
		//c1.js 是non-entry chunks, （require 或 require.ensure 引入的模块）
		chunkFilename: '[id].asyncfile.js',
		publicPath: '//www.test.com/output/js/'//publicPath是对页面暴露的地址（url）
	},
	module: {
		loaders: [
		// //.css 文件使用 style-loader 和 css-loader 来处理
		{test: /\.css$/, loader: 'style!css'}
		]
	}
	
}