module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        qunit: {
            files: ['test/index.html']
        }
    });

    // Load plugin
    grunt.loadNpmTasks('grunt-contrib-qunit');
    grunt.loadNpmTasks('grunt-coveralls');


    // Task to run tests
    grunt.registerTask('test', 'qunit');
};
