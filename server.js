var webpack = require('webpack'),
	config  = require('./webpack.config'),
	path    = require('path'),
	express = require('express'),
	app      = express(),
	compiler = webpack(config);


app.use(require('webpack-hot-middleware')(compiler));

app.use(require('webpack-dev-middleware')(compiler, {
	noInfo: true,
	publicPath: config.output.publicPath
}));

app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, 'examples/index.html'));
});

app.listen(3334, 'localhost', function(error) {
	if (error) {
		console.log(error);
		return;
	}

	console.log('Go to http://localhost:3334');
});