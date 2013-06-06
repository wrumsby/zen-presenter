module.exports = function(grunt) {
	'use strict';

	var files = ['src/**/*.js', 'test/**/*.js'];

	grunt.initConfig({
		compass: {
			options: {
				config: './config.rb'
			}
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			files: files
		},
		shell: {
			grover: {
				command: 'grover --phantom-bin phantomjs ./test-runner.html -o ./test/grover.json --json',
				options: {
					callback: function (err, stdout, stderr, cb) {
						var fs = require('fs'),
							data;

						data = JSON.parse(fs.readFileSync('./test/grover.json'));

						console.log(stdout);
						console.error(stderr);
						cb(stderr || !(data.failed || data.errors));
					}
				}
			}
		},
		yuiConfig: {
			// this wrapper object is necessary - which seems unnecessary
			standard: {
				options: {
					dest: './yui_config.js',
					groups: {
						zen: {
							combine: false,
							base: './',
							comboBase: './',
							modules: ['src/**/*.js']
						},
						test: {
							combine: false,
							base: './',
							comboBase: './',
							modules: ['test/**/*.js']
						}
					}
				}
			}
		},
		watch: {
			scripts: {
				files: files,
				// TODO: work out a nice way to include compass watch in this
				tasks: ['shell:grover', 'jshint']
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-yui-config');
	grunt.loadNpmTasks('grunt-shell');
	// n.b. this task doesn't work on Windows
	grunt.loadNpmTasks('grunt-notify');

	grunt.registerTask('default', ['watch']);
};
