module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        watch: {
            all: {
                options: {livereload: true},
                files: ['index.html', 'Gruntfile.js', 'js/*.js'],
                tasks: ['connect']
            }
        },

        express:{
            all:{
                options:{
                    port:8080,
                    hostname:'0.0.0.0',
                    bases:['./'],
                    livereload:true
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-express');
    grunt.registerTask('serve', ['express', 'watch']);

};