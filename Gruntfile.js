module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./css/main.css": "./less/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "./css/main.min.css": "./less/main.less",
        },
      },
    },
    uglify: {
      target: {
        files: {
          "./js/main.min.js": "./js/main.js",
        },
      },
    },
  });

  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["less", "uglify"]);
};
