var through = require("through");
var hogan = require("hogan.js");

var filenamePattern = /\.(html|hogan|hg|mustache|ms)$/;

function wrap(template) {
	return "var hogan = require(\"hogan.js\");" +
		"var n = new hogan.Template(" + template + ");" +
		"module.exports = function(data, partials) {" + 
		"return n.render(data, partials)" +
		"}";
}

module.exports = function (file, opts) {
    if (!filenamePattern.test(file)) return through();

    opts = opts || {};

    var input = "";
    var write = function (buffer) {
        input += buffer;
    }

    var end = function () {
        this.queue(wrap(hogan.compile(input, {asString:1, enableHelpers:1, fixMethodCalls:1})));
        this.queue(null);
    }

    return through(write, end);
}
