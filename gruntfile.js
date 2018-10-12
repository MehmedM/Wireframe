module.exports = function(grunt){
	// configuring the project
	grunt.initConfig({
		//Basic settings and info about plug-ins
		pkg: grunt.file.readJSON('package.json'),

		watch: {
			sass: {
				files: 'scss/*.scss',
				tasks: ['sass', 'cssmin']
			}
		},
		sass: {
			dist: {
				option: {
					style: 'expaned'
				},
				files: {
					'css/main.css' : 'scss/style.scss'
				}
			}
		},
		cssmin: {
			my_target: {
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					ext: '.min.css'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');

	grunt.registerTask('default', ["watch"], ["sass"], ["cssmin"]);

};