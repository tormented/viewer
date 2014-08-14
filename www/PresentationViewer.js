var argscheck = require('cordova/argscheck'),
	utils = require('cordova/utils'),
	exec = require('cordova/exec');

function PresentationViewer(){

	this.PLUGIN_NAME = 'PresentationViewer';
	this.ENTRY_FILENAME = 'index.html';
	this.EVENT_DID_LOAD = 'DID_LOAD';
	this.EVENT_ON_COMPLETE = 'ON_COMPLETE';

	PresentationViewer.prototype.openPresentation = function() {
		var presentationIndexPath;
		presentationIndexPath = this._pathWithPathComponent(cordova.file.applicationStorageDirectory, this.ENTRY_FILENAME);
		return cordova.exec(this._presentationViewingHandler, this._presentationViewingErrorHandler, this.PLUGIN_NAME, 'openPresentation', [presentationIndexPath]);
	};

	PresentationViewer.prototype._pathWithPathComponent = function(path, pathComponent) {
		return "" + path + "/" + pathComponent;
	};

}