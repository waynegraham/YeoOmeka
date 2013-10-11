var omeka = require('../util/omeka');

omeka.getCurrentVersion().on('close', function(ver) {
  console.log(ver);
});

omeka.getDbCredentials().on('done', function(creds) {
	console.log(creds);
});

omeka.activateTheme('yeomeka', function() {
	console.log(arguments);
});
