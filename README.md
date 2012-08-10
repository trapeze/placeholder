Placeholder
===========

`Placeholder` adds support for the "placeholder" input attribute in older
browsers.


Features
--------

- Takes the label of form field (input.text or textarea) and uses it as that
  field's temporary default value.
- Clears the temporary value when the form field is in focus
- If the user clear the text of the field, when the user leaves the field the
  temporary value reappears
- Optionally you can keep the label from being removed (check the api for more
  details)
- If the field has already a default value than that value will be used,
  instead of the temporary label, but the label if exists will be removed.
- When the form is submitted the temporary labels that weren't changes will be
  replaced with the fields original value, or empty if the field didn't have a
  default value.


Dependencies
------------

* [jQuery](http://jquery.com/) 1.7+
* A build of Modernizr with [tests for Input
  Attributes](http://modernizr.com/download/#-input).


Usage
-----

To use the application in your project follow the instructions below:

1. Include `dist/placeholder.min.js`.

1. Add the `placeholder` attribute to your form elements:

        <input type="text" name="name" placeholder="Your Name" />
        <textarea name="message" placeholder="Write a message"></textarea>

1. Instantiate the app:

        Trapeze.placeholder = new Trapeze.Placeholder();


Developing
----------

[Install node.js and npm](http://nodejs.org/#download).


### Running tests

Run the following from the placeholder directory.

        npm install
        open test/index.html

### Distribution

    grunt min
