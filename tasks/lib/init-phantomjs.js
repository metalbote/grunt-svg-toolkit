/**
 * grunt-svg-toolkit
 * https://github.com/iconic/grunt-svg-toolkit
 *
 * Copyright (c) 2015 Waybury, contributors
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (data, done) {

  if (!data.phantomjs) {
    var phantom = require('phantom');
    // disable web security due to a bug in PhantomJS 2.0.0
    var options = {'web-security': 'no'};

    phantom.create().then(function(ph){
      data.logger('New PhantomJS instance created.');

      data.phantomjs = ph;
      done(null, data);
      return ph;
    }).catch(function(error) {
      console.log(error);
      ph.exit();
    });
  }
  else {
    data.logger('Using previously created PhantomJS instance.');

    done(null, data);
  }
};
