module.exports = function(grunt) {

    grunt.initConfig({
        lint: {
            all: ['js/placeholder.js', 'test/*.test.js']
        },
        jshint: {
            options: {
                es5: true,
                expr: true
            }
        },
        docs: {
            all: ['README.md']
        },
        watch: {
            files: '<config:lint.all>',
            tasks: 'lint'
        },
        min: {
            dist: {
                src: ['js/placeholder.js'],
                dest: 'js/placeholder.min.js'
            }
        }
    });

    grunt.registerTask('default', 'lint test');
};
