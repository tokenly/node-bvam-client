'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _restler = require('restler');

var _restler2 = _interopRequireDefault(_restler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BVAMClient = {};

var API_PREFIX = '/api/v1/';

BVAMClient.connect = function (opts) {
    opts = opts || {};
    opts.connectionString = opts.connectionString || 'https://bvam.tokenly.com';

    // ------------------------------------------------------------------------

    var bvamClient = {};

    // for a single asset name, returns the asset info
    //   for multiple asset names, returns an array of asset information
    bvamClient.getAssetInfo = function (assetNameOrNames) {
        if (Array.isArray(assetNameOrNames)) {
            return bvamClient.call('GET', 'assets', { assets: assetNameOrNames.join(',') });
        }

        return bvamClient.call('GET', 'asset/' + assetNameOrNames);
    };

    bvamClient.call = function (method, urlExtension) {
        var params = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

        return new Promise(function (resolve, reject) {
            var url = opts.connectionString + API_PREFIX + urlExtension;

            var onComplete = function onComplete(result) {
                if (result instanceof Error) {
                    reject(result);
                } else {
                    resolve(result);
                }
            };

            var options = {};
            if (method == 'GET') {
                if (params != null) {
                    options.query = params;
                }
                _restler2.default.get(url, options).on('complete', onComplete);
            }
        });
    };

    // ------------------------------------------------------------------------


    return bvamClient;
};

exports.default = BVAMClient;