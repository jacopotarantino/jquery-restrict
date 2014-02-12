module.exports = (grunt) ->
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    uglify:
      vendor:
        files:
          'jquery.restrict.min.js': 'jquery.restrict.js'

    # compile coffee
    coffee:
      compile:
        options:
          bare: true
          sourceMap: true
        files:
          'jquery.restrict.js': 'src/jquery.restrict.coffee'

  # modules
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-uglify'

  grunt.registerTask 'build', [
    'coffee'
    'uglify'
  ]
