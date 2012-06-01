Placeholder
===========

Introduction
------------

`Placeholder` adds support for the "placeholder" input attribute to older
browsers.

See [sample](docs/samples/index.html)

Features
-----------

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

Installation
------------

Checkout the app into your project's `src/js` folder and link it into
`static/lib`.

### Dependencies

In order to use the javascript `inline-label` app you will need the following:

#### JavaScript Dependencies

* jQuery 1.7+
* A build of Modernizr with [tests for Input
  Attributes](http://modernizr.com/download/#-input).

Usage
-----

To use the application in your project follow the instructions below:

1. Make sure the app and all its dependencies are included.

1. Add the `placeholder` attribute to your form elements:

    <input type="text" name="name" placeholder="Your Name" />
    <textarea name="message" placeholder="Write a message"></textarea>

1. Instantiate the app somewhere in your javascript:

    Trapeze.placeholder = new Trapeze.Placeholder();

Running the tests
-----------------

Requirements:  

* node.js
* npm packages:

        npm install -g ender
        open test/index.html
