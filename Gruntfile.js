module.exports = function (grunt) {

	// Project configuration
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
		    options: {
		      separator: ';'
		    },
		    dist: {
		      src: ['js/js_quiz.js'],
		      dest: 'js/<%= pkg.name %>.js'
		    }
		},
		autoprefixer: {
			single_file: {
				src: 'src/css/style.css',
				dest: 'dest/css/style.css'				
			},
		},
		watch: {
			options: {
				livereload: true,
			},
			css: {
				files: ['sass/*.scss'],
				tasks: ['sass']
			},
			prefix: {
				files: ['src/css/style.css'],
				tasks: ['autoprefixer']
			}
		},
		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded',
		        sourcemap: true,
		        // compass: true
		      },
		      files: {                         // Dictionary of files
		        'src/css/style.css': 'sass/style.scss'
		      }
		    }
		},
		uglify: {
			options: {
				banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				files: {
					'js/<%= pkg.name %>.min.js' : ['js/<%= pkg.name %>.js']
				}
			}
		},
		cssmin: {
			compress: {
				files: {
					'css/style.min.css': ['css/style.css']
				}
			}
		},
		imagemin: {
			dynamic: {
				files: [{
					expand: true,
					cwd: 'img-src/',
					src: ['**/*.{png,jpg,gif}'],
					dest: 'img-dist/'
				}]
			}
		}
	});

	// Load the plugin that provides the "uglify" talk.
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	// Default task(s).
	grunt.registerTask('default', ['concat','uglify']);

};