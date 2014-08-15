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

	PresentationViewer.prototype._presentationViewingHandler = function(message){
		switch(message){
			case this.EVENT_DID_LOAD:
				return this.trigger('didLoad', this);
			case this.EVENT_ON_COMPLETE:
				return this.trigger('complete', this);
			default:
				return this.trigger('didLoad', this);
		}
	};

	PresentationViewer.prototype._presentationViewingErrorHandler = function(message){
		return this.trigger('error', this);
	};

}



/*
(function(){
	var PresentationViewer, PresentationsFileManager, Spine,
		__bind = function(fn, me){
			return function(){
				return fn.apply(me, arguments);
			};
		},
		__hasProp = {}.hasOwnProperty,
		__extends = function(child, parent){
			for(var key in parent){
				if(__hasProp.call(parent, key)) child[key] = parent[key];
			}
			function ctor(){
				this.constructor = child;
			}

			ctor.prototype = parent.prototype;
			child.prototype = new ctor();
			child.__super__ = parent.prototype;
			return child;
		};

	PresentationViewer = (function(_super){
		__extends(PresentationViewer, _super);

		PresentationViewer.prototype.PLUGIN_NAME = 'PresentationViewer';

		PresentationViewer.prototype.ENTRY_FILENAME = 'index.html';

		PresentationViewer.prototype.EVENT_DID_LOAD = 'DID_LOAD';

		PresentationViewer.prototype.EVENT_ON_COMPLETE = 'ON_COMPLETE';

		function PresentationViewer(presentationId){
			this.presentationId = presentationId;
			this.getKPI = __bind(this.getKPI, this);
			this.closePresentation = __bind(this.closePresentation, this);
			this._presentationViewingErrorHandler = __bind(this._presentationViewingErrorHandler, this);
			this._presentationViewingHandler = __bind(this._presentationViewingHandler, this);
			this.openPresentation = __bind(this.openPresentation, this);
		}

		PresentationViewer.prototype.openPresentation = function(){
			var presentationIndexPath;
			presentationIndexPath = this._pathWithPathComponent(PresentationsFileManager.getPathToPresentation(this.presentationId), this.ENTRY_FILENAME);
			return cordova.exec(this._presentationViewingHandler, this._presentationViewingErrorHandler, this.PLUGIN_NAME, 'openPresentation', [presentationIndexPath]);
		};

		PresentationViewer.prototype._pathWithPathComponent = function(path, pathComponent){
			return "" + path + "/" + pathComponent;
		};

		PresentationViewer.prototype._presentationViewingHandler = function(message){
			switch(message){
				case this.EVENT_DID_LOAD:
					return this.trigger('didLoad', this);
				case this.EVENT_ON_COMPLETE:
					return this.trigger('complete', this);
				default:
					return this.trigger('didLoad', this);
			}
		};

		PresentationViewer.prototype._presentationViewingErrorHandler = function(message){
			return this.trigger('error', this);
		};

		PresentationViewer.prototype.closePresentation = function(){
			var deferred;
			deferred = new $.Deferred();
			cordova.exec((function(){
				return deferred.resolve();
			}), (function(error){
				return deferred.reject(error);
			}), this.PLUGIN_NAME, 'closePresentation', []);
			return deferred.promise();
		};

		PresentationViewer.prototype.getKPI = function(){
			var deferred;
			deferred = new $.Deferred();
			cordova.exec((function(kpi){
				return deferred.resolve(kpi);
			}), (function(error){
				return deferred.reject(error);
			}), this.PLUGIN_NAME, 'getKPI', []);
			return deferred.promise();
		};

		return PresentationViewer;

	})(Spine.Module);

	module.exports = PresentationViewer;

}).call(this);*/
