/*
 *  @name           Inline Labels
 * 
 *  @version        TODO
 *
 *  @description    Adds or Removes the default value of a text input based on focus() state.  
 *                  Optionally uses the input field's label as its default value
 *
 *  @author         Taylan Pince, Monika Piotrowicz 
 *
 */
$.namespace("trapeze.InlineLabel");

trapeze.InlineLabel = $.Class.extend({
    $form           : null,
    $field          : null,
    $label_field    : null,
    initial_value   : null,
    tmp_label       : "",
    
    focus : function(evt) {
        var $e = $(evt.currentTarget);
        if ($e.val().toLowerCase() == '['+$e.data('default_val').toLowerCase()+']') {
            $e.val('').removeClass(this.conf.class_name);
        }
    },
    
    blur : function(evt) {
        var $e = $(evt.currentTarget);
        var val = $e.val().toLowerCase(),
            default_val = $e.data('default_val').toLowerCase();
        if (val == "" || val == default_val || val == '['+default_val+']') {
            $e.val('['+$e.data('default_val')+']').addClass(this.conf.class_name);
        }
    },
    
    beforeSubmit : function(evt) {
    // recover the original value if there is no inlinelabel class and the current value is equal to the label value
        var $form = $(evt.currentTarget);
        $form.find('input.'+this.conf.class_name+', textarea.'+this.conf.class_name).each(function(i, obj){
            var $e = $(obj);
            if ($e.val() == '['+$e.data('default_val') +']') {
                if ($e.data('default_origin') == 'label') {
                    $e.val('');
                } else if ($e.data('default_origin') == 'value') {
                    $e.val($e.data('default_val'));
                }
            }
        });
    },

    setDefault : function(obj, $form) {
        var $e = $obj = $(obj);
        var value = $e
            .val($e.get(0).defaultValue) // fix a bug on page refresh
            .addClass(this.conf.class_name).data('default_origin', 'value')
            .val();
        $form = $form || $obj.parents('form');
        if ($e.val() == '') {
            var $label = $form.find('label[for="'+$e.attr('id')+'"]');
            if ($label) {
                $e.data('default_origin', 'label');
                value = $label.text();
                if (this.conf.remove_label) {
                    $label.remove();
                }
            }
        }
        $e.data('default_val', value).val('['+value+']');
        
        $e.focus($.proxy(this.focus, this))
            .blur($.proxy(this.blur, this));
    },

    setElement : function(e) {
        var $e = $(e),
            $form = null;
        if ($e.is('form')) {
            $e.find('input:text, textarea').each($.proxy(function(i, obj) {
                    this.setDefault(obj, $e);
                }, this));
            $form = $e;
        } else if ($e.is('input:text') || $e.is('textarea')) {
            $form = $e.parents('form');
            this.setDefault(e, $form);
        }
        
        if ($form) {
            $form.bind('submit', $.proxy(this.beforeSubmit, this));
        }
    },
    
    init : function(options) {
        var defaults = {
            selector    : null,
            class_name  : 'inline-label',
            remove_label: true
        }
        this.conf = $.extend({}, defaults, options);

        $(this.conf.selector).each($.proxy(function(i, e) {
            this.setElement(e);
        }, this));
    }
});