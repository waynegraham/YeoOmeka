var https = require('https'),
fs = require('fs'),
path = require('path'),
mysql = require('mysql'),
chalk = require('chalk'),
exec = require('child_process').exec,
git = require('./git'),
EventEmitter = require('events').EventEmitter,
omekaRepo = "git@github.com:omeka/Omeka.git";

function getCurrentVersion(callback) {
  var ee = new EventEmitter(),
  latestVersion = '2.1.2';

  git.listRemoteTags(omekaRepo).on('close', function(tagsList) {
    tagList = '' + tagsList;

    tagList = tagList.split('\n');
    tagList.pop();
    var lastTag = tagList.pop();
    lastTag = /\d\.\d\.\d/ig.exec(lastTag);

    if(lastTag !== null) {
      latestVersion = lastTag[0];
    }
    ee.emit('close', latestVersion);
  });

  if (typeof callback === 'function') {
    ee.on('close', callback);
    ee.on('error', callback);
  }

  return ee;
}

function loadConfig() {
  var ee = new EventEmitter();

  function readConfig(path) {
    fs.readFile(path, {encoding:'utf8'}, function(err, contents) {
      if (err) return ee.emit('error', err);
      ee.emit('done', contents);
    });
  }

  fs.exists('db.ini', function(exists) {
    if(exists) {
      readConfig('db.ini');
    } else {
      fs.exists('../db.ini', function(exists) {
        if(exists) {
          readConfig('../db.ini');
        } else {
          ee.emit('error', 'db.ini file does not exist.');
        }
      });
    }
  });

  return ee;
}

function getDbCredentials() {
  var ee = new EventEmitter();

  return ee;
}

function createDBifNotExists(callback) {
  var ee = new EventEmitter();

  return ee;
}

function getFilesDir() {
  var ee = new EventEmitter();

  return ee;
}

function installTheme(generator, config, done) {

  if (config.themeType == 'git') {
    generator.remote(config.user, config.repo, config.branch, function(err, remote) {
      remote.directory('.', path.join('themes', config.themeDir));
      done();
    });

  } else if (config.themeType == 'tar') {
    generator.tarball(config.tarballUrl, path.join('themes', config.themeDir), done);
  }

}

function setupTheme(generator, config, done) {
  console.log(chalk.green('Setting Up Theme'));

  var themePath = path.join('themes', config.themeDir),
  themePackageJson = path.join(themePath, 'package.json');

  if (fs.existsSync(themePackageJson)) {
    var oldDir = process.cwd();
    process.chdir(themePath);
    exec('npm install', function(err) {
      if (fs.existsSync('Gruntfile.js')) {
        exec('grunt setup', function(err) {
          console.log(chalk.green('Theme setup!'));
          process.chdir(oldDir);
          done();
        });
      } else {
        console.log(chalk.red('Gruntfile.js missing!'));
        process.chdir(oldDir);
        done();
      }
    });
  } else {
    console.log(chalk.red('package.json missing!'));
    done();
  }
}

function activateTheme(themeName, callback) {
  var ee = new EventEmitter();

  getDbCredentials().on('done', function(db) {

    var connection = mysql.createConnection({
      host     : db.host,
      user     : db.user,
      password : db.pass,
      database : db.name
    });

    connection.connect(function(err) {
      if (err) return ee.emit('error', err);

      var q = [
        "UPDATE " + db.prefix + "options",
        "SET option_value =  "+ mysql.escape(themeName),
        "WHERE option_name = 'template'",
        "OR option_name = 'stylesheet'"	
      ].join('\n');

      connection.query(q, function(err, rows, fields) {
        if (err) return ee.emit('error', err);
        connection.end(function() {
          ee.emit('done');
        });
      });

    });

    if (typeof callback === 'function') {
      ee.on('done', callback);
    }

  });

  return ee;
}

module.exports = {
	repo : omekaRepo,
	//getSaltKeys : getSaltKeys,
	getCurrentVersion : getCurrentVersion,
	getDbCredentials : getDbCredentials,
	createDBifNotExists : createDBifNotExists,
	loadConfig : loadConfig,
	//getContentDir : getContentDir,
	installTheme : installTheme,
	setupTheme : setupTheme,
	activateTheme : activateTheme
};
