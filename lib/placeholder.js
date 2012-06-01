//  Trapeze.Placeholder 0.1

(function () {
    // Establish the global scope.
    var root;
    root = typeof window !== "undefined" && window !== null ? window : global;

    // Initial setup
    // =============

    var NAME    = 'Placeholder',
        VERSION = '0.1';


    // Define Trapeze namespace, if necessary
    var Trapeze = (root.Trapeze || (root.Trapeze = { }));


    // Map dependancies to local variables.
    var $           = root.jQuery,
        _           = root._,
        Modernizr   = root.Modernizr;


    // Debugging
    var Debug = root.Debug,
        debug = !!(Debug && Debug.constructor && Debug.call && Debug.apply) ? new Debug(NAME) : { },
        log   = debug.bind ? debug.bind('log') : function () { };

    if (debug.require) {
        // Test core libraries.
        debug.require('jQuery not found', $);

        // Test Modernizr and Modernizr feature tests.
        debug.require('Modernizr not found', Modernizr);
        debug.require('Modernizr.input.placeholder not found', Modernizr.input.placeholder);
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
            selector = config.selector,

            // Fix for Safari 5.1.5 and lower, where textarea placeholder
            // attributes have no word wrap and run off the ends of the input
            agent = navigator.userAgent,
            regex = /([0-9\.]+) Safari/,
            match = agent.match(regex);

        if (! Modernizr.input.placeholder) {
            this.$elements = $(selector);
            this.$form = this.$elements.parents('form');

            // Add textareas to list of elements in Safari
            if (match) {
                version = match[1].replace(/\./g,'');
                if ( version <= 515 ) {
                    this.$elements.add('textarea');
                }
            }

            this.applyPlaceholders();
        }
    };

    Placeholder.prototype.applyPlaceholders = function () {
        var classnames = this.config.classnames;

        this.$elements.each(_(function (i, obj) {
            var $obj = $(obj);

            $obj.val($obj.attr('placeholder'))
                .addClass(classnames.state_inactive);

            this.bindEvents($obj);
        }).bind(this));
    };

    Placeholder.prototype.bindEvents = function ($obj) {
        var classnames = this.config.classnames;

        $obj.on('focus', function(evt) {
            if ($obj.val() == $obj.attr('placeholder')) {
                $obj.val('').removeClass(classnames.state_inactive)
                    .addClass(classnames.state_active);
            }
        });

        $obj.on('blur', function(evt) {
            if ($obj.val() == $obj.attr('placeholder') || $obj.val() == '') {
                $obj.val($obj.attr('placeholder')).removeClass(classnames.state_active)
                    .addClass(classnames.state_inactive);
            }
        });
    };

}).call(this);

