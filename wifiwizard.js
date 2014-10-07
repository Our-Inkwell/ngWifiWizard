// install  :   cordova plugin add com.pylonproducts.wifiwizard
// link     :   https://www.github.com/parsonsmatt/wifiwizard

(function() {
	'use strict';

	angular.module('ngCordova.plugins.wifiWizard', [])
		.factory('$cordovaWifiWizard', [ '$q', '$window', function ($q, $window) {
			return {
				formatWifiConfig: function(SSID, password, algorithm) {

				},

				formatWPAConfig: function(SSID, password) {

				},

				addNetwork: function() {

				},

				removeNetwork: function() {

				},

				connectNetwork: function() {

				},

				disconnectNetwork: function() {

				},

				listNetworks: function() {

				},

				getScanResults: function() {

				},

				startScan: function() {

				},

				disconnect: function() {

				}
			}
		}])

})();