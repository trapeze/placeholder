var should = chai.should();

suite('Placeholder', function () {
    Trapeze.ph = new Trapeze.Placeholder();
    var ph = Trapeze.ph;

    test('Trapeze namespace should exist', function() {
        Trapeze.should.be.a('object');
    });

    test('Placeholder should be a function', function() {
        Trapeze.Placeholder.should.be.a('function');
    });

    test('Placeholder instance "ph" should be instance of Placeholder', function() {
        Trapeze.Placeholder.should.be.a('function');
        ph.should.be.an.instanceof(Trapeze.Placeholder);
    });
});

suite('Old Browser Tests', function () {
    $(function () {
        Modernizr.input.placeholder = false;
        Trapeze.old = new Trapeze.Placeholder();
        var old = Trapeze.old;

        test('Elements with Placeholders should be selected', function () {
            old.$elements.should.have.length(1);
        });
    });
});
