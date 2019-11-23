// The wrapper function:
module.exports = function(grunt) {

	// Project and task configuration:
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json')

	});

	// Load grunt tasks and plugins:
	require('load-grunt-tasks')(grunt);

	// Custom tasks:
	grunt.registerTask('default', []);
	
};