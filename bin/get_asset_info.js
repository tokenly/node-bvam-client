#!/usr/bin/env node
'use strict';

var _buildClientFromCLI = require('./lib/buildClientFromCLI');

var _buildClientFromCLI2 = _interopRequireDefault(_buildClientFromCLI);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var client = (0, _buildClientFromCLI2.default)();

var assetName = process.argv[2];

if (assetName.indexOf(',') > 0) {
    assetName = assetName.split(',');
}

process.stdout.write("Fetching asset info for " + JSON.stringify(assetName) + "...\n");
client.getAssetInfo(assetName).then(function (result) {
    process.stdout.write("" + JSON.stringify(result, null, 4) + "\n");
}, function (err) {
    console.error('there was an error:', err);
});