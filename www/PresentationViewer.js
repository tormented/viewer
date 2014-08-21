var PresentationViewer = {
	PLUGIN_NAME: 'PresentationViewer',
	ENTRY_FILENAME: 'index.html',
	EVENT_DID_LOAD: 'DID_LOAD',
	EVENT_ON_COMPLETE: 'ON_COMPLETE',
	openPresentation: function(fullPath){
		var presentationIndexPath;
		presentationIndexPath = this._pathWithPathComponent(fullPath, this.ENTRY_FILENAME);
		return cordova.exec(this._presentationViewingHandler.bind(this), this._presentationViewingErrorHandler, this.PLUGIN_NAME, 'openPresentation', [presentationIndexPath]);
	},
	_pathWithPathComponent: function(path, pathComponent){
		return  path + "/" + pathComponent;
	},
	_presentationViewingHandler: function(message){
		var that = this;
		switch (message) {
			case that.EVENT_ON_COMPLETE:
				return that.closePresentation();
		}
	},
	_presentationViewingErrorHandler: function(message){
		console.log(message);
	},
	closePresentation: function(){

		cordova.exec((function(){
			return null;
		}), (function(error){
			return null;
		}), this.PLUGIN_NAME, 'closePresentation', []);

	}
};

module.exports = PresentationViewer;