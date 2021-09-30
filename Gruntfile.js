module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        coveralls: {
          options: {
            force: false
          },

          your_target: {
            src: 'coverage-results/extra-results-*.info',
          },
        },
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
