module.exports ={
    //�ֿ飨����ļ������Ƿֿ��дд���� ���һ�����ʱ������Щд:
	//entry: 'm.js'��  entry: ['m.js', 'm1.js']��
	entry: {
		chunk1: './src/main.js',
		chunk2: ['./src/main_1.js', './src/main_2.js'],
		chunk3: './amd/main.js'
	},
	//�������������
	output: {
	    // ���·����__dirnameָwebpack.config.js��·��
		path: __dirname+'/js/',
		//����ļ�����
		filename: '[name].js',//[name] ��ʾ chunk1�� chunk2��
		//c1.js ��non-entry chunks, ��require �� require.ensure �����ģ�飩
		chunkFilename: '[id].asyncfile.js',
		publicPath: '//www.test.com/output/js/'//publicPath�Ƕ�ҳ�汩¶�ĵ�ַ��url��
	},
	module: {
		loaders: [
		// //.css �ļ�ʹ�� style-loader �� css-loader ������
		{test: /\.css$/, loader: 'style!css'}
		]
	}
	
}