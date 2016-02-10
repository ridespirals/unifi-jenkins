var app = require('app');
var BrowserWindow = require('browser-window');

require('crash-reporter').start({
	productName: 'unifi-jenkins-monitor',
	companyName: 'inviewlabs',
	submitURL: 'https://portal.inviewcloud.com/crashReporter',
	autoSubmit: false
});

var mainWindow = null;

app.on('window-all-closed', function() {
	if(process.platform != 'darwin') {
		app.quit();
	}
});

app.on('ready', function() {
	mainWindow = new BrowserWindow({ width: 1324, height: 720 });

	mainWindow.loadURL('file://' + __dirname + '/index.html');

	mainWindow.openDevTools();

	mainWindow.on('closed', function() {
		mainWindow = null;
	});
});

