'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = buildBVAMClient;

var _lib = require('../../lib');

var _lib2 = _interopRequireDefault(_lib);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function buildBVAMClient() {
    var CONNECTION = process.env.CONNECTION;

    var opts = {
        connectionString: CONNECTION
    };

    return _lib2.default.connect(opts);
}