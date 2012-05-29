var jsdom = require('jsdom').jsdom,
    placeholder = require("../dist/js/placeholder.js"),
    window = jsdom(placeholder).createWindow(),
    $ = require("jquery");

require("chai");
require("./placeholder.test.js");
