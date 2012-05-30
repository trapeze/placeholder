var should = chai.should();

suite('Placeholder Globals', function () {
    Trapeze.ph = new Trapeze.Placeholder();
    var ph = Trapeze.ph;

    test('Trapeze namespace should exist', function() {
        Trapeze.should.be.a('object');
    });

    test('Placeholder should be a function', function() {
        Trapeze.Placeholder.should.be.a('function');
    });

    test('Placeholder instance "ph" should be instance of Placeholder', 
    function() {
        Trapeze.Placeholder.should.be.a('function');
        ph.should.be.instanceOf(Trapeze.Placeholder);
    });
});

$(function () {
    suite('Placeholder Active', function () {
        Modernizr.input.placeholder = false;
        Trapeze.old = new Trapeze.Placeholder();

        var old = Trapeze.old,
            val = 'Placeholder',
            iclass = old.config.classnames.state_inactive,
            aclass = old.config.classnames.state_active;

        test('Elements with Placeholders should be selected', function () {
            old.$elements.should.have.length(1);
        });

        test('Element should contain value of placeholder attribute', 
        function () {
            old.$elements.attr('value').should.eql(val);
        });

        test('Element should have inactive class', function () {
            var iclass = old.config.classnames.state_inactive;

            old.$elements.hasClass(iclass).should.be.true;
        });

        test('Element should have empty value and active class when focused', 
        function () {
            old.$elements.focus();

            old.$elements.val().should.eql('');
            old.$elements.hasClass(aclass).should.be.true;
        });

        test('Element should have original value and inactive class when blurred', 
        function () {
            old.$elements.blur();

            old.$elements.val().should.eql(val);
            old.$elements.hasClass(iclass).should.be.true;
        });
    });
});
