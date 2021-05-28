"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _loaderUtils = _interopRequireDefault(require("loader-utils"));


exports.default = function (source) {
    const { getOptions } = _loaderUtils.default;
    const options = getOptions(this);

    console.log('my-loader invoked');
    console.log('source type:', typeof source);
    console.log('source:', source);
    console.log('options:', options);
    // console.log('ENV:', process.env)

    if (options.params !== undefined && options.params instanceof Object) {
        Object.keys(options.params).forEach(key => {
            source = source.replace(`[${key}]`, options.params[key]);
        })
    }

    /* if (options.params.name !== undefined && options.name !== undefined) {
        source = source.replace('[NAME]', options.params.name);
    } else {
        source = source.replace('[NAME]', '');
    } */
    return source;
}