// Generated on 2014-04-04 using generator-angular 0.7.1
'use strict';

module.exports = function (grunt) {

	// Load grunt tasks automatically
	require('load-grunt-tasks')(grunt);

	// Time how long tasks take. Can help when optimizing build times
	require('time-grunt')(grunt);

	// Define the configuration for all the tasks
	grunt.initConfig({

		// Project settings
		yeoman: {
			// Configurable paths
			app: require('./bower.json').appPath || 'app',
			dist: 'dist'
		},

		// Watches files for changes and runs tasks based on the changed files
		watch: {
			js: {
				files: [
					'app/modules/**/*.js',
					'<%= yeoman.app %>/version.json'
				],
				tasks: ['newer:jshint:all', 'jscs'],
				options: {
					livereload: true
				}
			},
			css: {
				files: ['app/app.less', 'app/modules/**/*.less'],
				tasks: ['concat:less', 'less:development', 'autoprefixer:dev'],
				options: {
					livereload: true
				}
			},
			bower: {
				files: ['bower.json'],
				tasks: ['wiredep'],
				options: {
					livereload: true
				}
			},
			jsTest: {
				files: ['<%= yeoman.app %>/**/*.spec.js'],
				tasks: ['newer:jshint:test', 'ngtemplates:BB8'] // , 'karma:unit'
			},
			gruntfile: {
				files: ['Gruntfile.js']
			},
			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'<%= yeoman.app %>/**/*.html',
					'<%= yeoman.app %>/**/*.{png,jpg,jpeg,gif,webp,svg}'
				]
			}
		},

		less: {
			development: {
				files: {
					'.tmp/styles/main.css': '.tmp/styles/main.concat.less'
				}
			}
		},

		concat: {
			less: {
				src: ['app/app.less', 'app/modules/**/*.less', '!app/bower_components/**/*.less'],
				dest: '.tmp/styles/main.concat.less',
				overwrite: true
			}
		},

		jscs: {
			main: {
				files: {
					src: ['app/**/*.js', '!app/bower_components/**/*.js', '!app/vendor/**/*.js']
				},
				options: {
					config: '.jscsrc',
					excludeFiles: [
						'node_modules/**',
						'app/bower_components/**',
						'app/vendor/**'
					]
				}
			}
		},

		// The actual grunt server settings
		connect: {
			options: {
				port: 9000,
				// Change this to '0.0.0.0' to access the server from outside.
				hostname: 'localhost',
				livereload: 35729
			},
			livereload: {
				options: {
					open: 'http://<%= connect.options.hostname %>:<%= connect.options.port %>',
					base: [
						'<%= yeoman.app %>',
						'.tmp'
					]
				}
			},
			test: {
				options: {
					port: 9001,
					base: [
						'test',
						'<%= yeoman.app %>',
						'.tmp'
					]
				}
			},
			dist: {
				options: {
					base: '<%= yeoman.dist %>'
				}
			},
			coverage: {
				options: {
					port: 9090,
					open: 'http://<%= connect.options.hostname %>:9090',
					keepalive: true,
					base: ['coverage/html']
				}
			},
			'test-coverage': {
				options: {
					port: 9191,
					open: 'http://localhost:9191',
					keepalive: true,
					base: ['coverage/html-test']
				}
			}
		},

		// Make sure code styles are up to par and there are no obvious mistakes
		jshint: {
			options: {
				jshintrc: '.jshintrc',
				reporter: require('jshint-stylish')
			},
			all: ['<%= yeoman.app %>/**/*.js', '!app/bower_components/**/*.js', '!app/vendor/**/*.js'],
			test: {
				options: {
					jshintrc: 'test/.jshintrc'
				},
				src: ['<%= yeoman.app %>/**/*.spec.js', '!app/bower_components/**/*.js', '!app/vendor/**/*.js']
			}
		},

		// Auto add bower
		wiredep: {
			task: {
				src: ['app/index.html']
			}
		},

		// Update app versions
		bumpup: {
			files: ['package.json', 'bower.json', '<%= yeoman.app %>/version.json']
		},

		// Empties folders to start fresh
		clean: {
			dist: {
				files: [{
					dot: true,
					src: [
						'.tmp',
						'<%= yeoman.dist %>/*',
						'!<%= yeoman.dist %>/.git*',
						'compress'
					]
				}]
			},
			server: '.tmp',
			coverage: 'coverage'
		},

		// Add vendor prefixed styles
		autoprefixer: {
			options: {
			},
			dev: {
				files: [{
					expand: true,
					src: 'main.css',
					cwd: '.tmp/styles/',
					dest: '.tmp/styles/',
					overwrite: true
				}]
			}
		},

		cssmin: {
			options: {
				noAggressiveMerging: true,
				noAdvanced: true
			}
		},

		// Renames files for browser caching purposes
		rev: {
			dist: {
				files: {
					src: [
						'<%= yeoman.dist %>/scripts/{,*/}*.js',
						'<%= yeoman.dist %>/styles/{,*/}*.css',
						'<%= yeoman.dist %>/styles/fonts/*'
					]
				}
			}
		},

		// Reads HTML for usemin blocks to enable smart builds that automatically
		// concat, minify and revision files. Creates configurations in memory so
		// additional tasks can operate on them
		useminPrepare: {
			html: '<%= yeoman.app %>/index.html',
			options: {
				dest: '<%= yeoman.dist %>'
			}
		},

		// Performs rewrites based on rev and the useminPrepare configuration
		usemin: {
			html: ['<%= yeoman.dist %>/{,*/}*.html'],
			css: ['<%= yeoman.dist %>/styles/{,*/}*.css'],
			options: {
				assetsDirs: ['<%= yeoman.dist %>']
			}
		},

		// The following *-min tasks produce minified files in the dist folder
		svgmin: {
			dist: {
				files: [{
					expand: true,
					cwd: '<%= yeoman.app %>/images',
					src: '{,*/}*.svg',
					dest: '<%= yeoman.dist %>/images'
				}]
			}
		},
		htmlmin: {
			dist: {
				options: {
					collapseWhitespace: true,
					removeComments: true,
					removeCommentsFromCDATA: true
				},
				files: [{
					expand: true,
					cwd: 'dist',
					src: ['index.html'],
					dest: 'dist',
					overwrite: true
				}]
			}
		},

		// Allow the use of non-minsafe AngularJS files. Automatically makes it
		// minsafe compatible so Uglify does not destroy the ng references
		ngAnnotate: {
			dist: {
				files: [{
					expand: true,
					cwd: '.tmp/concat/scripts',
					src: '*.js',
					dest: '.tmp/concat/scripts'
				}]
			}
		},

		// Replace Google CDN references
		cdnify: {
			dist: {
				html: ['<%= yeoman.dist %>/*.html']
			}
		},

		// Copies remaining files to places other tasks can use
		copy: {
			dist: {
				files: [{
					expand: true,
					dot: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>',
					src: [
						'*.{ico,png,txt}',
						'.htaccess',
						'*.html',
						'*.json',
						'views/{,*/}*.html',
						'images/{,*/}*.{jpg,png,jpeg,gif}',
						'fonts/*'
					]
				}, {
					expand: true,
					cwd: '.tmp/images',
					dest: '<%= yeoman.dist %>/images',
					src: ['generated/*']
				}, {
					expand: true,
					flatten: true,
					cwd: '<%= yeoman.app %>',
					dest: '<%= yeoman.dist %>/fonts',
					src: ['bower_components/font-awesome/fonts/*.*']
				}]
			},
			final: {
				files: [{
					expand: true,
					dot: true,
					cwd: '.tmp/compress',
					dest: 'dist',
					src: ['**/*']
				}]
			}
		},

		ngtemplates: {
			BB8: {
				cwd: 'app',
				src: ['**/*.html', '!index.html'],
				dest: '.tmp/scripts/templates/templates.js',
				options: {
					usemin: 'scripts/scripts.js',
					module: 'BB8.templates',
					htmlmin: {
						collapseBooleanAttributes:      true,
						collapseWhitespace:             true,
						removeAttributeQuotes:          true,
						removeComments:                 true,
						removeEmptyAttributes:          true,
						removeRedundantAttributes:      true,
						removeScriptTypeAttributes:     true,
						removeStyleLinkTypeAttributes:  true
					}
				}
			}
		},

		// e2e tests
		protractor: {
			options: {
				keepAlive: false,
				configFile: 'protractor.conf.js'
			},
			run: {}
		},

		// Run some tasks in parallel to speed up the build process
		concurrent: {
			dist: [
				'svgmin'
			]
		},

		// gzip compression
		compress: {
			dist: {
				options: {
					mode: 'gzip'
				},
				expand: true,
				cwd: 'dist/',
				src: ['**/*.js', '**/*.css'],
				dest: '.tmp/compress/'
			}
		},

		// Test settings
		karma: {
			options: {
				configFile: 'karma.conf.js',
				reportSlowerThan: 50
			},
			unit: {
				singleRun: true
			},
			debug: {
				singleRun: false
			},
			coverage: {
				singleRun: true,
				preprocessors: {
					'app/app.js': 'coverage',
					'app/modules/!(routes)/**/*.+(controller|filter|directive|service|constant|decorator|factory|value|config|run).js': 'coverage'
				},
				reporters: ['coverage'],
				coverageReporter: {
					reporters: [{
						type: 'html',
						subdir: 'html'
					}, {
						type: 'text',
						subdir: 'text'
					}]
				}
			},
			'ci-coverage': {
				singleRun: true,
				preprocessors: {
					'app/app.js': 'coverage',
					'app/modules/!(routes)/**/*.+(controller|filter|directive|service|constant|decorator|factory|value|config|run).js': 'coverage'
				},
				reporters: ['coverage'],
				coverageReporter: {
					reporters: [{
						type: 'text-summary',
						subdir: 'text-summary'
					}]
				}
			},
			'test-coverage': {
				singleRun: true,
				preprocessors: {
					'app/app.spec.js': 'coverage',
					'app/modules/**/*.spec.js': 'coverage'
				},
				reporters: ['coverage'],
				coverageReporter: {
					reporters: [{
						type: 'text-summary',
						subdir: 'text-summary-test'
					}, {
						type: 'html',
						subdir: 'html-test'
					}]
				}
			},
			'ci-test-coverage': {
				singleRun: true,
				preprocessors: {
					'app/app.spec.js': 'coverage',
					'app/modules/**/*.spec.js': 'coverage'
				},
				reporters: ['coverage'],
				coverageReporter: {
					reporters: [{
						type: 'text-summary',
						subdir: 'text-summary-test'
					}]
				}
			}
		}
	});

	grunt.registerTask('serve', function (target) {
		if (target === 'dist') {
			return grunt.task.run(['build', 'connect:dist:keepalive']);
		}

		grunt.task.run([
			'clean:server',
			'jshint:all',
			'jscs',
			'concat:less',
			'less:development',
			'wiredep',
			'autoprefixer',
			'connect:livereload',
			'watch'
		]);
	});

	grunt.registerTask('server', function () {
		grunt.log.warn('The `server` task has been deprecated. Use `grunt serve` to start a server.');
		grunt.task.run(['serve']);
	});

	grunt.registerTask('print-coverage', [
		'connect:test',
		'karma:ci-coverage'
	]);

	grunt.registerTask('print-test-coverage', [
		'connect:test',
		'karma:ci-test-coverage'
	]);

	grunt.registerTask('test', [
		'clean:coverage',
		'jshint:all',
		'jscs',
		'connect:test',
		'ngtemplates:BB8',
		'karma:unit',
		'karma:coverage',
		'karma:test-coverage'
	]);

	grunt.registerTask('coverage', [
		'clean:coverage',
		'connect:test',
		'ngtemplates:BB8',
		'karma:coverage',
		'connect:coverage'
	]);

	grunt.registerTask('coverage-test', [
		'clean:coverage',
		'connect:test',
		'ngtemplates:BB8',
		'karma:test-coverage',
		'connect:test-coverage'
	]);

	grunt.registerTask('test-ci', [
		'clean:server',
		'clean:coverage',
		'jshint:all',
		'jscs',
		'connect:test',
		'ngtemplates:BB8',
		'karma:unit',
		'concat:less',
		'less:development',
		'autoprefixer',
		'protractor:run',
		'karma:ci-coverage',
		'karma:ci-test-coverage'
	]);

	grunt.registerTask('debug', [
		'connect:test',
		'ngtemplates:BB8',
		'karma:debug'
	]);

	grunt.registerTask('e2e', [
		'clean:server',
		'concat:less',
		'less:development',
		'autoprefixer',
		'connect:test',
		'protractor:run'
	]);

	grunt.registerTask('build', [
		'clean:dist',
		'wiredep',
		'concat:less',
		'less:development',
		'useminPrepare',
		'ngtemplates',
		'concurrent:dist',
		'autoprefixer',
		'concat',
		'ngAnnotate',
		'copy:dist',
		'cssmin',
		'uglify',
		'rev',
		'usemin',
		'htmlmin'
	]);

	grunt.registerTask('default', [
		'newer:jshint',
		'jscs',
		'test',
		'build'
	]);

	grunt.registerTask('deploy:test', ['default', 'sftp-deploy:test']);
	grunt.registerTask('deploy:beta', ['default', 'sftp-deploy:beta']);
	grunt.registerTask('deploy:dev', ['default', 'sftp-deploy:dev']);

	grunt.registerTask('bump:pre', ['bumpup:prerelease']);
	grunt.registerTask('bump:bug', ['bumpup:patch']);
	grunt.registerTask('bump:minor', ['bumpup:minor']);
	grunt.registerTask('bump:major', ['bumpup:major']);
};
