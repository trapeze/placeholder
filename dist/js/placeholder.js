//  Trapeze.Placeholder 0.1

(function () {
    // Establish the global scope.
    var global = this;

    // Initial setup
    // =============

    var NAME    = 'Placeholder',
        VERSION = '0.1';


    // Define Trapeze namespace, if necessary
    var Trapeze = (global.Trapeze || (global.Trapeze = { }));


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
    }


    // Placeholder
    // ===========

    Placeholder = Trapeze.Placeholder = function (options) {
        var defaults = {
                selector : "[placeholder]",
                enabled  : true,

                classnames : {
                    active : 'phr',
                    state_active : 'active',
                    state_inactive : 'inactive'
                }
            },
            
            extended_defaults = this._extendDefaults();
        
        if (!_.isObject(extended_defaults)) extended_defaults = { };

        this.config     = $.extend(true, defaults, extended_defaults, options || { });
        this.enabled    = this.config.enabled;

        this._initialize();
    };

    Placeholder.prototype._extendDefaults = function () {
    };

    Placeholder.prototype._initialize = function () {
        this.selectElements();
    };

    Placeholder.prototype.selectElements = function () {
        var config = this.config,
            selector = config.selector;

        if (! Modernizr.input.placeholder) {
            this.$elements = $(selector);
        }
    };

}).call(this);

