module.exports = function(config){
    /**
    * Load in our build configuration file.
    */
    //var userConfig = require('./build.config.js');

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: '../',

        // list of files / patterns to load in the browser
        files: [
            'vendor/angular/angular.js',
            'vendor/angular-resource/angular-resource.js',
            'vendor/angular-ui-router/release/angular-ui-router.js',
            'vendor/angular-animate/angular-animate.js',
            'vendor/angular-aria/angular-aria.js',
            'vendor/angular-material/angular-material.js',
            'vendor/angular-sanitize/angular-sanitize.js',
            'vendor/angular-translate/angular-translate.js',
            'vendor/angular-mocks/angular-mocks.js',
            'vendor/angular-translate-loader-partial/angular-translate-loader-partial.js',

            'build/app/app.js',
            'build/app/app.constant.js',
            'build/app/**/*.js',

            'test/spec/**/*.js'
        ],

        // list of files to exclude
        exclude: [],

        preprocessors: {
            
        },

        proxies: {

        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['progress','spec'],

        // web server port
        port: 3000,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,

        autoWatch: true,

        // frameworks to use
        frameworks: ['jasmine'],

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera
        // - Safari (only Mac)
        // - PhantomJS
        // - IE (only Windows)
        browsers: [
            'PhantomJS'
        ],

        plugins: [
            'karma-jasmine',
            'karma-phantomjs-launcher',
            'karma-spec-reporter'
        ],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 5000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });
};
