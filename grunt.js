module.exports = function(grunt) {

    grunt.initConfig({
        lint: {
            all: ['src/placeholder.js', 'test/*.test.js']
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
                src: ['src/placeholder.js'],
                dest: 'dist/placeholder.min.js'
            }
        }
    });

    grunt.registerTask('default', 'lint test');
};
