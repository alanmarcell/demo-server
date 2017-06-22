'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _AuthenticationControllerPtz = require('../users/AuthenticationControllerPtz');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var router = _express2.default.Router();

var AuthenticationRoutes = function () {
    function AuthenticationRoutes() {
        _classCallCheck(this, AuthenticationRoutes);
    }

    _createClass(AuthenticationRoutes, [{
        key: 'routes',
        get: function get() {
            router.post('/authenticateUser', _AuthenticationControllerPtz.authenticateUserPtz);
            return router;
        }
    }]);

    return AuthenticationRoutes;
}();

Object.seal(AuthenticationRoutes);
exports.default = AuthenticationRoutes;
//# sourceMappingURL=AuthenticationRoutes.js.map
//# sourceMappingURL=AuthenticationRoutes.js.map