/**================================
 * Setting up the basics
 **===============================*/

// Requirements
var util    = require('util'),
    fs      = require('fs'),
    path    = require('path'),
    yeoman  = require('yeoman-generator'),
    wrench  = require('wrench'),
    chalk   = require('chalk'),
    git     = require('../util/git'),
    prompt  = require('../util/prompt'),
    omeka   = require('../util/omeka'),
    spawn   = require('../util/spawn'),
    art     = require('../util/art'),
    prompts = require('./prompts');

// Export the module
module.exports = Generator;

// Extend the base generator
function Generator(args, options, config) {
	
  yeoman.generators.Base.apply(this, arguments);

	if (typeof options.advanced !== 'undefined' && options.advanced) {
		prompt.advanced();
	}

};

util.inherits(Generator, yeoman.generators.Base);

