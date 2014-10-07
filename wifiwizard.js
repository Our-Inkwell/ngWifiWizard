// install  :   cordova plugin add com.pylonproducts.wifiwizard
// link     :   https://www.github.com/parsonsmatt/wifiwizard

(function() {
	'use strict';

	angular.module('ngCordova.plugins.wifiWizard', [])
		.factory('$cordovaWifiWizard', [ '$q', '$window', function ($q, $window) {
			return {
				formatWifiConfig: function(SSID, password, algorithm) {
					return WifiWizard.formatWifiConfig(SSID, password, algorithm);
				},

				formatWPAConfig: function(SSID, password) {
					return WifiWizard.formatWPAConfig(SSID, password);
				},

				addNetwork: function(wifi) {
					var d = $q.defer();
					WifiWizard.addNetwork(wifi,
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				removeNetwork: function(ssid) {
					var d = $q.defer();

					WifiWizard.removeNetwork(ssid,
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				connectNetwork: function(ssid) {
					var d = $q.defer();

					WifiWizard.connectNetwork(ssid,
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				disconnectNetwork: function(ssid) {
					var d = $q.defer();

					WifiWizard.disconnectNetwork(ssid,
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				listNetworks: function() {
					var d = $q.defer();

					WifiWizard.disconnectNetwork(
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				getScanResults: function() {
					var d = $q.defer();

					WifiWizard.getScanResults(
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				startScan: function() {
					var d = $q.defer();

					WifiWizard.startScan(
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				},

				disconnect: function() {
					var d = $q.defer();

					WifiWizard.disconnect(
						function(message) {
							d.resolve(message);
						}, function(error) {
							d.reject(error);
						}
					);

					return d.promise;
				}
			}
		}])

})();