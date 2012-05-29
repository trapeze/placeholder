//  Trapeze.Placeholder 0.1

(function () {
    // Establish the global scope.
    var global = this;

    // Initial setup
    // =============

    var NAME    = 'Placeholder',
        VERSION = '0.1';


    // Map dependancies to local variables.
    var _           = global._,
        $           = global.jQuery,
        Modernizr   = global.Modernizr;


    // Debugging
    var Debug = global.Debug,
        debug = !!(Debug && Debug.constructor && Debug.call && Debug.apply) ? new Debug(NAME) : { },
        log   = debug.bind ? debug.bind('log') : function () { };

    if (debug.require) {
        // Test core libraries.
        debug.require('Underscore.js not found', _);
        debug.require('jQuery not found', $);

        // Test Modernizr and Modernizr feature tests.
        debug.require('Modernizr not found', Modernizr);
        debug.require('Modernizr.placeholder not found', Modernizr.placeholder);
        debug.require('Modernizr.rgba not found', Modernizr.rgba);
    }

})
